import React from "react";
import Carouseltwo from "./Carouseltwo";
import Italyone from "../Assets/Italyone.jpg"
import Italytwo from "../Assets/Italytwo.jpg"
import Italythree from "../Assets/Italythree.jpg"
import Italyfour from "../Assets/Italyfour.jpg"
import ClientFeedback from "./ClientFeedback";

const slides =[
Italyone,
Italytwo,
Italythree,
Italyfour   
]

export default function (){
    return(
        <div id="feedback">
             <h3 className="font-semibold lg:pl-16 sm:pl-16 pl-8 text-[#39454B] lg:text-2xl lg:pt-8 sm:pt-32 pt-32 sm:text-2xl text-xl  font-abc ">Feedbacks</h3>
          <div className="w-sceen h-screen  bg-[#ECECEC] font-abc ">
           <div className="flex flex-row gap-16">
            <Carouseltwo  >
            {slides.map((s)=>(
                <img src={s} />
             ))}
            </Carouseltwo>
            <ClientFeedback/>
           
    
            </div>
         </div>
        </div>
    )}