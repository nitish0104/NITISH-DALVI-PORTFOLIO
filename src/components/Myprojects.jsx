import React, { useState, useEffect } from 'react';
import Project1Image from '../images/oil-rig.png'; // Import the image for Project 1

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Description for Project 1. This is a sample description for Project 1. It provides an overview of what the project is about.',
    image: Project1Image,
    tools: ['React', 'Tailwind CSS', 'Firebase'],
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description for Project 2. This is a sample description for Project 2. It provides an overview of what the project is about.',
    image: 'https://via.placeholder.com/300',
    tools: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Description for Project 3. This is a sample description for Project 3. It provides an overview of what the project is about.',
    image: 'https://via.placeholder.com/300',
    tools: ['Vue.js', 'Bootstrap', 'MySQL'],
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'Description for Project 4. This is a sample description for Project 4. It provides an overview of what the project is about.',
    image: 'https://via.placeholder.com/300',
    tools: ['Angular', 'Sass', 'Firebase'],
  },
];

const ProjectSlider = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [hoveredProjectIndex, setHoveredProjectIndex] = useState(null);
  const [isLaptop, setIsLaptop] = useState(window.innerWidth > 1024); // Assuming laptop width

  useEffect(() => {
    const handleResize = () => {
      setIsLaptop(window.innerWidth > 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePrevClick = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleHover = (index) => {
    setHoveredProjectIndex(index);
  };

  const handleLeave = () => {
    setHoveredProjectIndex(null);
  };

  return (
    <div className='bg-[#faffd6]'>

    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-8 relative">
        <span className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black h-0.5 w-6"></span>
       My Project's
        <span className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black h-0.5 w-6"></span>
      </h1>
      <div className={`grid ${isLaptop ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8' : ''} relative`}>
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`rounded-lg overflow-hidden shadow-md transition duration-300 transform ${isLaptop && index !== hoveredProjectIndex ? 'hover:scale-105' : 'mb-4'} ${isLaptop && hoveredProjectIndex !== null && index !== hoveredProjectIndex ? 'filter blur-sm' : ''}`}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={handleLeave}
            style={{ transform: hoveredProjectIndex === index ? 'scale(1.05)' : 'scale(1)' }} // Adjusted here
          >
            <img
              src={project.image}
              alt={project.title}
              className={`object-cover w-full h-64`}
            />
            <div className="p-4  bg-gray-100">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-700 mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap">
                {project.tools.map((tool, index) => (
                  <span key={index} className="mr-2 mb-2 px-2 py-1 bg-gray-200 text-gray-800 rounded-md text-sm">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
        </div>
      
    </div>
  );
};

export default ProjectSlider;
