import React from 'react';
import Rocket2 from '../Rocket2/Rocket2';

function Rocketpage() {
  return (
    <div className='mt-36 w-full'>
      <div className='flex'>
        <div className="text-white p-8 w-1/2 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-12 relative">
              <div className="flex items-start space-x-4 relative">
                <div className="bg-yellow-200 rounded-full p-2 text-black z-10">01</div>
                <div className="flex-grow">
                  <h2 className="text-4xl text-gray-500 font-semibold mb-2">Create</h2>
                  <p className="text-gray-700">
                    Configure the settings for your group card. Choose from a variety of templates, upload your own images, and add text to create a card.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 relative">
                <div className="bg-yellow-200 rounded-full p-2 text-black z-10">02</div>
                <div className="flex-grow">
                  <h2 className="text-4xl font-semibold mb-2 text-gray-500">Collaborate</h2>
                  <p className="text-gray-700">
                    Add the members of your team or organization to the card. Assign different roles and permissions to each member and start collaborating on the card.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 relative">
                <div className="bg-yellow-200 rounded-full p-2 text-black z-10">03</div>
                <div className="flex-grow">
                  <h2 className="text-4xl font-semibold mb-2 text-gray-500">Deliver</h2>
                  <p className="text-gray-700">
                    Review your group card to ensure everything is correct and accurate. Once you're satisfied, approve the card and it will be live and delivered to the recipient.
                  </p>
                </div>
              </div>
              {/* Connecting lines */}
              <div className="absolute left-[17px] top-[0px] w-[2px] h-[calc(100%-80px)] bg-gray-400 z-0"></div>
            </div>
            <div className="space-y-4"></div>
          </div>
        </div>
        {/* Rocket2 Component */}
        <div className="w-1/2 ">
          <Rocket2 />
        </div>
      </div>
    </div>
  );
}

export default Rocketpage;
