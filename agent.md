# DiegoTech – Agente de Proyecto

## Descripción del Proyecto

**DiegoTech** es una tienda online de electrónica premium con un diseño oscuro, futurista y altamente visual. La estética se basa en glassmorphismo, gradientes neón (cyan/púrpura) y animaciones fluidas para transmitir una experiencia moderna y de alta gama.

## Identidad de Marca

- **Nombre:** DiegoTech
- **Tagline:** Electrónica Premium
- **Tono visual:** Dark tech / Futurista / Premium
- **Paleta principal:**
  - Primary (cyan): `hsl(190 95% 50%)`
  - Accent (púrpura): `hsl(270 80% 60%)`
  - Background: `hsl(220 20% 4%)`
  - Foreground: `hsl(210 20% 95%)`

## Arquitectura de Páginas

| Ruta | Página | Descripción |
|------|--------|-------------|
| `/` | `Index.tsx` | Landing principal con hero, productos y categorías |
| `/producto/:id` | `ProductDetail.tsx` | Detalle completo de un producto |
| `*` | `NotFound.tsx` | Página 404 |

## Componentes Principales

| Componente | Función |
|-----------|---------|
| `Navbar` | Navegación fija con glassmorphismo, menú móvil y carrito |
| `HeroSection` | Banner principal con imagen flotante, stats y CTA |
| `ProductsSection` | Grid de productos con animaciones de entrada |
| `ProductCard` | Tarjeta individual con hover zoom, rating y badge |
| `CategoriesSection` | Grid de 6 categorías con iconos Lucide |
| `Footer` | Créditos y enlaces secundarios |

## Datos

Los productos se centralizan en `src/data/products.ts` con la interfaz `Product`:

```ts
interface Product {
  id: string;
  name: string;
  price: string;
  priceNum: number;
  image: string;
  rating: number;
  tag?: string;
  category: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
}
```

## Sistema de Diseño

- **Tokens:** Definidos en `src/index.css` como variables CSS HSL
- **Utilidades custom:** `.glass`, `.glow-primary`, `.glow-accent`, `.text-gradient`, `.gradient-border`
- **Animaciones:** `float` (6s), `pulse-glow` (3s) definidas en `tailwind.config.ts`
- **Componentes UI:** Basados en shadcn/ui con variantes personalizadas

## Convenciones de Código

- Usar **siempre** tokens semánticos de Tailwind (`bg-background`, `text-foreground`, `text-primary`, etc.)
- **Nunca** usar colores directos en componentes (`text-white`, `bg-black`, etc.)
- Todos los colores en formato **HSL**
- Componentes funcionales con TypeScript
- Animaciones con `framer-motion`
- Iconos con `lucide-react`
- Rutas con `react-router-dom`

## Productos Actuales

1. **Smartwatch Pro X** – €299 (Wearables)
2. **AirPods Ultra** – €199 (Audio)
3. **Speaker Neon BT** – €149 (Altavoces)
4. **Mech Keyboard RGB** – €179 (Periféricos)
5. **Phone Quantum** – €899 (Smartphones)

## Idioma

Todo el contenido de la tienda está en **español**.
