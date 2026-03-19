import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ArrowUpRight, 
  Github, 
  Twitter, 
  Mail,
  MessageCircle,
  FileText,
  Code,
  Database,
  BarChart3,
  Bot,
  Wallet,
  PuzzleIcon,
  BookOpen,
  Sparkles,
  ExternalLink,
  ChevronDown
} from "lucide-react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

// Section component with scroll animation
function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.section>
  );
}

// Navigation
function Navigation() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-lg font-semibold tracking-tight">
            <span className="text-primary">@</span>0xdevair
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Work</a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
          
          <a 
            href="https://x.com/0xdevair" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <Twitter className="w-4 h-4" />
            <span className="hidden sm:inline">Follow</span>
          </a>
        </div>
      </nav>
    </motion.header>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="mb-8">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground mb-4 text-sm tracking-widest uppercase"
            >
              Web3 Data Analyst
            </motion.p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
              Building tools & insights for the{" "}
              <span className="gradient-text">decentralized</span> future
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Specializing in on-chain analytics, DeFi research, and data visualization. 
              Helping traders and protocols make data-driven decisions through Python, SQL, and Web3 expertise.
            </p>
          </div>
          
          {/* Skills pills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {["Python", "SQL", "Solidity", "Dune Analytics", "Web3.py"].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-muted-foreground border border-border"
              >
                {skill}
              </span>
            ))}
          </motion.div>
          
          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-4"
          >
            <Button asChild size="lg" className="rounded-full px-8 animate-pulse-glow">
              <a href="#projects">
                View Projects
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-primary/50 text-primary hover:bg-primary/10">
              <a href="https://x.com/0xdevair" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-4 h-4 mr-2" />
                Get in Touch
              </a>
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Right - Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 to-pink-500/30 blur-2xl" />
            
            {/* Avatar container */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border border-border/50 shadow-2xl">
              <img 
                src="/avatar.jpg"
                alt="0xdevair avatar"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 px-4 py-2 glass rounded-xl flex items-center gap-2 shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">15K+ Community</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// About Section
function About() {
  const stats = [
    { value: "15K+", label: "Community Members" },
    { value: "5,000+", label: "Users Onboarded" },
    { value: "10+", label: "Protocol Partnerships" }
  ];
  
  return (
    <Section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Sticky nav */}
          <motion.div variants={fadeInUp} className="lg:sticky lg:top-32">
            <p className="text-sm text-primary font-medium tracking-widest uppercase mb-4">About</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Decoding the blockchain, one transaction at a time
            </h2>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              {stats.map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right - Content */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in on-chain data tracking, DeFi project analysis, and sybil-resistance research. 
              My work sits at the intersection of data science and blockchain technology.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Having built a trusted following of 15K+ in the Web3 community and onboarded thousands 
              through DeFi education campaigns, I understand what protocols need to grow and thrive.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              I've collaborated with industry leaders including{" "}
              <span className="text-foreground font-medium">CoinMarketCap</span>,{" "}
              <span className="text-foreground font-medium">Ronin Network</span>, and{" "}
              <span className="text-foreground font-medium">Theoriq</span> to deliver actionable insights 
              and build tools that matter.
            </p>
            
            <blockquote className="border-l-2 border-primary pl-6 py-2 mt-8">
              <p className="text-foreground italic">
                "My goal is to be perceived as extremely valuable — to follow, hire, collaborate with, or pay."
              </p>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

// Skills Section
function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      items: ["Python (Web3.py, Pandas)", "SQL", "Solidity"]
    },
    {
      title: "Analytics",
      icon: BarChart3,
      items: ["Dune Analytics", "Etherscan & Blockscout", "The Graph & Matplotlib"]
    },
    {
      title: "Infrastructure",
      icon: Database,
      items: ["Alchemy & Infura", "QuickNode", "OpenAI APIs & Telegram Bots"]
    }
  ];
  
  return (
    <Section id="work" className="py-32 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <p className="text-sm text-primary font-medium tracking-widest uppercase mb-4">Skills & Tools</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            The stack behind the insights
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              variants={fadeInUp}
              className="p-8 rounded-2xl bg-card border border-border hover-lift"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li key={item} className="text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// Projects Section
function Projects() {
  const projects = [
    {
      title: "Jigsaw NFT Game",
      description: "Interactive NFT game built with Irys SDK for decentralized storage and gameplay mechanics",
      tags: ["Irys SDK", "NFTs", "Gaming"],
      icon: PuzzleIcon,
      color: "from-primary/20 to-pink-500/20"
    },
    {
      title: "Name Service Protocol",
      description: "Superseed project for decentralized identity management on-chain",
      tags: ["Superseed", "Identity", "ENS"],
      icon: FileText,
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Kaito Yaps Tracker",
      description: "Telegram bot for tracking and analyzing crypto market sentiment in real-time",
      tags: ["Telegram API", "Sentiment", "Analytics"],
      icon: Bot,
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Dynamic Dashboards",
      description: "Comprehensive analytics dashboards on Dune for DeFi protocol analysis",
      tags: ["Dune Analytics", "DeFi", "SQL"],
      icon: BarChart3,
      color: "from-purple-500/20 to-violet-500/20"
    },
    {
      title: "Wallet Analytics Tools",
      description: "Advanced tools for tracking wallet behaviors, patterns, and on-chain activity",
      tags: ["Python", "Web3.py", "Analysis"],
      icon: Wallet,
      color: "from-amber-500/20 to-orange-500/20"
    },
    {
      title: "Research Publications",
      description: "Deep insights on Humanity Protocol, Socket, Camp, and sybil-resistance",
      tags: ["Medium", "Research", "Reports"],
      icon: BookOpen,
      color: "from-primary/20 to-rose-500/20"
    }
  ];
  
  return (
    <Section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeInUp} className="flex items-end justify-between mb-16">
          <div>
            <p className="text-sm text-primary font-medium tracking-widest uppercase mb-4">Projects</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Selected work
            </h2>
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              variants={fadeInUp}
              className="group relative rounded-2xl bg-card border border-border overflow-hidden hover-lift cursor-pointer"
            >
              {/* Header gradient */}
              <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <project.icon className="w-12 h-12 text-foreground/60 group-hover:scale-110 transition-transform" />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-secondary rounded text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Hover arrow */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-5 h-5 text-primary" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}

// Contact Section
function Contact() {
  const links = [
    { 
      label: "Twitter", 
      handle: "@0xdevair", 
      href: "https://x.com/0xdevair",
      icon: Twitter 
    },
    { 
      label: "Telegram", 
      handle: "@OxDevair", 
      href: "https://t.me/OxDevair",
      icon: MessageCircle 
    },
    { 
      label: "GitHub", 
      handle: "0xdevair", 
      href: "https://github.com/0xdevair",
      icon: Github 
    },
    { 
      label: "Email", 
      handle: "hello@devair.xyz", 
      href: "mailto:hello@devair.xyz",
      icon: Mail 
    }
  ];
  
  return (
    <Section id="contact" className="py-32 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div variants={fadeInUp}>
          <p className="text-sm text-primary font-medium tracking-widest uppercase mb-4">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Let's build something together
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Looking for a data analyst for your protocol? Need custom dashboards or on-chain insights? 
            I'm always open to interesting collaborations.
          </p>
        </motion.div>
        
        {/* Contact links */}
        <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map((link) => (
            <motion.a
              key={link.label}
              variants={fadeInUp}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover-lift"
            >
              <link.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <div className="text-sm text-muted-foreground mb-1">{link.label}</div>
              <div className="font-medium group-hover:text-primary transition-colors">{link.handle}</div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          2024 @0xdevair. Building in Web3.
        </p>
        <p className="text-sm text-muted-foreground">
          Designed with care
        </p>
      </div>
    </footer>
  );
}

// Main Home Component
export default function Home() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleAnchorClick));

    return () => {
      links.forEach(link => link.removeEventListener('click', handleAnchorClick));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
