import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MagnifyingGlassIcon, ShoppingBagIcon, UserIcon } from "@heroicons/react/24/outline";
import logoNext from "../public/next.svg";

function Header() {
   return (
      <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-slate-400 p-10">
         <div className=" flex items-center justify-center md:w-1/5 ">
            <Link href="/">
               <div className="relative h-10 w-50 cursor-pointer opacity-75 transition hover:opacity-100 bg-amber-500 ">
                  <Image src={logoNext} alt="logo of nextjs" width={100} />
               </div>
            </Link>
         </div>
         <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
            <a className="headerLink">Product</a>
            <a className="headerLink">Explore</a>
            <a className="headerLink">Support</a>
            <a className="headerLink">Business</a>
         </div>
         <div className="flex items-center justify-center gap-x-4 md:w-1/5">
            <MagnifyingGlassIcon className="headerIcon" />
            <div className="relative cursor-pointer">
               <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
                  5
               </span>
               <ShoppingBagIcon className="headerIcon" />
            </div>
         </div>
      </header>
   );
}

export default Header;
