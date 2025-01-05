import ExperienceCard from './ExperienceCard';

function ExperienceSection() {
  const experiences = [
    {
      jobTitle: "Software Developer Intern",
      companyName: "Treasury Board Secretariat",
      description: "Developed and maintained web applications for clients in the healthcare industry. Collaborated with a team of developers to build and deploy new features using React for the frontend and Node.js for the backend.",
      techTags: ["React", "Node.js"],
    },
    {
      jobTitle: "Frontend Developer",
      companyName: "Ontario Securities Commission",
      description: "Designed and maintained web applications aimed at enhancing the user experience in the finance sector. Worked closely with cross-functional teams to implement interactive UI components using React and Node.js.",
      techTags: ["Angular", "Node.js"],
    },
  ];

  return (
    <section id="experience" className="min-h-screen bg-gray-300 py-16">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-20 border-t-4 border-blue-500"></div>
            <h2 className="text-4xl font-extrabold text-gray-800 mx-4">Work Experience</h2>
            <div className="w-20 border-t-4 border-blue-500"></div>
          </div>
          <p className="text-lg text-gray-600">Here&apos;s a look at the roles I&apos;ve held during my career.</p>
        </div>

        {/* Render Experience Cards */}
        <div className="space-y-10">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              jobTitle={experience.jobTitle}
              companyName={experience.companyName}
              description={experience.description}
              techTags={experience.techTags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
