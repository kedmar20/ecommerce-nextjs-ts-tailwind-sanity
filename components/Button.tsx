import React from "react";

interface Props {
   title: string;
   loading?: boolean;
   onClick?: () => void;
   width?: string;
   padding?: string;
   noIcon?: boolean;
}
// bg-[#610909]
function Button({ title, loading, onClick, width, padding, noIcon }: Props) {
   return (
      <button
         onClick={onClick}
         className={`relative rounded 
         ${width ? width : "w - auto"} 
         ${padding ? padding : "px-5 py-2.5"} 
         overflow-hidden group bg-gradient-to-r from-[#610909] to-[#3F0101] relative hover:bg-gradient-to-r hover:from-[#3F0101] hover:to-[#3F0101] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#3F0101] transition-all ease-out duration-300`}
      >
         <span className="absolute  right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
         <span className="relative flex">
            {!noIcon && (
               <svg
                  className="relative z-20 mr-2 h-5 w-5 flex-shrink-0 text-white"
                  fill="white"
                  stroke="currentColor"
                  viewBox="0 0 483.1 483.1"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                  <g id="SVGRepo_iconCarrier"></g>
                  <path d="M434.55,418.7l-27.8-313.3c-0.5-6.2-5.7-10.9-12-10.9h-58.6c-0.1-52.1-42.5-94.5-94.6-94.5s-94.5,42.4-94.6,94.5h-58.6 c-6.2,0-11.4,4.7-12,10.9l-27.8,313.3c0,0.4,0,0.7,0,1.1c0,34.9,32.1,63.3,71.5,63.3h243c39.4,0,71.5-28.4,71.5-63.3 C434.55,419.4,434.55,419.1,434.55,418.7z M241.55,24c38.9,0,70.5,31.6,70.6,70.5h-141.2C171.05,55.6,202.65,24,241.55,24z M363.05,459h-243c-26,0-47.2-17.3-47.5-38.8l26.8-301.7h47.6v42.1c0,6.6,5.4,12,12,12s12-5.4,12-12v-42.1h141.2v42.1 c0,6.6,5.4,12,12,12s12-5.4,12-12v-42.1h47.6l26.8,301.8C410.25,441.7,389.05,459,363.05,459z"></path>
               </svg>
            )}

            {loading ? "Loading..." : title}
         </span>
      </button>
   );
}

export default Button;
