import profileImage from '../images/my-circle image.jpg';
import { FaWhatsapp, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';


const HeroSectionLarge = () => {

  return (
    <>
      <section className="bg-white text-gray-900 py-20 hidden lg:block " style={{ height: 'calc(100vh - 4rem)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm a DevOps Engineer</h1>

            <p className="mt-4 text-lg md:text-xl">I'm a DevOps Engineer passionate about automation and continuous integration and continuous delivery.</p>
            <button className="mt-8 bg-blue-900 text-white px-6 py-3 rounded-full shadow-md hover:bg-gray-300 transition duration-300">Contact Me</button>
              {/* Social Media Icons */}
            <div className="mt-8 flex items-center">
              <a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer" className="mr-4">
                <FaWhatsapp size={32} color="#25D366" />
              </a>
              <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer" className="mr-4">
                <FaInstagram size={32} color="#E1306C" />
              </a>
              <a href="https://twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer" className="mr-4">
                <FaTwitter size={32} color="#1DA1F2" />
              </a>
              <a href="https://www.linkedin.com/in/nitishdalvi/" target="_blank" rel="noopener noreferrer" className="mr-4">
                <FaLinkedin size={32} color="#0A66C2" />
              </a>
              <a href="http://github.com/nitish0104" target="_blank" rel="noopener noreferrer">
                <FaGithub size={32} color="#181717" />
              </a>
            </div>
          </div>
          <div className="md:w-5/12 mt-10 md:mt-0">
            <img src={profileImage} alt="Profile" className="mx-auto md:mx-0  border-white  w-[70%] h-[70%] object-contain" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSectionLarge;


// import React, { useState, useEffect } from 'react';
// import profileImage from '../images/my-image.jpg';

// const HeroSectionLarge = () => {
//   const [statementIndex, setStatementIndex] = useState(0);
//   const statements = [
//     "Hi, I'm a DevOps Engineer",
//     "Hi, I'm a Software Engineer",
//     "Hi, I'm a MERN-Stack Developer",
//     "Hi, I'm a Front-end Developer"
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setStatementIndex((prevIndex) => (prevIndex + 1) % statements.length);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <section className="bg-gray-900 text-white py-20 hidden lg:block">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between">
//           <div className="md:w-1/2">
//             <h1 className="text-4xl md:text-6xl font-bold">{statements[statementIndex]}</h1>

//             <p className="mt-4 text-lg md:text-xl">I'm a DevOps Engineer passionate about automation and infrastructure as code.</p>
//             <button className="mt-8 bg-white text-gray-900 px-6 py-3 rounded-full shadow-md hover:bg-gray-300 transition duration-300">Contact Me</button>
//           </div>
//           <div className="md:w-5/12 mt-10 md:mt-0">
//             <img src={profileImage} alt="Profile" className="mx-auto md:mx-0 rounded-3xl border-4 border-white shadow-md w-[60%] h-[60%] object-cover" />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default HeroSectionLarge;
