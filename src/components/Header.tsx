import React from 'react';
import { Code, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2 text-indigo-600">
          <Code size={24} />
          <span className="font-bold text-xl">DevPortfolio</span>
        </a>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-600 hover:text-indigo-600">About</a>
          <a href="#skills" className="text-gray-600 hover:text-indigo-600">Skills</a>
          <a href="#projects" className="text-gray-600 hover:text-indigo-600">Projects</a>
          <a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
        </nav>
        <button className="md:hidden">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;