import React from 'react';

const Projects = ({ title, description, image, technologies, githubLink, liveDemoLink }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-56 object-cover object-center" src={image} alt={title} />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="mb-4">
          <h3 className="text-gray-800 font-semibold mb-2">Technologies Used:</h3>
          <ul className="flex flex-wrap">
            {technologies.map((tech, index) => (
              <li key={index} className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300">
            View on GitHub
          </a>
          {liveDemoLink && (
            <a href={liveDemoLink} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500 transition duration-300">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
