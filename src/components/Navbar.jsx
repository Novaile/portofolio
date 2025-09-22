import { useState } from "react";

export default function Navbar({ onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="max-w-full flex justify-end items-center space-x-8 font-medium text-white">
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium">
          <button
            onClick={() => onNavigate("about")}
            className="hover:text-indigo-600 dark:hover:text-indigo-400">
            About
          </button>
          <button
            onClick={() => onNavigate("resume")}
            className="hover:text-indigo-600 dark:hover:text-indigo-400">
            Resume
          </button>
          <button
            onClick={() => onNavigate("projects")}
            className="hover:text-indigo-600 dark:hover:text-indigo-400">
            Projects
          </button>
          <button
            onClick={() => onNavigate("contact")}
            className="hover:text-indigo-600 dark:hover:text-indigo-400">
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none">
          ☰
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-2 shadow rounded-b-lg">
          <button
            onClick={() => {
              onNavigate("about");
              setIsOpen(false);
            }}
            className="block w-full text-left hover:text-indigo-600 dark:hover:text-indigo-400">
            About
          </button>
          <button
            onClick={() => {
              onNavigate("resume");
              setIsOpen(false);
            }}
            className="block w-full text-left hover:text-indigo-600 dark:hover:text-indigo-400">
            Resume
          </button>
          <button
            onClick={() => {
              onNavigate("projects");
              setIsOpen(false);
            }}
            className="block w-full text-left hover:text-indigo-600 dark:hover:text-indigo-400">
            Projects
          </button>
          <button
            onClick={() => {
              onNavigate("contact");
              setIsOpen(false);
            }}
            className="block w-full text-left hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}

