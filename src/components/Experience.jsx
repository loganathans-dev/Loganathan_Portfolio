import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Coderead Academy",
      location: "Online",
      period: "May 2026 – Present",
      description: [
        "Developing responsive MERN stack applications under the guidance of senior developers, contributing to production-ready features.",
        "Building RESTful APIs using Node.js, Express.js, and MongoDB following industry best practices.",
        "Implementing secure authentication and authorization using JWT and Role-Based Access Control (RBAC).",
        "Integrating the Razorpay payment gateway to enable secure online payment processing.",
        "Developing reusable React.js components using Redux Toolkit and Tailwind CSS to improve maintainability and UI consistency.",
        "Assisting in application testing, debugging, bug fixing, and performance optimization.",
        "Deploying frontend applications on Netlify and backend services on Render."
      ],
      techStack: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Razorpay", "JWT", "Netlify", "Render", "Git"]
    },
    {
      role: "Full Stack Developer",
      company: "DNASkew Analytics Pvt Ltd",
      location: "Bengaluru, India",
      period: "May 2023 – Jan 2026",
      description: [
        "Developed and maintained scalable full-stack web applications using React.js, Node.js, Express.js, and MongoDB across the complete SDLC.",
        "Designed and implemented secure RESTful APIs with JWT authentication, RBAC, input validation, and error handling.",
        "Built AI-powered chatbot and intelligent recommendation features by integrating OpenAI and Claude APIs.",
        "Optimized MongoDB schemas, indexing strategies, and aggregation pipelines, improving query performance and reducing API response times.",
        "Improved frontend performance through lazy loading, code splitting, memoization, and rendering optimizations.",
        "Containerized applications using Docker and contributed to CI/CD deployment pipelines.",
        "Led a development team for 6 months by assigning tasks, reviewing pull requests, mentoring junior developers, and resolving technical challenges."
      ],
      techStack: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Docker", "JWT", "WebSockets", "OpenAI API", "Claude API", "Tailwind CSS", "Git"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-100/50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-indigo-500 rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0 mb-16 last:mb-0"
            >
              <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
                {/* Timeline Line & Dot (Mobile) */}
                <div className="absolute left-0 top-2 h-full w-0.5 bg-slate-300 dark:bg-slate-700 md:hidden"></div>
                <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-indigo-500 md:hidden"></div>

                <div className="md:col-span-1 md:text-right mb-4 md:mb-0 pt-1">
                  <span className="inline-block px-3 py-1 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-medium rounded-full mb-2">
                    {exp.period}
                  </span>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{exp.location}</p>
                </div>

                <div className="md:col-span-4 relative md:pl-10">
                  {/* Timeline Line & Dot (Desktop) */}
                  <div className="hidden md:block absolute left-[15px] top-4 h-full w-0.5 bg-slate-300 dark:bg-slate-700"></div>
                  <div className="hidden md:flex absolute left-0 top-1 w-8 h-8 rounded-full bg-white dark:bg-slate-800 border-2 border-indigo-500 items-center justify-center z-10">
                    <Briefcase className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                  </div>

                  <div className="bg-white dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6 hover:border-indigo-400 dark:hover:border-indigo-500/30 transition-colors shadow-sm dark:shadow-none">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">{exp.role}</h3>
                    <h4 className="text-lg font-medium text-slate-600 dark:text-slate-400 mb-4">{exp.company}</h4>
                    
                    <ul className="space-y-2 mb-6">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex gap-3 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                          <span className="text-indigo-500 dark:text-indigo-400 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-slate-700/50">
                      {exp.techStack.map((tech, i) => (
                        <span key={i} className="text-xs font-medium px-2 py-1 bg-slate-100 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
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

export default Experience;
