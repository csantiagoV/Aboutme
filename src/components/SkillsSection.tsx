import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const skills = [
  { name: "Resolucion de Problemas", icon: "01" },
  { name: "Aprendizaje Rapido", icon: "UP" },
  { name: "Automatizacion", icon: "AT" },
  { name: "Desarrollo Full Stack", icon: "FS" },
  { name: "Integracion de Sistemas", icon: "INT" },
];

const SkillsSection = () => (
  <section id="aptitudes" className="relative py-24 px-4">
    <div className="max-w-4xl mx-auto">
      <ScrollReveal>
        <h2 className="section-title gradient-text text-center">Aptitudes</h2>
        <div className="w-20 h-1 mx-auto mb-16 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full" />
      </ScrollReveal>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((s, i) => (
          <ScrollReveal key={i} delay={i * 0.1} direction="scale">
            <motion.div
              whileHover={{ scale: 1.08, y: -4 }}
              className="glass px-6 py-4 flex items-center gap-3 cursor-default hover:neon-border transition-shadow duration-300"
            >
              <span className="text-2xl font-bold tracking-wide">{s.icon}</span>
              <span className="font-semibold text-foreground/90 text-sm md:text-base">{s.name}</span>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
