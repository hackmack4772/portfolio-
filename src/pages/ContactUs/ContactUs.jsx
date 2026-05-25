import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Mail, Phone, Send, Sparkles, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useLoading } from "../../Context/LoadingContext";
import HelmetWrapper from "../../components/HelmetWrapper";
import SectionWrapper from "../../components/ui/SectionWrapper";
import SectionTitle from "../../components/ui/SectionTitle";
import GlowCard from "../../components/ui/GlowCard";
import SocialDock from "../../components/ui/SocialDock";
import ActionButton from "../../components/ui/ActionButton";

function ContactUs({ hideHeader = false }) {
  const { handleLoading } = useLoading();
  const formRef = useRef();

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const [contactData, setContactData] = useState({
    email: "loneaamir6@gmail.com",
    phone: "+91-9596581274",
    address: "Handwara, Jammu and Kashmir, India",
    socialLinks: {
      github: "https://github.com/hackmack4772",
      linkedin: "https://www.linkedin.com/in/aamir-saleem-lone/",
      twitter: "https://twitter.com/hackmack4772"
    }
  });

  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [activeField, setActiveField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const contactSnap = await getDoc(doc(db, "content", "contact"));
        if (contactSnap.exists()) {
          setContactData(prev => ({
            ...prev,
            ...contactSnap.data()
          }));
        }
      } catch (err) {
        console.error("Error fetching contact details:", err);
      }
    };
    fetchContactInfo();
  }, []);

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
      handleLoading(true);
      
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
      handleLoading(false);
    }
  };

  const contactInfo = [
    { icon: MapPin, label: "Location", value: contactData.address, color: "text-primary", glowColor: "primary" },
    { icon: Mail, label: "Email", value: contactData.email, color: "text-secondary", glowColor: "secondary" },
    { icon: Phone, label: "Phone", value: contactData.phone, color: "text-accent", glowColor: "accent" },
  ];

  const formContent = (
    <div className="max-w-5xl mx-auto w-full">
      <AnimatePresence mode="wait">
        {formSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="glass-panel p-8 rounded-3xl border border-primary/30 max-w-lg mx-auto flex flex-col items-center justify-center text-center gap-4 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.15 }}
              className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center text-accent"
            >
              <CheckCircle className="w-8 h-8" />
            </motion.div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Message Dispatched!</h3>
              <p className="text-xs md:text-sm text-text-muted leading-relaxed max-w-xs">
                Thank you for reaching out, your message has been sent successfully. I will get back to you shortly.
              </p>
            </div>
            <ActionButton
              onClick={() => setFormSubmitted(false)}
              variant="primary"
              className="mt-4"
            >
              Send Another Message
            </ActionButton>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch"
          >
            {/* Left Column: Contact Cards info */}
            <div className="md:col-span-5 flex flex-col gap-6 h-full justify-start">
              <div className="flex flex-col gap-5">
                {contactInfo.map((info, idx) => {
                  const InfoIcon = info.icon;
                  return (
                    <GlowCard
                      key={idx}
                      glowColor={info.glowColor}
                      hoverGlow={true}
                      className="p-5 flex gap-4 items-center"
                    >
                      <div className={`w-10 h-10 rounded-xl bg-bg-sub/80 border border-border-base/40 flex items-center justify-center shrink-0 ${info.color}`}>
                        <InfoIcon className="w-5 h-5" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block">{info.label}</span>
                        <span className="text-xs md:text-sm font-semibold text-text-base">{info.value}</span>
                      </div>
                    </GlowCard>
                  );
                })}
              </div>

              {/* Social Connections */}
              {!hideHeader && (
                <GlowCard glowColor="primary" hoverGlow={false} className="p-5 flex flex-col gap-3">
                  <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest text-center md:text-left flex items-center gap-1 justify-center md:justify-start">
                    <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" /> Connect with me
                  </span>
                  <SocialDock socialLinks={contactData.socialLinks} className="justify-center md:justify-start" />
                </GlowCard>
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
                      {/* Monospace caret indicator */}
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
                    <span>{isSubmitting ? "Transmitting..." : "Send Message"}</span>
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
        <title>Contact Me | Portfolio</title>
        <meta name="description" content="Get in touch with Aamir Saleem Lone for collaborations, jobs, or feedback." />
      </HelmetWrapper>

      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-10 animate-pulse-glow" />

      <SectionTitle 
        subtitle="Get In Touch" 
        title="Contact" 
        highlight="Me" 
        description="Have a question or want to work together? Drop me a line."
      />

      {formContent}
    </SectionWrapper>
  );
}

export default ContactUs;
