import React from "react";
import NavBarComp from "./components/navigation";
import HeaderComp from "./components/header";
import FooterComp from "./components/footer";
import ContactComp from "./components/contact";
import ServicesComp from "./components/services";
import ProjectsComp from "./components/projects";
import AboutComp from "./components/about";
import ToolsComp from "./components/tools";

export default function App () {
  return (
    <>
      <NavBarComp/>
      <HeaderComp/>
      <AboutComp/>
      <ToolsComp/>
      {/*<ServicesComp/>*/}
      {/*<ProjectsComp/>*/}
      <ContactComp/>
      <FooterComp/>
    </>
  )
}













