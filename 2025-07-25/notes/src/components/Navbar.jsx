import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar({ onHamburgerClick }) {
  return (
    <nav className="bg-white text-black border-b border-gray-300 flex items-center justify-between sm:justify-start p-3 sm:p-4">
      <button
        className="sm:hidden mr-3"
        onClick={onHamburgerClick}
        aria-label="Toggle sidebar"
      >
        <GiHamburgerMenu size={24} />
      </button>
      <h1 className="text-lg sm:text-xl font-bold">Creative Ink ✒️</h1>
    </nav>
  );
}

export default Navbar;
