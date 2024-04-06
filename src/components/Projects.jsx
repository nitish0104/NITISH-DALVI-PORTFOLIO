// Projects.js
import React from 'react';

const Projects = () => {
  return (
    <section className="py-8 h-screen bg-slate-300">
      <div className="bg-slate-300 mx- h-[100%]">
        {/* Display project cards */}
        {/* Example: */}
        <div className="bg-white p-4 shadow-md rounded-md h-[100%] flex items-center justify-center text-2xl font-bold">
          <h3 className="text-lg font-semibold">Project Name</h3>
          <br />
          <p className="text-gray-700">Description of the project...</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
