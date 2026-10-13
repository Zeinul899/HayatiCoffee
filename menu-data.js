/**
 * HAYATI COFFEE ROASTER — OFFICIAL MENU DATA
 */

const HAYATI_MENU_DATA = [
  // 1. COFFEE BASED & SIGNATURE COFFEE
  {
    id: "hayati-punya-es-kopi",
    category: "Coffee Based & Signature",
    name: "Hayati Punya Es Kopi",
    description: "Full Arabica Signature house blend dengan racikan susu segar dan gula aren spesial.",
    price: 28000,
    priceDisplay: "Rp 28.000",
    badge: "Signature"
  },
  {
    id: "es-kopi-kokonut",
    category: "Coffee Based & Signature",
    name: "Es Kopi Kokonut",
    description: "Signature tropical flavour, perpaduan espresso bold dengan sentuhan kelapa gurih.",
    price: 28000,
    priceDisplay: "Rp 28.000",
    badge: "Popular"
  },
  {
    id: "es-kopi-regal",
    category: "Coffee Based & Signature",
    name: "Es Kopi Regal",
    description: "Kopi susu creamy berpadu biskuit Marie Regal renyah yang manis gurih.",
    price: 32000,
    priceDisplay: "Rp 32.000",
    badge: ""
  },
  {
    id: "cappuccino-latte",
    category: "Coffee Based & Signature",
    name: "Cappuccino / Latte",
    description: "Espresso murni dengan steamed milk bertekstur microfoam halus. Tersedia panas atau dingin.",
    price: 30000,
    priceDisplay: "Rp 30.000",
    badge: "Classic"
  },
  {
    id: "americano-long-black",
    category: "Coffee Based & Signature",
    name: "Americano / Long Black",
    description: "Double shot espresso berkualitas dengan air mineral segar. Bersih, berani, tanpa gula.",
    price: 24000,
    priceDisplay: "Rp 24.000",
    badge: ""
  },
  {
    id: "rose-latte",
    category: "Coffee Based & Signature",
    name: "Rose Latte",
    description: "Sentuhan floral sirup mawar berpadu espresso dan susu kukus lembut.",
    price: 32000,
    priceDisplay: "Rp 32.000",
    badge: ""
  },
  {
    id: "honey-latte",
    category: "Coffee Based & Signature",
    name: "Honey Latte",
    description: "Pemanis alami madu murni yang melembutkan rasa espresso dan susu.",
    price: 32000,
    priceDisplay: "Rp 32.000",
    badge: ""
  },
  {
    id: "mochaccino",
    category: "Coffee Based & Signature",
    name: "Mochaccino",
    description: "Perpaduan kaya cokelat artisanal dan espresso dengan susu segar creamy.",
    price: 38000,
    priceDisplay: "Rp 38.000",
    badge: ""
  },
  {
    id: "oat-latte",
    category: "Coffee Based & Signature",
    name: "Oat Latte",
    description: "Espresso pilihan dengan susu oat premium plant-based yang lembut dan gurih alami.",
    price: 38000,
    priceDisplay: "Rp 38.000",
    badge: "Plant-Based"
  },
  {
    id: "choco-nougat-coffee",
    category: "Coffee Based & Signature",
    name: "Choco Nougat Coffee",
    description: "Kopi susu dengan sensasi manis gurih cokelat kacang nougat.",
    price: 32000,
    priceDisplay: "Rp 32.000",
    badge: ""
  },
  {
    id: "dirty-latte",
    category: "Coffee Based & Signature",
    name: "Dirty Latte",
    description: "Double ristretto hangat dituangkan di atas susu dingin kental tanpa diaduk.",
    price: 27500,
    priceDisplay: "Rp 27.500",
    badge: ""
  },

  // 2. COFFEE MOCKTAIL & COLD BREW
  {
    id: "cranberry-mocktail",
    category: "Coffee Mocktail & Cold Brew",
    name: "Cranberry Mocktail",
    description: "Racikan mocktail kopi segar dengan sentuhan asam manis jus kranberi.",
    price: 32000,
    priceDisplay: "Rp 32.000",
    badge: "Refreshing"
  },
  {
    id: "black-rose",
    category: "Coffee Mocktail & Cold Brew",
    name: "Black Rose",
    description: "Ice Americano dengan paduan rose syrup aromatik dan madu murni segar.",
    price: 32000,
    priceDisplay: "Rp 32.000",
    badge: ""
  },
  {
    id: "mix-berries-cream",
    category: "Coffee Mocktail & Cold Brew",
    name: "Mix Berries Cream",
    description: "Overnight cold brew dengan sirup berry dan lapisan strawberry cream lembut di atasnya.",
    price: 32000,
    priceDisplay: "Rp 32.000",
    badge: "Favorite"
  },
  {
    id: "gingerbread-salted-caramel",
    category: "Coffee Mocktail & Cold Brew",
    name: "Gingerbread Salted Caramel Cold Brew",
    description: "Seduhan dingin beraroma rempah hangat gingerbread dan sirup salted caramel.",
    price: 32000,
    priceDisplay: "Rp 32.000",
    badge: ""
  },
  {
    id: "under-the-mistletoe",
    category: "Coffee Mocktail & Cold Brew",
    name: "Under The Mistletoe",
    description: "Cold brew dipadukan rempah karamel dan krim kelapa gurih yang khas.",
    price: 32000,
    priceDisplay: "Rp 32.000",
    badge: ""
  },
  {
    id: "fatburner",
    category: "Coffee Mocktail & Cold Brew",
    name: "FatBurner",
    description: "Kombinasi tegas espresso, perasan lemon segar, dan soda bersoda menyegarkan.",
    price: 32000,
    priceDisplay: "Rp 32.000",
    badge: "Bold"
  },

  // 3. NON-COFFEE & TEA
  {
    id: "chocolatte",
    category: "Non-Coffee & Tea",
    name: "Chocolatte",
    description: "Cokelat murni kualitas tinggi dengan susu segar kental. Tersedia panas atau dingin.",
    price: 32000,
    priceDisplay: "Rp 32.000",
    badge: ""
  },
  {
    id: "green-tea-latte",
    category: "Non-Coffee & Tea",
    name: "Green Tea Latte",
    description: "Matcha hijau asli Jepang dengan kelembutan susu kukus manis seimbang.",
    price: 32000,
    priceDisplay: "Rp 32.000",
    badge: ""
  },
  {
    id: "summer-bliss",
    category: "Non-Coffee & Tea",
    name: "Summer Bliss",
    description: "Artisan black tea dengan kesegaran cranberry juice dan madu alami.",
    price: 32000,
    priceDisplay: "Rp 32.000",
    badge: "Fresh"
  },
  {
    id: "black-mint-tea",
    category: "Non-Coffee & Tea",
    name: "Black Mint Tea",
    description: "Premium black tea berpadu jus buah delima (pomegranate) dan daun mint segar.",
    price: 32000,
    priceDisplay: "Rp 32.000",
    badge: ""
  },
  {
    id: "lychee-ice-tea",
    category: "Non-Coffee & Tea",
    name: "Lychee Ice Tea",
    description: "Teh melati dingin dengan sirup dan buah leci manis menyegarkan.",
    price: 27000,
    priceDisplay: "Rp 27.000",
    badge: ""
  },
  {
    id: "ice-tea-mineral-water",
    category: "Non-Coffee & Tea",
    name: "Ice Tea / Mineral Water",
    description: "Pilihan es teh tawar/manis atau air mineral murni berkualitas.",
    price: 15000,
    priceDisplay: "Rp 15.000",
    badge: ""
  },

  // 4. FOOD & HEAVY MEALS
  {
    id: "chicken-sambal-matah",
    category: "Food & Heavy Meals",
    name: "Chicken Sambal Matah Rice Bowl",
    description: "Nasi hangat dengan ayam goreng renyah dan racikan sambal matah khas Bali segar pedas.",
    price: 34000,
    priceDisplay: "Rp 34.000",
    badge: "Best Seller"
  },
  {
    id: "salted-egg-chicken",
    category: "Food & Heavy Meals",
    name: "Salted Egg Chicken Hayati",
    description: "Potongan ayam krispi berbalur saus telur asin gurih melimpah khas Hayati.",
    price: 34000,
    priceDisplay: "Rp 34.000",
    badge: ""
  },
  {
    id: "teriyaki-blackpepper-katsu",
    category: "Food & Heavy Meals",
    name: "Teriyaki / Blackpepper Chicken Katsu",
    description: "Chicken katsu gurih dengan pilihan saus teriyaki manis atau lada hitam hangat.",
    price: 34000,
    priceDisplay: "Rp 34.000",
    badge: ""
  },
  {
    id: "chicken-curry-mushroom",
    category: "Food & Heavy Meals",
    name: "Chicken Curry / Mushroom Chicken Rice",
    description: "Nasi ayam bumbu kari Jepang gurih atau saus jamur lembut kaya rempah.",
    price: 34000,
    priceDisplay: "Rp 34.000",
    badge: ""
  },
  {
    id: "katsu-mentai-rice",
    category: "Food & Heavy Meals",
    name: "Katsu Mentai Rice",
    description: "Ayam katsu renyah dengan lumuran saus mentai bakar gurih creamy di atas nasi hangat.",
    price: 37000,
    priceDisplay: "Rp 37.000",
    badge: ""
  },
  {
    id: "chicken-schnitzel",
    category: "Food & Heavy Meals",
    name: "Chicken Schnitzel",
    description: "Fillet ayam tepung keemasan disajikan dengan potato wedges dan mushroom sauce kental.",
    price: 47000,
    priceDisplay: "Rp 47.000",
    badge: ""
  },
  {
    id: "chicken-steak-mushroom",
    category: "Food & Heavy Meals",
    name: "Chicken Steak with Mushroom Sauce",
    description: "Steak ayam panggang juicy dengan saus jamur khas Eropa dan pelengkap sayuran.",
    price: 47000,
    priceDisplay: "Rp 47.000",
    badge: ""
  },
  {
    id: "spaghetti-pasta",
    category: "Food & Heavy Meals",
    name: "Spaghetti (Carbonara / Bolognaise / Aglio Olio)",
    description: "Pasta al dente Italia dengan pilihan saus krim carbonara, daging bolognaise, atau aglio olio gurih.",
    price: 35000,
    priceDisplay: "Rp 35.000",
    badge: "Popular"
  },
  {
    id: "crispy-mushroom-snacks",
    category: "Food & Heavy Meals",
    name: "Crispy Mushroom / Snacks",
    description: "Camilan jamur goreng tepung krispi dengan bumbu tabur gurih teman santai ngopi.",
    price: 24000,
    priceDisplay: "Rp 24.000",
    badge: ""
  },
  {
    id: "dragon-fruit-smoothies",
    category: "Food & Heavy Meals",
    name: "Dragon Fruit Smoothies Bowl",
    description: "Semangkuk smoothie buah naga segar dengan taburan granola, biji chia, dan buah potong.",
    price: 45000,
    priceDisplay: "Rp 45.000",
    badge: "Healthy"
  },

  // 5. BIJI KOPI BEANS (SINGLE ORIGIN SPECIALTY ROASTERY)
  {
    id: "beans-argopuro",
    category: "Biji Kopi Beans",
    name: "Argopuro Lychee Sorbet",
    description: "Proses Anaerob Natural. Tasting notes: Sweet Lychee, Sorbet, White Floral, Syrupy Body.",
    price: 92000,
    priceDisplay: "Rp 92.000",
    badge: "Anaerob Natural"
  },
  {
    id: "beans-halu-mango",
    category: "Biji Kopi Beans",
    name: "Halu Mango Juice Honey",
    description: "Proses Honey. Tasting notes: Juicy Mango, Sweet Nectarine, Wild Honey, Clean Finish.",
    price: 92000,
    priceDisplay: "Rp 92.000",
    badge: "Honey Process"
  },
  {
    id: "beans-flores-espresso",
    category: "Biji Kopi Beans",
    name: "Flores Full Wash Espresso Beans",
    description: "Proses Full Wash. Karakter cokelat manis, kacang panggang, dan body seimbang untuk espresso bar.",
    price: 66000,
    priceDisplay: "Rp 66.000",
    badge: "Full Wash"
  },
  {
    id: "beans-full-robusta-1kg",
    category: "Biji Kopi Beans",
    name: "Full Robusta Single Origin (1000g)",
    description: "Kemasan hemat 1kg biji kopi Robusta pilihan. Tebal, minim acidity, dan crema tebal pekat.",
    price: 155000,
    priceDisplay: "Rp 155.000",
    badge: "1000g Pouch"
  }
];
