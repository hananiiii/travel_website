import React from "react";
import { useState } from "react";
import Navbar from "../Components/Nav";
import Senior from "../Assets/Happy.jpeg";
import Familly from "../Assets/familly.jpeg"


const Join = () =>{
    const [firstName, setFirstName] =useState (""); 
    const [email, setEmail] =useState ("");
    const [password, setPassword] =useState ("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("First Name:", firstName);
        console.log("Email:", email);
        console.log("Password:", password);
    
        // Reset form fields after submission
        setFirstName("");
        setEmail("");
        setPassword("");
      };
    

    return(
        <div className="bg-[#ECECEC] w-screen h-screen font-abc">
               <Navbar  />
               <div className="lg:w-1/2 mt-16 lg:ml-16 ">
                   <img 
                     src={Senior}
                     className="w-[500px] h-[630px] pt-24 pl-32 rounded-full lg:block hidden "
                   />
                   <img 
                    src={Familly}
                    className="w-[350px] h-[200px]  -mt-48 ml-72 rounded-full lg:block hidden "
                   />
               </div>
               <div className="lg:w-1/2 w-full lg:ml-[1000px] lg:-mt-[550px] sm:ml-[300px] ml-[220px]  ">
                    <h3 className="font-bold text-3xl text-[#1383C5] lg:pt-12 sm:pt-24 pt-24 sm:pl-0 -ml-4 ">Join Us</h3>
                    <form onSubmit={handleSubmit} className="sm:w-[600px] w-[400px] sm:h-[500px] mt-12 -ml-[120px] flex flex-col gap-8 ">
                          <input
                           type="text"
                           placeholder="First name"
                           onChange={(e) => setFirstName(e.target.value)}
                          value={firstName}
                           className=" hover:border-2 hover:border-[#39454B]  pt-0 pl-4 text-[#1E1E1E] bg-white lg:w-[350px] sm:w-[350px] w-[300px]  h-[60px]  rounded-lg px-10"
                          /> 
                          <input
                           type="email"
                           placeholder="Email"
                           onChange={(e) => setEmail(e.target.value)}
                          value={email}
                           className=" hover:border-2 hover:border-[#39454B] pt-0 pl-4 text-[#1E1E1E] bg-white lg:w-[350px] sm:w-[350px] w-[300px]  h-[60px]  rounded-lg px-10"
                          /> 
                          <input
                           type="password"
                           placeholder="password"
                           onChange={(e) => setPassword(e.target.value)}
                          value={password}
                           className="hover:border-2 hover:border-[#39454B] pt-0 pl-4 text-[#1E1E1E] bg-white lg:w-[350px] sm:w-[350px] w-[300px]  h-[60px]  rounded-lg px-10"
                          /> 
                          <button type="submit" className=" rounded-lg lg:w-[350px] sm:w-[350px] w-[300px]  h-[60px] bg-[#1383C5] text-white">Join</button>
                    </form>
               </div>
        </div>
    )}
    export default Join;