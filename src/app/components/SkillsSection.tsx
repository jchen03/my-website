import ToolsList from "./Tools";
import CloudList from "./Cloud";
import FrameworksList from "./Frameworks";


const SkillsSection = () => {
    return (
      <section id="skills" className="bg-gray-200 p-8">
        <div className="container mx-auto mt-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-20 border-t-4 border-blue-500"></div>
            <h2 className="text-4xl font-extrabold text-gray-800 mx-4">Skills</h2>
            <div className="w-20 border-t-4 border-blue-500"></div>
          </div>
        </div>
          
        <CloudList />
        <FrameworksList />
        <ToolsList />
          
        </div>
      </section>
    );
  };
  
  export default SkillsSection;