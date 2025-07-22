import { useEffect } from "react";
import styles from "../style";
import AOSInitializer from "../components/AOSInitializer.jsx";
import Contact from "../pages/contact/contact";
import Footer from "../components/footer/footer";
import { Link } from "react-router-dom";
import AngleLeft from "../assets/arrowLeft.svg";
import UserImage from "../assets/userimage.webp";

const BubbleBackground = () => (
  <svg
    className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
    viewBox="0 0 800 600"
    preserveAspectRatio="xMidYMid slice"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <radialGradient id="bubbleGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ffb3d9" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#99e6ff" stopOpacity="0.1" />
      </radialGradient>
    </defs>

    {[...Array(12)].map((_, i) => (
      <circle
        key={i}
        cx={Math.random() * 800}
        cy={Math.random() * 600}
        r={30 + Math.random() * 70}
        stroke="url(#bubbleGradient)"
        strokeWidth="1"
        fill="url(#bubbleGradient)"
        opacity="0.25"
        style={{
          animation: `float${i % 3} 20s ease-in-out infinite`,
        }}
      />
    ))}
  </svg>
);

const AboutMe = () => {
  return (
    <section className="aboutme_section relative overflow-hidden bg-primary">
      <AOSInitializer />

      {/* Top Section Background */}
      <div className="relative z-10 pb-0 ">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <BubbleBackground />
        </div>

        <div className="w-full p-6 pb-0 relative z-10">
          <Link
            to="/"
            className="text-gradient flex items-center mb-4 font-medium"
          >
            <img src={AngleLeft} alt="Back" className="w-10 h-10 mr-2" />
          </Link>

          <div className="landing_image flex items-center flex-col justify-center text-center">
            <img
              loading="lazy"
              src={UserImage}
              alt="Juhar Endris"
              width={450}
              height={250}
            />
          </div>
        </div>
      </div>

      <div className="bg-primary w-full flex justify-center pt-16 px-6">
        <div className="details w-full md:w-[75%] text-white space-y-6 pb-10">
          <h1 className="text-2xl font-bold h3_heading_gradient">Details</h1>

          <p className="text-base leading-7 text-gray-300">
            My name is Juhar Endris, and I completed my degree in Electrical and
            Computer Engineering(Computer Engineering), from Hawassa University
            in the academic year 2017/2025. During my studies, I explored a wide
            range of topics, from computer architecture to advanced programming.
            This technical foundation enabled me to understand how software
            interacts deeply with hardware systems. I enjoy tackling complex
            challenges and translating ideas into functional, efficient
            solutions.
          </p>

          <p className="text-base leading-7 text-gray-300">
            I am a passionate, self-driven developer who thrives on turning
            concepts into real-world applications. My core interests lie in
            full-stack web development, clean UI design, and the art of building
            scalable systems. I’m always eager to explore emerging technologies
            and apply best practices to every line of code I write. Beyond
            coding, I value teamwork, continuous learning, and creating
            meaningful user experiences. I'm excited to contribute to impactful
            projects and grow within a vibrant tech community.
          </p>
        </div>
      </div>

      <Contact />
      <Footer />
    </section>
  );
};

export default AboutMe;
