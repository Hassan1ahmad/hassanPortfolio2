'use client'
import Image from 'next/image'
import React from 'react'

function Contactme() {
  const [result, setResult] = React.useState("");
  const [loading, setloading] = React.useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setloading(true)
    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            access_key: "283421e9-3164-4e8b-81da-239e826bad8b",
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        }),
    });
    const result = await response.json();
    if (result.success) {
      setloading(false)
      setResult("Form Submitted Successfully");
      e.target.reset();
    } else {
      setloading(false)
      console.log("Error", data);
      setResult(data.message);
    }
   
}
  return (
    <div className='p-5 flex max-md:flex-col'>
        {/* left side */}
        <div className="left pt-20 pl-32 max-md:pl-0 pr-16 max-md:pr-0 max-lg:pl-5 max-lg:pr-5">
        <div className="w-[200px] max-md:w-[200px] max-md:mb-3 h-[43px] bg-pink-200 shadow justify-center items-center gap-2.5 inline-flex">
          <div className="text-center text-neutral-950 text-[32px] max-md:text-[25px] font-normal font-['Handlee']">
          Contact here
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
          Have a project idea?<br/>just say me <span className="text-neutral-950 text-2xl font-bold ">Hi</span>
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
      <div className='mt-20 ml-20 max-md:mt-5 max-md:ml-0 text-right'>
      <form  onSubmit={handleSubmit} className="space-y-7">
            <div className="flex items-center">
                <label className=" font-bold p-1 bg-pink-200 shadow border-l-2 border-black  text-[32px] max-md:text-base font-['Handlee']">Name</label>
                <input required type="text" name='name' className="border-b border-black flex-1 h-[56px] max-md:h-[32px] w-[439px] bg-transparent" placeholder="Your Name here" />
            </div>
            <div className="flex items-center">
                <label className=" font-bold p-1 bg-amber-200 shadow border-l-2 border-black  text-[32px] max-md:text-[14px] font-['Handlee']">Your Email</label>
                <input required type="email" name='email' className="border-b border-black flex-1 h-[56px] max-md:h-[32px] w-[439px] bg-transparent" placeholder="Email here" />
            </div>
            <div className="flex items-center">
                <label className=" font-bold p-1 bg-cyan-200 shadow border-l-2 border-black  text-[32px] max-md:text-base font-['Handlee']">About project</label>
                <textarea required name="message" id=""   className="border-b border-black flex-1 h-[56px] max-md:h-[32px] w-[439px] bg-transparent" placeholder=' I want to discuss you about .......'></textarea>
          
            </div>
            <button  className="bg-black text-white py-2 px-4  rotate-[1.29deg] text-right">{loading ? "Loading ... " : "Send Here "}</button>

        </form>
            <span>{result}</span>
      </div>
    </div>
  )
}

export default Contactme
