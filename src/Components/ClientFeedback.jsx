// src/components/ClientFeedback.js

import React, { useState } from 'react';
import Profile from "../Assets/profilepic.jpg";
import Profiletwo from "../Assets/profiletwo.jpg";
import Profilethree from "../Assets/profilethree.jpg";
import { Link } from 'react-router-dom';


const feedbackData = [
  {
    id: 1,
    name: 'John Doe',
    rating: 5,
    comment: 'Visiting Rome was an absolute dream come true The city s rich history and stunning architecture left me in awe at every turn. The Colosseum, with its grandeur and incredible history, was a sight to behold Walking through the ancient ruins of the Roman Forum made me feel like I had stepped back in time..',
    profileImg :Profile
  },
  {
    id: 2,
    name: 'Jane Smith',
    rating: 4,
    comment: 'Visiting Rome was an absolute dream come true The city s rich history and stunning architecture left me in awe at every turn. The Colosseum, with its grandeur and incredible history, was a sight to behold Walking through the ancient ruins of the Roman Forum made me feel like I had stepped back in time..',
    profileImg :Profiletwo
  },
  {
    id: 3,
    name: 'Mike Johnson',
    rating: 3,
    comment: 'Visiting Rome was an absolute dream come true The city s rich history and stunning architecture left me in awe at every turn. The Colosseum, with its grandeur and incredible history, was a sight to behold Walking through the ancient ruins of the Roman Forum made me feel like I had stepped back in time..',
    profileImg :Profilethree
  },
];

const ClientFeedback = () => {
  const [currentFeedback, setCurrentFeedback] = useState(feedbackData[0]);

  const handleImageClick = (feedback) => {
    setCurrentFeedback(feedback);
  };

  return (
    <div className="lg:w-[590px] sm:w-[590px] w-[400px] bg-[#ECECEC] lg:pt-32 sm:pt-20 pt-20 lg:pl-32 sm:pl-32 pl-16 font-abc">
      <h3 className="font-semibold text-[#39454B] text-2xl">Client Feedback</h3>
      <div className="border-t-2 mt-2 pt-2">
      <p className="font-semibold  text-[#1383C5] mt-2 underline"> {currentFeedback.name}</p>
        <p className="font-light  text-[#39454B] mt-4">{currentFeedback.comment}</p>
        
        <div className="flex items-center mb-2 mt-4">
         
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`text-2xl ${
                star <= currentFeedback.rating ? 'text-yellow-500' : 'text-gray-300'
              }`}
            >
              ★
            </span>
          ))}
        </div>
      </div>
      <div className='flex lg:gap-32 sm:gap-32 gap-20'>
      <div className="flex gap-4 mt-4">
        {feedbackData.map((feedback) => (
          <img
            key={feedback.id}
            src={feedback.profileImg}
            alt={feedback.name}
            className={`lg:w-12 lg:h-12 h-10 w-10 rounded-full cursor-pointer  ${
              currentFeedback.id === feedback.id ? 'border-2 border-blue-500' : 'border'
            }`}
            onClick={() => handleImageClick(feedback)}
          />
        ))}
      </div>
    <Link to="/Add"><p className='underline sm:text-lg text-sm font-semibold  text-[#1383C5] lg:mt-4 sm:mt-4 mt-6 cursor-pointer '>Add Feedback?</p></Link>
      </div>
    </div>
  );
};

export default ClientFeedback;
