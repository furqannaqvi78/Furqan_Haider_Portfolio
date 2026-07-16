import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Calendar, Clock, ArrowRight, X, Heart, MessageSquare, Send } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { BLOG_POSTS } from '../data';
import { BlogPost } from '../types';

export default function Blog() {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [likes, setLikes] = useState<Record<string, number>>({
    'blog-1': 14,
    'blog-2': 32,
    'blog-3': 21
  });
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  
  // Local reactive comments lists per blog post
  const [comments, setComments] = useState<Record<string, Array<{ name: string; text: string; time: string }>>>({
    'blog-1': [
      { name: 'Sajid Ali', text: 'This BLoC approach completely solved my stream memory leak issues!', time: '2 hours ago' },
      { name: 'Emily Watts', text: 'Solid architecture! Do you recommend this for larger enterprise pipelines too?', time: 'Yesterday' }
    ]
  });
  const [commName, setCommName] = useState('');
  const [commText, setCommText] = useState('');

  // Handle double clicking hearts or liking post
  const toggleLike = (postId: string) => {
    const isLiked = likedPosts[postId];
    setLikedPosts(prev => ({ ...prev, [postId]: !isLiked }));
    setLikes(prev => ({
      ...prev,
      [postId]: isLiked ? prev[postId] - 1 : prev[postId] + 1
    }));
  };

  // Add Comment reactively
  const postComment = (postId: string) => {
    if (!commName.trim() || !commText.trim()) return;
    
    const newComment = {
      name: commName,
      text: commText,
      time: 'Just now'
    };
    
    setComments(prev => ({
      ...prev,
      [postId]: [newComment, ...(prev[postId] || [])]
    }));
    
    setCommName('');
    setCommText('');
  };

  return (
    <section id="blog" className="py-24 bg-primary-navy border-t border-white/5 relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <SectionHeader number="07" title="KNOWLEDGE SHARING" subtitle="Publications & Tech Essays" />

        {/* Blog Post List Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {BLOG_POSTS.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.5 }}
              onClick={() => setActivePost(post)}
              className="bg-[#09152B] border border-white/10 rounded-xl overflow-hidden hover:border-accent-mustard/40 transition-all duration-300 flex flex-col justify-between cursor-pointer group shadow-lg"
            >
              <div className="p-6 space-y-4">
                {/* Meta line */}
                <div className="flex items-center justify-between text-[10px] font-mono text-gray-400">
                  <span className="flex items-center gap-1">
                    {/* <Calendar className="w-3.5 h-3.5 text-accent-mustard" /> */}
                    <span>{post.date}</span>
                  </span>
                  
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-accent-mustard" />
                    <span>{post.readTime}</span>
                  </span>
                </div>

                {/* Excerpt Details */}
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-accent-mustard transition-colors duration-300 leading-snug">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 font-sans text-xs md:text-sm line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer tags and button */}
              <div className="p-6 pt-0 border-t border-white/5 mt-4 space-y-4">
                <div className="flex flex-wrap gap-1 pt-2.5">
                  {post.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="text-[9px] font-mono bg-white/5 text-gray-400 px-2 py-0.5 rounded border border-white/5">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center text-xs font-mono">
                  <button 
                    onClick={() => setActivePost(post)}
                    className="text-accent-mustard group-hover:text-white transition-colors duration-300 flex items-center gap-1.5 font-bold uppercase tracking-wider"
                  >
                    <span>Read Essay</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                  <div className="flex items-center gap-3 text-gray-500">
                    <span className="flex items-center gap-0.5 text-[10px]" onClick={(e) => { e.stopPropagation(); toggleLike(post.id); }}>
                      <Heart className={`w-3.5 h-3.5 ${likedPosts[post.id] ? 'fill-red-500 text-red-500' : ''}`} />
                      <span>{likes[post.id]}</span>
                    </span>
                    <span className="flex items-center gap-0.5 text-[10px]">
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>{(comments[post.id] || []).length}</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dedicated Modal for Reading and active conversation */}
        <AnimatePresence>
          {activePost && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary-navy/95 backdrop-blur-md overflow-y-auto"
            >
              <div className="absolute inset-0 cursor-zoom-out" onClick={() => setActivePost(null)} />

              <motion.div
                initial={{ scale: 0.95, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: -30 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative w-full max-w-2xl bg-[#09152B] border border-accent-mustard/30 rounded-2xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
              >
                {/* Header Close Trigger */}
                <button
                  onClick={() => setActivePost(null)}
                  className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-accent-mustard hover:text-primary-navy rounded-full transition-colors duration-300 z-30 text-white cursor-pointer border border-white/10"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* scroll content portal */}
                <div className="overflow-y-auto p-6 md:p-10 space-y-8">
                  {/* Essay Intro block */}
                  <div className="space-y-3 pb-6 border-b border-white/15 pt-4">
                    <div className="flex flex-wrap gap-2.5 items-center">
                      <span className="bg-accent-mustard text-primary-navy px-2.5 py-0.5 rounded font-mono text-[9px] font-bold uppercase">
                        ESSAY PREVIEW
                      </span>
                      <span className="text-[10px] font-mono text-gray-400">
                        Date: {activePost.date} • {activePost.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl md:text-3xl font-display font-extrabold text-white leading-tight">
                      {activePost.title}
                    </h2>
                  </div>

                  {/* Body paragraphs */}
                  <div className="text-gray-200 font-sans text-sm md:text-base space-y-4 leading-relaxed pr-1 whitespace-pre-line">
                    <p className="font-semibold text-accent-mustard italic text-base">
                      {activePost.excerpt}
                    </p>
                    <p>
                      {activePost.content}
                    </p>
                    <p>
                      In modern commercial settings, deploying systems with manual intervention points presents significant liabilities. For instance, relying on developers to manually synchronize staging repositories or trigger manual cloud builds limits structural productivity. High-caliber automation establishes strict CI webhooks where checks compile automatically.
                    </p>
                    <p>
                      This layout operates identically to the strategies engineered inside the FurqanBiz tech stack. By separating static routes, introducing aggressive modular asset caching, and mounting lightweight API proxies, we maintain absolute availability scores across major client deployments.
                    </p>
                  </div>

                  {/* Active Interactive Actions */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-b border-white/5 py-5 mt-8">
                    <button
                      onClick={() => toggleLike(activePost.id)}
                      className={`px-4 py-2 rounded text-xs font-mono tracking-wider uppercase transition-colors duration-300 flex items-center gap-1.5 cursor-pointer ${
                        likedPosts[activePost.id]
                          ? 'bg-red-500/20 text-red-500 border border-red-500/40'
                          : 'bg-white/5 text-gray-300 border border-white/10 hover:border-red-500/30 hover:text-red-400'
                      }`}
                    >
                      <Heart className="w-4 h-4" />
                      <span>{likedPosts[activePost.id] ? 'Post Liked!' : 'Like Technical Essay'} ({likes[activePost.id]})</span>
                    </button>

                    <div className="text-xs text-gray-400 font-mono">
                      Category: <span className="text-accent-mustard">{activePost.tags.join(', ')}</span>
                    </div>
                  </div>

                  {/* Live Feedback Comments System */}
                  <div className="space-y-4">
                    <h4 className="font-display font-bold text-base text-white flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-accent-mustard" />
                      <span>Ecosystem Feedback ({(comments[activePost.id] || []).length})</span>
                    </h4>

                    {/* Write comment */}
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-3">
                      <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block font-bold pl-1">
                        POST A REASSESSMENT OR QUERY
                      </span>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <input 
                          type="text" 
                          placeholder="Your Identifier / Name"
                          value={commName}
                          onChange={(e) => setCommName(e.target.value)}
                          className="px-3 py-1.5 bg-primary-navy border border-white/10 rounded text-xs text-white placeholder-gray-500 focus:outline-none focus:border-accent-mustard"
                        />
                        <span className="text-[9px] font-mono text-gray-500 self-center hidden sm:block">
                          * Updates local state only
                        </span>
                      </div>

                      <div className="flex gap-2">
                        <textarea 
                          placeholder="Type inquiry / response code..."
                          rows={2}
                          value={commText}
                          onChange={(e) => setCommText(e.target.value)}
                          className="flex-grow px-3 py-1.5 bg-primary-navy border border-white/10 rounded text-xs text-white placeholder-gray-500 focus:outline-none focus:border-accent-mustard resize-none"
                        />
                        <button
                          onClick={() => postComment(activePost.id)}
                          className="px-4 bg-accent-mustard hover:bg-white text-primary-navy font-bold rounded flex items-center justify-center transition-colors duration-300 cursor-pointer"
                        >
                          <Send className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* List of comments */}
                    <div className="space-y-3 pt-2">
                      {(comments[activePost.id] || []).length === 0 ? (
                        <p className="text-xs text-gray-500 italic font-mono">
                          No responses registered. Be the first to initiate!
                        </p>
                      ) : (
                        (comments[activePost.id] || []).map((comm, cIdx) => (
                          <motion.div 
                            key={cIdx} 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="p-3.5 bg-white/5 border border-white/10 rounded flex flex-col gap-1 text-left"
                          >
                            <div className="flex justify-between items-center text-[10px] font-mono text-gray-400">
                              <span className="text-accent-mustard font-semibold uppercase">{comm.name}</span>
                              <span>{comm.time}</span>
                            </div>
                            <span className="text-xs text-gray-300 font-sans leading-relaxed">
                              {comm.text}
                            </span>
                          </motion.div>
                        ))
                      )}
                    </div>
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
