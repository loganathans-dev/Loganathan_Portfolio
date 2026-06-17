import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Thiruvalluvar College of Eng. and Tech.",
      period: "2019 – 2021",
      score: "CGPA: 8.4 / 10"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Shanmuga Industries Arts and Science College",
      period: "2016 – 2019",
      score: "CGPA: 7.4 / 10"
    }
  ];

  return (
    <section id="education" className="py-24 bg-slate-100/50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Education</h2>
          <div className="w-20 h-1 bg-indigo-500 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-8 flex items-start gap-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm dark:shadow-none"
            >
              <div className="p-3 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2 leading-tight">{edu.degree}</h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium mb-2">{edu.institution}</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-slate-500">{edu.period}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                  <span className="text-indigo-600 dark:text-indigo-400 font-semibold">{edu.score}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
