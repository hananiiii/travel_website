import React from "react";
import Rome from "../Assets/rome.jpg";
import Tokyo from "../Assets/tokyo.jpg";
import Grecce from "../Assets/grecce.jpg";
import Austa from "../Assets/austa.jpg";

export default function (){
    return(
               <div id="recomendation" className="w-screen h-screen bg-[#ECECEC] font-abc ">
                   <div className="flex flex-col gap-8">
                         <h3 className="font-semibold lg:pl-16 sm:pl-16 pl-8 text-[#39454B] lg:text-2xl -lg:pt-16 sm:text-2xl text-xl  font-abc ">Recomendation places
                          </h3>
                         <div className="flex  flex-col gap-6 lg:w-[500px] lg:h-[650px] lg:ml-[155px] sm:w-[300px] w-[180px] h-[150px] sm:h-[280px] lg:h-[362px] sm:ml-[50px] ml-[70px] lg:mt-2 sm:mt-11 mt-6 rounded-xl">
                            <img src={Rome} className=" lg:w-[500px] sm:w-[300px] w-[180px] h-[250px] sm:h-[280px] lg:h-[400px] rounded-xl"/>
                            <h3 className="text-[#39454B] font-semibold lg:text-xl sm:text-[20px] text-[15px] ">Rome Italy</h3>
                            <p className="lg:text-[15px] sm:text-[10px] text-[10px] font-light text-[#8B99A9]">As the capital of Italy, Rome is filled with
                                   ancient ruins such as  the Colosseum and
                                   Roman Forum, as well as architectural marvels 
                                   like the Vatican City and St. Peter's Basilica.</p>
                        
                         </div>
                         <div className=" flex flex-col gap-8 lg:w-[600px] sm:w-[300px] h-[150px] lg:h-[570px] lg:-mt-[680px] sm:-mt-[310px] sm:ml-[380px] lg:ml-[720px] ml-[270px] -mt-[180px] ">
                                 <div className="flex flex-row gap-6 lg:w-[630px] lg:h-[160px]  sm:w-[300px] sm:h-[180px] w-[100px] h-[180px]">
                                     <img src={Tokyo} className="lg:w-[540px] lg:h-[180px]  sm:w-[300px] sm:h-[180px] w-[100px] h-[180px] rounded-xl" />
                                     <div className="flex flex-col gap-6 ">
                                        <h3 className="text-[#39454B] lg:text-xl sm:text-[20px] text-[15px] font-semibold hidden lg:block sm:block">Tokyo, Japan</h3>
                                        <p className="font-light lg:text-[15px] sm:text-[10px] text-[10px] text-[#8B99A9] hidden lg:block sm:block">A vibrant metropolis blending 
                                          tradition and modernity, Tokyo
                                          offers a diverse range of 
                                          experiences 
                                        </p>
                                     </div>
                                 </div>
                                 <div className="flex flex-row gap-6 lg:w-[630px] lg:h-[160px] sm:w-[140px] w-[100px] h-[180px] sm:h-[180px]">
                                     <img src={Grecce} className="lg:w-[600px] lg:h-[180px] sm:w-[120px] sm:h-[180px] w-[100px] h-[180px]  rounded-xl" />
                                     <div className="flex flex-col gap-6 ">
                                        <h3 className="text-[#39454B] lg:text-xl sm:text-[20px] text-[15px] font-semibold hidden lg:block sm:block">Santorini</h3>
                                        <p className="font-light lg:text-[15px] sm:text-[10px] text-[10px] text-[#8B99A9] hidden lg:block sm:block">
                                        This picturesque Greek island 
                                        is known for its stunning 
                                        sunsets, white-washed buildings
                                        with blue-domed roofs
                                        </p>
                                     </div>
                                 </div>
                                 <div className="lg:flex flex-row gap-6 lg:w-[630px] lg:h-[160px] sm:w-[120px] sm:h-[180px] hidden lg:block">
                                     <img src={Austa} className="lg:w-[600px] lg:h-[180px] rounded-xl sm:w-[120px] sm:h-[180px]" />
                                     <div className="flex flex-col gap-6 ">
                                        <h3 className="text-[#39454B] lg:text-xl sm:text-[20px] text-[15px] font-semibold">Great Barrier Reef </h3>
                                        <p className="font-light lg:text-[15px] sm:text-[10px] text-[10px] text-[#8B99A9]">
                                          The world's largest coral reef
                                          system, located off the coast
                                          of Queensland, offers an 
                                          incredible underwater world
                                        </p>
                                     </div>
                                 </div>
                         </div>
                   </div>
               </div>
    )}