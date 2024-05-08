import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { toast, ToastContainer ,Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from './Spinner';


// Card component for displaying contact information

const ContactComponent = () => {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false); // State to track loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submitting

    try {
      const response = await fetch('https://contact-backend-one.vercel.app/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to send email.');
      }

      toast.success('Email sent successfully!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });;
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error occurred:', error.message);
      toast.error('Failed to send email.');
    } finally {
      setLoading(false); // Set loading back to false after email is sent
    }
  };




  return (
    <section data-aos="fade-right" id="contact" className="bg-[#E1EBED]  md:py-8 sm:py-4 h-screen " >
    <div class="container md:px-32  px-6 py-4 mx-auto bg-[#E1EBED]">
        <div className='mt-8'>
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-8 relative text-black">
        <span className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black h-0.5 w-12"></span>
       Contact Me
        <span className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black h-0.5 w-12"></span>
      </h1>
        </div>

        <div class="pb-6 grid grid-cols-1 gap-6 my-24 lg:grid-cols-2  ">
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                    <span class="inline-block p-3 text-white rounded-full bg-[#291C3A] ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </span>

                    <h2 class="mt-4 text-base font-medium text-gray-800 ">Email</h2>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">i'll connect you within 24hrs</p>
                    <p class="mt-2 text-sm text-black dark:text-blue-400">nitish1dalvi@gmail.com</p>
                </div>

                <div>
    <span class="inline-block p-3 text-white rounded-full bg-[#291C3A] ">
    <FaWhatsapp className="text-2xl" />
    </span>
    
    <h2 class="mt-4 text-base font-medium text-gray-800 ">Whatsapp chat</h2>
    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Mostly replied time between 1-2hrs.</p>
    <a href="https://wa.me/9987274285" target="_blank" rel="noopener noreferrer" className='mt-2 text-sm text-black dark:text-blue-400'>
    Start new chat
        </a>
    
</div>


                <div>
                    <span class="inline-block p-3 text-white rounded-full bg-[#291C3A] ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </span>
                    
                    <h2 class="mt-4 text-base font-medium text-gray-800 ">Home</h2>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Come say hello at my place.</p>
                    <p class="mt-2 text-sm text-black dark:text-blue-400">Thane,maharashtra,India</p>
                </div>

                <div>
                    <span class="inline-block p-3 text-white rounded-full bg-[#291C3A] ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </span>
                    
                    <h2 class="mt-4 text-base font-medium text-gray-800 ">Phone</h2>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Mon-Fri from 8am to 5pm.</p>
                    <p class="mt-2 text-sm text-black dark:text-blue-400">+91 9987274285</p>
                </div>
            </div>

            <div class=" rounded-lg bg-[#E1EBED] text-black ">
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
            <button type="submit" className="hover:bg-[#3c2954] w-full font-semibold text-white px-4 py-2 rounded-md bg-[#291C3A] transition-colors">
            {!loading ? "Submit" : <Spinner/>}
            </button>
          </form>
            </div>
        </div>
    </div>
    <ToastContainer />

</section>
  );
};

export default ContactComponent;
