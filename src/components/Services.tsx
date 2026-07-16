import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import SectionHeader from './SectionHeader';
import { SERVICES } from '../data';

export default function Services() {
  const [activeService, setActiveService] = useState<string | null>(SERVICES[0].id);

  const getIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent ? <IconComponent className="w-8 h-8 text-accent-mustard" /> : <Icons.Cpu className="w-8 h-8 text-accent-mustard" />;
  };

  return (
    <section id="services" className="py-24 bg-[#09152B] relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <SectionHeader number="03" title="EXPERT SOLUTIONS" subtitle="Tech Offerings" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
          
          {/* Left: Quick Selection Cards List */}
          <div className="lg:col-span-5 space-y-4">
            {SERVICES.map((service, index) => (
              <motion.button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                whileHover={{ scale: 1.01, x: 5 }}
                whileTap={{ scale: 0.99 }}
                className={`w-full text-left p-6 rounded-xl border transition-all duration-300 flex items-center gap-5 cursor-pointer flex-row relative overflow-hidden ${
                  activeService === service.id 
                    ? 'bg-gradient-to-r from-accent-mustard/15 to-transparent border-accent-mustard/60 shadow-lg shadow-accent-mustard/5' 
                    : 'bg-white/5 border-white/10 hover:border-white/25 hover:bg-white/10'
                }`}
              >
                {/* Active Indicator Bar */}
                {activeService === service.id && (
                  <motion.div 
                    layoutId="activeServiceBar" 
                    className="absolute left-0 top-0 bottom-0 w-1 bg-accent-mustard"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                <div className={`p-3 rounded-lg flex-shrink-0 transition-transform duration-500 duration-medium ${
                  activeService === service.id ? 'bg-accent-mustard/20 scale-110' : 'bg-white/5'
                }`}>
                  {getIcon(service.icon)}
                </div>

                <div className="space-y-1">
                  <div className="font-mono text-xs text-accent-mustard font-bold uppercase tracking-widest">
                    SERVICE 0{index + 1}
                  </div>
                  <h3 className="font-display font-semibold text-lg md:text-xl text-white tracking-tight">
                    {service.title}
                  </h3>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right: Dynamic Interactive Content Review */}
          <div className="lg:col-span-7 h-full">
            <AnimatePresence mode="wait">
              {SERVICES.map((service) => {
                if (service.id !== activeService) return null;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -25 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="p-8 md:p-10 bg-white/5 border border-white/10 rounded-2xl relative overflow-hidden flex flex-col justify-between h-full min-h-[460px] shadow-2xl"
                  >
                    {/* Floating Tech Mesh Backdrop */}
                    <div className="absolute right-0 top-0 w-64 h-64 bg-accent-mustard/5 rounded-full blur-[100px] pointer-events-none" />
                    
                    <div className="space-y-8 relative z-10">
                      {/* Big Icon Banner */}
                      <div className="flex justify-between items-start">
                        <div className="p-4 bg-accent-mustard/15 rounded-xl border border-accent-mustard/30 w-max text-accent-mustard animate-pulse">
                          {getIcon(service.icon)}
                        </div>
                        <span className="font-display text-white/5 font-extrabold text-7xl md:text-8xl select-none leading-none">
                          0{SERVICES.findIndex(s => s.id === service.id) + 1}
                        </span>
                      </div>

                      {/* Title & Long introduction */}
                      <div className="space-y-3">
                        <h4 className="text-2xl md:text-3xl font-display font-semibold text-white tracking-tight">
                          {service.title}
                        </h4>
                        <p className="text-gray-300 font-sans text-base md:text-lg leading-relaxed max-w-2xl">
                          {service.shortDescription}
                        </p>
                      </div>

                      {/* Technical specifications bullet list */}
                      <div className="space-y-3 border-t border-white/10 pt-6">
                        <span className="text-xs font-mono tracking-widest text-accent-mustard uppercase block pl-1">
                          COEFFICIENTS & OPERATIONAL PARAMETERS
                        </span>
                        
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-3">
                          {service.bulletPoints.map((bullet, idx) => (
                            <motion.li 
                              key={idx}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="text-sm text-gray-300 flex items-start gap-2.5"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-accent-mustard mt-1.5 flex-shrink-0" />
                              <span className="leading-snug">{bullet}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Footer Contact Prompt */}
                    <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative z-10">
                      <span className="text-xs font-mono text-gray-400">
                        * Deliverable within industry-standard SLAs
                      </span>
                      
                      <a 
                        href="#contact"
                        className="text-xs font-mono font-semibold tracking-widest uppercase text-accent-mustard hover:text-white transition-colors duration-300 flex items-center gap-1.5"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        <span>Request Custom Tech Strategy</span>
                        <Icons.ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
