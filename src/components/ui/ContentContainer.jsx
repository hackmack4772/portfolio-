import React from "react";

export default function ContentContainer({ children, className = "", size = "lg" }) {
  const sizeClasses = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-7xl",
    xl: "max-w-full"
  };

  return (
    <div className={`w-full mx-auto ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
}
