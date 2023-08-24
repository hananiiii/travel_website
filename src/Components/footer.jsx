import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from "react-router-dom";


export default function (){
    let Links=[
        {name:"Popular",link:"/"} ,
        {name:"Recomendations",link:"/"} ,
        {name:"Activities",link:"/"} ,
        {name:"Tips",link:"/"} ,
        {name:"Feedback",link:"/"} ,]
    return(
        <div className="w-screen  h-[50px] bg-[#1383C5] flex flex-row lg:gap-[350px] sm:gap-32">
             <Link to="/Home"><div className="font-bold text-[#39454B] sm:block hidden  hover:text-white text-xl cursor-pointer flex items-center font-abc ml-6 mt-3 duration-500">
            
            Travelicous
           </div></Link>
            <div className="flex flex-row gap-4">
            <div className="flex  justify-center text-center hidden  lg:block  ">
            <ul className="md:flex md:items-center    mt-3  md:z-auto z-[-1] left-0 w-full md:w-auto   md:pl-0 pl-9  "> 
           {
            Links.map((Links)=>(
                <li key={Links.name} className="md:ml-8 text-[17px] md:my-0 my-7">
                    <a href={Links.link} className="text-[#39454B] font-SemiBold hover:text-white duration-500 ">{Links.name}</a>
                </li>
            ))
           }
           
         </ul>
            </div>

            <div className=" flex flex-row gap-10 mt-3 sm:ml-[270px] ml-[160px]">
            <a href="https://www.facebook.com" className="text-[#39454B] hover:text-white duration-500  ">
                 <FaFacebook size={24} />
            </a>
            <a href="https://www.twitter.com" className="text-[#39454B] hover:text-white duration-500 ">
                 <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com" className="text-[#39454B] hover:text-white duration-500 ">
                  <FaInstagram size={24} />
            </a>
           
        
            
            </div>
            </div>     
        </div>
     )}
