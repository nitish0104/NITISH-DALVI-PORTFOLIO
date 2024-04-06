
import React, { useEffect, useState } from 'react';
import profileImage from '../images/my-image.jpg';


const SmallDeviceSection = () => {
  const [statementIndex, setStatementIndex] = useState(0);
  const statements = [
    " DevOps Engineer",
    " Software Engineer",
    " MERN-Stack Developer",
    " Front-end Developer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStatementIndex((prevIndex) => (prevIndex + 1) % statements.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
 

  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallDevice(window.innerWidth < 768); // Adjust breakpoint as per your requirement
    };

    checkScreenSize(); // Initial check
    window.addEventListener('resize', checkScreenSize); // Listen for resize events

    // Clean up event listener
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  if (!isSmallDevice) {
    return null; // Skip rendering for larger screens
  }

  return (
    <>
    
    <section className="relative h-screen bg-gray-900 text-white z-10 " style={{ height: 'calc(100vh - 4rem)' }}>
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-opacity-50" style={{backgroundImage: `url(${profileImage})`}}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="relative flex flex-col justify-center items-center h-full">
        <div className="max-w-4xl px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"> Hi, I'm a{statements[statementIndex]}</h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8">I'm a DevOps Engineer passionate about automation and continuous integration and continuous delivery.</p>
        </div>
      </div>
    </section>
    </>
  );
};

export default SmallDeviceSection;





