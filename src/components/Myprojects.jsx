import React, { useState, useEffect } from 'react';
import Project1Image from '../images/oil-rig.png'; 
import Project2Image from '../images/Devsecops-landingpage.png'; 
import Project3Image from '../images/Todo-GitOps.png';  
import Project4Image from '../images/portfolio-website.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'OilRig-Frontend',
    description: 'Oil-rig a Industrial Category Responsive website using html,css ,js and for modern design Bootstrap is used.',
    image: Project1Image,
    tools: ['HTML', 'Bootstrap ', 'NodeJs', 'Github Action','AWS S3'],
    githubLink:  'https://github.com/nitish0104/oil-rig',
    web:"https://oil-rig.vercel.app/"
  },
  {
    id: 2,
    title: 'Landingpage-DevSecOps',
    description: 'Deployed a Simple Landingpage created in Python The .CI/CD for this project is done using jenkins.The code quality check and docker image scan is done by sonarqube and trivy. For deployment kubernetes is used (EKS) .Monitoring and visualization is done using prometheus and grafana.',
    image: Project2Image,
    tools: ['Docker', 'K8s', 'Jenkins','Sonarqube','Prometheus','Grafana','AWS VPC,Ec2'],
    githubLink:  'https://github.com/nitish0104/DevSecOps-Python-Landingpage'
  },
  {
    id: 3,
    title: 'ToDo-GitOps',
    description: 'A simple todo application using python.Where jenkins,docker ,Kubernetes are used . And for Continuous Deployment Argocd is used which is GitOps Tool.',
    image: Project3Image,
    tools: ['ArgoCD', 'Jenkins', 'Docker','Kubernetes','Aws Ec2'],
    githubLink:  'https://github.com/nitish0104/TODO-CI-CD'
  },
  {
    id: 4,
    title: 'My-Portfolio-Website',
    description: 'This is my personal portfolio website created using React and Tailwind . The simple backend is created using Express (nodemailer). The website is deployed on aws s3 using CI/CD github Action.',
    image: Project4Image,
    tools: ['AWS S3', 'ReactJs', 'Tailwind', 'Express' ,'Github Action', 'Docker'],
    web:"http://nitish-dalvi.s3-website-us-east-1.amazonaws.com/",
    githubLink:  'https://github.com/nitish0104/NITISH-DALVI-PORTFOLIO/'
  },
];

const ProjectSlider = () => {
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

 

  const handleHover = (index) => {
    setHoveredProjectIndex(index);
  };

  const handleLeave = () => {
    setHoveredProjectIndex(null);
  };
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
  }, []);

  return (
    <section data-aos="fade-right" id="projects" className='md:h-screen bg-[#E1EBED]'>
      <div className='bg-[#E1EBED]'>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-8 relative">
            <span className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black h-0.5 w-12"></span>
            My Project's
            <span className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black h-0.5 w-12"></span>
          </h1>
          <div className={`grid ${isLaptop ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8' : ''} relative`}>
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`rounded-lg overflow-hidden shadow-md transition duration-300 transform ${isLaptop && index !== hoveredProjectIndex ? 'hover:scale-105' : 'mb-4'} ${isLaptop && hoveredProjectIndex !== null && index !== hoveredProjectIndex ? 'filter blur-sm' : ''}`}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={handleLeave}
                style={{ transform: hoveredProjectIndex === index ? 'scale(1.02)' : 'scale(1)' }}
              >
                <a href={project.web} target='_blank' rel="noopener noreferrer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`object-cover w-full h-64`}
                  />
                </a>
                <div className="p-4 bg-gray-100">
                  <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                  <p className={`text-gray-700 mb-4 ${hoveredProjectIndex === index ? 'overflow-auto max-h-24' : 'line-clamp-3'}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap">
                    {project.tools.map((tool, index) => (
                      <span key={index} className="mr-2 mb-2 px-2 py-1 bg-gray-200 text-gray-800 rounded-md text-sm">{tool}</span>
                    ))}
                  </div>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center justify-center text-white bg-[#291C3A] hover:text-gray-300 rounded-sm h-8 cursor-pointer">
                    <FaGithub size={24} className="mr-2" />
                    View Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;
