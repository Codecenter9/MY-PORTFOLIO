// pages/MainLayout.jsx
import React from "react";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Service from "./pages/service/service";
import CTA1 from "./components/CTA/cta1";
import Contact from "./pages/contact/contact";
import Footer from "./components/footer/footer";
import AOSInitializer from "./components/AOSInitializer.jsx";
const MainLayout = () => {
  return (
    <div className="bg-primary">
      <AOSInitializer />
      <Home />
      <About />
      <CTA1 />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
};

export default MainLayout;
