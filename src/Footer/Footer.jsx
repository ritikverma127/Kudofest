import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <div className="bg-custom-gradient mt-20 w-full">
            <div className="flex justify-center items-center pt-20">
                <div className="flex gap-2">
                    
                <img src="Group.png" className="h-10 w-10" alt="Logo" />
                <h1 className="text-4xl font-bold">UDOFEST</h1>
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <ul className="flex flex-wrap justify-center gap-10 font-serif text-2xl">
                    <a href="#" className='hover:underline'><li>Home</li></a>
                    <a href="#" className='hover:underline'><li>Kudos</li></a>
                    <a href="#" className='hover:underline'><li>Features</li></a>
                    <a href="#" className='hover:underline'><li>FAQs</li></a>
                    <a href="#" className='hover:underline'><li>Help</li></a>
                </ul>
            </div>
            <div className="flex justify-center mt-10">
                <img src="Line.png" alt="Divider Line" className="w-sm max-w-sm" />
            </div>
            <div className="flex justify-center mt-10 gap-10">
                <FaTwitter className="h-10 w-10" />
                <FaFacebookF className="h-10 w-10" />
                <FaInstagram className="h-10 w-10" />
                <FaLinkedin className="h-10 w-10" />
            </div>
            <div className="flex justify-center mt-10">
                <h1 className="font-serif text-xl text-center mb-10">
                    © Copyright 2024, All Rights <br /><span className='flex justify-center'>Reserved</span>
                </h1>
            </div>
        </div>
    );
}

export default Footer;
