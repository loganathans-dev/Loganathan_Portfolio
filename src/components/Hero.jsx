import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin, FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
  return (
    <section data-section="hero" id="home" className="hero relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="hero-grid" aria-hidden="true" />

      <div className="container hero-layout mx-auto px-6 md:px-12">
        <motion.div
          className="hero-art has-portrait"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="portrait-circle" aria-hidden="true" />
          <img
            className="profile-photo"
            src="/profile.png"
            alt="Loganathan S"
            width="1254"
            height="1254"
            fetchPriority="high"
          />
        </motion.div>
        <div className="hero-content max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="availability inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Available for new opportunities
            </span>
          </motion.div>

          <motion.h1 
            className="hero-title text-5xl md:text-7xl font-bold text-slate-900 dark:text-slate-100 leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="hero-name">Hi, I'm Loganathan S</span><br />
            <span className="hero-role text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400">
              <span className="role-line">Full Stack AI Engineer</span>
              <span className="role-line">MERN Stack</span>
            </span>
          </motion.h1>

          <motion.p 
            className="hero-description text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I build secure, responsive web applications with React.js, Node.js, Express.js, and MongoDB.
            With 3+ years of full-stack experience, I bring AI-powered guidance, reliable APIs, and thoughtful interfaces together.
          </motion.p>

          <motion.div 
            className="hero-actions flex flex-wrap items-center gap-4 mb-12"
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
              href="/Loganathan_S_Resume.pdf" 
              download="Loganathan_S_Resume.pdf"
              className="p-3.5 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700 shadow-sm dark:shadow-none ml-auto md:ml-4 inline-flex items-center justify-center" 
              aria-label="Download Resume"
              title="Download Resume"
            >
              <Download className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div 
            className="hero-social flex items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a aria-label="GitHub profile" href="https://github.com/loganathans-dev" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a aria-label="LinkedIn profile" href="https://linkedin.com/in/loganathan-s-12350535a" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a aria-label="Connect on WhatsApp" href="https://wa.me/917397533732?text=Hello%20Loganathan,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you." target="_blank" rel="noreferrer" className="text-slate-400 hover:text-green-500 transition-colors">
              <FaWhatsapp className="w-6 h-6" />
            </a>
            <a aria-label="Email Loganathan" href="mailto:loganathanofficial25@gmail.com" className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
