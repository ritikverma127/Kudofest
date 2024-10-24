import React from 'react'

function Navbars() {
  return (
    <div>
     <div className="flex flex-col">
      <header className="p-10 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <span className="sr-only">Kudofest</span>
          <span className="font-bold text-xl">KUDOFEST</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6 text-bold">
          <a className="text-xl text-bold font-medium hover:underline underline-offset-4" href="#">
            Occasions
          </a>
          <a className="text-xl text-bold  font-medium hover:underline underline-offset-4" href="#">
            Events
          </a>
          <a className="text-xl text-bold  font-medium hover:underline underline-offset-4" href="#">
            Platform
          </a>
          <a className="text-xl text-bold  font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </a>
        </nav>
        <div className="ml-auto flex gap-2">
          <button className='bg-black text-white px-6 py-3 rounded-md'>
            Login
          </button>
          <button className='bg-black text-white px-6 py-3 rounded-md'>Sign up</button>
        </div>
      </header>
      ,</div>
    </div>
  )
}

export default Navbars
