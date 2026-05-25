import React, { useMemo, useState, useEffect } from "react";

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

  const longestStringLength = useMemo(
    () => Math.max(...(typewriterStrings?.length ? typewriterStrings : [""]).map((item) => item.length)),
    [typewriterStrings]
  );

  return (
    <div className="inline-flex min-h-10 items-center justify-center text-center md:min-h-12">
      <span
        className="inline-block max-w-full bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-center font-mono text-xl font-bold text-transparent select-none md:text-3xl lg:text-4xl"
        style={{ width: `min(100%, ${longestStringLength}ch)` }}
      >
        {currentText}
      </span>
      <span className="ml-1 font-mono text-xl font-bold text-accent animate-[pulse_1s_infinite] md:text-3xl lg:text-4xl">
        |
      </span>
    </div>
  );
}

export default Type;
