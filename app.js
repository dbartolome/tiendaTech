const products = [
  { id: "smartwatch-pro-x", name: "Smartwatch Pro X", price: "€299", image: "./assets/product-watch.jpg", rating: 5, tag: "Nuevo", category: "Wearables", description: "El smartwatch más avanzado del mercado. Pantalla AMOLED de 1.9\" con refresh de 120Hz, sensor de salud de última generación y batería de 7 días. Resistente al agua hasta 50m.", features: ["Pantalla AMOLED 1.9\" 120Hz", "Sensor cardíaco + SpO2 + temperatura", "GPS integrado de doble banda", "Batería de 7 días", "Resistencia al agua 5ATM", "Más de 100 modos deportivos"], specs: [["Pantalla", "1.9\" AMOLED 120Hz"], ["Batería", "580mAh - 7 días"], ["Conectividad", "Bluetooth 5.3 + WiFi"], ["Peso", "45g"], ["Resistencia", "5ATM / IP68"], ["Compatibilidad", "iOS 14+ / Android 10+"]] },
  { id: "airpods-ultra", name: "AirPods Ultra", price: "€199", image: "./assets/product-earbuds.jpg", rating: 4, tag: "Popular", category: "Audio", description: "Auriculares inalámbricos con cancelación de ruido adaptativa, audio espacial personalizado y hasta 30 horas de batería con el estuche. Sonido Hi-Res certificado.", features: ["Cancelación de ruido adaptativa", "Audio espacial personalizado", "30h de batería total", "Certificación Hi-Res Audio", "Resistencia IPX5", "Carga inalámbrica MagSafe"], specs: [["Driver", "11mm dinámico + BA"], ["Batería", "8h + 22h estuche"], ["Conectividad", "Bluetooth 5.3 LE"], ["Peso", "5.4g por auricular"], ["Códecs", "LDAC, AAC, SBC"], ["Resistencia", "IPX5"]] },
  { id: "speaker-neon-bt", name: "Speaker Neon BT", price: "€149", image: "./assets/product-speaker.jpg", rating: 4, category: "Altavoces", description: "Altavoz bluetooth portátil con iluminación LED RGB reactiva, sonido 360° envolvente y hasta 24h de autonomía. Perfecto para cualquier ambiente.", features: ["Sonido 360° envolvente", "LEDs RGB reactivos a la música", "24 horas de batería", "Resistencia IP67", "Emparejamiento estéreo dual", "Micrófono integrado"], specs: [["Potencia", "30W RMS"], ["Batería", "6000mAh - 24h"], ["Conectividad", "Bluetooth 5.2 + AUX"], ["Peso", "680g"], ["Resistencia", "IP67"], ["Frecuencia", "60Hz - 20kHz"]] },
  { id: "mech-keyboard-rgb", name: "Mech Keyboard RGB", price: "€179", image: "./assets/product-keyboard.jpg", rating: 5, tag: "-20%", category: "Periféricos", description: "Teclado mecánico gaming con switches hot-swappable, retroiluminación RGB per-key personalizable y construcción en aluminio CNC. Polling rate de 8000Hz.", features: ["Switches hot-swappable", "RGB per-key 16.8M colores", "Aluminio CNC anodizado", "Polling rate 8000Hz", "N-Key rollover completo", "Espuma de absorción acústica"], specs: [["Switches", "Mecánicos hot-swap"], ["Layout", "75% compacto"], ["Conectividad", "USB-C / Bluetooth / 2.4GHz"], ["Peso", "920g"], ["Material", "Aluminio CNC + PBT"], ["Batería", "4000mAh - 200h"]] },
  { id: "phone-quantum", name: "Phone Quantum", price: "€899", image: "./assets/product-phone.jpg", rating: 5, tag: "Premium", category: "Smartphones", description: "Smartphone de última generación con pantalla Dynamic LTPO de 6.7\", cámara de 200MP con IA avanzada, carga ultrarrápida de 120W y procesador de 4nm.", features: ["Pantalla LTPO 6.7\" 144Hz", "Cámara 200MP con IA", "Carga rápida 120W", "Procesador 4nm Octa-Core", "12GB RAM + 256GB", "Batería 5500mAh"], specs: [["Pantalla", "6.7\" LTPO AMOLED 144Hz"], ["Procesador", "4nm Octa-Core"], ["RAM / Almac.", "12GB / 256GB"], ["Cámara", "200MP + 50MP + 12MP"], ["Batería", "5500mAh - 120W"], ["OS", "Android 16"]] }
];

const categories = [["Audio", 42], ["Smartphones", 28], ["Wearables", 15], ["Periféricos", 36], ["Altavoces", 19], ["Gaming", 53]];
const app = document.getElementById("app");
const stars = (n) => "★".repeat(n) + "☆".repeat(5 - n);

function homeView() {
  app.innerHTML = `
    <section class="hero" id="inicio">
      <div class="container hero-grid">
        <div>
          <span class="badge">Nuevos lanzamientos 2026</span>
          <h1>El futuro del <span class="text-gradient">sonido</span> ya está aquí</h1>
          <p>Descubre tecnología de vanguardia con diseño premium. Audio inmersivo, wearables inteligentes y más en DiegoTech.</p>
          <div class="hero-ctas">
            <a class="btn btn-primary" href="#productos">Explorar</a>
            <a class="btn btn-secondary" href="#categorias">Categorías</a>
          </div>
          <div class="hero-stats">
            <div><strong class="text-gradient">500+</strong><span>Productos</span></div>
            <div><strong class="text-gradient">50k+</strong><span>Clientes</span></div>
            <div><strong class="text-gradient">4.9★</strong><span>Valoración</span></div>
          </div>
        </div>
        <div class="hero-img glass"><img src="./assets/hero-headphones.jpg" alt="Premium headphones" /></div>
      </div>
    </section>

    <section class="section" id="productos">
      <div class="container">
        <div class="section-head">
          <small>Colección</small>
          <h2>Productos <span class="text-gradient">Destacados</span></h2>
          <p>Lo último en tecnología con diseño que marca la diferencia</p>
        </div>
        <div class="product-grid">
          ${products.map((p) => `
            <article class="card glass">
              <a href="#/producto/${p.id}">
                <div class="card-media">
                  <img src="${p.image}" alt="${p.name}" />
                  ${p.tag ? `<span class="tag">${p.tag}</span>` : ""}
                </div>
              </a>
              <div class="card-body">
                <div class="rating">${stars(p.rating)}</div>
                <a href="#/producto/${p.id}"><h3>${p.name}</h3></a>
                <div class="price-row">
                  <span class="price text-gradient">${p.price}</span>
                  <button class="icon-btn" type="button" aria-label="Añadir al carrito">🛒</button>
                </div>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="section" id="categorias">
      <div class="container">
        <div class="section-head">
          <small>Explora</small>
          <h2>Nuestras <span class="text-gradient">Categorías</span></h2>
        </div>
        <div class="category-grid">
          ${categories.map(([name, count]) => `<article class="cat glass"><strong>${name}</strong><span>${count} productos</span></article>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function detailView(id) {
  const product = products.find((p) => p.id === id);
  if (!product) {
    app.innerHTML = `<section class="not-found container"><div><h1>Producto no encontrado</h1><p>No existe un producto con ese identificador.</p><a class="btn btn-primary" href="#/">Volver a la tienda</a></div></section>`;
    return;
  }

  app.innerHTML = `
    <section class="detail">
      <div class="container">
        <a class="back" href="#/">← Volver a la tienda</a>
        <div class="detail-grid">
          <div class="detail-media glass"><img src="${product.image}" alt="${product.name}" /></div>
          <div>
            <span class="kicker">${product.category}</span>
            <h1>${product.name}</h1>
            <p class="rating">${stars(product.rating)} (${product.rating}.0)</p>
            <p class="desc">${product.description}</p>
            <p class="price text-gradient">${product.price}</p>
            <button class="btn btn-primary" type="button">Añadir al carrito</button>
            <ul class="features">${product.features.map((f) => `<li>${f}</li>`).join("")}</ul>
          </div>
        </div>
        <h2>Especificaciones <span class="text-gradient">Técnicas</span></h2>
        <div class="specs glass">${product.specs.map(([k, v]) => `<div class="spec-row"><span>${k}</span><span>${v}</span></div>`).join("")}</div>
      </div>
    </section>
  `;
}

function router() {
  const hash = window.location.hash || "#/";
  const productMatch = hash.match(/^#\/producto\/(.+)$/);
  if (productMatch) return detailView(productMatch[1]);
  homeView();
}

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);
