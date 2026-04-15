import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  name: string;
  icon: string;
  color: string;
  delay: number;
}

const TechCard = ({ name, icon, color, delay }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="float-animation perspective-[800px]"
      style={{ animationDelay: `${delay * 2}s` }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-36 h-44 md:w-44 md:h-52 cursor-pointer"
      >
        <div
          className="absolute inset-0 glass flex flex-col items-center justify-center gap-3 transition-shadow duration-300"
          style={{
            backfaceVisibility: "hidden",
            boxShadow: isFlipped ? "none" : `0 0 25px ${color}33, 0 0 50px ${color}11`,
          }}
        >
          <span className="text-4xl md:text-5xl font-bold tracking-wide">{icon}</span>
          <span className="text-sm font-semibold tracking-wider text-foreground/80">{name}</span>
          <div
            className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"
            style={{ boxShadow: `inset 0 0 30px ${color}22, 0 0 40px ${color}22` }}
          />
        </div>
        <div
          className="absolute inset-0 glass flex items-center justify-center p-4 text-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            boxShadow: `0 0 30px ${color}33`,
            borderColor: color,
          }}
        >
          <p className="text-xs text-muted-foreground leading-relaxed">
            Experiencia practica en proyectos reales con <span className="font-bold text-foreground">{name}</span>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TechCard;
