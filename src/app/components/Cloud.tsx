'use client';
import React, { useState } from "react";

const CloudList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-4 flex flex-col items-center">
  <div
    className="text-lg font-semibold cursor-pointer"
    onClick={toggleDropdown}
  >
    Cloud Technologies
  </div>

  {isOpen && (
    <div className="mt-2 p-4 border border-gray-300 rounded-md w-full max-w-xs">
      <ul className="grid grid-cols-3 gap-4">
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
