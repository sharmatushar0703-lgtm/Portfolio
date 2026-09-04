import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Sparkles,
  ArrowUpRight,
  ExternalLink,
  Linkedin,
  Briefcase,
  BarChart3,
  MessageCircle,
  Send
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
  const [customMessage, setCustomMessage] = useState('');

  const WHATSAPP_NUMBER = '918814050806';
  const DEFAULT_MESSAGE = 'Hi Tushar, I viewed your portfolio and would like to connect with you.';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const openWhatsApp = (messageText: string) => {
    const text = messageText.trim() || DEFAULT_MESSAGE;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const directOptions = [
    {
      title: 'Discuss a Job Opportunity',
      desc: 'Looking to hire a System Executive or Data / MIS Analyst for your team.',
      icon: Briefcase,
      color: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-400',
      message: 'Hi Tushar, I reviewed your profile and would like to discuss an executive job opportunity.'
    },
    {
      title: 'Analytics & MIS Consultation',
      desc: 'Explore reporting logic, spreadsheet automation, or CRM optimization.',
      icon: BarChart3,
      color: 'from-purple-500/20 to-indigo-500/10 border-purple-500/30 text-purple-400',
      message: 'Hi Tushar, I would like to consult on an operational analytics and MIS reporting initiative.'
    },
    {
      title: 'General Networking & Chat',
      desc: 'Connect, share ideas, or explore potential mutual collaborations.',
      icon: MessageCircle,
      color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400',
      message: 'Hi Tushar, I came across your portfolio and would love to connect and say hello.'
    }
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 relative border-t border-slate-800/80 bg-slate-950/70 w-full overflow-hidden">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[350px] bg-emerald-500/10 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[350px] bg-cyan-500/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 space-y-12 sm:space-y-16 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider font-mono">
            <WhatsAppIcon className="h-4 w-4 fill-emerald-400" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let’s Connect Directly
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
            Available for System Executive roles, Data & MIS Analytics initiatives, and operational intelligence consulting.
          </p>
        </motion.div>

        {/* 2-Column Balanced & Spacious Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Direct Channels (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col"
          >
            <Card3D glowColor="rgba(56, 189, 248, 0.2)" className="h-full flex flex-col justify-between p-7 sm:p-9 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Reach Out Directly
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Connect via email, phone, or professional networks.
                </p>
              </div>

              <div className="space-y-4">
                {/* 1. Phone */}
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all group"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider font-semibold">Direct Phone</p>
                      <p className="font-bold text-slate-100 text-sm mt-0.5">{PERSONAL_INFO.phone}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </a>

                {/* 2. Email Address */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider font-semibold">Email Address</p>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="font-bold text-slate-100 text-sm mt-0.5 hover:text-cyan-400 transition-colors block truncate"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0 ml-2 cursor-pointer"
                    title="Copy Email"
                  >
                    {copied ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 font-mono">
                        <Check className="h-3.5 w-3.5" />
                        <span>Copied</span>
                      </span>
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {/* 3. Location */}
                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400 shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider font-semibold">Location</p>
                    <p className="font-bold text-slate-100 text-sm mt-0.5">{PERSONAL_INFO.location}</p>
                    <p className="text-xs text-slate-400 mt-0.5">Open to Relocation & Remote</p>
                  </div>
                </div>

                {/* 4. LinkedIn */}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 transition-all group"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0 group-hover:scale-110 transition-transform">
                      <Linkedin className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider font-semibold">LinkedIn</p>
                      <p className="font-bold text-slate-100 text-sm mt-0.5">linkedin.com/in/sharmatushar0703</p>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-slate-500 group-hover:text-indigo-400 transition-colors shrink-0" />
                </a>
              </div>

              {/* Status Note */}
              <div className="pt-2 flex items-center gap-2 text-xs text-slate-400 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Typically responds within a few hours</span>
              </div>
            </Card3D>
          </motion.div>

          {/* Right Column: Premium Spacious WhatsApp Hub (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col"
          >
            <Card3D glowColor="rgba(16, 185, 129, 0.28)" className="h-full flex flex-col justify-between p-7 sm:p-9 lg:p-10">
              {/* 1. Header with Direct WhatsApp Line */}
              <div className="flex items-start justify-between gap-4 pb-1">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-tr from-emerald-500 via-green-500 to-teal-500 text-slate-950 flex items-center justify-center shadow-xl shadow-emerald-500/25 shrink-0">
                    <WhatsAppIcon className="h-7 w-7 fill-slate-950" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                      Connect on WhatsApp
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Direct WhatsApp line: <strong className="text-emerald-400 font-semibold">{PERSONAL_INFO.phone}</strong>
                    </p>
                  </div>
                </div>

                <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shrink-0">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available</span>
                </span>
              </div>

              {/* Space after direct whatsapp line, then Open Chat Option */}
              <div className="pt-7 sm:pt-8">
                <button
                  type="button"
                  onClick={() => openWhatsApp(customMessage)}
                  className="w-full py-4 sm:py-4.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-3 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  <WhatsAppIcon className="h-5 w-5 fill-slate-950" />
                  <span>Open WhatsApp Chat (+91 88140 50806)</span>
                  <ArrowUpRight className="h-5 w-5 text-slate-950" />
                </button>
              </div>

              {/* Space after Open Chat option, then Select a Conversation Type */}
              <div className="pt-8 sm:pt-10 space-y-4">
                <div className="flex items-center gap-3">
                  <p className="text-xs font-bold text-slate-400 uppercase font-mono tracking-wider">
                    Select a conversation topic:
                  </p>
                  <div className="h-[1px] flex-1 bg-slate-800/80" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {directOptions.map((opt) => {
                    const IconComponent = opt.icon;
                    return (
                      <button
                        key={opt.title}
                        type="button"
                        onClick={() => openWhatsApp(opt.message)}
                        className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-850/80 transition-all text-left group flex flex-col justify-between space-y-2.5 cursor-pointer"
                      >
                        <div className="flex items-center justify-between">
                          <div className={`p-2 rounded-xl bg-slate-800/80 border ${opt.color}`}>
                            <IconComponent className="h-4 w-4" />
                          </div>
                          <ArrowUpRight className="h-3.5 w-3.5 text-slate-600 group-hover:text-emerald-400 transition-colors" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-200 group-hover:text-white transition-colors">
                            {opt.title}
                          </p>
                          <p className="text-[11px] text-slate-400 mt-1 leading-snug line-clamp-2">
                            {opt.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Space before Custom Note */}
              <div className="pt-8 sm:pt-9 border-t border-slate-800/80 space-y-3">
                <label className="block text-xs font-semibold text-slate-300 font-mono">
                  Want to add a custom note? (Optional)
                </label>

                <div className="relative">
                  <input
                    type="text"
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') openWhatsApp(customMessage);
                    }}
                    placeholder="Type your message and press Enter or click button..."
                    className="w-full pl-4 pr-12 py-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => openWhatsApp(customMessage)}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors cursor-pointer"
                    title="Send to WhatsApp"
                  >
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </Card3D>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default ContactSection;
