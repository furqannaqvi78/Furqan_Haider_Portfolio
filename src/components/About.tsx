import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import SectionHeader from './SectionHeader';
import { QUICK_STATS, CLIENT_LOGOS } from '../data';

export default function About() {
  const getIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent ? <IconComponent className="w-6 h-6 text-accent-mustard" /> : <Icons.Settings className="w-6 h-6 text-accent-mustard" />;
  };

  return (
    <section id="about" className="py-24 bg-primary-navy border-t border-white/5 relative">
      {/* Decorative Grid Mesh */}
      <div className="absolute inset-0 pointer-events-none opacity-5" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', 
             backgroundSize: '100px 100px' 
           }} 
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <SectionHeader number="02" title="ABOUT THE FOUNDER" subtitle="Biography & Vision" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          {/* Left Block: Bio & Vision Phrase */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-xl md:text-3xl font-display font-medium text-white tracking-tight leading-relaxed">
                Empowering businesses by replacing speculative theories with <span className="text-accent-mustard">scalable, fully automated systems.</span>
              </h3>
              
              <div className="space-y-4 text-gray-300 leading-relaxed font-sans text-base md:text-lg">
                <p>
                  My development journey originated as a freelance front-end enthusiast driven by custom visuals. Over time, that passion expanded into founding <span className="text-white font-medium">FurqanBiz</span>, focusing on real-world digital infrastructure, robust cross-platform mobile experiences, and autonomous pipelines.
                </p>
                <p>
                  I hold the firm conviction that software shouldn't just exist for aesthetic novelty. Truly high-caliber code must resolve operational bottlenecks, speed up customer conversions, and automate recurring overheads.
                </p>
              </div>
            </motion.div>

            {/* Accent Mission Quote */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-6 bg-white/5 border-l-4 border-accent-mustard rounded-r-lg relative overflow-hidden group"
            >
              <div className="absolute -right-20 -bottom-20 text-[180px] text-white/5 font-display font-black select-none pointer-events-none">
                "
              </div>
              <p className="font-display italic text-lg md:text-xl text-white relative z-10 leading-relaxed">
                “I help businesses build scalable digital systems through modern web apps, Flutter applications, AI automation, and smart e-commerce strategies.”
              </p>
              <div className="mt-3 font-mono text-xs text-accent-mustard uppercase tracking-widest relative z-10">
                — SYED FURQAN NAQVI, MISSION DIRECTION
              </div>
            </motion.div>
          </div>

          {/* Right Block: Interactive Stats Grid */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="grid grid-cols-2 gap-4">
              {QUICK_STATS.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -5, borderColor: 'rgba(229, 193, 68, 0.4)' }}
                  className="bg-white/5 border border-white/10 p-5 rounded-lg flex flex-col justify-between h-40 transition-colors duration-300 relative overflow-hidden group"
                >
                  <div className="flex justify-between items-start">
                    <div className="p-2 bg-accent-mustard/15 rounded-md text-accent-mustard">
                      {getIcon(stat.iconName)}
                    </div>
                    <span className="text-white/20 font-mono text-xs font-bold">0{idx + 1}</span>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="font-display font-extrabold text-3xl md:text-4xl text-white flex items-baseline gap-0.5">
                      {stat.value}
                      {stat.suffix && <span className="text-accent-mustard text-xl font-bold">{stat.suffix}</span>}
                    </div>
                    <div className="text-[11px] font-mono uppercase tracking-widest text-gray-400 group-hover:text-accent-mustard transition-colors duration-300 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Clients Partner Banner */}
            <div className="space-y-4">
              <span className="text-xs font-mono tracking-widest text-accent-mustard uppercase block pl-1">
                ORGANIZATIONS & ECOSYSTEMS WORKED WITH
              </span>
              
              <div className="grid grid-cols-2 gap-3">
                {CLIENT_LOGOS.map((logo) => (
                  <motion.div
                    key={logo.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
                    className={`border p-3.5 rounded flex flex-col justify-center items-center text-center bg-white/5 cursor-pointer select-none transition-all duration-300 ${logo.logoStyle}`}
                  >
                    <span className="font-display font-bold text-sm tracking-wider uppercase text-white">
                      {logo.name}
                    </span>
                    <span className="text-[9px] font-mono text-gray-400 mt-1 uppercase truncate max-w-full">
                      {logo.role}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
