import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import { FaWhatsapp } from 'react-icons/fa';

function App() {
  useEffect(() => {
    // Check for saved theme preference or system preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen text-slate-600 dark:text-slate-300 font-sans selection:bg-indigo-500/30 selection:text-indigo-900 dark:selection:text-indigo-200 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      
      <footer className="py-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 text-sm transition-colors duration-300">
        <p>© {new Date().getFullYear()} Loganathan S. All rights reserved.</p>
        <p className="mt-2">Built with React, Tailwind CSS, and Framer Motion.</p>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/917397533732?text=Hello%20Loganathan,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-green-500 text-white p-3.5 rounded-full shadow-[0_4px_14px_0_rgba(34,197,94,0.39)] hover:bg-green-600 hover:shadow-[0_6px_20px_rgba(34,197,94,0.23)] hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7" />
        <span className="absolute right-full mr-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg border border-slate-100 dark:border-slate-700 pointer-events-none">
          Let's chat!
        </span>
      </a>
    </div>
  );
}

export default App;
