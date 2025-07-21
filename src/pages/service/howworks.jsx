import React from "react";

const steps = [
  {
    title: "1. Discovery",
    description:
      "We begin by diving deep into your vision and goals to fully understand the project's scope and direction.",
  },
  {
    title: "2. Planning",
    description:
      "We organize your ideas into a clear development roadmap, setting timelines, features, and priorities.",
  },
  {
    title: "3. Design & Development",
    description:
      "Our team creates modern UI/UX designs and implements scalable code with your feedback at every step.",
  },
  {
    title: "4. Launch & Support",
    description:
      "After testing, we deploy your product and provide continuous updates and technical support as needed.",
  },
];

const HowWorks = () => {
  return (
    <section className="w-[90%] mx-auto my-20 text-white text-center">
      <h2
        className="text-[36px] font-bold mb-6 h1_headding_gradient"
        data-aos="fade-up"
      >
        How We Work
      </h2>
      <p
        className="text-[18px] text-gray-300 max-w-3xl mx-auto mb-12"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Our process is designed to be efficient, collaborative, and transparent—
        guiding you from idea to launch and beyond.
      </p>

      <div
        className="flex flex-wrap justify-center gap-6"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#2a2a40] via-[#3b3b5a] to-[#2a2a40] border border-pink-500 rounded-2xl p-6 w-full sm:w-[45%] lg:w-[300px] text-left shadow-lg transition-transform duration-300 hover:scale-105 sm:flex-1"
          >
            <h3 className="text-xl font-semibold mb-2 text-pink-400">
              {step.title}
            </h3>
            <p className="text-[17px] text-gray-300 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWorks;
