import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FloatingCherryBlossoms } from "@/components/ui/floating-cherry-blossoms";
import { 
  Github, 
  Twitter, 
  Mail, 
  TrendingUp, 
  Users, 
  Handshake,
  Code,
  Database,
  Server,
  ChartBar,
  Search,
  Zap,
  Bot,
  PuzzleIcon,
  IdCard,
  Wallet,
  BookOpen,
  PieChart
} from "lucide-react";
import brandIllustrationUrl from "@assets/edited deevair high qua_1753804626393.jpg";

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for anchor links
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

    // Add event listeners to all anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleAnchorClick));

    // Intersection observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out');
      observer.observe(el);
    });

    return () => {
      links.forEach(link => link.removeEventListener('click', handleAnchorClick));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark-primary text-text-primary overflow-x-hidden">
      <FloatingCherryBlossoms />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-dark-primary/90 backdrop-blur-sm border-b border-dark-secondary">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-cherry-pink">@0xdevair</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-text-secondary hover:text-cherry-pink transition-colors duration-300">About</a>
              <a href="#skills" className="text-text-secondary hover:text-cherry-pink transition-colors duration-300">Skills</a>
              <a href="#projects" className="text-text-secondary hover:text-cherry-pink transition-colors duration-300">Projects</a>
              <a href="#contact" className="text-text-secondary hover:text-cherry-pink transition-colors duration-300">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <div className="mb-6">
              <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                Web3 Data <span className="text-cherry-pink">Analyst</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-light text-text-secondary mb-6">
                Building tools, dashboards & insights for the decentralized future
              </h2>
            </div>
            
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              Specializing in on-chain analytics, DeFi research, and data visualization. 
              Helping traders and protocols make data-driven decisions through 
              Python, SQL, and Solidity expertise.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <span className="px-4 py-2 bg-dark-secondary rounded-full text-sm font-medium">Python & Web3.py</span>
              <span className="px-4 py-2 bg-dark-secondary rounded-full text-sm font-medium">Dune Analytics</span>
              <span className="px-4 py-2 bg-dark-secondary rounded-full text-sm font-medium">Solidity</span>
              <span className="px-4 py-2 bg-dark-secondary rounded-full text-sm font-medium">On-chain Research</span>
            </div>

            <div className="flex space-x-6">
              <Button asChild className="bg-cherry-pink text-dark-primary hover:bg-opacity-90 px-8 py-3 transform hover:scale-105 transition-all duration-300">
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" asChild className="border-cherry-pink text-cherry-pink hover:bg-cherry-pink hover:text-dark-primary px-8 py-3 transition-all duration-300">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-on-scroll">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-dark-secondary to-dark-primary p-8 shadow-2xl">
                <img 
                  src={brandIllustrationUrl} 
                  alt="DevAir Brand Illustration" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="cherry-blossom animate-float absolute -top-4 -right-4" style={{animationDelay: '1s'}}></div>
              <div className="cherry-blossom animate-float absolute -bottom-4 -left-4" style={{animationDelay: '3s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-dark-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center animate-on-scroll">About DevAir</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-cherry-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-cherry-pink" />
              </div>
              <h3 className="text-xl font-semibold mb-2">15K+ Audience</h3>
              <p className="text-text-secondary">Built a trusted following in Web3 community before Twitter hack</p>
            </div>
            
            <div className="text-center animate-on-scroll" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-cherry-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-cherry-pink" />
              </div>
              <h3 className="text-xl font-semibold mb-2">5,000+ Users</h3>
              <p className="text-text-secondary">Onboarded thousands through DeFi education campaigns</p>
            </div>
            
            <div className="text-center animate-on-scroll" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 bg-cherry-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8 text-cherry-pink" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Top Partnerships</h3>
              <p className="text-text-secondary">Collaborated with CoinMarketCap, Ronin Network, and Theoriq</p>
            </div>
          </div>

          <Card className="bg-dark-secondary border-dark-secondary animate-on-scroll" style={{animationDelay: '0.6s'}}>
            <CardContent className="pt-8">
              <blockquote className="text-lg text-center text-text-secondary italic leading-relaxed">
                "Specializing in on-chain data tracking, DeFi project analysis, and sybil-resistance research. 
                My goal is to be perceived as extremely valuable — to follow, hire, collaborate with, or pay."
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center animate-on-scroll">Core Skills & Tools</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-dark-secondary border-dark-secondary hover:bg-dark-secondary/80 transition-all duration-300 hover:scale-105 animate-on-scroll">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-cherry-pink">Languages</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-center"><Code className="w-4 h-4 text-cherry-pink mr-2" /> Python (Web3.py, Pandas)</li>
                  <li className="flex items-center"><Database className="w-4 h-4 text-cherry-pink mr-2" /> SQL</li>
                  <li className="flex items-center"><Server className="w-4 h-4 text-cherry-pink mr-2" /> Solidity</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-dark-secondary border-dark-secondary hover:bg-dark-secondary/80 transition-all duration-300 hover:scale-105 animate-on-scroll" style={{animationDelay: '0.2s'}}>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-cherry-pink">Analytics</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-center"><ChartBar className="w-4 h-4 text-cherry-pink mr-2" /> Dune Analytics</li>
                  <li className="flex items-center"><Search className="w-4 h-4 text-cherry-pink mr-2" /> Etherscan, Blockscout</li>
                  <li className="flex items-center"><TrendingUp className="w-4 h-4 text-cherry-pink mr-2" /> The Graph, Matplotlib</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-dark-secondary border-dark-secondary hover:bg-dark-secondary/80 transition-all duration-300 hover:scale-105 animate-on-scroll" style={{animationDelay: '0.4s'}}>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-cherry-pink">Infrastructure</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-center"><Server className="w-4 h-4 text-cherry-pink mr-2" /> Alchemy, Infura</li>
                  <li className="flex items-center"><Zap className="w-4 h-4 text-cherry-pink mr-2" /> QuickNode</li>
                  <li className="flex items-center"><Bot className="w-4 h-4 text-cherry-pink mr-2" /> OpenAI APIs, Telegram Bots</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-dark-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center animate-on-scroll">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-dark-secondary border-dark-secondary overflow-hidden hover:scale-105 transition-all duration-300 shadow-lg animate-on-scroll">
              <div className="h-48 gradient-cherry flex items-center justify-center">
                <PuzzleIcon className="w-16 h-16 text-cherry-pink" />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Jigsaw NFT Game</h3>
                <p className="text-text-secondary mb-4">Built using Irys SDK for decentralized storage and gameplay mechanics</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-dark-primary rounded-full text-xs">Irys SDK</span>
                  <span className="px-3 py-1 bg-dark-primary rounded-full text-xs">NFTs</span>
                </div>

              </CardContent>
            </Card>

            <Card className="bg-dark-secondary border-dark-secondary overflow-hidden hover:scale-105 transition-all duration-300 shadow-lg animate-on-scroll" style={{animationDelay: '0.2s'}}>
              <div className="h-48 gradient-blue flex items-center justify-center">
                <IdCard className="w-16 h-16 text-accent-blue" />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Name Service Protocol</h3>
                <p className="text-text-secondary mb-4">Superseed project for decentralized identity management</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-dark-primary rounded-full text-xs">Superseed</span>
                  <span className="px-3 py-1 bg-dark-primary rounded-full text-xs">Identity</span>
                </div>

              </CardContent>
            </Card>

            <Card className="bg-dark-secondary border-dark-secondary overflow-hidden hover:scale-105 transition-all duration-300 shadow-lg animate-on-scroll" style={{animationDelay: '0.4s'}}>
              <div className="h-48 bg-gradient-to-br from-green-500/20 to-dark-primary flex items-center justify-center">
                <Bot className="w-16 h-16 text-green-400" />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Kaito Yaps Tracker</h3>
                <p className="text-text-secondary mb-4">Telegram bot for tracking and analyzing crypto market sentiment</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-dark-primary rounded-full text-xs">Telegram API</span>
                  <span className="px-3 py-1 bg-dark-primary rounded-full text-xs">Analytics</span>
                </div>

              </CardContent>
            </Card>

            <Card className="bg-dark-secondary border-dark-secondary overflow-hidden hover:scale-105 transition-all duration-300 shadow-lg animate-on-scroll" style={{animationDelay: '0.6s'}}>
              <div className="h-48 bg-gradient-to-br from-purple-500/20 to-dark-primary flex items-center justify-center">
                <PieChart className="w-16 h-16 text-purple-400" />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Dynamic Dashboards</h3>
                <p className="text-text-secondary mb-4">Comprehensive analytics dashboards on Dune for DeFi protocols</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-dark-primary rounded-full text-xs">Dune Analytics</span>
                  <span className="px-3 py-1 bg-dark-primary rounded-full text-xs">DeFi</span>
                </div>

              </CardContent>
            </Card>

            <Card className="bg-dark-secondary border-dark-secondary overflow-hidden hover:scale-105 transition-all duration-300 shadow-lg animate-on-scroll" style={{animationDelay: '0.8s'}}>
              <div className="h-48 bg-gradient-to-br from-yellow-500/20 to-dark-primary flex items-center justify-center">
                <Wallet className="w-16 h-16 text-yellow-400" />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Wallet Analytics Tools</h3>
                <p className="text-text-secondary mb-4">Advanced tools for tracking and analyzing wallet behaviors and patterns</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-dark-primary rounded-full text-xs">Python</span>
                  <span className="px-3 py-1 bg-dark-primary rounded-full text-xs">Web3.py</span>
                </div>

              </CardContent>
            </Card>

            <Card className="bg-dark-secondary border-dark-secondary overflow-hidden hover:scale-105 transition-all duration-300 shadow-lg animate-on-scroll" style={{animationDelay: '1s'}}>
              <div className="h-48 gradient-cherry flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-cherry-pink" />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Research Publications</h3>
                <p className="text-text-secondary mb-4">Deep insights on Humanity Protocol, Socket, Camp, and sybil-resistance</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-dark-primary rounded-full text-xs">Medium</span>
                  <span className="px-3 py-1 bg-dark-primary rounded-full text-xs">Research</span>
                </div>

              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 animate-on-scroll">Let's Connect</h2>
          <p className="text-xl text-text-secondary mb-12 animate-on-scroll" style={{animationDelay: '0.2s'}}>
            Ready to collaborate on your next Web3 project or need expert analysis?
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <Card className="bg-dark-secondary border-dark-secondary hover:bg-dark-secondary/80 transition-all duration-300 hover:scale-105 group animate-on-scroll" style={{animationDelay: '0.3s'}}>
              <CardContent className="pt-6 text-center">
                <Button variant="link" asChild className="p-0 h-auto flex flex-col items-center">
                  <a href="https://twitter.com/0xdevair" target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-8 h-8 text-accent-blue mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-sm text-text-secondary">Twitter</div>
                    <div className="font-semibold">@0xdevair</div>
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-dark-secondary border-dark-secondary hover:bg-dark-secondary/80 transition-all duration-300 hover:scale-105 group animate-on-scroll" style={{animationDelay: '0.4s'}}>
              <CardContent className="pt-6 text-center">
                <Button variant="link" asChild className="p-0 h-auto flex flex-col items-center">
                  <a href="https://github.com/thenameisdevair" target="_blank" rel="noopener noreferrer">
                    <Github className="w-8 h-8 text-text-primary mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-sm text-text-secondary">GitHub</div>
                    <div className="font-semibold">thenameisdevair</div>
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-dark-secondary border-dark-secondary hover:bg-dark-secondary/80 transition-all duration-300 hover:scale-105 group animate-on-scroll" style={{animationDelay: '0.5s'}}>
              <CardContent className="pt-6 text-center">
                <Button variant="link" asChild className="p-0 h-auto flex flex-col items-center">
                  <a href="https://0xdevair.medium.com" target="_blank" rel="noopener noreferrer">
                    <BookOpen className="w-8 h-8 text-text-primary mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-sm text-text-secondary">Medium</div>
                    <div className="font-semibold">0xdevair</div>
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-dark-secondary border-dark-secondary hover:bg-dark-secondary/80 transition-all duration-300 hover:scale-105 group animate-on-scroll" style={{animationDelay: '0.6s'}}>
              <CardContent className="pt-6 text-center">
                <Button variant="link" asChild className="p-0 h-auto flex flex-col items-center">
                  <a href="https://dune.com/devair_md" target="_blank" rel="noopener noreferrer">
                    <ChartBar className="w-8 h-8 text-purple-400 mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-sm text-text-secondary">Dune Analytics</div>
                    <div className="font-semibold">devair_md</div>
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-cherry-pink/10 to-accent-blue/10 border-dark-secondary animate-on-scroll" style={{animationDelay: '0.8s'}}>
            <CardContent className="pt-8">
              <h3 className="text-2xl font-semibold mb-4">Ready to Work Together?</h3>
              <p className="text-text-secondary mb-6">
                Whether you need on-chain analysis, dashboard development, or strategic Web3 insights, 
                I'm here to help you make data-driven decisions.
              </p>
              <Button className="bg-cherry-pink text-dark-primary hover:bg-opacity-90 px-8 py-3 transform hover:scale-105 transition-all duration-300">
                <Mail className="w-4 h-4 mr-2" />
                Get in Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-dark-secondary border-t border-dark-primary">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-text-secondary">
            © 2024 DevAir (@0xdevair). Building the future of Web3 analytics.
          </p>
        </div>
      </footer>
    </div>
  );
}
