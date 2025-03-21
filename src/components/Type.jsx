import React from "react";
import Typewriter from "typewriter-effect";

function Type({ typewriterStrings }) {
  return (
    <div className="typewriter-container">
      <Typewriter
        options={{
          strings: typewriterStrings,
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
