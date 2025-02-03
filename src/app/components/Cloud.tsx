'use client';
import React, { useState } from "react";
import aws from '../images/aws.png';
import azure from '../images/azure.png';
import gcp from '../images/gcptransparent.png';



import Image from 'next/image';


const CloudList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-10 p-4 flex flex-col items-center">
  <div
    className="text-lg font-semibold cursor-pointer"
    onClick={toggleDropdown}
  >
    Cloud Technologies
  </div>

  {isOpen && (
    <div className="mt-10 p-4 border border-gray-300 rounded-lg w-full max-w-4xl bg-white">
    <ul className="grid grid-cols-3 gap-4">
      <li className="flex flex-col items-center p-2 hover:bg-gray-100">
        <Image src={aws} alt="AWS" className="h-12 w-20 mb-2" />
        AWS
      </li>
      <li className="flex flex-col items-center p-2 hover:bg-gray-100">
        <Image src={azure} alt="AWS"className="h-12 w-12 mb-2" />
        Microsoft Azure
      </li>
      <li className="flex flex-col items-center p-2 hover:bg-gray-100">
        <Image src={gcp} alt="AWS" className="h-12 w-12 mb-2" />
        GCP
      </li>
    </ul>
    </div>
  )}
</div>
  );
};

export default CloudList;
