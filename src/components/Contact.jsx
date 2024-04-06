

import React from 'react';

const Contact = () => {
  return (
    <section className="py-8 h-screen">
      <div className=" mx- h-[100%]">
        {/* Display project cards */}
        {/* Example: */}
        <div className="bg-white p-4 shadow-md rounded-md h-[100%] flex items-center justify-center text-2xl font-bold">
          <h3 className="text-lg font-semibold">Contacts</h3>
          <p className="text-gray-700">
          Email: <a href="mailto:you@example.com">you@example.com</a>
        </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
