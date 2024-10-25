import React from 'react'
import { Profile } from '../Photos'

function Section4() {
  return (
    <div className='py-12 mt-20 container mx-auto'>
      <div className='text-center mb-8'>
        <h1 className='text-4xl font-bold'>View a Sample Group eCard</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-10 my-24'>
        {
          Profile.map(item => (
            <div key={item.id} className='rounded-3xl shadow-sm border w-fit'>
              <img 
                src={item.img} 
                alt={item.dis} 
                className='h-[240px] w-[388px] object-cover rounded-t-3xl' 
              />
              <div className='flex justify-between items-center py-4 px-6'>
                <h1 className='text-xl font-bold text-violet-600 '>{item.dis}</h1>
                <button className='bg-violet-600 text-white px-6 py-2 rounded-lg hover:bg-violet-700 transition-all'>
                  View Sample
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Section4
