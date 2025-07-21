// components/lotties/LottieTwo.jsx
import React from "react";
import Lottie from "react-lottie";
import animation2 from "../../assets/Laptop2.json";

const LottieTwo = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="mb-20 py-6">
      <Lottie options={defaultOptions} height={650} width={485} />
    </div>
  );
};

export default LottieTwo;
