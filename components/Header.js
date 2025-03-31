"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white sticky w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center space-x-3">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900">Brand</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
          aria-controls="navbar-menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu with Drop-down Animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-md md:hidden"
            >
              <ul className="flex flex-col p-4 space-y-2">
                {["Home", "Blog", "Blog", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${(item==='Home')?'/':item.toLowerCase()}`}
                      className="block py-2 px-4 text-gray-900 hover:bg-gray-100"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:space-x-8">
          {["Home", "Blog", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${(item==='Home')?'/':item.toLowerCase()}`}
              className="text-gray-900 hover:text-blue-700"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
