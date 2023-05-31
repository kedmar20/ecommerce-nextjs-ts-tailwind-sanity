import React from "react";

interface Props {
   title: string;
   loading?: boolean;
}
// bg-[#610909]
function Button({ title, loading }: Props) {
   return (
      <a
         href="#_"
         className="relative rounded px-5 py-2.5 overflow-hidden group bg-gradient-to-r from-[#610909] to-[#3F0101] relative hover:bg-gradient-to-r hover:from-[#3F0101] hover:to-[#3F0101] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#3F0101] transition-all ease-out duration-300"
      >
         <span className="absolute  right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
         <span className="relative">{loading ? "Loading..." : title}</span>
      </a>
   );
}

export default Button;
