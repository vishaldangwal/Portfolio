import React from "react";
import ProjectGrid from "./ProjectGrid";

const Project = () => {
  const projects = [
    {
      heading: "Portfolio",
      src: "/Images/DigitalPortfolio.webp",
      alt: "WebMark",
      href: "https://github.com/vishaldangwal/Portfolio",
      description:
        "This is a personal portfolio website showcasing my projects, technical skills, and experience. It reflects modern frontend design principles with seamless routing and a responsive layout.",
      tags: [
        { color: "green", text: "React" },
        { color: "blue", text: "Tailwindcss" },
        { color: "red", text: "React Router Dom" },
      ],
    },
    {
      heading: "ZapCar",
      src: "/Images/Car.jpeg",
      alt: "PulseBoard",
      href: "https://github.com/vishaldangwal/ZapCar",
      description:
        "ZapCar is a full-stack car rental and booking web application that streamlines the process of discovering, booking, and paying for vehicles online. It offers real-time availability, secure payments, and a seamless user experience.",
      tags: [
        { color: "orange", text: "Full Stack" },
        { color: "blue", text: "Node.js" },
        { color: "purple", text: "MongoDB" },
      ],
    },
    {
      heading: "Currency Convertor",
      src: "/Images/Currency.webp",
      alt: "AI Content Creator",
      href: "https://github.com/vishaldangwal/currencyConvertor",
      description:
        "Currency Converter is a responsive web application that allows users to convert between various currencies in real time, providing a simple and intuitive interface for global currency exchange.",
      tags: [
        { color: "purple", text: "API" },
        { color: "green", text: "JavaScript" },
        { color: "blue", text: "React" },
      ],
    },
  ];

  return (
    <div
      id="project"
      className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto"
    >
      {" "}
      <h2 className="text-2xl font-bold mb-8 tracking-tight text-[#37352f] flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-briefcase mr-2"
        >
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
        Featured Projects
      </h2>
      <div className="flex flex-col items-center gap-8">
        {" "}
        {projects.map((project, index) => (
          <ProjectGrid key={index} {...project} />
        ))}
      </div>
      <div className="mt-10 text-center">
        {" "}
        <a
          className="inline-flex items-center text-[#37352f] hover:bg-[#f7f6f3] px-4 py-2 rounded transition-colors"
          href="https://github.com/vishaldangwal"
          target="_blank"
          rel="noopener noreferrer"
          data-discover="true"
        >
          View all work{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-right ml-1"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Project;
