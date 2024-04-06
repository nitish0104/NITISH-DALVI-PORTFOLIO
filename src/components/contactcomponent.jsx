import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

// Card component for displaying contact information
const ContactCard = ({ icon, text }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 flex items-center">
      {icon}
      <span className="ml-2">{text}</span>
    </div>
  );
};

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, for simplicity, let's just log the data
    console.log(formData);
    // You can also send this data to a server or an API
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
          <div className='mb-4 '>
          <ContactCard
            icon={<FaPhone className="text-blue-500" />}
            text="123-456-7890"
          />
          </div>
         <div className='mb-4 '>
         <ContactCard
            icon={<FaEnvelope className="text-blue-500" />}
            text="example@example.com"
          />
         </div>
          <div className='mb-4 '>

          <ContactCard
            icon={<FaMapMarkerAlt className="text-blue-500" />}
            text="1234 Street Name, City, Country"
          />
          </div>
         
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Send me a message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-semibold">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-gray-300 border rounded-md px-3 py-2"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-semibold">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-gray-300 border rounded-md px-3 py-2"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-semibold">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full border-gray-300 border rounded-md px-3 py-2 resize-none"
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
