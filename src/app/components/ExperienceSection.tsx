const ExperienceSection = () => {
    return (
      <section id="experience" className="min-h-screen bg-gray-100 p-8">
        <div className="container mx-auto">
          <div className="flex items-center text-4xl font-bold">
            <div className="flex-grow border-t border-black mx-4"></div>
            Work Experience
            <div className="flex-grow border-t border-black mx-4"></div>
          </div>
          <div className="experience-list mt-8">
            <section className="p-6 bg-white rounded-lg shadow-lg mb-6">
              <h2 className="text-2xl font-bold mb-4">Software Engineer</h2>
              <div className="text-gray-700 mb-4">
                Developed and maintained web applications for clients in the healthcare industry. Worked with a team of developers to build and deploy new features. Used React for the frontend and Node.js for the backend.
              </div>
              <div className="mt-4">
                <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold mr-2">
                  React
                </span>
                <span className="inline-block bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-semibold">
                  Node.js
                </span>
              </div>
            </section>
            
            <section className="p-6 bg-white rounded-lg shadow-lg mb-6">
              <h2 className="text-2xl font-bold mb-4">Frontend Developer</h2>
              <div className="text-gray-700 mb-4">
                Developed and maintained web applications for clients in the healthcare industry. Worked with a team of developers to build and deploy new features. Used React for the frontend and Node.js for the backend.
              </div>
              <div className="mt-4">
                <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold mr-2">
                  React
                </span>
                <span className="inline-block bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-semibold">
                  Node.js
                </span>
              </div>
            </section>
          </div>
        </div>
      </section>
    );
  };
  
  export default ExperienceSection;