import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, ArrowDown, FileText, ChevronRight } from 'lucide-react';
import developerAvatar from '../assets/images/Untitleddesign.png';

export default function Hero() {
  const { scrollY } = useScroll();

  // Parallax calculations for horizontal text splits
  const textLeftX = useTransform(scrollY, [0, 800], [0, -250]);
  const textRightX = useTransform(scrollY, [0, 800], [0, 250]);
  const imageY = useTransform(scrollY, [0, 800], [0, 100]);
  const imageScale = useTransform(scrollY, [0, 800], [1, 0.95]);
  const introOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  // Handle smooth scroll clicks
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-primary-navy overflow-hidden flex flex-col justify-center items-center py-24 select-none"
    >
      {/* Decorative Interactive Background Layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Fine Radial Gold Gradients */}
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-accent-mustard/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] rounded-full bg-blue-500/5 blur-[120px]" />
        
        {/* Modern Dot Matrix Grid */}
        <div className="absolute inset-0" 
             style={{ 
               backgroundImage: 'radial-gradient(rgba(229, 193, 68, 0.1) 1px, transparent 1px)', 
               backgroundSize: '30px 30px' 
             }} 
        />
      </div>

      {/* Hero Content Grid */}
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full max-w-7xl">
        
        {/* Left Side: Professional Bio & Info */}
        <motion.div 
          style={{ opacity: introOpacity }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col justify-center text-left space-y-6"
        >
          {/* Subtle Tagline Accent */}
          <div className="inline-flex items-center gap-2 bg-accent-mustard/10 border border-accent-mustard/20 px-3 py-1.5 rounded-full text-accent-mustard text-xs font-mono w-max">
            {/* <Sparkles className="w-3.5 h-3.5" /> */}
            <span>FOUNDER OF FURQANBIZ</span>
          </div>

          {/* Scaled Split Headings */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-white leading-none uppercase">
              SYED MUHAMMED
              <span className="block text-accent-mustard mt-1 font-poppins">FURQAN HAIDER NAQVI</span>
            </h1>
            
            <p className="font-mono text-sm sm:text-base text-gray-300 tracking-wide mt-4 border-l-2 border-accent-mustard/70 pl-4 py-1">
              Web Developer • Flutter Developer • AI Business Systems Builder
            </p>
          </div>

          {/* Brief Premium Introduction */}
          <p className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed">
            Founder of <span className="text-accent-mustard font-medium">FurqanBiz</span>. I specialize in crafting scalable digital systems through modern high-performance web solutions, fluid Flutter applications, and strategic AI operational automation workflows.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              id="hero-cta-view"
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3.5 bg-accent-mustard text-primary-navy font-display font-bold text-sm tracking-wide uppercase transition-all duration-300 hover:bg-white hover:scale-105 rounded shadow-lg shadow-accent-mustard/1 gap-2 flex items-center cursor-pointer"
            >
              <span>View Projects</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button 
              id="hero-cta-hire"
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3.5 border border-white/20 bg-white/5 text-white font-display font-semibold text-sm tracking-wide uppercase transition-all duration-300 hover:bg-white/10 hover:border-accent-mustard cursor-pointer rounded"
            >
              Hire Me
            </button>

            <a 
              id="hero-cta-cv"
              href="#cv-simulation"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className="px-6 py-3.5 text-accent-mustard hover:text-white font-mono text-xs tracking-wider uppercase transition-all duration-300 gap-2 flex items-center"
            >
              <FileText className="w-4 h-4" />
              <span>CAREER PROFILE</span>
            </a>
          </div>
        </motion.div>

        {/* Right Side: Professional Profile with Parallax backdrop */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-12 lg:py-0">
          
          {/* Framed Subject Profile Image */}
          <motion.div 
            style={{ y: imageY, scale: imageScale }}
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative w-72 h-96 md:w-80 md:h-[430px] z-10 hover:rotate-1 transition-transform duration-500 ease-out"
          >
            {/* Background Glow Ring */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-accent-mustard to-transparent opacity-30 rounded-2xl blur-md" />
            
            {/* Solid Geometric Mustard Accent Frame Backing */}
            <div className="absolute inset-0 border border-white/10 rounded-2xl bg-primary-navy offset-border transform translate-x-4 translate-y-4" />
            
            {/* The Actual Display Container */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-accent-mustard shadow-2xl bg-white flex flex-col justify-end">
              <img 
                src={developerAvatar} 
                alt="Syed Muhammed Furqan Haider Naqvi"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-top hover:scale-[1.03] duration-700 transition-all rounded-2xl bg-white"
              />
              {/* Elegant floating caption overlay */}
              <div className="relative z-10 m-3 p-3 bg-primary-navy/90 backdrop-blur border border-white/10 rounded-xl flex flex-col justify-center">
                <span className="font-display text-white text-[11px] font-bold text-center uppercase tracking-wide">
                  SYED MUHAMMED FURQAN HAIDER NAQVI
                </span>
                <span className="text-accent-mustard text-center text-[9px] font-mono tracking-widest mt-0.5">
                  FOUNDER & PRINCIPAL ARCHITECT
                </span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* HORIZONTAL PARALLAX TEXT REVEAL BEHIND PROFILE */}
      <div className="absolute inset-x-0 bottom-4 pointer-events-none overflow-hidden h-32 md:h-52 z-0 hidden sm:block">
        <div className="flex flex-col justify-end h-full">
          {/* Top Line Split - moves Left */}
          <motion.div 
            style={{ x: textLeftX }}
            className="whitespace-nowrap text-[8vw] md:text-[12vw] font-display font-extrabold leading-none text-transparent stroke-text opacity-40 select-none tracking-widest translate-x-32"
          >
            SYSTEM-BUILDING • AI • AUTOMATION • WEBENGINE • FLUTTER
          </motion.div>
          
          {/* Bottom Line Split - moves Right */}
          <motion.div 
            style={{ x: textRightX }}
            className="whitespace-nowrap text-[8vw] md:text-[12vw] font-display font-extrabold leading-none text-white/5 select-none tracking-widest -translate-x-32"
          >
            FURQANBIZ • MODERN • SCALABLE • SECURE • REALWORLD
          </motion.div>
        </div>
      </div>

      {/* CSS For Stroke Text effect */}
      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.15);
        }
      `}</style>

      {/* Scroll Down Hint */}
      <div className="absolute bottom-6 flex flex-col items-center gap-1.5 z-10 cursor-pointer" onClick={() => scrollToSection('about')}>
        <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">EXPLORE DEPTH</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="w-4 h-4 text-accent-mustard" />
        </motion.div>
      </div>

    </section>
  );
}
