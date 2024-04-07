import React from 'react';

// Import icons from modern modules
import { SiDocker, SiKubernetes, SiReact, SiMongodb, SiLinux, SiTerraform, SiJenkins, SiGithub, SiPrometheus, SiGrafana, SiSonarqube  } from 'react-icons/si';
import { FaAws } from "react-icons/fa6";

const Skills = () => {
  return (
    <div className="py-8 bg-slate-200">
      <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
      <div className="grid grid-cols-3 gap-6 md:grid-cols-4 lg:grid-cols-6">
        {/* Docker */}
        <div className="text-center">
          <SiDocker className="w-12 h-12 mx-auto mb-2 text-[#291C3A]" />
          <p className="font-semibold">Docker</p>
        </div>
        {/* Kubernetes */}
        <div className="text-center">
          <SiKubernetes className="w-12 h-12 mx-auto mb-2 text-[#291C3A]" />
          <p className="font-semibold">Kubernetes</p>
        </div>
        {/* React */}
        <div className="text-center">
          <SiReact className="w-12 h-12 mx-auto mb-2 text-[#291C3A]" />
          <p className="font-semibold">React</p>
        </div>
        {/* MongoDB */}
        <div className="text-center">
          <SiMongodb className="w-12 h-12 mx-auto mb-2 text-[#291C3A]" />
          <p className="font-semibold">MongoDB</p>
        </div>
        {/* AWS */}
        <div className="text-center">
          <FaAws className="w-12 h-12 mx-auto mb-2 text-[#291C3A]" />
          <p className="font-semibold">AWS</p>
        </div>
        {/* Linux */}
        <div className="text-center">
          <SiLinux className="w-12 h-12 mx-auto mb-2 text-[#291C3A]" />
          <p className="font-semibold">Linux</p>
        </div>
        {/* Terraform */}
        <div className="text-center">
          <SiTerraform className="w-12 h-12 mx-auto mb-2 text-[#291C3A]" />
          <p className="font-semibold">Terraform</p>
        </div>
        {/* Jenkins */}
        <div className="text-center">
          <SiJenkins className="w-12 h-12 mx-auto mb-2 text-[#291C3A]" />
          <p className="font-semibold">Jenkins</p>
        </div>
        {/* GitHub */}
        <div className="text-center">
          <SiGithub className="w-12 h-12 mx-auto mb-2 text-[#291C3A]" />
          <p className="font-semibold">GitHub</p>
        </div>
        {/* Prometheus */}
        <div className="text-center">
          <SiPrometheus className="w-12 h-12 mx-auto mb-2 text-[#291C3A]" />
          <p className="font-semibold">Prometheus</p>
        </div>
        {/* Grafana */}
        <div className="text-center">
          <SiGrafana className="w-12 h-12 mx-auto mb-2 text-[#291C3A]" />
          <p className="font-semibold">Grafana</p>
        </div>
        {/* ArgoCD */}
        <div className="text-center">
          <SiSonarqube  className="w-12 h-12 mx-auto mb-2 text-[#291C3A]" />
          <p className="font-semibold">SonarQube</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
