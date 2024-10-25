import React from 'react';
import { Data } from '../Photos';

function GroupCards() {
  return (
    <div className='flex flex-col items-start mt-48'>
      <h1 className='text-4xl md:text-6xl mb-8 text-center w-full'>Group Cards for Every Occasion</h1>
      
      <div className='flex flex-col md:flex-row w-full max-w-full justify-start'>
        <div className='flex flex-wrap w-full md:w-1/2  gap-3 p-4 md:p-14 justify-center'>
          {Data.map(item => (
            <div key={item.id} className='flex flex-col items-center justify-center h-48 w-48 rounded-lg shadow-lg mb-5 overflow-hidden'>
              <img 
                src={item.img} 
                alt={`Image ${item.id}`} 
                className='h-32 w-32 object-cover' 
              />
              <h1 className='mt-4 text-center'>{item.detail}</h1>
            </div>
          ))}
          <div className='flex items-center justify-center w-full mt-6'>
            <button className='px-4 py-2 bg-gradient-to-r from-[#C7AFFE] to-[#E2BFFE] text-black rounded hover:opacity-80'>
              See More
            </button>
          </div>
        </div>

        <div className='flex items-center justify-center w-full md:w-1/2 text-center'>
          <h2 className='text-lg md:text-4xl opacity-65'>
            Group cards for team celebrations,<br/> birthdays, anniversaries, holidays, or<br/> any casual get-togethers or formal <br/>events.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default GroupCards;
