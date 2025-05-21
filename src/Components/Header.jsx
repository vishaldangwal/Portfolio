import React from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed top-0 z-50 bg-white py-4 transition-shadow duration-300 w-full border-b border-gray-100">
      <nav className="w-full max-w-[90%] mx-auto px-4 flex justify-between items-center md:flex-row">
        <a className="flex items-center h-[40px] overflow-hidden" href="/">
          <img
            src="Images/VishalLogo.png"
            alt="My Portfolio Logo"
            className="h-[120%] w-auto object-cover scale-125"
          />
        </a>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-600 hover:text-gray-800 focus:outline-none focus:shadow-outline"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        <div
          className={`
            flex flex-col md:flex-row md:items-center md:space-x-4
            ${
              isMobileMenuOpen
                ? "block absolute top-full left-0 w-full bg-white border-b border-gray-100"
                : "hidden md:flex"
            }
          `}
        >
          <a
            className="flex items-center px-3 py-1.5 rounded-md transition-colors text-[#6b6b6b] hover:bg-[#f7f6f3] hover:text-[#37352f] md:hover:bg-gray-50 md:hover:text-[#37352f]"
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="mr-1.5">
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
              >
                <path d="M12 3L3 10h3v10h6v-6h0v6h6V10h3L12 3z" />
              </svg>
            </span>
            <span>Home</span>
          </a>

          <a
            className="flex items-center px-3 py-1.5 rounded-md transition-colors duration-300 ease-in-out text-[#6b6b6b] hover:bg-gray-50 hover:text-[#37352f]"
            href="/#project"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="mr-1.5">
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
              >
                <rect x="3" y="7" width="18" height="13" rx="2" />
                <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              </svg>
            </span>
            <span>Project</span>
          </a>

          <a
            className="flex items-center px-3 py-1.5 rounded-md transition-colors text-[#6b6b6b] hover:bg-gray-50 hover:text-[#37352f]"
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="mr-1.5">
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
              >
                <circle cx="12" cy="7" r="4" />
                <path d="M5.5 21v-1a6.5 6.5 0 0 1 13 0v1" />
              </svg>
            </span>
            <span>About</span>
          </a>

          <a
            className="flex items-center px-3 py-1.5 rounded-md transition-colors text-[#6b6b6b] hover:bg-gray-50 hover:text-[#37352f]"
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="mr-1.5">
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
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <path d="M7 10h10" />
              </svg>
            </span>
            <span>Contact</span>
          </a>

          <a
            className="flex items-center px-3 py-1.5 rounded-md transition-colors duration-300 ease-in-out text-[#6b6b6b] hover:bg-gray-50 hover:text-[#37352f]"
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="mr-1.5">
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
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </span>
            <span>Resume</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
