import React from "react";
import Particle from "../Particle";
import ScrollToTop from "../ScrollToTop";
import DebugHUD from "./DebugHUD";

export default function MainLayout({ children }) {
  return (
    <div className="relative isolate flex min-h-screen w-full flex-col [overflow-x:clip] bg-bg-base font-sans text-text-base antialiased selection:bg-primary selection:text-text-base">
      {/* Dynamic Background Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none -z-10" />
      
      {/* Decorative vertical lines on left and right for desktop layout balance */}
      <div className="hidden xl:block absolute left-8 top-0 bottom-0 w-[1px] bg-border-base/10 pointer-events-none -z-10" />
      <div className="hidden xl:block absolute right-8 top-0 bottom-0 w-[1px] bg-border-base/10 pointer-events-none -z-10" />

      {/* Keyboard users had no way past the six nav items on every single
          page. Visually hidden until focused. */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:border focus:border-accent focus:bg-bg-base focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-accent"
      >
        Skip to content
      </a>

      {/* Reading progress. Driven by animation-timeline: scroll(), so there
          is no scroll listener behind it. */}
      <div className="scroll-progress" aria-hidden="true" />

      <Particle />
      <ScrollToTop />
      {/* Renders nothing unless ?debug=1 or Ctrl+Shift+D. */}
      <DebugHUD />
      
      {/* Main Content Area */}
      <main id="main-content" tabIndex={-1} className="flex min-w-0 flex-1 flex-col">
        {children}
      </main>
    </div>
  );
}
