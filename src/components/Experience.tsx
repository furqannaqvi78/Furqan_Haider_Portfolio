import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Briefcase, MapPin, Sparkles } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { EXPERIENCES } from '../data';

export default function Experience() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <section id="experience" className="py-24 bg-[#09152B] relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <SectionHeader number="06" title="PROFESSIONAL TIMELINE" subtitle="Career Milestones" />

        {/* Timeline vector tree */}
        <div className="relative mt-16 pb-12">
          {/* Vertical Connection Spine */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-white/10 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-white/10 md:hidden animate-pulse" />

          {/* Timeline Nodes */}
          <div className="space-y-12 relative z-10">
            {EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={exp.id}
                  className={`flex flex-col md:flex-row relative items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                  onMouseEnter={() => setActiveItem(exp.id)}
                  onMouseLeave={() => setActiveItem(null)}
                >
                  {/* Timeline central node dot */}
                  <div className="absolute left-6 md:left-1/2 top-1.5 md:top-1/2 w-4 h-4 rounded-full border-2 border-accent-mustard bg-primary-navy -translate-x-[7px] md:-translate-x-2 md:-translate-y-2 z-25 flex items-center justify-center">
                    <motion.div 
                      animate={{ 
                        scale: activeItem === exp.id ? [1, 1.6, 1] : 1,
                        backgroundColor: activeItem === exp.id ? '#E5C144' : 'transparent'
                      }}
                      className="w-1.5 h-1.5 rounded-full bg-accent-mustard" 
                    />
                  </div>

                  {/* Left Column (Alternating Spacer / Content) */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className={`bg-primary-navy border border-white/10 rounded-xl p-6 hover:border-accent-mustard/50 transition-all duration-300 relative shadow-xl ${
                        activeItem === exp.id ? 'shadow-accent-mustard/5' : ''
                      }`}
                    >
                      {/* Company Period Tags */}
                      <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
                        <span className="flex items-center gap-1.5 text-xs font-mono text-accent-mustard font-bold uppercase">
                          {/* <Calendar className="w-3.5 h-3.5" /> */}
                          <span>{exp.period}</span>
                        </span>
                        
                        <span className="flex items-center gap-1 text-[10px] font-mono text-gray-400">
                          <MapPin className="w-3 h-3" />
                          <span>{exp.location}</span>
                        </span>
                      </div>

                      {/* Header details */}
                      <div className="space-y-1">
                        <h3 className="font-display font-bold text-lg md:text-xl text-white">
                          {exp.role}
                        </h3>
                        <p className="font-display text-accent-mustard text-sm font-semibold">
                          {exp.company}
                        </p>
                      </div>

                      {/* Achievements bullets */}
                      <ul className="mt-4 space-y-2.5 border-t border-white/5 pt-4">
                        {exp.description.map((bullet, bIdx) => (
                          <li key={bIdx} className="text-gray-300 text-xs md:text-sm flex items-start gap-2 leading-relaxed">
                            <span className="w-1 h-1 rounded-full bg-accent-mustard/60 mt-2 flex-shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Chips */}
                      {exp.techStack && (
                        <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-white/5">
                          {exp.techStack.map((tech) => (
                            <span 
                              key={tech} 
                              className="text-[9px] font-mono font-medium tracking-wide bg-white/5 border border-white/10 text-gray-300 px-2 py-0.5 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                    </motion.div>
                  </div>

                  {/* Right Column (Oppose side empty space placeholder matching timeline balance) */}
                  <div className="hidden md:block w-1/2 md:px-8 text-left uppercase font-mono text-gray-700 font-extrabold select-none opacity-20 text-3xl">
                    <div className="px-8 font-poppins text-right tracking-widest text-[#E5C144]/15">
                      {isEven ? '' : exp.company}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
