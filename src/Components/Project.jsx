import React from "react";
import ProjectGrid from "./ProjectGrid";

const Project = () => {
  const projects = [
    {
      heading: "WebMark",
      src: "https://images.unsplash.com/photo-1584824486539-53bb4646bdbc?auto=format&fit=crop&w=800&q=80",
      alt: "WebMark",
      href: "https://github.com/vishaldangwal",
      description:
        "Encrypted Cross-Platform Bookmark Manager Serving 100k+ Users. This project involved complex backend architecture, secure data handling, and a user-friendly frontend to manage bookmarks across various devices seamlessly. It was a challenging but rewarding experience.",
      tags: [
        { color: "green", text: "Active" },
        { color: "blue", text: "Fullstack" },
        { color: "red", text: "Security" },
      ],
    },
    {
      heading: "PulseBoard",
      src: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&w=800&q=80",
      alt: "PulseBoard",
      href: "https://github.com/vishaldangwal",
      description:
        "Real-Time Analytics Dashboard for Monitoring KPIs. Developed a robust system capable of processing large volumes of data to provide instantaneous insights into key performance indicators. The dashboard featured customizable widgets and real-time data visualization.",
      tags: [
        { color: "orange", text: "Beta" },
        { color: "blue", text: "Next.js" },
        { color: "purple", text: "Analytics" },
      ],
    },
    {
      heading: "AI Content Creator",
      src: "https://plagiarismcheck.org/blog/wp-content/uploads/2023/06/shutterstock_1331036420-scaled-1536x804.jpg",
      alt: "AI Content Creator",
      href: "https://github.com/vishaldangwal",
      description:
        "A web application leveraging large language models to generate diverse content, from articles to social media posts. Features include tone customization and plagiarism checks.",
      tags: [
        { color: "purple", text: "AI/ML" },
        { color: "green", text: "Python" },
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
