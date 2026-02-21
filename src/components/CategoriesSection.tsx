import { motion } from "framer-motion";
import { Headphones, Smartphone, Watch, Keyboard, Speaker, Gamepad2 } from "lucide-react";

const categories = [
  { name: "Audio", icon: Headphones, count: 42 },
  { name: "Smartphones", icon: Smartphone, count: 28 },
  { name: "Wearables", icon: Watch, count: 15 },
  { name: "Periféricos", icon: Keyboard, count: 36 },
  { name: "Altavoces", icon: Speaker, count: 19 },
  { name: "Gaming", icon: Gamepad2, count: 53 },
];

const CategoriesSection = () => {
  return (
    <section id="categorías" className="py-24 relative">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Explora
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Nuestras <span className="text-gradient">Categorías</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group glass rounded-2xl p-6 text-center cursor-pointer hover:border-primary/40 hover:glow-primary transition-all duration-500"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <cat.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1">{cat.name}</h3>
              <p className="text-xs text-muted-foreground">{cat.count} productos</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
