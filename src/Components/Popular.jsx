import React from "react";

import Dubai from "../Assets/dubai.jpg";
import Usa from "../Assets/usa.jpg";
import Paris from "../Assets/paris.jpg";
import Turkey from "../Assets/turkey.jpg";


export default function (){
    return(
        <div id="popular" className=" pt-2 w-screen h-screen bg-[#ECECEC] font-abc ">
            <div className="flex flex-row gap-0 pt-6">
           <div className=" rounded-xl flex flex-col lg:ml-[95px] sm:ml-[90px] ml-[30px] lg:mt-8 sm:mt-11 mt-16">
              <div className="lg:w-[260px] sm:w-[210px] sm:h-[180px] lg:h-[230px] w-[180px] h-[160px] rounded-xl ">
                 <img src={Dubai} className="pic lg:w-[260px] lg:h-[330px] rounded-lg  "/>
              </div>
              <div className="flex flex-col gap-4 p-2 pt-4">
                   <h3 className="country text-[#39454B] font-semibold lg:text-xl sm:text-[20px] text-[17px] lg:pt-24 sm:pt-36 pt-28 ">Dubai</h3>
                   <div className="flex flex-row gap-8 ">
                    <div className=" rate lg:text-2xl sm:text-xl text-md text-yellow-300 flex flex-row gap-2 ">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    </div>
                    <p className=" number font-light lg:text-xl sm:text-lg  pl-6   text-yellow-300 hidden lg:block ">5.0</p>
                   </div>
                     <p className=" comment lg:text-lg sm:text-[14px] text-[12px] font-light text-[#8B99A9] " >Dubai welcomes millions of <br/>
                    visitors each year, and more
                    </p>
              </div>
           </div>
           <div className=" rounded-xl flex flex-col lg:ml-[75px] sm:ml-[90px] ml-[30px] lg:mt-8 sm:mt-11 mt-16 ">
              <div className="lg:w-[260px] sm:w-[210px] sm:h-[180px] lg:h-[230px] w-[180px] h-[160px] rounded-xl ">
                 <img src={Usa} className="pic lg:w-[260px] sm:w-[210px] sm:h-[325px] lg:h-[330px] w-[180px] h-[280px]  rounded-lg  "/>
              </div>
              <div className="flex flex-col gap-4 p-2 pt-4">
                   <h3 className="country text-[#39454B] font-semibold  lg:text-xl sm:text-[20px] text-[17px] lg:pt-24 sm:pt-36 pt-28 ">USA</h3>
                   <div className="flex flex-row gap-8 ">
                    <div className=" rate lg:text-2xl sm:text-xl text-md text-yellow-300 flex flex-row gap-2 ">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  
                    </div>
                    <p className=" number font-light text-xl text-yellow-300 pl-6  hidden lg:block ">5.0</p>
                   </div>
                     <p className=" comment lg:text-lg sm:text-[13px] text-[11px] font-light text-[#8B99A9] " >The USA attracts a staggering<br/>  
                      number of tourists annually,
                    </p>
              </div>
           </div>
           <div className=" rounded-xl flex flex-col lg:ml-[75px] sm:ml-[75px] ml-[30px] lg:mt-8 sm:mt-11 mt-16  hidden lg:block ">
              <div className="lg:w-[260px] sm:w-[210px] sm:h-[180px] lg:h-[230px] w-[180px] h-[160px]  rounded-xl ">
                 <img src={Turkey} className="pic lg:w-[260px] sm:w-[210px] sm:h-[325px] lg:h-[330px] w-[180px] h-[280px] rounded-lg  "/>
              </div>
              <div className="flex flex-col gap-4 p-2 pt-4">
                   <h3 className="country text-[#39454B] font-semibold lg:text-xl sm:text-[20px] text-[17px] lg:pt-24 sm:pt-36 pt-28 ">Turkey</h3>
                   <div className="flex flex-row gap-8 ">
                    <div className=" rate lg:text-2xl sm:text-xl text-md text-yellow-300 flex flex-row gap-2 ">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    
                    </div>
                    <p className=" number font-light text-xl text-yellow-300 pl-6 hidden lg:block ">5.0</p>
                   </div>
                     <p className=" comment lg:text-lg sm:text-[13px] text-[11px] font-light text-[#8B99A9] " >Turkey attracting
                        millions of<br/> travelers every  year.
                    </p>
              </div>
           </div>
           <div className=" rounded-xl flex flex-col lg:ml-[75px] sm:ml-[75px] ml-[30px] lg:mt-8 sm:mt-11 mt-16 hidden lg:block ">
              <div className="lg:w-[260px] sm:w-[210px] sm:h-[180px] lg:h-[230px] w-[180px] h-[160px] rounded-xl ">
                 <img src={Paris} className="pic lg:w-[260px] sm:w-[210px] sm:h-[325px] lg:h-[330px] w-[180px] h-[280px] rounded-lg  "/>
              </div>
              <div className="flex flex-col gap-4 p-2 pt-4">
                   <h3 className="country text-[#39454B] font-semibold lg:text-xl sm:text-[20px] text-[17px] lg:pt-24 sm:pt-36 pt-28 ">Paris</h3>
                   <div className="flex flex-row gap-8 ">
                    <div className=" rate lg:text-2xl sm:text-xl text-md text-yellow-300 flex flex-row gap-2 ">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                   
                    </div>
                    <p className=" number font-light text-xl text-yellow-300 pl-6 hidden lg:block">5.0</p>
                   </div>
                     <p className=" comment text-lg font-light text-[#8B99A9] " >romantic capital  captivates 
                           <br/> millions with its charm,
                    </p>
              </div>
           </div>
           </div>
        </div>
    )}