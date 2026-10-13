import React, { useState, useEffect } from 'react';
import { 
  Coffee, 
  MapPin, 
  Clock, 
  Phone, 
  PhoneCall, 
  ArrowDownRight, 
  ArrowRight,
  Send, 
  Check, 
  Copy, 
  MessageCircle, 
  Menu, 
  X, 
  Flame, 
  Cpu, 
  Navigation, 
  ChevronRight,
  Instagram, 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Search 
} from 'lucide-react';

// Official Hayati Coffee Menu Data
const OFFICIAL_MENU = [
  // 1. COFFEE BASED & SIGNATURE COFFEE
  { id: "hayati-punya-es-kopi", category: "Coffee Based & Signature", name: "Hayati Punya Es Kopi", description: "Full Arabica Signature house blend dengan racikan susu segar dan gula aren spesial.", price: 28000, priceDisplay: "Rp 28.000", badge: "Signature" },
  { id: "es-kopi-kokonut", category: "Coffee Based & Signature", name: "Es Kopi Kokonut", description: "Signature tropical flavour, perpaduan espresso bold dengan sentuhan kelapa gurih.", price: 28000, priceDisplay: "Rp 28.000", badge: "Popular" },
  { id: "es-kopi-regal", category: "Coffee Based & Signature", name: "Es Kopi Regal", description: "Kopi susu creamy berpadu biskuit Marie Regal renyah yang manis gurih.", price: 32000, priceDisplay: "Rp 32.000", badge: "" },
  { id: "cappuccino-latte", category: "Coffee Based & Signature", name: "Cappuccino / Latte", description: "Espresso murni dengan steamed milk microfoam halus. Hot atau Ice.", price: 30000, priceDisplay: "Rp 30.000", badge: "Classic" },
  { id: "americano-long-black", category: "Coffee Based & Signature", name: "Americano / Long Black", description: "Double shot espresso berkualitas dengan air mineral segar. Bersih dan tanpa gula.", price: 24000, priceDisplay: "Rp 24.000", badge: "" },
  { id: "rose-latte", category: "Coffee Based & Signature", name: "Rose Latte", description: "Sentuhan floral sirup mawar berpadu espresso dan susu kukus lembut.", price: 32000, priceDisplay: "Rp 32.000", badge: "" },
  { id: "honey-latte", category: "Coffee Based & Signature", name: "Honey Latte", description: "Pemanis alami madu murni yang melembutkan rasa espresso dan susu.", price: 32000, priceDisplay: "Rp 32.000", badge: "" },
  { id: "mochaccino", category: "Coffee Based & Signature", name: "Mochaccino", description: "Perpaduan cokelat artisanal dan espresso dengan susu segar creamy.", price: 38000, priceDisplay: "Rp 38.000", badge: "" },
  { id: "oat-latte", category: "Coffee Based & Signature", name: "Oat Latte", description: "Espresso dengan susu oat plant-based yang lembut dan gurih alami.", price: 38000, priceDisplay: "Rp 38.000", badge: "Plant-Based" },
  { id: "choco-nougat-coffee", category: "Coffee Based & Signature", name: "Choco Nougat Coffee", description: "Kopi susu dengan sensasi manis gurih cokelat kacang nougat.", price: 32000, priceDisplay: "Rp 32.000", badge: "" },
  { id: "dirty-latte", category: "Coffee Based & Signature", name: "Dirty Latte", description: "Double ristretto hangat dituangkan di atas susu dingin kental tanpa diaduk.", price: 27500, priceDisplay: "Rp 27.500", badge: "" },

  // 2. COFFEE MOCKTAIL & COLD BREW
  { id: "cranberry-mocktail", category: "Coffee Mocktail & Cold Brew", name: "Cranberry Mocktail", description: "Mocktail kopi segar dengan sentuhan asam manis jus kranberi.", price: 32000, priceDisplay: "Rp 32.000", badge: "Fresh" },
  { id: "black-rose", category: "Coffee Mocktail & Cold Brew", name: "Black Rose", description: "Ice Americano dengan paduan rose syrup aromatik dan madu murni segar.", price: 32000, priceDisplay: "Rp 32.000", badge: "" },
  { id: "mix-berries-cream", category: "Coffee Mocktail & Cold Brew", name: "Mix Berries Cream", description: "Overnight cold brew dengan sirup berry dan lapisan strawberry cream lembut.", price: 32000, priceDisplay: "Rp 32.000", badge: "Favorite" },
  { id: "gingerbread-salted-caramel", category: "Coffee Mocktail & Cold Brew", name: "Gingerbread Salted Caramel Cold Brew", description: "Seduhan dingin beraroma rempah hangat gingerbread dan salted caramel.", price: 32000, priceDisplay: "Rp 32.000", badge: "" },
  { id: "under-the-mistletoe", category: "Coffee Mocktail & Cold Brew", name: "Under The Mistletoe", description: "Cold brew dipadukan rempah karamel dan krim kelapa gurih khas.", price: 32000, priceDisplay: "Rp 32.000", badge: "" },
  { id: "fatburner", category: "Coffee Mocktail & Cold Brew", name: "FatBurner", description: "Kombinasi espresso, perasan lemon segar, dan soda menyegarkan.", price: 32000, priceDisplay: "Rp 32.000", badge: "Bold" },

  // 3. NON-COFFEE & TEA
  { id: "chocolatte", category: "Non-Coffee & Tea", name: "Chocolatte", description: "Cokelat murni kualitas tinggi dengan susu segar kental. Hot atau Ice.", price: 32000, priceDisplay: "Rp 32.000", badge: "" },
  { id: "green-tea-latte", category: "Non-Coffee & Tea", name: "Green Tea Latte", description: "Matcha hijau asli Jepang dengan kelembutan susu kukus manis seimbang.", price: 32000, priceDisplay: "Rp 32.000", badge: "" },
  { id: "summer-bliss", category: "Non-Coffee & Tea", name: "Summer Bliss", description: "Artisan black tea dengan kesegaran cranberry juice dan madu alami.", price: 32000, priceDisplay: "Rp 32.000", badge: "Fresh" },
  { id: "black-mint-tea", category: "Non-Coffee & Tea", name: "Black Mint Tea", description: "Premium black tea berpadu jus delima dan daun mint segar.", price: 32000, priceDisplay: "Rp 32.000", badge: "" },
  { id: "lychee-ice-tea", category: "Non-Coffee & Tea", name: "Lychee Ice Tea", description: "Teh melati dingin dengan sirup dan buah leci manis menyegarkan.", price: 27000, priceDisplay: "Rp 27.000", badge: "" },
  { id: "ice-tea-mineral-water", category: "Non-Coffee & Tea", name: "Ice Tea / Mineral Water", description: "Pilihan es teh tawar/manis atau air mineral murni berkualitas.", price: 15000, priceDisplay: "Rp 15.000", badge: "" },

  // 4. FOOD & HEAVY MEALS
  { id: "chicken-sambal-matah", category: "Food & Heavy Meals", name: "Chicken Sambal Matah Rice Bowl", description: "Nasi hangat dengan ayam goreng renyah dan racikan sambal matah khas Bali pedas segar.", price: 34000, priceDisplay: "Rp 34.000", badge: "Best Seller" },
  { id: "salted-egg-chicken", category: "Food & Heavy Meals", name: "Salted Egg Chicken Hayati", description: "Potongan ayam krispi berbalur saus telur asin gurih melimpah khas Hayati.", price: 34000, priceDisplay: "Rp 34.000", badge: "" },
  { id: "teriyaki-blackpepper-katsu", category: "Food & Heavy Meals", name: "Teriyaki / Blackpepper Chicken Katsu", description: "Chicken katsu gurih dengan pilihan saus teriyaki manis atau lada hitam hangat.", price: 34000, priceDisplay: "Rp 34.000", badge: "" },
  { id: "chicken-curry-mushroom", category: "Food & Heavy Meals", name: "Chicken Curry / Mushroom Chicken Rice", description: "Nasi ayam bumbu kari Jepang gurih atau saus jamur lembut kaya rempah.", price: 34000, priceDisplay: "Rp 34.000", badge: "" },
  { id: "katsu-mentai-rice", category: "Food & Heavy Meals", name: "Katsu Mentai Rice", description: "Ayam katsu renyah dengan saus mentai bakar gurih creamy di atas nasi hangat.", price: 37000, priceDisplay: "Rp 37.000", badge: "" },
  { id: "chicken-schnitzel", category: "Food & Heavy Meals", name: "Chicken Schnitzel", description: "Fillet ayam tepung keemasan dengan potato wedges dan mushroom sauce kental.", price: 47000, priceDisplay: "Rp 47.000", badge: "" },
  { id: "chicken-steak-mushroom", category: "Food & Heavy Meals", name: "Chicken Steak with Mushroom Sauce", description: "Steak ayam panggang juicy dengan saus jamur khas Eropa dan pelengkap sayuran.", price: 47000, priceDisplay: "Rp 47.000", badge: "" },
  { id: "spaghetti-pasta", category: "Food & Heavy Meals", name: "Spaghetti (Carbonara / Bolognaise / Aglio Olio)", description: "Pasta al dente Italia pilihan saus carbonara, bolognaise, atau aglio olio gurih.", price: 35000, priceDisplay: "Rp 35.000", badge: "Popular" },
  { id: "crispy-mushroom-snacks", category: "Food & Heavy Meals", name: "Crispy Mushroom / Snacks", description: "Jamur goreng tepung krispi dengan bumbu tabur gurih teman santai ngopi.", price: 24000, priceDisplay: "Rp 24.000", badge: "" },
  { id: "dragon-fruit-smoothies", category: "Food & Heavy Meals", name: "Dragon Fruit Smoothies Bowl", description: "Smoothie buah naga segar dengan taburan granola, biji chia, dan buah potong.", price: 45000, priceDisplay: "Rp 45.000", badge: "Healthy" },

  // 5. BIJI KOPI BEANS
  { id: "beans-argopuro", category: "Biji Kopi Beans", name: "Argopuro Lychee Sorbet", description: "Proses Anaerob Natural. Tasting notes: Sweet Lychee, Sorbet, White Floral, Syrupy Body.", price: 92000, priceDisplay: "Rp 92.000", badge: "Anaerob Natural" },
  { id: "beans-halu-mango", category: "Biji Kopi Beans", name: "Halu Mango Juice Honey", description: "Proses Honey. Tasting notes: Juicy Mango, Sweet Nectarine, Wild Honey, Clean Finish.", price: 92000, priceDisplay: "Rp 92.000", badge: "Honey Process" },
  { id: "beans-flores-espresso", category: "Biji Kopi Beans", name: "Flores Full Wash Espresso Beans", description: "Proses Full Wash. Karakter cokelat manis dan kacang panggang seimbang untuk espresso bar.", price: 66000, priceDisplay: "Rp 66.000", badge: "Full Wash" },
  { id: "beans-full-robusta-1kg", category: "Biji Kopi Beans", name: "Full Robusta Single Origin (1000g)", description: "Kemasan 1kg biji kopi Robusta pilihan. Tebal, minim acidity, dan crema tebal pekat.", price: 155000, priceDisplay: "Rp 155.000", badge: "1000g Pouch" }
];

export default function HayatiCoffeeLanding() {
  const [activeTab, setActiveTab] = useState('LANDING'); // 'LANDING' or 'MENU'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [waModalOpen, setWaModalOpen] = useState(false);
  const [isStoreOpen, setIsStoreOpen] = useState(true);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  // Cart State
  const [cart, setCart] = useState([]);
  const [cartOrderType, setCartOrderType] = useState('Dine In (Di Tempat)');
  const [cartCustomerName, setCartCustomerName] = useState('');
  const [cartNotes, setCartNotes] = useState('');

  // Menu Search & Filter on Menu View
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const utcHours = now.getUTCHours();
      const wibHours = (utcHours + 7) % 24;
      const wibMinutes = now.getUTCMinutes();
      const decimalTime = wibHours + wibMinutes / 60;
      setIsStoreOpen(decimalTime >= 8 && decimalTime < 23);
    };
    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const copyAddress = () => {
    navigator.clipboard?.writeText("Jl. Demangan Baru No. 7, Caturtunggal, Depok, Sleman, DIY 55281");
    triggerToast('Alamat Hayati Coffee berhasil disalin!');
  };

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    triggerToast(`"${item.name}" ditambahkan ke keranjang!`);
  };

  const updateCartQuantity = (id, delta) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity + delta } : i))
        .filter((i) => i.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const clearCart = () => {
    if (window.confirm('Kosongkan keranjang pesanan?')) {
      setCart([]);
    }
  };

  const formatRupiah = (num) => 'Rp ' + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const handleCheckoutWA = () => {
    if (cart.length === 0) return;
    let listText = '';
    cart.forEach((i, idx) => {
      listText += `${idx + 1}. *${i.name}* (${i.quantity}x) = ${formatRupiah(i.price * i.quantity)}\n`;
    });

    const msg = `Halo Hayati Coffee Roaster! ☕\nSaya ingin memesan via website:\n\n*Tipe Pesanan:* ${cartOrderType}\n*Nama Pemesan:* ${cartCustomerName || 'Pelanggan Hayati'}\n\n*Daftar Menu:*\n${listText}\n*Total Pembayaran:* ${formatRupiah(totalPrice)}\n*Catatan / No. Meja:* ${cartNotes || '-'}\n\nMohon konfirmasi ketersediaan pesanan. Terima kasih!`;
    window.open(`https://wa.me/6281225345877?text=${encodeURIComponent(msg)}`, '_blank');
    setCartDrawerOpen(false);
    setCart([]);
    triggerToast('Pesanan dikirim ke WhatsApp!');
  };

  const filteredMenuItems = OFFICIAL_MENU.filter((item) => {
    const matchCat = selectedCategory === 'ALL' || item.category === selectedCategory;
    const matchSearch =
      !searchTerm ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1816] font-sans antialiased selection:bg-[#B8732E] selection:text-white pb-20">
      
      {/* Top Operational Status Bar */}
      <aside className="border-b border-[#E8E3DA] bg-white text-xs text-[#5E5850] py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${isStoreOpen ? 'bg-emerald-600' : 'bg-amber-600'}`} />
            <span className="font-medium text-[#1A1816]">
              {isStoreOpen ? 'Buka Hari Ini • 08.00 – 23.00 WIB' : 'Sedang Tutup • Buka Pukul 08.00 WIB'}
            </span>
            <span className="hidden md:inline text-[#D8D1C5]">•</span>
            <span className="hidden md:inline text-[#8C857B]">Jl. Demangan Baru No. 7, Sleman, Yogyakarta</span>
          </div>
          <a href="https://wa.me/6281225345877" target="_blank" rel="noopener noreferrer" className="text-[#94591F] font-semibold flex items-center gap-1">
            <Phone className="w-3.5 h-3.5 text-[#B8732E]" /> +62 812-2534-5877
          </a>
        </div>
      </aside>

      {/* Sticky Navbar */}
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#E8E3DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('LANDING')}>
            <img src="assets/images/hayati-logo.jpg" alt="Logo" className="w-9 h-9 rounded-xl border border-[#E8E3DA] object-cover" />
            <div className="flex flex-col">
              <span className="font-extrabold text-2xl tracking-tight text-[#1A1816]">hayati</span>
              <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#8C857B] -mt-1">COFFEE ROASTER</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#5E5850]">
            <button onClick={() => setActiveTab('LANDING')} className={`hover:text-[#1A1816] transition ${activeTab === 'LANDING' ? 'text-[#1A1816] font-bold' : ''}`}>
              Beranda
            </button>
            <button onClick={() => setActiveTab('MENU')} className={`hover:text-[#1A1816] transition flex items-center gap-1.5 ${activeTab === 'MENU' ? 'text-[#1A1816] font-bold' : ''}`}>
              <span>Katalog Menu</span>
              <span className="text-[10px] bg-[#F5F2EB] border border-[#E8E3DA] px-1.5 py-0.5 rounded text-[#94591F]">35+</span>
            </button>
            <a href="#lokasi" onClick={() => setActiveTab('LANDING')} className="hover:text-[#1A1816] transition">Lokasi</a>
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={() => setCartDrawerOpen(true)} className="p-2.5 rounded-full border border-[#E8E3DA] bg-white text-[#1A1816] flex items-center gap-2 hover:bg-[#F5F2EB] transition">
              <ShoppingBag className="w-4 h-4 text-[#94591F]" />
              <span className="bg-[#1A1816] text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full min-w-[18px]">{totalItems}</span>
            </button>

            <button onClick={() => setWaModalOpen(true)} className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1A1816] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#94591F] transition">
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Reservasi WA</span>
            </button>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2.5 rounded-xl border border-[#E8E3DA]">
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* VIEW 1: LANDING PAGE */}
      {activeTab === 'LANDING' && (
        <main>
          {/* Hero */}
          <section className="py-16 md:py-24 bg-[#FAF8F5] border-b border-[#E8E3DA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8E3DA]">
                  <span className="w-2 h-2 rounded-full bg-[#B8732E]" />
                  <span className="text-xs uppercase tracking-wider font-bold text-[#94591F]">Artisanal Roastery • Yogyakarta</span>
                </div>
                <h1 className="font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-[#1A1816]">
                  Authentic Roastery &amp; <br /><span className="text-[#94591F]">Artisanal Coffee.</span>
                </h1>
                <p className="text-base text-[#5E5850] max-w-xl leading-relaxed">
                  Menyajikan pengalaman seduh kopi presisi dengan dedikasi tinggi di Demangan Baru, Yogyakarta.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <button onClick={() => setActiveTab('MENU')} className="px-8 py-4 rounded-full bg-[#1A1816] text-white font-bold text-sm hover:bg-[#94591F] transition flex items-center gap-2">
                    <span>Buka Katalog Lengkap</span> <ArrowRight className="w-4 h-4" />
                  </button>
                  <a href="#lokasi" className="px-7 py-4 rounded-full bg-white border border-[#E8E3DA] font-semibold text-sm hover:bg-[#F5F2EB] transition flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#B8732E]" /> <span>Lokasi Maps</span>
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-3xl overflow-hidden border border-[#E8E3DA] bg-white shadow-xl">
                  <img src="assets/images/hayati-signature-iced.jpg" alt="Signature Iced Coffee" className="w-full h-[460px] object-cover" />
                </div>
              </div>
            </div>
          </section>

          {/* Craft & Process */}
          <section className="py-20 bg-white border-b border-[#E8E3DA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs uppercase font-bold text-[#94591F] tracking-widest">Seni &amp; Standar Roastery</span>
                <h2 className="font-extrabold text-3xl sm:text-4xl text-[#1A1816] mt-2">Dedikasi Dari Perkebunan Hingga Meja Cupping</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-2xl border border-[#E8E3DA] overflow-hidden bg-[#FAF8F5]">
                  <img src="assets/images/hayati-coffee-farm.jpg" alt="Farm" className="w-full h-48 object-cover" />
                  <div className="p-5">
                    <h3 className="font-bold text-base text-[#1A1816]">Coffee Life Cycle</h3>
                    <p className="text-xs text-[#5E5850] mt-1">Biji ceri merah dipetik langsung dari petani Nusantara terbaik.</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-[#E8E3DA] overflow-hidden bg-[#FAF8F5]">
                  <img src="assets/images/hayati-roaster-production.jpg" alt="Roasting" className="w-full h-48 object-cover" />
                  <div className="p-5">
                    <h3 className="font-bold text-base text-[#1A1816]">In-House Roasting</h3>
                    <p className="text-xs text-[#5E5850] mt-1">Pengendalian suhu dan waktu sangrai mikro untuk profil rasa konsisten.</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-[#E8E3DA] overflow-hidden bg-[#FAF8F5]">
                  <img src="assets/images/hayati-public-cupping.jpg" alt="Cupping" className="w-full h-48 object-cover" />
                  <div className="p-5">
                    <h3 className="font-bold text-base text-[#1A1816]">Public Cupping</h3>
                    <p className="text-xs text-[#5E5850] mt-1">Evaluasi sensorik cita rasa bersama komunitas kopi Yogyakarta.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Menu Spotlight */}
          <section className="py-20 bg-[#FAF8F5] border-b border-[#E8E3DA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                <div>
                  <span className="text-xs uppercase font-bold text-[#94591F]">Sorotan Menu</span>
                  <h2 className="font-extrabold text-3xl text-[#1A1816] mt-1">Pilihan Populer Hayati</h2>
                </div>
                <button onClick={() => setActiveTab('MENU')} className="px-6 py-3 rounded-full bg-[#1A1816] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                  <span>Lihat Seluruh Menu (35+)</span> <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {OFFICIAL_MENU.slice(0, 4).map((item) => (
                  <div key={item.id} className="p-5 rounded-2xl bg-white border border-[#E8E3DA] flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-[#F5F2EB] text-[#94591F]">{item.badge || 'Popular'}</span>
                        <span className="font-bold text-sm text-[#1A1816]">{item.priceDisplay}</span>
                      </div>
                      <h3 className="font-bold text-base text-[#1A1816]">{item.name}</h3>
                      <p className="text-xs text-[#5E5850] mt-1">{item.description}</p>
                    </div>
                    <button onClick={() => addToCart(item)} className="mt-4 w-full py-2 rounded-full bg-[#1A1816] text-white text-xs font-bold hover:bg-[#94591F] transition flex items-center justify-center gap-1">
                      <Plus className="w-3.5 h-3.5" /> Keranjang
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      )}

      {/* VIEW 2: DEDICATED FULL MENU PAGE */}
      {activeTab === 'MENU' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#94591F]">Daftar Menu Resmi</span>
            <h1 className="font-extrabold text-3xl sm:text-4xl text-[#1A1816]">Katalog Menu Hayati</h1>
            <p className="text-xs text-[#5E5850]">Semua kategori Coffee, Mocktail, Non-Coffee, Meals, dan Retail Beans.</p>
            <div className="pt-3 max-w-md mx-auto relative">
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
              <input 
                type="text" 
                placeholder="Cari menu... (Latte, Katsu, Beans)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-[#E8E3DA] text-sm focus:outline-none focus:border-[#1A1816]"
              />
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex gap-2 overflow-x-auto pb-4 text-xs font-semibold no-scrollbar">
            {['ALL', 'Coffee Based & Signature', 'Coffee Mocktail & Cold Brew', 'Non-Coffee & Tea', 'Food & Heavy Meals', 'Biji Kopi Beans'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full border whitespace-nowrap transition ${selectedCategory === cat ? 'bg-[#1A1816] text-white border-[#1A1816]' : 'bg-white text-[#5E5850] border-[#E8E3DA] hover:border-stone-400'}`}
              >
                {cat === 'ALL' ? 'Semua Menu' : cat}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            {filteredMenuItems.map((item) => (
              <div key={item.id} className="p-5 rounded-2xl bg-white border border-[#E8E3DA] flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start gap-2 mb-1">
                    <div>
                      <h3 className="font-bold text-base text-[#1A1816]">{item.name}</h3>
                      <span className="text-[11px] font-semibold text-[#94591F]">{item.category}</span>
                    </div>
                    <span className="font-bold text-base text-[#1A1816] shrink-0">{item.priceDisplay}</span>
                  </div>
                  <p className="text-xs text-[#5E5850] mt-1">{item.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E8E3DA] flex justify-between items-center">
                  <span className="text-[11px] text-[#8C857B]">{item.badge || 'Tersedia'}</span>
                  <button onClick={() => addToCart(item)} className="px-3.5 py-1.5 rounded-full bg-[#1A1816] text-white text-xs font-bold hover:bg-[#94591F] transition flex items-center gap-1">
                    <Plus className="w-3.5 h-3.5" /> Keranjang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* SECTION LOKASI & OPERASIONAL */}
      <section id="lokasi" className="py-20 bg-white border-t border-[#E8E3DA] mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase text-[#94591F]">Kunjungi Kami</span>
            <h2 className="font-extrabold text-3xl text-[#1A1816]">Lokasi &amp; Jam Operasional</h2>
            <div className="space-y-3 text-xs">
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E3DA]">
                <p className="font-bold text-sm text-[#1A1816]">Alamat Kedai</p>
                <p className="text-[#5E5850] mt-0.5">Jl. Demangan Baru No. 7, Caturtunggal, Depok, Sleman, DIY</p>
                <button onClick={copyAddress} className="text-[#94591F] font-bold mt-1 inline-flex items-center gap-1">
                  <Copy className="w-3 h-3" /> Salin Alamat
                </button>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E3DA]">
                <p className="font-bold text-sm text-[#1A1816]">Jam Buka</p>
                <p className="text-[#5E5850] mt-0.5">Setiap Hari (08.00 – 23.00 WIB)</p>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E3DA]">
                <p className="font-bold text-sm text-[#1A1816]">WhatsApp Admin</p>
                <p className="text-[#5E5850] mt-0.5">+62 812-2534-5877</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 h-72 rounded-2xl overflow-hidden border border-[#E8E3DA]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.076326694389!2d110.39002227588383!3d-7.781755177212457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59c3f4e2f891%3A0xb3a2f981041eeec4!2sHayati%20Coffee!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid" 
              className="w-full h-full border-0" 
              allowFullScreen="" 
              loading="lazy" 
              title="Maps"
            />
          </div>
        </div>
      </section>

      {/* OFFICIAL FOOTER */}
      <footer className="bg-white border-t border-[#E8E3DA] py-12 text-xs text-[#5E5850]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="font-bold text-sm text-[#1A1816]">Hayati Coffee Roaster / Hayati Specialty Coffee</p>
              <p className="mt-1">Jl. Demangan Baru No. 7, Caturtunggal, Depok, Sleman, DIY</p>
            </div>
            <div>
              <p className="font-bold text-[#1A1816]">Jam Buka &amp; WhatsApp</p>
              <p className="mt-1">Setiap Hari (08.00 – 23.00 WIB)</p>
              <p className="font-semibold text-[#1A1816]">WhatsApp: +62 812-2534-5877</p>
            </div>
            <div>
              <p className="font-bold text-[#1A1816]">Katalog Menu</p>
              <p className="mt-1 cursor-pointer hover:underline" onClick={() => setActiveTab('MENU')}>Buka Seluruh 35+ Menu Pilihan →</p>
            </div>
          </div>
          <div className="border-t border-[#E8E3DA] pt-6 flex justify-between">
            <p>&copy; 2026 Hayati Coffee Roaster. All rights reserved.</p>
            <p>Crafted in Yogyakarta</p>
          </div>
        </div>
      </footer>

      {/* FLOATING CART BAR */}
      {totalItems > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-md">
          <div className="bg-[#1A1816] text-white rounded-full p-2 pl-5 shadow-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-[#B8732E]" />
              <div>
                <p className="text-xs font-bold text-white">{totalItems} Menu Terpilih</p>
                <p className="text-[11px] text-white/70">{formatRupiah(totalPrice)}</p>
              </div>
            </div>
            <button onClick={() => setCartDrawerOpen(true)} className="px-5 py-2.5 rounded-full bg-white text-[#1A1816] font-bold text-xs uppercase hover:bg-[#F5F2EB] transition">
              Lihat Pesanan →
            </button>
          </div>
        </div>
      )}

      {/* CART DRAWER */}
      {cartDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div onClick={() => setCartDrawerOpen(false)} className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="relative w-full max-w-md bg-white shadow-2xl h-full flex flex-col justify-between z-10">
            <div className="p-6 border-b border-[#E8E3DA] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-[#94591F]" />
                <h3 className="font-bold text-lg text-[#1A1816]">Keranjang Pesanan ({totalItems})</h3>
              </div>
              <button onClick={() => setCartDrawerOpen(false)}><X className="w-5 h-5" /></button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="py-16 text-center text-xs text-[#5E5850]">Keranjang masih kosong.</div>
              ) : (
                <div className="space-y-3">
                  {cart.map((item) => (
                    <div key={item.id} className="p-3 rounded-xl border border-[#E8E3DA] flex items-center justify-between text-xs">
                      <div>
                        <p className="font-bold text-[#1A1816]">{item.name}</p>
                        <p className="text-[#94591F] font-semibold">{formatRupiah(item.price)}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button onClick={() => updateCartQuantity(item.id, -1)} className="w-6 h-6 rounded-full border border-stone-300">-</button>
                        <span className="font-bold">{item.quantity}</span>
                        <button onClick={() => updateCartQuantity(item.id, 1)} className="w-6 h-6 rounded-full border border-stone-300">+</button>
                        <button onClick={() => removeFromCart(item.id)} className="ml-2 text-red-500"><X className="w-4 h-4" /></button>
                      </div>
                    </div>
                  ))}

                  <div className="pt-4 border-t border-[#E8E3DA] space-y-3 text-xs">
                    <div>
                      <label className="block font-bold mb-1">Tipe Pesanan</label>
                      <div className="grid grid-cols-2 gap-2">
                        <button onClick={() => setCartOrderType('Dine In')} className={`p-2 rounded-lg border ${cartOrderType === 'Dine In' ? 'bg-[#1A1816] text-white' : 'bg-[#FAF8F5]'}`}>Dine In</button>
                        <button onClick={() => setCartOrderType('Take Away')} className={`p-2 rounded-lg border ${cartOrderType === 'Take Away' ? 'bg-[#1A1816] text-white' : 'bg-[#FAF8F5]'}`}>Take Away</button>
                      </div>
                    </div>
                    <div>
                      <label className="block font-bold mb-1">Nama Pemesan</label>
                      <input type="text" placeholder="Nama Anda" value={cartCustomerName} onChange={(e) => setCartCustomerName(e.target.value)} className="w-full p-2.5 rounded-lg border border-[#E8E3DA]" />
                    </div>
                    <div>
                      <label className="block font-bold mb-1">Nomor Meja / Catatan</label>
                      <input type="text" placeholder="Meja 4, less sugar" value={cartNotes} onChange={(e) => setCartNotes(e.target.value)} className="w-full p-2.5 rounded-lg border border-[#E8E3DA]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 border-t border-[#E8E3DA] bg-[#FAF8F5] space-y-3 text-xs">
              <div className="flex justify-between font-bold text-sm">
                <span>Total</span>
                <span className="text-[#94591F] text-base">{formatRupiah(totalPrice)}</span>
              </div>
              <div className="flex gap-2">
                <button onClick={clearCart} className="p-3 rounded-full border bg-white" title="Hapus"><Trash2 className="w-4 h-4" /></button>
                <button onClick={handleCheckoutWA} disabled={cart.length === 0} className="flex-1 py-3 rounded-full bg-[#1A1816] text-white font-bold uppercase disabled:opacity-50 flex items-center justify-center gap-2">
                  <Send className="w-4 h-4 text-emerald-400" /> Kirim ke WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TOAST */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-2xl bg-[#1A1816] text-white text-xs font-semibold shadow-xl flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
