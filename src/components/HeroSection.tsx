import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-headphones.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-6 pt-24 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Nuevos lanzamientos 2026
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight">
            El futuro del{" "}
            <span className="text-gradient">sonido</span>{" "}
            ya está aquí
          </h1>

          <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
            Descubre tecnología de vanguardia con diseño premium. Audio inmersivo, wearables inteligentes y más en DiegoTech.
          </p>

          <div className="flex items-center gap-4">
            <a href="#productos" className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all glow-primary">
              Explorar
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#categorías" className="px-8 py-3.5 rounded-xl glass text-sm font-medium text-foreground hover:border-primary/50 transition-colors">
              Categorías
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 pt-4">
            {[
              { value: "500+", label: "Productos" },
              { value: "50k+", label: "Clientes" },
              { value: "4.9★", label: "Valoración" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-1">
                <div className="text-xl font-bold text-gradient">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            <img
              src={heroImage}
              alt="Premium headphones"
              className="w-full max-w-lg rounded-3xl animate-float"
            />
            <div className="absolute inset-0 rounded-3xl glow-primary opacity-20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
