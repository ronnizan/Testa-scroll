import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/Info-section/Data";
import InfoSection from "../components/Info-section/InfoSection";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services";
import Sidebar from "../components/Sidebar/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
      <Navbar toggle={toggle}></Navbar>
      <Hero></Hero>
      <InfoSection {...homeObjOne}></InfoSection>
      <InfoSection {...homeObjTwo}></InfoSection>
      <Services></Services>

      <InfoSection {...homeObjThree}></InfoSection>
      <Footer />
    </>
  );
};

export default Home;
