'use client';
import React, { useState } from "react";

const FrameworksList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-4">
      <div
        className="text-lg font-semibold cursor-pointer"
        onClick={toggleDropdown}
      >
        Frameworks and Databases
      </div>

      {isOpen && (
        <div className="mt-2 p-4 border border-gray-300 rounded-md">
          <ul>
            <li className="p-2 hover:bg-gray-100">React</li>
            <li className="p-2 hover:bg-gray-100">Node.js</li>
            <li className="p-2 hover:bg-gray-100">MongoDB</li>
            <li className="p-2 hover:bg-gray-100">PostgreSQL</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default FrameworksList;
