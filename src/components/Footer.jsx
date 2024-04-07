import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#291C3A] text-white py-4 fixed md:relative bottom-0 w-full">
      <div className="container mx-auto flex justify-center space-x-6">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-2xl" />
        </a>
        <a href="http://github.com/nitish0104" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl" />
        </a>
        <a href="https://wa.me/9987274285" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-2xl" />
        </a>
        <a href="https://twitter.com/NitishDalvi01" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-2xl" />
        </a>  
        <a href="https://www.instagram.com/nitish.dalvi/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-2xl" />
        </a>
        <a href="https://www.linkedin.com/in/nitishdalvi/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
