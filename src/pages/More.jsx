import React from "react";
import Navbar from "../Components/Nav";
import Tips from "../Components/Tips";
import Moreone from "../Assets/moreone.jpeg";
import Moretwo from "../Assets/moretwo.jpeg";



export default function (){
    return(
        <div className="bg-[#ECECEC] w-screen h-full font-abc">
            <Navbar showSignUpButton={true}  />
           <div className="pt-32">
              <Tips showView={false}/>
              <div className="flex flex-col gap-8 -mt-32 bg-[#ECECEC]">
        <div className="sm:w-[603px] w-[450px] h-[110px] lg:pt-10 sm:pt-16 pt-24 sm:pl-32 pl-10 flex flex-row gap-4">
        <div className="sm:w-[45px] sm:h-[45px] w-[30px] h-[30px] bg-sky-600 rounded-full">
            
            <h3 className="   text-white sm:text-2xl text-lg ml-0.5 sm:mt-1 mt-0.25 justify-center items-center font-semibold text-center">5</h3>
        </div>
        <div className="flex flex-col gap-4">
        <div className="left-[66px] top-[6.50px]  text-black sm:text-2xl text-xl  font-medium leading-tight tracking-tight">Respect Local Customs</div>
        <div className="left-[66px] top-[50px]   font-light text-[#8B99A9] sm:text-md text-sm "> Learn about the local customs and  traditions<br/> of 
         your destination and respect them. Dress 
         appropriately,<br/> be mindful of local etiquette
        
        </div>
        </div>
    </div>
    <div className="sm:w-[603px] w-[450px] h-[110px] lg:pt-14 sm:pt-16 pt-32 sm:pl-32 pl-10 flex flex-row gap-4">
        <div className="sm:w-[45px] sm:h-[45px] w-[30px] h-[30px]   bg-sky-600 rounded-full">
            
            <h3 className="  text-white sm:text-2xl text-lg ml-0.5 sm:mt-1 mt-0.25 justify-center items-center font-semibold text-center">6</h3>
        </div>
        <div className="flex flex-col gap-4">
        <div className="left-[66px] top-[6.50px]  text-black sm:text-2xl text-xl font-medium leading-tight tracking-tight">Stay Healthy</div>
        <div className="left-[66px] top-[50px]   font-light text-[#8B99A9] sm:text-md text-sm  ">Prioritize your health while traveling.Stay hydrated  <br/>
            eat well-balanced meals, and carry any necessary <br/> medications or first aid supplies
          </div>
        </div>
    </div>
    <div className="sm:w-[603px] w-[450px] h-[110px] lg:pt-20 sm:pt-16 pt-32 sm:pl-32 pl-10 flex flex-row gap-4">
        <div className="sm:w-[45px] sm:h-[45px] w-[30px] h-[30px] bg-sky-600 rounded-full">
            
            <h3 className="  text-white sm:text-2xl text-lg ml-0.5 sm:mt-1 mt-0.25 justify-center items-center font-semibold text-center">7</h3>
        </div>
        <div className="flex flex-col gap-4">
        <div className="left-[66px] top-[6.50px]  text-black sm:text-2xl text-xl font-medium leading-tight tracking-tight">Stay safe</div>
        <div className="  font-light text-[#8B99A9] sm:text-md text-sm "> Take precautions to ensure your safety while 
              traveling <br/> Keep your valuables secure, be aware
             of your <br/>surroundings, and follow any local safety
             guidelines.
           </div>
        </div>
    </div>
    <div className="sm:w-[603px] w-[450px] h-[110px] lg:pt-24 sm:pt-16 pt-36 sm:pl-32 pl-10 flex flex-row gap-4 ">
       
        <div className="sm:w-[45px] sm:h-[45px] w-[30px] h-[30px]  bg-sky-600 rounded-full ">
            
            <h3 className="  text-white sm:text-2xl text-lg ml-0.5 sm:mt-1 mt-0.25  justify-center items-center font-semibold text-center">8</h3>
        </div>
        <div className="flex flex-col gap-4 ">
        <div className="  text-black sm:text-2xl text-xl font-medium leading-tight tracking-tight">Use Local Transportation</div>
        <div className="   font-light text-[#8B99A9] sm:text-md text-sm ">
        Utilize local transportation options like buses
        trains  <br/> trams to get around. Not only is it
        often more cost-effective <br/>
             
             
             </div>
          
        </div>
        </div>
        
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
            
              </div>
              <div className="flex flex-col gap-12  pl-[850px] -mt-[720px]">
                  <img className="w-[250px] h-[250px]   rounded-[15px] hidden lg:block" src={Moreone} />
                  <img className="w-[250px] h-[250px]  ml-[250px]  rounded-[15px] hidden lg:block" src={Moretwo}/>
                </div>
               
           </div>
        
         
        </div>

     )}
