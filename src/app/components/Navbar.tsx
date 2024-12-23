'use client'; // <-- Add this line at the top of your file to mark it as a Client Component

import React from 'react';

const Navbar = () => {
  // Scroll behavior handler
  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 bg-gray-800 p-8 z-10 shadow-md flex items-center justify-between">
      {/* Left side - Title */}
      <h1 className="text-white text-2xl font-bold">Jerry Chen</h1>
  
      {/* Right side - Navigation */}
      <ul className="flex space-x-8">
        <li>
          <button
            className="text-white hover:text-gray-400"
            onClick={() => handleScrollToSection('about')}
          >
            About
          </button>
        </li>
        <li>
          <button
            className="text-white hover:text-gray-400"
            onClick={() => handleScrollToSection('skills')}
          >
            Skills
          </button>
        </li>
        <li>
          <button
            className="text-white hover:text-gray-400"
            onClick={() => handleScrollToSection('projects')}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            className="text-white hover:text-gray-400"
            onClick={() => handleScrollToSection('experience')}
          >
            Experience
          </button>
        </li>
       </ul>
    </nav>
  );
};

export default Navbar;
