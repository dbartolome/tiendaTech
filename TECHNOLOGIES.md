# DiegoTech – Stack Tecnológico

## Core

| Tecnología | Versión | Uso |
|-----------|---------|-----|
| **React** | ^18.3.1 | Biblioteca UI principal |
| **TypeScript** | – | Tipado estático en todo el proyecto |
| **Vite** | – | Build tool y dev server (puerto 8080) |

## Estilos y Diseño

| Tecnología | Versión | Uso |
|-----------|---------|-----|
| **Tailwind CSS** | – | Framework de utilidades CSS |
| **tailwindcss-animate** | ^1.0.7 | Animaciones declarativas con Tailwind |
| **shadcn/ui** | – | Componentes UI accesibles (basados en Radix) |
| **class-variance-authority** | ^0.7.1 | Variantes de componentes tipadas |
| **clsx** + **tailwind-merge** | ^2.1.1 / ^2.6.0 | Fusión inteligente de clases |

## Animaciones

| Tecnología | Versión | Uso |
|-----------|---------|-----|
| **framer-motion** | ^12.34.3 | Animaciones de entrada, hover y transiciones de página |

## Navegación

| Tecnología | Versión | Uso |
|-----------|---------|-----|
| **react-router-dom** | ^6.30.1 | Enrutamiento SPA (`/`, `/producto/:id`) |

## Iconos

| Tecnología | Versión | Uso |
|-----------|---------|-----|
| **lucide-react** | ^0.462.0 | Iconos SVG (Zap, ShoppingCart, Star, etc.) |

## Estado y Data Fetching

| Tecnología | Versión | Uso |
|-----------|---------|-----|
| **@tanstack/react-query** | ^5.83.0 | Cache y fetching reactivo (preparado para API) |

## Formularios y Validación

| Tecnología | Versión | Uso |
|-----------|---------|-----|
| **react-hook-form** | ^7.61.1 | Manejo de formularios |
| **@hookform/resolvers** | ^3.10.0 | Integración con esquemas de validación |
| **zod** | ^3.25.76 | Esquemas de validación tipados |

## Componentes Radix UI (vía shadcn)

Todos los componentes interactivos están construidos sobre primitivos de **Radix UI** para garantizar accesibilidad:

- `accordion`, `alert-dialog`, `avatar`, `checkbox`, `collapsible`
- `context-menu`, `dialog`, `dropdown-menu`, `hover-card`
- `label`, `menubar`, `navigation-menu`, `popover`, `progress`
- `radio-group`, `scroll-area`, `select`, `separator`, `slider`
- `switch`, `tabs`, `toast`, `toggle`, `toggle-group`, `tooltip`

## UI Adicional

| Tecnología | Versión | Uso |
|-----------|---------|-----|
| **sonner** | ^1.7.4 | Notificaciones toast modernas |
| **vaul** | ^0.9.9 | Drawers/sheets móviles |
| **cmdk** | ^1.1.1 | Command palette (⌘K) |
| **input-otp** | ^1.4.2 | Inputs de código OTP |
| **embla-carousel-react** | ^8.6.0 | Carruseles táctiles |
| **react-resizable-panels** | ^2.1.9 | Paneles redimensionables |
| **react-day-picker** | ^8.10.1 | Selector de fechas |
| **date-fns** | ^3.6.0 | Utilidades de fechas |
| **recharts** | ^2.15.4 | Gráficos y visualización de datos |

## Temas

| Tecnología | Versión | Uso |
|-----------|---------|-----|
| **next-themes** | ^0.3.0 | Soporte para dark/light mode |

## Testing

| Tecnología | Uso |
|-----------|-----|
| **Vitest** | Runner de tests unitarios |
| **jsdom** | Entorno de DOM simulado para tests |

## Estructura del Proyecto

```
src/
├── assets/           # Imágenes de productos y hero
├── components/
│   ├── ui/           # Componentes shadcn/ui
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── ProductCard.tsx
│   ├── ProductsSection.tsx
│   ├── CategoriesSection.tsx
│   └── Footer.tsx
├── data/
│   └── products.ts   # Datos centralizados de productos
├── hooks/
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── lib/
│   └── utils.ts      # cn() helper
├── pages/
│   ├── Index.tsx
│   ├── ProductDetail.tsx
│   └── NotFound.tsx
├── test/
│   ├── setup.ts
│   └── example.test.ts
├── App.tsx           # Router principal
├── App.css
├── index.css         # Tokens de diseño + utilidades
└── main.tsx          # Entry point
```

## Configuración Clave

| Archivo | Propósito |
|---------|-----------|
| `vite.config.ts` | Config de Vite con alias `@/` |
| `tailwind.config.ts` | Extensiones de tema, colores semánticos, animaciones |
| `tsconfig.json` | TypeScript paths y opciones de compilación |
| `vitest.config.ts` | Config de testing con jsdom |
| `components.json` | Config de shadcn/ui |
| `postcss.config.js` | PostCSS con Tailwind |
