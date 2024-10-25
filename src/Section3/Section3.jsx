import React from 'react';
// import Image from 'next/image'

function Section3() {
    const testimonials = [
        { gradient: 'bg-gradient-to-b from-[#C8AFFE] to-[#e4c1fe]' },
        { gradient: 'bg-gradient-to-b from-[#8affb2] to-[#d3ffc3]'},
        { gradient: 'bg-gradient-to-b from-[#ffe978] to-[#fbf8e8]' },
    ];

    return (
        <div className='mt-20 '>
            <div className="bg-customBg text-black py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold text-center mt-20">
                        How Kudofest brings people together
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`${testimonial.gradient} ${testimonial.textColor} p-8 h-[380px] flex flex-col justify-between rounded-3xl`}
                            >
                                <div className="flex-grow">
                                    <p className="text-lg font-medium mb-4">
                                        &quot;We love Landingfolio! Our designers were using it for their projects, so clients already knew what.&quot;
                                    </p>
                                    <div className="mt-4">
                                        <p className="font-semibold">Bessie Cooper</p>
                                        <p className="text-sm opacity-75">Co-Founder, CEO</p>
                                    </div>
                                </div>
                                <div className="h-2 border-t border-[#CBD5E1]"></div>
                                <div className="flex justify-between items-center mt-6">
                                    <div className="flex items-center">
                                        
                                        <span className="font-mono text-sm"><img src="Logo.png" alt="Alter Logo" /></span>
                                    </div>
                                    <img
                                        src="/Ellipse 18.png"
                                        alt="Avatar"
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section3;
