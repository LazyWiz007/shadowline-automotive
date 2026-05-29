"use client";

import { motion } from "framer-motion";
import { 
  FileText, 
  ShieldCheck, 
  Cookie, 
  Layers, 
  Clock, 
  Globe, 
  UserCheck, 
  UserMinus, 
  RefreshCw, 
  Mail, 
  Settings, 
  Info,
  ChevronRight
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fadeInVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const sections = [
  {
    id: "info-collect",
    title: "Information We Collect",
    icon: FileText,
    content: (
      <div className="space-y-6">
        <p className="text-gray-300 leading-relaxed">
          We may collect the following information:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 relative group hover:border-brand-cyan/50 transition-colors">
            <div className="absolute top-0 right-0 w-16 h-16 bg-brand-cyan/5 blur-xl pointer-events-none"></div>
            <h4 className="font-brand text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4">Personal Information</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3 text-brand-teal" /> Full Name
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3 text-brand-teal" /> Email Address
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3 text-brand-teal" /> Phone Number
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3 text-brand-teal" /> Billing and Shipping Address
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3 text-brand-teal" /> Company Name (if applicable)
              </li>
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 relative group hover:border-brand-cyan/50 transition-colors">
            <div className="absolute top-0 right-0 w-16 h-16 bg-brand-cyan/5 blur-xl pointer-events-none"></div>
            <h4 className="font-brand text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4">Technical Information</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3 text-brand-teal" /> IP Address
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3 text-brand-teal" /> Browser Type
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3 text-brand-teal" /> Device Information
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3 text-brand-teal" /> Operating System
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3 text-brand-teal" /> Referral Sources
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3 text-brand-teal" /> Website Usage Analytics
              </li>
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 relative group hover:border-brand-cyan/50 transition-colors">
            <div className="absolute top-0 right-0 w-16 h-16 bg-brand-cyan/5 blur-xl pointer-events-none"></div>
            <h4 className="font-brand text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4">Marketing Information</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3 text-brand-teal" /> Newsletter subscriptions
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3 text-brand-teal" /> Contact form submissions
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3 text-brand-teal" /> Product enquiry submissions
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "how-use",
    title: "How We Use Your Information",
    icon: Settings,
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">
          We use collected information to:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          {[
            "Process enquiries and customer requests",
            "Provide product information and updates",
            "Improve website performance and user experience",
            "Send marketing communications (only when consent is provided)",
            "Analyze website traffic and visitor behavior",
            "Prevent fraud and unauthorized activities"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 bg-white/5 p-4 rounded-lg border border-white/5">
              <div className="w-5 h-5 rounded-full bg-brand-cyan/20 flex items-center justify-center shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-brand-cyan"></div>
              </div>
              <span className="text-sm text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  },
  {
    id: "data-protection",
    title: "Data Protection",
    icon: ShieldCheck,
    content: (
      <div className="space-y-6">
        <p className="text-gray-300 leading-relaxed text-justify">
          We implement industry-standard security measures to protect your information from:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Unauthorized access",
            "Disclosure",
            "Misuse",
            "Alteration",
            "Loss",
            "Cybersecurity threats"
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/5 rounded-lg p-4 text-center">
              <p className="text-sm font-semibold text-white uppercase tracking-wider">{item}</p>
            </div>
          ))}
        </div>
        <div className="bg-brand-cyan/10 border border-brand-cyan/20 p-4 rounded-xl flex items-start gap-4 mt-6">
          <Info className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
          <p className="text-sm text-gray-400 leading-relaxed">
            While we take reasonable precautions, no online system can guarantee absolute security.
          </p>
        </div>
      </div>
    )
  },
  {
    id: "cookies",
    title: "Cookies & Tracking Technologies",
    icon: Cookie,
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed text-justify">
          Shadowline Automotive may use cookies and similar technologies to:
        </p>
        <ul className="space-y-3 pl-2">
          {[
            "Improve website functionality",
            "Remember user preferences",
            "Analyze traffic patterns",
            "Enhance user experience"
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-400 mt-4 leading-relaxed italic">
          Users may disable cookies through their browser settings, though certain website features may be affected.
        </p>
      </div>
    )
  },
  {
    id: "third-party",
    title: "Third-Party Services",
    icon: Layers,
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed text-justify">
          We may utilize trusted third-party providers including:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {[
            "Analytics platforms",
            "Payment gateways",
            "Cloud infrastructure",
            "Email platforms"
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center group hover:border-brand-cyan/30 transition-colors">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-white transition-colors">{item}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 mt-4 leading-relaxed">
          These providers may process information solely for the purpose of delivering their services.
        </p>
      </div>
    )
  },
  {
    id: "data-retention",
    title: "Data Retention",
    icon: Clock,
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed text-justify">
          We retain information only for as long as necessary to:
        </p>
        <ul className="space-y-3 pl-2">
          {[
            "Provide requested services",
            "Comply with legal obligations",
            "Resolve disputes",
            "Enforce agreements"
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    )
  },
  {
    id: "international-transfers",
    title: "International Data Transfers",
    icon: Globe,
    content: (
      <p className="text-gray-300 leading-relaxed text-justify">
        Information may be processed and stored on servers located outside your country of residence. By using our services, you consent to such transfers where legally permitted.
      </p>
    )
  },
  {
    id: "your-rights",
    title: "Your Rights",
    icon: UserCheck,
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed text-justify">
          Depending on applicable laws, you may have the right to:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          {[
            "Access your personal information",
            "Request correction of inaccurate information",
            "Request deletion of your information",
            "Withdraw marketing consent",
            "Request a copy of stored information"
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 bg-white/5 border border-white/5 p-4 rounded-xl text-sm text-gray-300">
              <span className="w-2 h-2 rounded-full bg-brand-cyan shrink-0"></span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-400 mt-4 leading-relaxed">
          Requests may be submitted through our contact details below.
        </p>
      </div>
    )
  },
  {
    id: "children-privacy",
    title: "Children’s Privacy",
    icon: UserMinus,
    content: (
      <p className="text-gray-300 leading-relaxed text-justify">
        Our services are not directed toward individuals under the age of 18. We do not knowingly collect information from minors.
      </p>
    )
  },
  {
    id: "changes-policy",
    title: "Changes to This Policy",
    icon: RefreshCw,
    content: (
      <p className="text-gray-300 leading-relaxed text-justify">
        We may update this Privacy Policy periodically. Changes become effective immediately upon publication on this website.
      </p>
    )
  },
  {
    id: "contact",
    title: "Contact",
    icon: Mail,
    content: (
      <div className="space-y-6">
        <p className="text-gray-300 leading-relaxed text-justify">
          For privacy-related enquiries, contact:
        </p>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h4 className="font-brand text-lg font-bold text-white mb-2">Shadowline Automotive</h4>
            <p className="text-sm text-gray-400">Email: <a href="mailto:contact@shadowlineautomotive.com" className="text-brand-cyan hover:underline transition-all">contact@shadowlineautomotive.com</a></p>
          </div>
          <a
            href="mailto:contact@shadowlineautomotive.com"
            className="bg-white text-black text-xs md:text-sm font-bold uppercase tracking-widest px-6 py-3 rounded-lg hover:bg-brand-cyan hover:text-white transition-all duration-300"
          >
            Email Inquiry
          </a>
        </div>
      </div>
    )
  }
];

export default function PrivacyPolicyPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // offset for the fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <Header />

      {/* Hero Header */}
      <section className="relative pt-48 pb-20 px-6 md:px-12 bg-black overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-black to-black opacity-80" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            className="text-center"
          >
            <h1 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter text-white font-brand italic mb-8">
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-teal">Policy</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-cyan to-brand-teal mx-auto mb-6"></div>
            
            <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-6">
              Last Updated: March 2026
            </p>

            <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl">
              <p className="text-justify text-base md:text-lg text-gray-300 font-light leading-relaxed">
                Welcome to Shadowline Automotive. Your privacy is important to us. This Privacy Policy explains how Shadowline Automotive collects, uses, stores, and protects your information when you visit our website, interact with our services, submit enquiries, or purchase products.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section with Sticky Navigation */}
      <section className="py-24 px-6 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
          
          {/* Sticky Navigation Menu (Desktop Only) */}
          <aside className="hidden lg:block lg:sticky lg:top-32 space-y-4">
            <h3 className="font-brand text-xs font-bold uppercase tracking-widest text-gray-500 mb-6 px-4">Navigation</h3>
            <nav className="flex flex-col gap-2">
              {sections.map((section) => {
                const IconComponent = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="flex items-center gap-3 text-left py-3 px-4 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all text-sm font-medium tracking-wide uppercase border border-transparent hover:border-white/5 cursor-pointer"
                  >
                    <IconComponent className="w-4 h-4 shrink-0 text-brand-cyan" />
                    <span className="truncate">{section.title}</span>
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Main Privacy Policy Sections */}
          <div className="lg:col-span-3 space-y-12">
            {sections.map((section, idx) => {
              const IconComponent = section.icon;
              return (
                <motion.div
                  key={section.id}
                  id={section.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInVariants}
                  className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-2xl relative overflow-hidden group hover:border-brand-cyan/20 transition-all duration-500"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-cyan/5 to-transparent blur-2xl pointer-events-none group-hover:from-brand-cyan/10 transition-all"></div>
                  
                  <div className="flex items-center gap-4 border-b border-white/10 pb-6 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0">
                      <IconComponent className="w-6 h-6 text-brand-cyan" />
                    </div>
                    <h2 className="text-2xl font-brand font-bold uppercase tracking-tighter text-white">
                      {section.title}
                    </h2>
                  </div>

                  <div className="relative z-10">
                    {section.content}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
