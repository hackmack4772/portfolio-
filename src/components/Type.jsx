import React, { useMemo, useState, useEffect } from "react";
import { countRender } from "../utils/debugBus";

/**
 * Typewriter headline.
 *
 * The previous version gave the text span a hard `width: min(100%, Nch)` and
 * put the caret in a sibling span. Two things went wrong with that: at large
 * sizes a 20-character string did not fit the box, so it wrapped to two
 * lines, and because the caret sat outside the text it then floated beside
 * the whole two-line block instead of trailing the last character.
 *
 * Now an invisible sizer holds the width of the longest string so nothing
 * shifts as characters are added or removed, the live text is overlaid on
 * it, and the caret is inside that same inline flow so it always follows the
 * text. `white-space: nowrap` plus a fluid clamp() size means it scales down
 * to fit rather than ever wrapping.
 */
function Type({ typewriterStrings = ["Full-Stack Engineer", "MERN Developer"] }) {
  countRender("Type");
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const strings = useMemo(
    () => (typewriterStrings?.length ? typewriterStrings : [""]),
    [typewriterStrings]
  );

  const longest = useMemo(
    () => strings.reduce((a, b) => (b.length > a.length ? b : a), ""),
    [strings]
  );

  useEffect(() => {
    if (!strings.length) return;

    // A shorter live array can leave the index out of range.
    const fullText = strings[currentStringIndex % strings.length] ?? "";

    const handleType = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);
        if (currentText === fullText) {
          setIsDeleting(true);
          setTypingSpeed(2000);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(45);
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentStringIndex((prev) => (prev + 1) % strings.length);
          setTypingSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentStringIndex, strings, typingSpeed]);

  // Fluid rather than stepped breakpoints, so the longest string shrinks to
  // fit a narrow viewport instead of wrapping out of its box.
  const fontSize = "clamp(1.05rem, 5.4vw, 2.25rem)";

  return (
    <div className="relative inline-flex max-w-full items-center" aria-label={longest}>
      {/* Reserves the width of the longest line. Without it the block
          changes width on every keystroke and the whole row jitters. */}
      <span
        aria-hidden="true"
        className="invisible whitespace-nowrap font-mono font-bold leading-tight"
        style={{ fontSize }}
      >
        {longest}
      </span>

      <span
        className="absolute inset-0 flex items-center whitespace-nowrap font-mono font-bold leading-tight select-none"
        style={{ fontSize }}
      >
        <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          {currentText}
        </span>
        {/* Inside the flow, so it always trails the final character. */}
        <span
          aria-hidden="true"
          className="ml-[0.12em] inline-block h-[1.05em] w-[0.09em] shrink-0 translate-y-[0.06em] bg-accent animate-cursor-blink"
        />
      </span>
    </div>
  );
}

export default Type;
