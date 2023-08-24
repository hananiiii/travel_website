import React from "react";
import Nav from "../Components/Nav";
import Hero from "../Components/Hero";
import Carousel from "../Components/Carousel";
import Recomendation from "../Components/Recomendation";
import Activities from "../Components/Activities";
import Tips from "../Components/Tips";
import Feedback from "../Components/Feedback";
import Footer from "../Components/footer"

const Home = () => {
    return(
              <>
              
              <Nav showSignUpButton={true} />
              <div className="bg-[#ECECEC] w-full h-full">
             <Hero/>
             <Carousel/>
             <Recomendation/>
             <Activities/>
             <Tips showView={true} />
             <Feedback/>
             <Footer/>
             </div>
              </>
    )}
    export default Home;