import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const links = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/tu-perfil", icon: "IN", color: "0, 119, 181" },
  { name: "GitHub", href: "https://github.com/tu-usuario", icon: "GH", color: "255, 255, 255" },
  { name: "Email", href: "mailto:tu-correo@dominio.com", icon: "EM", color: "0, 230, 255" },
  { name: "WhatsApp", href: "https://wa.me/573001234567", icon: "WA", color: "37, 211, 102" },
];

const ContactSection = () => (
  <section id="contacto" className="relative py-24 px-4">
    <div className="max-w-3xl mx-auto text-center">
      <ScrollReveal>
        <h2 className="section-title gradient-text">Contacto</h2>
        <div className="w-20 h-1 mx-auto mb-6 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full" />
        <p className="text-muted-foreground mb-12 text-lg">
          Tienes un proyecto en mente? <span className="text-primary font-semibold">Hablemos.</span>
        </p>
      </ScrollReveal>
      <div className="flex flex-wrap justify-center gap-5">
        {links.map((l, i) => (
          <ScrollReveal key={i} delay={i * 0.1} direction="scale">
            <motion.a
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="glass px-8 py-5 flex flex-col items-center gap-2 min-w-[120px] transition-all duration-300 hover:border-primary/50"
              style={{
                transition: "box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 25px rgba(${l.color}, 0.3), 0 0 50px rgba(${l.color}, 0.1)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span className="text-3xl font-bold tracking-wide">{l.icon}</span>
              <span className="text-sm font-semibold text-foreground/80">{l.name}</span>
            </motion.a>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
