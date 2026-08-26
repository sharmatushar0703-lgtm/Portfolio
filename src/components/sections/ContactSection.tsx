import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles } from 'lucide-react';
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
    <section id="contact" className="py-24 relative border-t border-slate-800/80 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider font-mono">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let’s Build Something Impactful Together
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Open to executive roles, data architecture consultations, and analytics projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Direct Details */}
          <div className="lg:col-span-5 space-y-4">
            <Card3D glowColor="rgba(56, 189, 248, 0.25)" className="space-y-4">
              <h3 className="text-lg font-bold text-white">
                Direct Contact Channels
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Mail className="h-4 w-4 text-cyan-400 shrink-0" />
                    <span className="font-semibold text-slate-200 truncate">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    title="Copy Email"
                  >
                    {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>

                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2.5 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/40 transition-colors"
                >
                  <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span className="font-semibold text-slate-200">
                    {PERSONAL_INFO.phone}
                  </span>
                </a>

                <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <MapPin className="h-4 w-4 text-rose-400 shrink-0" />
                  <span className="font-semibold text-slate-200">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </Card3D>
          </div>

          {/* Message Form */}
          <div className="lg:col-span-7">
            <Card3D glowColor="rgba(168, 85, 247, 0.25)">
              {submitted ? (
                <div className="text-center py-12 space-y-3">
                  <div className="h-12 w-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Received</h3>
                  <p className="text-xs text-slate-300">Thank you! I will get back to you promptly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-white">Send a Direct Message</h3>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="email@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Project details or role overview..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all active:scale-98"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </Card3D>
          </div>
        </div>
      </div>
    </section>
  );
}
