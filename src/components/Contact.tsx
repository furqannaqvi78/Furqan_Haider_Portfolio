import React, { useState } from 'react';
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Linkedin, MapPin, Send, MessageCircleCode, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web Development',
    message: ''
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Handles state submit triggers
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
    alert("Please fill out all operational inputs safely before launching.");
    return;
  }

  setSubmitting(true);

  try {
    await emailjs.send(
      "service_2mxgyob",
      "template_dpc7wnk",
      {
        from_name: formData.name,
        from_email: formData.email,
        project_type: formData.projectType,
        message: formData.message,
      },
      "jh7QLDpu1tneLsOaf"
    );

    setSubmitting(false);
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      projectType: "Web Development",
      message: "",
    });

  } catch (error) {
    console.error("EmailJS Error:", error);
    setSubmitting(false);
    alert("Something went wrong. Please try again.");
  }
};


  const projectOptions = [
    'Web Development',
    'Flutter App Development',
    'AI Workflow Automation',
    'E-commerce Store Optimization',
    'Digital Business Consulting',
    'Other General Query'
  ];

  return (
    <section id="contact" className="py-24 bg-[#09152B] relative">
      {/* Visual Accent grid */}
      <div className="absolute right-0 bottom-0 w-[40vw] h-[40vw] rounded-full bg-accent-mustard/2 blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <SectionHeader number="08" title="CONNECT WITH INTENT" subtitle="System Queries & Lead Intake" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          
          {/* Left Block: Direct Coordinate Hub */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-xl md:text-3xl font-display font-medium text-white tracking-tight leading-snug">
                Let's build something <span className="text-accent-mustard">smart</span>.
              </h3>
              
              <p className="text-gray-300 font-sans text-sm md:text-base leading-relaxed max-w-md">
                Have a clear outline or just an abstract business bottleneck? Drop a line below. I normally review telemetry logs and respond under 12 hours.
              </p>
            </div>

            {/* Structured Icons list */}
            <div className="space-y-4">
              {/* Location */}
              <div className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-lg">
                <div className="p-2.5 bg-accent-mustard/15 rounded-md text-accent-mustard mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-bold block">
                    OPERATIONAL LOCATION
                  </span>
                  <span className="text-sm font-semibold text-white">
                    Sahiwal, Punjab, Pakistan
                  </span>
                </div>
              </div>

              {/* Email Address */}
              <a 
                href="mailto:syedmfurqanhaidernaqvi@gmail.com"
                className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-lg hover:border-accent-mustard/40 transition-colors duration-300 block"
              >
                <div className="p-2.5 bg-accent-mustard/15 rounded-md text-accent-mustard mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-bold block">
                    DIRECT EMAIL INTAKE
                  </span>
                  <span className="text-sm font-semibold text-white break-all hover:text-accent-mustard transition-colors duration-300">
                    syedmfurqanhaidernaqvi@gmail.com
                  </span>
                </div>
              </a>

              {/* LinkedIn Network */}
              <a 
                href="https://www.linkedin.com/in/syed-furqan-naqvi" // Placeholder standard profile link
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-lg hover:border-accent-mustard/40 transition-colors duration-300 block"
              >
                <div className="p-2.5 bg-accent-mustard/15 rounded-md text-accent-mustard mt-0.5">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-bold block">
                    PROFESSIONAL LINKEDIN
                  </span>
                  <span className="text-sm font-semibold text-white hover:text-accent-mustard transition-colors duration-300">
                    Syed Furqan Naqvi Profile
                  </span>
                </div>
              </a>
            </div>

            {/* FRICTIONLESS WHATSAPP CTA */}
            <div className="pt-4">
              <span className="text-[10px] font-mono text-accent-mustard uppercase tracking-widest block pl-1 mb-2 font-bold">
                FAST TRACK ENGAGEMENT
              </span>
              
              <a
                href="https://wa.me/+447311133431" // Simulated standard Pakistan WhatsApp connect
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 px-6 py-4 bg-[#25D366] text-black font-display font-bold text-sm tracking-wide uppercase rounded shadow-lg shadow-[#25D366]/10 transform transition-transform duration-300 hover:scale-[1.03]"
              >
                <MessageCircleCode className="w-5 h-5" />
                <span>Chat via WhatsApp Direct</span>
              </a>
            </div>
          </div>

          {/* Right Block: Secure Intake Form */}
          <div className="lg:col-span-7">
            <div className="bg-primary-navy border border-white/10 p-8 md:p-10 rounded-xl relative overflow-hidden shadow-2xl">
              
              {/* Form decor shadow grids */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-mustard/5 rounded-full blur-2xl pointer-events-none" />

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="flex items-center gap-2 border-b border-white/5 pb-4">
                  {/* <Sparkles className="w-4 h-4 text-accent-mustard animate-spin-slow" /> */}
                  <span className="font-mono text-xs text-white/70 font-bold uppercase tracking-widest">
                    SYSTEM INTAKE PIPELINE
                  </span>
                </div>

                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name-input" className="text-xs font-mono text-gray-300 uppercase tracking-wider block font-semibold">
                    Full Name / Organization
                  </label>
                  <input 
                    id="name-input"
                    type="text"
                    required
                    placeholder="Enter full identifier..."
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/5 border border-white/15 focus:border-accent-mustard rounded text-white text-sm focus:outline-none transition-colors duration-300 placeholder-gray-600"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email-input" className="text-xs font-mono text-gray-300 uppercase tracking-wider block font-semibold">
                    Electronic Mail Address
                  </label>
                  <input 
                    id="email-input"
                    type="email"
                    required
                    placeholder="E.g., client@organization.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/5 border border-white/15 focus:border-accent-mustard rounded text-white text-sm focus:outline-none transition-colors duration-300 placeholder-gray-600"
                  />
                </div>

                {/* Project Type selection */}
                <div className="space-y-2">
                  <label htmlFor="type-select" className="text-xs font-mono text-gray-300 uppercase tracking-wider block font-semibold">
                    Primary Service Request
                  </label>
                  <select
                    id="type-select"
                    value={formData.projectType}
                    onChange={(e) => setFormData(prev => ({ ...prev, projectType: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/5 border border-white/15 focus:border-accent-mustard rounded text-white text-sm focus:outline-none transition-colors duration-300 cursor-pointer text-gray-300"
                  >
                    {projectOptions.map((opt) => (
                      <option key={opt} className="bg-primary-navy text-white text-sm py-2" value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message-input" className="text-xs font-mono text-gray-300 uppercase tracking-wider block font-semibold">
                    Outline / Detailed Inquiry Code
                  </label>
                  <textarea 
                    id="message-input"
                    required
                    rows={4}
                    placeholder="Describe specific results, targets, or platform specs required..."
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/5 border border-white/15 focus:border-accent-mustard rounded text-white text-sm focus:outline-none transition-colors duration-300 placeholder-gray-600 resize-none"
                  />
                </div>

                {/* Submit buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto px-7 py-4 bg-accent-mustard text-primary-navy font-display font-medium text-xs tracking-widest uppercase transition-transform duration-300 hover:scale-105 rounded flex items-center justify-center gap-2 cursor-pointer font-bold"
                  >
                    {submitting ? (
                      <div className="w-4 h-4 rounded-full border-2 border-primary-navy border-t-transparent animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    <span>{submitting ? 'Latching State...' : 'Launch Project Inquiry'}</span>
                  </button>

                  <div className="text-[10px] font-mono text-gray-500 flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-accent-mustard" />
                    <span>Secure encrypted connection</span>
                  </div>
                </div>

              </form>

              {/* Success Overlay Panel */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-primary-navy/98 backdrop-blur-sm z-30 flex flex-col justify-center items-center p-8 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0.85, y: 15 }}
                      animate={{ scale: 1, y: 0 }}
                      transition={{ type: "spring", damping: 15 }}
                      className="space-y-4 max-w-sm flex flex-col items-center"
                    >
                      <CheckCircle2 className="w-16 h-16 text-accent-mustard animate-bounce" />
                      
                      <div className="space-y-1">
                        <h4 className="font-display font-extrabold text-xl text-white uppercase tracking-tight">
                          Transmission Successful!
                        </h4>
                        <span className="text-[10px] font-mono text-accent-mustard uppercase tracking-widest block font-bold">
                          PIPELINE LATCHED
                        </span>
                      </div>

                      <p className="text-gray-300 text-xs md:text-sm font-sans leading-relaxed">
                        Inquiry registry updated for <span className="text-white font-medium">Syed Furqan Naqvi</span>. His automation system has catalogued your request. Expect a custom callback soon.
                      </p>

                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-5 py-2.5 border border-white/15 bg-white/5 hover:bg-white/10 text-white font-mono text-xs tracking-wider uppercase rounded cursor-pointer transition-colors duration-300"
                      >
                        Reset Form Panel
                      </button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
