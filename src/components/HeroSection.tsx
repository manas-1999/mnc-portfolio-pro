import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Linkedin, FileText } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse-glow delay-500" />
      
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-8 animate-slide-up opacity-0">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up opacity-0 delay-100">
            <span className="text-foreground">Manas</span>{" "}
            <span className="gradient-text">Sharma</span>
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 animate-slide-up opacity-0 delay-200">
            Full Stack Developer
          </p>
          
          <p className="text-lg md:text-xl font-mono text-primary mb-8 animate-slide-up opacity-0 delay-300">
            MEAN Stack • Angular • Node.js • AI/ML
          </p>

          {/* Summary */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up opacity-0 delay-400">
            Building scalable SaaS applications with 2.5+ years of expertise. 
            Improved performance by 40% and reduced API response times by 30%. 
            Passionate about delivering intelligent, user-centric solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up opacity-0 delay-500">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#experience">
                View My Work
              </a>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="flex items-center justify-center gap-6 animate-slide-up opacity-0 delay-600">
            <a 
              href="https://linkedin.com/in/manas-sharma-758739181" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-card hover:glow-primary transition-all duration-300 group"
            >
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="mailto:sharmamanas153@gmail.com"
              className="p-3 rounded-xl glass-card hover:glow-primary transition-all duration-300 group"
            >
              <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="#contact"
              className="p-3 rounded-xl glass-card hover:glow-primary transition-all duration-300 group"
            >
              <FileText className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-subtle">
          <a href="#skills" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
