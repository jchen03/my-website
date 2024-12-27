const ProjectsSection = () => {
    return (
      <section id="projects" className="min-h-screen bg-gray-100 p-8">
        <div className="container mx-auto">
          <div className="flex items-center text-4xl font-bold">
            <div className="flex-grow border-t border-black mx-4"></div>
            Projects
            <div className="flex-grow border-t border-black mx-4"></div>
          </div>
          <div className="projects-list mt-8">
            <section className="p-6 bg-white rounded-lg shadow-lg mb-6">
              <h2 className="text-2xl font-bold mb-4">UniRentals</h2>
              <div className="text-gray-700 mb-4">
                UniRentals is a platform for university students to find and list rental properties. The application allows users to search for listings, contact property owners, and manage their rental preferences. Built with React for the frontend and Django for the backend.
              </div>
              <a
                href="https://github.com/yourusername/UniRentals"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 mb-4 inline-block"
              >
                Github Link
              </a>
              <div className="mt-4">
                <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold mr-2">
                  React
                </span>
                <span className="inline-block bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-semibold">
                  Django
                </span>
              </div>
            </section>
            
            <section className="p-6 bg-white rounded-lg shadow-lg mb-6">
              <h2 className="text-2xl font-bold mb-4">Rendezvous-Radar</h2>
              <div className="text-gray-700 mb-4">
                Rendezvous-Radar is a platform for university students to find and list rental properties. The application allows users to search for listings, contact property owners, and manage their rental preferences. Built with React for the frontend and Django for the backend.
              </div>
              <a
                href="https://github.com/yourusername/UniRentals"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 mb-4 inline-block"
              >
                Github Link
              </a>
              <div className="mt-4">
                <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold mr-2">
                  React
                </span>
                <span className="inline-block bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-semibold">
                  Django
                </span>
              </div>
            </section>
          </div>
        </div>
      </section>
    );
  };
  
  export default ProjectsSection;