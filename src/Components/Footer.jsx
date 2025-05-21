import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-6 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-gray-500 text-center md:text-left">
          © {new Date().getFullYear() } Vishal Dangwal
        </p>

        <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-gray-500">
          {[
            { name: "Github", href: "https://github.com/vishaldangwal" },
            {
              name: "LinkedIn",
              href: "https://www.linkedin.com/in/vishal-dangwal-219759282/",
            },
            {
              name: "Instagram",
              href: "https://www.instagram.com/vis_hal945/",
            },
            { name: "Twitter", href: "https://twitter.com/vishaldangwal3" },
            { name: "LeetCode", href: "https://leetcode.com/u/coder_dangwal/" },
            { name: "Mail Me", href: "mailto:vishaldangwal09@gmail.com" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-gray-700 transition"
            >
              <span className="font-medium">{link.name}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
