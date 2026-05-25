import React from "react";
import Particle from "../Particle";
import ScrollToTop from "../ScrollToTop";

export default function MainLayout({ children }) {
  return (
    <div className="relative isolate flex min-h-screen w-full flex-col overflow-x-hidden bg-bg-base font-sans text-text-base antialiased selection:bg-primary selection:text-white">
      {/* Dynamic Background Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none -z-10" />
      
      {/* Decorative vertical lines on left and right for desktop layout balance */}
      <div className="hidden xl:block absolute left-8 top-0 bottom-0 w-[1px] bg-border-base/10 pointer-events-none -z-10" />
      <div className="hidden xl:block absolute right-8 top-0 bottom-0 w-[1px] bg-border-base/10 pointer-events-none -z-10" />

      <Particle />
      <ScrollToTop />
      
      {/* Main Content Area */}
      <main className="flex min-w-0 flex-1 flex-col">
        {children}
      </main>
    </div>
  );
}
