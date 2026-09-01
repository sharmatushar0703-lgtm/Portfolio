import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles, Clock, ShieldCheck, CheckCircle2, User, MessageSquare, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Card3D } from '@/components/ui/Card3D';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative border-t border-slate-800/80 bg-slate-950/70 w-full overflow-hidden">
      {/* Background Radial Shaders */}
      <div className="absolute top-10 left-1/3 w-[600px] h-[350px] bg-cyan-500/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-purple-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 space-y-12 sm:space-y-16 relative z-10">
        {/* Header with entrance animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-bold uppercase tracking-wider font-mono">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Let’s Build Something Impactful Together
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Available for System Executive roles, Data & MIS Analytics consultations, and operational intelligence workflows.
          </p>
        </motion.div>

        {/* 2-Column Clean Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 w-full items-start">
          {/* Left Column: Direct Channels & Status Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-4"
          >
            <Card3D glowColor="rgba(56, 189, 248, 0.25)" className="space-y-5">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>Direct Communication Channels</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Reach out directly via email, phone, or professional networks.
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                {/* 1-Click Copy Email Card */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Email Address</p>
                      <p className="font-semibold text-slate-200 truncate mt-0.5">{PERSONAL_INFO.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-1.5 shrink-0 ml-2"
                    title="Copy Email"
                  >
                    {copied ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 font-mono">
                        <Check className="h-3.5 w-3.5" />
                        <span>Copied!</span>
                      </span>
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {/* Click-to-call Phone Card */}
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 transition-colors group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Direct Phone</p>
                      <p className="font-semibold text-slate-200 mt-0.5">{PERSONAL_INFO.phone}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </a>

                {/* Location Card */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <div className="p-2 rounded-xl bg-rose-500/10 text-rose-400 shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Current Location</p>
                    <p className="font-semibold text-slate-200 mt-0.5">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
              </div>

              {/* Status Banner */}
              <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center gap-3 text-xs text-emerald-300 font-medium">
                <Clock className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Response Time: Typically within 24 hours</span>
              </div>
            </Card3D>
          </motion.div>

          {/* Right Column: Clean Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <Card3D glowColor="rgba(168, 85, 247, 0.25)" className="space-y-5">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-purple-400" />
                  <span>Send a Direct Message</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Have an open role, collaboration opportunity, or analytics challenge? Leave a message below.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10 space-y-3"
                >
                  <div className="h-12 w-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30 shadow-lg shadow-emerald-500/20">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Message Transmitted</h3>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Thank you for reaching out! Your message has been logged and I will respond promptly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <div className="relative">
                        <User className="h-4 w-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                        Your Email <span className="text-cyan-400">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="h-4 w-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          placeholder="email@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                      Project or Role Overview <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe the opportunity, key requirements, or project objectives..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl text-xs font-black bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>Send Message Dispatch</span>
                  </button>
                </form>
              )}
            </Card3D>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
