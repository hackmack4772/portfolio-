import React from "react";

export default function ContentContainer({ children, className = "", size = "lg" }) {
  const sizeClasses = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-7xl",
    xl: "max-w-screen-2xl"
  };

  return (
    <div className={`mx-auto w-full min-w-0 ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
}
