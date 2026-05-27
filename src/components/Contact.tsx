import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please complete all fields prior to sending.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    // Simulate enterprise backend transmission sequence
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-bg-deep">
      {/* Decorative backdrop gradients */}
      <div className="absolute top-1/2 right-1/10 w-[450px] h-[450px] rounded-full bg-accent-blue/5 blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-accent-purple/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs text-accent-blue tracking-widest uppercase mb-2">
            06 // GATEWAY SECURE ENDPOINT
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Connect <span className="text-accent-blue">With Me</span>
          </h2>
          <div className="w-12 h-[3px] bg-gradient-to-r from-accent-blue to-accent-purple mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Coordinates Cards */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display text-xl md:text-2xl font-bold text-white tracking-tight leading-snug">
              Have an opening or project in mind? Let’s talk backend!
            </h3>
            <p className="font-sans text-xs sm:text-sm text-text-sec leading-relaxed">
              I am actively seeking software engineer opportunities inside high-growth fintechs, core cloud infrastructure groups, and agile engineering organizations. Feel free to reach out anytime via the contact portal.
            </p>

            <div className="space-y-4 pt-4">
              
              {/* Location Card */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-accent-blue/35 transition-all flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue shrink-0">
                  <MapPin className="w-5 h-5 animate-bounce" style={{ animationDuration: '3s' }} />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-gray-500 tracking-wider">CURRENT BASE</span>
                  <h4 className="font-sans text-sm font-semibold text-white">Montreal, Quebec, Canada</h4>
                  <p className="font-sans text-xs text-text-sec mt-0.5">Notre-Dame-de-Grâce</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-accent-blue/35 transition-all flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-gray-500 tracking-wider">DIRECT MAILBOX</span>
                  <a href="mailto:ritikgulati8447@gmail.com" className="font-sans text-sm font-semibold text-white hover:text-accent-blue block transition-colors">
                    ritikgulati8447@gmail.com
                  </a>
                  <p className="font-sans text-xs text-text-sec mt-0.5">Response latency: &lt;12 Hours</p>
                </div>
              </div>

              {/* Social grid */}
              <div className="flex items-center gap-4 pt-4">
                <span className="font-mono text-xs text-gray-500 tracking-wider">SECURE_LI_GH //</span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.linkedin.com/in/ritik-gulati-9755601a1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white/5 rounded-xl border border-white/5 text-gray-400 hover:text-accent-blue hover:border-accent-blue/20 hover:shadow-[0_0_10px_rgba(192,57,43,0.25)] hover:scale-105 transition-all"
                    title="LinkedIn Link"
                  >
                    <Linkedin className="w-4.5 h-4.5" />
                  </a>
                  <a
                    href="https://github.com/Ritik-Gulati"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white/5 rounded-xl border border-white/5 text-gray-400 hover:text-accent-blue hover:border-accent-blue/20 hover:shadow-[0_0_10px_rgba(192,57,43,0.25)] hover:scale-105 transition-all"
                    title="GitHub Link"
                  >
                    <Github className="w-4.5 h-4.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Glassmorphism Form UI */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-3xl bg-bg-card border border-white/10 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />
              
              <h3 className="font-display text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent-blue animate-pulse" />
                <span>Transmit Secure Packet</span>
              </h3>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                
                {/* Inputs rows */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block pl-1">
                      Sender Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      placeholder="e.g. Ritik Gulati"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#000000] rounded-xl border border-white/10 focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue/30 text-white font-sans text-sm transition-all placeholder:text-gray-600 font-sans"
                    />
                  </div>
                  <div className="space-y-1.5 text-left">
                    <label className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block pl-1">
                      Secure Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="e.g. ritikgulati8447@gmail.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#000000] rounded-xl border border-white/10 focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue/30 text-white font-sans text-sm transition-all placeholder:text-gray-600 font-sans"
                    />
                  </div>
                </div>

                {/* Message input */}
                <div className="space-y-1.5 text-left">
                  <label className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block pl-1">
                    Payload Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Enter your system details, requirements or feedback here..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#000000] rounded-xl border border-white/10 focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue/30 text-white font-sans text-sm transition-all placeholder:text-gray-600 resize-none font-sans"
                  />
                </div>

                {/* Validation and Success messages feedback */}
                <AnimatePresence>
                  {errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs flex items-center gap-2 font-sans"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}

                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 text-xs flex items-center gap-2.5 font-sans"
                    >
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400 shrink-0" />
                      <div>
                        <span className="font-bold uppercase block text-[10px] tracking-wider mb-0.5">SMTP PACKET TRANSMITTED</span>
                        <span>Your message was sent successfully. Ritik will contact you shortly.</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit button with custom transmission state styling */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-accent-blue border border-accent-blue hover:border-accent-blue text-bg-deep font-sans font-extrabold hover:shadow-[0_0_15px_rgba(0,194,255,0.4)] disabled:opacity-50 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 transition-all select-none cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-bg-deep border-t-transparent rounded-full animate-spin" />
                      <span className="font-mono tracking-widest text-xs">TRANSMITTING...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Secure Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
