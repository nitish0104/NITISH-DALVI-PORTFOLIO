import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const smoothScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-[#291C3A] text-white shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Name on the left */}
        <div id='name'>
          <h1 className="text-xl font-semibold">Nitish Dalvi</h1>
          <p className="text-sm">DevOps Engineer</p>
        </div>
        {/* Navigation links in the center */}
        <div id='nav' className="hidden md:block">
          <div className=" flex items-center pr-9">
            {/* Navigation links */}
            <button onClick={() => smoothScrollTo('about')} className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out border-b-2 border-transparent hover:border-white">About</button>
            <button onClick={() => smoothScrollTo('projects')} className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out border-b-2 border-transparent hover:border-white">Projects</button>
            <button onClick={() => smoothScrollTo('skills')} className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out border-b-2 border-transparent hover:border-white">Skills</button>
            <button onClick={() => smoothScrollTo('contact')} className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out border-b-2 border-transparent hover:border-white">Contact</button>
          </div>
        </div>
        {/* GitHub link on the right */}
        <div id='github' className="hidden md:block">
          <a href="http://github.com/nitish0104" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FaGithub size={32} />
          </a>
        </div>
        {/* Mobile menu button */}
        <div className="-mr-2 flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 hover:bg-purple-950 focus:outline-none focus:bg-purple-800 focus:text-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {/* Icon for mobile menu */}
            <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
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
            <div ref={ref} className=" flex-col justify-center items-center bg-[#291C3A] rounded-md p-4 w-full max-w-md text-center">
              {/* Mobile Navigation links */}
              <button onClick={() => { smoothScrollTo('about'); setIsOpen(false); }} className="text-gray-300 hover:text-white block w-full px-4 py-2 rounded-md text-base font-medium mb-2 border-b-2 border-transparent hover:border-white">About</button>
              <button onClick={() => { smoothScrollTo('projects'); setIsOpen(false); }} className="text-gray-300 hover:text-white block w-full px-4 py-2 rounded-md text-base font-medium mb-2 border-b-2  border-transparent  hover:border-white">Projects</button>
              <button onClick={() => { smoothScrollTo('skills'); setIsOpen(false); }} className="text-gray-300 hover:text-white block w-full px-4 py-2 rounded-md text-base font-medium mb-2 border-b-2  border-transparent  hover:border-white">Skills</button>
              <button onClick={() => { smoothScrollTo('contact'); setIsOpen(false); }} className="text-gray-300 hover:text-white block w-full px-4 py-2 rounded-md text-base font-medium mb-2 border-b-2  border-transparent  hover:border-white">Contact</button>
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
