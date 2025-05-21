import About from "./About";
import Name from "../Components/Name";
import Project from "../Components/Project";
import ReachOutDirectly from "../Components/ReachOutDirectly"
import StartProject from "../Components/StartProject";
const Hero = () => {
  return (
    <div className="min-h-screen bg-[#ffffff] text-[#37352f] flex flex-col font-sans">
      <main className="flex-1 bg-[#ffffff]">
        <Name />
        <Project/>
        <ReachOutDirectly/>
        <StartProject />
      </main>
    </div>
  );
};

export default Hero;
