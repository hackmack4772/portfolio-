import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className="typewriter-container">
      <Typewriter
        options={{
          strings: [
            "Crafting Digital Experiences",
            "MERN Stack Magician",
            "Laravel Luminary",
            "Open Source Advocate",
            "Building Tomorrow's Solutions",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
      {/* <span className="cursor">|</span> */}
    </div>
  );
}

export default Type;
