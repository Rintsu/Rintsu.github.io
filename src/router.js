import React from "react";
import LandingComponent from './components/LandingComponent';
import ExperienceComponent from "./components/ExperienceComponent";
import SkillzComponent from './components/SkillzComponent';
import AboutMeComponent from './components/AboutMeComponent';

const routes = {
    "/": () => <LandingComponent />,
    "/experience": () => <ExperienceComponent />,
    "/skillz": () => <SkillzComponent />,
    "/about-me": () => <AboutMeComponent />
  };

  export default routes;