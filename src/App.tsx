import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronUp, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

// Sections Imports
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Contact from './components/Contact';

import developerAvatar from './assets/images/Untitleddesign.png';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const sectionIds = [
    { id: 'home', label: 'Home',},
    { id: 'about', label: 'About',},
    { id: 'services', label: 'Services',},
    { id: 'projects', label: 'Projects',},
    { id: 'certificates', label: 'Certificates',},
    { id: 'experience', label: 'Experience',},
    { id: 'blog', label: 'Blog',},
    { id: 'contact', label: 'Contact',}
  ];

  // Monitor scroll for header background and active sections
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section by viewport offset
      const viewPortHeight = window.innerHeight;
      let currentSection = 'home';

      for (const sect of sectionIds) {
        const el = document.getElementById(sect.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the element's top is in of the upper half viewport, mark active
          if (rect.top <= viewPortHeight * 0.4 && rect.bottom >= viewPortHeight * 0.4) {
            currentSection = sect.id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-primary-navy min-h-screen relative font-sans leading-normal overflow-hidden select-none">
      
      {/* Top scroll progress pointer */}
      <motion.div 
        id="scroll-progress-bar"
        className="fixed top-0 left-0 right-0 h-1 bg-accent-mustard origin-left z-55"
        style={{ scaleX }}
      />

      {/* Floating Header */}
      <header 
        id="app-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
          scrolled 
            ? 'bg-primary-navy/90 backdrop-blur-md py-4 border-white/5 shadow-lg' 
            : 'bg-transparent py-6 border-transparent'
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          
          {/* Brand Logo with hover expanding spacing */}
          <button 
            id="brand-logo-trigger"
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 group cursor-pointer text-left focus:outline-none"
          >
            <img 
              src={developerAvatar}
              alt="Syed Muhammed Furqan Haider Naqvi"
              referrerPolicy="no-referrer"
              className="w-8 h-8 rounded-full object-cover object-top border border-accent-mustard/60 shadow-md group-hover:scale-115 transition-transform duration-300 pointer-events-none bg-primary-navy"
            />
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-[#E5C144] tracking-wide text-xs group-hover:tracking-wider transition-all duration-300">
                SYED MUHAMMED FURQAN HAIDER NAQVI
              </span>
              <span className="text-[9px] font-mono text-white/55 tracking-widest font-bold">
                FURQANBIZ • PROFESSIONAL PROFILE
              </span>
            </div>
          </button>

          {/* Desktop Central Links Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {sectionIds.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-xs font-mono tracking-widest uppercase transition-colors duration-300 focus:outline-none cursor-pointer flex items-baseline gap-1 relative py-1.5 ${
                  activeSection === item.id 
                    ? 'text-accent-mustard font-bold' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span className="text-[9px] text-accent-mustard opacity-[0.55] font-light font-sans">{item.num}</span>
                <span>{item.label}</span>
                
                {/* Underline current locator */}
                {activeSection === item.id && (
                  <motion.div 
                    layoutId="headerActiveIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent-mustard"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Hire Me Desk Pill */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4.5 py-2.5 bg-accent-mustard/10 border border-accent-mustard/30 text-accent-mustard font-mono text-xs font-bold tracking-widest uppercase rounded hover:bg-accent-mustard hover:text-primary-navy transition-all duration-300 focus:outline-none cursor-pointer"
            >
              Consult Target
            </button>
          </div>

          {/* Mobile hamburger menu */}
          <button
            id="mobile-hamburger-trigger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-accent-mustard focus:outline-none cursor-pointer bg-white/5 border border-white/10 rounded"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Floating Side dynamic indicator nav rails */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-35 hidden xl:flex flex-col gap-6 items-center">
        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest rotate-90 origin-left translate-y-2 translate-x-3 select-none">
      Solutions Architect
        </span>
        
        <div className="w-[1px] h-12 bg-white/15 my-4" />

        {sectionIds.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="group flex items-center justify-end w-10 h-6 relative text-right cursor-pointer"
            title={item.label}
          >
            {/* Hover tag overlay popup */}
            <span className="absolute right-6 opacity-0 group-hover:opacity-100 pr-2 bg-gradient-to-r from-transparent to-primary-navy text-accent-mustard text-[10px] font-mono tracking-widest uppercase transition-opacity duration-300 pointer-events-none select-none">
              {item.label}
            </span>

            {/* Indicator Marker */}
            <div className={`transition-all duration-300 rounded ${
              activeSection === item.id 
                ? 'w-4 h-[3px] bg-accent-mustard shadow shadow-accent-mustard/50' 
                : 'w-2 h-[1.5px] bg-white/20 group-hover:bg-accent-mustard/70 group-hover:w-3'
            }`} />
          </button>
        ))}
      </div>

      {/* Mobile Drawer menu container */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.35 }}
            className="fixed inset-y-0 right-0 z-35 w-full max-w-md bg-primary-navy/98 backdrop-blur-md p-8 border-l border-white/5 flex flex-col justify-between"
          >
            <div className="space-y-12">
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mt-12">
                <span className="font-mono text-xs text-accent-mustard tracking-widest font-bold uppercase">
                  DOCK MODULES
                </span>
                <span className="text-[9px] font-mono text-gray-400">
                  SYSTEM ACTIVE
                </span>
              </div>

              {/* Vertical list of sections */}
              <div className="grid grid-cols-1 gap-4.5">
                {sectionIds.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left font-display font-semibold text-2xl tracking-wide uppercase flex items-baseline gap-4 py-2 ${
                      activeSection === item.id 
                        ? 'text-accent-mustard pl-2 border-l-2 border-accent-mustard' 
                        : 'text-gray-300 hover:text-white pl-0'
                    }`}
                  >
                    <span className="font-mono text-xs text-accent-mustard/50 font-medium">{item.num}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Drawer contact coordinates footer info */}
            <div className="space-y-4 pt-6 border-t border-white/5">
              <div className="text-xs text-gray-400 font-mono">
                Direct Contact Coordinate Pipeline:
              </div>
              <a 
                href="mailto:syedmfurqanhaidernaqvi@gmail.com" 
                className="text-white hover:text-accent-mustard font-mono text-xs break-all block"
              >
                syedmfurqanhaidernaqvi@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Master Main Page Content Layout */}
      <main id="main-scroll-layout" className="smooth-scroller relative">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Certificates />
        <Experience />
        <Blog />
        <Contact />
      </main>

      {/* Floating Bottom action trigger (scroll to top) */}
      <AnimatePresence>
        {scrolled && (
          <motion.button
            id="back-to-top-trigger"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => scrollToSection('home')}
            className="fixed bottom-6 right-6 p-3 bg-accent-mustard text-primary-navy rounded shadow-2xl z-30 transition-all duration-300 hover:scale-110 focus:outline-none cursor-pointer border border-accent-mustard/30"
            title="Scroll back up to primary view"
          >
            <ChevronUp className="w-5 h-5 stroke-[2.5]" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Modular Architectural footer */}
      <footer id="app-footer" className="bg-[#050D1D] border-t border-white/10 pt-20 pb-12 relative overflow-hidden">
        {/* Subtle decorative grid lines inside the footer */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', 
               backgroundSize: '80px 80px' 
             }} 
        />
        <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-accent-mustard/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10 space-y-16">
          
          {/* Top segment: Elegant Editorial Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
            
            {/* Massive Statement & Name */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-accent-mustard/10 border border-accent-mustard/30 px-3.5 py-1.5 rounded-full text-accent-mustard text-[10px] font-mono tracking-widest uppercase font-bold">
                {/* <Sparkles className="w-3.5 h-3.5 animate-pulse" /> */}
                <span>FOUNDER & PRINCIPAL ARCHITECT</span>
              </div>
              
              <div className="space-y-3">
                <span className="text-[11px] font-mono text-gray-400 uppercase tracking-widest block pl-1 font-semibold">
                  PROPRIETARY BRAND CONSTRUCT
                </span>
                <h3 className="text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight leading-none uppercase">
                  SYED MUHAMMED <br />
                  <span className="text-accent-mustard">FURQAN HAIDER NAQVI</span>
                </h3>
              </div>
              
              <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed max-w-md">
                Engineering scalable digital transformations since 2021. Specializing in enterprise-grade web systems, high-performance Flutter apps, autonomous AI workflows, and photorealistic 3D WebAR environments.
              </p>
            </div>

            {/* Sitemap Navigation Directories */}
            <div className="lg:col-span-3 space-y-4">
              <span className="text-xs font-mono text-accent-mustard uppercase tracking-widest block font-bold">
                SITE DIRECTORIES
              </span>
              
              <ul className="grid grid-cols-2 gap-y-3 gap-x-6 text-xs font-mono">
                {sectionIds.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-400 hover:text-accent-mustard hover:translate-x-1.5 transition-all duration-300 text-left uppercase flex items-center gap-1.5 cursor-pointer"
                    >
                      <span className="text-[9px] text-accent-mustard/50">{item.num}</span>
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Telemetry / Details Hub */}
            <div className="lg:col-span-3 space-y-4 text-left">
              <span className="text-xs font-mono text-accent-mustard uppercase tracking-widest block font-bold">
                TECHNICAL DATA
              </span>
              
              <div className="space-y-2.5 p-4 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-gray-400">
                <div className="flex justify-between items-center border-b border-white/5 pb-1.5">
                  <span>DEPLOYED NODE:</span>
                  <span className="text-white font-semibold">SAHIWAL / LAHORE</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-1.5">
                  <span>RUNTIME STATUS:</span>
                  <span className="text-green-400 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                    <span>ACTIVE / LATCHED</span>
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>SYSTEM VERSION:</span>
                  <span className="text-white">v3.2.0-STABLE</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom segment: Custom copyrights and social badges */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-4">
            <div className="space-y-1.5 text-center md:text-left">
              <p className="text-xs text-gray-500 font-mono">
                Designed and built by <span className="text-white font-semibold">FurqanBiz</span>. Dedicated client-side and cloud systems configured with extreme aesthetic fidelity.
              </p>
              <p className="text-[10px] text-gray-600 font-mono uppercase tracking-widest">
                SYED MUHAMMED FURQAN HAIDER NAQVI © 2026. ALL RIGHTS RESERVED WORLDWIDE.
              </p>
            </div>

            {/* Social credentials */}
            <div className="flex gap-3">
              <a 
                href="mailto:syedmfurqanhaidernaqvi@gmail.com"
                className="p-3 bg-white/5 hover:bg-accent-mustard/10 border border-white/10 hover:border-accent-mustard/40 text-gray-300 hover:text-accent-mustard rounded-lg transition-all duration-300 flex items-center gap-2 text-xs font-mono"
                title="Direct secure mail client connection"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">EMAIL</span>
              </a>

              <a 
                href="https://www.linkedin.com/in/syed-furqan-naqvi"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white/5 hover:bg-accent-mustard/10 border border-white/10 hover:border-accent-mustard/40 text-gray-300 hover:text-accent-mustard rounded-lg transition-all duration-300 flex items-center gap-2 text-xs font-mono"
                title="Secure LinkedIn connection network"
              >
                <Linkedin className="w-4 h-4" />
                <span className="hidden sm:inline">LINKEDIN</span>
              </a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
