/**
 * A narrow localStorage cache for third-party GET endpoints that ship no
 * cache headers of their own.
 *
 * The GitHub contribution calendar is the case this exists for. Measured:
 * github-contributions-api.jogruber.de returns no Cache-Control whatsoever,
 * so the browser re-downloads a full year of contribution data on every
 * single visit to /about. react-github-calendar also offers no way to hand
 * it pre-fetched data - its props are Omit<ActivityCalendarProps, "data">
 * and it only accepts a username - so the fetch has to be intercepted.
 *
 * Scope is deliberately tight:
 *   - only URLs matching an explicit RULES entry are touched
 *   - only GET
 *   - only 200 responses are stored
 *   - everything else is handed to the original fetch untouched
 *
 * EmailJS form submissions and Firestore traffic therefore pass straight
 * through; a POST can never be served from here.
 */

const PREFIX = "hackmack:api:v1:";

const RULES = [
  {
    // A contribution graph changes at most once a day, and a slightly stale
    // one is not worth a round trip on every page view.
    match: (url) => url.includes("github-contributions-api.jogruber.de"),
    ttl: 12 * 60 * 60 * 1000,
  },
];

const ruleFor = (url) => RULES.find((r) => r.match(url));

const read = (key, ttl) => {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const { at, body } = JSON.parse(raw);
    if (!at || typeof body !== "string") return null;
    const age = Date.now() - at;
    if (age < 0 || age > ttl) {
      localStorage.removeItem(key);
      return null;
    }
    return body;
  } catch {
    return null;
  }
};

const write = (key, body) => {
  try {
    localStorage.setItem(key, JSON.stringify({ at: Date.now(), body }));
  } catch {
    // Quota or private mode. The cache is an optimisation; losing it is fine.
  }
};

let installed = false;

export function installApiCache() {
  if (installed || typeof window === "undefined" || !window.fetch) return;
  installed = true;

  const original = window.fetch.bind(window);

  window.fetch = async (input, init) => {
    const url = typeof input === "string" ? input : input?.url ?? "";
    const method = (init?.method || (typeof input === "object" && input?.method) || "GET").toUpperCase();

    const rule = method === "GET" ? ruleFor(url) : null;
    if (!rule) return original(input, init);

    const key = PREFIX + url;

    const hit = read(key, rule.ttl);
    if (hit !== null) {
      return new Response(hit, {
        status: 200,
        headers: { "Content-Type": "application/json", "X-Cache": "hit" },
      });
    }

    const res = await original(input, init);
    if (res.ok) {
      // Read from a clone so the caller still gets an unconsumed body.
      try {
        write(key, await res.clone().text());
      } catch {
        /* body not readable as text - skip caching, return the response */
      }
    }
    return res;
  };
}

/** Drop every cached API response. Used by the admin refresh path. */
export function clearApiCache() {
  try {
    for (let i = localStorage.length - 1; i >= 0; i--) {
      const k = localStorage.key(i);
      if (k && k.startsWith(PREFIX)) localStorage.removeItem(k);
    }
  } catch {
    /* ignore */
  }
}
