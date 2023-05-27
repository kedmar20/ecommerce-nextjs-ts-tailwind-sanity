import React from "react";
import Image from "next/image";

function Header() {
   return (
      <header>
         <div className="relative cursor-pointer h-10 w-5 opacity-75 transition hover:opacity-100">
            <Image src="/next.svg" width={384} height={75} alt="logo of nextjs" />
            using NextJS to build an e-commerce website
         </div>
      </header>
   );
}

export default Header;
