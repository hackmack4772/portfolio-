import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Mail, Phone, Send, Sparkles, CheckCircle, AlertCircle, Terminal as TerminalIcon, Network, ShieldCheck } from "lucide-react";
import emailjs from "@emailjs/browser";
import { usePortfolio } from "../../Context/PortfolioDataContext";
import { useLoading } from "../../Context/LoadingContext";
import HelmetWrapper from "../../components/HelmetWrapper";
import SectionWrapper from "../../components/ui/SectionWrapper";
import SectionTitle from "../../components/ui/SectionTitle";
import GlowCard from "../../components/ui/GlowCard";
import ActionButton from "../../components/ui/ActionButton";

function ContactUs({ hideHeader = false }) {
  const { contact } = usePortfolio();
  const { handleLoading } = useLoading(); // Imported to fix context runtime bug
  const formRef = useRef();

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const contactData = {
    email: "loneaamir6@gmail.com",
    phone: "+91-9596581274",
    address: "Handwara, Jammu and Kashmir, India",
    socialLinks: {
      github: "https://github.com/hackmack4772",
      linkedin: "https://www.linkedin.com/in/aamir-saleem-lone/",
      twitter: "https://twitter.com/hackmack4772"
    },
    ...contact
  };

  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [activeField, setActiveField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Interactive social node inspector state
  const [hoveredSocial, setHoveredSocial] = useState(null);

  // Field validator
  const validateField = (name, value) => {
    let error = "";
    if (!value.trim()) {
      error = `${name.replace("user_", "")} is required`;
    } else if (name === "user_email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = "Invalid email address";
      }
    } else if (name === "message" && value.trim().length < 10) {
      error = "Message must be at least 10 characters";
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error on change if valid
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleFocus = (fieldName) => {
    setActiveField(fieldName);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
    setActiveField(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const formErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        formErrors[key] = error;
      }
    });

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      setIsSubmitting(true);
      if (handleLoading) handleLoading(true);
      
      await emailjs.sendForm(
        "service_scq3s4o",
        "template_hckvbsb",
        formRef.current,
        "iswW2jJ51suRac3kO"
      );
      
      setFormSubmitted(true);
      setSubmitError(null);
      setFormData({
        user_name: "",
        user_email: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      console.error("EmailJS send error:", error);
      setSubmitError("Failed to send message. Please check your network or try again later.");
    } finally {
      setIsSubmitting(false);
      if (handleLoading) handleLoading(false);
    }
  };

  const contactInfo = [
    { icon: MapPin, label: "Location", value: contactData.address, color: "text-primary", glowColor: "primary" },
    { icon: Mail, label: "Email", value: contactData.email, color: "text-secondary", glowColor: "secondary" },
    { icon: Phone, label: "Phone", value: contactData.phone, color: "text-accent", glowColor: "accent" },
  ];

  // Social node routing helpers
  const getSocialDiagnostic = () => {
    switch (hoveredSocial) {
      case "GitHub":
        return "Ping: github.com/hackmack4772 ... SECURE_PORT_443 active [RTT: 22ms]";
      case "LinkedIn":
        return "SSH: linkedin.com/in/aamir-saleem-lone ... KEY_VERIFIED [RTT: 35ms]";
      case "Twitter":
        return "HTTP: twitter.com/hackmack4772 ... GATE_OK [RTT: 14ms]";
      default:
        return "Awaiting connection nodes trigger. Hover over nodes to inspect.";
    }
  };

  const formContent = (
    <div className="max-w-5xl mx-auto w-full mt-8">
      <AnimatePresence mode="wait">
        {formSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="glass-premium-dark p-8 rounded-3xl border border-white/[0.08] max-w-lg mx-auto flex flex-col items-center justify-center text-center gap-4 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.15 }}
              className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center text-accent animate-pulse-cyan"
            >
              <CheckCircle className="w-8 h-8" />
            </motion.div>
            <div className="space-y-2 font-mono text-[10px] text-text-muted">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Payload Transmitted!</h3>
              <p className="font-sans text-xs leading-relaxed max-w-xs">
                Your encrypted secure message hash has been written to the gateway core. I will compile a response shortly.
              </p>
            </div>
            <ActionButton
              onClick={() => setFormSubmitted(false)}
              variant="primary"
              className="mt-4"
            >
              Dispatch New Connection
            </ActionButton>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch"
          >
            {/* Left Column: Diagnostics info & Social mesh */}
            <div className="md:col-span-5 flex flex-col gap-6 h-full justify-start">
              
              {/* Telemetry settings box */}
              <div className="glass-premium-dark p-5 rounded-2xl border border-white/[0.08] relative overflow-hidden font-mono text-[10px] text-text-muted">
                <div className="absolute inset-0 crt-scanlines opacity-5 pointer-events-none select-none" />
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 mb-3 select-none">
                  <span className="text-[9px] uppercase tracking-widest flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-accent animate-pulse" /> transmission_gate</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between">
                    <span>CHANNEL_STATUS:</span>
                    <span className="text-green-500 font-bold">SECURE_ACTIVE</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SIGNAL_STRENGTH:</span>
                    <span className="text-white font-bold">STABLE (99.2%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>TRANSMISSION:</span>
                    <span className="text-accent font-bold">SHA256_ENCRYPTED</span>
                  </div>
                </div>
              </div>

              {/* Info cards */}
              <div className="flex flex-col gap-4">
                {contactInfo.map((info, idx) => {
                  const InfoIcon = info.icon;
                  return (
                    <GlowCard
                      key={idx}
                      glowColor={info.glowColor}
                      hoverGlow={true}
                      className="p-4 flex gap-4 items-center"
                    >
                      <div className={`w-8.5 h-8.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center shrink-0 ${info.color}`}>
                        <InfoIcon className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5 font-mono text-[10px]">
                        <span className="text-[8px] text-text-muted uppercase tracking-wider block">{info.label}</span>
                        <span className="text-[11px] font-semibold text-text-base leading-tight block">{info.value}</span>
                      </div>
                    </GlowCard>
                  );
                })}
              </div>

              {/* Connected node network social mesh */}
              {!hideHeader && (
                <div className="glass-premium p-5 rounded-2xl border border-white/[0.06] flex flex-col gap-4 relative overflow-hidden">
                  <div className="absolute top-2 right-2 text-[7px] font-mono text-text-muted/40 uppercase">// COMM_NETWORK</div>
                  
                  {/* SVG Node network */}
                  <div className="relative w-full h-36 bg-[#0b0f19]/40 rounded-xl border border-white/[0.04] p-3 flex items-center justify-center blueprint-grid">
                    <svg className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
                      <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#0cfbff" strokeWidth="1" strokeOpacity="0.2" />
                      <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="#0cfbff" strokeWidth="1" strokeOpacity="0.2" />
                      <line x1="50%" y1="50%" x2="50%" y2="78%" stroke="#0cfbff" strokeWidth="1" strokeOpacity="0.2" />
                    </svg>

                    <div className="relative w-full flex justify-between items-center px-4 font-mono text-[8px] text-text-muted z-10">
                      
                      {/* GitHub node */}
                      <a 
                        href={contactData.socialLinks?.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onMouseEnter={() => setHoveredSocial("GitHub")}
                        onMouseLeave={() => setHoveredSocial(null)}
                        className="p-2 border border-white/10 bg-black/50 rounded-xl hover:border-accent hover:text-white transition-all cursor-pointer flex flex-col items-center justify-center w-18"
                      >
                        <span className="text-accent font-bold">GITHUB</span>
                        <span className="text-[6px] opacity-60">Port 443</span>
                      </a>

                      {/* Core central node */}
                      <div className="w-10 h-10 rounded-full border border-accent bg-accent/10 flex items-center justify-center text-accent animate-pulse-cyan">
                        <Network className="w-4 h-4" />
                      </div>

                      <div className="flex flex-col gap-10">
                        {/* LinkedIn node */}
                        <a 
                          href={contactData.socialLinks?.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onMouseEnter={() => setHoveredSocial("LinkedIn")}
                          onMouseLeave={() => setHoveredSocial(null)}
                          className="p-2 border border-white/10 bg-black/50 rounded-xl hover:border-accent hover:text-white transition-all cursor-pointer flex flex-col items-center justify-center w-18"
                        >
                          <span className="text-accent font-bold">LINKEDIN</span>
                          <span className="text-[6px] opacity-60">Port 8080</span>
                        </a>
                      </div>

                    </div>
                  </div>

                  {/* Telemetry diagnostics display footer */}
                  <div className="font-mono text-[8px] text-text-muted/70 tracking-wide border-t border-white/[0.04] pt-2 text-justify">
                    {getSocialDiagnostic()}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Custom Interactive Form */}
            <div className="md:col-span-7">
              <GlowCard glowColor="accent" hoverGlow={false} className="p-6 md:p-8">
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5 relative overflow-hidden"
                >
                  {submitError && (
                    <div className="flex items-center gap-2 p-3.5 rounded-xl border border-red-500/30 bg-red-500/10 text-red-500 text-xs">
                      <AlertCircle className="w-4.5 h-4.5 shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  {/* Input 1: Name */}
                  <div className="flex flex-col gap-1.5 group/field">
                    <div className="flex justify-between items-center px-1 font-mono text-[9px] uppercase tracking-wider text-text-muted select-none">
                      <span>_user_identity</span>
                      <span className="opacity-0 group-focus-within/field:opacity-100 transition-opacity text-accent">Active_</span>
                    </div>
                    <div className={`relative rounded-xl border bg-white/[0.015] backdrop-blur-md transition-all duration-300 ${
                      activeField === "user_name" 
                        ? "border-accent shadow-[0_0_15px_rgba(12,251,255,0.12)]" 
                        : errors.user_name 
                        ? "border-red-500/40" 
                        : "border-white/[0.07] group-hover/field:border-accent/40"
                    }`}>
                      <span className="absolute left-3.5 top-3 text-[10px] font-mono text-accent/60 select-none">$</span>
                      <input
                        type="text"
                        name="user_name"
                        placeholder="e.g. John Doe"
                        value={formData.user_name}
                        onChange={handleChange}
                        onFocus={() => handleFocus("user_name")}
                        onBlur={handleBlur}
                        className="w-full pl-7 pr-4 py-2.5 bg-transparent rounded-xl font-mono text-xs text-text-base placeholder-text-muted/30 focus:outline-none transition-all duration-300"
                      />
                    </div>
                    {errors.user_name && (
                      <span className="text-[9px] font-mono text-red-500/90 flex items-center gap-1 mt-0.5 px-1 animate-pulse">
                        <AlertCircle className="w-3 h-3" /> {errors.user_name}
                      </span>
                    )}
                  </div>

                  {/* Input 2: Email */}
                  <div className="flex flex-col gap-1.5 group/field">
                    <div className="flex justify-between items-center px-1 font-mono text-[9px] uppercase tracking-wider text-text-muted select-none">
                      <span>_delivery_node</span>
                      <span className="opacity-0 group-focus-within/field:opacity-100 transition-opacity text-accent">Active_</span>
                    </div>
                    <div className={`relative rounded-xl border bg-white/[0.015] backdrop-blur-md transition-all duration-300 ${
                      activeField === "user_email" 
                        ? "border-accent shadow-[0_0_15px_rgba(12,251,255,0.12)]" 
                        : errors.user_email 
                        ? "border-red-500/40" 
                        : "border-white/[0.07] group-hover/field:border-accent/40"
                    }`}>
                      <span className="absolute left-3.5 top-3 text-[10px] font-mono text-accent/60 select-none">$</span>
                      <input
                        type="email"
                        name="user_email"
                        placeholder="e.g. john@example.com"
                        value={formData.user_email}
                        onChange={handleChange}
                        onFocus={() => handleFocus("user_email")}
                        onBlur={handleBlur}
                        className="w-full pl-7 pr-4 py-2.5 bg-transparent rounded-xl font-mono text-xs text-text-base placeholder-text-muted/30 focus:outline-none transition-all duration-300"
                      />
                    </div>
                    {errors.user_email && (
                      <span className="text-[9px] font-mono text-red-500/90 flex items-center gap-1 mt-0.5 px-1 animate-pulse">
                        <AlertCircle className="w-3 h-3" /> {errors.user_email}
                      </span>
                    )}
                  </div>

                  {/* Input 3: Subject */}
                  <div className="flex flex-col gap-1.5 group/field">
                    <div className="flex justify-between items-center px-1 font-mono text-[9px] uppercase tracking-wider text-text-muted select-none">
                      <span>_transmission_header</span>
                      <span className="opacity-0 group-focus-within/field:opacity-100 transition-opacity text-accent">Active_</span>
                    </div>
                    <div className={`relative rounded-xl border bg-white/[0.015] backdrop-blur-md transition-all duration-300 ${
                      activeField === "subject" 
                        ? "border-accent shadow-[0_0_15px_rgba(12,251,255,0.12)]" 
                        : errors.subject 
                        ? "border-red-500/40" 
                        : "border-white/[0.07] group-hover/field:border-accent/40"
                    }`}>
                      <span className="absolute left-3.5 top-3 text-[10px] font-mono text-accent/60 select-none">$</span>
                      <input
                        type="text"
                        name="subject"
                        placeholder="e.g. Project Collaboration Proposal"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => handleFocus("subject")}
                        onBlur={handleBlur}
                        className="w-full pl-7 pr-4 py-2.5 bg-transparent rounded-xl font-mono text-xs text-text-base placeholder-text-muted/30 focus:outline-none transition-all duration-300"
                      />
                    </div>
                    {errors.subject && (
                      <span className="text-[9px] font-mono text-red-500/90 flex items-center gap-1 mt-0.5 px-1 animate-pulse">
                        <AlertCircle className="w-3 h-3" /> {errors.subject}
                      </span>
                    )}
                  </div>

                  {/* Input 4: Message */}
                  <div className="flex flex-col gap-1.5 group/field">
                    <div className="flex justify-between items-center px-1 font-mono text-[9px] uppercase tracking-wider text-text-muted select-none">
                      <span>_payload_body</span>
                      <span className="opacity-0 group-focus-within/field:opacity-100 transition-opacity text-accent">Active_</span>
                    </div>
                    <div className={`relative rounded-xl border bg-white/[0.015] backdrop-blur-md transition-all duration-300 ${
                      activeField === "message" 
                        ? "border-accent shadow-[0_0_15px_rgba(12,251,255,0.12)]" 
                        : errors.message 
                        ? "border-red-500/40" 
                        : "border-white/[0.07] group-hover/field:border-accent/40"
                    }`}>
                      <span className="absolute left-3.5 top-3 text-[10px] font-mono text-accent/60 select-none">$</span>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Type your message body details here..."
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => handleFocus("message")}
                        onBlur={handleBlur}
                        className="w-full pl-7 pr-4 py-2.5 bg-transparent rounded-xl font-mono text-xs text-text-base placeholder-text-muted/30 focus:outline-none resize-none transition-all duration-300"
                      />
                    </div>
                    {errors.message && (
                      <span className="text-[9px] font-mono text-red-500/90 flex items-center gap-1 mt-0.5 px-1 animate-pulse">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit button */}
                  <ActionButton
                    type="submit"
                    disabled={isSubmitting}
                    variant="primary"
                    className="mt-2 w-full flex items-center justify-center gap-2"
                  >
                    <Send className={`w-4 h-4 ${isSubmitting ? "animate-pulse" : ""}`} />
                    <span>{isSubmitting ? "Transmitting payload..." : "Transmit Encrypted Payload"}</span>
                  </ActionButton>

                </form>
              </GlowCard>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  if (hideHeader) {
    return formContent;
  }

  return (
    <SectionWrapper id="contact-section" className="pt-36 pb-16 md:pt-40 md:pb-24 lg:pt-44" spacing="none" showTicks={true}>
      <HelmetWrapper>
        <title>Contact Core | Portfolio</title>
        <meta name="description" content="Get in touch with Aamir Saleem Lone via secure, encrypted messaging transmission." />
      </HelmetWrapper>

      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-10 animate-pulse-glow" />

      <SectionTitle 
        subtitle="Secure Transmission Link" 
        title="Contact" 
        highlight="Core" 
        description="Establish encrypted handshakes or ping communications node routers to trigger direct collaboration connections."
      />

      {formContent}
    </SectionWrapper>
  );
}

export default ContactUs;
