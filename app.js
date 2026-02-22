const products = [
  { id: "smartwatch-pro-x", name: "Smartwatch Pro X", price: "€299", image: "./assets/product-watch.jpg", rating: 5, tag: "Nuevo", category: "Wearables", description: "El smartwatch más avanzado del mercado. Pantalla AMOLED de 1.9\" con refresh de 120Hz, sensor de salud de última generación y batería de 7 días. Resistente al agua hasta 50m.", features: ["Pantalla AMOLED 1.9\" 120Hz", "Sensor cardíaco + SpO2 + temperatura", "GPS integrado de doble banda", "Batería de 7 días", "Resistencia al agua 5ATM", "Más de 100 modos deportivos"], specs: [["Pantalla", "1.9\" AMOLED 120Hz"], ["Batería", "580mAh - 7 días"], ["Conectividad", "Bluetooth 5.3 + WiFi"], ["Peso", "45g"], ["Resistencia", "5ATM / IP68"], ["Compatibilidad", "iOS 14+ / Android 10+"]] },
  { id: "airpods-ultra", name: "AirPods Ultra", price: "€199", image: "./assets/product-earbuds.jpg", rating: 4, tag: "Popular", category: "Audio", description: "Auriculares inalámbricos con cancelación de ruido adaptativa, audio espacial personalizado y hasta 30 horas de batería con el estuche. Sonido Hi-Res certificado.", features: ["Cancelación de ruido adaptativa", "Audio espacial personalizado", "30h de batería total", "Certificación Hi-Res Audio", "Resistencia IPX5", "Carga inalámbrica MagSafe"], specs: [["Driver", "11mm dinámico + BA"], ["Batería", "8h + 22h estuche"], ["Conectividad", "Bluetooth 5.3 LE"], ["Peso", "5.4g por auricular"], ["Códecs", "LDAC, AAC, SBC"], ["Resistencia", "IPX5"]] },
  { id: "speaker-neon-bt", name: "Speaker Neon BT", price: "€149", image: "./assets/product-speaker.jpg", rating: 4, category: "Altavoces", description: "Altavoz bluetooth portátil con iluminación LED RGB reactiva, sonido 360° envolvente y hasta 24h de autonomía. Perfecto para cualquier ambiente.", features: ["Sonido 360° envolvente", "LEDs RGB reactivos a la música", "24 horas de batería", "Resistencia IP67", "Emparejamiento estéreo dual", "Micrófono integrado"], specs: [["Potencia", "30W RMS"], ["Batería", "6000mAh - 24h"], ["Conectividad", "Bluetooth 5.2 + AUX"], ["Peso", "680g"], ["Resistencia", "IP67"], ["Frecuencia", "60Hz - 20kHz"]] },
  { id: "mech-keyboard-rgb", name: "Mech Keyboard RGB", price: "€179", image: "./assets/product-keyboard.jpg", rating: 5, tag: "-20%", category: "Periféricos", description: "Teclado mecánico gaming con switches hot-swappable, retroiluminación RGB per-key personalizable y construcción en aluminio CNC. Polling rate de 8000Hz.", features: ["Switches hot-swappable", "RGB per-key 16.8M colores", "Aluminio CNC anodizado", "Polling rate 8000Hz", "N-Key rollover completo", "Espuma de absorción acústica"], specs: [["Switches", "Mecánicos hot-swap"], ["Layout", "75% compacto"], ["Conectividad", "USB-C / Bluetooth / 2.4GHz"], ["Peso", "920g"], ["Material", "Aluminio CNC + PBT"], ["Batería", "4000mAh - 200h"]] },
  { id: "phone-quantum", name: "Phone Quantum", price: "€899", image: "./assets/product-phone.jpg", rating: 5, tag: "Premium", category: "Smartphones", description: "Smartphone de última generación con pantalla Dynamic LTPO de 6.7\", cámara de 200MP con IA avanzada, carga ultrarrápida de 120W y procesador de 4nm.", features: ["Pantalla LTPO 6.7\" 144Hz", "Cámara 200MP con IA", "Carga rápida 120W", "Procesador 4nm Octa-Core", "12GB RAM + 256GB", "Batería 5500mAh"], specs: [["Pantalla", "6.7\" LTPO AMOLED 144Hz"], ["Procesador", "4nm Octa-Core"], ["RAM / Almac.", "12GB / 256GB"], ["Cámara", "200MP + 50MP + 12MP"], ["Batería", "5500mAh - 120W"], ["OS", "Android 16"]] }
];


const categories = [["Audio", 42], ["Smartphones", 28], ["Wearables", 15], ["Periféricos", 36], ["Altavoces", 19], ["Gaming", 53]];
const app = document.getElementById("app");
const menuBtn = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const cartBtn = document.getElementById("cartToggle");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const cartItemsNode = document.getElementById("cartItems");
const cartTotalNode = document.getElementById("cartTotal");
const clearCartBtn = document.getElementById("clearCart");
const goCheckoutBtn = document.getElementById("goCheckout");
const cartCloseBtn = document.getElementById("cartClose");
const cartCountNode = document.querySelector(".cart-count");
const CART_KEY = "diegotech_cart_v1";
let cart = JSON.parse(localStorage.getItem(CART_KEY) || "[]");

const stars = (n) => "★".repeat(n) + "☆".repeat(5 - n);
const toAmount = (price) => Number(String(price).replace(/[^\d.]/g, ""));
const formatPrice = (amount) => `€${amount.toFixed(0)}`;

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
                  <button class="icon-btn add-to-cart" data-product-id="${p.id}" type="button" aria-label="Añadir al carrito">🛒</button>
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
            <button class="btn btn-primary add-to-cart" data-product-id="${product.id}" type="button">Añadir al carrito</button>
            <ul class="features">${product.features.map((f) => `<li>${f}</li>`).join("")}</ul>
          </div>
        </div>
        <h2>Especificaciones <span class="text-gradient">Técnicas</span></h2>
        <div class="specs glass">${product.specs.map(([k, v]) => `<div class="spec-row"><span>${k}</span><span>${v}</span></div>`).join("")}</div>
      </div>
    </section>
  `;
}

function checkoutView(confirmed = false) {
  if (confirmed) {
    app.innerHTML = `
      <section class="checkout">
        <div class="container">
          <div class="checkout-success glass">
            <h1>Pedido confirmado</h1>
            <p>Tu compra ficticia se ha registrado correctamente.</p>
            <a class="btn btn-primary" href="#/">Volver a la tienda</a>
          </div>
        </div>
      </section>
    `;
    return;
  }

  if (!cart.length) {
    app.innerHTML = `
      <section class="checkout">
        <div class="container">
          <div class="checkout-empty glass">
            <h1>No hay productos para comprar</h1>
            <p>Tu carrito está vacío. Añade productos antes de continuar.</p>
            <a class="btn btn-primary" href="#/">Ir a productos</a>
          </div>
        </div>
      </section>
    `;
    return;
  }

  app.innerHTML = `
    <section class="checkout">
      <div class="container">
        <a class="back" href="#/">← Volver a la tienda</a>
        <div class="checkout-grid">
          <article class="checkout-summary glass">
            <h2>Resumen de compra</h2>
            <div class="checkout-list">
              ${cart.map((item) => `
                <div class="checkout-item">
                  <div>
                    <p><strong>${item.name}</strong></p>
                    <p class="muted">${item.qty} x ${formatPrice(item.amount)}</p>
                  </div>
                  <p>${formatPrice(item.qty * item.amount)}</p>
                </div>
              `).join("")}
            </div>
            <div class="checkout-total">
              <span>Total</span>
              <strong class="text-gradient">${formatPrice(getCartTotal())}</strong>
            </div>
          </article>

          <article class="checkout-form glass">
            <h2>Datos de envío</h2>
            <form id="checkoutForm" novalidate>
              <label>
                Nombre completo
                <input name="fullName" type="text" required />
              </label>
              <label>
                Email
                <input name="email" type="email" required />
              </label>
              <label>
                Dirección
                <input name="address" type="text" required />
              </label>
              <label>
                Ciudad
                <input name="city" type="text" required />
              </label>
              <label>
                Código postal
                <input name="zip" type="text" required />
              </label>
              <p class="form-error" id="checkoutError" hidden>Completa todos los campos obligatorios para confirmar.</p>
              <button class="btn btn-primary" type="submit">Confirmar pedido</button>
            </form>
          </article>
        </div>
      </div>
    </section>
  `;
}

function router() {
  const hash = window.location.hash || "#/";
  const productMatch = hash.match(/^#\/producto\/(.+)$/);
  const checkoutMatch = hash.match(/^#\/checkout(?:\?(.+))?$/);
  closeMobileMenu();
  if (productMatch) return detailView(productMatch[1]);
  if (checkoutMatch) {
    const params = new URLSearchParams(checkoutMatch[1] || "");
    return checkoutView(params.get("success") === "1");
  }
  homeView();
}

function persistCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function getCartCount() {
  return cart.reduce((acc, item) => acc + item.qty, 0);
}

function getCartTotal() {
  return cart.reduce((acc, item) => acc + item.qty * item.amount, 0);
}

function updateCartCount() {
  cartCountNode.textContent = String(getCartCount());
}

function renderCartItems() {
  if (!cart.length) {
    cartItemsNode.innerHTML = `<div class="cart-empty">Tu carrito está vacío.</div>`;
    cartTotalNode.textContent = formatPrice(0);
    updateCartCount();
    return;
  }

  cartItemsNode.innerHTML = cart.map((item) => `
    <article class="cart-item">
      <img src="${item.image}" alt="${item.name}" />
      <div>
        <p><strong>${item.name}</strong></p>
        <p class="muted">${item.qty} x ${formatPrice(item.amount)}</p>
      </div>
      <button class="icon-btn remove-from-cart" data-product-id="${item.id}" type="button" aria-label="Quitar del carrito">🗑</button>
    </article>
  `).join("");

  cartTotalNode.textContent = formatPrice(getCartTotal());
  updateCartCount();
}

function openCart() {
  cartDrawer.classList.add("is-open");
  cartDrawer.setAttribute("aria-hidden", "false");
  cartOverlay.hidden = false;
}

function closeCart() {
  cartDrawer.classList.remove("is-open");
  cartDrawer.setAttribute("aria-hidden", "true");
  cartOverlay.hidden = true;
}

function closeMobileMenu() {
  if (!navLinks || !menuBtn) return;
  navLinks.classList.remove("is-open");
  menuBtn.setAttribute("aria-expanded", "false");
}

function toggleMobileMenu() {
  if (!navLinks || !menuBtn) return;
  const isOpen = navLinks.classList.toggle("is-open");
  menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      image: product.image,
      qty: 1,
      amount: toAmount(product.price)
    });
  }

  persistCart();
  renderCartItems();
  openCart();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  persistCart();
  renderCartItems();
}

function clearCart() {
  cart = [];
  persistCart();
  renderCartItems();
}

app.addEventListener("click", (event) => {
  const addBtn = event.target.closest(".add-to-cart");
  if (addBtn) {
    addToCart(addBtn.dataset.productId);
    return;
  }

  const removeBtn = event.target.closest(".remove-from-cart");
  if (removeBtn) removeFromCart(removeBtn.dataset.productId);
});

app.addEventListener("submit", (event) => {
  const form = event.target.closest("#checkoutForm");
  if (!form) return;

  event.preventDefault();
  const formData = new FormData(form);
  const requiredFields = ["fullName", "email", "address", "city", "zip"];
  const hasMissingData = requiredFields.some((field) => !String(formData.get(field) || "").trim());
  const errorNode = document.getElementById("checkoutError");

  if (hasMissingData) {
    if (errorNode) errorNode.hidden = false;
    return;
  }

  cart = [];
  persistCart();
  renderCartItems();
  closeCart();
  window.location.hash = "#/checkout?success=1";
});

cartBtn.addEventListener("click", openCart);
cartCloseBtn.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);
clearCartBtn.addEventListener("click", clearCart);
if (goCheckoutBtn) {
  goCheckoutBtn.addEventListener("click", () => {
    closeCart();
    window.location.hash = "#/checkout";
  });
}
if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", toggleMobileMenu);
  navLinks.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMobileMenu();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 920) closeMobileMenu();
  });
}

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", () => {
  router();
  renderCartItems();
});
