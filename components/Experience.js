import Image from 'next/image'
import React from 'react'

const ExperienceCard = ({ date, expDetail, expName, place, index }) => {
    return (
        <div className="self-stretch justify-start items-center gap-[37px] max-sm:gap-[20px] inline-flex">
            <div className={` w-[95px] max-md:h-[75px] max-md:w-[75px] max-md:px-[24.83px] max-md:py-[5.09px] px-[39px] py-2 ${index === 2 ? 'bg-cyan-200 border-blue-400 ' : index === 3 ? 'bg-pink-200 border-pink-400' : 'bg-amber-200 border-amber-300 '} rounded-md border-2 flex-col justify-center items-center gap-2.5 inline-flex`}>
                <div className="text-center text-black text-5xl max-md:text-3xl font-normal font-['Handlee'] leading-[72px]">{index}</div>
            </div>
            <div className="flex-col justify-start items-start gap-1.5 max-md:gap-0.5 inline-flex">
                <div className=""><span className="text-neutral-950 text-2xl max-md:text-base font-normal font-['Inter'] leading-[33.60px]">{expName} </span><span className="text-neutral-950 text-2xl max-md:text-base  font-bold font-['Inter'] leading-[33.60px]">{place}</span></div>
                <div className="h-[50px] flex-col justify-start items-start gap-[3px] flex">
                    <div className=" text-neutral-950 text-lg max-md:text-[13.50px] font-normal font-['Inter'] leading-[25.20px]">{expDetail}</div>
                    <div className=" text-neutral-500 text-base max-md:text-[10.50px] font-medium font-['Inter'] leading-snug">{date}</div>
                </div>
            </div>
        </div>
    )
}

function Experience() {
    return (
        <div className='p-5 flex max-md:flex-col relative '>
       {/* left side */}
      <div className="left pt-20 pl-32 max-md:pl-0 pr-16 max-md:pr-0 max-lg:pl-5 max-lg:pr-5">
        <div className="w-[234px] max-md:w-[200px] max-md:mb-3 h-[43px] bg-pink-200 shadow justify-center items-center gap-2.5 inline-flex">
          <div className="text-center text-neutral-950 text-[32px] max-md:text-[25px] font-normal font-['Handlee']">
          Work Experience
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
          <p className="w-[263px] text-neutral-950 text-2xl font-normal font-['Inter'] leading-[33.60px]">
            Working on Freelance plateforms.
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
      <div className='gap-5 flex  flex-col ml-10 max-lg:ml-20 max-md:ml-0  mt-20 max-md:mt-5'>
        <ExperienceCard index={1} expName={'WebDeveloper on '} expDetail={'React JS, Next JS Developer'} place={'Fiverr'} date={'Nov 23 - Present'}/>
        <ExperienceCard index={2} expName={'WebDeveloper on '} expDetail={'MERN stack Develoer'} place={'Upwork'} date={'Nov 23 - Present'}/>
      </div>  

        <div className="w-[345px] max-md:hidden h-[0px] left-[500px] max-lg:left-[361px] top-[399px] absolute origin-top-left -rotate-90 border-2 border-black"></div>
        <div className="w-[345px] max-md:hidden h-[0px] left-[1086px] max-lg:left-[956px] top-[399px] absolute origin-top-left -rotate-90 border-2 border-black"></div>
        <div className="w-[649px] max-md:hidden h-[0px] left-[469px] max-lg:left-[333px] top-[83px] absolute border-2 border-black"></div>
        <div className="w-[649px] max-md:hidden h-[0px] left-[469px] max-lg:left-[333px] top-[370px] absolute border-2 border-black"></div>

        </div>
    )
}

export default Experience
