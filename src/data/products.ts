import productWatch from "@/assets/product-watch.jpg";
import productEarbuds from "@/assets/product-earbuds.jpg";
import productSpeaker from "@/assets/product-speaker.jpg";
import productKeyboard from "@/assets/product-keyboard.jpg";
import productPhone from "@/assets/product-phone.jpg";

export interface Product {
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

export const products: Product[] = [
  {
    id: "smartwatch-pro-x",
    name: "Smartwatch Pro X",
    price: "€299",
    priceNum: 299,
    image: productWatch,
    rating: 5,
    tag: "Nuevo",
    category: "Wearables",
    description: "El smartwatch más avanzado del mercado. Pantalla AMOLED de 1.9\" con refresh de 120Hz, sensor de salud de última generación y batería de 7 días. Resistente al agua hasta 50m.",
    features: [
      "Pantalla AMOLED 1.9\" 120Hz",
      "Sensor cardíaco + SpO2 + temperatura",
      "GPS integrado de doble banda",
      "Batería de 7 días",
      "Resistencia al agua 5ATM",
      "Más de 100 modos deportivos",
    ],
    specs: [
      { label: "Pantalla", value: "1.9\" AMOLED 120Hz" },
      { label: "Batería", value: "580mAh – 7 días" },
      { label: "Conectividad", value: "Bluetooth 5.3 + WiFi" },
      { label: "Peso", value: "45g" },
      { label: "Resistencia", value: "5ATM / IP68" },
      { label: "Compatibilidad", value: "iOS 14+ / Android 10+" },
    ],
  },
  {
    id: "airpods-ultra",
    name: "AirPods Ultra",
    price: "€199",
    priceNum: 199,
    image: productEarbuds,
    rating: 4,
    tag: "Popular",
    category: "Audio",
    description: "Auriculares inalámbricos con cancelación de ruido adaptativa, audio espacial personalizado y hasta 30 horas de batería con el estuche. Sonido Hi-Res certificado.",
    features: [
      "Cancelación de ruido adaptativa",
      "Audio espacial personalizado",
      "30h de batería total",
      "Certificación Hi-Res Audio",
      "Resistencia IPX5",
      "Carga inalámbrica MagSafe",
    ],
    specs: [
      { label: "Driver", value: "11mm dinámico + BA" },
      { label: "Batería", value: "8h + 22h estuche" },
      { label: "Conectividad", value: "Bluetooth 5.3 LE" },
      { label: "Peso", value: "5.4g por auricular" },
      { label: "Códecs", value: "LDAC, AAC, SBC" },
      { label: "Resistencia", value: "IPX5" },
    ],
  },
  {
    id: "speaker-neon-bt",
    name: "Speaker Neon BT",
    price: "€149",
    priceNum: 149,
    image: productSpeaker,
    rating: 4,
    category: "Altavoces",
    description: "Altavoz bluetooth portátil con iluminación LED RGB reactiva, sonido 360° envolvente y hasta 24h de autonomía. Perfecto para cualquier ambiente.",
    features: [
      "Sonido 360° envolvente",
      "LEDs RGB reactivos a la música",
      "24 horas de batería",
      "Resistencia IP67",
      "Emparejamiento estéreo dual",
      "Micrófono integrado",
    ],
    specs: [
      { label: "Potencia", value: "30W RMS" },
      { label: "Batería", value: "6000mAh – 24h" },
      { label: "Conectividad", value: "Bluetooth 5.2 + AUX" },
      { label: "Peso", value: "680g" },
      { label: "Resistencia", value: "IP67" },
      { label: "Frecuencia", value: "60Hz – 20kHz" },
    ],
  },
  {
    id: "mech-keyboard-rgb",
    name: "Mech Keyboard RGB",
    price: "€179",
    priceNum: 179,
    image: productKeyboard,
    rating: 5,
    tag: "-20%",
    category: "Periféricos",
    description: "Teclado mecánico gaming con switches hot-swappable, retroiluminación RGB per-key personalizable y construcción en aluminio CNC. Polling rate de 8000Hz.",
    features: [
      "Switches hot-swappable",
      "RGB per-key 16.8M colores",
      "Aluminio CNC anodizado",
      "Polling rate 8000Hz",
      "N-Key rollover completo",
      "Espuma de absorción acústica",
    ],
    specs: [
      { label: "Switches", value: "Mecánicos hot-swap" },
      { label: "Layout", value: "75% compacto" },
      { label: "Conectividad", value: "USB-C / Bluetooth / 2.4GHz" },
      { label: "Peso", value: "920g" },
      { label: "Material", value: "Aluminio CNC + PBT" },
      { label: "Batería", value: "4000mAh – 200h" },
    ],
  },
  {
    id: "phone-quantum",
    name: "Phone Quantum",
    price: "€899",
    priceNum: 899,
    image: productPhone,
    rating: 5,
    tag: "Premium",
    category: "Smartphones",
    description: "Smartphone de última generación con pantalla Dynamic LTPO de 6.7\", cámara de 200MP con IA avanzada, carga ultrarrápida de 120W y procesador de 4nm.",
    features: [
      "Pantalla LTPO 6.7\" 144Hz",
      "Cámara 200MP con IA",
      "Carga rápida 120W",
      "Procesador 4nm Octa-Core",
      "12GB RAM + 256GB",
      "Batería 5500mAh",
    ],
    specs: [
      { label: "Pantalla", value: "6.7\" LTPO AMOLED 144Hz" },
      { label: "Procesador", value: "4nm Octa-Core" },
      { label: "RAM / Almac.", value: "12GB / 256GB" },
      { label: "Cámara", value: "200MP + 50MP + 12MP" },
      { label: "Batería", value: "5500mAh – 120W" },
      { label: "OS", value: "Android 16" },
    ],
  },
];
