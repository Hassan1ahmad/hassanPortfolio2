    import Image from "next/image";
    import React from "react";

    function Navabar() {
    return (
        <div className="flex justify-around pt-5">
        {/* left */}
        <div className="flex items-center">
            <Image src="/assets/Vector.svg" alt="" width={49} height={49} />
            <p className="text-neutral-950 text-4xl max-md:text-[5vw] ml-7 max-md:ml-3  font-semibold font-['Handlee']">
            Hassan Ahmad
            </p>
        </div>
        {/* right */}
        <div className="relative inline-block">
            <span className="relative z-10 text-neutral-950 text-2xl max-md:text-[4vw] font-normal font-['Inter']">Portfolio</span>
            <span className="absolute bg-pink-200 top-[40%] transform -translate-y-1/2 left-0 w-full h-[23%] z-0"></span>
        </div>
        </div>
    );
    }

    export default Navabar;
