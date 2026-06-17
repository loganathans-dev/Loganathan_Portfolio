import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "ShoeShop — AI-Powered E-Commerce",
      description: "A scalable AI-powered e-commerce platform with responsive UI. Features secure JWT authentication, RBAC, Razorpay integration, and AI-powered product recommendations using the OpenAI API. Includes comprehensive customer and admin dashboards.",
      techStack: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB", "Tailwind", "Razorpay", "OpenAI API"],
      github: "https://github.com/loganathans-dev/ai-powered-ecommerce",
      demo: "https://myprojectaipowerd.netlify.app/",
      image: "/shoe_shop.png"
    },
    {
      title: "Bike Rental Management System",
      description: "Complete online bike rental platform featuring bike search, booking, conflict prevention, and rental scheduling logic. Includes an admin dashboard to manage bikes, bookings, users, and pricing.",
      techStack: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB", "Tailwind", "JWT"],
      github: "https://github.com/loganathans-dev/Bike-rental",
      demo: "https://snazzy-dragon-64f500.netlify.app/",
      image: "/bike_rental.png"
    },
    {
      title: "VNetPops — Network Visualization",
      description: "Real-time network visualization platform built with a secure multi-tenant architecture. Features live topology updates via WebSockets, AI-powered topology generation, and an intelligent chatbot using Claude AI.",
      techStack: ["React.js", "Node.js", "MongoDB", "WebSockets", "Claude AI", "Playwright"],
      github: "https://github.com/loganathans-dev",
      demo: ""
    }
  ];

  return (
    <section id="projects" className="py-24 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-indigo-500 rounded-full"></div>
          </div>
          <a href="https://github.com/loganathans-dev" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors">
            View all on GitHub <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50 rounded-2xl overflow-hidden hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] flex flex-col shadow-sm dark:shadow-none"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="w-16 h-16 rounded-xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-slate-200 dark:border-slate-700 overflow-hidden shrink-0">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  ) : (
                    <Code className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="text-xs font-medium px-2.5 py-1 bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-700/50">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                      <Github className="w-4 h-4" /> Source
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
