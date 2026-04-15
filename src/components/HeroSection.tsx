import { motion } from "framer-motion";
import profileImg from "@/assets/profile-avatar.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(185 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(185 100% 50%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-neon-cyan/5 blur-[120px] animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-neon-purple/5 blur-[120px] animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8 inline-block"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink blur-md opacity-70 animate-spin-slow" />
            <img
              src={profileImg}
              alt="Foto de perfil"
              width={160}
              height={160}
              className="relative w-40 h-40 rounded-full object-cover border-2 border-neon-cyan/30"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-5xl md:text-7xl font-bold mb-3 gradient-text"
        >
          Tu Nombre
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-2xl md:text-3xl font-light text-primary neon-text mb-4"
        >
          Full Stack Developer
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="text-lg text-muted-foreground max-w-xl mx-auto mb-10"
        >
          Desarrollo soluciones web, automatizacion y APIs.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#proyectos" className="btn-neon-solid">
            Ver proyectos
          </a>
          <a href="#contacto" className="btn-neon">
            Contactarme
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
