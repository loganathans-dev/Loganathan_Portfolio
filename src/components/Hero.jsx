import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 dark:bg-indigo-600/20 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 dark:bg-purple-600/20 rounded-full blur-[128px] -z-10" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Available for new opportunities
            </span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-slate-100 leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hi, I'm Loganathan S<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400">
              Full Stack MERN Developer
            </span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I build scalable, secure, and AI-powered web applications. With 2+ years of experience 
            delivering production-ready systems serving thousands of users.
          </motion.p>

          <motion.div 
            className="flex flex-wrap items-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a 
              href="#projects" 
              className="px-8 py-3.5 rounded-full bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition-colors flex items-center gap-2 group shadow-[0_0_15px_rgba(99,102,241,0.2)] dark:shadow-none"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3.5 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-2 border border-slate-200 dark:border-slate-700 shadow-sm dark:shadow-none"
            >
              Contact Me
            </a>
            <a 
              href="/Loganathan_Resume.pdf" 
              download="Loganathan_Resume.pdf"
              className="p-3.5 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700 shadow-sm dark:shadow-none ml-auto md:ml-4 inline-flex items-center justify-center" 
              aria-label="Download Resume"
              title="Download Resume"
            >
              <Download className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div 
            className="flex items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a href="https://github.com/loganathans-dev" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/loganathan-s-12350535a" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:loganathanofficial25@gmail.com" className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
