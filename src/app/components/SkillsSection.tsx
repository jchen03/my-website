import ToolsList from "./Tools";
import CloudList from "./Cloud";
import FrameworksList from "./Frameworks";


const SkillsSection = () => {
    return (
      <section id="skills" className="bg-gray-200 p-8">
        <div className="container mx-auto mt-10">
          <div className="flex items-center text-4xl font-bold">
            <div className="flex-grow border-t border-black mx-4"></div>
            Skills
            <div className="flex-grow border-t border-black mx-4"></div>
          </div>
          
        <CloudList />
        <FrameworksList />
        <ToolsList />
          
        </div>
      </section>
    );
  };
  
  export default SkillsSection;