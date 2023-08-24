import React from "react";
import Navbar from "../Components/Nav.jsx";
import Placess from "../Components/placess.jsx";

export default function (){
    return (
        <div className=" w-screen h-full font-abc">
           <Navbar showSignUpButton={true} />
           <Placess/>

        </div>
    )
}