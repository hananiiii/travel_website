import React ,{useState} from "react";
import { Link } from "react-router-dom";



   
     const Nav = ({ showSignUpButton }) => {
        let [open, setOpen] = useState(false);

        let Links=[
            {name:"Popular",link:"#popular"} ,
            {name:"Recomendation",link:"#recomendation"} ,
            {name:"Activities",link:"#activities"} ,
            {name:"Tips",link:"#tips"} ,
            {name:"Feedback",link:"#feedback"} ,
     
         ];
      
    return(
        <div className=" w-full fixed   top-0 left-0 font-abc">
        <div className=" md:flex bg-white  items-center justify-between  py-4 md:px-10 px-7">
         <Link to="/Home"><div className="font-bold text-[#1383C5] text-xl cursor-pointer flex items-center font-abc">
            
            Travelicous
         </div></Link>
         <div onClick={() =>setOpen(!open)} className="text-3xl absolute text-[#39454B] right-8 top-4 cursor-pointer md:hidden">
         <ion-icon name={open ? 'close' : 'menu' }></ion-icon>
         

         </div>
        
         <ul className={`md:flex md:items-center  md:pb-0 pb-12 absolute md:static  bg-white  md:z-auto z-[-1] left-0 w-full md:w-auto   md:pl-0 pl-9  transition-all duration-500 ease-in basis-full md:basis-0.5 ${open ? 'top-20' : 'top-[-490px]'} `}> 
           {
            Links.map((Links)=>(
                <li key={Links.name} className="md:ml-8 text-[17px] md:my-0 my-7">
                    <a href={Links.link} className="text-[#39454B] font-SemiBold hover:text-[#1383C5] duration-500 ">{Links.name}</a>
                </li>
            ))
           }
          {showSignUpButton && (
            <Link to="/Join">
              <button className="text-white text-sm font-abc w-[117px] h-[40px] py-2 px-6 lg:ml-[300px] sm:ml-16 ml-2 rounded bg-[#1383C5]">
                Join Us
              </button>
            </Link>
          )} 
         </ul>
         
       
       
    
        </div>
       </div>
    )}
    export default Nav;