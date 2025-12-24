import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold">
              <span className="text-foreground">Manas</span>
              <span className="gradient-text"> Sharma</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Full Stack Developer • MEAN Stack • AI/ML
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/manas-sharma-758739181"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg glass-card hover:glow-primary transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:sharmamanas153@gmail.com"
              className="p-3 rounded-lg glass-card hover:glow-primary transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="tel:+917009284505"
              className="p-3 rounded-lg glass-card hover:glow-primary transition-all duration-300 group"
            >
              <Phone className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Manas Sharma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
