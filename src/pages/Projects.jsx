import React from 'react';
import PageLayout from '../components/layout/PageLayout';

const Projects = () => {
  const projects = [
    {
      title: "3D Portfolio",
      description: "Personal portfolio website with Three.js animations",
      tech: ["React", "Three.js", "Tailwind CSS"],
      github: "https://github.com/username/3d-portfolio"
    },
    {
      title: "Blog Platform",
      description: "Modern blogging platform with markdown support",
      tech: ["Next.js", "MongoDB", "TypeScript"],
      github: "https://github.com/username/blog-platform"
    }
  ];

  return (
    <PageLayout title="Projects">
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Projects;