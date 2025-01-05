const ProjectsSection = () => {
    return (
      <section id="projects" className="min-h-screen bg-gray-250 p-8">
        <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-20 border-t-4 border-blue-500"></div>
            <h2 className="text-4xl font-extrabold text-gray-800 mx-4">Projects</h2>
            <div className="w-20 border-t-4 border-blue-500"></div>
          </div>
        </div>
          <div className="projects-list mt-8">
            <section className="p-6 bg-white rounded-lg shadow-lg mb-6">
              <h2 className="text-2xl font-bold mb-4">UniRentals</h2>
              <div className="text-gray-700 mb-4">
                UniRentals is a platform for university students to find and list rental properties. The application allows users to search for listings, contact property owners, and manage their rental preferences. Built with React for the frontend and Django for the backend.
              </div>
              <a
                href="https://github.com/UTSCC09/project-unirentals"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 mb-4 inline-block"
              >
                Github Link
              </a>
              <div className="mt-4">
                <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold mr-2">
                  GCP
                </span>
                <span className="inline-block bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-semibold mr-2">
                  Terraform
                </span>
                <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold mr-2">
                  Github Actions
                </span>
                <span className="inline-block bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-semibold mr-2">
                  React
                </span>
                <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold">
                  Django
                </span>
                
              </div>
            </section>
            
            <section className="p-6 bg-white rounded-lg shadow-lg mb-6">
              <h2 className="text-2xl font-bold mb-4">Rendezvous-Radar</h2>
              <div className="text-gray-700 mb-4">
                Rendezvous-Radar is an application for users to find nearby activities. The application allows users to filter for specific types of activities, and it also includes a AI-powered search feature that outputs points of interests based on the user's prompt.
              </div>
              <a
                href="https://github.com/rendezvous-radar/RendezvousRadar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 mb-4 inline-block"
              >
                Github Link
              </a>
              <div className="mt-4">
                <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold mr-2">
                  AWS
                </span>
                <span className="inline-block bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-semibold mr-2">
                  Ansible
                </span>
                <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold mr-2">
                  React
                </span>
                <span className="inline-block bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-semibold">
                  Django
                </span>
                <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold">
                  Torch
                </span>
                <span className="inline-block bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-semibold">
                  BERT
                </span>
              </div>
            </section>
          </div>
        </div>
      </section>
    );
  };
  
  export default ProjectsSection;