import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import portfolios from "./portfolio";
import AngleLeft from "../assets/arrowLeft.svg";

const PortfolioDetail = () => {
  const { id } = useParams();

  const project = portfolios.find((item) => item.id === Number(id));

  const [activeImage, setActiveImage] = useState("");

  if (!project) {
    return (
      <div className="p-10 text-red-500 text-center">Project not found</div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-950 text-white p-6 lg:p-12 flex flex-col gap-8">
      <Link
        to="/"
        className="flex items-center gap-2 text-gray-300 hover:text-white transition"
      >
        <img src={AngleLeft} alt="Back" className="w-8 h-8" />
      </Link>

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-3/5 flex flex-col gap-4">
          <img
            src={activeImage || project.image}
            alt={project.title}
            className="w-full h-[200px] md:h-[400px] object-fit rounded-lg shadow-lg"
          />

          <div className="flex gap-3 flex-wrap">
            {project.additionalImages?.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`preview-${i}`}
                onClick={() => setActiveImage(img)}
                className={`h-[50px] md:h-[80px] w-[80px] md:w-[100px] object-cover rounded-md cursor-pointer border-2 transition duration-200 ${
                  activeImage === img
                    ? "border-blue-500 scale-105"
                    : "border-gray-700 hover:border-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="w-full lg:w-2/5 flex flex-col gap-5">
          <h1 className="text-3xl font-bold text-gray-100">{project.title}</h1>

          <p className="text-gray-300 leading-relaxed">{project.description}</p>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-fit px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-md text-sm transition font-mono"
            >
              Visit Site
            </a>
          )}

          <div>
            <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techs?.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-800 rounded-md text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Key Features</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              {project.otherInfo?.map((info, i) => (
                <li key={i}>{info}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
