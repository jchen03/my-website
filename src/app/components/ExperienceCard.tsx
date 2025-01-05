// Add the "use client" directive at the top to ensure client-side rendering
"use client";

import { useState } from 'react';

// Define TypeScript interface for the props
interface ExperienceCardProps {
  jobTitle: string;
  companyName: string;
  description: string;
  techTags: string[];
}

function ExperienceCard({ jobTitle, companyName, description, techTags }: ExperienceCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-center items-center ">
      <div 
        className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer w-1/2"
        onClick={toggleDescription}
      >
      <div className="text-2xl font-semibold text-gray-900 mb-2 text-center">{jobTitle}</div>
      <div className="text-base font-bold text-gray-700 mb-4 text-center opacity-60">{companyName}</div>

      {isOpen && (
        <p className="text-gray-600 mb-6">{description}</p>
      )}

      <div className="flex flex-wrap gap-3 justify-center">
        {techTags.map((tag, index) => (
          <span key={index} className="inline-block bg-blue-100 text-blue-800 rounded-full px-4 py-2 text-sm font-semibold">
            {tag}
          </span>
        ))}
      </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
