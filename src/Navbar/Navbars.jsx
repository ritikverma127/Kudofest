import React, { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

function Navbars() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sidebarRef = useRef();

  const links = [
    { name: 'Occasions', href: '#' },
    { name: 'Events', href: '#' },
    { name: 'Platform', href: '#' },
    { name: 'Pricing', href: '#' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='container mx-auto'>
      <div className="flex flex-col">
        <header className="p-10 lg:px-6 h-14 flex items-center">
          
          <div className='flex items-center'>
            <a className="flex items-center" href="#">
              <img src="Group 2.png" className='h-6 w-6 mb-1' alt="Logo" />
              <span className="font-bold text-2xl ml-2">UDOFEST</span>
            </a>
          </div>
          
          <nav className="mx-auto hidden md:flex gap-6 text-bold">
            {links.map((link) => (
              <a
                key={link.name}
                className="text-xl font-medium hover:underline underline-offset-4 hover:text-blue-600 transition duration-300"
                href={link.href}
              >
                {link.name}
              </a>
            ))}
          </nav>
        
          <div className="hidden md:flex gap-4">
            <button className='bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300'>
              <a href='#'>Login</a>
            </button>
            <button className='bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300'>
              <a href='#'>Sign up</a>
            </button>
          </div>
         
          <button className="md:hidden ml-auto text-xl" onClick={toggleMenu}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </header>
      </div>
     
      {isMenuOpen && (
        <div className="fixed inset-0 z-30 bg-black bg-opacity-50" onClick={toggleMenu}>
          <div
            className="absolute top-0 right-0 w-64 h-full bg-white shadow-lg p-6"
            ref={sidebarRef}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="text-xl mb-4" onClick={toggleMenu}>
              <X className="w-6 h-6 hover:text-red-600 transition duration-300" />
            </button>
            <nav className="flex flex-col">
              {links.map((link) => (
                <a
                  key={link.name}
                  className="text-lg py-2 hover:underline hover:text-blue-600 transition duration-300"
                  href={link.href}
                >
                  {link.name}
                </a>
              ))}
              <hr className="my-4" />
              <button className='bg-black text-white px-4 py-2 rounded-md mb-2 hover:bg-gray-800 transition duration-300'>
                <a href='#'>Login</a>
              </button>
              <button className='bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300'>
                <a href='#'>Sign up</a>
              </button>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbars;
