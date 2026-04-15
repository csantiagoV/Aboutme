import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
}

const variants = {
  up: { hidden: { y: 60, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  left: { hidden: { x: -60, opacity: 0 }, visible: { x: 0, opacity: 1 } },
  right: { hidden: { x: 60, opacity: 0 }, visible: { x: 0, opacity: 1 } },
  scale: { hidden: { scale: 0.8, opacity: 0 }, visible: { scale: 1, opacity: 1 } },
};

const ScrollReveal = ({ children, className = "", delay = 0, direction = "up" }: Props) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    variants={variants[direction]}
    className={className}
  >
    {children}
  </motion.div>
);

export default ScrollReveal;
