import React from 'react';

function Section2() {
  return (
    <div className="w-full h-auto bg-customBg mt-10 ">
      <div className="mx-auto container flex flex-wrap justify-center">

      <div className=' p-4  flex justify-center items-center md:items-start md:justify-start flex-col'>
        <button className='border-2 border-black bg-white text-black rounded-xl px-4 py-2 mt-20 shadow-lg w-fit'>
          Cheers to Kudos!
        </button>
        <h1 className='text-2xl md:text-6xl font-serif mt-10 text-center md:text-start'>
          Effortless online group cards<br />Easily share and celebrate <br />together.
        </h1>
        <p className='mt-10 text-md md:text-md opacity-65 text-center md:text-start'>
          Create and share online group cards for various celebrations and<br />
          events. Collaborate with multiple users to personalize the card<br />
          with messages, images, GIFs, and videos.
        </p>
        
        
        <div className="flex justify-start mt-10 gap-10"> 
          <button className='px-8 py-4 md:px-14 md:py-6 bg-gradient-to-r from-[#C7AFFE] to-[#E2BFFE] text-black rounded-xl hover:opacity-80 '>
            Get a Card
          </button>
        </div>
      </div>
      <div className=' flex justify-center items-center mt-24'>
        <img src="mobilhand.png" alt="Mobile Hand" className="max-w-[50%] h-auto md:max-w-full" />
      </div>
      </div>
    </div>
  );
}

export default Section2;
