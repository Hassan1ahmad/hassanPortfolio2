import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className='p-5 flex justify-around items-start max-md:flex-col'>
         <div className="flex items-center">
            <Image src="/assets/Vector.svg" alt="" width={29} height={29} />
            <p className="text-neutral-950 text-2xl max-md:text-[5vw] ml-4 max-md:ml-3  font-semibold font-['Handlee']">
            Hassan Ahmad
            </p>
        </div>
        <div>
            <div className='flex flex-row gap-10 max pt-10'>
            <a href="https://github.com/Hassan1ahmad" className="text-center text-white text-[32px] max-md:text-xl font-normal font-['Handlee'] bg-neutral-950 shadows" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">GitHub</a>
            <a href="https://www.linkedin.com/in/hassan-ahmad-/" className="text-center text-white text-[32px] max-md:text-xl font-normal font-['Handlee'] bg-neutral-950 shadows" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">LinkedIn</a>
            <a href="https://www.instagram.com/hassanopahmadxd/" className="text-center text-white text-[32px] max-md:text-xl font-normal font-['Handlee'] bg-neutral-950 shadows" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">Instagram</a>

            </div>
            <div className="text-neutral-950 text-base font-normal font-['Inter'] mt-10 text-center ">Copyright@Portfolio 2024</div>

        </div>
    </div>
  )
}

export default Footer
