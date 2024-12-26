import ToolsList from "../Tools";
import CloudList from "./Cloud";
import FrameworksList from "./Frameworks";

const SkillsSection = () => {
    return (
      <section id="skills" className="min-h-screen bg-gray-100 p-8">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <h2 className="text-4xl font-bold mb-4">Skills</h2>
          </div>
          
        <CloudList />
        <FrameworksList />
        <ToolsList />
          
        </div>
      </section>
    );
  };
  
  export default SkillsSection;