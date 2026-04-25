import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  name: string;
  color: string;
  image: string;
  details: string[];
  delay: number;
}

const TechCard = ({ name, color, image, details, delay }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="perspective-[800px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0, y: isFlipped ? -8 : 0, scale: isFlipped ? 1.03 : 1 }}
        transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative h-48 w-40 cursor-pointer md:h-56 md:w-48"
      >
        <div
          className="absolute inset-0 glass flex items-center justify-center overflow-hidden p-4 transition-shadow duration-300 md:p-5"
          style={{
            backfaceVisibility: "hidden",
            boxShadow: `0 0 25px ${color}33, 0 0 50px ${color}11`,
          }}
        >
          <div
            className="flex h-full w-full items-center justify-center overflow-hidden"
            style={{
              filter: `drop-shadow(0 0 18px ${color}55) drop-shadow(0 0 36px ${color}22)`,
            }}
          >
            <img
              src={image}
              alt={`Logo de ${name}`}
              className="h-full w-full object-contain object-center scale-[1.35] md:scale-[1.5]"
              loading="lazy"
            />
          </div>
          <div
            className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 hover:opacity-100"
            style={{ boxShadow: `inset 0 0 30px ${color}22, 0 0 40px ${color}22` }}
          />
        </div>
        <div
          className="absolute inset-0 glass flex items-center justify-center p-4 text-left md:p-5"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            boxShadow: `0 0 30px ${color}33`,
            borderColor: color,
          }}
        >
          <div className="w-full">
            <p className="mb-3 text-sm font-semibold tracking-[0.16em] text-foreground/90">{name}</p>
            <ul className="space-y-2 text-xs leading-snug text-muted-foreground md:text-[13px]">
              {details.map((detail) => (
                <li key={detail} className="border-l border-primary/30 pl-2">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TechCard;
