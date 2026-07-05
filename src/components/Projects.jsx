import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "MatchHub",
      subtitle: "Live Sports Score Management",
      description: "Built a live sports score platform for managing tournaments, teams, players, and match schedules. Enabled real-time score updates using Socket.IO with instant synchronization. Designed role-based dashboards with JWT authentication.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT", "Tailwind CSS"],
      github: "https://github.com/loganathans-dev/MatchHub",
      demo: "https://match-hub.netlify.app",
      image: "/matchhub.png"
    },
    {
      title: "Bikzo",
      subtitle: "Rental Bike Hub",
      description: "Developed a full-stack bike rental platform with booking and management features. Integrated Google Maps API and OpenStreetMap for location tracking, along with Razorpay for secure payments and RBAC.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Google Maps API", "OpenStreetMap", "Razorpay", "JWT"],
      github: "https://github.com/loganathans-dev/Bikezo",
      demo: "https://bikzo.netlify.app",
      image: "/bike_rental.png"
    },
    {
      title: "Stepora",
      subtitle: "AI Powered Shoe E-Commerce",
      description: "An AI-powered e-commerce platform featuring intelligent product recommendations using the OpenAI API. Implemented secure JWT authentication, Razorpay payments, and optimized MongoDB aggregation pipelines.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "OpenAI API", "Razorpay", "Tailwind CSS"],
      github: "https://github.com/loganathans-dev/stepora",
      demo: "https://stepora.netlify.app",
      image: "/shoe_shop.png"
    },
    {
      title: "VNetPops",
      subtitle: "Real-Time Network Visualization",
      description: "Real-time network visualization platform built with a secure multi-tenant architecture. Features live topology updates via WebSockets, AI-powered topology generation, and an intelligent chatbot using Claude AI.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "WebSockets", "JWT", "Tailwind CSS", "Claude AI", "Playwright"],
      github: "https://github.com/loganathans-dev/vnetpops",
      demo: "",
      image: "/vnetpops.png"
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

                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 shrink-0 mt-0.5">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" title="View Source Code">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer" className="text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors" title="View Live Demo">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                
                {project.subtitle && (
                  <p className="text-sm font-medium text-indigo-500 dark:text-indigo-400 mb-3">
                    {project.subtitle}
                  </p>
                )}

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="text-xs font-medium px-2.5 py-1 bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 rounded-md">
                      {tech}
                    </span>
                  ))}
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
