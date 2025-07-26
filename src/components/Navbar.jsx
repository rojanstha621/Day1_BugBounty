"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Ethical HCK
        </Link>
        <div className="md:hidden" onClick={toggleMenu}>
          <button className="text-white focus:outline-none">
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6`}
        >
          <li>
            <Link href="/" className="hover:text-yellow-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/search" className="hover:text-yellow-400">
              Search
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:text-yellow-400">
              Login
            </Link>
          </li>
          <li>
            <Link href="/signup" className="hover:text-yellow-400">
              Signup
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
