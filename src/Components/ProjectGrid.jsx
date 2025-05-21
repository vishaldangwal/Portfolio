import React from 'react';
import Button from './Button';

const ProjectGrid = ({ heading, src, alt, href, description, tags = [] }) => {
  return (
    <a
      className="group relative block
                 rounded-3xl overflow-hidden
                 bg-white border border-gray-300 // Removed shadow and hover effects here
                 cursor-pointer p-6
                 w-full max-w-3xl
                "
      href={href}
      data-discover="true"
    >
      <div className="flex items-center gap-8 flex-col md:flex-row">
        <div className="flex-grow">
          <h3 className="font-bold text-xl md:text-2xl text-gray-800 mb-2 leading-tight">
            {heading}
          </h3>
          <p className="text-sm md:text-base text-gray-600 mb-4">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, index) => (
              <Button key={index} color={tag.color} text={tag.text} />
            ))}
          </div>
        </div>

        <div className="flex-shrink-0 w-64 h-40 md:w-80 md:h-56 bg-gray-100 rounded-xl relative overflow-hidden">
          <div className="absolute inset-0 border border-gray-300 rounded-xl before:absolute before:top-2 before:left-1/2 before:-translate-x-1/2 before:w-24 before:h-1 before:bg-gray-300 before:rounded-full after:hidden md:after:block after:absolute after:bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-3 after:h-3 after:bg-gray-300 after:rounded-full"></div>
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover rounded-xl p-4"
          />
        </div>
      </div>
    </a>
  );
};

export default ProjectGrid;