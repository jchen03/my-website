import AboutSection from "./components/AboutSection"
import ExperienceSection from "./components/ExperienceSection"
import Navbar
 from "./components/Navbar"
import ProjectsSection from "./components/ProjectsSection"
import SkillsSection from "./components/SkillsSection"
import React, { useState } from "react";
 
export default function Home() {
  return (
   
    <div>
      <Navbar/>
      <AboutSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <ExperienceSection/>
    </div>
  )
}
