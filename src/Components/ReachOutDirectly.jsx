import React from "react";
// Import icons from Heroicons
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ChatBubbleOvalLeftEllipsisIcon
} from "@heroicons/react/24/outline";

const ReachOutDirectly = () => {
  return (
    <div className="py-4 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto">
      <div className="mt-12">
        <div className="px-6 py-5 bg-white border border-[#e6e6e6] rounded-lg hover:border-[#d0d0d0] transition-all duration-300">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-medium flex items-center gap-2 text-[#37352f]">
              <ChatBubbleOvalLeftEllipsisIcon className="h-[18px] w-[18px] text-gray-600" />{" "}
              Reach Out Directly
            </h2>
            <div className="flex gap-4">
              <a
                href="https://github.com/vishaldangwal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-800 p-1.5 hover:bg-gray-100 rounded-md transition-all"
                title="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/vishal-dangwal-219759282/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-800 p-1.5 hover:bg-gray-100 rounded-md transition-all"
                title="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://x.com/vishaldangwal3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-800 p-1.5 hover:bg-gray-100 rounded-md transition-all"
                title="X (Twitter)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Have a project in mind or want to chat? I'm always open to new
            opportunities and collaborations. Feel free to reach out directly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
            <a
              href="mailto:vishaldangwal09@gmail.com"
              className="inline-flex items-center justify-center md:justify-start bg-[#f7f7f7] px-4 py-2 rounded-md text-gray-700 hover:text-gray-900 transition-all text-sm border border-[#e6e6e6]"
              title="Email"
            >
              <EnvelopeIcon className="h-4 w-4 mr-2 text-gray-600" />{" "}
              <span className="text-sm md:text-base">vishaldangwal09@gmail.com</span> 
            </a>

            <a
              href="tel:+91 7681967426"
              className="inline-flex items-center justify-center md:justify-start bg-[#f7f7f7] px-4 py-2 rounded-md text-gray-700 hover:text-gray-900 transition-all text-sm border border-[#e6e6e6]"
              title="Phone" 
            >
              <PhoneIcon className="h-4 w-4 mr-2 text-gray-600" />{" "}
              <span className="text-sm md:text-base">+91 7681967426</span> 
            </a>

            <div
              className="inline-flex items-center justify-center md:justify-start bg-[#f7f7f7] px-4 py-2 rounded-md text-gray-700 text-sm border border-[#e6e6e6] md:col-span-2"
              title="Location"
            >
              <MapPinIcon className="h-4 w-4 mr-2 text-gray-600" />{" "}
              <span className="text-sm md:text-base">Rishikesh, Uttarakhand, India</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReachOutDirectly;