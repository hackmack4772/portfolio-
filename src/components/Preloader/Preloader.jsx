import React from "react";
import "./loader.css";
import loader from "../../Assets/lootie/loader.json";
import Lottie from "react-lottie";

function Preloader({ isLoading }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className="preloader-container"
      style={{ display: isLoading ? "flex" : "flex" }}
    >
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}

export default Preloader;
