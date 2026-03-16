import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Check, 
  ChevronDown, 
  Globe, 
  Zap, 
  Layout, 
  Search, 
  MessageSquare, 
  Star,
  Menu,
  X,
  Plus,
  Minus
} from "lucide-react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "What we do", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Work", href: "#work" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-brand-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="ThirdSpace Logo" 
            className="h-8 w-auto object-contain"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-white/70 hover:text-brand-orange transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <button className="bg-brand-orange text-brand-black px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform">
            Book a call
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-black border-t border-white/10 p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-white/70 hover:text-brand-orange"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-brand-orange text-brand-black w-full py-3 rounded-full font-bold mt-4">
              Book a call
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Background Wave/Abstract */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://picsum.photos/seed/abstract-wave/1920/1080?blur=10" 
          alt="Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/20 via-brand-black/60 to-brand-black" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 caption mb-8">
            The #1 Design Agency
          </span>
          <h1 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8 uppercase">
            A space where your brand comes <span className="text-brand-orange">alive.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-medium">
            We help ambitious brands stand out through world-class design, 
            cutting-edge development, and strategic marketing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#work" className="group bg-brand-orange text-brand-black px-8 py-4 rounded-full font-black text-lg flex items-center gap-2 hover:scale-105 transition-transform">
              See our work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#pricing" className="px-8 py-4 rounded-full font-black text-lg border border-white/20 hover:bg-white/5 transition-colors">
              View pricing
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-10 hidden lg:block"
      >
        <div className="glass-card p-4 rounded-2xl flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
            <Zap className="text-white w-5 h-5" />
          </div>
          <div>
            <p className="caption text-white/40 mb-1">Performance</p>
            <p className="text-sm font-black">99+ Page Speed</p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-40 right-10 hidden lg:block"
      >
        <div className="glass-card p-4 rounded-2xl flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center">
            <Star className="text-brand-black w-5 h-5" />
          </div>
          <div>
            <p className="caption text-white/40 mb-1">Rating</p>
            <p className="text-sm font-black">5.0 Client Satisfaction</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Web Design",
      desc: "We create stunning, user-centric designs that convert visitors into loyal customers.",
      icon: <Layout className="w-8 h-8 text-brand-orange" />,
      tags: ["UI/UX", "Branding", "Prototyping"]
    },
    {
      title: "Development",
      desc: "Fast, secure, and scalable websites built with the latest technologies.",
      icon: <Globe className="w-8 h-8 text-brand-orange" />,
      tags: ["React", "Next.js", "E-commerce"]
    },
    {
      title: "SEO & Marketing",
      desc: "Boost your visibility and drive organic traffic through data-driven strategies.",
      icon: <Search className="w-8 h-8 text-brand-orange" />,
      tags: ["SEO", "Content", "Ads"]
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-brand-black relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase leading-none">
              What we do<span className="text-brand-orange">.</span>
            </h2>
            <p className="text-lg text-white/50 font-medium">
              We provide a full suite of digital services to help your business grow in the modern age.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-3xl font-black">150+</p>
              <p className="caption text-white/40">Projects Done</p>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="text-right">
              <p className="text-3xl font-black">12</p>
              <p className="caption text-white/40">Awards Won</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-10 rounded-[2rem] hover:border-brand-orange/50 transition-colors group"
            >
              <div className="mb-8 p-4 bg-white/5 rounded-2xl w-fit group-hover:bg-brand-orange group-hover:text-brand-black transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase">{service.title}</h3>
              <p className="text-white/50 mb-8 font-medium leading-relaxed">
                {service.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/5 caption text-[10px]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      num: "01",
      title: "Discovery",
      desc: "We dive deep into your brand, goals, and target audience to build a solid foundation."
    },
    {
      num: "02",
      title: "Strategy",
      desc: "Mapping out the user journey and defining the technical requirements for success."
    },
    {
      num: "03",
      title: "Design",
      desc: "Crafting a unique visual identity and high-fidelity prototypes for your review."
    },
    {
      num: "04",
      title: "Launch",
      desc: "Rigorous testing and final deployment to ensure a flawless user experience."
    }
  ];

  return (
    <section id="process" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase leading-none">
            Our Process<span className="text-brand-orange">.</span>
          </h2>
          <p className="text-lg text-white/50 mb-12 font-medium max-w-md">
            A streamlined approach to taking your project from concept to reality in record time.
          </p>
          <img 
            src="https://picsum.photos/seed/process/800/600" 
            alt="Process" 
            className="rounded-[2rem] border border-white/10"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="space-y-12 relative">
          <div className="absolute left-6 top-4 bottom-4 w-px bg-white/10 hidden md:block" />
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex gap-8 relative z-10"
            >
              <div className="w-12 h-12 rounded-full bg-brand-orange text-brand-black flex items-center justify-center font-black flex-shrink-0">
                {step.num}
              </div>
              <div>
                <h3 className="text-2xl font-black mb-2 uppercase">{step.title}</h3>
                <p className="text-white/50 font-medium leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Work = () => {
  const projects = [
    {
      title: "Nova App",
      category: "Mobile Design",
      img: "https://picsum.photos/seed/nova/800/1000"
    },
    {
      title: "Zenith Web",
      category: "Development",
      img: "https://picsum.photos/seed/zenith/800/1000"
    },
    {
      title: "Pulse Brand",
      category: "Branding",
      img: "https://picsum.photos/seed/pulse/800/1000"
    },
    {
      title: "Echo Platform",
      category: "SaaS Design",
      img: "https://picsum.photos/seed/echo/800/1000"
    }
  ];

  return (
    <section id="work" className="py-24 px-6 bg-brand-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-none">
            Latest Work<span className="text-brand-orange">.</span>
          </h2>
          <button className="hidden md:flex items-center gap-2 font-bold text-white/60 hover:text-white transition-colors">
            View all projects <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-[2rem] cursor-pointer"
            >
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-brand-orange caption mb-2">{project.category}</p>
                <h3 className="text-2xl font-black uppercase">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Full Service",
      price: "$999",
      desc: "Everything you need to take your brand to the next level. One simple price, no hidden fees.",
      features: [
        "Customized Website (up to 5 pages)",
        "Basic SEO Setup",
        "Domain Connection & DNS",
        "Website Analytics Setup",
        "Mobile-Responsive Design",
        "CMS Editing Access",
        "Two (2) Revision Rounds",
        "30-Day Post-Launch Support"
      ],
      isPopular: true
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase leading-none">
            Pricing Plan<span className="text-brand-orange">.</span>
          </h2>
          <p className="text-lg text-white/50 font-medium max-w-2xl mx-auto">
            One simple price for world-class design and development.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className="relative p-10 rounded-[2.5rem] border border-brand-orange bg-brand-orange/5"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-orange text-brand-black px-4 py-1 rounded-full caption">
                Best Value
              </div>
              <h3 className="text-2xl font-black uppercase mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-black">{plan.price}</span>
                <span className="text-white/40 font-bold">/project</span>
              </div>
              <p className="text-white/50 mb-8 font-medium leading-relaxed">
                {plan.desc}
              </p>
              <div className="space-y-4 mb-10">
                {plan.features.map(feature => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-orange/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-brand-orange" />
                    </div>
                    <span className="text-sm font-medium text-white/80">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="w-full py-4 rounded-full font-black text-lg transition-all bg-brand-orange text-brand-black hover:scale-[1.02]">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      q: "How long does a typical project take?",
      a: "Most projects take between 4 to 8 weeks depending on the complexity and scope. We provide a detailed timeline during our discovery phase."
    },
    {
      q: "Do you offer maintenance after launch?",
      a: "Yes, we offer various maintenance packages to ensure your website stays up-to-date, secure, and performing at its best."
    },
    {
      q: "What technologies do you use?",
      a: "We primarily work with React, Next.js, Tailwind CSS, and headless CMS platforms like Sanity or Contentful. We choose the best stack for your specific needs."
    },
    {
      q: "Can you help with branding as well?",
      a: "Absolutely. We offer full branding services including logo design, color palettes, typography, and brand guidelines."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6 bg-brand-black">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black mb-16 uppercase leading-none text-center">
          FAQ<span className="text-brand-orange">.</span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="border border-white/10 rounded-3xl overflow-hidden"
            >
              <button 
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="text-lg font-bold uppercase">{faq.q}</span>
                {openIdx === idx ? <Minus className="text-brand-orange" /> : <Plus />}
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-white/50 font-medium leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-24 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-6xl md:text-9xl font-black leading-none tracking-tighter mb-8 max-w-2xl">
              TOGETHER LET'S TAKE <br />
              <span className="text-brand-orange uppercase">Space.</span>
            </h2>
            <p className="text-xl text-white/50 font-medium max-w-md mb-8">
              Ready to take your business to the next level? Let's build something amazing together.
            </p>
            <div className="flex gap-4">
              <button className="bg-brand-orange text-brand-black px-8 py-4 rounded-full font-black text-lg">
                Start a project
              </button>
              <button className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/5 transition-colors">
                <MessageSquare className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <p className="caption text-white/40 mb-6">Navigation</p>
              <ul className="space-y-4">
                <li><a href="#" className="text-sm font-bold hover:text-brand-orange transition-colors">Home</a></li>
                <li><a href="#services" className="text-sm font-bold hover:text-brand-orange transition-colors">Services</a></li>
                <li><a href="#work" className="text-sm font-bold hover:text-brand-orange transition-colors">Work</a></li>
                <li><a href="#pricing" className="text-sm font-bold hover:text-brand-orange transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <p className="caption text-white/40 mb-6">Social</p>
              <ul className="space-y-4">
                <li><a href="#" className="text-sm font-bold hover:text-brand-orange transition-colors">Instagram</a></li>
                <li><a href="#" className="text-sm font-bold hover:text-brand-orange transition-colors">Twitter</a></li>
                <li><a href="#" className="text-sm font-bold hover:text-brand-orange transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-sm font-bold hover:text-brand-orange transition-colors">Dribbble</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="caption text-white/40 mb-6">Office</p>
              <p className="text-sm font-bold leading-relaxed">
                123 Design Street <br />
                Creative District <br />
                New York, NY 10001
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/10 gap-6">
          <p className="text-sm text-white/40 font-medium">
            © 2026 ThirdSpace Agency. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-sm text-white/40 hover:text-white font-medium">Privacy Policy</a>
            <a href="#" className="text-sm text-white/40 hover:text-white font-medium">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Gallery = () => {
  const items = [
    { title: "Mobile Apps", img: "https://picsum.photos/seed/gallery1/600/600" },
    { title: "Dashboard", img: "https://picsum.photos/seed/gallery2/600/600" },
    { title: "Landing Pages", img: "https://picsum.photos/seed/gallery3/600/600" },
    { title: "E-commerce", img: "https://picsum.photos/seed/gallery4/600/600" },
    { title: "SaaS", img: "https://picsum.photos/seed/gallery5/600/600" },
    { title: "Branding", img: "https://picsum.photos/seed/gallery6/600/600" },
  ];

  return (
    <section className="py-24 px-6 bg-brand-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black mb-16 uppercase leading-none text-center">
          And even more<span className="text-brand-orange">...</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-orange/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    { title: "Fast Delivery", desc: "We launch in weeks, not months.", icon: <Zap /> },
    { title: "Top Quality", desc: "Pixel perfect design and clean code.", icon: <Star /> },
    { title: "Direct Access", desc: "Talk directly to the designers.", icon: <MessageSquare /> },
    { title: "Global Reach", desc: "We work with clients worldwide.", icon: <Globe /> },
  ];

  return (
    <section className="py-24 px-6 bg-brand-black/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {benefits.map((benefit, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-6">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-black uppercase mb-3">{benefit.title}</h3>
            <p className="text-white/50 font-medium">{benefit.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-brand-black text-brand-white selection:bg-brand-orange selection:text-brand-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Work />
        <Gallery />
        <Benefits />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
