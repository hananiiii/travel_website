import React from "react";
import Matar from "../Assets/matar.jpg";
import Peopel from "../Assets/unsplash.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";



const Tips =({showView}) =>{
    let [open, setOpen] = useState(false);

    return(
   <div  className="w-screen h-screen bg-[#ECECEC] font-abc ">
    <div className="w-screen h-[737px] ">
    <div className="flex flew-row lg:gap-[1050px] sm:gap-[300px] gap-[100px] lg:pt-0 sm:pt-6 pt-6">
      <h3 id="tips" className="w-[247px] h-[34.42px]   text-[#39454B] sm:pl-16 pl-8 lg:text-2xl -lg:pt-16 sm:text-2xl text-xl  font-semibold leading-tight tracking-tight">Travel tips </h3>
      {showView && ( <Link to="/More">
         <h3 className="font-bold sm:text-lg text-md underline text-sky-600 cursor-pointer">View More
      </h3>
      </Link>
      )}
    </div>
    <div className="flex flex-col gap-8 pt-4">
    <div className="sm:w-[603px] w-[450px] h-[110px] pt-12 sm:pl-32 pl-10 flex flex-row gap-4">
        <div className="sm:w-[45px] sm:h-[45px] w-[30px] h-[30px] bg-sky-600 rounded-full">
            
            <h3 className="   text-white sm:text-2xl text-lg ml-0.5 sm:mt-1 mt-0.25 justify-center items-center font-semibold text-center">1</h3>
        </div>
        <div className="flex flex-col gap-4">
        <div className="left-[66px] top-[6.50px]  text-black sm:text-2xl text-xl  font-medium leading-tight tracking-tight">Plan and Research</div>
        <div className="left-[66px] top-[50px]   font-light text-[#8B99A9] sm:text-md text-sm ">Research your destination thoroughly, including<br/> local customs, weather conditions, visa requirements,</div>
        </div>
    </div>
    <div className="sm:w-[603px] w-[450px] h-[110px] pt-14 sm:pl-32 pl-10 flex flex-row gap-4">
        <div className="sm:w-[45px] sm:h-[45px] w-[30px] h-[30px]   bg-sky-600 rounded-full">
            
            <h3 className="  text-white sm:text-2xl text-lg ml-0.5 sm:mt-1 mt-0.25 justify-center items-center font-semibold text-center">2</h3>
        </div>
        <div className="flex flex-col gap-4">
        <div className="left-[66px] top-[6.50px]  text-black sm:text-2xl text-xl font-medium leading-tight tracking-tight">Pack Light</div>
        <div className="left-[66px] top-[50px]   font-light text-[#8B99A9] sm:text-md text-sm  ">Pack only the essentials to avoid carrying around <br/>
          excessive luggage.</div>
        </div>
    </div>
    <div className="sm:w-[603px] w-[450px] h-[110px] pt-12 sm:pl-32 pl-10 flex flex-row gap-4">
        <div className="sm:w-[45px] sm:h-[45px] w-[30px] h-[30px] bg-sky-600 rounded-full">
            
            <h3 className="  text-white sm:text-2xl text-lg ml-0.5 sm:mt-1 mt-0.25 justify-center items-center font-semibold text-center">3</h3>
        </div>
        <div className="flex flex-col gap-4">
        <div className="left-[66px] top-[6.50px]  text-black sm:text-2xl text-xl font-medium leading-tight tracking-tight">Plan and Research</div>
        <div className="  font-light text-[#8B99A9] sm:text-md text-sm ">Set a travel budget and stick to it. Research <br/>
            affordable accommodations, transportation 
            options</div>
        </div>
    </div>
    <div className="sm:w-[603px] w-[450px] h-[110px] pt-10 sm:pl-32 pl-10 flex flex-row gap-4">
        <div className="sm:w-[45px] sm:h-[45px] w-[30px] h-[30px]  bg-sky-600 rounded-full">
            
            <h3 className="  text-white sm:text-2xl text-lg ml-0.5 sm:mt-1 mt-0.25  justify-center items-center font-semibold text-center">4</h3>
        </div>
        <div className="flex flex-col gap-4">
        <div className="  text-black sm:text-2xl text-xl font-medium leading-tight tracking-tight">Plan and Research</div>
        <div className="   font-light text-[#8B99A9] sm:text-md text-sm ">Embrace the local culture and immerse yourself <br/>
             in the destination. Try local cuisine, interact with
             locals</div>
        </div>
    </div>
    </div>
     <div className="flex flex-col gap-6  pl-[850px] -mt-[495px]">
    <img className="w-[500px] h-[350px]   rounded-[15px] hidden lg:block" src={Matar} />
    <img className="w-[370px] h-[180px] ml-[130px]  rounded-[15px] hidden lg:block" src={Peopel}/>
    </div>
    
    
</div>
               </div>

    )}
    export default Tips;