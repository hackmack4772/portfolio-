import React, { useState, useEffect } from "react";

function Type({ typewriterStrings = ["Full-Stack Engineer", "MERN Developer"] }) {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    if (!typewriterStrings || typewriterStrings.length === 0) return;

    const fullText = typewriterStrings[currentStringIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing text
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100); // Constant speed for typing

        if (currentText === fullText) {
          // Finished typing, pause before deleting
          setIsDeleting(true);
          setTypingSpeed(2000); // Pause time at the end
        }
      } else {
        // Deleting text
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(45); // Faster speed for deleting

        if (currentText === "") {
          setIsDeleting(false);
          // Move to next string
          setCurrentStringIndex((prevIndex) => (prevIndex + 1) % typewriterStrings.length);
          setTypingSpeed(500); // Pause time before starting to type next word
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentStringIndex, typewriterStrings, typingSpeed]);

  return (
    <div className="flex items-center text-left">
      <span className="text-xl md:text-3xl lg:text-4xl font-mono font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent select-none min-h-[40px]">
        {currentText}
      </span>
      <span className="text-xl md:text-3xl lg:text-4xl font-mono font-bold text-accent animate-[pulse_1s_infinite] ml-1">
        |
      </span>
    </div>
  );
}

export default Type;
