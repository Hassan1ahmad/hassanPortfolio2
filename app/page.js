import About from "@/components/About";
import Contactme from "@/components/Contactme";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Navabar from "@/components/Navabar";
import WhatIDo from "@/components/WhatIDo";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="max-w-screen-2xl">
      <Navabar/>
      <About/>
      <WhatIDo/>
      <Projects/>
      <Experience/>
      <Contactme/>
      <div className="w-[98.5vw] h-[0px] border-2 border-black text-center "></div>
      <Footer/>
    </div>
  );
}
