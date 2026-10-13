/**
 * HAYATI COFFEE ROASTER — MAIN CONTROLLER
 * Handles: Scroll animations, shared cart system, WhatsApp order formatting, live operational status
 */

// Shared Cart State
let cart = [];

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // Set Current Year in Footer
  const yearSpan = document.getElementById('yearSpan');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Load Saved Cart from LocalStorage
  loadCartFromStorage();

  // Setup Scroll Animation Observer
  setupScrollAnimations();

  // Setup Scroll Progress Bar
  setupScrollProgress();

  // Setup Back to Top Button
  setupBackToTop();

  // Setup ScrollSpy for Active Nav Links
  setupScrollSpy();

  // Setup Mobile Drawer
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isHidden = mobileDrawer.classList.contains('hidden');
      if (isHidden) {
        mobileDrawer.classList.remove('hidden');
      } else {
        mobileDrawer.classList.add('hidden');
      }
    });
  }

  // Setup Sticky Header Shadow on Scroll
  const mainNavbar = document.getElementById('mainNavbar');
  if (mainNavbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        mainNavbar.classList.add('shadow-sm', 'bg-white/98');
        mainNavbar.classList.remove('bg-white/95');
      } else {
        mainNavbar.classList.remove('shadow-sm', 'bg-white/98');
        mainNavbar.classList.add('bg-white/95');
      }
    }, { passive: true });
  }

  // Calculate Live Store Operational Status (08:00 - 23:00 WIB)
  updateLiveStoreStatus();
  setInterval(updateLiveStoreStatus, 60000);
});

/**
 * Setup Top Reading / Scroll Progress Bar
 */
function setupScrollProgress() {
  const bar = document.getElementById('scrollProgressBar');
  if (!bar) return;

  const updateBar = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  };

  window.addEventListener('scroll', updateBar, { passive: true });
  updateBar();
}

/**
 * Setup Floating Back to Top Button
 */
function setupBackToTop() {
  const btn = document.getElementById('backToTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * Setup ScrollSpy to highlight active navigation link
 */
function setupScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  if (!sections.length || !navLinks.length) return;

  const onScroll = () => {
    const scrollPos = window.scrollY + 140;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active-nav');
          } else if (link.getAttribute('href').startsWith('#')) {
            link.classList.remove('active-nav');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
}

/**
 * Setup Intersection Observer for Smooth Scroll Reveal Animations
 */
function setupScrollAnimations() {
  // Support auto-staggering for containers with .stagger-group
  document.querySelectorAll('.stagger-group').forEach(group => {
    const children = group.children;
    Array.from(children).forEach((child, idx) => {
      if (!child.classList.contains('reveal-on-scroll') && 
          !child.classList.contains('reveal-fade-up') &&
          !child.classList.contains('reveal-fade-left') &&
          !child.classList.contains('reveal-fade-right') &&
          !child.classList.contains('reveal-scale')) {
        child.classList.add('reveal-fade-up');
      }
      if (!child.style.transitionDelay && !child.className.includes('delay-')) {
        child.style.transitionDelay = `${(idx % 6) * 110}ms`;
      }
    });
  });

  const selector = '.reveal-on-scroll, .reveal-fade-up, .reveal-fade-down, .reveal-fade-left, .reveal-fade-right, .reveal-scale';
  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => {
    // If element is already in viewport on initial load, reveal immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('revealed');
    } else {
      observer.observe(el);
    }
  });
}

// Expose refresh function for dynamically rendered content (like catalog menu)
window.refreshScrollAnimations = setupScrollAnimations;

/**
 * Mobile Drawer Close helper
 */
function closeMobileDrawer() {
  const mobileDrawer = document.getElementById('mobileDrawer');
  if (mobileDrawer) {
    mobileDrawer.classList.add('hidden');
  }
}

/**
 * Live Operational Indicator (WIB / UTC+7)
 */
function updateLiveStoreStatus() {
  const liveStatusText = document.getElementById('liveStatusText');
  if (!liveStatusText) return;

  const now = new Date();
  const utcHours = now.getUTCHours();
  const wibHours = (utcHours + 7) % 24;
  const wibMinutes = now.getUTCMinutes();
  const currentDecimalTime = wibHours + wibMinutes / 60;

  const isOpen = currentDecimalTime >= 8 && currentDecimalTime < 23;

  if (isOpen) {
    liveStatusText.innerHTML = `
      <span class="text-emerald-700 font-bold">BUKA SEKARANG</span> 
      <span class="text-brand-inkSoft font-medium">• Tutup 23.00 WIB</span>
    `;
  } else {
    liveStatusText.innerHTML = `
      <span class="text-amber-800 font-bold">SEDANG TUTUP</span> 
      <span class="text-brand-inkSoft font-medium">• Buka kembali pukul 08.00 WIB</span>
    `;
  }
}

/**
 * ========================================================
 * SHOPPING CART (KERANJANG PESANAN BERSAMA)
 * ========================================================
 */

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem('hayati_coffee_cart');
    if (saved) {
      cart = JSON.parse(saved);
    }
  } catch (e) {
    cart = [];
  }
  renderCartUI();
}

function saveCartToStorage() {
  try {
    localStorage.setItem('hayati_coffee_cart', JSON.stringify(cart));
  } catch (e) {}
}

/**
 * Add an item to the shopping cart
 */
function addToCart(id, title, price, category) {
  const existingIndex = cart.findIndex(item => item.id === id);

  if (existingIndex > -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({
      id: id,
      title: title,
      price: price,
      category: category,
      quantity: 1
    });
  }

  saveCartToStorage();
  renderCartUI();
  showToast(`"${title}" ditambahkan ke keranjang!`);

  // Animate nav cart button
  const navCartCount = document.getElementById('navCartCount');
  if (navCartCount) {
    navCartCount.classList.add('scale-125', 'bg-brand-amber');
    setTimeout(() => {
      navCartCount.classList.remove('scale-125', 'bg-brand-amber');
    }, 250);
  }
}

/**
 * Update Item Quantity (+1 or -1)
 */
function updateCartQuantity(id, delta) {
  const index = cart.findIndex(item => item.id === id);
  if (index === -1) return;

  cart[index].quantity += delta;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  saveCartToStorage();
  renderCartUI();
}

/**
 * Remove an item completely
 */
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCartToStorage();
  renderCartUI();
}

/**
 * Clear the entire cart
 */
function clearCart() {
  if (cart.length === 0) return;
  if (confirm('Apakah Anda yakin ingin mengosongkan keranjang pesanan?')) {
    cart = [];
    saveCartToStorage();
    renderCartUI();
    showToast('Keranjang pesanan telah dikosongkan.');
  }
}

/**
 * Format number to Indonesian Rupiah (Rp XX.XXX)
 */
function formatRupiah(num) {
  return 'Rp ' + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

/**
 * Render Cart UI across badges, floating bar, and drawer
 */
function renderCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Update Navbar Badge
  const navCartCount = document.getElementById('navCartCount');
  const mobileCartCount = document.getElementById('mobileCartCount');
  const cartItemCountHeader = document.getElementById('cartItemCountHeader');
  if (navCartCount) navCartCount.textContent = totalItems;
  if (mobileCartCount) mobileCartCount.textContent = totalItems;
  if (cartItemCountHeader) cartItemCountHeader.textContent = totalItems;

  // Update Floating Cart Bar
  const floatingCartBar = document.getElementById('floatingCartBar');
  const floatingCartBadge = document.getElementById('floatingCartBadge');
  const floatingCartItems = document.getElementById('floatingCartItems');
  const floatingCartTotal = document.getElementById('floatingCartTotal');

  if (floatingCartBar) {
    if (totalItems > 0) {
      floatingCartBar.classList.remove('hidden');
      if (floatingCartBadge) floatingCartBadge.textContent = totalItems;
      if (floatingCartItems) floatingCartItems.textContent = `${totalItems} Menu Terpilih`;
      if (floatingCartTotal) floatingCartTotal.textContent = formatRupiah(totalPrice);
    } else {
      floatingCartBar.classList.add('hidden');
    }
  }

  // Update Drawer Elements
  const emptyCartState = document.getElementById('emptyCartState');
  const cartItemsContainer = document.getElementById('cartItemsContainer');
  const cartOrderForm = document.getElementById('cartOrderForm');
  const cartSubtotalText = document.getElementById('cartSubtotalText');
  const cartTotalText = document.getElementById('cartTotalText');
  const checkoutWaBtn = document.getElementById('checkoutWaBtn');

  if (cartSubtotalText) cartSubtotalText.textContent = formatRupiah(totalPrice);
  if (cartTotalText) cartTotalText.textContent = formatRupiah(totalPrice);

  if (!cartItemsContainer) return;

  if (cart.length === 0) {
    if (emptyCartState) emptyCartState.classList.remove('hidden');
    if (cartOrderForm) cartOrderForm.classList.add('hidden');
    if (checkoutWaBtn) checkoutWaBtn.disabled = true;
    cartItemsContainer.innerHTML = '';
  } else {
    if (emptyCartState) emptyCartState.classList.add('hidden');
    if (cartOrderForm) cartOrderForm.classList.remove('hidden');
    if (checkoutWaBtn) checkoutWaBtn.disabled = false;

    let html = '';
    cart.forEach(item => {
      const itemSubtotal = item.price * item.quantity;
      html += `
        <div class="p-3.5 rounded-2xl border border-brand-border bg-white flex items-center justify-between gap-3 shadow-xs">
          <div class="flex-1 min-w-0">
            <h4 class="font-bold text-sm text-brand-ink truncate">${item.title}</h4>
            <div class="flex items-center gap-2 mt-0.5 text-xs text-brand-inkSoft">
              <span class="text-brand-amberDark font-semibold">${formatRupiah(item.price)}</span>
              <span>•</span>
              <span class="text-[11px] text-brand-inkMuted">${item.category}</span>
            </div>
            <p class="text-xs font-bold text-brand-ink mt-1">Subtotal: ${formatRupiah(itemSubtotal)}</p>
          </div>

          <!-- Quantity Controls -->
          <div class="flex items-center gap-2 bg-brand-sand border border-brand-border px-2 py-1 rounded-full shrink-0">
            <button onclick="updateCartQuantity('${item.id}', -1)" class="w-6 h-6 rounded-full bg-white hover:bg-brand-border flex items-center justify-center font-bold text-brand-ink text-sm shadow-xs transition">
              -
            </button>
            <span class="text-xs font-bold text-brand-ink w-4 text-center">${item.quantity}</span>
            <button onclick="updateCartQuantity('${item.id}', 1)" class="w-6 h-6 rounded-full bg-white hover:bg-brand-border flex items-center justify-center font-bold text-brand-ink text-sm shadow-xs transition">
              +
            </button>
          </div>

          <!-- Delete single item -->
          <button onclick="removeFromCart('${item.id}')" class="p-1.5 text-brand-inkMuted hover:text-red-500 transition" title="Hapus">
            <i data-lucide="x" class="w-4 h-4"></i>
          </button>
        </div>
      `;
    });
    cartItemsContainer.innerHTML = html;
  }

  if (window.lucide) {
    lucide.createIcons();
  }
}

/**
 * Open & Close Cart Drawer
 */
function openCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  if (drawer) {
    drawer.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
  renderCartUI();
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  if (drawer) {
    drawer.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

/**
 * Checkout Via WhatsApp (Format Multi-Order)
 */
function checkoutViaWhatsApp() {
  if (cart.length === 0) {
    showToast('Keranjang Anda masih kosong.');
    return;
  }

  const orderType = document.querySelector('input[name="cartOrderType"]:checked')?.value || 'Dine In (Di Tempat)';
  const customerName = document.getElementById('cartCustomerName')?.value.trim() || 'Pelanggan Hayati';
  const notes = document.getElementById('cartNotes')?.value.trim() || '-';
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  let itemsListText = '';
  cart.forEach((item, idx) => {
    const sub = item.price * item.quantity;
    itemsListText += `${idx + 1}. *${item.title}* (${item.quantity}x) = ${formatRupiah(sub)}\n`;
  });

  const waMessage = 
`Halo Hayati Coffee Roaster! ☕
Saya ingin melakukan pemesanan via website:

*Tipe Pesanan:* ${orderType}
*Nama Pemesan:* ${customerName}

*Daftar Menu:*
${itemsListText}
*Total Pembayaran:* ${formatRupiah(totalPrice)}
*Catatan / No. Meja:* ${notes}

Mohon konfirmasi ketersediaan pesanan. Terima kasih!`;

  const waUrl = `https://wa.me/6281225345877?text=${encodeURIComponent(waMessage)}`;
  window.open(waUrl, '_blank');
  closeCartDrawer();
  cart = [];
  saveCartToStorage();
  renderCartUI();
  showToast('Pesanan berhasil dikirim ke WhatsApp Hayati Coffee!');
}

/**
 * WhatsApp Reservation Modal
 */
function openWhatsAppModal() {
  const modal = document.getElementById('waModal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }
  if (window.lucide) {
    lucide.createIcons();
  }
}

function closeWhatsAppModal() {
  const modal = document.getElementById('waModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }
}

window.addEventListener('click', (e) => {
  const modal = document.getElementById('waModal');
  if (e.target === modal) {
    closeWhatsAppModal();
  }
});

function submitWhatsAppForm(e) {
  e.preventDefault();

  const name = document.getElementById('userName')?.value || '-';
  const date = document.getElementById('userDate')?.value || 'Hari ini';
  const time = document.getElementById('userTime')?.value || '-';
  const notes = document.getElementById('userMenu')?.value || '-';

  const message = 
`Halo Hayati Coffee Roaster! ☕

Saya ingin mengajukan *Reservasi Meja*:
- *Nama:* ${name}
- *Hari / Tanggal:* ${date}
- *Jam:* ${time}
- *Jumlah Orang & Catatan:* ${notes}

Mohon konfirmasi ketersediaan meja. Terima kasih!`;

  const waUrl = `https://wa.me/6281225345877?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');
  closeWhatsAppModal();
  showToast('Mengarahkan ke WhatsApp Hayati Coffee...');
}

/**
 * Copy Address helper with Toast
 */
function copyAddress() {
  const addressText = "Jl. Demangan Baru No. 7, Caturtunggal, Depok, Sleman, DIY 55281";
  
  if (navigator.clipboard) {
    navigator.clipboard.writeText(addressText).then(() => {
      showToast('Alamat Hayati Coffee berhasil disalin!');
    }).catch(() => {
      fallbackCopy(addressText);
    });
  } else {
    fallbackCopy(addressText);
  }
}

function fallbackCopy(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand('copy');
    showToast('Alamat Hayati Coffee berhasil disalin!');
  } catch (err) {
    showToast('Gagal menyalin alamat');
  }
  document.body.removeChild(textArea);
}

/**
 * Toast Notification Helper
 */
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.remove('translate-y-24', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-24', 'opacity-0');
  }, 3000);
}
