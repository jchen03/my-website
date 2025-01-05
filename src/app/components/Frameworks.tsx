'use client';
import React, { useState } from "react";
import react from '../images/react.png';
import angular from '../images/angular.png';
import django from '../images/django.png';
import node from '../images/node.png';
import spring from '../images/spring.png';
import postgres from '../images/postgres.png';
import mongo from '../images/mongo.png';
import Image from 'next/image';

const FrameworksList = () => {
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
        Frameworks and Databases
      </div>

      {isOpen && (
        <div className="mt-10 p-4 border border-gray-300 rounded-md w-full max-w-4xl">
          <ul className="grid grid-cols-3 gap-4">
            <li className="flex flex-col items-center p-2 hover:bg-gray-100">
              <Image src={react} alt="AWS" className="h-12 w-16 mb-2" />
              React
            </li>
            <li className="flex flex-col items-center p-2 hover:bg-gray-100">
              <Image src={angular} alt="AWS" className="h-12 w-16 mb-2" />
              Angular
            </li>
            <li className="flex flex-col items-center p-2 hover:bg-gray-100">
              <Image src={django} alt="AWS" className="h-12 w-24 mb-2" />
              Django
            </li>
            <li className="flex flex-col items-center p-2 hover:bg-gray-100">
              <Image src={node} alt="AWS" className="h-12 w-20 mb-2" />
              NodeJS
            </li>
            <li className="flex flex-col items-center p-2 hover:bg-gray-100">
              <Image src={spring} alt="AWS" className="h-12 w-12 mb-2" />
              Spring
            </li>
            <li className="flex flex-col items-center p-2 hover:bg-gray-100">
              <Image src={postgres} alt="AWS" className="h-12 w-12 mb-2" />
              PostgreSQL
            </li>
            <li className="flex flex-col items-center p-2 hover:bg-gray-100">
              <Image src={mongo} alt="AWS" className="h-12 w-12 mb-2" />
              MongoDB
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default FrameworksList;
