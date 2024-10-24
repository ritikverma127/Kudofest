import React from 'react';
import { Data } from '../Photos';

function GroupCards() {
  return (
    <div className='flex flex-col items-start mt-16'>
      <h1 className='text-6xl mb-8 text-center w-full'>Group Cards for Every Occasion</h1>
      
      <div className='flex w-full max-w-full justify-start'>
        {/* Photo Section: 50% width, wrapping items */}
        <div className='flex flex-wrap w-1/2 justify-start gap-3 p-14'>
          {Data.map(item => (
            <div key={item.id} className='flex flex-col items-center justify-center h-48 w-48 rounded-lg shadow-lg mb-5 overflow-hidden'>
              <img 
                src={item.img} 
                alt={`Image ${item.id}`} 
                className='h-32 w-32 object-cover' // Adjust size and cover
              />
              <h1 className='mt-4'>{item.detail}</h1>
            </div>
          ))}
          {/* Centered See More Button within the Photo Section */}
          <div className='flex items-center justify-center w-full mt-6'>
            <button className='px-4 py-2 bg-gradient-to-r from-[#C7AFFE] to-[#E2BFFE] text-black rounded hover:opacity-80'>
              See More
            </button>
          </div>
        </div>

        {/* Text Section: 50% width, centered beside the photos */}
        <div className='flex items-center justify-center w-1/2 text-center'>
          <h2 className='text-4xl opacity-65'>
            Group cards for team celebrations,<br/> birthdays, anniversaries, holidays, or<br/> any casual get-togethers or formal <br/>events.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default GroupCards;
