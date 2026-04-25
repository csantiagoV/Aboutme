import { motion } from "framer-motion";
import {
  BarChart3,
  FileText,
  Globe,
  LayoutDashboard,
  type LucideIcon,
} from "lucide-react";
import FullStackFlow from "./FullStackFlow";
import ScrollReveal from "./ScrollReveal";

interface ProjectItem {
  title: string;
  summary: string;
  details: string;
  tags: string[];
  highlight: string;
  color: string;
  icon: LucideIcon;
}

const techColors: Record<string, string> = {
  PHP: "#8892BF",
  SQL: "#00D4FF",
  HTML5: "#E34F26",
  CSS3: "#1572B6",
  JavaScript: "#F7DF1E",
  Python: "#3776AB",
};

const projects: ProjectItem[] = [
  {
    title: "Sistema de Certificados",
    summary: "Automatizacion de certificados conectada con datos, validaciones y servicios externos.",
    details: "Flujo completo para emitir, consultar y gestionar certificados digitales con integracion a bases de datos y APIs.",
    tags: ["PHP", "SQL", "HTML5"],
    highlight: "Integrado con APIs",
    color: "#22D3EE",
    icon: FileText,
  },
  {
    title: "Liquidaciones Automatizadas",
    summary: "Procesamiento de liquidaciones con calculo de datos y generacion automatica de reportes.",
    details: "Solucion enfocada en automatizar operaciones repetitivas, consolidar informacion y acelerar la entrega de resultados.",
    tags: ["Python", "SQL", "CSS3"],
    highlight: "Procesamiento de datos",
    color: "#38BDF8",
    icon: BarChart3,
  },
  {
    title: "Sistemas Web Internos",
    summary: "Plataformas internas para gestion operativa con reglas de negocio y consumo de servicios.",
    details: "Aplicaciones de uso interno para equipos de trabajo, con modulos administrativos, integraciones y manejo de procesos.",
    tags: ["JavaScript", "PHP", "SQL"],
    highlight: "Logica de negocio",
    color: "#A855F7",
    icon: LayoutDashboard,
  },
  {
    title: "Paginas para Negocios",
    summary: "Sitios web modernos, responsivos y preparados para publicacion en entornos reales.",
    details: "Desarrollo frontend con enfoque comercial, integracion a servicios y despliegue final para presencia profesional en linea.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    highlight: "Deploy productivo",
    color: "#F97316",
    icon: Globe,
  },
];

const ProjectsSection = () => (
  <section id="proyectos" className="relative py-24 px-4">
    <div className="max-w-5xl mx-auto">
      <ScrollReveal>
        <h2 className="section-title gradient-text text-center">Proyectos</h2>
        <div className="w-20 h-1 mx-auto mb-16 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full" />
      </ScrollReveal>
      <ScrollReveal delay={0.12}>
        <div className="relative mb-14 overflow-hidden rounded-[28px] border border-glass-border bg-card/75 p-7 shadow-[0_0_28px_hsl(185_100%_50%_/_0.08)] md:p-10">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />
          <div className="absolute -right-16 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-neon-purple/8 blur-2xl" />
          <div className="absolute -left-12 top-8 h-24 w-24 rounded-full bg-neon-cyan/8 blur-2xl" />

          <div className="relative z-10">
            <div className="mb-4 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-mono tracking-[0.28em] text-primary">
              FULL STACK FLOW
            </div>

            <p className="max-w-4xl text-xl font-semibold leading-relaxed text-foreground md:text-2xl">
              Desarrollo soluciones completas: <span className="gradient-text">desde la base de datos y creacion de APIs</span>,
              hasta la logica backend, frontend y despliegue en produccion.
            </p>

            <FullStackFlow />
          </div>
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project, index) => {
          const Icon = project.icon;

          return (
            <ScrollReveal key={project.title} delay={index * 0.12} direction="scale">
              <motion.article
                whileHover={{ y: -10, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="group relative min-h-[320px] cursor-pointer overflow-hidden rounded-[28px] border border-border/60 bg-card/72 p-7"
                style={{
                  boxShadow: `0 0 0 transparent`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 35px ${project.color}22, 0 0 70px ${project.color}11`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 0 transparent";
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at top right, ${project.color}22, transparent 35%), linear-gradient(160deg, transparent 45%, ${project.color}10 100%)`,
                  }}
                />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div
                  className="absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ backgroundColor: `${project.color}22` }}
                />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className="flex h-16 w-16 items-center justify-center rounded-[22px] border transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6"
                      style={{
                        backgroundColor: `${project.color}18`,
                        borderColor: `${project.color}55`,
                        boxShadow: `0 0 24px ${project.color}22`,
                      }}
                    >
                      <Icon
                        className="h-8 w-8 transition-all duration-500 group-hover:scale-110"
                        style={{ color: project.color, filter: `drop-shadow(0 0 12px ${project.color})` }}
                      />
                    </div>

                    <span
                      className="rounded-full border px-3 py-1 text-[11px] font-mono tracking-[0.22em] text-foreground/80"
                      style={{
                        borderColor: `${project.color}44`,
                        backgroundColor: `${project.color}12`,
                      }}
                    >
                      {project.highlight}
                    </span>
                  </div>

                  <div className="mt-6 transition-all duration-500 group-hover:opacity-20 group-hover:translate-y-2">
                    <h3 className="mb-3 text-2xl font-bold leading-tight text-foreground">{project.title}</h3>
                    <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-mono tracking-[0.16em]"
                          style={{
                            borderColor: `${techColors[tag] ?? project.color}44`,
                            backgroundColor: `${techColors[tag] ?? project.color}16`,
                            color: techColors[tag] ?? project.color,
                          }}
                        >
                          <span
                            className="h-2 w-2 rounded-full"
                            style={{
                              backgroundColor: techColors[tag] ?? project.color,
                              boxShadow: `0 0 10px ${techColors[tag] ?? project.color}`,
                            }}
                          />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pointer-events-none absolute inset-x-5 bottom-5 translate-y-6 rounded-2xl border border-white/10 bg-background/92 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="mb-3 flex items-center gap-3">
                      <div
                        className="h-2.5 w-2.5 rounded-full"
                        style={{
                          backgroundColor: project.color,
                          boxShadow: `0 0 14px ${project.color}`,
                        }}
                      />
                      <p className="text-[11px] font-mono tracking-[0.24em] text-muted-foreground">PROJECT OVERVIEW</p>
                    </div>
                    <p className="text-sm leading-relaxed text-foreground/88">{project.details}</p>
                  </div>
                </div>
              </motion.article>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
