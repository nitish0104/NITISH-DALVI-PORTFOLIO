import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-blue-900 text-white shadow-2xl ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo on the left */}
          <div className="container mx-auto">
        <h1 className="text-xl font-semibold">Nitish Dalvi</h1>
        <p className="text-sm">DevOps Engineer</p>
      </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {/* Navigation links */}
              <Link to="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out border-b-2 border-transparent hover:border-white">About</Link>
              <Link to="#projects" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out border-b-2 border-transparent hover:border-white">Projects</Link>
              <Link to="#skills" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out border-b-2 border-transparent hover:border-white">Skills</Link>
              <Link to="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out border-b-2 border-transparent hover:border-white">Contact</Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-800 focus:outline-none focus:bg-blue-800 focus:text-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon for mobile menu */}
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              {/* <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg> */}
            </button>
          </div>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className={`${isOpen ? 'fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center' : 'hidden'} md:hidden`} id="mobile-menu">
            <div ref={ref} className="bg-blue-900 rounded-md p-4 w-full max-w-md">
              {/* Mobile Navigation links */}
              <Link to="about" className="text-gray-300 hover:text-white block px-4 py-2 rounded-md text-base font-medium mb-2 border-b-2   border-transparent hover:border-white">About</Link>
              <Link to="projects" className="text-gray-300 hover:text-white block px-4 py-2 rounded-md text-base font-medium mb-2 border-b-2  border-transparent  hover:border-white">Projects</Link>
              <Link to="skills" className="text-gray-300 hover:text-white block px-4 py-2 rounded-md text-base font-medium mb-2 border-b-2  border-transparent  hover:border-white">Skills</Link>
              <Link to="contact" className="text-gray-300 hover:text-white block px-4 py-2 rounded-md text-base font-medium mb-2 border-b-2  border-transparent  hover:border-white">Contact</Link>
              {/* Close button */}
              <button onClick={() => setIsOpen(false)} className="absolute top-0 right-0 p-2 mr-2  mt-2 text-gray-600 hover:text-gray-800 focus:outline-none">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
