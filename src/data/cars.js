export const brands = [
  {
    id: "lamborghini",
    name: "Lamborghini",
    logoText: "LAMBORGHINI",
    description: "Automobili Lamborghini S.p.A. is an Italian brand and manufacturer of luxury sports cars and SUVs.",
    accentColor: "#f39c12", // Yellow-orange
  },
  {
    id: "bmw",
    name: "BMW",
    logoText: "B M W",
    description: "Bayerische Motoren Werke AG, commonly referred to as BMW, is a German multinational corporate manufacturer of luxury vehicles and motorcycles headquartered in Munich, Bavaria, Germany.",
    accentColor: "#0066b2", // BMW Blue
  },
  {
    id: "porsche",
    name: "Porsche",
    logoText: "PORSCHE",
    description: "Dr. Ing. h.c. F. Porsche AG, usually shortened to Porsche, is a German automobile manufacturer specializing in high-performance sports cars, SUVs and sedans.",
    accentColor: "#d32f2f", // Red
  },
  {
    id: "ferrari",
    name: "Ferrari",
    logoText: "FERRARI",
    description: "Ferrari S.p.A. is an Italian luxury sports car manufacturer based in Maranello.",
    accentColor: "#cc0000", // Ferrari Red
  }
];

export const cars = [
  // Lamborghini
  {
    id: "aventador",
    brandId: "lamborghini",
    name: "Aventador SVJ",
    tagline: "Relentless Power",
    description: "The Aventador SVJ is the most innovative model of the Aventador family. A track-focused hypercar with a V12 engine that roars like no other.",
    specs: {
      topSpeed: "350 km/h",
      "0-100": "2.8s",
      power: "770 CV",
      torque: "720 Nm",
      engine: "6.5L V12 Naturally Aspirated",
      mileage: "4.5 kmpl",
      showroomPrice: "₹ 6.25 Crore",
      onRoadPrice: "₹ 7.20 Crore"
    },
    features: [
      "Carbon Fiber Monocoque",
      "ALA 2.0 Active Aerodynamics",
      "Four-Wheel Steering",
      "Carbon Ceramic Brakes"
    ],
    // We will use generate_image to get these later, or abstract standard placeholders
    image: "/mockImage/aventador_svj.png",
    modelPath: "/models/aventador_svj.glb", // User-provided 3D model path
    color: "#e67e22",
    popularity: 98,
    priceValue: 6.25
  },
  {
    id: "huracan",
    brandId: "lamborghini",
    name: "Huracán EVO",
    tagline: "Everyday Perfection",
    description: "The Huracán EVO is the evolution of the most successful V10-powered Lamborghini ever. The result of fine-tuning and refining existing features and performance.",
    specs: {
      topSpeed: "325 km/h",
      "0-100": "2.9s",
      power: "640 CV",
      torque: "600 Nm",
      engine: "5.2L V10 Naturally Aspirated",
      mileage: "7.1 kmpl",
      showroomPrice: "₹ 3.22 Crore",
      onRoadPrice: "₹ 3.75 Crore"
    },
    features: [
      "LDVI Integrated Vehicle Dynamics",
      "Aerodynamic Torque Vectoring",
      "Magneto-rheological Suspension",
      "Carbon Ceramic Brakes"
    ],
    image: "/mockImage/huracan_evo.png",
    modelPath: "/models/huracan.glb",
    color: "#27ae60",
    popularity: 85,
    priceValue: 3.22
  },
  {
    id: "urus",
    brandId: "lamborghini",
    name: "Urus Performante",
    tagline: "For Bar Raisers",
    description: "The Urus Performante takes the visionary concept of the world's first Super Sport Utility Vehicle and makes it far more visceral, thrilling, and agile.",
    specs: {
      topSpeed: "306 km/h",
      "0-100": "3.3s",
      power: "666 CV",
      torque: "850 Nm",
      engine: "4.0L V8 Twin-Turbo",
      mileage: "7.8 kmpl",
      showroomPrice: "₹ 4.22 Crore",
      onRoadPrice: "₹ 4.88 Crore"
    },
    features: [
      "Air Suspension with Active Damping",
      "ANIMA Selector with Off-Road Modes",
      "Active Torque Vectoring",
      "Carbon Ceramic Brakes"
    ],
    image: "/mockImage/urus.png",
    modelPath: "/models/urus.glb",
    color: "#f1c40f",
    popularity: 92,
    priceValue: 4.22
  },

  // BMW
  {
    id: "m4",
    brandId: "bmw",
    name: "BMW M4 Competition",
    tagline: "The Ultimate Driving Machine",
    description: "The new BMW M4 Competition Coupe is a pure driver's car. It combines track-developed motorsport technology with everyday utility.",
    specs: {
      topSpeed: "290 km/h",
      "0-100": "3.9s",
      power: "510 HP",
      torque: "650 Nm",
      engine: "3.0L TwinPower Turbo Inline-6",
      mileage: "9.7 kmpl",
      showroomPrice: "₹ 1.53 Crore",
      onRoadPrice: "₹ 1.80 Crore"
    },
    features: [
      "M xDrive All-Wheel Drive",
      "M Sport Differential",
      "Adaptive M Suspension",
      "M Carbon Bucket Seats"
    ],
    image: "/mockImage/bmw_m4.png",
    modelPath: "/models/m4.glb",
    color: "#e1e1e1",
    popularity: 78,
    priceValue: 1.53
  },
  {
    id: "i8",
    brandId: "bmw",
    name: "BMW i8",
    tagline: "First of a new Era",
    description: "The BMW i8 is a plug-in hybrid sports car. It represents a new era of sustainable performance with stunning futuristic design.",
    specs: {
      topSpeed: "250 km/h",
      "0-100": "4.4s",
      power: "369 HP",
      torque: "570 Nm",
      engine: "1.5L Turbo 3-cyl + Electric Motor",
      mileage: "47.45 kmpl",
      showroomPrice: "₹ 2.62 Crore",
      onRoadPrice: "₹ 2.95 Crore"
    },
    features: [
      "Carbon Fiber Reinforced Plastic (CFRP) Cell",
      "Plug-in Hybrid eDrive Technology",
      "Laserlight Headlights",
      "Scissor Doors"
    ],
    image: "/mockImage/bmw_i8.png",
    modelPath: "/models/i8.glb",
    color: "#bdc3c7",
    popularity: 65,
    priceValue: 2.62
  },
  {
    id: "m8",
    brandId: "bmw",
    name: "BMW M8 Gran Coupe",
    tagline: "Luxury meets Motorsport",
    description: "An exceptional presence: The BMW M8 Competition Gran Coupé combines the spaciousness of a luxury sports car with high-performance characteristics.",
    specs: {
      topSpeed: "305 km/h",
      "0-100": "3.2s",
      power: "625 HP",
      torque: "750 Nm",
      engine: "4.4L TwinPower Turbo V8",
      mileage: "6.5 kmpl",
      showroomPrice: "₹ 2.44 Crore",
      onRoadPrice: "₹ 2.80 Crore"
    },
    features: [
      "M xDrive with 2WD Mode",
      "Active M Differential",
      "M Carbon Roof",
      "M Sport Exhaust System"
    ],
    image: "/mockImage/bmw_m8.png",
    modelPath: "/models/m8.glb",
    color: "#2c3e50",
    popularity: 72,
    priceValue: 2.44
  },

  // Porsche
  {
    id: "911",
    brandId: "porsche",
    name: "Porsche 911 GT3",
    tagline: "Carved from Motorsport",
    description: "The 911 GT3 offers motorsport-derived technology in a production model. Pure driving dynamics, maximum downforce, and naturally aspirated power.",
    specs: {
      topSpeed: "318 km/h",
      "0-100": "3.4s",
      power: "510 PS",
      torque: "470 Nm",
      engine: "4.0L Flat-Six Naturally Aspirated",
      mileage: "9.0 kmpl",
      showroomPrice: "₹ 2.75 Crore",
      onRoadPrice: "₹ 3.10 Crore"
    },
    features: [
      "Double-Wishbone Front Axle",
      "Swan Neck Rear Wing",
      "Rear-Axle Steering",
      "Porsche Ceramic Composite Brake (PCCB)"
    ],
    image: "/mockImage/porsche_911.jpg",
    modelPath: "/models/911.glb",
    color: "#2980b9",
    popularity: 88,
    priceValue: 2.75
  },
  {
    id: "taycan",
    brandId: "porsche",
    name: "Porsche Taycan Turbo S",
    tagline: "Soul, Electrified.",
    description: "The Taycan is the pure expression of a Porsche electric sports car. Striking proportions, timeless and instantly recognizable design.",
    specs: {
      topSpeed: "260 km/h",
      "0-100": "2.8s",
      power: "761 PS",
      torque: "1,050 Nm",
      engine: "Dual Electric Motor",
      mileage: "390 km/charge",
      showroomPrice: "₹ 2.43 Crore",
      onRoadPrice: "₹ 2.60 Crore"
    },
    features: [
      "800-Volt Architecture",
      "Porsche Advanced Aerodynamics",
      "Adaptive Air Suspension",
      "Porsche Electric Sport Sound"
    ],
    image: "/mockImage/porsche_taycan.jpg",
    modelPath: "/models/taycan.glb",
    color: "#ffffff",
    popularity: 91,
    priceValue: 2.43
  },

  // Ferrari
  {
    id: "sf90",
    brandId: "ferrari",
    name: "Ferrari SF90 Stradale",
    tagline: "Beyond Imagination",
    description: "The SF90 Stradale is the first ever Ferrari to feature PHEV (Plug-in Hybrid Electric Vehicle) architecture which sees the internal combustion engine integrated with three electric motors.",
    specs: {
      topSpeed: "340 km/h",
      "0-100": "2.5s",
      power: "1000 cv",
      torque: "800 Nm",
      engine: "4.0L Twin-Turbo V8 + 3 Electric Motors",
      mileage: "16.0 kmpl",
      showroomPrice: "₹ 7.50 Crore",
      onRoadPrice: "₹ 8.60 Crore"
    },
    features: [
      "eManettino Driving Modes",
      "Plug-in Hybrid Architecture",
      "RAC-e Electric Front Axle",
      "Carbon Fiber Underbody"
    ],
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    modelPath: "/models/sf90.glb",
    color: "#c0392b",
    popularity: 95,
    priceValue: 7.50
  },
  {
    id: "f8",
    brandId: "ferrari",
    name: "Ferrari F8 Tributo",
    tagline: "A Celebration of Excellence",
    description: "The F8 Tributo is the new mid-rear-engined sports car that represents the highest expression of the Prancing Horse's classic two-seater berlinetta.",
    specs: {
      topSpeed: "340 km/h",
      "0-100": "2.9s",
      power: "720 cv",
      torque: "770 Nm",
      engine: "3.9L Twin-Turbo V8",
      mileage: "7.7 kmpl",
      showroomPrice: "₹ 4.02 Crore",
      onRoadPrice: "₹ 4.60 Crore"
    },
    features: [
      "S-Duct Aerodynamics",
      "Side Slip Control 6.1",
      "Ferrari Dynamic Enhancer Plus",
      "Titanium Exhaust System"
    ],
    image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    modelPath: "/models/f8.glb",
    color: "#e74c3c",
    popularity: 82,
    priceValue: 4.02
  }
];
