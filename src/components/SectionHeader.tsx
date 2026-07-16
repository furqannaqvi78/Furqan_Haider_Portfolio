import React from 'react';
import { motion } from 'motion/react';

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ number, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="relative mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 w-full overflow-hidden">
      {/* Background/Foreground Large Number */}
      <div className="flex items-baseline gap-4 select-none">
        <motion.span 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.15, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display font-extrabold text-7xl md:text-9xl text-accent-mustard"
        >
          {number}
        </motion.span>
        
        <div className="flex flex-col">
          <motion.h2 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight uppercase"
          >
            {title}
          </motion.h2>
          
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-accent-mustard font-mono text-sm tracking-widest uppercase mt-1"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>

      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: "100px" }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        className="h-[2px] bg-accent-mustard absolute bottom-0 left-0 md:relative md:bottom-2 mt-4 md:mt-0"
      />
    </div>
  );
}
