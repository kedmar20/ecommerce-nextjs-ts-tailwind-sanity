import React from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
   return (
      // <header>
      // {/* <div className="flex items-center justify-center md:w-1/5 ">
      //    <Link href="/"> */}
      // {/* <div className="relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100">
      //          <Image src="/next.svg" width="100" height="10" alt="logo of nextjs" />
      //       </div> */}
      // {/* </Link>
      // </div> */}
      <div className="flex space-x-2">
         <a>Product</a>
         <a>Explore</a>
         <a>Support</a>
         <a>Business</a>
      </div>
      // </header>
   );
}

export default Header;
