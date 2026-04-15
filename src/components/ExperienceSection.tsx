import ScrollReveal from "./ScrollReveal";

const items = [
  {
    title: "Desarrollo de Aplicaciones Web",
    desc: "Creacion de sistemas internos para gestion operativa y administrativa.",
  },
  {
    title: "Integracion de APIs",
    desc: "Conexion con servicios externos para automatizar flujos de datos.",
  },
  {
    title: "Backend y Logica de Negocio",
    desc: "Diseno de arquitectura backend robusta con PHP, Python y SQL.",
  },
  {
    title: "Automatizacion de Procesos",
    desc: "Reduccion de tareas manuales mediante scripts y pipelines automaticos.",
  },
  {
    title: "Visualizacion de Datos",
    desc: "Dashboards y reportes dinamicos para la toma de decisiones.",
  },
];

const ExperienceSection = () => (
  <section id="experiencia" className="relative py-24 px-4">
    <div className="max-w-4xl mx-auto">
      <ScrollReveal>
        <h2 className="section-title gradient-text text-center">Experiencia</h2>
        <p className="text-center text-muted-foreground mb-4">Cooperativa de Transporte</p>
        <div className="w-20 h-1 mx-auto mb-16 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full" />
      </ScrollReveal>

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-purple to-transparent" />

        {items.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.15} direction={i % 2 === 0 ? "left" : "right"}>
            <div className={`relative flex ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"} mb-10 pl-12 md:pl-0`}>
              <div className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 top-6 w-3 h-3 rounded-full bg-primary animate-pulse-glow" />
              <div
                className={`glass p-6 max-w-sm neon-border hover:scale-[1.03] transition-transform duration-300 ${i % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}
              >
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
