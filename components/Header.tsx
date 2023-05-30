import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MagnifyingGlassIcon, ShoppingBagIcon, UserIcon } from "@heroicons/react/24/outline";
// import logoNext from "../public/next.svg";
import logoGustus from "../public/logo-gustus.svg";

function Header() {
   const session = false;
   return (
      <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-white p-10">
         <div className=" flex items-center justify-center md:w-1/5 ">
            <Link href="/">
               <div className="relative h-150 w-300 cursor-pointer opacity-75 transition hover:opacity-100">
                  <Image src={logoGustus} alt="logo of nextjs" width={120} />
               </div>
            </Link>
         </div>
         <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
            <a className="headerLink">Frauenuhren</a>
            <a className="headerLink">Herrenuhren</a>
            <a className="headerLink">Smartwatch</a>
            <a className="headerLink">Ausverkauf</a>
         </div>
         <div className="flex items-center justify-center gap-x-4 md:w-1/5">
            <MagnifyingGlassIcon className="headerIcon" />
            <Link href="/checkout">
               <div className="relative cursor-pointer">
                  <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-[#aa0000] to-[#3F0101] text-[10px] text-white">
                     5
                  </span>
                  <ShoppingBagIcon className="headerIcon" />
               </div>
            </Link>
            {session ? (
               <Image
                  src={
                     // session.user?.image ||
                     "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                  }
                  alt=""
                  className="cursor-pointer rounded-full"
                  width={34}
                  height={34}
                  // onClick={() => signOut()}
               />
            ) : (
               <UserIcon
                  className="headerIcon"
                  //  onClick={() => signIn()}
               />
            )}
         </div>
      </header>
   );
}

export default Header;
