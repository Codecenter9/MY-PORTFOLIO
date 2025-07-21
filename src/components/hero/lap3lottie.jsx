// components/lotties/LottieThree.jsx
import React from "react";
import Lottie from "react-lottie";
import animation3 from "../../assets/Laptop3.json";

const LottieThree = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation3,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="mb-0 p-0">
      <Lottie options={defaultOptions} height={720} width={450} />
    </div>
  );
};

export default LottieThree;
