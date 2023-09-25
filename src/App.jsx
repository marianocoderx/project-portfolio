import React from "react";
import NavBarComp from "./components/navigation";
import HeaderComp from "./components/header";
import ProjectsComp from "./components/projects";
import FooterComp from "./components/footer";
import ContactComp from "./components/contact";
import ServicesComp from "./components/services";
import AboutComp from "./components/about";

export default function App () {
  return (
    <>
      <NavBarComp/>
      <HeaderComp/>
      <AboutComp/>
      <ServicesComp/>
      <ProjectsComp/>
      <ContactComp/>
      <FooterComp/>
    </>
  )
}













