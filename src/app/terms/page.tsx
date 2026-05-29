"use client";

import { motion } from "framer-motion";
import { 
  FileCheck, 
  Award, 
  Compass, 
  CreditCard, 
  Cpu, 
  AlertTriangle, 
  Scale, 
  ShieldAlert, 
  ExternalLink, 
  Gavel, 
  RefreshCw, 
  Mail,
  ChevronRight,
  Info
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fadeInVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    icon: FileCheck,
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed text-justify">
          By accessing this website, purchasing products, or interacting with our services, you acknowledge that you have read, understood, and accepted these Terms & Conditions.
        </p>
        <div className="bg-brand-cyan/10 border border-brand-cyan/20 p-4 rounded-xl flex items-start gap-4 mt-4">
          <Info className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
          <p className="text-sm text-gray-400 leading-relaxed">
            If you do not agree, please discontinue use of the website.
          </p>
        </div>
      </div>
    )
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    icon: Award,
    content: (
      <div className="space-y-6">
        <p className="text-gray-300 leading-relaxed text-justify">
          All content on this website, including but not limited to:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Logos",
            "Branding",
            "Product imagery",
            "Designs",
            "Videos",
            "Graphics",
            "Text",
            "Technical illustrations"
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/5 rounded-lg p-3 text-center">
              <span className="text-sm font-semibold text-white tracking-wide">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-300 leading-relaxed text-justify">
          are the exclusive property of Shadowline Automotive unless otherwise stated.
        </p>
        <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex items-start gap-4">
          <ShieldAlert className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <p className="text-sm text-red-200/80 leading-relaxed">
            Unauthorized reproduction, distribution, or commercial use is prohibited.
          </p>
        </div>
      </div>
    )
  },
  {
    id: "product-info",
    title: "Product Information",
    icon: Compass,
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">
          Shadowline Automotive strives to ensure product information is accurate. However:
        </p>
        <ul className="space-y-3 pl-2">
          {[
            "Specifications may change without notice.",
            "Prototype vehicles may differ from production models.",
            "Images may include optional components or configurations.",
            "Performance figures may vary depending on conditions and setup."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
              <ChevronRight className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-400 leading-relaxed font-semibold mt-4">
          All specifications are subject to revision.
        </p>
      </div>
    )
  },
  {
    id: "orders-payments",
    title: "Orders & Payments",
    icon: CreditCard,
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">
          We reserve the right to:
        </p>
        <ul className="space-y-3 pl-2">
          {[
            "Accept or reject any order",
            "Cancel transactions suspected of fraud",
            "Limit quantities purchased",
            "Modify product pricing without prior notice"
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-400 leading-relaxed mt-4 italic">
          Orders are confirmed only after successful payment processing.
        </p>
      </div>
    )
  },
  {
    id: "prelaunch-prototypes",
    title: "Pre-Launch & Prototype Products",
    icon: Cpu,
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">
          Certain products displayed on the website may be:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
          {[
            "Development prototypes",
            "Concept vehicles",
            "Pre-production units"
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <p className="text-sm font-bold text-white uppercase tracking-wider">{item}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-300 leading-relaxed mt-4">
          Availability, specifications, pricing, and delivery schedules may change without prior notice.
        </p>
        <p className="text-xs text-gray-400 italic">
          Images and renders are provided for illustrative purposes.
        </p>
      </div>
    )
  },
  {
    id: "warranty-disclaimer",
    title: "Warranty Disclaimer",
    icon: AlertTriangle,
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed text-justify">
          Unless explicitly stated in writing, products are provided on an “as available” basis.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Shadowline Automotive makes no guarantees regarding:
        </p>
        <ul className="space-y-3 pl-2">
          {[
            "Continuous website availability",
            "Uninterrupted operation",
            "Error-free content",
            "Compatibility with all devices or systems"
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  },
  {
    id: "limitation-liability",
    title: "Limitation of Liability",
    icon: Scale,
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed text-justify">
          To the maximum extent permitted by law, Shadowline Automotive shall not be liable for:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Indirect damages",
            "Consequential losses",
            "Business interruptions",
            "Loss of profits",
            "Data loss",
            "Website downtime"
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/5 rounded-lg p-4 text-center">
              <p className="text-sm font-semibold text-white uppercase tracking-wider">{item}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 mt-4 leading-relaxed">
          arising from the use of this website or associated services.
        </p>
      </div>
    )
  },
  {
    id: "user-conduct",
    title: "User Conduct",
    icon: ShieldAlert,
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">
          Users agree not to:
        </p>
        <ul className="space-y-3 pl-2">
          {[
            "Attempt unauthorized access to systems",
            "Disrupt website functionality",
            "Upload malicious software",
            "Copy or misuse proprietary content",
            "Use the website for unlawful purposes"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
              <ChevronRight className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-red-200/80 leading-relaxed mt-4 bg-red-500/10 border border-red-500/20 p-3 rounded-lg">
          Violation may result in termination of access and legal action.
        </p>
      </div>
    )
  },
  {
    id: "third-party",
    title: "Third-Party Links",
    icon: ExternalLink,
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed text-justify">
          This website may contain links to external websites. Shadowline Automotive is not responsible for:
        </p>
        <ul className="space-y-2 pl-2 text-sm text-gray-300">
          <li className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-brand-cyan"></span> Third-party content
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-brand-cyan"></span> Privacy practices
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-brand-cyan"></span> External website availability
          </li>
        </ul>
        <p className="text-sm text-gray-400 mt-4 leading-relaxed italic">
          Accessing external sites is at your own risk.
        </p>
      </div>
    )
  },
  {
    id: "governing-law",
    title: "Governing Law",
    icon: Gavel,
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed text-justify">
          These Terms & Conditions shall be governed by and interpreted under the laws of India.
        </p>
        <p className="text-gray-300 leading-relaxed text-justify">
          Any disputes arising from the use of this website shall be subject to the jurisdiction of the competent courts of India.
        </p>
      </div>
    )
  },
  {
    id: "changes-terms",
    title: "Changes to Terms",
    icon: RefreshCw,
    content: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed text-justify">
          Shadowline Automotive reserves the right to modify these Terms & Conditions at any time without prior notice.
        </p>
        <p className="text-sm text-gray-400 mt-2 leading-relaxed">
          Continued use of the website constitutes acceptance of updated terms.
        </p>
      </div>
    )
  },
  {
    id: "contact",
    title: "Contact",
    icon: Mail,
    content: (
      <div className="space-y-6">
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

export default function TermsConditionsPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // offset for fixed header
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
              Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-teal">Conditions</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-cyan to-brand-teal mx-auto mb-6"></div>
            
            <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-6">
              Last Updated: March 2026
            </p>

            <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl">
              <p className="text-justify text-base md:text-lg text-gray-300 font-light leading-relaxed">
                Welcome to Shadowline Automotive. By accessing or using this website, you agree to be bound by these Terms & Conditions.
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

          {/* Main Terms & Conditions Sections */}
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

            {/* Brand Motto Box */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariants}
              className="bg-gradient-to-r from-brand-cyan/10 to-brand-teal/10 border border-brand-cyan/20 p-8 rounded-2xl text-center relative overflow-hidden"
            >
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-brand-teal/10 blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-brand-cyan/10 blur-3xl pointer-events-none"></div>
              
              <p className="font-brand text-lg md:text-2xl italic font-bold tracking-wider text-white">
                “Engineered for precision. Built for the pursuit.”
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
