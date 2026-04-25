import ScrollReveal from "./ScrollReveal";
import TechCard from "./TechCard";
import imgPhp from "@/assets/img_php.png";
import imgJavascript from "@/assets/img_javascript.png";
import imgPython from "@/assets/img_python.png";
import imgHtml from "@/assets/img_html.png";
import imgCss from "@/assets/img_css.png";
import imgSqlDb from "@/assets/img_sql_db.png";
import imgIa from "@/assets/img_IA.png";

const techs = [
  {
    name: "PHP",
    color: "#8892BF",
    image: imgPhp,
    details: ["Conexion a bases de datos", "Uso de formularios", "Manejo de sesiones", "Estructura basica MVC"],
  },
  {
    name: "JavaScript",
    color: "#F7DF1E",
    image: imgJavascript,
    details: ["Manipulacion del DOM", "Eventos click e input", "Uso de fetch y APIs basicas", "Funciones y logica basica"],
  },
  {
    name: "Python",
    color: "#3776AB",
    image: imgPython,
    details: ["Scripts basicos", "Manejo de listas y datos", "Uso de librerias como Pandas", "Automatizacion simple"],
  },
  {
    name: "HTML",
    color: "#E34F26",
    image: imgHtml,
    details: ["Estructura de paginas", "Formularios", "Etiquetas semanticas", "Organizacion de contenido"],
  },
  {
    name: "CSS",
    color: "#1572B6",
    image: imgCss,
    details: ["Flexbox basico", "Estilos y colores", "Responsive basico", "Animaciones simples"],
  },
  {
    name: "SQL",
    color: "#00D4FF",
    image: imgSqlDb,
    details: ["CRUD basico", "Consultas simples", "Uso de WHERE", "Manejo de tablas"],
  },
  {
    name: "IA",
    color: "#A855F7",
    image: imgIa,
    details: ["APIs de IA", "Prompts efectivos", "Automatizacion", "Apoyo al desarrollo"],
  },
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
