import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Manas Sharma | Full Stack Developer - MEAN Stack & AI/ML</title>
        <meta 
          name="description" 
          content="Manas Sharma - Full Stack Developer with 2.5+ years experience in MEAN Stack, Angular, Node.js, and AI/ML. Building scalable SaaS applications serving 50,000+ users." 
        />
        <meta name="keywords" content="Full Stack Developer, MEAN Stack, Angular, Node.js, MongoDB, AI, Machine Learning, SaaS, Web Developer" />
        <meta property="og:title" content="Manas Sharma | Full Stack Developer" />
        <meta property="og:description" content="Full Stack Developer specializing in MEAN Stack and AI-powered solutions." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://manas-sharma.dev" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Index;
