import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

export default function Github() {
  return (
    <div>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Days I <strong className="purple">Code</strong>
        </h1>
        <GitHubCalendar
          username="hackmack4772"
          blockSize={15}
          blockMargin={5}
          color="#FFFFFF" // White color for contributions
          fontSize={16}
          showWeekdayLabels={true} // Show weekday labels (Mon, Tue, etc.)
          dateFormat="yyyy-MM-dd" // Date format for tooltip
          tooltip={"{{count}} contributions on {{date}}"} // Tooltip format
          theme={{
            level4: "#000000", // Black for the highest activity
            level3: "#333333", // Dark gray
            level2: "#666666", // Lighter gray
            level1: "#999999", // Even lighter gray
            level0: "#e0e0e0", // Light gray for no activity
          }}
          hideColorLegend={true} // Hide the color legend to keep it clean
          hideMonthLabels={true} // Hide month labels to avoid clutter
          hideTotalCount={true} // Hide the total count to keep it neat
        />
      </Row>
      <Row style={{ justifyContent: "center", padding: "20px" }}>
        <img
          src="https://github-readme-stats.vercel.app/api?username=hackmack4772&show_icons=true&theme=radical"
          alt="GitHub Stats"
          style={{
            maxWidth: "400px",
            margin: "10px",
            borderRadius: "10px",
            border: "1px solid #ccc",
          }}
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=hackmack4772&layout=compact&theme=radical"
          alt="Top Languages"
          style={{
            maxWidth: "400px",
            margin: "10px",
            borderRadius: "10px",
            border: "1px solid #ccc",
          }}
        />
      </Row>
    </div>
  );
}
