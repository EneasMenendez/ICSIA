const productos = [
  {
    id: 1,
    nombre: "Smartwatch Pro X",
    vendedor: {
      nombre: "ElectroHub",
      rating: 4.8,
    },
    imagenes: [
      "https://picsum.photos/200/200?random=1",
      "https://picsum.photos/200/200?random=2",
    ],
    enStock: true,
    precio: {
      moneda: "€",
      valor: 215.5,
      enOferta: true,
    },
    caracteristicas: [
      "GPS integrado",
      "Monitor de ritmo cardíaco",
      "Resistente al agua (5 ATM)",
    ],
  },
  {
    id: 2,
    nombre: "Auriculares NoiseFree 3000",
    vendedor: {
      nombre: "SoundMax",
      rating: 4.6,
    },
    imagenes: [
      "https://picsum.photos/200/200?random=3",
      "https://picsum.photos/200/200?random=4",
    ],
    enStock: false,
    precio: {
      moneda: "€",
      valor: 149.99,
      enOferta: false,
    },
    caracteristicas: [
      "Cancelación activa de ruido",
      "20 horas de batería",
      "Bluetooth 5.3",
    ],
  },
  {
    id: 3,
    nombre: "Tablet VisionTab 10",
    vendedor: {
      nombre: "TechWorld",
      rating: 4.3,
    },
    imagenes: [
      "https://picsum.photos/200/200?random=5",
      "https://picsum.photos/200/200?random=6",
    ],
    enStock: true,
    precio: {
      moneda: "€",
      valor: 299.99,
      enOferta: false,
    },
    caracteristicas: [
      "Pantalla 10.5'' Full HD",
      "64 GB de almacenamiento",
      "Procesador Octa-Core",
    ],
  },
];

export default productos;
