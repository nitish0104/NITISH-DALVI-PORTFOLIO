// App.js
import React from 'react';
import About from '../components/About';
import Aboutlarge from '../components/Aboutlarge'

import Navbar from '../components/Navbar';
import Skills from './Skills';
import MyProjects from '../components/Myprojects';
import ContactComponent from '../components/contactcomponent';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
     

	  <Navbar></Navbar>
      <About />
      <Aboutlarge/>
      <MyProjects/>
      <Skills/>
      <ContactComponent />
      <Footer/>
    </div>
  );
};

export default Home;
