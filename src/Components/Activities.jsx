import React from "react";
import Actone from "../Assets/actone.jpg";
import Acttwo from "../Assets/acttwo.jpg";
import Actthree from "../Assets/actthree.jpg";
import Actfour from "../Assets/actfour.jpg";
import Actfive from "../Assets/actfive.jpg";
import Mintad from "../Assets/mintad.jpg"
export default function (){
    return(
               <div id="activities" className="w-screen h-screen bg-[#ECECEC] font-abc ">
                  <h3 className="font-semibold lg:pl-16 sm:pl-16 pl-8 text-[#39454B] lg:text-2xl -lg:pt-16 sm:text-2xl text-xl  font-abc">Best Activities</h3>
                  <div className=" flex flex-row lg:gap-8 sm:gap-4 gap-8 lg:ml-[160px] sm:ml-[40px] ml-14">
                  <div className="grid lg:grid-cols-1 lg:grid-rows-2 sm:grid-cols-1 sm:grid-rows-2 grid-cols-1 grid-rows-2 lg:gap-4 sm:gap-8 lg:w-[1175px] sm:w-[200px] w-[150px] h-[515px] lg:h-[525px] sm:h-[515px] lg:mt-12 sm:mt-11 mt-14">
                     <div className="lg:w-[349px] lg:h-[250px] rounded-xl" >
                    <img src={Actone} className="lg:w-[349px] lg:h-[250px] sm:w-[200px] sm:h-[225px] w-[150px] h-[215px] rounded-xl"/>
                    
                     </div>
                     
                    <div className="lg:w-[349px] lg:h-[250px]  rounded-xl" >
                    <img src={Acttwo} className="lg:w-[349px] lg:h-[250px] sm:w-[200px] sm:h-[225px] w-[150px] h-[215px] rounded-xl"/>
                     </div>
                  </div>
                  <div className="grid lg:grid-cols-1 lg:grid-rows-1 sm:grid-cols-1 sm:grid-rows-2 grid-cols-1 grid-rows-2 gap-4 lg:w-[349px] lg:h-[1040px] sm:w-[200px]  sm:h-[500px] lg:mt-12 sm:mt-11 mt-6 lg:-ml-[140px] hidden lg:block sm:block ">
                    <div className="lg:w-[349px] lg-h-[1020px] rounded-xl">
                        <img src={Actthree} className="lg:w-[349px] lg:h-[520px] sm:w-[200px]  sm:h-[500px] rounded-xl"/>
                    </div>
                  </div>
                  <div className="grid lg:grid-cols-1 lg:grid-rows-2 sm:grid-cols-1 sm:grid-rows-2 grid-cols-1 grid-rows-2 lg:gap-4 sm:gap-8 lg:w-[1175px] sm:w-[200px] lg:h-[525px] sm:h-[515px] w-[150px] h-[515px]  lg:ml-[20px]  lg:mt-12 sm:mt-11 mt-14">
                  <div className="lg:w-[349px] lg:h-[250px] rounded-xl  " >
                    <img src={Actfour} className="lg:w-[349px] lg:h-[250px] sm:w-[200px]  sm:h-[225px] w-[150px] h-[215px] rounded-xl"/>
                  </div>
                  
                  <div className="lg:w-[349px] lg:h-[250px] rounded-xl  " >
                    <img src={Actfive} className="lg:w-[349px] lg:h-[250px] sm:w-[200px]  sm:h-[225px] w-[150px] h-[215px] rounded-xl"/>
                  </div>
                  </div>
                  </div>
                
               
             
  
                
               </div>



    )}