import React from 'react';

// Import icons from modern modules
import { SiDocker, SiKubernetes, SiReact, SiMongodb, SiLinux, SiTerraform, SiJenkins, SiGithub, SiPrometheus, SiGrafana, SiSonarqube  } from 'react-icons/si';
import { FaAws } from "react-icons/fa6";

const Skills = () => {
  // Define skills with their respective proficiency scales
  const skills = [
    { name: "Docker", icon: <SiDocker size={48} />, scale: 50 },
    { name: "Kubernetes", icon: <SiKubernetes size={48} />, scale: 60 },
    { name: "ReactJs", icon: <SiReact size={48} />, scale: 90 },
    { name: "MongoDB", icon: <SiMongodb size={48} />, scale: 40 },
    { name: "AWS", icon: <FaAws size={48} />, scale: 70 },
    { name: "Linux", icon: <SiLinux size={48} />, scale: 85 },
    { name: "Terraform", icon: <SiTerraform size={48} />, scale: 65 },
    { name: "Jenkins", icon: <SiJenkins size={48} />, scale: 60 },
    { name: "GitHub", icon: <SiGithub size={48} />, scale: 85 },
    { name: "Prometheus", icon: <SiPrometheus size={48} />, scale: 30 },
    { name: "Grafana", icon: <SiGrafana size={48} />, scale: 35 },
    { name: "SonarQube", icon: <SiSonarqube size={48} />, scale: 40 }
  ];

  return (
    <div className="p-3 md:p-8 bg-[#291C3A] h-screen text-white">
      <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
      <div className="flex justify-around h-full mt-8">
        {/* First vertical plane */}
        <div className="text-center w-1/2 h-full pr-2">
          {skills.slice(0, Math.ceil(skills.length / 2)).map((skill, index) => (
            <div key={index} className="mb-8 flex items-center justify-center">
              <div className="w-4/4 mr-2 md:mr-4 ">
                {skill.icon}
              </div>
              <div className="w-3/4">
                <p className="font-semibold">{skill.name}</p>
                <div className="h-2 bg-[#291C3A] mt-2">
                  <div className="h-full bg-yellow-500" style={{ width: `${skill.scale}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Second vertical plane */}
        <div className="text-center w-1/2 h-full">
          {skills.slice(Math.ceil(skills.length / 2)).map((skill, index) => (
            <div key={index} className="mb-8 flex items-center justify-center">
              <div className="w-4/4 mr-2 md:mr-4">
                {skill.icon}
              </div>
              <div className="w-3/4">
                <p className="font-semibold">{skill.name}</p>
                <div className="h-2 bg-[#291C3A] mt-2">
                  <div className="h-full bg-yellow-500" style={{ width: `${skill.scale}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
