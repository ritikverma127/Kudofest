import React from 'react'
// import Image from 'next/image'

function Section3() {
    const testimonials = [
        { gradient: 'bg-gradient-to-b from-purple-500 to-purple-200', textColor: 'text-purple-800' },
        { gradient: 'bg-gradient-to-b from-green-500 to-green-200', textColor: 'text-green-800' },
        { gradient: 'bg-gradient-to-b from-yellow-500 to-yellow-200', textColor: 'text-yellow-800' },
    ]

    return (
        <div className='mt-20'>
            <div className="bg-customBg text-black py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-6xl font-bold text-center mt-20">
                        How Kudofest brings people together
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-44">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`${testimonial.gradient} ${testimonial.textColor} rounded-lg p-8 h-[380px] w-full flex flex-col justify-between`}
                            >
                                <div>
                                    <p className="text-lg font-medium mb-4">
                                        &quot;We love Landingfolio! Our designers were using it for their projects, so clients already knew what.&quot;
                                    </p>
                                    <div className="mt-4">
                                        <p className="font-semibold">Bessie Cooper</p>
                                        <p className="text-sm opacity-75">Co-Founder, CEO</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mt-6">
                                    <div className="flex items-center">
                                        <div className="bg-black rounded p-1 mr-2">
                                        </div>
                                        <span className="font-mono text-sm">Alterbone</span>
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
    )
}

export default Section3
