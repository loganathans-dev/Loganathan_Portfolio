import React from 'react';
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
      description: "Implementing intelligent features using OpenAI and Claude APIs for chatbots and recommendations."
    },
    {
      icon: <Activity className="w-6 h-6 text-rose-500 dark:text-rose-400" />,
      title: "Real-Time Systems",
      description: "Developing live, multi-tenant platforms with secure WebSocket communication."
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-100/50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-500 rounded-full mb-8"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            I am a Full Stack Developer with over 2 years of experience in the MERN stack ecosystem. 
            I specialize in building secure REST APIs, real-time WebSockets systems, and seamlessly integrating AI technologies. 
            My focus is always on delivering high-performance, production-ready applications that can scale to meet the demands 
            of thousands of users while maintaining excellent code quality and maintainability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
