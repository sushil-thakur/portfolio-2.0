import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="bg-white shadow-lg"
      style={{
        fontFamily: "Futura, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div className="max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-800 mr-5">Anuj</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#about"
                className="text-gray-700 px-3 py-2 text-sm font-light"
              >
                About
              </a>
              <a
                href="#works"
                className="text-gray-700 px-3 py-2 text-sm font-light"
              >
                Works
              </a>
              <a
                href="#contacts"
                className="text-gray-700 px-3 py-2 text-sm font-light"
              >
                Contacts
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 border-t border-gray-200">
          <a
            href="#about"
            className="text-gray-700 block px-3 py-2 text-base font-light"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="#works"
            className="text-gray-700 block px-3 py-2 text-base font-light"
            onClick={toggleMenu}
          >
            Works
          </a>
          <a
            href="#contacts"
            className="text-gray-700 block px-3 py-2 text-base font-light"
            onClick={toggleMenu}
          >
            Contacts
          </a>
        </div>
      </div>
    </nav>
  );
}
