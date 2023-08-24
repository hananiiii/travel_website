import Popular from "./Popular";




function Carousel() {
    const scrollLeft =() =>{
        document.getElementById("Content").scrollLeft -=800;
        }
        const scrollRight =() =>{
            document.getElementById("Content").scrollLeft +=800;
        }
    return ( 
        <div className="bg-[#ECECEC] w-screen h-screen pt-16 ">
             <div className="flex flex-row lg:gap-[1070px] sm:gap-72 gap-32">
            <h3 className=" lg:pl-16 sm:pl-16 pl-8 text-[#39454B] lg:text-2xl   sm:text-2xl text-xl  font-abc font-semibold">Popular destination</h3>
              <div className="flex flex-row gap-0">
                <button onClick={scrollLeft} className="text-3xl text-[#1383C5] "><ion-icon name="chevron-back-circle"></ion-icon></button>
                <button onClick={scrollRight}  className="text-3xl  text-[#1383C5] "><ion-icon name="chevron-forward-circle"></ion-icon></button>
              </div>
            </div>
        <div id="Content" className=" Carousel bg-[#ECECEC]   items-center justify-start flex flex-row  overflow-x-auto scrollbar-hide">
              <div><Popular/></div>
            <div><Popular/></div>
        </div>
        </div>
       
     );
}

export default Carousel;