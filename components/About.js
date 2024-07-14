"use client"

import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import  { EffectFade, Navigation, Pagination } from 'swiper/modules';

function About() {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState('fiverr');

  const platforms = {
    fiverr: {
      name: "Fiverr",
      username: "Hassan Ahmad @hassan1ahmad",
      photo: '/assets/fiverr.jpg',
      rating: 4.9,
      reviews: [
        "Hassan delivered his web development work on time and executed all requested changes perfectly. Highly professional and reliable. Highly recommended!",
        "I had the pleasure of working with Hassan on a project to convert an HTML, CSS, and JS template to Next.js. I am incredibly impressed with his work. He delivered the project within 24 hours.",
        " I highly recommend Hassan for any web development projects and look forward to working with him again in the future"
      ],
      link: "https://www.fiverr.com/s/P2m3vR0"
    },
    upwork: {
      name: "Upwork",
      username: "Hassan",
      photo: '/assets/upwork.png',
      rating: 5,
      reviews: [
        "No reviews yet"
      ],
      link: "https://www.upwork.com/freelancers/~01c4d5cffc1df7532a"
    }
  };
  return (
    <div className=" ">
    {/* ------------avatar------------ */}
      <div className="flex pt-7 w-fit max-w-[95vw]  origin-top-left rotate-[-5.18deg] items-center">
        {/* avatar */}
        <div>
          <Image
            src="/assets/avatar (2).png"
            alt="avatar"
            width={109}
            height={102}
          />
        </div>
        {/* arrow */}
        <div className="">
          <Image src="/assets/arrow.svg" alt="" width={77} height={45} />
        </div>
        {/* name */}
        <div className="relative inline-block ml-3 pb-7">
          <span className="relative z-10 text-neutral-950 text-2xl max-md:text-[5vw] font-normal font-['handlee']">
            Hassan Ahmad
          </span>
          <span className="absolute bg-pink-200 top-[27%] transform -translate-y-1/2 left-0 w-full h-[31%] z-0"></span>
        </div>
      </div>
      {/* ------------About----------- */}
      <div className="p-5 flex max-md:block max-lg:block justify-between items-center">
        {/* left text */}
        <div className="">
          <p className="text-neutral-950 tracking-wider max-lg:text-[5vw]	max-xl:text-[4vw] text-[45px] max-md:text-[7vw] leading-tight font-semibold font-['Inter']">
            I{" "}
            <span className="relative inline-block">
              <span className="relative z-10"> Build</span>
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1/2 w-full bg-pink-200 z-0"></span>
            </span>{" "}
            High-Quality, <br />
            Responsive Web Applications.
          </p>
        </div>
        {/* right side */}
        <div className="flex flex-col mr-10">
          <div className="w-[500px] max-md:w-[90vw] max-md:text-[5vw] max-lg:text-[3vw] max-lg:w-[90vw] max-md:mt-3 max-md:leading-tight text-neutral-950 text-2xl font-normal font-['Inter'] leading-[33.60px]">
            Passionate MERN Stack, Next JS developer Skilled for building
            user-friendly interfaces.
          </div>
        <div>
          <button onClick={() => setShowModal(true)} className="text-white text-2xl font-semibold font-['Inter'] leading-[33.60px] bg-neutral-950 px-[25px] mt-5 py-[9px] max-md:px-3 max-md:py-1.5">
            Hire me
          </button>
          {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-11/12 max-w-lg p-6">
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <h2 className="text-2xl font-semibold text-gray-800 text-center">Hire Me</h2>
              <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700 transition duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="flex mb-4 space-x-2">
              {Object.keys(platforms).map((platform) => (
                <button
                  key={platform}
                  onClick={() => setActiveTab(platform)}
                  className={`px-4 py-2 rounded-md font-medium ${activeTab === platform ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'} hover:bg-blue-500 hover:text-white transition duration-300`}
                >
                  {platforms[platform].name}
                </button>
              ))}
            </div>
            <div className="text-gray-700">
              {/* <h3 className="text-xl font-semibold mb-2">{platforms[activeTab].name}</h3> */}
              <div className='flex items-center'>
              <Image className="w-[55.65px] h-[55.65px] rounded-[45.55px] overflow-hidden" width={69} height={69} src={platforms[activeTab].photo} alt='freelanceimg' />
              <p className="mb-1 ml-4"> {platforms[activeTab].username}</p>
              </div>
              <div className='flex my-5 justify-between '>
              <div className=" h-9 px-[21px] py-1.5  bg-indigo-300 opacity rounded-[44px] justify-center items-center gap-2.5 inline-flex">
                <div className="text-indigo-700 text-[13px] font-normal ">Web Developer</div>
                </div>
              <div className="flex items-center mb-1">
                {[...Array(Math.floor(platforms[activeTab].rating))].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927C9.247 2.372 9.753 2 10.33 2c.577 0 1.083.372 1.281.927l1.52 3.73a1 1 0 00.95.658h4.145c.592 0 1.002.679.674 1.174l-3.252 5.085a1 1 0 00-.291.937l1.141 4.446c.159.616-.454 1.11-.998.792l-3.87-2.144a1 1 0 00-.992 0l-3.87 2.144c-.544.318-1.157-.176-.998-.792l1.14-4.446a1 1 0 00-.29-.937L2.702 8.49c-.328-.495.082-1.174.674-1.174h4.145a1 1 0 00.95-.658l1.52-3.73z" />
                  </svg>
                ))}
              </div>
              </div>
              <div className="mb-4">
                <strong>Reviews:</strong>
                <div className="space-y-2 mt-2 ">
                  <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    navigation={true}
                    pagination={{
                      clickable: true,
                    }}
                   modules={[ EffectFade,Navigation, Pagination]
}
                    className="mySwiper ml-10"
                  >
                    {platforms[activeTab].reviews.map((review, index) => (
                        
                      <SwiperSlide key={index}>
                        <div className="bg-gray-100 p-2 rounded pl-10 pr-9 min-h-32 max-md:min-h-48 max-sm:min-h-60 flex justify-center items-center ">
                          {review}
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              <a href={platforms[activeTab].link} target="_blank" rel="noopener noreferrer" className="block bg-blue-600 text-white text-center py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300">Visit my profile</a>
            </div>
          </div>
        </div>
      )}
        </div>
        </div>
      </div>
    </div>
  );
}

export default About;
