import React from "react";
import Particle from "../Particle";
import ScrollToTop from "../ScrollToTop";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-bg-base text-text-base flex flex-col relative overflow-x-hidden selection:bg-primary selection:text-white font-sans antialiased">
      {/* Dynamic Background Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none -z-10" />
      
      {/* Decorative vertical lines on left and right for desktop layout balance */}
      <div className="hidden xl:block absolute left-8 top-0 bottom-0 w-[1px] bg-border-base/10 pointer-events-none -z-10" />
      <div className="hidden xl:block absolute right-8 top-0 bottom-0 w-[1px] bg-border-base/10 pointer-events-none -z-10" />

      <Particle />
      <ScrollToTop />
      
      {/* Main Content Area */}
      <div className="flex-grow flex flex-col">
        {children}
      </div>
    </div>
  );
}
