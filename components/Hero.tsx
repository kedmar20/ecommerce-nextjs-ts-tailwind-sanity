import React from "react";
import Button from "./Button";
import Image from "next/image";

function Hero() {
   return (
      <section className="sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8">
         <div className="space-y-8">
            <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl">
               <span className="block bg-gradient-to-r from-[#aa0000] to-[#3F0101] bg-clip-text text-transparent">KLASSISCHER</span>
               <span className="block bg-gradient-to-r from-[#aa0000] to-[#3F0101] bg-clip-text text-transparent">MINIMALISMUS</span>
            </h1>
            <span className="block bg-gradient-to-r from-[#aa0000] to-[#3F0101] bg-clip-text text-transparent">Erreichen Sie mehr mit uns</span>
            <div>
               <a className="link link-before">Jetzt Shoppen</a>
            </div>
         </div>
         <div>
            <Image src="/heroimage.jpg" alt="hero image big watch" width={800} height={50} />
         </div>
      </section>
   );
}

export default Hero;
