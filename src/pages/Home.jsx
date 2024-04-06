// App.js
import React from 'react';
import About from '../components/About';
import Aboutlarge from '../components/Aboutlarge'
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Skills from '../components/Skills';
import MyProjects from '../components/Myprojects';

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
      <Contact />
    </div>
  );
};

export default Home;
