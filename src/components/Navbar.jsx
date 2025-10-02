import { useState } from "react";
import { useModal } from "../contexts/ModalContext";

export default function Navbar() {
  const { setActiveModal } = useModal();

  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-md bg-white/95 border-b border-white/20 shadow-lg ${
        open ? "" : "rounded-b-2xl"
      }`}
    >
      <div className="flex justify-between items-center px-3 py-4">
        <div className="logo">
          <a
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
          >
            Abraham Efraim
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#projects"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group"
          >
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <button
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium hover:cursor-pointer"
            onClick={() => setActiveModal("contact")}
          >
            Contact Me
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300 p-1"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 6l12 12M18 6L6 18"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div className="relative md:hidden">
        <div
          id="mobile-nav"
          className={[
            "absolute inset-x-0 top-full backdrop-blur-md",
            "bg-white/95 rounded-b-xl shadow-md",
            "origin-top transform transition duration-200", // animation
            open
              ? "opacity-100 scale-y-100"
              : "opacity-0 scale-y-0 pointer-events-none",
            "overflow-hidden",
          ].join(" ")}
        >
          <ul className="py-3 px-6 space-y-1">
            {[
              ["Projects", "#projects"],
              ["About", "#about"],
            ].map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="block py-2 text-gray-800 hover:text-orange-500 active:scale-95"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <button
                className="block py-2 text-gray-800 hover:text-orange-500 active:scale-95 hover:cursor-pointer"
                onClick={() => {
                  setOpen(!open);
                  setActiveModal("contact");
                }}
              >
                Contact Me
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
