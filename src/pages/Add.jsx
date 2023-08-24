import React from "react";
import { useState } from "react";
import Navbar from "../Components/Nav";

 
const Tipps = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [feedback, setFeedback] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("First Name:", firstName);
      console.log("Last Name", lastName);
      console.log("Feedback", feedback)
      setFirstName("");
      setLastName("");
      setFeedback("")
    };
  
    const handleFeedbackChange = (e) => {
      setFeedback(e.target.value);
    };
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setSelectedImage(file);
  
      // Create a preview of the selected image
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    };
  
    const handleImportImageClick = () => {
      // Trigger the file input when the "Import Image" text is clicked
      document.getElementById("image").click();
    };
          
          
    return(
        <div className="bg-[#ECECEC] w-screen h-screen">
           
          <Navbar showSignUpButton={true}/>  
          
           <div className="pt-32">
            <h3 className="font-semibold lg:pl-16 sm:pl-16 pl-8 text-[#1383C5] underline lg:text-2xl -lg:pt-16 sm:text-2xl text-xl  font-abc">Add Feedback</h3>
            <div className="mt-12 flex justify-center lg:ml-60 sm:ml-12 ml-12  border-2 border-[#39454B]  lg:w-[990px] lg:h-[465px] sm:w-[600px] w-[370px] h-[450px] sm:h-[450px] rounded-xl">
               <form  onSubmit={handleSubmit} className="flex flex-col gap-8 mt-8 ">
                <div className="flex flex-row lg:gap-8 sm:gap-10 gap-6 lg:ml-0 sm:ml-0  ml-0 mt-0 ">
                   <input
                    type="text"
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    className=" pt-0 pl-4 border-[#39454B]  bg-white  text-[#1E1E1E]  h-[54px] lg:w-[400px] sm:w-[230px] w-[140px]  rounded-lg px-10"
                    />
                    <input
                    type="text"
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    className=" pt-0 pl-4 border-[#39454B]  bg-white lg:w-[400px] sm:w-[230px] w-[140px] text-[#1E1E1E]    h-[54px]  rounded-lg "
                       />
                </div>
                <div className="lg:w-[830px] sm:w-[500px] w-[300px] h-[250px] rounded-lg" >
                  <input
                  type="text"
                  placeholder="Your feedback"
                  value={feedback}
                
                  onChange={handleFeedbackChange}
                  className="lg:w-[830px] sm:w-[500px] w-[300px] sm:h-[250px] h-[220px] border-[#39454B]  bg-white  text-[#1E1E1E]  rounded-lg  pl-4 "
                  />
                 <button onClick={handleImportImageClick} className="text-[#1383C5] underline mt-8 font-bold lg:text-lg sm:text-md text-sm ">
                  Import Image
                 </button>
                   <input
                       type="file"
                      id="image"
                      name="image"
                     accept="image/*"
                     placeholder="import image"
                     value={selectedImage}
                     onChange={handleImageChange}
                     style={{ display: "none" }}
                     
                />
                
       
                  
               
                </div>
                <button type="submit"  className="text-white text-sm font-abc sm:w-[117px] sm:h-[40px] w-[100px] py-2 px-6 lg:ml-[710px] sm:ml-[380px] ml-[195px] sm:-mt-2 -mt-8 rounded  bg-[#1383C5] " >Send</button>
               
                </form>
            </div>
           </div>
        </div>
          
    )};
    export default Tipps;
