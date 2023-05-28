import React from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
   return (
      <header>
         <div className=" flex items-center justify-center md:w-1/5 ">
            <Link href="/">
               <div className="relative h-1 w-10 cursor-pointer opacity-75 transition hover:opacity-100">
                  <Image src="/next.svg" width="100" height="10" alt="logo of nextjs" />
               </div>
            </Link>
         </div>
         {/* <div className="hidden flex-1 items-center justify-center space-x-2 md:flex"> */}
         <div className="hidden md:flex">
            <a className="headerLink">Product</a>
            <a className="headerLink">Explore</a>
            <a className="headerLink">Support</a>
            <a className="headerLink">Business</a>
         </div>
      </header>
   );
}

export default Header;
