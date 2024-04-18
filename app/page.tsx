"use client";
import WaterWaveWrapper from "@/components/visualEffects/water-wave-warpper";
import AboutSection from "@/sections/about";
import ProjectsSection from "@/sections/projects";
import LandingSection from "@/sections/landing";
import ContactSection from "@/sections/contact";
import { useState } from "react";

export default function Home() {
  const [open,setOpen]=useState<boolean>(false)

  const containerStyle: React.CSSProperties = {
    transition: 'width 0.5s ease', 
  };
  return (
  <WaterWaveWrapper imageUrl="" dropRadius="3" perturbance="3" resolution="2048">
    {
      () => 
      <div className={`pb-4 p-x-4 ${open ? "w-full sm:w-[70%]" : "w-full"}`} style={containerStyle}>
          <LandingSection open={open} setOpen={setOpen} /> 
          <ProjectsSection />
          <AboutSection open={open}/>
          <ContactSection />
      </div>
    }
  </WaterWaveWrapper>)
}