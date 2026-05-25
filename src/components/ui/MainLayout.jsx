import React, { useState, useEffect } from "react";
import Particle from "../Particle";
import ScrollToTop from "../ScrollToTop";

export default function MainLayout({ children }) {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [ping, setPing] = useState(42);

  useEffect(() => {
    const clockTimer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }, 1000);

    const pingTimer = setInterval(() => {
      setPing(Math.floor(Math.random() * (55 - 30 + 1)) + 30);
    }, 3000);

    return () => {
      clearInterval(clockTimer);
      clearInterval(pingTimer);
    };
  }, []);

  return (
    <div className="relative isolate flex min-h-screen w-full flex-col overflow-x-hidden bg-bg-base font-sans text-text-base antialiased selection:bg-primary selection:text-white pb-7">
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

      {/* Global Persistent HUD System Status Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-7 z-40 bg-bg-base/80 backdrop-blur-md border-t border-border-base/30 text-[9px] font-mono text-text-muted flex items-center justify-between px-4 sm:px-6 select-none shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
        {/* Left Side Status */}
        <div className="flex items-center gap-2">
          <span className="flex h-1.5 w-1.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
          </span>
          <span className="font-bold text-text-base">AAMIR_OS v3.1</span>
          <span className="opacity-40">|</span>
          <span className="text-code-green font-semibold">SYS: STABLE</span>
        </div>

        {/* Center System info (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-4 opacity-70">
          <span>HOST: vps-node-ap-south-1</span>
          <span className="opacity-30">//</span>
          <span>COMPILER: VITE_V6</span>
          <span className="opacity-30">//</span>
          <span>DEPLOYMENT: PRODUCTION</span>
        </div>

        {/* Right Side Stats */}
        <div className="flex items-center gap-3">
          <span className="opacity-70">RTT: <span className="text-text-base font-bold">{ping}ms</span></span>
          <span className="opacity-40">|</span>
          <span className="text-text-base font-semibold">{time}</span>
        </div>
      </div>
    </div>
  );
}
