import ScrollReveal from "./ScrollReveal";

const AboutSection = () => (
  <section id="sobre-mi" className="relative py-24 px-4">
    <div className="max-w-4xl mx-auto">
      <ScrollReveal>
        <h2 className="section-title gradient-text text-center">Sobre mi</h2>
        <div className="w-20 h-1 mx-auto mb-10 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full" />
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <div className="glass p-8 md:p-12 neon-border">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Soy desarrollador Full Stack apasionado por crear <span className="text-primary font-semibold">soluciones reales</span> que
            generen impacto. Me especializo en desarrollo web, automatizacion de procesos y construccion de APIs robustas. Mi enfoque es
            transformar ideas complejas en aplicaciones funcionales, eficientes y visualmente atractivas.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground mt-4">
            Con experiencia en entornos reales de produccion, busco oportunidades de
            <span className="text-secondary font-semibold"> trabajo remoto o hibrido</span> donde pueda aportar valor, crecer
            profesionalmente y colaborar con equipos innovadores.
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default AboutSection;
