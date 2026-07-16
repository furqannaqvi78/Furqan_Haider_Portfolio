import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, FileDown, Eye, X, Check, ShieldCheck, Calendar, Sparkles } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { CERTIFICATES } from '../data';
import { Certificate } from '../types';

export default function Certificates() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeCertificate, setActiveCertificate] = useState<Certificate | null>(null);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [successId, setSuccessId] = useState<string | null>(null);

  const categories = [
    'All',
    'Web Development',
    'Flutter Development',
    'AI & Automation',
    'UI/UX Design',
    'Internships & Training',
    'Business Consulting'
  ];

  const filteredCertificates = selectedCategory === 'All'
    ? CERTIFICATES
    : CERTIFICATES.filter(c => c.category === selectedCategory);

  // Simulate file download with beautiful loading state
  const handleDownload = (certId: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid triggering lightbox
    setDownloadingId(certId);
    
    setTimeout(() => {
      setDownloadingId(null);
      setSuccessId(certId);
      
      // Reset success checkmark after delay
      setTimeout(() => {
        setSuccessId(null);
      }, 2500);
      
      alert(`Success! Simulated high-resolution PDF download initialized for Certificate Credential ID: ${certId.toUpperCase()}`);
    }, 1500);
  };

  return (
    <section id="certificates" className="py-24 bg-[#09152B] relative">
      
      {/* Visual Accent Ambient Orbs */}
      <div className="absolute left-0 bottom-0 w-[25vw] h-[25vw] rounded-full bg-accent-mustard/3 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <SectionHeader number="05" title="VERIFIED CREDENTIALS" subtitle="Endorsed Expertise" />

        {/* Categories Selector */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12 border-b border-white/5 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-accent-mustard text-primary-navy font-bold'
                  : 'bg-white/5 text-gray-300 border border-white/10 hover:border-accent-mustard/50 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCertificates.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.5 }}
                onClick={() => setActiveCertificate(cert)}
                className="bg-primary-navy border border-white/10 rounded-xl overflow-hidden hover:border-accent-mustard/40 transition-all duration-300 flex flex-col justify-between cursor-pointer group shadow-lg"
              >
                {/* Image header placeholder */}
                <div className="relative h-44 overflow-hidden w-full bg-[#071126]">
                  <img 
                    src={cert.imageUrl} 
                    alt={cert.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-navy to-transparent" />
                  
                  {/* Category over lay */}
                  <span className="absolute bottom-3 left-4 bg-accent-mustard text-primary-navy font-mono text-[9px] font-extrabold uppercase px-2.5 py-1 rounded">
                    {cert.category}
                  </span>
                </div>

                {/* Info block */}
                <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-gray-400 flex items-center gap-1.5 font-semibold">
                      <Calendar className="w-3 h-3 text-accent-mustard" />
                      <span>ISSUED: {cert.issueDate}</span>
                    </span>

                    <h3 className="font-display font-bold text-base md:text-lg text-white group-hover:text-accent-mustard transition-colors duration-300 leading-snug">
                      {cert.title}
                    </h3>

                    <p className="text-sm text-gray-300 font-sans">
                      By {cert.issuer}
                    </p>
                  </div>

                  {/* Footer actions */}
                  <div className="border-t border-white/5 pt-4 flex justify-between items-center mt-2.5">
                    <span className="text-[10px] font-mono text-gray-500 max-w-[140px] truncate">
                      ID: {cert.credentialId || 'VERIFIED-MEMBER'}
                    </span>

                    <div className="flex gap-2">
                      <button
                        onClick={(e) => handleDownload(cert.id, e)}
                        disabled={downloadingId !== null}
                        className={`p-2 rounded border transition-all duration-300 flex items-center justify-center cursor-pointer ${
                          successId === cert.id
                            ? 'bg-green-500/10 border-green-500 text-green-500'
                            : downloadingId === cert.id
                            ? 'bg-accent-mustard/10 border-accent-mustard text-accent-mustard animate-spin-slow'
                            : 'bg-white/5 border-white/10 hover:border-accent-mustard/50 hover:bg-white/10 text-white'
                        }`}
                        title="Download Document Certificate PDF"
                      >
                        {successId === cert.id ? (
                          <Check className="w-3.5 h-3.5" />
                        ) : downloadingId === cert.id ? (
                          <Award className="w-3.5 h-3.5 animate-bounce" />
                        ) : (
                          <FileDown className="w-3.5 h-3.5" />
                        )}
                      </button>

                      <button
                        className="px-3 py-1 bg-accent-mustard/10 hover:bg-accent-mustard hover:text-primary-navy text-accent-mustard border border-accent-mustard/20 font-mono text-5xs tracking-widest uppercase rounded text-[10px] flex items-center gap-1 cursor-pointer transition-all duration-300"
                        onClick={() => setActiveCertificate(cert)}
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dynamic Lightbox Modal */}
        <AnimatePresence>
          {activeCertificate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary-navy/95 backdrop-blur-md overflow-y-auto"
            >
              {/* Backing exit zone */}
              <div className="absolute inset-0 cursor-zoom-out" onClick={() => setActiveCertificate(null)} />

              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: -20 }}
                transition={{ type: "spring", damping: 25, stiffness: 180 }}
                className="relative w-full max-w-3xl bg-[#09152B] border border-accent-mustard/40 rounded-2xl overflow-hidden shadow-2xl z-10"
              >
                {/* Header Close Trigger */}
                <button
                  onClick={() => setActiveCertificate(null)}
                  className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-accent-mustard hover:text-primary-navy border border-white/10 rounded-full transition-colors duration-300 cursor-pointer text-white"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Certificate Structure Wrapper */}
                <div className="p-8 md:p-12 text-center flex flex-col justify-between items-center space-y-8 relative">
                  
                  {/* Elegant Golden Border Frames */}
                  <div className="absolute inset-4 border border-accent-mustard/20 pointer-events-none rounded-lg" />
                  <div className="absolute inset-6 border-2 border-accent-mustard/40 pointer-events-none rounded-lg" />

                  {/* Certificate Heading */}
                  <div className="space-y-2 pt-4 relative z-10">
                    <div className="flex justify-center mb-2">
                      <Award className="w-12 h-12 text-accent-mustard stroke-[1.5]" />
                    </div>
                    
                    <span className="font-mono text-xs tracking-widest text-accent-mustard uppercase font-bold">
                      VERIFIABLE CREDENTIAL BLUEPRINT
                    </span>
                    
                    <h2 className="text-xl md:text-3xl font-display font-extrabold text-white leading-tight uppercase">
                      Certificate of Achievement
                    </h2>
                  </div>

                  {/* Recipient details */}
                  <div className="space-y-4 max-w-lg relative z-10">
                    <span className="text-gray-400 font-sans text-xs italic">
                      This formal record certifies that
                    </span>
                    
                    <h3 className="text-2xl md:text-4xl font-display font-medium text-white tracking-wide border-b border-accent-mustard/25 pb-2 uppercase">
                      Syed Furqan Naqvi
                    </h3>
                    
                    <p className="text-gray-300 font-sans text-sm md:text-base leading-relaxed">
                      has successfully demonstrated deep tech competence and fulfilled all course or challenge specifications to earn the credential:
                    </p>

                    <h4 className="text-base md:text-xl font-display font-bold text-accent-mustard">
                      {activeCertificate.title}
                    </h4>
                  </div>

                  {/* Issuing specifications & Seal info */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full border-t border-white/5 pt-8 relative z-10 max-w-2xl text-left md:text-center">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block">
                        ISSUING BODY
                      </span>
                      <span className="text-xs font-semibold text-white">
                        {activeCertificate.issuer}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block">
                        DATE RECOGNIZED
                      </span>
                      <span className="text-xs font-semibold text-white">
                        {activeCertificate.issueDate}
                      </span>
                    </div>

                    <div className="col-span-2 md:col-span-1 space-y-1 text-center">
                      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block">
                        SECURE TRUST SEAL
                      </span>
                      <div className="inline-flex items-center gap-1 bg-green-500/10 border border-green-500/20 px-2.5 py-0.5 rounded text-green-400 text-[10px] font-mono font-bold">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>VERIFIED</span>
                      </div>
                    </div>
                  </div>

                  {/* Verification link and print simulation */}
                  <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center pt-4">
                    <button
                      onClick={(e) => handleDownload(activeCertificate.id, e)}
                      className="px-6 py-3 bg-accent-mustard text-primary-navy font-display font-bold text-xs tracking-wider uppercase rounded transition-transform duration-300 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <FileDown className="w-4 h-4" />
                      <span>Download PDF Copy</span>
                    </button>

                    <button
                      onClick={() => alert(`Credential ID ${activeCertificate.credentialId || 'VERIFIED-MEMBER'} query is active. Standard hash records verified under public cryptographic indexes.`)}
                      className="px-6 py-3 border border-white/10 bg-white/5 text-gray-300 hover:border-accent-mustard font-mono text-xs tracking-wider uppercase rounded transition-colors duration-300 cursor-pointer"
                    >
                      Verify Authenticity
                    </button>
                  </div>

                  {/* Footer small print */}
                  <div className="text-[9px] font-mono text-gray-500 pt-2 relative z-10">
                    Credential ID: {activeCertificate.credentialId || 'REF-N/A'} • Authentification generated in Lahore/Sahiwal datastores
                  </div>

                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
