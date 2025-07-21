import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-primary text-gray-400 py-6 mt-12">
      <div className="container mx-auto px-4 text-center text-sm">
        <p>
          © {year} <span className="text-white font-medium">Juhar</span> — All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
