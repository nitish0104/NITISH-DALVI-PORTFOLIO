import React, { useState, useEffect } from 'react';
import profileImage from '../images/my-circle image.jpg';
import devsecops from '../images/Devsecops-white.jpg';
import { FaWhatsapp, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
const HeroSectionLarge = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [bubbles, setBubbles] = useState([]);
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
  }, []);
  useEffect(() => {
    const generateRandomBubbles = () => {
      const newBubbles = [];
      const bubbleColors = ['#291C3A', '#452E55', '#604471', '#7C588D']; // Add more shades as needed

      for (let i = 0; i < 10; i++) { // Adjust number of bubbles as needed
        const size = Math.floor(Math.random() * 40) + 20; // Random size between 20 and 60
        const left = Math.floor(Math.random() * window.innerWidth);
        const top = Math.floor(Math.random() * window.innerHeight);
        const color = bubbleColors[Math.floor(Math.random() * bubbleColors.length)];

        newBubbles.push({ size, left, top, color });
      }

      setBubbles(newBubbles);
    };

    generateRandomBubbles();

    // Re-generate bubbles when the window is resized
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
      <section id='about' data-aos="zoom-in" className="relative bg-white text-gray-900 py-32 hidden lg:block md:mt-8" style={{ height: 'calc(100vh - 4rem)' }}>
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

            <h1 className="relative text-4xl md:text-6xl font-bold">Hi, I'm a DevOps Engineer</h1>

            <p className="relative mt-4 text-lg md:text-xl font-semibold">I'm a DevOps Engineer passionate about automation and continuous integration and continuous delivery.</p>
            <button className="relative mt-8 bg-[#291C3A] text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-900 hover:text-gray-200 transition duration-300">Contact Me</button>
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
          <div className="md:w-5/12 mt-10 md:mt-0">
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
