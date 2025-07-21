// components/LottieAnimation.jsx
import React from "react";
import LottieTwo from "../../components/hero/lap2lottie.jsx";
import LottieThree from "../../components/hero/lap3lottie.jsx";

const LottieAnimation = () => {
  const currentDate = new Date();
  const daysSinceEpoch = Math.floor(
    currentDate.getTime() / (1000 * 60 * 60 * 24)
  );
  const index = daysSinceEpoch % 3;

  if (index === 0) return <LottieThree />;
  if (index === 1) return <LottieTwo />;
  return <LottieThree />;
};

export default LottieAnimation;
