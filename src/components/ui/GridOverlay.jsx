import React from "react";

export default function GridOverlay() {
  return (
    <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none select-none -z-10" />
  );
}
