// ==========================
// DOKTERTECNO – DATA DUMMY
// ==========================

// ----- Layanan utama -----
const SERVICES = [
  {
    slug: "hp-laptop",
    name: "Servis HP, Laptop, Tablet & PC",
    category: "Gadget & Komputer",
    description:
      "Perbaikan perangkat smartphone, tablet, laptop, dan PC desktop untuk masalah umum seperti layar pecah, baterai drop, error sistem, hingga upgrade komponen.",
    issues: [
      "Layar pecah / bergaris (HP / tablet)",
      "Baterai cepat habis / tidak mau mengisi",
      "Tidak bisa menyala (HP, laptop, PC)",
      "Booting sangat lambat / sering hang",
      "Overheating / cepat panas saat digunakan lama",
      "PC sering restart sendiri / blue screen (BSOD)",
    ],
    pricing: [
      ["Ganti baterai HP / Tablet", "Rp150.000 – Rp450.000"],
      ["Ganti LCD HP / Tablet", "Rp350.000 – Rp1.500.000"],
      ["Install ulang OS laptop / PC", "Rp150.000 – Rp350.000"],
      ["Upgrade SSD/RAM laptop / PC", "Rp100.000 – Rp250.000 (jasa)"],
      ["Cleaning & perawatan PC (internal)", "Rp150.000 – Rp300.000"],
    ],
    duration: "1–3 hari kerja tergantung tingkat kerusakan dan jenis perangkat.",
  },
  {
    slug: "kamera-drone",
    name: "Servis Kamera & Drone",
    category: "Kamera & Drone",
    description:
      "Perbaikan kamera profesional, action cam, dan drone untuk masalah gimbal, lensa, sensor, atau error sistem penerbangan.",
    issues: [
      "Gimbal error / tidak stabil",
      "Lensa macet / tidak fokus",
      "Sensor kotor / bercak",
      "Drone tidak bisa take-off",
      "Error firmware / kalibrasi",
    ],
    pricing: [
      ["Kalibrasi gimbal drone", "Rp400.000 – Rp900.000"],
      ["Cleaning sensor kamera", "Rp250.000 – Rp600.000"],
      ["Perbaikan modul kamera drone", "Rp800.000 – Rp2.500.000"],
    ],
    duration: "2–5 hari kerja tergantung ketersediaan suku cadang.",
  },
  {
    slug: "office-venue",
    name: "Servis Perangkat Kantor, Sound System & AC Ringan",
    category: "Perangkat Kantor & Venue",
    description:
      "Layanan untuk printer, scanner, router, access point, sound system (speaker aktif, mixer, mic wireless), serta AC ruangan kecil–menengah.",
    issues: [
      "Printer kertas sering macet / tinta tidak keluar",
      "Router / Wi-Fi sering putus / lemot",
      "Sound system berdengung / suara pecah",
      "Mic wireless tidak stabil / putus-putus",
      "AC kurang dingin / berbau / kotor",
      "AC untuk ruangan kerja / kasir perlu cleaning berkala",
    ],
    pricing: [
      ["Cleaning & maintenance printer", "Rp200.000 – Rp450.000"],
      ["Perbaikan mekanik kertas macet", "Rp300.000 – Rp750.000"],
      ["Konfigurasi ulang router / Wi-Fi", "Rp150.000 – Rp350.000"],
      ["Cek & perbaiki sound system ringan", "Rp250.000 – Rp700.000"],
      ["Cleaning AC split 0,5–2 PK", "Rp250.000 – Rp450.000"],
    ],
    duration:
      "1–4 hari kerja tergantung jenis perangkat & tingkat kerusakan. Untuk AC & sound system, jadwal kunjungan disesuaikan slot teknisi.",
  },
];

// ----- Konten Blog / Edukasi -----
const BLOG_POSTS = [
  {
    slug: "tips-merawat-laptop",
    title: "5 Tips Merawat Laptop Agar Tidak Cepat Rusak",
    date: "12 November 2025",
    excerpt:
      "Laptop yang dirawat dengan benar bukan hanya lebih awet, tetapi juga lebih nyaman digunakan sehari-hari.",
    content: `
      <p>Laptop adalah salah satu perangkat kerja utama bagi pelajar, mahasiswa, maupun pekerja kantoran. Namun, banyak kerusakan terjadi bukan karena kualitas komponen yang buruk, melainkan karena kebiasaan penggunaan yang kurang tepat.</p>
      <p>Beberapa tips sederhana yang bisa dilakukan antara lain:</p>
      <ul>
        <li>Menghindari menutup laptop dengan benda di atas keyboard.</li>
        <li>Membersihkan ventilasi dan area kipas secara berkala.</li>
        <li>Tidak menggunakan laptop di permukaan yang empuk (kasur, bantal).</li>
        <li>Mengatur siklus charging baterai dan tidak membiarkan overheat.</li>
        <li>Melakukan servis berkala untuk cleaning internal.</li>
      </ul>
      <p>Dengan perawatan yang baik, Anda bisa menunda kebutuhan untuk ganti perangkat dan menekan biaya perbaikan yang lebih besar di kemudian hari.</p>
    `,
  },
  {
    slug: "kapan-servis-kamera",
    title: "Kapan Kamera & Lensa Harus Diservis?",
    date: "5 November 2025",
    excerpt:
      "Kamera profesional adalah aset penting bagi fotografer. Mengenali tanda-tanda awal kerusakan sangat krusial.",
    content: `
      <p>Kamera dan lensa yang sering digunakan di luar ruangan sangat rentan terhadap debu, kelembapan, dan benturan kecil yang tidak disadari.</p>
      <p>Beberapa indikasi bahwa kamera Anda perlu diservis:</p>
      <ul>
        <li>Foto mulai tampak blur meski pengaturan sudah benar.</li>
        <li>Ada bercak hitam yang selalu muncul di posisi yang sama.</li>
        <li>Ring zoom atau fokus terasa seret.</li>
        <li>Muncul error di layar berkaitan dengan shutter atau kartu memori.</li>
      </ul>
      <p>Servis berkala berupa cleaning sensor dan pengecekan optik bisa memperpanjang usia pakai dan menjaga kualitas gambar.</p>
    `,
  },
];

// ----- Testimoni dummy -----
const TESTIMONIALS = [
  {
    name: "Raka Putra",
    role: "Mahasiswa – Pengguna Laptop & Tablet",
    city: "Medan",
    device: "Laptop tidak menyala & tablet lemot",
    rating: 5,
    text:
      "Laptop sempat tidak mau menyala dua hari sebelum sidang. DOKTERTECNO ambil perangkat ke kos, diagnosa cepat, dan dalam sehari laptop sudah normal. Tablet saya ikut dibersihkan dan jadi jauh lebih responsif.",
  },
  {
    name: "Citra Anggraini",
    role: "Content Creator",
    city: "Medan",
    device: "HP & kamera untuk konten harian",
    rating: 5,
    text:
      "Saya mengandalkan HP dan kamera setiap hari untuk konten. DOKTERTECNO bantu cek keduanya, ganti baterai, dan hasilnya daya tahan jadi jauh lebih baik. Tracking status servis di web juga bikin tenang.",
  },
  {
    name: "Bapak Andi",
    role: "Pemilik UMKM Kafe",
    city: "Medan",
    device: "PC kasir, printer struk & AC ruang utama",
    rating: 4,
    text:
      "PC kasir, printer, dan AC di kafe sempat bermasalah dan mengganggu antrian. Setelah pakai DOKTERTECNO, mereka sarankan paket maintenance rutin. Sekarang operasional lebih stabil dan jarang error.",
  },
];

// ----- Membership -----
const MEMBERSHIP_TIERS = [
  {
    name: "Free",
    tag: "Default",
    desc: "Akses semua layanan dengan harga normal dan tracking standar.",
    perks: [
      "Tracking servis real-time",
      "Notifikasi update status via WhatsApp",
      "Garansi servis dasar sesuai jenis layanan",
    ],
  },
  {
    name: "Silver",
    tag: "Populer",
    desc: "Cocok untuk pengguna rutin dengan beberapa perangkat.",
    perks: [
      "Diskon 5% biaya jasa servis",
      "Prioritas antrian di jadwal normal",
      "Pengingat servis berkala untuk perangkat penting",
    ],
  },
  {
    name: "Gold",
    tag: "Profesional",
    desc: "Untuk kreator, freelancer, atau kantor kecil dengan banyak perangkat.",
    perks: [
      "Diskon 10% jasa servis",
      "Prioritas penjadwalan & pickup",
      "Klaim garansi diproses lebih cepat",
      "Konsultasi teknis ringan tanpa biaya",
    ],
  },
];

// ----- Paket B2B Maintenance -----
const CORPORATE_PLANS = [
  {
    name: "Basic UMKM",
    tag: "Cafe / Toko Kecil",
    desc: "Paket perawatan untuk 3–5 perangkat utama seperti PC kasir, printer struk, router, sound kecil, dan 1 AC ruangan.",
    perks: [
      "1× kunjungan rutin setiap 3 bulan",
      "Maintenance 3–5 perangkat operasional",
      "Cleaning printer & PC kasir",
      "Cleaning filter AC & cek suhu dasar",
      "Respon keluhan maks. 3 hari kerja",
    ],
  },
  {
    name: "Plus Office",
    tag: "Kantor Kecil / Studio",
    desc: "Untuk kantor kecil, studio kreatif, dan klinik dengan kebutuhan operasional harian.",
    perks: [
      "1× kunjungan rutin setiap 2 bulan",
      "Maintenance hingga 10 perangkat (PC, laptop, printer, router, sound system meeting, AC)",
      "Health-check OS & keamanan dasar",
      "SLA respon keluhan 1–2 hari kerja",
    ],
  },
  {
    name: "Enterprise",
    tag: "Co-Working / Venue Besar",
    desc: "Paket fleksibel untuk organisasi dengan banyak perangkat kritis (ruang kerja, hall acara, lab, dsb).",
    perks: [
      "Kunjungan rutin bulanan",
      "Maintenance 15+ perangkat",
      "Visit khusus sebelum event besar (opsional)",
      "SLA respon 24 jam untuk perangkat kritis",
      "Diskon khusus jasa di luar kontrak",
    ],
  },
];

// ----- Asset & Reminder B2B (dummy di Dashboard) -----
const B2B_ASSETS_DUMMY = [
  {
    name: "PC Kasir 01",
    location: "Ruang Kasir",
    status: "Normal",
    nextService: "10 Februari 2026",
  },
  {
    name: "Printer Struk",
    location: "Meja Kasir",
    status: "Perlu cek",
    nextService: "25 Januari 2026",
  },
  {
    name: "Router Wi-Fi Utama",
    location: "Plafon Tengah",
    status: "Normal",
    nextService: "10 Maret 2026",
  },
  {
    name: "AC Ruang Utama",
    location: "Ruang Pelanggan",
    status: "Perlu cleaning",
    nextService: "5 Januari 2026",
  },
];

// ----- Teknisi dummy -----
const TEKNISI = [
  { 
    name: "Rifky Anantta", 
    skill: "Laptop • PC • OS Troubleshooting", 
    rating: 5,
    photo: "teknisigacor31413.jpeg"
  },
  { 
    name: "Wira Hutagalung", 
    skill: "HP • Tablet • LCD & Battery Specialist", 
    rating: 5,
    photo: "teknisisgacorrrr2.jpeg"
  },
  { 
    name: "Alfarabi Pratama", 
    skill: "Printer • Scanner • Mesin Kasir", 
    rating: 4,
    photo: "teknisigacorrrr3.jpeg"
  },
  { 
    name: "Ariel Primbro", 
    skill: "Network • Router • WiFi Setup", 
    rating: 4,
    photo: "teknisigacorrr4.jpeg"
  },
  { 
    name: "Queen Bisdig", 
    skill: "Sound System • Mixer • Mic Wireless", 
    rating: 5,
    photo: "teknisigaocorrkaliini.jpeg"
  },
  { 
    name: "ronaldo sihombing", 
    skill: "AC • Maintenance • Cleaning", 
    rating: 4,
    photo: "teknisisgacor2.jpg"
  },
  { 
    name: "goat messii", 
    skill: "Kamera • Drone • Gimbal Specialist", 
    rating: 5,
    photo: "teknisigacorr1.jpg"
  },
  { 
    name: "my bini", 
    skill: "PC Gaming • Modding • Upgrade", 
    rating: 4,
    photo: "download (8).jpg"
  },
  { 
    name: "dimas blum mandi", 
    skill: "Data Recovery • HDD/SSD", 
    rating: 5,
    photo: "teknisigacor331.jpeg"
  },
  { 
    name: "Daffa Sitorus", 
    skill: "Macbook Specialist • Logicboard", 
    rating: 5,
    photo: "WhatsApp Image 2025-11-14 at 18.47.09.jpeg"
  },
  { 
    name: "Kairi Nasution", 
    skill: "Laptop Tipis • Ultrabook • Keyboard", 
    rating: 4,
    photo: "WhatsApp Image 2025-11-15 at 17.44.35.jpeg"
  },
  { 
    name: "hansohee", 
    skill: "HP Mid–High End • Kamera & Storage", 
    rating: 5,
    photo: "download (9).jpg"
  },
  { 
    name: "jihyo", 
    skill: "CCTV • NVR • Sistem Keamanan", 
    rating: 4,
    photo: "download (11).jpg"
  },
  { 
    name: "Tzuyu", 
    skill: "Panel Listrik Ringan • Stabilizer", 
    rating: 4,
    photo: "download (14).jpg"
  },
  { 
    name: "Seolhyun", 
    skill: "Konfigurasi Jaringan Kantor • SMB", 
    rating: 5,
    photo: "images (1).jpg"
  },
  { 
    name: "Sana", 
    skill: "Projector • Layar Presentasi • Meeting Room", 
    rating: 4,
    photo: "download (13).jpg"
  },
  { 
    name: "Rose", 
    skill: "Smart TV • STB • Konsol Game", 
    rating: 5,
    photo: "download (17).jpg"
  },
  { 
    name: "chaeyoung", 
    skill: "Perangkat Kasir All-in-One • POS", 
    rating: 4,
    photo: "images (2).jpg"
  },
];

// ==========================
// LOCAL STORAGE HELPERS
// ==========================

const STORAGE_USER = "doktertecno_user";
const STORAGE_ORDERS = "doktertecno_orders";
const STORAGE_LOGGED_IN = "doktertecno_logged_in";

function setLoggedIn(value) {
  localStorage.setItem(STORAGE_LOGGED_IN, value ? "true" : "false");
}

function isLoggedIn() {
  return localStorage.getItem(STORAGE_LOGGED_IN) === "true";
}

function saveUser(user) {
  localStorage.setItem(STORAGE_USER, JSON.stringify(user));
}

function getUser() {
  const raw = localStorage.getItem(STORAGE_USER);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function saveOrders(orders) {
  localStorage.setItem(STORAGE_ORDERS, JSON.stringify(orders));
}

function getOrders() {
  const raw = localStorage.getItem(STORAGE_ORDERS);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function generateOrderId() {
  const now = Date.now().toString(36).toUpperCase();
  return "DTEC-" + now.slice(-6);
}

function generateReferralCode(name) {
  const base = (name || "USER")
    .split(" ")[0]
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "")
    .slice(0, 6);
  const rand = Math.floor(Math.random() * 90 + 10);
  return `REF-${base || "USER"}-${rand}`;
}

// ==========================
// ROUTER
// ==========================
function navigateTo(hash) {
  if (hash.startsWith("#")) {
    window.location.hash = hash;
  } else {
    window.location.hash = "#/" + hash;
  }
  console.log("Route:", hash);

  // 🔥 WAJIB TAMBAH INI
  render();
  updateAuthButtons();
  window.scrollTo(0, 0);
}

function getRouteParts() {
  const hash = window.location.hash || "#/";
  const cleaned = hash.replace(/^#\//, "");
  if (!cleaned) return [""];
  return cleaned.split("/");
}


function render() {
  const app = document.getElementById("app");
  const [root, param] = getRouteParts();
  const loggedIn = isLoggedIn();

  if (!loggedIn && root !== "account" && root !== "track" && root !== "") {
    showLoginScreen();
    return;
  }

  showApp();

  switch (true) {
    case root === "":
      app.innerHTML = renderHome();
      break;

    case root === "services":
      app.innerHTML = param
        ? renderServiceDetail(param)
        : renderServices();
      break;

    case root === "track":
      app.innerHTML = renderTracking();
      attachTrackingHandler();
      break;

    case root === "booking":
      app.innerHTML = renderBooking();
      attachBookingHandler();
      break;

    case root === "about":
      app.innerHTML = renderAbout();
      break;

    case root === "help":
      app.innerHTML = renderHelp();
      break;

    case root === "membership":
      app.innerHTML =
        param === "upgrade"
          ? renderMembershipUpgrade()
          : renderMembership();
      break;

    case root === "account":
      if (param === "login") {
        app.innerHTML = renderLogin();
        attachLoginHandler();
      } else if (param === "register") {
        app.innerHTML = renderRegister();
        attachRegisterHandler();
      } else {
        app.innerHTML = renderDashboard();
      }
      break;

    default:
      app.innerHTML = renderNotFound();
      case root === "b2b":
  app.innerHTML = renderB2BDetail(param);
  attachB2BForm();
  break;
  }
}

function renderTracking() {
  return `
    <section class="page">
      <header class="page-header">
        <h1 class="page-title">Tracking Servis</h1>
        <p class="page-subtitle">
          Masukkan ID servis untuk melihat status perangkat Anda
        </p>
      </header>

      <div class="card">
        <form id="trackForm" class="form">
          <input class="input" name="orderId" required />
          <button type="submit" class="btn-primary btn-full">
            Cek Status
          </button>
        </form>

        <div id="trackResult"></div>
      </div>
    </section>
  `;
}

// ==========================
// VIEWS – HOME
// ==========================



function renderHome() {
  return `
    <section class="page">

      <!-- HERO CLEAN -->
      <div class="card hero-clean">

        <h1 class="hero-title-center">
          DOKTERTECNO
        </h1>

        <p class="hero-desc">
          dokter servis elektronik untuk perangkat penting Anda.
        </p>

        <p class="hero-sub">
          DOKTERTECNO membantu Anda memperbaiki berbagai perangkat elektronik — 
          mulai dari HP, laptop, tablet, PC, kamera, drone, printer, sound system, 
          hingga AC ruangan — dengan layanan transparan, aman, dan praktis.
        </p>

      </div>

      <!-- VIDEO -->
      <section class="page-section">
        <div class="hero-video-wrapper">
          <video controls>
            <source src="video-doktertecno.mp4" type="video/mp4">
          </video>
        </div>
      </section>

      <!-- KEUNGGULAN -->
      <section class="page-section">
        <div class="grid grid-2">

          <div class="feature-card">
            <h3>🚀 Cepat</h3>
            <p>Servis cepat & terjadwal</p>
          </div>

          <div class="feature-card">
            <h3>📦 Tracking</h3>
            <p>Status real-time</p>
          </div>

          <div class="feature-card">
            <h3>🛠 Profesional</h3>
            <p>Teknisi berpengalaman</p>
          </div>

          <div class="feature-card">
            <h3>🏠 Pickup</h3>
            <p>Langsung ke lokasi</p>
          </div>

        </div>
      </section>

      <!-- LAYANAN UNGGULAN -->
<section class="page-section">
  <div class="page-header">
    <h2 class="page-title">Layanan Unggulan</h2>
  </div>

  <div class="grid" style="gap:16px;">
    ${SERVICES.slice(0, 2).map(s => `
      <div class="service-modern" onclick="navigateTo('services/${s.slug}')">

        <div class="service-content">
          <h3>${s.name}</h3>
          <p>${s.category}</p>
        </div>

        <div class="service-arrow">→</div>

      </div>
    `).join("")}
  </div>
</section>

 <section class="page-section">
  <div class="card">
    <button class="btn-primary btn-full" onclick="navigateTo('booking')">
      Booking Servis
    </button>

    <button class="btn-ghost btn-full" onclick="navigateTo('track')">
      Cek Status
    </button>
  </div>
</section>

    </section>
  `;
}

// ==========================
// VIEWS – SERVICES
// ==========================

function renderServices() {
  return `
    <section class="page">
      <header class="page-header">
        <h1 class="page-title">Semua Layanan Servis</h1>
        <p class="page-subtitle">
          Pilih kategori layanan yang sesuai dengan perangkat Anda, lalu lanjutkan ke booking atau konsultasi.
        </p>
      </header>

      <div class="grid grid-3">
        ${SERVICES.map(
          (s) => `
          <article class="card">
            <div class="card-header">
              <div>
                <div class="card-title">${s.name}</div>
                <div class="page-subtitle">${s.category}</div>
              </div>
              <span class="card-tag">Tersedia</span>
            </div>
            <div class="card-body">
              <p>${s.description}</p>
              <ul class="list">
                ${s.issues.slice(0, 3).map((i) => `<li>${i}</li>`).join("")}
              </ul>
              <button class="btn-primary btn-full" onclick="navigateTo('services/${s.slug}')">
                Detail layanan →
              </button>
            </div>
          </article>
        `
        ).join("")}
      </div>
      <section class="page-section">

  <h2 class="page-title">Paket UMKM & Kantor</h2>
  <p class="page-subtitle">
    Solusi maintenance perangkat untuk bisnis, kantor, dan operasional harian.
  </p>

  <div class="grid grid-3">
    ${CORPORATE_PLANS.map(plan => `
      <div class="card" onclick="navigateTo('b2b/${plan.name.toLowerCase().replace(/\s/g,'-')}')">

        <div class="card-header">
          <div class="card-title">${plan.name}</div>
          <span class="card-tag">${plan.tag}</span>
        </div>

        <div class="card-body">
          <p>${plan.desc}</p>
          <ul class="list">
            ${plan.perks.slice(0,3).map(p => `<li>${p}</li>`).join("")}
          </ul>

          <button class="btn-ghost btn-full">
            Lihat Detail →
          </button>
        </div>

      </div>
    `).join("")}
  </div>

</section>
    </section>
  `;
}

function renderServiceDetail(slug) {
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return renderNotFound();

  return `
    <section class="page">
      <header class="page-header">
        <h1 class="page-title">${service.name}</h1>
        <p class="page-subtitle">Kategori: ${service.category}</p>
      </header>

      <div class="grid grid-2">
        <div class="card">
          <div class="card-title">Deskripsi Layanan</div>
          <div class="card-body">
            <p>${service.description}</p>
            <h4>Jenis kerusakan yang umum ditangani:</h4>
            <ul class="list">
              ${service.issues.map((i) => `<li>${i}</li>`).join("")}
            </ul>
            <p><strong>Estimasi durasi:</strong> ${service.duration}</p>
          </div>
        </div>
        <div class="card">
          <div class="card-title">Estimasi Biaya</div>
          <div class="card-body">
            <table class="table">
              <tr>
                <th>Jenis Pekerjaan</th>
                <th>Perkiraan Biaya</th>
              </tr>
              ${service.pricing
                .map(
                  (row) => `
                <tr>
                  <td>${row[0]}</td>
                  <td>${row[1]}</td>
                </tr>
              `
                )
                .join("")}
            </table>
            <p class="helper">
              *Harga bersifat estimasi dan dapat berubah setelah diagnosa teknisi.
            </p>
<button class="btn-primary btn-full" onclick="navigateTo('booking/${service.slug}')">
  Booking servis ${service.name}
</button>

<button class="btn-ghost btn-full" onclick="openWhatsApp('${service.name}')">
  Mulai konsultasi
</button>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ==========================
// VIEWS – PRICING
// ==========================

function renderPricing() {
  return `
    <section class="page">
      <header class="page-header">
        <h1 class="page-title">Estimasi Harga Servis</h1>
        <p class="page-subtitle">
          DOKTERTECNO mengedepankan transparansi biaya. Berikut gambaran rentang harga untuk beberapa kategori layanan.
        </p>
      </header>

      <div class="card">
        <div class="card-title">Ringkasan Estimasi Biaya</div>
        <div class="card-body">
          <table class="table">
            <tr>
              <th>Kategori</th>
              <th>Rentang Biaya Jasa (belum termasuk sparepart)</th>
            </tr>
            <tr>
              <td>HP, Laptop, Tablet &amp; PC</td>
              <td>Rp150.000 – Rp750.000</td>
            </tr>
            <tr>
              <td>Kamera &amp; Drone</td>
              <td>Rp250.000 – Rp2.500.000</td>
            </tr>
            <tr>
              <td>Perangkat Kantor, Sound &amp; AC Ringan</td>
              <td>Rp200.000 – Rp900.000</td>
            </tr>
          </table>
          <p class="helper">
            *Estimasi ini digunakan untuk membantu pengguna mengambil keputusan awal sebelum melakukan servis.
          </p>
        </div>
      </div>

      <div class="card" style="margin-top:16px;">
        <div class="card-title">Same-Day / Emergency Handling Fee</div>
        <div class="card-body">
          <p>
            Untuk kebutuhan mendesak (misal laptop untuk sidang besok, sound system untuk event, atau AC ruang kasir mendadak bermasalah),
            DOKTERTECNO menyediakan opsi <strong>Same-Day / Emergency Service</strong>.
          </p>
          <ul class="list">
            <li>Prioritas penjadwalan pickup &amp; diagnosa.</li>
            <li>Diproses jauh lebih cepat dibanding layanan normal.</li>
            <li>Biaya tambahan penanganan darurat: <strong>Rp100.000 – Rp200.000</strong> di luar jasa servis.</li>
          </ul>
          <p class="helper">
            *Pada prototipe, layanan darurat ditandai melalui checkbox saat booking dan badge "PRIORITAS" pada status tracking.
          </p>
        </div>
      </div>
    </section>
  `;
}

// ==========================
// VIEWS – BOOKING
// ==========================

let defaultService = "";

function renderBooking() {

  const [root, param] = getRouteParts();
  if (param) defaultService = param;

  const user = getUser();
  const loggedIn = isLoggedIn();

  if (!user || !loggedIn) {
    return `
      <section class="page">
        <header class="page-header" id="bookingGuardHeader">
          <h1 class="page-title">Login Diperlukan</h1>
          <p class="page-subtitle">Silakan login terlebih dahulu untuk melakukan booking servis.</p>
        </header>

        <div class="card" style="max-width:480px;margin:0 auto;">
          <div class="card-body" style="text-align:center;">
            <button class="btn-primary btn-full" onclick="navigateTo('account/login')">
              Pergi ke Halaman Login
            </button>
          </div>
        </div>
      </section>
    `;
  }
  return `
    <section class="page">
      <header class="page-header">
        <h1 class="page-title">Booking Servis Elektronik</h1>
        <p class="page-subtitle">
          Isi formulir berikut untuk menjadwalkan pickup perangkat Anda. Tim DOKTERTECNO akan mengkonfirmasi detail dan estimasi biaya.
        </p>
      </header>

      <form id="bookingForm" class="card form">
        <div class="form-row">
          <div>
            <label class="label">Nama lengkap</label>
            <input class="input" name="name" required />
          </div>
          <div>
            <label class="label">Email / WhatsApp</label>
            <input class="input" name="contact" required />
          </div>
        </div>
        <div class="form-row">
          <div>
            <label class="label">Kota / Lokasi</label>
            <input class="input" name="city" placeholder="Misal: Medan, Palembang, dsb." required />
          </div>
          <div>
            <label class="label">Kategori perangkat</label>
            <select class="select" name="category" required>
              <option value="">Pilih kategori</option>
              ${SERVICES.map(
                (s) =>
                  `<option value="${s.slug}" ${
                    defaultService === s.slug ? "selected" : ""
                  }>${s.name}</option>`
              ).join("")}
            </select>
          </div>
        </div>
        <div>
          <label class="label">Deskripsi keluhan</label>
          <textarea class="textarea" name="issue" placeholder="Ceritakan gejala kerusakan, muncul pesan error apa, dsb." required></textarea>
          <p class="helper">
            Untuk masalah sederhana (misal suara berdengung, AC tidak terlalu dingin, atau printer error tertentu), 
            admin dapat menawarkan <strong>remote diagnosis</strong> terlebih dahulu sebelum teknisi datang.
          </p>
        </div>
        <div class="form-row">
          <div>
            <label class="label">Tanggal preferensi pickup</label>
            <input type="date" class="input" name="date" required />
          </div>
          <div>
            <label class="label">Waktu preferensi pickup</label>
            <input type="time" class="input" name="time" required />
          </div>
        </div>
        <div>
          <label class="label">Kode Referral (opsional)</label>
          <input class="input" name="referralCode" placeholder="Contoh: REF-WIRA-01" />
          <p class="helper">
            Masukkan kode referral teman Anda untuk mendapatkan potongan (simulasi). Jika Anda punya akun, kode Anda dapat dilihat di Dashboard.
          </p>
        </div>
        <div>
          <label class="label">Layanan prioritas / darurat</label>
          <div style="display:flex;align-items:center;gap:8px;">
            <input type="checkbox" name="priority" id="priority" />
            <label for="priority" class="helper">
              Butuh layanan <strong>Same-Day / Emergency</strong> (biaya penanganan tambahan berlaku)
            </label>
          </div>
        </div>
        <button type="submit" class="btn-primary btn-full">Kirim Booking</button>
        <p id="bookingMessage" class="helper"></p>
      </form>

      <section class="page-section" style="margin-top:20px;">
        <div class="card">
          <div class="card-title">Remote Diagnosis / Konsultasi Online</div>
          <div class="card-body">
            <p>
              Sebelum teknisi melakukan kunjungan, Anda dapat berkonsultasi terlebih dahulu dengan admin atau teknisi secara online.
              Ini membantu menyaring masalah yang bisa diselesaikan dengan pengaturan sederhana tanpa harus menunggu kunjungan.
            </p>
            <ul class="list">
              <li>Kirim foto / video gejala kerusakan.</li>
              <li>Diskusi singkat melalui chat atau panggilan.</li>
              <li>Rekomendasi apakah perlu kunjungan teknisi atau cukup remote.</li>
            </ul>
        <button class="btn-ghost" onclick="navigateTo('booking')">
  Mulai konsultasi
</button>
          </div>
        </div>
      </section>
    </section>
  `;
}
function getServiceNameFromSlug(slug) {
  const svc = SERVICES.find(s => s.slug === slug);
  return svc ? svc.name : slug;
}

function attachBookingHandler() {
  const form = document.getElementById("bookingForm");
  const messageEl = document.getElementById("bookingMessage");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const order = {
      id: generateOrderId(),
      name: formData.get("name"),
      contact: formData.get("contact"),
      city: formData.get("city"),
      category: formData.get("category"),
      issue: formData.get("issue"),
      date: formData.get("date"),
      time: formData.get("time"),
      referralCode: (formData.get("referralCode") || "").toString().trim(),
      emergency: formData.get("priority") === "on",
      status: "Menunggu Konfirmasi",
      createdAt: new Date().toISOString(),
    };

    const orders = getOrders();
    orders.push(order);
    saveOrders(orders);

    // ✅ UI SUCCESS (APP STYLE)
    document.getElementById("app").innerHTML = `
      <section class="page">
        <div class="card" style="text-align:center;">
          <div class="card-body">
            <h2>Booking Berhasil 🎉</h2>
            <p>ID Servis:</p>
            <h3>${order.id}</h3>

            <p>Status: <strong>${order.status}</strong></p>

            <button class="btn-primary btn-full" onclick="navigateTo('track')">
              Lihat Tracking
            </button>

            <button class="btn-ghost btn-full" onclick="navigateTo('account/dashboard')">
              Ke Dashboard
            </button>
          </div>
        </div>
      </section>
    `;

    form.reset();
  });
}
function attachTrackingHandler() {
  const form = document.getElementById("trackForm");
  const resultEl = document.getElementById("trackResult");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = new FormData(form).get("orderId");
    const orders = getOrders();
    const order = orders.find((o) => o.id === id);

    if (!order) {
      resultEl.innerHTML = `<div class="alert alert-error">ID servis tidak ditemukan. Pastikan Anda memasukkan ID dengan benar.</div>`;
      return;
    }

    resultEl.innerHTML = `
      <div class="card" style="margin-top:12px;">
        <div class="card-header">
          <div>
            <div class="card-title">Status Servis: ${order.id}</div>
            <div class="page-subtitle">${order.name} · ${order.category}</div>
          </div>
          <span class="card-tag">${order.emergency ? "PRIORITAS" : order.status}</span>
        </div>
        <div class="card-body">
          <p><strong>Keluhan:</strong> ${order.issue}</p>
          <p><strong>Pickup:</strong> ${order.date} pukul ${order.time}</p>
          ${
            order.referralCode
              ? `<p><strong>Kode Referral yang digunakan:</strong> ${order.referralCode}</p>`
              : ""
          }
          <p><strong>Timeline (simulasi):</strong></p>
          <div class="steps">
            <div class="step">
              <div class="step-index">1</div>
              <div>Booking dibuat oleh pelanggan.</div>
            </div>
            <div class="step">
              <div class="step-index">2</div>
              <div>${order.emergency ? "Pickup diprioritaskan sebagai layanan darurat." : "Pickup dijadwalkan oleh tim operasional."}</div>
            </div>
            <div class="step">
              <div class="step-index">3</div>
              <div>Perangkat dalam proses diagnosa &amp; estimasi biaya.</div>
            </div>
            <div class="step">
              <div class="step-index">4</div>
              <div>Perbaikan &amp; quality check oleh teknisi tersertifikasi.</div>
            </div>
            <div class="step">
              <div class="step-index">5</div>
              <div>Pengantaran kembali ke alamat pelanggan &amp; aktivasi garansi digital.</div>
            </div>
          </div>
        </div>
      </div>
    `;
  });
}

// ==========================
// VIEWS – BLOG
// ==========================

function renderBlogList() {
  return `
    <section class="page">
      <header class="page-header">
        <h1 class="page-title">Blog &amp; Insight</h1>
        <p class="page-subtitle">
          Edukasi, tips perawatan, dan insight seputar perangkat elektronik untuk membantu Anda mengurangi risiko kerusakan berat.
        </p>
      </header>

      <div class="grid grid-2">
        ${BLOG_POSTS.map(
          (p) => `
          <article class="card">
            <div class="card-header">
              <div class="card-title">${p.title}</div>
              <span class="card-tag">${p.date}</span>
            </div>
            <div class="card-body">
              <p>${p.excerpt}</p>
              <button class="btn-ghost" onclick="navigateTo('blog/${p.slug}')">
                Baca selengkapnya →
              </button>
            </div>
          </article>
        `
        ).join("")}
      </div>
    </section>
  `;
}

function renderBlogPost(slug) {
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return renderNotFound();

  return `
    <section class="page">
      <header class="page-header">
        <h1 class="page-title">${post.title}</h1>
        <p class="page-subtitle">${post.date}</p>
      </header>

      <article class="card">
        <div class="card-body">
          ${post.content}
        </div>
      </article>
    </section>
  `;
}

// ==========================
// VIEWS – ABOUT, HELP, MEMBERSHIP
// ==========================

function renderAbout() {
  return `
    <section class="page">

      <!-- TENTANG -->
      <div class="about-card">

        <h2 class="about-heading">Tentang DOKTERTECNO</h2>

        <p class="about-sub">
          DOKTERTECNO lahir dari kebutuhan akan layanan servis elektronik 
          yang lebih aman, modern, dan transparan.
        </p>

        <div class="about-box">
          <p>
            Banyak pengguna merasa khawatir ketika harus memperbaiki perangkat elektronik 
            mahal seperti laptop, tablet, kamera, PC kasir, printer, sound system, atau AC ruangan.
          </p>

          <p>
            Kekhawatiran tersebut muncul karena ketidakjelasan harga, kualitas teknisi, 
            hingga kurangnya informasi selama proses servis.
          </p>

          <ul>
            <li>Teknisi melalui proses seleksi & pelatihan</li>
            <li>SOP servis terdokumentasi</li>
            <li>Estimasi harga transparan</li>
            <li>Tracking digital real-time</li>
            <li>Program membership & referral</li>
          </ul>

          <p>
            Fokus awal di Medan, dengan visi berkembang menjadi platform servis digital nasional.
          </p>
        </div>

      </div>
      <!-- ESTIMASI HARGA -->
<section class="page-section">

  <h2 class="page-title">Estimasi Harga Servis</h2>
  <p class="about-sub">
    DOKTERTECNO mengedepankan transparansi biaya. Berikut gambaran rentang harga layanan.
  </p>

  <div class="card">
    <div class="card-title">Ringkasan Estimasi Biaya</div>

    <div class="card-body">
      <table class="table">
        <tr>
          <th>Kategori</th>
          <th>Rentang Biaya</th>
        </tr>
        <tr>
          <td>HP, Laptop, Tablet & PC</td>
          <td>Rp150.000 – Rp750.000</td>
        </tr>
        <tr>
          <td>Kamera & Drone</td>
          <td>Rp250.000 – Rp2.500.000</td>
        </tr>
        <tr>
          <td>Perangkat Kantor, Sound & AC</td>
          <td>Rp200.000 – Rp900.000</td>
        </tr>
      </table>

      <p class="helper">
        *Harga bersifat estimasi dan dapat berubah setelah diagnosa teknisi.
      </p>
    </div>
  </div>

  <div class="card" style="margin-top:16px;">
    <div class="card-title">Same-Day / Emergency</div>

    <div class="card-body">
      <ul class="list">
        <li>Prioritas penjadwalan & diagnosa</li>
        <li>Diproses lebih cepat dari layanan normal</li>
        <li>Biaya tambahan: <strong>Rp100.000 – Rp200.000</strong></li>
      </ul>

      <p class="helper">
        Cocok untuk kebutuhan mendesak seperti kerja, event, atau operasional usaha.
      </p>
    </div>
  </div>

</section>

      <!-- TEKNISI -->
      <section class="page-section">
        <h2 class="page-title">Profil Teknisi DOKTERTECNO</h2>

        <p class="about-sub" style="margin-bottom:12px;">
          Teknisi berpengalaman dengan berbagai spesialisasi.
        </p>
<div class="tech-grid">
  ${TEKNISI.map(t => `
    <div class="tech-card-premium">

      <img src="${t.photo}" />

      <h3>${t.name}</h3>
      <p>${t.skill}</p>

      <div class="rating">★★★★★</div>

    </div>
  `).join("")}
        </div>
      </section>

    </section>
  `;
}
function renderHelp() {
  return `
    <section class="page">
      <header class="page-header">
        <h1 class="page-title">Bantuan &amp; FAQ</h1>
        <p class="page-subtitle">Pertanyaan yang sering diajukan seputar proses servis di DOKTERTECNO.</p>
      </header>

      <div class="card">
        <div class="card-body">
          <h4>Perangkat apa saja yang bisa diservis?</h4>
          <p>Kami melayani servis HP, laptop, tablet, PC, kamera, drone, printer, perangkat jaringan, sound system event kecil, dan AC ruangan kecil–menengah.</p>

          <h4>Berapa lama proses servis biasanya?</h4>
          <p>Rata-rata 1–5 hari kerja tergantung tingkat kerusakan dan ketersediaan sparepart.</p>

          <h4>Apakah ada garansi?</h4>
          <p>Ada. Masa garansi berbeda-beda untuk setiap jenis layanan, umumnya 14–90 hari.</p>

          <h4>Apakah saya harus datang langsung ke workshop?</h4>
          <p>Tidak harus. Anda bisa menggunakan layanan pickup &amp; delivery sehingga seluruh proses bisa dilakukan dari rumah atau kantor.</p>

          <h4>Apa itu layanan darurat / Same-Day?</h4>
          <p>
            Layanan darurat adalah opsi prioritas untuk perangkat yang harus segera digunakan. 
            Anda dapat mengaktifkannya saat booking dengan mencentang opsi layanan prioritas.
          </p>

          <h4>Apa itu Remote Diagnosis?</h4>
          <p>
            Sebelum teknisi datang, Anda dapat berkonsultasi secara online. Tim akan menganalisa keluhan berdasarkan foto/video yang dikirim
            dan memberikan rekomendasi awal. Terkadang, masalah bisa selesai tanpa perlu kunjungan, misalnya salah pengaturan sound system atau router.
          </p>
        </div>
      </div>
    </section>
  `;
}

// ==== Membership helpers ====

function getMembershipButtonLabel() {
  return isLoggedIn() ? "Upgrade Paket →" : "Daftar / Upgrade (simulasi) →";
}

function getMembershipButtonAction() {
  return isLoggedIn()
    ? "navigateTo('membership/upgrade')"
    : "navigateTo('account/register')";
}

function renderMembership() {
  return `
    <section class="page">
      <header class="page-header">
        <h1 class="page-title">Membership &amp; Paket UMKM</h1>
        <p class="page-subtitle">
          Program keanggotaan dan paket korporat untuk pengguna yang sering melakukan servis atau memiliki banyak perangkat penting.
        </p>
      </header>

      <h3 class="page-title" style="font-size:18px;">Tier Membership Individu</h3>
      <div class="grid grid-3">
        ${MEMBERSHIP_TIERS.map(
          (tier) => `
          <article class="card">
            <div class="card-header">
              <div class="card-title">${tier.name}</div>
              <span class="card-tag">${tier.tag}</span>
            </div>
            <div class="card-body">
              <p>${tier.desc}</p>
              <ul class="list">
                ${tier.perks.map((p) => `<li>${p}</li>`).join("")}
              </ul>
              <button 
                class="btn-ghost btn-full"
                onclick="${getMembershipButtonAction()}"
              >
                ${getMembershipButtonLabel()}
              </button>
            </div>
          </article>
        `
        ).join("")}
      </div>

      <h3 class="page-title" style="font-size:18px;margin-top:24px;">Paket UMKM &amp; Kantor (B2B)</h3>
      <p class="page-subtitle">
        Untuk cafe, kantor kecil, studio, sekolah, co-working space, dan venue yang membutuhkan perawatan perangkat secara berkala.
      </p>
      <div class="grid grid-3">
        ${CORPORATE_PLANS.map(
          (plan) => `
          <article class="card">
            <div class="card-header">
              <div class="card-title">${plan.name}</div>
              <span class="card-tag">${plan.tag}</span>
            </div>
            <div class="card-body">
              <p>${plan.desc}</p>
              <ul class="list">
                ${plan.perks.map((p) => `<li>${p}</li>`).join("")}
              </ul>
             <button class="btn-ghost btn-full" onclick="navigateTo('membership')">
  Lihat detail paket →
</button>
            </div>
          </article>
        `
        ).join("")}
      </div>
    </section>
  `;
}

function renderMembershipUpgrade() {
  if (!isLoggedIn()) {
    navigateTo("account/login");
    return "";
  }

  return `
    <section class="page">
      <header class="page-header">
        <h1 class="page-title">Upgrade Membership</h1>
        <p class="page-subtitle">Pilih paket yang ingin Anda upgrade.</p>
      </header>

      <div class="grid grid-3">
        <div class="card">
          <h3>Silver</h3>
          <ul class="list">
            <li>Diskon 5% servis</li>
            <li>Antrian prioritas</li>
          </ul>
          <button class="btn-primary btn-full" onclick="applyUpgrade('Silver')">
            Upgrade ke Silver
          </button>
        </div>

        <div class="card">
          <h3>Gold</h3>
          <ul class="list">
            <li>Diskon 10%</li>
            <li>Pickup prioritas</li>
            <li>Konsultasi teknis gratis</li>
          </ul>
          <button class="btn-primary btn-full" onclick="applyUpgrade('Gold')">
            Upgrade ke Gold
          </button>
        </div>

        <div class="card">
          <h3>Platinum</h3>
          <ul class="list">
            <li>Diskon 15%</li>
            <li>Antrian VVIP</li>
            <li>Backup teknisi on-site</li>
          </ul>
          <button class="btn-primary btn-full" onclick="applyUpgrade('Platinum')">
            Upgrade ke Platinum
          </button>
        </div>
      </div>
    </section>
  `;
}

// ==========================
// VIEWS – AUTH & DASHBOARD
// ==========================

function renderLogin() {
  if (isLoggedIn()) {
    navigateTo("membership");
    return "";
  }

  return `
    <section class="page">
      <header class="page-header" id="loginPageHeader">
        <h1 class="page-title">Login Akun</h1>
        <p class="page-subtitle">Akses dashboard untuk melihat riwayat servis, poin referral, dan status perangkat Anda.</p>
      </header>

      <form id="loginForm" class="card form">
        <div>
          <label class="label">Email</label>
          <input class="input" name="email" required />
        </div>
        <div>
          <label class="label">Password</label>
          <input type="password" class="input" name="password" required />
        </div>
        <button type="submit" class="btn-primary btn-full">Login</button>
        <p id="loginMessage" class="helper"></p>
        <p class="helper">Belum punya akun? <a href="#/account/register">Daftar di sini</a>.</p>
      </form>
    </section>
  `;
}

function attachLoginHandler() {
  const form = document.getElementById("loginForm");
  const messageEl = document.getElementById("loginMessage");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");

    const user = getUser();
    if (!user || user.email !== email || user.password !== password) {
      messageEl.innerHTML =
        '<span class="alert alert-error">Email atau password tidak sesuai (simulasi). Pastikan Anda sudah mendaftar.</span>';
      setLoggedIn(false);
      return;
    }

    setLoggedIn(true);
    messageEl.innerHTML = "";
    navigateTo("account/dashboard");
  });
}

function renderRegister() {
  if (isLoggedIn()) {
    navigateTo("membership");
    return "";
  }

  return `
    <section class="page">
      <header class="page-header">
        <h1 class="page-title">Daftar Akun Baru</h1>
        <p class="page-subtitle">Buat akun untuk menyimpan riwayat servis, mendapatkan kode referral, dan mengakses program membership.</p>
      </header>

      <form id="registerForm" class="card form">
        <div class="form-row">
          <div>
            <label class="label">Nama lengkap</label>
            <input class="input" name="name" required />
          </div>
          <div>
            <label class="label">Kota</label>
            <input class="input" name="city" required />
          </div>
        </div>
        <div class="form-row">
          <div>
            <label class="label">Email</label>
            <input class="input" name="email" required />
          </div>
          <div>
            <label class="label">WhatsApp</label>
            <input class="input" name="whatsapp" required />
          </div>
        </div>
        <div>
          <label class="label">Password</label>
          <input type="password" class="input" name="password" required />
        </div>
        <button type="submit" class="btn-primary btn-full">Daftar</button>
        <p id="registerMessage" class="helper"></p>
      </form>
    </section>
  `;
}

function attachRegisterHandler() {
  const form = document.getElementById("registerForm");
  const messageEl = document.getElementById("registerMessage");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const referralCode = generateReferralCode(formData.get("name"));
    const user = {
      name: formData.get("name"),
      city: formData.get("city"),
      email: formData.get("email"),
      whatsapp: formData.get("whatsapp"),
      password: formData.get("password"),
      tier: "Free",
      referralCode,
    };
    saveUser(user);
    messageEl.innerHTML =
      `<span class="alert alert-success">Pendaftaran berhasil! Kode referral Anda: <strong>${referralCode}</strong>. Anda bisa login sekarang.</span>`;
    form.reset();
  });
}

function renderDashboard() {
  const user = getUser();
  const loggedIn = isLoggedIn();

  if (!user || !loggedIn) {
    return `
      <section class="page">
        <header class="page-header">
          <h1 class="page-title">Dashboard Akun</h1>
          <p class="page-subtitle">Silakan login terlebih dahulu untuk mengakses dashboard.</p>
        </header>
        <div class="card">
          <div class="card-body">
            <button class="btn-primary" onclick="navigateTo('account/login')">Pergi ke halaman login</button>
          </div>
        </div>
      </section>
    `;
  }

  const orders = getOrders();
  const myOrders = orders.filter(
    (o) => o.contact === user.email || o.contact === user.whatsapp
  );
  const referredOrders = orders.filter(
    (o) => o.referralCode && o.referralCode === user.referralCode
  );
  const referralCount = referredOrders.length;
  const referralPoints = referralCount * 10;

  return `
    <section class="page">
      <header class="page-header">
        <h1 class="page-title">Halo, ${user.name}</h1>
        <p class="page-subtitle">
          Berikut ringkasan aktivitas Anda di DOKTERTECNO (simulasi berbasis data lokal browser).
        </p>
      </header>

      <div class="grid grid-3">
        <div class="card">
          <div class="card-title">Tier Membership</div>
          <div class="card-body">
            <p><strong>${user.tier}</strong></p>
            <p class="helper">Upgrade tier dapat diaktifkan pada pengembangan sistem berikutnya.</p>
          </div>
        </div>
        <div class="card">
          <div class="card-title">Total Booking (di perangkat ini)</div>
          <div class="card-body">
            <p><strong>${myOrders.length}</strong> booking dengan kontak Anda.</p>
          </div>
        </div>
        <div class="card">
          <div class="card-title">Kota Operasional Anda</div>
          <div class="card-body">
            <p>${user.city}</p>
            <p class="helper">Pada tahap awal, DOKTERTECNO dapat fokus pada 1–2 kota utama.</p>
          </div>
        </div>
      </div>

      <section style="margin-top:20px;">
        <h3 class="page-title" style="font-size:18px;">Referral Program</h3>
        <div class="card">
          <div class="card-body">
            <p><strong>Kode referral Anda:</strong> <code>${user.referralCode}</code></p>
            <p>Bagikan kode ini ke teman Anda. Saat mereka melakukan booking dan memasukkan kode ini, mereka mendapat potongan (simulasi) dan Anda mendapat poin.</p>
            <p><strong>Total booking yang menggunakan kode Anda (di browser ini):</strong> ${referralCount}</p>
            <p><strong>Poin referral (simulasi):</strong> ${referralPoints} poin</p>
            <p class="helper">
              *Di implementasi penuh, poin ini dapat ditukar dengan diskon jasa servis, free pickup, atau upgrade ke tier membership yang lebih tinggi.
            </p>
          </div>
        </div>
      </section>

      <section style="margin-top:20px;">
        <h3 class="page-title" style="font-size:18px;">Service Reminder &amp; Asset B2B (Dummy)</h3>
        <div class="card">
          <div class="card-body">
            <p>
              Contoh bagaimana DOKTERTECNO dapat membantu UMKM / kantor memantau perangkat utama mereka dan mengingatkan jadwal maintenance.
            </p>
            <table class="table">
              <tr>
                <th>Perangkat</th>
                <th>Lokasi</th>
                <th>Status</th>
                <th>Jadwal Servis Berikutnya</th>
              </tr>
              ${B2B_ASSETS_DUMMY.map(
                (a) => `
                <tr>
                  <td>${a.name}</td>
                  <td>${a.location}</td>
                  <td>${a.status}</td>
                  <td>${a.nextService}</td>
                </tr>
              `
              ).join("")}
            </table>
            <p class="helper">
              *Data di atas adalah simulasi untuk menunjukkan konsep <strong>asset management</strong> dan <strong>service reminder</strong> untuk klien B2B.
            </p>
          </div>
        </div>
      </section>

      <section style="margin-top:20px;">
        <h3 class="page-title" style="font-size:18px;">Riwayat Booking dengan Kontak Anda</h3>
        ${
          myOrders.length === 0
            ? `<p class="helper">Belum ada booking yang terhubung dengan kontak Anda di browser ini.</p>`
            : `
              <div class="card">
                <div class="card-body">
                  <table class="table">
                    <tr>
                      <th>ID</th>
                      <th>Kategori</th>
                      <th>Tanggal</th>
                      <th>Status</th>
                      <th>Prioritas</th>
                    </tr>
                    ${myOrders
                      .map(
                        (o) => `
                      <tr>
                        <td>${o.id}</td>
                        <span class="card-tag">
 ${o.emergency ? "PRIORITAS ⚡" : o.status}
</span>
                        <td>${o.date}</td>
                        <td>${o.status}</td>
                        <td>${o.emergency ? "Emergency" : "-"}</td>
                      </tr>
                    `
                      )
                      .join("")}
                  </table>
                </div>
              </div>
            `
        }
      </section>
    </section>
  `;
}

function applyUpgrade(tier) {
  const user = getUser();
  if (!user) return;
  user.tier = tier;
  saveUser(user);
  alert("Upgrade berhasil ke paket " + tier);
  navigateTo("membership");
}

// ==========================
// VIEWS – 404
// ==========================

function renderNotFound() {
  return `
    <section class="page">
      <header class="page-header">
        <h1 class="page-title">Halaman tidak ditemukan</h1>
        <p class="page-subtitle">Navigasi mungkin salah atau halaman belum diimplementasikan.</p>
      </header>
      <div class="card">
        <div class="card-body">
          <button class="btn-primary" onclick="navigateTo('')">Kembali ke beranda</button>
        </div>
      </div>
    </section>
  `;
}

// ==========================
// UTIL – WHATSAPP & NAV
// ==========================



function logout() {
  setLoggedIn(false);
  showLoginScreen();
  updateAuthButtons();
}

// Toggle menu hamburger
function initNavToggle() {
  const btn = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");
  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    btn.classList.toggle("open");
    menu.classList.toggle("open");
  });

  // Tutup menu saat pindah halaman
  window.addEventListener("hashchange", () => {
    btn.classList.remove("open");
    menu.classList.remove("open");
  });
}

// Tampilkan / sembunyikan Login, Logout, Dashboard (desktop + mobile)
function updateAuthButtons() {
  const logged = isLoggedIn();

  // Desktop
  const btnLogin = document.getElementById("btnLogin");
  const btnLogout = document.getElementById("btnLogout");
  const btnDash = document.getElementById("btnDashboard");

  if (btnLogin) btnLogin.style.display = logged ? "none" : "inline-flex";
  if (btnLogout) btnLogout.style.display = logged ? "inline-flex" : "none";
  if (btnDash) btnDash.style.display = logged ? "inline-flex" : "none";

  // Mobile
  const btnLoginMobile = document.getElementById("btnLoginMobile");
  const btnLogoutMobile = document.getElementById("btnLogoutMobile");
  const btnDashMobile = document.getElementById("btnDashboardMobile");

  if (btnLoginMobile) btnLoginMobile.style.display = logged ? "none" : "block";
  if (btnLogoutMobile) btnLogoutMobile.style.display = logged ? "block" : "none";
  if (btnDashMobile) btnDashMobile.style.display = logged ? "block" : "none";
}

// ==========================
// INIT
// ==========================

window.addEventListener("hashchange", () => {
  render();
  updateAuthButtons();
});

window.addEventListener("load", () => {
  initNavToggle();
  initAppLogin();

  const splash = document.getElementById("splashScreen");

  setTimeout(() => {
    if (splash) splash.style.display = "none";

    if (isLoggedIn()) {
      showApp();
      render();
    } else {
      showLoginScreen();
    }

  }, 2000); // durasi splash
});

// ==========================
// LOGIN SCREEN CONTROL
// ==========================

function showLoginScreen() {
  const login = document.getElementById("loginScreen");
  const header = document.getElementById("appHeader");
  const nav = document.getElementById("bottomNav");
  const fab = document.getElementById("fabBtn");

  if (login) login.style.display = "flex";
  if (header) header.style.display = "none";
  if (nav) nav.style.display = "none";
  if (fab) fab.style.display = "none";
}

function showApp() {
  const login = document.getElementById("loginScreen");
  const header = document.getElementById("appHeader");
  const nav = document.getElementById("bottomNav");
  const fab = document.getElementById("fabBtn");

  if (login) login.style.display = "none";
  if (header) header.style.display = "flex";
  if (nav) nav.style.display = "flex";
  if (fab) fab.style.display = "block";
}

function initAppLogin() {
  const form = document.getElementById("loginFormApp");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputs = form.querySelectorAll("input");
    const email = inputs[0].value;
    const password = inputs[1].value;

    const user = getUser();

    if (!user || user.email !== email || user.password !== password) {
      alert("Login gagal (simulasi)");
      return;
    }

    setLoggedIn(true);
    showApp();
    navigateTo(""); // masuk ke home
    render();
    updateAuthButtons();
  });

}

function updateTime() {
  const el = document.getElementById("time");
  if (!el) return;

  const now = new Date();
  const h = now.getHours().toString().padStart(2, "0");
  const m = now.getMinutes().toString().padStart(2, "0");

  el.textContent = `${h}:${m}`;
}

setInterval(updateTime, 1000);
updateTime();

function showRegister() {
  const box = document.querySelector(".login-box");

  box.innerHTML = `
    <img src="doktertecno.jpeg" class="login-logo" />

    <h2>Daftar Akun</h2>
    <p>Buat akun baru</p>

    <form id="registerFormApp">
      <input type="text" placeholder="Nama" required />
      <input type="text" placeholder="Email" required />
      <input type="text" placeholder="WhatsApp" required />
      <input type="password" placeholder="Password" required />

      <button type="submit">Daftar</button>
    </form>

    <p class="login-register">
      Sudah punya akun?
      <a href="#" onclick="showLogin()">Login</a>
    </p>
  `;

  attachRegisterApp();
}

function showLogin() {
  location.reload(); // cara paling simpel balik ke login awal
}

function attachRegisterApp() {
  const form = document.getElementById("registerFormApp");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputs = form.querySelectorAll("input");

    const user = {
      name: inputs[0].value,
      email: inputs[1].value,
      whatsapp: inputs[2].value,
      password: inputs[3].value,
      tier: "Free",
      referralCode: generateReferralCode(inputs[0].value),
    };

    saveUser(user);

    alert("Berhasil daftar, silakan login");
    showLogin();
  });
}

// ==========================
// BOOKING STORAGE
// ==========================
function getBookings() {
  return JSON.parse(localStorage.getItem("bookings") || "[]");
}

function saveBooking(data) {
  const bookings = getBookings();
  bookings.push(data);
  localStorage.setItem("bookings", JSON.stringify(bookings));
}
function openWhatsApp() {
  const nomor = "6281263457636"; // 👉 GANTI nomor teknisi
  const pesan = encodeURIComponent(
    "Halo DOKTERTECNO, saya ingin konsultasi terkait kerusakan perangkat saya."
  );

  window.open(`https://wa.me/${nomor}?text=${pesan}`, "_blank");
}

function renderB2BDetail(slug) {

  const plan = CORPORATE_PLANS.find(p =>
    p.name.toLowerCase().replace(/\s/g,'-') === slug
  );

  if (!plan) return renderNotFound();

  return `
    <section class="page">

      <header class="page-header">
        <h1 class="page-title">${plan.name}</h1>
        <p class="page-subtitle">${plan.tag}</p>
      </header>

      <!-- DESKRIPSI -->
      <div class="card">
        <div class="card-body">
          <p>${plan.desc}</p>

          <ul class="list">
            ${plan.perks.map(p => `<li>${p}</li>`).join("")}
          </ul>
        </div>
      </div>

      <!-- ESTIMASI HARGA -->
      <div class="card" style="margin-top:16px;">
        <div class="card-title">Estimasi Harga Paket</div>

        <div class="card-body">
          ${
            plan.name === "Basic UMKM"
              ? "<p>Rp500.000 – Rp1.000.000 / bulan</p>"
              : plan.name === "Plus Office"
              ? "<p>Rp1.000.000 – Rp2.500.000 / bulan</p>"
              : "<p>Rp3.000.000+ / bulan (custom)</p>"
          }

          <p class="helper">
            Harga dapat disesuaikan dengan jumlah perangkat dan kebutuhan bisnis.
          </p>
        </div>
      </div>

      <!-- FORM -->
      <form id="b2bForm" class="card form" style="margin-top:16px;">

        <div>
          <label class="label">Nama Bisnis / Perusahaan</label>
          <input class="input" name="business" required />
        </div>

        <div>
          <label class="label">Nama PIC</label>
          <input class="input" name="name" required />
        </div>

        <div>
          <label class="label">Kontak (WA / Email)</label>
          <input class="input" name="contact" required />
        </div>

        <div>
          <label class="label">Jumlah Perangkat</label>
          <input class="input" name="devices" required />
        </div>

        <div>
          <label class="label">Kebutuhan</label>
          <textarea class="textarea" name="note"></textarea>
        </div>

        <button type="submit" class="btn-primary btn-full">
          Ajukan Membership
        </button>

        <p id="b2bMessage" class="helper"></p>

      </form>

    </section>
  `;
}

function attachB2BForm() {
  const form = document.getElementById("b2bForm");
  const msg = document.getElementById("b2bMessage");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    msg.innerHTML = `
      <span class="alert alert-success">
        Pengajuan berhasil! Tim kami akan menghubungi Anda.
      </span>
    `;

    form.reset();
  });
}