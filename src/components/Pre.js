import React, { useEffect } from "react";

function Pre(props) {
  useEffect(() => {
    const colors = ["#ff2323", "#ff0056", "#ff008d", "#e200c8", "#942cff"];
    const max = 10;
    const deg = 360 / max;

    for (let i = 1; i <= max; i++) {
      // Create a new div for each box
      const box = document.createElement("div");
      box.className = "box";

      // Create a curv div for each box
      const curv = document.createElement("div");
      curv.className = "curv";

      // Append curv to the box
      box.appendChild(curv);

      // Append box to the .main container
      document.querySelector(".main").appendChild(box);

      // Apply styles and animations
      box.style.animation = `anim2 3s infinite ${i * 80}ms`;
      curv.style.borderColor = colors[i - 1];
    }
  }, []);

  return (
    <div className="outer" style={{display:props.load ?"block":"none"}}>
      <div className="main"></div>
    </div>
  );
}

export default Pre;
