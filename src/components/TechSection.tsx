import ScrollReveal from "./ScrollReveal";
import TechCard from "./TechCard";

const techs = [
  { name: "PHP", icon: "PHP", color: "#8892BF" },
  { name: "JavaScript", icon: "JS", color: "#F7DF1E" },
  { name: "Python", icon: "PY", color: "#3776AB" },
  { name: "HTML5", icon: "HTML", color: "#E34F26" },
  { name: "CSS3", icon: "CSS", color: "#1572B6" },
  { name: "SQL", icon: "DB", color: "#00D4FF" },
];

const TechSection = () => (
  <section id="tecnologias" className="relative py-24 px-4">
    <div className="max-w-5xl mx-auto">
      <ScrollReveal>
        <h2 className="section-title gradient-text text-center">Tecnologias</h2>
        <div className="w-20 h-1 mx-auto mb-16 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full" />
      </ScrollReveal>
      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        {techs.map((t, i) => (
          <TechCard key={t.name} {...t} delay={i * 0.1} />
        ))}
      </div>
    </div>
  </section>
);

export default TechSection;
