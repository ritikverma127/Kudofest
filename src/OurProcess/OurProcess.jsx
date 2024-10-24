import React from 'react';

function OurProcess() {
  return (
    <div>
      <div className='mt-36 h-64 flex justify-center items-center w-1/2 relative' 
           style={{ background: 'linear-gradient(180deg, #80FFB0 0%, #D9FFC5 100%)' }}>
        <h1 className='text-6xl font-serif'>Our Process</h1>
      </div>

      <div className='absolute w-1/2 -mt-20 ml-96 transform -translate-x-1/2'>
        <img src='shape.png' alt='Shape' />
      </div>

    </div>
  );
}

export default OurProcess;
    