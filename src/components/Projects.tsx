import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Sparkles, Filter, Code2, Layers3 } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredPid, setHoveredPid] = useState<string | null>(null);

  const categories = ['All', 'Web', 'Flutter', 'AI', 'E-commerce'];

  // Filter project lists
  const filteredProjects = selectedCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === selectedCategory || (selectedCategory === 'AI' && p.id === 'upmark-apps')); // Flutter handles AI triggers beautifully as well

  return (
    <section id="projects" className="py-24 bg-primary-navy border-t border-white/5 relative">
      
      {/* Abstract Design Elements */}
      <div className="absolute right-0 top-1/3 w-[30%] h-[30%] bg-accent-mustard/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <SectionHeader number="04" title="FEATURED CREATIONS" subtitle="Sleek Deployments" />

        {/* Categories Tab Selector with Hover Animation */}
        <div className="flex flex-wrap items-center gap-3 mb-12 border-b border-white/5 pb-6">
          <div className="flex items-center gap-2 text-gray-400 text-xs font-mono uppercase tracking-widest mr-4">
            <Filter className="w-3.5 h-3.5 text-accent-mustard" />
            <span>FIT FILTER:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-mono font-medium uppercase tracking-wider rounded transition-all duration-300 relative cursor-pointer ${
                  selectedCategory === cat 
                    ? 'bg-accent-mustard text-primary-navy font-bold' 
                    : 'bg-white/5 text-gray-300 border border-white/10 hover:border-accent-mustard/50 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Vertical Grid of Slide Reveals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredPid(project.id)}
                onMouseLeave={() => setHoveredPid(null)}
                className="bg-[#09152B] border border-white/10 rounded-xl p-6 md:p-8 flex flex-col justify-between min-h-[440px] hover:border-accent-mustard/50 transition-all duration-500 shadow-xl relative overflow-hidden group"
              >
                {/* Visual Accent Corner Cover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent-mustard/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Tech Code Overlay design */}
                <div className="absolute bottom-4 right-4 text-[10vw] font-display font-extrabold text-white/2 select-none pointer-events-none leading-none">
                  0{index + 1}
                </div>

                <div className="space-y-6 relative z-10">
                  {/* Category badge & Index counter */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full text-accent-mustard text-[10px] font-mono uppercase tracking-wider">
                      {/* <Sparkles className="w-3 h-3" /> */}
                      <span>{project.category} SYSTEM</span>
                    </div>
                    
                    <span className="text-gray-500 font-mono text-xs">
                      REF ID: #{project.id.toUpperCase()}
                    </span>
                  </div>

                  {/* Title & Description with expanded hover scale */}
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-display font-bold text-white tracking-tight group-hover:text-accent-mustard transition-colors duration-300">
                      {project.name}
                    </h3>
                    
                    <p className="text-gray-300 font-sans text-sm md:text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Metrics block */}
                  <div className="p-4 bg-accent-mustard/5 border border-accent-mustard/20 rounded-lg flex items-start gap-3">
                    <div className="p-1 rounded bg-accent-mustard/15 text-accent-mustard mt-0.5">
                      <Layers3 className="w-3.5 h-3.5" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono text-accent-mustard uppercase tracking-widest font-bold block">
                        KEY MEASURABLE ACHIEVEMENT
                      </span>
                      <span className="text-xs text-white leading-normal font-sans">
                        {project.keyAchievement}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tech Stack Pills & Action CTAs */}
                <div className="mt-8 space-y-5 border-t border-white/10 pt-5 relative z-10">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 bg-white/5 text-gray-300 rounded border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    {/* Mock Action links with prompt alert simulation */}
                    <div className="flex gap-4">
                      <a 
                        href="#demo"
                        onClick={(e) => {
                          e.preventDefault();
                          alert(`Initiating Live Visual Mockup for the "${project.name}" layout! Under stable deployment at Sahiwal datacenter.`);
                        }}
                        className="text-white hover:text-accent-mustard font-mono text-xs tracking-wider uppercase transition-colors duration-300 flex items-center gap-1.5"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>

                      <a 
                        href="#github"
                        onClick={(e) => {
                          e.preventDefault();
                          alert(`Repository link compiled! This contains the proprietary codebase and asset bundles for Syed Furqan Naqvi's implementation of "${project.name}".`);
                        }}
                        className="text-gray-400 hover:text-accent-mustard font-mono text-xs tracking-wider uppercase transition-colors duration-300 flex items-center gap-1.5"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    </div>
                    
                    <button 
                      onClick={() => alert(`Reviewing Detailed Enterprise Case Study: ${project.name}`)}
                      className="px-3 py-1 bg-white/5 hover:bg-accent-mustard hover:text-primary-navy border border-white/10 text-[10px] font-mono tracking-wider uppercase rounded transition-all duration-300 cursor-pointer"
                    >
                      Case Study
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
