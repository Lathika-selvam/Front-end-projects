export const categories = [
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Beauty",
  "Sports",
  "Books",
];
export const products = [
  {
    id: "elec-1",
    name: "Nova X Pro Smartphone",
    category: "Electronics",
    description:
      "A premium 5G smartphone with a 6.7-inch AMOLED display, 108MP AI camera, Snapdragon processor, and 5000mAh fast-charging battery.",
    price: 899.99,
    rating: 4.9,
    reviewsCount: 245,
    stock: 18,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    specs: {
      Display: "6.7-inch AMOLED",
      Processor: "Snapdragon 8 Gen",
      Camera: "108MP + 12MP + 8MP",
      Battery: "5000mAh",
    },
    featured: true,
  },

  {
    id: "elec-2",
    name: "UltraBook Air Laptop",
    category: "Electronics",
    description:
      "Lightweight performance laptop with Intel Core i7 processor, 16GB RAM, 512GB SSD and a stunning Retina display.",
    price: 1299.99,
    rating: 4.8,
    reviewsCount: 188,
    stock: 10,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80",
    specs: {
      Processor: "Intel Core i7",
      RAM: "16GB",
      Storage: "512GB SSD",
      Display: "15.6-inch Retina",
    },
    featured: true,
  },

  {
    id: "elec-3",
    name: "Pro Gaming Headset",
    category: "Electronics",
    description:
      "Immersive surround sound gaming headset with RGB lighting, noise-cancelling microphone and memory foam ear cushions.",
    price: 149.99,
    rating: 4.7,
    reviewsCount: 132,
    stock: 20,
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80",
    specs: {
      Audio: "7.1 Surround Sound",
      Microphone: "Noise Cancelling",
      Connection: "USB & 3.5mm",
      RGB: "Yes",
    },
    featured: false,
  },

  {
    id: "fash-1",
    name: "Premium Denim Jacket",
    category: "Fashion",
    description:
      "Stylish slim-fit denim jacket made with premium cotton fabric for everyday comfort.",
    price: 89.99,
    rating: 4.8,
    reviewsCount: 102,
    stock: 16,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
    specs: {
      Material: "100% Cotton",
      Fit: "Slim Fit",
      Color: "Blue",
      Wash: "Machine Wash",
    },
    featured: true,
  },

  {
    id: "fash-2",
    name: "Running Sports Shoes",
    category: "Fashion",
    description:
      "Breathable lightweight running shoes with shock-absorbing sole and anti-slip grip.",
    price: 119.99,
    rating: 4.6,
    reviewsCount: 96,
    stock: 28,
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=600&q=80",
    specs: {
      Sole: "Rubber",
      Weight: "290g",
      Material: "Mesh",
      Usage: "Running",
    },
    featured: false,
  },
  {
    id: "fash-3",
    name: "Classic Travel Backpack",
    category: "Fashion",
    description:
      "Modern travel backpack with a padded laptop compartment, USB charging port, and water-resistant fabric.",
    price: 74.99,
    rating: 4.7,
    reviewsCount: 118,
    stock: 22,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    specs: {
      Capacity: "30L",
      Material: "Water Resistant Polyester",
      Laptop: "15.6 inch",
      Weight: "850g",
    },
    featured: false,
  },

  {
    id: "home-1",
    name: "Smart Coffee Maker",
    category: "Home & Kitchen",
    description:
      "Programmable coffee maker with touch controls, timer, and automatic keep-warm function.",
    price: 129.99,
    rating: 4.8,
    reviewsCount: 156,
    stock: 14,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80",
    specs: {
      Capacity: "1.5L",
      Timer: "24 Hours",
      Power: "1000W",
      Display: "Digital LED",
    },
    featured: true,
  },

  {
    id: "home-2",
    name: "Electric Kettle",
    category: "Home & Kitchen",
    description:
      "Fast boiling stainless steel electric kettle with auto shut-off and boil-dry protection.",
    price: 49.99,
    rating: 4.6,
    reviewsCount: 91,
    stock: 25,
    image:
      "https://images.unsplash.com/photo-1517414204284-3c5f7f55f8a8?auto=format&fit=crop&w=600&q=80",
    specs: {
      Capacity: "1.8L",
      Material: "Stainless Steel",
      Power: "1500W",
      Safety: "Auto Shut Off",
    },
    featured: false,
  },

  {
    id: "home-3",
    name: "Modern LED Table Lamp",
    category: "Home & Kitchen",
    description:
      "Minimalist LED desk lamp with adjustable brightness and touch controls.",
    price: 39.99,
    rating: 4.5,
    reviewsCount: 74,
    stock: 30,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80",
    specs: {
      Brightness: "3 Levels",
      Power: "USB",
      Color: "Warm White",
      Control: "Touch",
    },
    featured: false,
  },

  {
    id: "beau-1",
    name: "Vitamin C Face Serum",
    category: "Beauty",
    description:
      "Brightening serum enriched with Vitamin C and Hyaluronic Acid for glowing skin.",
    price: 24.99,
    rating: 4.8,
    reviewsCount: 203,
    stock: 28,
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=600&q=80",
    specs: {
      Volume: "30ml",
      Skin: "All Skin Types",
      Feature: "Paraben Free",
      Usage: "Daily",
    },
    featured: true,
  },

  {
    id: "beau-2",
    name: "SPF 50 Sunscreen",
    category: "Beauty",
    description:
      "Lightweight sunscreen offering broad-spectrum UV protection with a non-greasy finish.",
    price: 19.99,
    rating: 4.7,
    reviewsCount: 144,
    stock: 35,
    image:
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=600&q=80",
    specs: {
      SPF: "50+",
      WaterResistant: "Yes",
      Volume: "50ml",
      Skin: "Sensitive",
    },
    featured: false,
  },
  {
    id: "beau-3",
    name: "Luxury Oud Perfume",
    category: "Beauty",
    description:
      "Premium long-lasting perfume with rich oud, amber, and floral notes for a luxurious fragrance experience.",
    price: 79.99,
    rating: 4.9,
    reviewsCount: 96,
    stock: 18,
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80",
    specs: {
      Volume: "100ml",
      Type: "Eau De Parfum",
      Fragrance: "Oud & Amber",
      Lasting: "12 Hours",
    },
    featured: true,
  },

  {
    id: "spor-1",
    name: "Adjustable Dumbbell Set",
    category: "Sports",
    description:
      "Professional adjustable dumbbell set for home workouts with ergonomic grip and durable steel plates.",
    price: 199.99,
    rating: 4.9,
    reviewsCount: 145,
    stock: 10,
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80",
    specs: {
      Weight: "5kg - 25kg",
      Material: "Steel",
      Grip: "Anti-slip",
      Warranty: "2 Years",
    },
    featured: true,
  },

  {
    id: "spor-2",
    name: "Premium Gym Shaker",
    category: "Sports",
    description:
      "Leak-proof protein shaker bottle with mixing ball and BPA-free plastic construction.",
    price: 18.99,
    rating: 4.6,
    reviewsCount: 122,
    stock: 45,
    image:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=600&q=80",
    specs: {
      Capacity: "700ml",
      Material: "BPA Free",
      LeakProof: "Yes",
      Color: "Black",
    },
    featured: false,
  },

  {
    id: "spor-3",
    name: "Resistance Band Kit",
    category: "Sports",
    description:
      "Complete resistance band set with multiple resistance levels for full-body workouts.",
    price: 34.99,
    rating: 4.8,
    reviewsCount: 110,
    stock: 38,
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80",
    specs: {
      Bands: "5 Levels",
      Material: "Natural Latex",
      Handles: "Foam Grip",
      CarryBag: "Included",
    },
    featured: false,
  },

  {
    id: "book-1",
    name: "Mastering Web Development",
    category: "Books",
    description:
      "A complete guide to HTML, CSS, JavaScript, React, and modern web development practices.",
    price: 29.99,
    rating: 4.8,
    reviewsCount: 280,
    stock: 20,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    specs: {
      Pages: "520",
      Language: "English",
      Publisher: "TechPress",
      Format: "Paperback",
    },
    featured: true,
  },

  {
    id: "book-2",
    name: "Artificial Intelligence Basics",
    category: "Books",
    description:
      "Learn AI, Machine Learning, and Deep Learning concepts with practical real-world examples.",
    price: 34.99,
    rating: 4.7,
    reviewsCount: 198,
    stock: 16,
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    specs: {
      Pages: "460",
      Language: "English",
      Publisher: "AI Publications",
      Format: "Hardcover",
    },
    featured: false,
  },

  {
    id: "book-3",
    name: "Modern UI/UX Design",
    category: "Books",
    description:
      "Learn professional UI/UX design principles, Figma workflows, color theory, and responsive design.",
    price: 26.99,
    rating: 4.9,
    reviewsCount: 170,
    stock: 14,
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
    specs: {
      Pages: "410",
      Language: "English",
      Publisher: "Creative Studio",
      Format: "Paperback",
    },
    featured: true,
  },
];
