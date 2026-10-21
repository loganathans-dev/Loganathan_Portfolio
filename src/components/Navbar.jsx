import { useState, useEffect, useRef } from 'react';
import { Menu, X, Sun, Moon, ArrowUpRight, UserRound, Layers3, BriefcaseBusiness, FolderCode, GraduationCap, Send } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about', icon: UserRound },
  { name: 'Skills', href: '#skills', icon: Layers3 },
  { name: 'Experience', href: '#experience', icon: BriefcaseBusiness },
  { name: 'Projects', href: '#projects', icon: FolderCode },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Contact', href: '#contact', icon: Send },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));
  const [activeSection, setActiveSection] = useState('home');
  const menuButton = useRef(null);

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
        if (document.activeElement?.closest('#section-navigation')) menuButton.current?.focus();
      }
    };
    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.25;
      const current = [...document.querySelectorAll('main > section')].find(section => {
        const bounds = section.getBoundingClientRect();
        return bounds.top <= marker && bounds.bottom > marker;
      });
      if (current) setActiveSection(current.id);
    };
    const observer = new IntersectionObserver(updateActiveSection, {
      rootMargin: '-24% 0px -74% 0px', threshold: 0,
    });
    document.querySelectorAll('main > section').forEach(section => observer.observe(section));
    window.addEventListener('keydown', handleKey);
    return () => { observer.disconnect(); window.removeEventListener('keydown', handleKey); };
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !isDark;
    document.documentElement.classList.toggle('dark', nextIsDark);
    localStorage.theme = nextIsDark ? 'dark' : 'light';
    setIsDark(nextIsDark);
  };

  const closeNavigation = () => {
    setIsMobileMenuOpen(false);
    if (window.matchMedia('(max-width: 1099px)').matches) menuButton.current?.focus();
  };

  return (
    <nav className="site-nav" aria-label="Main navigation" data-open={isMobileMenuOpen}>
      <a href="#" className="nav-brand" onClick={closeNavigation}>
        <span>Loganathan</span>
      </a>
      <div className="mobile-controls">
        <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme" aria-pressed={isDark}>
          {isDark ? <Sun size={19} /> : <Moon size={19} />}
        </button>
        <button ref={menuButton} className="menu-toggle" aria-label={isMobileMenuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={isMobileMenuOpen} aria-controls="section-navigation" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <div id="section-navigation" className="nav-panel">
        <div className="nav-links">
          {navLinks.map(({ name, href, icon: Icon }) => (
            <a key={name} href={href} aria-current={activeSection === href.slice(1) ? 'location' : undefined} onClick={closeNavigation}>
              <Icon size={18} aria-hidden="true" /><span>{name}</span><ArrowUpRight className="nav-arrow" size={16} aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="nav-bottom">
          <button onClick={toggleTheme} className="theme-toggle desktop-theme" aria-label="Toggle Theme" aria-pressed={isDark}>
            {isDark ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <a href="#contact" className="hire-button" onClick={closeNavigation}>Hire Me<ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
