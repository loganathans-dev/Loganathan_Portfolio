import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';

const Projects = () => {
  const projects = [
  {
    "title": "CookDCode",
    "subtitle": "AI-Powered Student Evaluation & Coding Guidance",
    "description": "Built a four-tier evaluation pipeline for greeting handling, rule-based validation, cached hint retrieval, and dynamic AI guidance. Created validators for 13 conditional programming problems. Integrated Gemini 2.5 Flash with fallback to Gemini 3.1 Flash Lite, using Socratic hints and Firebase caching to encourage reasoning and reduce repeated AI requests.",
    "techStack": [
      "Google Gemini API",
      "Firebase Realtime Database",
      "Rule-Based Validation",
      "Prompt Engineering"
    ],
    "period": "Feb 2026 – Present"
  },
  {
    "title": "VNetPops",
    "subtitle": "Network Visualization Platform",
    "description": "Developed reusable React components for interactive dashboards and network device visualization. Built RESTful APIs, JWT authentication, and role-based access control. Delivered Billing and Summary modules connected to backend APIs and MongoDB collections.",
    "techStack": [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
      "Cypress"
    ],
    "github": "https://github.com/loganathans-dev/vnetpops",
    "image": "/vnetpops.png",
    "period": "May 2023 – Jan 2026"
  },
  {
    "title": "MatchHub",
    "subtitle": "Live Sports Score Management System",
    "description": "Built a platform for managing tournaments, teams, players, match schedules, and live sports scores. Implemented JWT authentication and dashboards for administrators, organizers, referees, and teams. Optimized MongoDB models and REST APIs for efficient score retrieval.",
    "techStack": [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS"
    ],
    "github": "https://github.com/loganathans-dev/MatchHub",
    "demo": "https://match-hub.netlify.app",
    "image": "/matchhub.png"
  },
  {
    "title": "Stepora",
    "subtitle": "AI Powered Shoe E-Commerce",
    "description": "Built a MERN shoe e-commerce application with product management and backend API integration. Integrated OpenAI for product recommendations, JWT authentication, and Razorpay payments. Optimized MongoDB aggregation pipelines for product queries.",
    "techStack": [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenAI API",
      "Razorpay",
      "Tailwind CSS"
    ],
    "github": "https://github.com/loganathans-dev/stepora",
    "demo": "https://stepora.netlify.app",
    "image": "/shoe_shop.png"
  }
];

  return (
    <section data-section="projects" id="projects" className="py-24 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.5 }}
          className="section-heading mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-indigo-500 rounded-full"></div>
          </div>
          <a href="https://github.com/loganathans-dev" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors">
            View all on GitHub <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="projects-list grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.07 }}
              className="project-card group bg-white dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50 rounded-2xl overflow-hidden hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] flex flex-col shadow-sm dark:shadow-none"
            >
              <div className="project-body p-6 flex flex-col h-full">
                <div className="project-visual w-16 h-16 rounded-xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-slate-200 dark:border-slate-700 overflow-hidden shrink-0">
                  {project.image ? (
                    <img src={project.image} alt={project.title} width="640" height="360" loading="lazy" className="w-full h-full object-cover" />
                  ) : (
                    <div className="coding-art" aria-hidden="true"><Code className="w-12 h-12" /><span /><span /><span /></div>
                  )}
                </div>

                <div className="project-copy">
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 shrink-0 mt-0.5">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" aria-label={`View ${project.title} source code`} title="View Source Code">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer" className="text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors" aria-label={`View ${project.title} live demo`} title="View Live Demo">
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

                {project.period && <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">{project.period}</p>}

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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
