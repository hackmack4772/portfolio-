import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { useDarkMode } from "../Context/DarkModeContext";
import { Github as GitIcon, BarChart2, Code2 } from "lucide-react";

export default function Github() {
  const { isDarkMode } = useDarkMode();
  const [calendarLoaded, setCalendarLoaded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getBlockSize = () => {
    if (windowWidth <= 480) return 8;
    if (windowWidth <= 768) return 10;
    return 12;
  };

  const calendarTheme = isDarkMode
    ? { dark: [
        "rgba(255, 255, 255, 0.05)",
        "rgba(3, 163, 165, 0.3)",
        "rgba(3, 163, 165, 0.6)",
        "#03a3a5",
        "#0cfbff"
      ] }
    : { light: [
        "rgba(0, 0, 0, 0.05)",
        "rgba(143, 16, 183, 0.3)",
        "rgba(143, 16, 183, 0.6)",
        "#7a0d9b",
        "#8f10b7"
      ] };

  // GitHub Stats card query parameters
  const statsTheme = isDarkMode ? "react" : "default";
  const bgColor = isDarkMode ? "111420" : "ffffff";
  const textColor = isDarkMode ? "f5f5f5" : "1e2530";
  const titleColor = isDarkMode ? "0cfbff" : "03a3a5";
  const iconColor = isDarkMode ? "8f10b7" : "7a0d9b";

  return (
    <div id="github-section" className="w-full relative py-12 px-4 max-w-6xl mx-auto">
      
      {/* Background soft glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="flex flex-col items-center justify-center text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-text-base">
          Days I <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Code</span>
        </h2>
        <p className="text-sm text-text-muted mt-2">
          My GitHub Contribution Journey & Coding Stats
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-4" />
      </div>

      <div className="grid grid-cols-1 gap-8">
        
        {/* Calendar Card */}
        <div className="glass-panel p-6 rounded-2xl border border-border-base/50 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-50" />
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <GitIcon className="w-4 h-4" />
            </div>
            <h3 className="text-base font-semibold text-text-base">Contribution Calendar</h3>
          </div>

          <div className="flex justify-center overflow-x-auto py-2 no-scrollbar">
            <GitHubCalendar
              username="hackmack4772"
              blockSize={getBlockSize()}
              blockMargin={windowWidth <= 480 ? 3 : 5}
              fontSize={windowWidth <= 480 ? 11 : 13}
              showWeekdayLabels={windowWidth > 480}
              dateFormat="yyyy-MM-dd"
              onDataReady={() => setCalendarLoaded(true)}
              theme={calendarTheme}
              hideColorLegend={windowWidth <= 576}
              hideMonthLabels={windowWidth <= 480}
              hideTotalCount={windowWidth <= 480}
            />
          </div>
        </div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Main Stats */}
          <div className="glass-panel p-6 rounded-2xl border border-border-base/50 shadow-xl relative overflow-hidden group flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-accent opacity-50" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <BarChart2 className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold text-text-base">GitHub Stats Profile</h3>
            </div>

            <div className="flex items-center justify-center py-4">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=hackmack4772&show_icons=true&theme=${statsTheme}&bg_color=${bgColor}&title_color=${titleColor}&icon_color=${iconColor}&text_color=${textColor}&hide_border=true&count_private=true`}
                alt="GitHub Stats"
                className="max-w-full h-auto rounded-lg select-none"
                loading="lazy"
              />
            </div>
          </div>

          {/* Card 2: Top Languages */}
          <div className="glass-panel p-6 rounded-2xl border border-border-base/50 shadow-xl relative overflow-hidden group flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary opacity-50" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <Code2 className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold text-text-base">Top Languages Used</h3>
            </div>

            <div className="flex items-center justify-center py-4">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=hackmack4772&layout=compact&theme=${statsTheme}&bg_color=${bgColor}&title_color=${titleColor}&text_color=${textColor}&hide_border=true`}
                alt="Top Languages"
                className="max-w-full h-auto rounded-lg select-none"
                loading="lazy"
              />
            </div>
          </div>

        </div>

        {/* Footer Link */}
        <div className="flex justify-center mt-6">
          <a
            href="https://github.com/hackmack4772"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider text-text-base glass-panel border border-border-base hover:border-primary/50 hover:shadow-[0_0_15px_rgba(143,16,183,0.15)] transition-all duration-300 cursor-pointer"
          >
            <GitIcon className="w-4 h-4 text-primary" />
            <span>Visit my GitHub Profile</span>
          </a>
        </div>

      </div>
    </div>
  );
}
