'use client';
import React, { useState } from "react";
import git from '../images/git.png';
import docker from '../images/docker.png';
import kubernetes from '../images/kubernetes.png';
import terraform from '../images/terraform.png';
import ansible from '../images/ansible.png';
import maven from '../images/Maven.png';
import jira from '../images/jira.png';


import Image from 'next/image';

const ToolsList = () => {
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
        Tools
      </div>

      {isOpen && (
        <div className="mt-10 p-4 border border-gray-300 rounded-lg w-full max-w-4xl bg-white">
          <ul className="grid grid-cols-3 gap-4">
            <li className="flex flex-col items-center p-2 hover:bg-gray-100">
              <Image src={git} alt="AWS" className="h-12 w-12 mb-2" />
              Git
            </li>
            <li className="flex flex-col items-center p-2 hover:bg-gray-100">
              <Image src={docker} alt="AWS" className="h-12 w-20 mb-2" />
              Docker
            </li>
            <li className="flex flex-col items-center p-2 hover:bg-gray-100">
              <Image src={kubernetes} alt="AWS" className="h-12 w-12 mb-2" />
              Kubernetes
            </li>
            <li className="flex flex-col items-center p-2 hover:bg-gray-100">
              <Image src={terraform} alt="AWS" className="h-12 w-16 mb-2" />
              Terraform
            </li>
            <li className="flex flex-col items-center p-2 hover:bg-gray-100">
              <Image src={ansible} alt="AWS" className="h-12 w-16 mb-2" />
              Ansible
            </li>
            <li className="flex flex-col items-center p-2 hover:bg-gray-100">
              <Image src={maven} alt="AWS" className="h-12 w-12 mb-2" />
              Maven
            </li>
            <li className="flex flex-col items-center p-2 hover:bg-gray-100">
              <Image src={jira} alt="AWS" className="h-12 w-12 mb-2" />
              Jira
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ToolsList;
