/* ===================================================
   STIKO - GRAFFITI PUNK / Y2K PUNK APPLICATION LOGIC
   =================================================== */

// Device Mockup Database with Multiple Color Variant Photos (from User Assets)
const MOCKUP_DEVICES = {
  laptop: {
    name: 'LAPTOP',
    colors: [
      { id: 'space-gray', label: 'SPACE GRAY', img: 'assets/laptop_space_gray.png' },
      { id: 'silver', label: 'SILVER', img: 'assets/laptop_silver.png' },
      { id: 'matte-black', label: 'MATTE BLACK', img: 'assets/laptop_matte_black.png' },
      { id: 'blue', label: 'MIDNIGHT BLUE', img: 'assets/laptop_midnight_blue.png' }
    ]
  },
  tumbler: {
    name: 'TUMBLER',
    colors: [
      { id: 'ivory', label: 'IVORY CREAM', img: 'assets/tumbler_ivory.png' },
      { id: 'black', label: 'MATTE BLACK', img: 'assets/tumbler_matte_black.png' },
      { id: 'blue', label: 'ELECTRIC BLUE', img: 'assets/tumbler_electric_blue.png' },
      { id: 'red', label: 'HOT RED', img: 'assets/tumbler_hot_red.png' }
    ]
  },
  tablet: {
    name: 'TABLET',
    colors: [
      { id: 'space-gray', label: 'SPACE GRAY', img: 'assets/ipad_space_gray.png' },
      { id: 'silver', label: 'SILVER', img: 'assets/ipad_silver.png' },
      { id: 'matte-black', label: 'MATTE BLACK', img: 'assets/ipad_matte_black.png' },
      { id: 'blue', label: 'AIR BLUE', img: 'assets/ipad_blue.png' }
    ]
  },
  phone: {
    name: 'PHONE',
    colors: [
      { id: 'silver', label: 'SILVER TITANIUM', img: 'assets/iphone_silver.png' },
      { id: 'black', label: 'SPACE BLACK', img: 'assets/iphone_midnight_black.png' },
      { id: 'blue', label: 'ELECTRIC BLUE', img: 'assets/iphone_electric_blue.png' },
      { id: 'gold', label: 'GOLD TITANIUM', img: 'assets/iphone_gold.png' }
    ]
  }
};

// Preset Stickers for Studio Testing
const PRESET_STICKERS = [
  {
    id: 'stiko-tag',
    name: 'STIKO Graffiti Tag Official',
    img: 'logo.png',
    category: 'die-cut'
  },
  {
    id: 'cyber-cat',
    name: 'Anarchy Neon Cat',
    img: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&auto=format&fit=crop&q=80',
    category: 'anime'
  },
  {
    id: 'retro-coffee',
    name: 'Midnight Caffeine Riot',
    img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&auto=format&fit=crop&q=80',
    category: 'aesthetic'
  },
  {
    id: 'astro-explorer',
    name: 'Zero Gravity Voyager',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&auto=format&fit=crop&q=80',
    category: 'holographic'
  },
  {
    id: 'dev-terminal',
    name: 'Kernel Panic Root Access',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&auto=format&fit=crop&q=80',
    category: 'tech'
  }
];

// Product Catalog Database
const PRODUCTS_DATA = [
  {
    id: 'p1',
    name: 'STIKO Graffiti Tag Official',
    category: 'die-cut',
    price: 9000,
    rating: 5.0,
    sold: 2450,
    badge: 'ICONIC',
    material: 'Die-Cut Vinyl',
    desc: 'Logo resmi STIKO gaya graffiti blocky street tag warna electric blue dengan outline tebal.',
    img: 'logo.png'
  },
  {
    id: 'p2',
    name: 'Anarchy Cyberpunk Cat',
    category: 'holographic',
    price: 9500,
    rating: 4.9,
    sold: 1420,
    badge: 'HOLO DROP',
    material: 'Holographic Rainbow',
    desc: 'Stiker kucing futuristik dengan lapisan foil pelangi yang memantulkan spektrum warna.',
    img: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'p3',
    name: 'Terminal Hack: Eat Sleep Code',
    category: 'tech',
    price: 7500,
    rating: 4.8,
    sold: 980,
    badge: 'PUNK DEV',
    material: 'Vinyl Matte Doff',
    desc: 'Stiker anti-mainstream developer. Tahan air, anti gores, cocok untuk laptop shell.',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'p4',
    name: 'Midnight Caffeine Club',
    category: 'aesthetic',
    price: 8000,
    rating: 4.9,
    sold: 840,
    badge: 'STREET',
    material: 'Glossy UV',
    desc: 'Desain emblem retro vintage pekat tajam tahan goresan dan tahan cuaca panas.',
    img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'p5',
    name: 'Cosmic Holographic Spaceman',
    category: 'holographic',
    price: 9500,
    rating: 5.0,
    sold: 1650,
    badge: 'LIMITED',
    material: 'Holographic Rainbow',
    desc: 'Astronot penjelajah galaksi dengan efek spektrum warna mewah dan garis potong rapi.',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'p6',
    name: 'Glitter Galaxy Nebula',
    category: 'glitter',
    price: 10500,
    rating: 4.9,
    sold: 530,
    badge: 'RAW GLITTER',
    material: 'Glitter UV Shimmer',
    desc: 'Dilapisi butiran kristal glitter mikro berkilau di bawah lampu. Daya rekat kuat.',
    img: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'p7',
    name: 'Shiba Inu Riot 8-Bit',
    category: 'die-cut',
    price: 7000,
    rating: 4.7,
    sold: 620,
    badge: 'RETRO',
    material: 'Die-Cut Vinyl',
    desc: 'Karakter anjing Shiba Inu bergaya 8-bit retro arcade gaming untuk casing handphone.',
    img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'p8',
    name: 'Tokyo Underground Kanji',
    category: 'anime',
    price: 8500,
    rating: 4.8,
    sold: 1100,
    badge: 'Y2K PUNK',
    material: 'Glossy UV',
    desc: 'Vibe jalanan underground kota Tokyo dengan tipografi kanji tebal street-culture.',
    img: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&auto=format&fit=crop&q=80'
  }
];

// App Global State
const state = {
  currentPage: 'home',
  cart: [
    {
      id: 'cart-1',
      productId: 'p1',
      name: 'STIKO Graffiti Tag Official',
      material: 'Die-Cut Vinyl',
      dimension: '7 × 7 cm',
      unitPrice: 9000,
      quantity: 5,
      img: 'logo.png',
      isCustom: false
    },
    {
      id: 'cart-2',
      productId: 'p3',
      name: 'Terminal Hack: Eat Sleep Code',
      material: 'Vinyl Matte Doff',
      dimension: '5 × 5 cm',
      unitPrice: 7500,
      quantity: 3,
      img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&auto=format&fit=crop&q=80',
      isCustom: false
    }
  ],
  studio: {
    currentImage: 'logo.png',
    stickerTitle: 'STIKO Graffiti Tag Official',
    material: 'holographic',
    dimensionKey: '7x7',
    dimensionLabel: '7 × 7 CM (SEDANG)',
    aiCropActive: true,
    outlineWidth: 6,
    aiUpscaleActive: true,
    quantity: 5,
    activeDevice: 'laptop',
    activeDeviceColor: 'space-gray',
    transform: {
      x: 80,
      y: 50,
      scale: 1.0,
      rotate: -8
    }
  },
  promo: {
    code: '',
    discountPercent: 0,
    isApplied: false
  },
  shipping: {
    courierId: 'sicepat',
    courierName: 'SICEPAT REG',
    cost: 12000
  },
  paymentMethod: 'qris',
  user: {
    name: 'Willys',
    email: 'willys@example.com',
    isLoggedIn: false
  }
};

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  renderPresetSelectors();
  renderHomeFeaturedProducts();
  renderProductsCatalog(PRODUCTS_DATA);
  renderDeviceColorButtons();
  updateCartBadges();
  initFigmaStyleTransformEngine();
  calculateStudioPrice();
  initDropZone();

  const hash = window.location.hash.replace('#', '');
  if (['home', 'products', 'studio', 'cart', 'payment', 'about'].includes(hash)) {
    navigateTo(hash);
  } else {
    navigateTo('home');
  }
});

// ==========================================
// NAVIGATION & ROUTING
// ==========================================
function navigateTo(pageId) {
  state.currentPage = pageId;
  window.location.hash = pageId;

  document.querySelectorAll('.page-view').forEach(view => {
    view.classList.add('hidden');
  });

  const targetView = document.getElementById(`page-${pageId}`);
  if (targetView) {
    targetView.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  // Update nav buttons
  document.querySelectorAll('.nav-btn').forEach(btn => {
    if (btn.id === 'nav-btn-studio') {
      btn.className = 'nav-btn px-3 py-1.5 border-2 border-punk-black bg-punk-blue text-punk-white hover:bg-punk-black transition-colors';
    } else {
      btn.className = 'nav-btn px-3 py-1.5 border-2 border-transparent hover:border-punk-black text-punk-black transition-colors';
    }
  });

  const activeBtn = document.getElementById(`nav-btn-${pageId}`);
  if (activeBtn) {
    if (pageId === 'studio') {
      activeBtn.className = 'nav-btn px-3 py-1.5 border-2 border-punk-black bg-punk-blue text-punk-white active';
    } else {
      activeBtn.className = 'nav-btn px-3 py-1.5 border-2 border-punk-black bg-punk-black text-punk-white active';
    }
  }

  if (pageId === 'cart') {
    renderCartPage();
  } else if (pageId === 'payment') {
    renderPaymentPage();
  } else if (pageId === 'studio') {
    clampStickerInsideDevice();
  }
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('mobile-menu-icon');
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    icon.classList.replace('fa-bars', 'fa-xmark');
  } else {
    menu.classList.add('hidden');
    icon.classList.replace('fa-xmark', 'fa-bars');
  }
}

// ==========================================
// STUDIO PRESETS & FILE HANDLING
// ==========================================
function renderPresetSelectors() {
  const container = document.getElementById('preset-selector-container');
  if (!container) return;

  container.innerHTML = PRESET_STICKERS.map((preset, index) => `
    <button onclick="selectPreset('${preset.id}', this)" class="preset-btn p-1 border-2 ${index === 0 ? 'border-punk-blue bg-punk-gray' : 'border-punk-black bg-punk-white'} transition-colors" title="${preset.name}">
      <img src="${preset.img}" alt="${preset.name}" class="w-full h-8 object-contain">
    </button>
  `).join('');
}

function selectPreset(presetId, element) {
  const preset = PRESET_STICKERS.find(p => p.id === presetId);
  if (!preset) return;

  state.studio.currentImage = preset.img;
  state.studio.stickerTitle = preset.name;
  updateStickerVisuals();

  document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.classList.remove('border-punk-blue', 'bg-punk-gray');
    btn.classList.add('border-punk-black', 'bg-punk-white');
  });

  if (element) {
    element.classList.remove('border-punk-black', 'bg-punk-white');
    element.classList.add('border-punk-blue', 'bg-punk-gray');
  }
}

function initDropZone() {
  const dropZone = document.getElementById('drop-zone');
  if (!dropZone) return;

  ['dragenter', 'dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropZone.classList.add('bg-punk-yellow/40');
    }, false);
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropZone.classList.remove('bg-punk-yellow/40');
    }, false);
  });

  dropZone.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    const files = dt.files;
    if (files.length > 0) {
      loadCustomImageFile(files[0]);
    }
  });
}

function handleFileUpload(event) {
  const file = event.target.files[0];
  if (file) {
    loadCustomImageFile(file);
  }
}

function loadCustomImageFile(file) {
  if (!file.type.match('image.*')) {
    alert('Harap pilih file gambar (PNG, JPG, SVG, WebP)');
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    state.studio.currentImage = e.target.result;
    state.studio.stickerTitle = file.name.replace(/\.[^/.]+$/, "") || 'Custom Sticker';
    
    showAiScanNotification();
    updateStickerVisuals();
  };
  reader.readAsDataURL(file);
}

function showAiScanNotification() {
  const indicator = document.getElementById('upscale-indicator');
  if (indicator) {
    indicator.textContent = '[AI SCAN: AUTO-CROPPING & ENHANCING TO 300 DPI...]';
    setTimeout(() => {
      indicator.textContent = '[STATUS AI: GAMBAR SIAP CETAK ULTRA-HD 300 DPI]';
    }, 1000);
  }
}

function toggleAiCrop(isActive) {
  state.studio.aiCropActive = isActive;
  const outlineControls = document.getElementById('outline-controls');
  if (outlineControls) {
    outlineControls.style.display = isActive ? 'flex' : 'none';
  }
  updateStickerVisuals();
}

function setOutlineWidth(widthPx, element) {
  state.studio.outlineWidth = widthPx;
  document.querySelectorAll('.outline-btn').forEach(btn => {
    btn.classList.remove('active', 'punk-btn');
    btn.classList.add('punk-btn-secondary');
  });

  if (element) {
    element.classList.add('active', 'punk-btn');
    element.classList.remove('punk-btn-secondary');
  }

  updateStickerVisuals();
}

function toggleAiUpscale(isActive) {
  state.studio.aiUpscaleActive = isActive;
  const indicator = document.getElementById('upscale-indicator');
  if (indicator) {
    if (isActive) {
      indicator.textContent = '[STATUS AI: GAMBAR SIAP CETAK ULTRA-HD 300 DPI]';
    } else {
      indicator.textContent = '[AI UPSCALE OFF: RESOLUSI STANDAR]';
    }
  }
  updateStickerVisuals();
}

function selectMaterial(materialKey, element) {
  state.studio.material = materialKey;

  document.querySelectorAll('.material-card').forEach(card => {
    card.classList.remove('border-punk-blue', 'bg-punk-gray');
    card.classList.add('border-punk-black', 'bg-punk-white');
  });

  if (element) {
    element.classList.remove('border-punk-black', 'bg-punk-white');
    element.classList.add('border-punk-blue', 'bg-punk-gray');
  }

  updateStickerVisuals();
  calculateStudioPrice();
}

function setDimension(dimKey, label, element) {
  state.studio.dimensionKey = dimKey;
  state.studio.dimensionLabel = label;
  document.getElementById('dimension-label').textContent = label;

  document.querySelectorAll('.dimension-btn').forEach(btn => {
    btn.classList.remove('active', 'punk-btn');
    btn.classList.add('punk-btn-secondary');
  });

  if (element) {
    element.classList.add('active', 'punk-btn');
    element.classList.remove('punk-btn-secondary');
  }

  const scaleMap = { '5x5': 0.75, '7x7': 1.0, '10x10': 1.35 };
  state.studio.transform.scale = scaleMap[dimKey] || 1.0;
  applyStickerTransform();
  calculateStudioPrice();
}

function updateStudioQty(delta) {
  const input = document.getElementById('studio-qty-input');
  let currentVal = parseInt(input.value) || 1;
  currentVal = Math.max(1, Math.min(500, currentVal + delta));
  input.value = currentVal;
  state.studio.quantity = currentVal;
  calculateStudioPrice();
}

function calculateStudioPrice() {
  const qty = parseInt(document.getElementById('studio-qty-input').value) || 1;
  state.studio.quantity = qty;

  let basePrice = 6000;
  if (state.studio.dimensionKey === '7x7') basePrice = 7500;
  if (state.studio.dimensionKey === '10x10') basePrice = 11000;

  const materialSurcharges = {
    'holographic': 3000,
    'vinyl-matte': 0,
    'glossy-uv': 1000,
    'glitter': 3500
  };
  const unitPrice = basePrice + (materialSurcharges[state.studio.material] || 0);

  let discountRate = 1.0;
  if (qty >= 10 && qty < 50) discountRate = 0.85;
  if (qty >= 50) discountRate = 0.75;

  const totalPrice = Math.round(unitPrice * qty * discountRate);

  document.getElementById('studio-total-price').textContent = formatRupiah(totalPrice).toUpperCase();
  document.getElementById('studio-unit-price').textContent = `${formatRupiah(unitPrice)} / pc (${getMaterialName(state.studio.material)})`;
}

function getMaterialName(key) {
  const map = {
    'holographic': 'Holographic Rainbow',
    'vinyl-matte': 'Vinyl Matte Doff',
    'glossy-uv': 'Glossy UV',
    'glitter': 'Glitter Shimmer'
  };
  return map[key] || 'Vinyl Matte';
}

function updateStickerVisuals() {
  const imgElement = document.getElementById('current-sticker-img');
  const visualWrapper = document.getElementById('sticker-visual-wrapper');

  if (imgElement) {
    imgElement.src = state.studio.currentImage;
    imgElement.style.filter = state.studio.aiUpscaleActive ? 'contrast(1.1) saturate(1.1)' : 'none';
  }

  if (visualWrapper) {
    visualWrapper.classList.remove('diecut-contour', 'diecut-thick', 'diecut-thin', 'holo-foil');

    if (state.studio.aiCropActive) {
      visualWrapper.classList.add('diecut-contour');
      if (state.studio.outlineWidth >= 10) {
        visualWrapper.classList.add('diecut-thick');
      } else if (state.studio.outlineWidth <= 3) {
        visualWrapper.classList.add('diecut-thin');
      }
    }

    if (state.studio.material === 'holographic') {
      visualWrapper.classList.add('holo-foil');
    }
  }
}

// ==========================================
// MOCKUP DEVICES & COLOR VARIANTS
// ==========================================
function switchMockupDevice(deviceKey, element) {
  state.studio.activeDevice = deviceKey;

  document.querySelectorAll('.device-tab').forEach(tab => {
    tab.classList.remove('active', 'punk-btn');
    tab.classList.add('punk-btn-secondary');
  });

  if (element) {
    element.classList.add('active', 'punk-btn');
    element.classList.remove('punk-btn-secondary');
  }

  document.querySelectorAll('.device-mockup').forEach(dev => dev.classList.add('hidden'));

  const targetDevice = document.getElementById(`device-${deviceKey}`);
  if (targetDevice) {
    targetDevice.classList.remove('hidden');
    
    // Move sticker into target device
    const sticker = document.getElementById('draggable-sticker');
    targetDevice.appendChild(sticker);
  }

  // Set default color variant for this device
  const deviceConfig = MOCKUP_DEVICES[deviceKey];
  if (deviceConfig && deviceConfig.colors.length > 0) {
    selectMockupColor(deviceConfig.colors[0].id);
  }
  renderDeviceColorButtons();

  clampStickerInsideDevice();
  applyStickerTransform();
}

function renderDeviceColorButtons() {
  const container = document.getElementById('device-color-buttons');
  if (!container) return;

  const currentDevice = MOCKUP_DEVICES[state.studio.activeDevice];
  if (!currentDevice) return;

  container.innerHTML = currentDevice.colors.map(c => `
    <button onclick="selectMockupColor('${c.id}')" class="color-var-btn text-[10px] font-bold px-2 py-0.5 border-2 ${c.id === state.studio.activeDeviceColor ? 'bg-punk-black text-punk-white border-punk-black' : 'bg-punk-white text-punk-black border-punk-black hover:bg-punk-gray'} uppercase">
      ${c.label}
    </button>
  `).join('');
}

function selectMockupColor(colorId) {
  state.studio.activeDeviceColor = colorId;
  const currentDevice = MOCKUP_DEVICES[state.studio.activeDevice];
  if (!currentDevice) return;

  const colorConfig = currentDevice.colors.find(c => c.id === colorId);
  if (!colorConfig) return;

  const imgEl = document.getElementById(`mockup-img-${state.studio.activeDevice}`);
  if (imgEl) {
    imgEl.src = colorConfig.img;
  }

  renderDeviceColorButtons();
}

// ==========================================
// FIGMA-STYLE ON-CANVAS TRANSFORM ENGINE
// (DRAG TO MOVE // CORNERS TO SCALE // TOP PIN TO ROTATE)
// ==========================================
function applyStickerTransform() {
  const sticker = document.getElementById('draggable-sticker');
  const hud = document.getElementById('transform-hud');

  if (sticker) {
    sticker.style.left = `${state.studio.transform.x}px`;
    sticker.style.top = `${state.studio.transform.y}px`;
    sticker.style.transform = `scale(${state.studio.transform.scale}) rotate(${state.studio.transform.rotate}deg)`;
  }

  if (hud) {
    hud.textContent = `${state.studio.transform.scale.toFixed(2)}x | ${state.studio.transform.rotate}°`;
  }
}

function resetStudioCanvas() {
  state.studio.transform.x = 80;
  state.studio.transform.y = 50;
  state.studio.transform.scale = 1.0;
  state.studio.transform.rotate = -8;
  applyStickerTransform();
}

function initFigmaStyleTransformEngine() {
  const sticker = document.getElementById('draggable-sticker');
  const box = document.getElementById('transform-box');
  const rotateHandle = document.getElementById('handle-rotate');
  const hud = document.getElementById('transform-hud');
  if (!sticker || !box) return;

  let currentMode = null; // 'drag', 'scale', 'rotate'
  let startX = 0;
  let startY = 0;
  let initialLeft = 0;
  let initialTop = 0;
  let initialScale = 1.0;
  let initialDistance = 1;
  let initialAngle = 0;
  let stickerCenter = { x: 0, y: 0 };

  function showHud() { if (hud) hud.classList.add('active'); }
  function hideHud() { if (hud) hud.classList.remove('active'); }

  // 1. ROTATE HANDLE LISTENER
  if (rotateHandle) {
    rotateHandle.addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      e.preventDefault();
      currentMode = 'rotate';
      showHud();

      const rect = box.getBoundingClientRect();
      stickerCenter = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      };

      const rad = Math.atan2(e.clientY - stickerCenter.y, e.clientX - stickerCenter.x);
      initialAngle = (rad * (180 / Math.PI)) - state.studio.transform.rotate;

      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);
    });
  }

  // 2. CORNER SCALE HANDLES LISTENER
  document.querySelectorAll('.scale-handle').forEach(handle => {
    handle.addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      e.preventDefault();
      currentMode = 'scale';
      showHud();

      const rect = box.getBoundingClientRect();
      stickerCenter = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      };

      initialDistance = Math.hypot(e.clientX - stickerCenter.x, e.clientY - stickerCenter.y);
      initialScale = state.studio.transform.scale;

      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);
    });
  });

  // 3. MOVE / TRANSLATE LISTENER (Click inside sticker)
  box.addEventListener('pointerdown', (e) => {
    // Avoid triggering move when clicking handles
    if (e.target.closest('.scale-handle') || e.target.closest('.rotate-handle')) return;
    
    e.preventDefault();
    currentMode = 'drag';
    showHud();

    startX = e.clientX;
    startY = e.clientY;
    initialLeft = state.studio.transform.x;
    initialTop = state.studio.transform.y;

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
  });

  function onPointerMove(e) {
    if (!currentMode) return;
    if (e.cancelable) e.preventDefault();

    if (currentMode === 'drag') {
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      state.studio.transform.x = initialLeft + dx;
      state.studio.transform.y = initialTop + dy;
      clampStickerInsideDevice();
    } else if (currentMode === 'scale') {
      const currentDist = Math.hypot(e.clientX - stickerCenter.x, e.clientY - stickerCenter.y);
      const ratio = currentDist / Math.max(10, initialDistance);
      const newScale = Math.max(0.4, Math.min(2.5, initialScale * ratio));
      state.studio.transform.scale = parseFloat(newScale.toFixed(2));
    } else if (currentMode === 'rotate') {
      const rad = Math.atan2(e.clientY - stickerCenter.y, e.clientX - stickerCenter.x);
      let deg = Math.round((rad * (180 / Math.PI)) - initialAngle);
      // Normalize angle between -180 and 180
      deg = (deg % 360);
      if (deg > 180) deg -= 360;
      if (deg < -180) deg += 360;
      state.studio.transform.rotate = deg;
    }

    applyStickerTransform();
  }

  function onPointerUp() {
    currentMode = null;
    hideHud();
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
  }
}

function clampStickerInsideDevice() {
  const sticker = document.getElementById('draggable-sticker');
  if (!sticker || !sticker.parentElement) return;

  const parent = sticker.parentElement;
  const parentWidth = parent.clientWidth || 300;
  const parentHeight = parent.clientHeight || 250;

  state.studio.transform.x = Math.max(-20, Math.min(parentWidth - 60, state.studio.transform.x));
  state.studio.transform.y = Math.max(-20, Math.min(parentHeight - 60, state.studio.transform.y));
}

// ==========================================
// CART LOGIC
// ==========================================
function addCustomToCart() {
  const qty = state.studio.quantity;
  let basePrice = 6000;
  if (state.studio.dimensionKey === '7x7') basePrice = 7500;
  if (state.studio.dimensionKey === '10x10') basePrice = 11000;

  const materialSurcharges = {
    'holographic': 3000,
    'vinyl-matte': 0,
    'glossy-uv': 1000,
    'glitter': 3500
  };
  const unitPrice = basePrice + (materialSurcharges[state.studio.material] || 0);

  const newItem = {
    id: `custom-${Date.now()}`,
    productId: 'custom-ai',
    name: `${state.studio.stickerTitle} [CUSTOM]`,
    material: getMaterialName(state.studio.material),
    dimension: state.studio.dimensionLabel,
    unitPrice: unitPrice,
    quantity: qty,
    img: state.studio.currentImage,
    isCustom: true
  };

  state.cart.unshift(newItem);
  updateCartBadges();

  const toCart = confirm(`Stiker "${newItem.name}" (${qty} pcs) ditambahkan ke Keranjang. Buka halaman keranjang sekarang?`);
  if (toCart) {
    navigateTo('cart');
  }
}

function addProductToCart(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const existing = state.cart.find(item => item.productId === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.unshift({
      id: `cart-${Date.now()}`,
      productId: product.id,
      name: product.name,
      material: product.material,
      dimension: '7 × 7 cm',
      unitPrice: product.price,
      quantity: 1,
      img: product.img,
      isCustom: false
    });
  }

  updateCartBadges();
  alert(`"${product.name}" masuk ke Keranjang.`);
}

function updateCartBadges() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const headerCount = document.getElementById('header-cart-count');
  const mobileCount = document.getElementById('mobile-cart-count');
  const badgeCount = document.getElementById('cart-item-count-badge');

  if (headerCount) headerCount.textContent = totalCount;
  if (mobileCount) mobileCount.textContent = totalCount;
  if (badgeCount) badgeCount.textContent = state.cart.length;
}

function renderCartPage() {
  const listContainer = document.getElementById('cart-items-list');
  const emptyState = document.getElementById('cart-empty-state');
  const paymentBtn = document.getElementById('btn-goto-payment');

  if (state.cart.length === 0) {
    if (listContainer) listContainer.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    if (paymentBtn) paymentBtn.setAttribute('disabled', 'true');
    calculateCartTotals();
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');
  if (paymentBtn) paymentBtn.removeAttribute('disabled');

  listContainer.innerHTML = state.cart.map(item => `
    <div class="p-4 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
      <div class="flex items-center gap-4 w-full sm:w-auto">
        <div class="w-16 h-16 bg-punk-gray border-2 border-punk-black p-1 flex items-center justify-center shrink-0">
          <img src="${item.img}" alt="${item.name}" class="w-full h-full object-contain">
        </div>
        <div>
          <span class="font-bold text-sm text-punk-black uppercase block">${item.name}</span>
          <span class="text-punk-black/70 text-[11px] block">[MATERIAL: ${item.material.toUpperCase()}] [SIZE: ${item.dimension}]</span>
          <span class="font-bold text-punk-blue mt-1 block">${formatRupiah(item.unitPrice)} / pc</span>
        </div>
      </div>

      <div class="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
        <div class="flex items-center border-2 border-punk-black">
          <button onclick="changeCartQty('${item.id}', -1)" class="w-7 h-7 bg-punk-gray hover:bg-punk-black hover:text-punk-white font-bold">-</button>
          <span class="w-8 text-center font-bold">${item.quantity}</span>
          <button onclick="changeCartQty('${item.id}', 1)" class="w-7 h-7 bg-punk-gray hover:bg-punk-black hover:text-punk-white font-bold">+</button>
        </div>

        <span class="font-display text-sm text-punk-black w-24 text-right">
          ${formatRupiah(item.unitPrice * item.quantity)}
        </span>

        <button onclick="removeCartItem('${item.id}')" class="text-punk-black hover:text-punk-red p-1 font-bold" title="Hapus">
          [X]
        </button>
      </div>
    </div>
  `).join('');

  calculateCartTotals();
}

function changeCartQty(cartId, delta) {
  const item = state.cart.find(c => c.id === cartId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter(c => c.id !== cartId);
  }

  updateCartBadges();
  renderCartPage();
}

function removeCartItem(cartId) {
  state.cart = state.cart.filter(c => c.id !== cartId);
  updateCartBadges();
  renderCartPage();
}

function clearCart() {
  if (confirm('Kosongkan semua item di keranjang?')) {
    state.cart = [];
    updateCartBadges();
    renderCartPage();
  }
}

function calculateCartTotals() {
  const subtotal = state.cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
  let discountAmount = 0;

  if (state.promo.isApplied && state.promo.discountPercent > 0) {
    discountAmount = Math.round(subtotal * (state.promo.discountPercent / 100));
    document.getElementById('cart-discount-row').classList.remove('hidden');
    document.getElementById('cart-discount').textContent = `- ${formatRupiah(discountAmount)}`;
  } else {
    document.getElementById('cart-discount-row').classList.add('hidden');
  }

  const finalTotal = Math.max(0, subtotal - discountAmount);

  document.getElementById('cart-subtotal').textContent = formatRupiah(subtotal);
  document.getElementById('cart-final-total').textContent = formatRupiah(finalTotal);

  return { subtotal, discountAmount, finalTotal };
}

function applyPromoCode() {
  const input = document.getElementById('cart-promo-input');
  const code = (input.value || '').trim().toUpperCase();

  if (code === 'STIKOAI') {
    state.promo.code = 'STIKOAI';
    state.promo.discountPercent = 15;
    state.promo.isApplied = true;
    document.getElementById('promo-applied-badge').classList.remove('hidden');
    calculateCartTotals();
  } else if (code === '') {
    alert('Ketik kode voucher!');
  } else {
    alert('Kode tidak valid. Gunakan: STIKOAI');
  }
}

function removePromoCode() {
  state.promo.code = '';
  state.promo.discountPercent = 0;
  state.promo.isApplied = false;
  document.getElementById('cart-promo-input').value = '';
  document.getElementById('promo-applied-badge').classList.add('hidden');
  calculateCartTotals();
}

// ==========================================
// PAYMENT PAGE
// ==========================================
function renderPaymentPage() {
  if (state.cart.length === 0) {
    alert('Keranjang masih kosong.');
    navigateTo('products');
    return;
  }

  const itemsSummary = document.getElementById('payment-items-summary');
  if (itemsSummary) {
    itemsSummary.innerHTML = state.cart.map(item => `
      <div class="flex items-center justify-between py-1 border-b border-punk-black/10">
        <span class="truncate max-w-[200px] uppercase font-bold">${item.quantity}X ${item.name}</span>
        <span class="font-bold">${formatRupiah(item.unitPrice * item.quantity)}</span>
      </div>
    `).join('');
  }

  updatePaymentSummary();
}

function selectCourier(courierId, cost, element) {
  state.shipping.courierId = courierId;
  state.shipping.cost = cost;

  const names = {
    'sicepat': 'SICEPAT REG',
    'jne': 'JNE YES (KILAT)',
    'gosend': 'GOSEND INSTANT'
  };
  state.shipping.courierName = names[courierId] || 'KURIR REGULER';

  document.querySelectorAll('.courier-card').forEach(card => {
    card.classList.remove('border-punk-blue', 'bg-punk-gray');
    card.classList.add('border-punk-black', 'bg-punk-white');
  });

  if (element) {
    element.classList.remove('border-punk-black', 'bg-punk-white');
    element.classList.add('border-punk-blue', 'bg-punk-gray');
  }

  updatePaymentSummary();
}

function selectPaymentMethod(methodKey, element) {
  state.paymentMethod = methodKey;

  document.querySelectorAll('.payment-method-card').forEach(card => {
    card.classList.remove('border-punk-blue', 'bg-punk-gray');
    card.classList.add('border-punk-black', 'bg-punk-white');
  });

  if (element) {
    element.classList.remove('border-punk-black', 'bg-punk-white');
    element.classList.add('border-punk-blue', 'bg-punk-gray');
  }

  const qrisBox = document.getElementById('qris-preview-box');
  if (qrisBox) {
    qrisBox.style.display = (methodKey === 'qris') ? 'flex' : 'none';
  }
}

function updatePaymentSummary() {
  const { subtotal, discountAmount } = calculateCartTotals();
  const shippingCost = state.shipping.cost;
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingCost);

  document.getElementById('payment-subtotal').textContent = formatRupiah(subtotal);
  if (discountAmount > 0) {
    document.getElementById('payment-discount-row').classList.remove('hidden');
    document.getElementById('payment-discount').textContent = `- ${formatRupiah(discountAmount)}`;
  } else {
    document.getElementById('payment-discount-row').classList.add('hidden');
  }

  document.getElementById('payment-courier-name').textContent = state.shipping.courierName;
  document.getElementById('payment-shipping-cost').textContent = formatRupiah(shippingCost);
  document.getElementById('payment-grand-total').textContent = formatRupiah(grandTotal);

  const payBtn = document.getElementById('btn-pay-now');
  if (payBtn) {
    payBtn.textContent = `BAYAR SEKARANG (${formatRupiah(grandTotal)})`;
  }
}

function executePayment() {
  const recipientName = (document.getElementById('ship-name').value || 'Pelanggan').trim();
  const phone = (document.getElementById('ship-phone').value || '').trim();
  const address = (document.getElementById('ship-address').value || '').trim();

  if (!recipientName || !phone || !address) {
    alert('Harap isi nama, nomor telepon, dan alamat pengiriman!');
    return;
  }

  const { subtotal, discountAmount } = calculateCartTotals();
  const grandTotal = subtotal - discountAmount + state.shipping.cost;
  const orderNumber = `STK-${Math.floor(100000 + Math.random() * 900000)}`;

  document.getElementById('invoice-order-id').textContent = `#${orderNumber}`;
  document.getElementById('invoice-name').textContent = recipientName;
  document.getElementById('invoice-courier').textContent = state.shipping.courierName;

  const methodNames = {
    'qris': 'QRIS Instant (GoPay / BCA / OVO)',
    'va': 'BCA Virtual Account',
    'cc': 'Kartu Kredit / Debit Visa'
  };
  document.getElementById('invoice-payment').textContent = methodNames[state.paymentMethod] || 'Transfer Otomatis';
  document.getElementById('invoice-total').textContent = formatRupiah(grandTotal);

  if (window.confetti) {
    window.confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
  }

  const invoiceModal = document.getElementById('invoice-modal');
  if (invoiceModal) {
    invoiceModal.classList.remove('hidden');
    invoiceModal.classList.add('flex');
  }

  state.cart = [];
  updateCartBadges();
}

function closeInvoiceModal() {
  const invoiceModal = document.getElementById('invoice-modal');
  if (invoiceModal) {
    invoiceModal.classList.add('hidden');
    invoiceModal.classList.remove('flex');
  }
}

function closeInvoiceModalAndGoHome() {
  closeInvoiceModal();
  navigateTo('home');
}

// ==========================================
// PRODUCTS CATALOG & QUICK VIEW
// ==========================================
function renderHomeFeaturedProducts() {
  const grid = document.getElementById('home-featured-grid');
  if (!grid) return;
  const featured = PRODUCTS_DATA.slice(0, 4);
  grid.innerHTML = featured.map(p => createProductCardHTML(p)).join('');
}

function renderProductsCatalog(products) {
  const grid = document.getElementById('products-catalog-grid');
  const noMsg = document.getElementById('no-products-msg');
  if (!grid) return;

  if (products.length === 0) {
    grid.innerHTML = '';
    if (noMsg) noMsg.classList.remove('hidden');
    return;
  }

  if (noMsg) noMsg.classList.add('hidden');
  grid.innerHTML = products.map(p => createProductCardHTML(p)).join('');
}

function createProductCardHTML(product) {
  return `
    <div class="border-2 border-punk-black bg-punk-white flex flex-col justify-between font-mono text-xs">
      <div class="bg-punk-gray p-4 flex items-center justify-center relative border-b-2 border-punk-black">
        <img src="${product.img}" alt="${product.name}" class="w-32 h-32 object-contain">
        <span class="absolute top-2 left-2 bg-punk-blue text-punk-white text-[9px] font-bold px-1.5 py-0.5 uppercase">
          ${product.badge}
        </span>
        <button onclick="openQuickView('${product.id}')" class="absolute bottom-2 right-2 bg-punk-yellow text-punk-black font-bold text-[10px] px-2 py-1 uppercase border border-punk-black">
          PREVIEW
        </button>
      </div>

      <div class="p-4 flex flex-col justify-between flex-grow space-y-3">
        <div>
          <div class="flex justify-between items-center text-[10px] text-punk-black/70 mb-1">
            <span class="font-bold uppercase">${product.material}</span>
            <span class="font-bold text-punk-black">[${product.rating}/5.0]</span>
          </div>
          <h3 class="font-display text-sm uppercase text-punk-black line-clamp-1">${product.name}</h3>
          <p class="text-[11px] text-punk-black/70 line-clamp-2 mt-1 leading-relaxed">${product.desc}</p>
        </div>

        <div class="pt-3 border-t-2 border-punk-black flex items-center justify-between">
          <div>
            <span class="text-[9px] text-punk-black/60 uppercase block">HARGA:</span>
            <span class="font-display text-base text-punk-black">${formatRupiah(product.price)}</span>
          </div>
          <div class="flex gap-1">
            <button onclick="customizeProductInStudio('${product.id}')" class="punk-btn-secondary p-2 text-xs font-bold" title="Custom di Studio">
              <i class="fa-solid fa-sliders"></i>
            </button>
            <button onclick="addProductToCart('${product.id}')" class="punk-btn px-3 py-1.5 font-bold uppercase text-[11px]">
              + BELI
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function setCategoryFilter(categoryKey, element) {
  document.querySelectorAll('.category-chip').forEach(chip => {
    chip.classList.remove('active', 'punk-btn');
    chip.classList.add('punk-btn-secondary');
  });

  if (element) {
    element.classList.add('active', 'punk-btn');
    element.classList.remove('punk-btn-secondary');
  }

  filterProducts(categoryKey);
}

function filterProducts(categoryOverride) {
  const searchVal = (document.getElementById('product-search-input').value || '').toLowerCase();
  const sortVal = document.getElementById('product-sort-select').value;

  const activeChip = document.querySelector('.category-chip.active');
  let categoryKey = 'all';
  if (categoryOverride) {
    categoryKey = categoryOverride;
  } else if (activeChip) {
    const text = activeChip.innerText.toLowerCase();
    if (text.includes('holographic')) categoryKey = 'holographic';
    else if (text.includes('die-cut')) categoryKey = 'die-cut';
    else if (text.includes('tech')) categoryKey = 'tech';
    else if (text.includes('streetwear')) categoryKey = 'aesthetic';
    else if (text.includes('punk')) categoryKey = 'anime';
    else if (text.includes('glitter')) categoryKey = 'glitter';
  }

  let filtered = PRODUCTS_DATA.filter(p => {
    const matchCat = (categoryKey === 'all' || p.category === categoryKey);
    const matchSearch = p.name.toLowerCase().includes(searchVal) || p.desc.toLowerCase().includes(searchVal);
    return matchCat && matchSearch;
  });

  if (sortVal === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortVal === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortVal === 'name') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    filtered.sort((a, b) => b.sold - a.sold);
  }

  renderProductsCatalog(filtered);
}

function customizeProductInStudio(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  state.studio.currentImage = product.img;
  state.studio.stickerTitle = product.name;
  if (product.category === 'holographic') state.studio.material = 'holographic';
  else if (product.category === 'glitter') state.studio.material = 'glitter';
  else state.studio.material = 'vinyl-matte';

  updateStickerVisuals();
  calculateStudioPrice();
  navigateTo('studio');
}

function openQuickView(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  document.getElementById('qv-img').src = product.img;
  document.getElementById('qv-category').textContent = product.material;
  document.getElementById('qv-title').textContent = product.name;
  document.getElementById('qv-price').textContent = `${formatRupiah(product.price)} / pc`;
  document.getElementById('qv-desc').textContent = product.desc;

  document.getElementById('qv-btn-customize').onclick = () => {
    closeQuickViewModal();
    customizeProductInStudio(product.id);
  };
  document.getElementById('qv-btn-cart').onclick = () => {
    closeQuickViewModal();
    addProductToCart(product.id);
  };

  const modal = document.getElementById('quickview-modal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeQuickViewModal() {
  const modal = document.getElementById('quickview-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

// ==========================================
// AUTH MODAL WITH PASSWORD CONFIRMATION
// ==========================================
function openAuthModal() {
  const modal = document.getElementById('auth-modal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeAuthModal() {
  const modal = document.getElementById('auth-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function switchAuthTab(tab) {
  const tabLogin = document.getElementById('auth-tab-login');
  const tabRegister = document.getElementById('auth-tab-register');
  const formLogin = document.getElementById('form-login');
  const formRegister = document.getElementById('form-register');

  if (tab === 'login') {
    tabLogin.classList.add('bg-punk-black', 'text-punk-white');
    tabLogin.classList.remove('bg-punk-gray', 'text-punk-black');
    tabRegister.classList.add('bg-punk-gray', 'text-punk-black');
    tabRegister.classList.remove('bg-punk-black', 'text-punk-white');
    formLogin.classList.remove('hidden');
    formRegister.classList.add('hidden');
  } else {
    tabRegister.classList.add('bg-punk-black', 'text-punk-white');
    tabRegister.classList.remove('bg-punk-gray', 'text-punk-black');
    tabLogin.classList.add('bg-punk-gray', 'text-punk-black');
    tabLogin.classList.remove('bg-punk-black', 'text-punk-white');
    formRegister.classList.remove('hidden');
    formLogin.classList.add('hidden');
  }
}

function handleAuthSubmit(event, type) {
  event.preventDefault();

  if (type === 'login') {
    state.user.isLoggedIn = true;
    state.user.email = document.getElementById('login-email').value || 'willys@example.com';
    state.user.name = state.user.email.split('@')[0] || 'Willys';
    document.getElementById('user-display-name').textContent = state.user.name.toUpperCase();
    closeAuthModal();
    alert(`User ${state.user.name.toUpperCase()} berhasil masuk.`);
  } else {
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('reg-confirm-password').value;

    if (password !== confirmPassword) {
      alert('Password dan Konfirmasi Password tidak cocok!');
      return;
    }

    if (password.length < 8) {
      alert('Password minimal 8 karakter!');
      return;
    }

    state.user.isLoggedIn = true;
    state.user.name = document.getElementById('reg-name').value || 'Willys';
    state.user.email = document.getElementById('reg-email').value || 'willys@example.com';
    document.getElementById('user-display-name').textContent = state.user.name.toUpperCase();
    closeAuthModal();
    alert(`Akun berhasil dibuat! Selamat datang, ${state.user.name.toUpperCase()}.`);
  }
}

function formatRupiah(number) {
  return 'Rp ' + Number(number).toLocaleString('id-ID');
}
