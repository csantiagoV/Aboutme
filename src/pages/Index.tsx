import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TechSection from "@/components/TechSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <TechSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <footer className="py-8 text-center text-muted-foreground text-sm border-t border-border/30">
          <p>&copy; {new Date().getFullYear()} | Disenado y desarrollado para tu portafolio profesional.</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
