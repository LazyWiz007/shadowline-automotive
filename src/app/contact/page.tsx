"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Globe, MessageSquare, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Connection error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 px-6 md:px-12 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            className="text-center mb-24"
          >
            <h1 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter text-white font-brand mb-8 italic">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-teal">Touch</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-cyan to-brand-teal mx-auto mb-8"></div>
            <p className="text-justify text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
              Whether you're looking for a private consultation, technical support, or want to join the movement—we're here to help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariants}
              className="space-y-12"
            >
              <div className="space-y-8">
                <h2 className="text-3xl font-brand font-bold uppercase tracking-tighter text-white">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand-cyan transition-colors">
                      <Mail className="w-5 h-5 text-brand-cyan" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Email Us</p>
                      <a href="mailto:sales@shadowlineautomotive.com" className="text-lg md:text-xl text-white hover:text-brand-cyan transition-colors">
                        sales@shadowlineautomotive.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand-cyan transition-colors">
                      <Phone className="w-5 h-5 text-brand-cyan" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Call Us</p>
                      <a href="tel:+919876543210" className="text-lg md:text-xl text-white hover:text-brand-cyan transition-colors">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand-cyan transition-colors">
                      <MapPin className="w-5 h-5 text-brand-cyan" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Visit Us</p>
                      <p className="text-lg md:text-xl text-white">
                        Shadowline Automotive HQ<br />
                        Pune, Maharashtra, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <h3 className="text-xl font-brand font-bold uppercase tracking-tighter text-white mb-6">Global Reach</h3>
                <div className="flex items-center gap-4 text-gray-400">
                  <Globe className="w-5 h-5" />
                  <p>Operating across major racing circuits in Asia and Europe.</p>
                </div>
              </div>
            </motion.div>

            {/* Quick Message Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariants}
              className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 blur-3xl pointer-events-none"></div>
              
              <h2 className="text-3xl font-brand font-bold uppercase tracking-tighter text-white mb-8 flex items-center gap-4">
                <MessageSquare className="w-6 h-6 text-brand-cyan" />
                Quick Message
              </h2>

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                >
                  <CheckCircle2 className="w-16 h-16 text-brand-teal" />
                  <h3 className="text-2xl font-brand font-bold uppercase">Message Sent</h3>
                  <p className="text-gray-400">Thank you for reaching out. Our team will get back to you shortly.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-brand-cyan hover:underline uppercase text-sm tracking-widest font-bold"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-cyan transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-cyan transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Subject</label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-cyan transition-colors"
                      placeholder="Technical Inquiry"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-cyan transition-colors resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-brand-cyan hover:text-white transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
