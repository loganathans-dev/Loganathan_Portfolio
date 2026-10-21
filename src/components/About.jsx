import { motion } from 'framer-motion';
import { Server, Database, BrainCircuit, Activity } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Server className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />,
      title: "Full Stack Architecture",
      description: "Designing and developing scalable web applications using React.js, Node.js, and Express.js."
    },
    {
      icon: <Database className="w-6 h-6 text-purple-500 dark:text-purple-400" />,
      title: "Database Optimization",
      description: "Building performance-optimized MongoDB architectures with efficient schemas and aggregation pipelines."
    },
    {
      icon: <BrainCircuit className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />,
      title: "AI Integration",
      description: "Integrating Google Gemini for programming guidance and OpenAI for product recommendations."
    },
    {
      icon: <Activity className="w-6 h-6 text-rose-500 dark:text-rose-400" />,
      title: "Intelligent Coding Guidance",
      description: "Combining rule-based validation, cached hints, and Socratic prompts to support student learning."
    }
  ];

  return (
    <section data-section="about" id="about" className="py-24 bg-slate-100/50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="container about-layout mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.5 }}
          className="section-heading mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-500 rounded-full mb-8"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            I am a Full Stack AI Engineer with 3+ years of experience building web applications with the MERN stack.
            I develop responsive interfaces and RESTful APIs with JWT authentication and role-based access control.
            At Coderead, I work on CookDCode, combining Google Gemini, rule-based validation, model fallback handling,
            and Firebase caching to help students reason through programming problems with contextual hints.
          </p>
        </motion.div>

        <div className="about-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.07 }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group shadow-sm dark:shadow-none"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default About;
