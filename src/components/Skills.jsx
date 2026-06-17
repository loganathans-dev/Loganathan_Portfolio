import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "Redux Toolkit", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Material-UI (MUI)", "Responsive Design"]
    },
    {
      title: "Backend & APIs",
      skills: ["Node.js", "Express.js", "REST API", "RESTful API Design", "Middleware", "JWT Authentication", "RBAC", "WebSockets", "Microservices"]
    },
    {
      title: "Database",
      skills: ["MongoDB", "MongoDB Atlas", "PostgreSQL", "Schema Design", "Indexing", "Aggregation Pipelines", "Query Optimization", "Performance Tuning"]
    },
    {
      title: "DevOps & Tools",
      skills: ["Docker", "Git", "GitHub", "Linux", "Bash", "Netlify", "Render", "CI/CD Pipelines", "VS Code", "Postman", "OpenAI API", "Claude AI"]
    },
    {
      title: "Testing & QA",
      skills: ["Jest", "Cypress", "Playwright", "Unit Testing", "Integration Testing", "End-to-End Testing", "TDD"]
    },
    {
      title: "Methodologies",
      skills: ["SDLC", "Agile", "Scrum", "Sprint Planning", "Code Review", "Technical Documentation"]
    }
  ];

  return (
    <section id="skills" className="py-24 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-indigo-500 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50 shadow-sm dark:shadow-none"
            >
              <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm rounded-lg border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500/50 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
