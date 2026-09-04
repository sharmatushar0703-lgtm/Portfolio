import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  Sparkles,
  Clock,
  User,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Card3D } from '@/components/ui/Card3D';

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState('');

  const WHATSAPP_RAW_NUMBER = '918814050806';
  const WHATSAPP_DIRECT_URL = `https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent('Hi Tushar, I viewed your portfolio and would like to connect with you.')}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nameText = formData.name.trim() ? `My name is ${formData.name.trim()}.` : '';
    const emailText = formData.email.trim() ? `Contact: ${formData.email.trim()}` : '';
    const messageText = formData.message.trim();

    const lines = [
      'Hi Tushar,',
      '',
      nameText,
      emailText,
      '',
      messageText ? `Message / Opportunity:\n${messageText}` : '',
      '',
      '(Sent via Tushar Sharma Portfolio)'
    ].filter((line) => line !== null && line !== undefined);

    const fullMessage = lines.join('\n').trim();
    const targetUrl = `https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(fullMessage)}`;

    setLastWhatsAppUrl(targetUrl);
    setSubmitted(true);

    // Open WhatsApp in new tab
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative border-t border-slate-800/80 bg-slate-950/70 w-full overflow-hidden">
      {/* Background Radial Shaders */}
      <div className="absolute top-10 left-1/3 w-[600px] h-[350px] bg-emerald-500/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-cyan-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 space-y-12 sm:space-y-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-bold uppercase tracking-wider font-mono">
            <WhatsAppIcon className="h-3.5 w-3.5 fill-emerald-400" />
            <span>Instant Connect & WhatsApp Dispatch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Let’s Connect Directly on WhatsApp
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Have an open role, collaboration opportunity, or operational analytics challenge? Reach me directly on WhatsApp for real-time communication.
          </p>
        </motion.div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 w-full items-start">
          {/* Left Column: Direct Communication Channels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-4"
          >
            <Card3D glowColor="rgba(16, 185, 129, 0.25)" className="space-y-5">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>Direct Communication Channels</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Connect via WhatsApp, direct phone call, or email.
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                {/* 1. Primary WhatsApp Card */}
                <a
                  href={WHATSAPP_DIRECT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 hover:border-emerald-400 hover:bg-emerald-900/40 transition-all group shadow-md shadow-emerald-950/40"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">
                      <WhatsAppIcon className="h-4 w-4 fill-emerald-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-[10px] text-emerald-400 font-mono uppercase tracking-wider font-bold">
                          WhatsApp Messenger
                        </p>
                        <span className="px-1.5 py-0.2 rounded-full text-[9px] bg-emerald-500/20 text-emerald-300 font-mono">
                          Instant
                        </span>
                      </div>
                      <p className="font-bold text-white mt-0.5">{PERSONAL_INFO.phone}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </a>

                {/* 2. Direct Phone Card */}
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Direct Voice Call</p>
                      <p className="font-semibold text-slate-200 mt-0.5">{PERSONAL_INFO.phone}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </a>

                {/* 3. 1-Click Copy Email Card */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Email Address</p>
                      <p className="font-semibold text-slate-200 truncate mt-0.5">{PERSONAL_INFO.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-1.5 shrink-0 ml-2 cursor-pointer"
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

                {/* 4. Location Card */}
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
                <span>WhatsApp Response: Instant / within a few minutes</span>
              </div>
            </Card3D>
          </motion.div>

          {/* Right Column: Direct WhatsApp Messaging Hub */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <Card3D glowColor="rgba(16, 185, 129, 0.28)" className="space-y-6">
              {/* Card Header */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <WhatsAppIcon className="h-5 w-5 fill-emerald-400" />
                    <span>Send Message via WhatsApp</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Connect instantly with Tushar Sharma on WhatsApp at <strong className="text-emerald-400">{PERSONAL_INFO.phone}</strong>.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Online on WhatsApp</span>
                </span>
              </div>

              {/* Instant 1-Click WhatsApp Quick Action */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-emerald-950/40 border border-emerald-500/40 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-200">
                    ⚡ Quick 1-Click WhatsApp Connect
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">No Typing Needed</span>
                </div>
                <a
                  href={WHATSAPP_DIRECT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2.5 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  <WhatsAppIcon className="h-4 w-4 fill-slate-950" />
                  <span>Open WhatsApp Chat Directly (+91 88140 50806)</span>
                  <ArrowUpRight className="h-4 w-4 text-slate-950" />
                </a>
              </div>

              {/* Subtle Divider */}
              <div className="relative flex items-center justify-center">
                <div className="border-t border-slate-800 w-full" />
                <span className="bg-slate-900 px-3 text-[10px] font-mono text-slate-400 uppercase tracking-widest absolute">
                  Or Compose Your Message Below
                </span>
              </div>

              {/* Form Content / Post-Submission Redirect Notice */}
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 px-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 space-y-4"
                >
                  <div className="h-14 w-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30 shadow-lg shadow-emerald-500/20">
                    <WhatsAppIcon className="h-7 w-7 fill-emerald-400" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base sm:text-lg font-bold text-white">Opening WhatsApp Chat...</h4>
                    <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                      Your composed message has been redirected to Tushar Sharma’s WhatsApp (<strong className="text-emerald-400">{PERSONAL_INFO.phone}</strong>).
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={lastWhatsAppUrl || WHATSAPP_DIRECT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-500 text-black hover:bg-emerald-400 transition-all flex items-center gap-1.5"
                    >
                      <span>Click Here If WhatsApp Didn't Open</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', message: '' });
                      }}
                      className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                    >
                      Compose Another Message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                        Your Name <span className="text-emerald-400">*</span>
                      </label>
                      <div className="relative">
                        <User className="h-4 w-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                        Your Email or Organization <span className="text-emerald-400">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="h-4 w-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. rahul@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                      Project, Role, or Inquiry Overview <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your requirement, opportunity, or role objectives..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl text-xs font-black bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                  >
                    <WhatsAppIcon className="h-4 w-4 fill-slate-950" />
                    <span>Send Message to WhatsApp (+91 88140 50806)</span>
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
export default ContactSection;
