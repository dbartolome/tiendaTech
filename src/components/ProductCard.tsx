import { motion } from "framer-motion";
import { ShoppingCart, Star, Eye } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  rating: number;
  tag?: string;
  index: number;
}

const ProductCard = ({ id, name, price, image, rating, tag, index }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glass rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500"
    >
      <Link to={`/producto/${id}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-secondary/30">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {tag && (
            <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider">
              {tag}
            </span>
          )}
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-semibold">
              <Eye className="w-3.5 h-3.5" />
              Ver detalles
            </span>
          </div>
        </div>
      </Link>
      <div className="p-5 space-y-3">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${i < rating ? "text-primary fill-primary" : "text-muted-foreground/30"}`}
            />
          ))}
        </div>
        <Link to={`/producto/${id}`}>
          <h3 className="font-semibold text-foreground text-sm hover:text-primary transition-colors">{name}</h3>
        </Link>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gradient">{price}</span>
          <button className="p-2.5 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
