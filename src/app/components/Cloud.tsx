'use client';
import React, { useState } from "react";

const CloudList = () => {
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
        Cloud Technologies
      </div>

      {isOpen && (
        <div className="mt-2 p-4 border border-gray-300 rounded-md">
          <ul>
            <li className="p-2 hover:bg-gray-100">AWS</li>
            <li className="p-2 hover:bg-gray-100">Microsoft Azure</li>
            <li className="p-2 hover:bg-gray-100">GCP</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CloudList;
