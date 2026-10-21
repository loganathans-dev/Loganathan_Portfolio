import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
  {
    "title": "Frontend",
    "skills": [
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
      "Responsive Design"
    ]
  },
  {
    "title": "Backend",
    "skills": [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Middleware",
      "MVC Architecture",
      "WebSockets",
      "Zod"
    ]
  },
  {
    "title": "Databases & ORM",
    "skills": [
      "MongoDB",
      "MongoDB Atlas",
      "Firebase",
      "PostgreSQL",
      "Redis",
      "Prisma",
      "Mongoose",
      "Schema Design",
      "Indexing"
    ]
  },
  {
    "title": "AI Integration",
    "skills": [
      "Google Gemini API",
      "OpenAI API",
      "Claude API",
      "Prompt Engineering",
      "LLM Integration",
      "AI Agent Development",
      "Model Fallback Handling"
    ]
  },
  {
    "title": "Security & Testing",
    "skills": [
      "JWT Authentication",
      "Role-Based Access Control (RBAC)",
      "Request Validation",
      "Jest",
      "React Testing Library",
      "Cypress"
    ]
  },
  {
    "title": "Tools & Deployment",
    "skills": [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Cursor AI",
      "GitHub Copilot",
      "Debugging",
      "Performance Optimization",
      "Docker",
      "Linux",
      "Bash",
      "Netlify",
      "Render"
    ]
  },
  {
    "title": "Third-Party APIs",
    "skills": [
      "Google Maps API",
      "OpenStreetMap",
      "Razorpay"
    ]
  },
  {
    "title": "Currently Learning",
    "skills": [
      "LLM Tool Calling",
      "Retrieval-Augmented Generation (RAG)",
      "LangChain.js"
    ]
  }
];

  return (
    <section data-section="skills" id="skills" className="py-24 transition-colors duration-300">
      <div className="container skills-layout mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 12, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.5 }}
          className="section-heading mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-indigo-500 rounded-full"></div>
        </motion.div>

        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 12, scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.07 }}
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
