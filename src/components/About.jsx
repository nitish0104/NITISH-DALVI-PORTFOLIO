
import React, { useEffect, useState } from 'react';
import profileImage from '../images/my-image.jpg';


const SmallDeviceSection = () => {
  const [statementIndex, setStatementIndex] = useState(0);
  const [displayedStatement, setDisplayedStatement] = useState('');
// eslint-disable-next-line
  const statements = [
    " DevOps Engineer",
    " Software Engineer",
    " MERN-Stack Developer",
    " Front-end Developer",
    "Full-Stack Developer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      let currentIndex = 0;
      let interval = setInterval(() => {
        if (currentIndex <= statements[statementIndex].length) {
          setDisplayedStatement(statements[statementIndex].slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setStatementIndex((prevIndex) => (prevIndex + 1) % statements.length);
          }, 700); // Delay before next statement starts
        }
      }, 200); // Interval between letter reveal
      return () => clearInterval(interval);
    }, 1000); // Interval before next statement starts

    return () => clearInterval(interval);
  }, [statementIndex, statements]);
 

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
    
    <section className="relative h-screen bg-gray-900 text-white z-10 " id="about" style={{ height: 'calc(100vh - 4rem)' }}>
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-opacity-50" style={{backgroundImage: `url(${profileImage})`}}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="relative flex flex-col justify-center items-center h-full">
        <div className="max-w-4xl px-4 text-center">
          <div className='h-[18vh] '>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"> Hi, I'm a {displayedStatement}</h1>

          </div>
          <p className="text-lg sm:text-xl md:text-2xl mb-8">I'm a Software Developer passionate about web development ,automation , continuous integration and continuous delivery.</p>
        </div>
      </div>
    </section>
    </>
  );
};

export default SmallDeviceSection;





