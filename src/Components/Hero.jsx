import React from "react";
import Heroman from "../Assets/heromanone.jpeg";
import Heromann from "../Assets/heromantwo.jpeg";


export default function (){
    return(
        <div className="w-screen h-screen bg-[#ECECEC] pt-20 font-abc">
          <div className="basis-full md:basis-0.5 lg:w-1/2 lg:mt-20 sm:mt-20 mt-32 lg:ml-32 sm:ml-16 ml-10 ">
              <h3 className="font-medium text-[#39454B] lg:text-5xl sm:text-4xl text-3xl lg:leading-[60px] sm:leading-[50px] leading-[40px] ">
                    Embark on a Journey of <br/> 
                    Discovery and <br/>
                    Adventure with<br/>
                    <span className="lg:text-5xl sm:text-4xl text-3xl font-medium text-[#1383C5] ">
                        Travelicous
                    </span>
              </h3>
              <p className="lg:text-xl sm:text-xl text-[14px] font-light text-[#8B99A9] lg:mt-6 mt-4 ">
                  Explore. Discover. Wander. Travelicous is your gateway <br/>
                  to extraordinary destinations, unforgettable<br/>
                  experiences, and lifelong memories<br/>
              </p>
              <div className="flex flex-col items-center justify-center lg:mt-10 sm:mt-6 mt-6 lg:-ml-[195px] sm:-ml-32 -ml-10">
                   <div className="sm:w-[420px] w-[350px] bg-[#1383C5] rounded-3xl  p-5 lg:w-[550px] lg:h-[50px] sm:h-[40px] h-[40px]">
                       <section className="w-full h-10 flex items-center lg:-mt-4 sm:-mt-[20px] -mt-[20px]">
                          <span className="w-10 h-full flex items-center text-white text-xl ">
                          <ion-icon name="search" ></ion-icon>
                          </span>
                          <input type="text" className="w-full h-full font-medium md:pl-2 focus:outline-none bg-[#1383C5] text-white pl-4" placeholder="Search places" />
                          <button className="w-28 lg:h-[30px] sm:h-[25px] h-[25px] bg-[#ECECEC] flex justify-center items-center rounded-3xl text-[#1383C5]">Search</button>
                       </section>
                   </div>
              </div>
              <div className="lg:mt-12 sm:mt-12 mt-8 lg:gap-14 sm:gap-14 gap-6 text-[#8B99A9]  flex  flex-row items-center ">
              
              <h4 className=" lg:text-xl sm:text-[25px] text-[20px] ">Call us:</h4>
             
             <div className="flex flex-row gap-2 mt-2 items-center ">
                 <span className="text-[#8B99A9]  lg:text-2xl sm:text-2xl text-xl "> <ion-icon name="call" ></ion-icon></span>
                 <h4 className="lg:text-xl lg:font-medium sm:text-xl sm:font-medium mb-2">0758240063</h4>
             </div>
             <div className="flex flex-row gap-2 mt-2 items-center ">
                  <span className="text-[#8B99A9]   lg:text-2xl sm:text-2xl text-xl"> <ion-icon name="call" ></ion-icon></span>
                  <h4 className="lg:text-xl lg:font-medium sm:text-xl sm:font-medium mb-2">0587962430</h4>
             </div>
             
         </div>

          </div>
          <div >
          <div className="-mt-[530px] mr-[380px] flex justify-end items-start h-screen">
              <img src={Heroman}  className="w-[243px] h-[360px] rounded-xl hidden lg:block"/>   
          </div>
          <div className="-mt-[580px] mr-[110px] flex justify-end items-start h-screen">
              <img src={Heromann} className="w-[243px] h-[360px] rounded-xl hidden lg:block " />
          </div>
          
          </div>

        </div>
    )}