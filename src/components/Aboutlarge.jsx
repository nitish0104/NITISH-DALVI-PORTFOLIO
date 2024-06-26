import React, { useState, useEffect } from 'react';
import profileImage from '../images/my-circle image.jpg';
import devsecops from '../images/Devsecops-white.jpg';
import { FaWhatsapp, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSectionLarge = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [bubbles, setBubbles] = useState([]);
  const [statementIndex, setStatementIndex] = useState(0);
  const [displayedStatement, setDisplayedStatement] = useState('');
// eslint-disable-next-line
  const statements = [
    " DevOps Engineer",
    " MERN-Stack Developer",
    " Software Engineer",
    " Front-End Developer",
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

  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 400,
      easing: 'ease',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  useEffect(() => {
    const generateRandomBubbles = () => {
      const newBubbles = [];
      const bubbleColors = ['#291C3A', '#452E55', '#604471', '#7C588D'];

      for (let i = 0; i < 10; i++) {
        const size = Math.floor(Math.random() * 40) + 20;
        const left = Math.floor(Math.random() * window.innerWidth);
        const top = Math.floor(Math.random() * window.innerHeight);
        const color = bubbleColors[Math.floor(Math.random() * bubbleColors.length)];

        newBubbles.push({ size, left, top, color });
      }

      setBubbles(newBubbles);
    };

    generateRandomBubbles();

    window.addEventListener('resize', generateRandomBubbles);

    return () => window.removeEventListener('resize', generateRandomBubbles);
  }, []);

  const handleIconHover = (iconName) => {
    setHoveredIcon(iconName);
  };

  const handleIconLeave = () => {
    setHoveredIcon(null);
  };

  const iconStyles = (iconName) => ({
    fontSize: hoveredIcon === iconName ? '40px' : '32px',
    color: hoveredIcon === iconName ? 'gray' : iconName === 'whatsapp' ? '#25D366' : iconName === 'instagram' ? '#E1306C' : iconName === 'twitter' ? '#1DA1F2' : iconName === 'linkedin' ? '#0A66C2' : iconName === 'github' ? '#181717' : 'initial',
  });

  return (
    <>
      <section id='about' data-aos="zoom-in" className="relative container bg-white text-gray-900 py-32 hidden lg:block md:mt-14" style={{ height: 'calc(100vh - 4rem)' }}>
        {/* Random bubbles */}
     
        {bubbles.map((bubble, index) => (
          <div
            key={index}
            className="absolute rounded-full opacity-70"
            style={{ left: bubble.left, top: bubble.top, width: bubble.size, height: bubble.size, backgroundColor: bubble.color  }}
          />
        ))}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="relative md:w-1/2">
            <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-opacity-0 opacity-30 " style={{ backgroundImage: `url(${devsecops})`, backgroundColor: 'white' }}>
              {/* Overlay */}
              <div className="absolute inset-0 bg-white opacity-0"></div>
            </div>
<div className='h-[18vh]'>

            <h1 className="relative text-4xl md:text-6xl font-bold">Hi, I'm a {displayedStatement}</h1>

</div>
            <p className="relative mt-4 text-lg md:text-xl font-semibold">I'm a Software Developer passionate about web development ,automation , continuous integration and continuous delivery.</p>
            <a href="#contact">
            <button className="relative mt-8 bg-[#291C3A] text-white px-6 py-3 rounded-full shadow-md hover:bg-purple-950 hover:text-gray-200 transition duration-300">Contact Me</button>
            </a>
            {/* Social Media Icons */}
            <div className="relative mt-8 flex items-center">
              <a href="https://wa.me/9987274285" target="_blank" rel="noopener noreferrer" className="mr-4"
                onMouseEnter={() => handleIconHover('whatsapp')} onMouseLeave={handleIconLeave}>
                <FaWhatsapp size={32} style={iconStyles('whatsapp')} />
              </a>
              <a href="https://www.instagram.com/nitish.dalvi/" target="_blank" rel="noopener noreferrer" className="mr-4"
                onMouseEnter={() => handleIconHover('instagram')} onMouseLeave={handleIconLeave}>
                <FaInstagram size={32} style={iconStyles('instagram')} />
              </a>
              <a href="https://twitter.com/NitishDalvi01" target="_blank" rel="noopener noreferrer" className="mr-4"
                onMouseEnter={() => handleIconHover('twitter')} onMouseLeave={handleIconLeave}>
                <FaTwitter size={32} style={iconStyles('twitter')} />
              </a>
              <a href="https://www.linkedin.com/in/nitishdalvi/" target="_blank" rel="noopener noreferrer" className="mr-4"
                onMouseEnter={() => handleIconHover('linkedin')} onMouseLeave={handleIconLeave}>
                <FaLinkedin size={32} style={iconStyles('linkedin')} />
              </a>
              <a href="http://github.com/nitish0104" target="_blank" rel="noopener noreferrer"
                onMouseEnter={() => handleIconHover('github')} onMouseLeave={handleIconLeave}>
                <FaGithub size={32} style={iconStyles('github')} />
              </a>
            </div>
          </div>
          <div className="md:w-5/12 mt-10 md:mt-0 flex items-center justify-center">
            <img src={profileImage} alt="Profile" className="mx-auto md:mx-0  border-white  w-[70%] h-[70%] object-contain" />
          </div>
        </div>
        {/* Left and right lines */}
        <div className="absolute left-0 top-1/2 h-2 bg-purple-950 w-16 transform -translate-y-1/2"></div>
        <div className="absolute right-0 top-1/2 h-2 bg-purple-950 w-16 transform -translate-y-1/2"></div>
      </section>
    </>
  );
};

export default HeroSectionLarge;
