import React from "react";

const TechButton = ({ label, icon: Icon }) => {
  return (
    <span className="px-3 py-1 bg-gray-50 text-gray-800 text-sm rounded-md border border-gray-200 hover:bg-gray-100 transition-colors flex items-center">
      {Icon && <Icon className="w-4 h-4 mr-1" />} {label}
    </span>
  );
};

export default TechButton;
