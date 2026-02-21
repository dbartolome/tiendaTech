import ProductCard from "./ProductCard";
import { products } from "@/data/products";

const ProductsSection = () => {
  return (
    <section id="productos" className="py-24 relative">
      <div className="absolute top-0 left-1/2 w-72 h-72 bg-accent/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Colección
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Productos <span className="text-gradient">Destacados</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Lo último en tecnología con diseño que marca la diferencia
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} {...product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
