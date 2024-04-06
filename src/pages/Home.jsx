// App.js
import React from 'react';
import About from '../components/About';
import Aboutlarge from '../components/Aboutlarge'

import Navbar from '../components/Navbar';
import Skills from '../components/Skills';
import MyProjects from '../components/Myprojects';
import ContactComponent from '../components/contactcomponent';

const Home = () => {
  return (
    <div>
      {/* <Header /> */}
	  <Navbar></Navbar>
      <About />
      <Aboutlarge></Aboutlarge>
      {/* <Projects /> */}
      <MyProjects></MyProjects>
      <Skills/>
      <ContactComponent />
    </div>
  );
};

export default Home;
