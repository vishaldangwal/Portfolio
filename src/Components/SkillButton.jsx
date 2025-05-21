import React from "react";

const SkillButton = ({ index, skill }) => {
  return (
    <div key={index} className="inline-flex gap-10 items-center">
      <span className="text-gray-800 capitalize font-medium text-base">
        {skill}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        className="text-gray-800"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 12l3 3 5-5"
        />
      </svg>
    </div>
  );
};

export default SkillButton;
