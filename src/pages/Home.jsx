// App.js
import React from 'react';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      {/* <Header /> */}
	  <Navbar></Navbar>
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
