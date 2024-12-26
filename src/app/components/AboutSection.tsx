import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons

const AboutSection = () => {
  return (
    <section id="about" className="h-3/4 bg-gray-100 p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between animate-fadeIn">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img
            src="./favicon.ico" // Replace this with your image URL
            alt="About me"
            className="w-48 h-auto rounded-lg" // Adjust the width to make the image smaller
          />
        </div>

        <div className="w-1/2 pl-8">
          <div className="text-4xl font-bold mb-4">Hi, I am Jerry</div>
          <div className="text-xl">
          I am a computer science student studying at the University of Toronto with a strong passion for DevOps development, 
          particularly in cloud computing. I have experience working with AWS, Azure, and GCP, and I am always looking to learn more about the latest technologies.
          Outside of coding, I enjoy playing sports with friends (mainly tennis and basketball), cooking, 
          and exploring new restaurants. If you ever want to chat about anything, feel free to reach out!
          </div>
          <div className="flex justify-between space-x-4 mt-4">
            <a href="mailto:jjjchen52@gmail.com" className="text-blue-500 hover:text-blue-700">
              <FaEnvelope size={30} />
            </a>

            <a href="https://github.com/jchen03" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
              <FaGithub size={30} />
            </a>

            <a href="https://www.linkedin.com/in/jerry-chen03" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
