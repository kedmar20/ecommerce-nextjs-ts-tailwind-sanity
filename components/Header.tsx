import React from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
   return (
      <header>
         <div className=" flex items-center justify-center md:w-1/5 ">
            <Link href="/">
               <div className="relative h-10 w-100 cursor-pointer opacity-75 transition hover:opacity-100 bg-amber-500">
                  <Image src="/next.svg" width="200" height="5" alt="logo of nextjs" />
               </div>
            </Link>
         </div>
         <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
            <a className="headerLink">Product</a>
            <a className="headerLink">Explore</a>
            <a className="headerLink">Support</a>
            <a className="headerLink">Business</a>
         </div>
      </header>
   );
}

export default Header;
