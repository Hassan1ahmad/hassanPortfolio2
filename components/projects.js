import Image from "next/image";
import React from "react";

const ProjectCard = ({ imageSrc, projectName, projectdetails,projectLink }) => {
  return (
    <div className="projectCard">
      <div className="w-[305px] h-[354px]   bg-white rounded-md border-2 border-black">
        {/* project img */}
        <div className="p-3">
          <Image src={imageSrc} width={350} height={650} alt="project" />
        </div>
        {/* project name + Link */}
        <div className="p-3 flex gap-7 justify-between relative">
          <div className="text-neutral-950 text-xl font-semibold font-['Handlee'] leading-6">
            {projectName} <br />
            <span className="text-base font-normal  leading-normal">{projectdetails}</span>
          </div>
            <Image className=" absolute right-[85px] top-[-7px]" src="/assets/Cursor.svg" width={25} height={25} alt="cursor" />
          <a href={projectLink}  className=" pl-[12.90px] pr-[10.38px] py-[5.95px] cursor-pointer max-h-[43px] bg-blue-400 rounded-tl-sm rounded-tr-[26.85px] rounded-bl-[26.85px] rounded-br-[26.85px] shadow border-2 border-sky-700 justify-start items-start gap-[8.95px] inline-flex" target="_blank" rel="noopener noreferrer">
            <div className="grow shrink basis-0 self-stretch text-white text-lg font-medium font-['Inter']">
              Demo
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

function projects() {
  return (
    <div className="p-5 flex max-md:block max-md:ml-5">
      {/* left side */}
      <div className="left pt-20 pl-32 max-md:pl-0 pr-16 max-md:pr-0 max-lg:pl-5 max-lg:pr-5 ">
        <div className="w-[234px] max-md:w-[200px] max-md:mb-3 h-[43px] bg-pink-200 shadow justify-center items-center gap-2.5 inline-flex">
          <div className="text-center text-neutral-950 text-[32px] max-md:text-[25px] font-normal font-['Handlee']">
            Featured Projects
          </div>
        </div>
        <div className=" ml-[230px] py-7 max-md:hidden">
          <Image
            src="/assets/arrow right.svg"
            alt="arrow down"
            width={37}
            height={25}
          />
        </div>
        <div>
          <p className="w-[253px] text-neutral-950 text-2xl font-normal font-['Inter'] leading-[33.60px]">
            Have designed more than 20 projects
          </p>
          <div className=" ml-[130px] py-4 max-md:block hidden">
          <Image
            src="/assets/arrow right.svg"
            alt="arrow down"
            width={37}
            height={25}
          />
        </div>
        </div>
      </div>
      {/* right side */}
      <div className="right grid grid-cols-2 gap-5  max-md:grid-cols-1 ">
        {/* Project card */}
        <ProjectCard imageSrc={'/assets/job-pilot.svg'} projectName={'Job Pilot'} projectdetails={'Nextjs using Public API'} projectLink={'https://pilot-job.netlify.app/'} />
        <ProjectCard imageSrc={'/assets/skyline.svg'} projectName={'SkyLine Realestate'} projectdetails={"MERN Stack based"} projectLink={"https://skylinerealestate.netlify.app/"}  />
        <ProjectCard imageSrc={'/assets/Nobel-prize.svg'} projectName={'Noble Prizes Hub'} projectdetails={'Reactjs using public API'}  />
        <ProjectCard imageSrc={'/assets/note.svg'} projectName={'Note Nest'} projectdetails={"MERN stack based"} projectLink={"https://hassan1ahmad.github.io/NoteNest/"}  />
      </div>
    </div>
  );
}

export default projects;
