import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "Sistema de Certificados",
    desc: "Generacion y gestion automatizada de certificados digitales.",
    tags: ["PHP", "SQL", "HTML5"],
  },
  {
    title: "Liquidaciones Automatizadas",
    desc: "Calculo y reportes de liquidaciones con integracion de datos.",
    tags: ["Python", "SQL", "CSS3"],
  },
  {
    title: "Sistemas Web Internos",
    desc: "Plataformas de gestion operativa con paneles interactivos.",
    tags: ["JavaScript", "PHP", "SQL"],
  },
  {
    title: "Paginas para Negocios",
    desc: "Sitios web responsivos y modernos para clientes empresariales.",
    tags: ["HTML5", "CSS3", "JavaScript"],
  },
];

const ProjectsSection = () => (
  <section id="proyectos" className="relative py-24 px-4">
    <div className="max-w-5xl mx-auto">
      <ScrollReveal>
        <h2 className="section-title gradient-text text-center">Proyectos</h2>
        <div className="w-20 h-1 mx-auto mb-16 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full" />
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <ScrollReveal key={i} delay={i * 0.12} direction="scale">
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass p-8 group cursor-pointer relative overflow-hidden"
              style={{
                boxShadow: "0 0 0 transparent",
                transition: "box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 30px hsl(185 100% 50% / 0.2), 0 0 60px hsl(270 80% 60% / 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 0 transparent";
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-xl font-bold text-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-sm mb-5">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
