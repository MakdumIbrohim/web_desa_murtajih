// ================= PRELOADER =================
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    gsap.to("#preloader", {
      opacity: 0,
      duration: 0.1,
      onComplete: () => preloader.remove(),
    });
  }
});

// ================= NAVBAR =================
document.getElementById("navbar-container").innerHTML = `
<nav class="navbar navbar-expand-lg navbar-custom fixed-top">
  <div class="container">
    
    <a class="navbar-brand d-flex align-items-center" href="#beranda">
      <span class="judul-desa fw-bold">
        <span class="text-gold">DESA</span>
        <span class="text-white">MURTAJIH</span>
      </span>
    </a>

    <button class="navbar-toggler text-white border-0" type="button" 
      data-bs-toggle="collapse" data-bs-target="#menu">
      <i class="bi bi-list fs-2"></i>
    </button>

    <div class="collapse navbar-collapse" id="menu">
      <ul class="navbar-nav ms-auto align-items-center">
        <li class="nav-item"><a class="nav-link" href="#beranda">Beranda</a></li>
        <li class="nav-item"><a class="nav-link" href="#profil">Profil</a></li>
        <li class="nav-item"><a class="nav-link" href="#perangkat">Perangkat</a></li>
        <li class="nav-item"><a class="nav-link" href="#berita">Berita</a></li>
        <li class="nav-item"><a class="nav-link" href="#galeri">Galeri</a></li>
        <li class="nav-item"><a class="nav-link" href="#kontak">Kontak</a></li>
        <li class="nav-item ms-lg-3">
          <a class="btn btn-warning btn-sm fw-bold rounded-pill px-3" href="#login">
            <i class="bi bi-person-lock"></i> Login
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
`;

// Tutup menu mobile saat link diklik
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("menu");
    if (menu && menu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});

// ================= DATA =================
const galleryData = [
  { id: 1, year: "2025", img: 15 },
  { id: 2, year: "2025", img: 16 },
  { id: 3, year: "2025", img: 17 },
  { id: 4, year: "2026", img: 18 },
  { id: 5, year: "2026", img: 19 },
  { id: 6, year: "2026", img: 20 },
];

const defaultBerita = [
  {
    judul: "Kerja Bakti Desa",
    tanggal: "15/01/2026",
    isi: "Warga desa melakukan kerja bakti membersihkan saluran air guna mencegah banjir di musim hujan. Kegiatan ini dihadiri oleh Kepala Desa.",
  },
  {
    judul: "Penyuluhan Kesehatan",
    tanggal: "10/01/2026",
    isi: "Posyandu mengadakan penyuluhan gizi buruk untuk balita. Diharapkan ibu-ibu dapat lebih memperhatikan asupan gizi anak.",
  },
  {
    judul: "Panen Raya Padi",
    tanggal: "05/01/2026",
    isi: "Petani Desa Murtajih menyambut panen raya dengan suka cita. Hasil panen tahun ini meningkat 20% dibanding tahun lalu.",
  },
];

let beritaData = JSON.parse(localStorage.getItem("berita")) || defaultBerita;

// ================= VARIABLES =================
let sliderInterval;

// ================= HALAMAN (COMPONENTS) =================
const pages = {
  beranda: `
<section class="hero-slider">
  <div class="hero-slide active" style="background-image:url('slider/foto1.jpg')"></div>
  <div class="hero-slide" style="background-image:url('slider/foto2.jpg')"></div>
  <div class="hero-slide" style="background-image:url('slider/foto3.jpg')"></div>

  <div class="hero-overlay"></div>

  <div class="hero-content">
    <div class="container animate-up text-center">
      <h1 class="display-4 fw-bold mb-3" style="min-height: 80px;">
        <span id="typing-text"></span><span class="cursor">|</span>
      </h1>
      
      <p class="lead fs-4">Mewujudkan Desa yang Maju, Mandiri, dan Sejahtera.</p>
      <a href="#profil" class="btn btn-primary btn-lg mt-3 rounded-pill px-4">
        Jelajahi Desa
      </a>
    </div>
  </div>
</section>

<section class="py-5 bg-white">
  <div class="container text-center">
    <h2 class="mb-5 text-primary fw-bold">LOKASI</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.6494434303295!2d113.50587867403944!3d-7.166461670316632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd77dbdf18f8727%3A0x80bdb184246562cd!2sBalai%20Desa%20Murtajih.!5e0!3m2!1sid!2sid!4v1768721835953!5m2!1sid!2sid" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</section>
`,

  profil: `
    <section class="py-5 container">
        <div class="row align-items-center">
            <div class="col-md-6 mb-4 mt-5">
                <img src="https://picsum.photos/600/400?random=4" class="img-fluid rounded shadow-lg">
            </div>
            <div class="col-md-6">
                <h2 class="text-primary fw-bold mb-3">Tentang Desa Murtajih</h2>
                <p class="lead text-secondary">Desa Murtajih adalah desa yang berkomitmen pada transparansi dan pelayanan publik yang prima.</p>
                <p>Terletak di kawasan strategis, desa ini memiliki visi untuk menjadi desa digital yang mampu mensejahterakan warganya melalui pemanfaatan teknologi dan sumber daya alam.</p>
                <hr>
                <h5>Visi & Misi</h5>
                <ul>
                    <li>Mewujudkan tata kelola pemerintahan yang bersih.</li>
                    <li>Meningkatkan kualitas SDM melalui pendidikan.</li>
                    <li>Mengembangkan ekonomi kreatif berbasis kerakyatan.</li>
                </ul>
            </div>
        </div>
    </section>
    `,

  perangkat: `
    <section class="py-5 bg-white" style="margin-top: 60px;">
      <div class="container">
        <div class="row align-items-center">
          
          <div class="col-lg-4 col-md-5 text-center mb-4 mb-md-0">
            <div class="kepala-desa-wrapper">
                <div class="kepala-desa-frame shadow-lg">
                    <img src="perangkat_desa/kepala-desa.jpg" class="img-fluid mb-3" style="border: 2px solid white; width: 100%; max-width: 300px; height: auto;">
                    
                    <h5 class="fw-bold text-uppercase m-0 pb-2">H. MOHAMMAD BAHARUDDIN</h5>
                    <p class="small opacity-75 pb-3 border-top border-white pt-2 mt-1">KEPALA DESA</p>
                </div>
            </div>
          </div>
          
          <div class="col-lg-8 col-md-7 ps-md-5">
            <h5 class="text-primary fw-bold text-uppercase mb-2">Selamat Datang di Desa Kami</h5>
            <h2 class="fw-bold mb-4">Mewujudkan Desa Murtajih yang Bermartabat</h2>
            
            <p class="text-secondary" style="line-height: 1.8;">
              Selamat datang di Website Resmi Desa Murtajih. Website ini hadir sebagai sarana komunikasi, informasi, dan transparansi bagi seluruh masyarakat. Kami berkomitmen untuk menyelenggarakan pelayanan publik yang optimal, akuntabel, dan transparan demi mewujudkan tata kelola pemerintahan desa yang baik.
            </p>
            
            <p class="text-secondary" style="line-height: 1.8;">
              Melalui penyajian profil serta potensi desa, kami berharap website ini dapat menjadi sumber informasi yang mudah diakses oleh masyarakat luas sebagai wujud keterbukaan informasi publik dan dukungan terhadap pembangunan Desa Murtajih.
            </p>
            
            <a href="#profil" class="btn btn-outline-primary rounded-pill px-4 mt-3">Baca Selengkapnya</a>
          </div>

        </div> </div> </section>

    <section class="py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5">
            <h2 class="fw-bold text-primary">Perangkat Desa</h2>
            <div class="section-underline"></div>
        </div>

        <div class="row g-4 justify-content-center">
          
          <div class="col-md-3 col-6">
            <div class="card-perangkat h-100">
              <img src="https://ui-avatars.com/api/?name=Siti+Aminah&background=D80000&color=fff&size=300" class="foto-perangkat" alt="Foto">
              <div class="info">
                <h6 class="fw-bold text-dark mb-1">Siti Aminah</h6>
                <p class="text-muted small mb-0 text-uppercase">Sekretaris Desa</p>
              </div>
            </div>
          </div>

          <div class="col-md-3 col-6">
            <div class="card-perangkat h-100">
              <img src="https://ui-avatars.com/api/?name=Budi+Santoso&background=D80000&color=fff&size=300" class="foto-perangkat" alt="Foto">
              <div class="info">
                <h6 class="fw-bold text-dark mb-1">Budi Santoso</h6>
                <p class="text-muted small mb-0 text-uppercase">Bendahara</p>
              </div>
            </div>
          </div>

          <div class="col-md-3 col-6">
            <div class="card-perangkat h-100">
              <img src="https://ui-avatars.com/api/?name=Malik&background=D80000&color=fff&size=300" class="foto-perangkat" alt="Foto">
              <div class="info">
                <h6 class="fw-bold text-dark mb-1">Malik</h6>
                <p class="text-muted small mb-0 text-uppercase">Kaur Perencanaan</p>
              </div>
            </div>
          </div>

          <div class="col-md-3 col-6">
            <div class="card-perangkat h-100">
              <img src="https://ui-avatars.com/api/?name=Widayanti&background=D80000&color=fff&size=300" class="foto-perangkat" alt="Foto">
              <div class="info">
                <h6 class="fw-bold text-dark mb-1">Widayanti</h6>
                <p class="text-muted small mb-0 text-uppercase">Kaur Kesejahteraan</p>
              </div>
            </div>
          </div>
          
          <div class="col-md-3 col-6">
            <div class="card-perangkat h-100">
              <img src="https://ui-avatars.com/api/?name=Samsidin&background=D80000&color=fff&size=300" class="foto-perangkat" alt="Foto">
              <div class="info">
                <h6 class="fw-bold text-dark mb-1">Samsidin</h6>
                <p class="text-muted small mb-0 text-uppercase">Pamong</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,

  berita: `
    <section class="py-5 container" style="margin-top: 50px;">
      <h2 class="mb-4 text-center fw-bold">KABAR DESA</h2>
      <p class="text-center text-muted mb-5">Informasi terbaru seputar kegiatan dan pengumuman desa.</p>
      <div id="listBerita" class="row g-4"></div>
    </section>
  `,

  galeri: `
    <section class="py-5 container">
      <h2 class="mb-4 text-center fw-bold mt-5">Galeri Kegiatan</h2>
      
      <div class="d-flex justify-content-center mb-5 gap-2">
        <button onclick="filterGallery('all')" class="btn btn-outline-primary active filter-btn" data-filter="all">Semua</button>
        <button onclick="filterGallery('2025')" class="btn btn-outline-primary filter-btn" data-filter="2025">Tahun 2025</button>
        <button onclick="filterGallery('2026')" class="btn btn-outline-primary filter-btn" data-filter="2026">Tahun 2026</button>
      </div>

      <div id="gallery-grid" class="row g-3">
        </div>
    </section>
    `,
  kontak: `
    <section class="py-5 container">
      <div class="row mt-4">
        <div class="col-md-5 mb-4">
            <div class="card bg-primary text-white p-4 h-100 border-0 shadow">
                <h3 class="fw-bold">Hubungi Kami</h3>
                <p class="mt-3">Kami siap melayani Anda. Silakan hubungi kontak di bawah ini atau datang langsung ke kantor desa.</p>
                <div class="mt-4">
                    <p class="mb-2"><i class="bi bi-geo-alt-fill me-2"></i> Jl. Raya Murtajih No. 1, Pamekasan</p>
                    <p class="mb-2"><i class="bi bi-telephone-fill me-2"></i> 0812-3456-7890</p>
                    <p class="mb-2"><i class="bi bi-envelope-fill me-2"></i> admin@desamurtajih.id</p>
                </div>
            </div>
        </div>
        <div class="col-md-7">
            <div class="card p-4 shadow border-0">
                <h4 class="mb-3">Kirim Pesan</h4>
                <form onsubmit="event.preventDefault(); alert('Pesan terkirim!');">
                    <div class="mb-3">
                        <label class="form-label">Nama Lengkap</label>
                        <input type="text" class="form-control" placeholder="Nama Anda">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-control" placeholder="nama@email.com">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Pesan</label>
                        <textarea class="form-control" rows="4" placeholder="Tulis pesan Anda disini..."></textarea>
                    </div>
                    <button class="btn btn-dark w-100">Kirim Pesan</button>
                </form>
            </div>
        </div>
      </div>
    </section>
    `,

  login: `
    <section class="login-section py-5 bg-light">
      <div class="container">
        <div class="row justify-content-center align-items-center" style="min-height: 70vh;">
          <div class="col-md-4">
            <div class="card login-card p-4 border-0 shadow-lg">
              <div class="text-center mb-4">
                  <i class="bi bi-shield-lock fs-1 text-primary"></i>
                  <h3 class="fw-bold mt-2">Login Admin</h3>
              </div>
              
              <form id="loginForm">
                <div class="mb-3">
                  <label class="form-label">Username</label>
                  <input type="text" id="username" class="form-control" required placeholder="">
                </div>
                
                <div class="mb-3">
                  <label class="form-label">Password</label>
                  <input type="password" id="password" class="form-control" required placeholder="">
                </div>
                
                <button type="submit" class="btn btn-primary w-100 py-2 fw-bold">
                  MASUK
                </button>
                
                <p id="loginError" class="text-danger text-center mt-3 d-none small">
                  Username atau password salah!
                </p>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    `,

  admin: `
    <section class="py-5 container">
      <div class="d-flex justify-content-between align-items-center mb-4 mt-5">
          <h2 class="fw-bold"><i class="bi bi-speedometer2"></i> Dashboard Admin</h2>
          <button onclick="logout()" class="btn btn-outline-danger">
            <i class="bi bi-box-arrow-right"></i> Logout
          </button>
      </div>
      
      <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card border-0 shadow-sm p-3">
                <h5 class="fw-bold mb-3">Tambah Berita</h5>
                <input id="judul" class="form-control mb-2" placeholder="Judul Berita">
                <textarea id="isi" class="form-control mb-2" rows="4" placeholder="Isi Berita"></textarea>
                <button class="btn btn-success w-100" onclick="tambahBerita()">
                    <i class="bi bi-plus-lg"></i> Publikasikan
                </button>
            </div>
          </div>

          <div class="col-md-8">
            <h5 class="mb-3">Daftar Berita Aktif</h5>
            <div id="adminBerita"></div>
          </div>
      </div>
    </section>
    `,
};

// ================= ROUTER LOGIC =================
function loadPage() {
  // Ambil hash tanpa #, default ke 'beranda'
  const hash = location.hash.replace("#", "") || "beranda";

  // Cek Login untuk halaman Admin
  if (hash === "admin" && !sessionStorage.getItem("isLoggedIn")) {
    alert("Akses Ditolak! Silakan login dulu.");
    location.hash = "login";
    return;
  }

  // Render halaman
  const content = pages[hash] || pages.beranda;
  document.getElementById("app").innerHTML = content;

  // Animasi masuk
  gsap.from("#app", { opacity: 0, y: 20, duration: 0.5, clearProps: "all" });

  // Scroll ke atas
  window.scrollTo(0, 0);

  // Bersihkan interval jika pindah dari beranda
  if (sliderInterval) {
    clearInterval(sliderInterval);
    sliderInterval = null;
  }

  // --- LOGIKA HALAMAN ---
  // 1. Beranda: Slider & Typing
  if (hash === "beranda" || hash === "") {
    startHeroSlider();
    startTyping();
  }

  // 2. Halaman Lain
  if (hash === "berita") renderBerita();
  if (hash === "admin") renderAdmin();
  if (hash === "login") initLogin();
  if (hash === "galeri") filterGallery("all");
}

// Event Listener Router
window.addEventListener("hashchange", loadPage);
window.addEventListener("DOMContentLoaded", loadPage);

// ================= SLIDER & TYPING LOGIC =================
const textToType = "SELAMAT DATANG DI DESA MURTAJIH";
let charIndex = 0;
let isDeleting = false;
let typingTimeout;

function startTyping() {
  clearTimeout(typingTimeout);
  charIndex = 0;
  isDeleting = false;

  const targetElement = document.getElementById("typing-text");
  if (targetElement) {
    targetElement.innerHTML = "";
    typeWriter();
  }
}

function typeWriter() {
  const targetElement = document.getElementById("typing-text");
  if (!targetElement) return;

  let speed = 150;

  if (isDeleting) {
    speed = 100;
    targetElement.innerHTML = textToType.substring(0, charIndex - 1);
    charIndex--;
  } else {
    targetElement.innerHTML = textToType.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === textToType.length) {
    isDeleting = true;
    speed = 2000;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    speed = 500;
  }

  typingTimeout = setTimeout(typeWriter, speed);
}

function startHeroSlider() {
  let current = 0;
  const slides = document.querySelectorAll(".hero-slide");
  if (!slides.length) return;

  sliderInterval = setInterval(() => {
    if (!document.querySelector(".hero-slider")) {
      clearInterval(sliderInterval);
      return;
    }

    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 4000);
}

// ================= CRUD LOGIC (GLOBAL) =================

// Render Berita untuk Pengunjung
function renderBerita() {
  const el = document.getElementById("listBerita");
  if (!el) return;

  if (beritaData.length === 0) {
    el.innerHTML = `<div class="col-12 text-center py-5"><p class="text-muted">Belum ada berita dipublikasikan.</p></div>`;
    return;
  }

  el.innerHTML = beritaData
    .map(
      (b) => `
        <div class="col-md-4">
          <div class="card h-100 shadow-sm border-0 hover-shadow transition">
            <div class="card-body">
                <small class="text-muted d-block mb-2"><i class="bi bi-calendar-event"></i> ${
                  b.tanggal
                }</small>
                <h5 class="card-title fw-bold text-primary mb-3">${b.judul}</h5>
                <p class="card-text text-secondary">${b.isi.substring(0, 120)}${
                  b.isi.length > 120 ? "..." : ""
                }</p>
            </div>
            <div class="card-footer bg-white border-0 pb-3">
                <button class="btn btn-sm btn-outline-primary rounded-pill px-3">Baca Selengkapnya</button>
            </div>
          </div>
        </div>
    `,
    )
    .join("");
}

// ================= GALLERY LOGIC =================
window.filterGallery = function (year) {
  const container = document.getElementById("gallery-grid");
  if (!container) return;

  // 1. Filter Data
  let filteredData = galleryData;
  if (year !== "all") {
    filteredData = galleryData.filter((item) => item.year === year);
  }

  // 2. Render Gambar ke HTML
  if (filteredData.length === 0) {
    container.innerHTML = `<div class="text-center w-100 text-muted">Tidak ada foto untuk tahun ini.</div>`;
  } else {
    container.innerHTML = filteredData
      .map(
        (item) => `
      <div class="col-md-4 col-sm-6 animate-up">
          <div class="overflow-hidden rounded shadow-sm position-relative group">
              <img src="https://picsum.photos/400/300?random=${item.img}" class="img-fluid w-100 hover-zoom" alt="Kegiatan ${item.year}">
              <div class="position-absolute bottom-0 start-0 bg-dark bg-opacity-75 text-white px-2 py-1 small m-2 rounded">
                ${item.year}
              </div>
          </div>
      </div>
    `,
      )
      .join("");
  }

  // 3. Update Tombol Active (Visual)
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove("active", "btn-primary");
    btn.classList.add("btn-outline-primary");

    if (btn.getAttribute("data-filter") === year) {
      btn.classList.remove("btn-outline-primary");
      btn.classList.add("active", "btn-primary");
    }
  });
};

// Render Berita untuk Admin
function renderAdmin() {
  const container = document.getElementById("adminBerita");
  if (!container) return;

  if (beritaData.length === 0) {
    container.innerHTML = `<div class="alert alert-info">Belum ada berita. Silakan tambah baru.</div>`;
    return;
  }

  container.innerHTML = beritaData
    .map(
      (b, i) => `
        <div class="card mb-3 shadow-sm border-0">
          <div class="card-body d-flex justify-content-between align-items-center">
            <div>
                <h6 class="fw-bold text-dark mb-1">${b.judul}</h6>
                <small class="text-muted">${b.tanggal}</small>
                <p class="mb-0 text-muted small text-truncate" style="max-width: 400px;">${b.isi}</p>
            </div>
            <button class="btn btn-outline-danger btn-sm" onclick="hapusBerita(${i})">
                <i class="bi bi-trash"></i>
            </button>
          </div>
        </div>
    `,
    )
    .join("");
}

// Fungsi Tambah (Global Scope)
window.tambahBerita = function () {
  const judulInput = document.getElementById("judul");
  const isiInput = document.getElementById("isi");

  if (!judulInput.value.trim() || !isiInput.value.trim()) {
    alert("Mohon isi judul dan konten berita!");
    return;
  }

  beritaData.unshift({
    judul: judulInput.value,
    isi: isiInput.value,
    tanggal: new Date().toLocaleDateString("id-ID"),
  });

  localStorage.setItem("berita", JSON.stringify(beritaData));

  // Bersihkan input
  judulInput.value = "";
  isiInput.value = "";

  renderAdmin();
  alert("Berita berhasil diterbitkan!");
};

// Fungsi Hapus (Global Scope)
window.hapusBerita = function (index) {
  if (confirm("Apakah Anda yakin ingin menghapus berita ini?")) {
    beritaData.splice(index, 1);
    localStorage.setItem("berita", JSON.stringify(beritaData));
    renderAdmin();
  }
};

// ================= AUTH LOGIC =================
function initLogin() {
  const form = document.getElementById("loginForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const u = document.getElementById("username").value;
    const p = document.getElementById("password").value;

    // Login Hardcoded (Hanya untuk Demo/Tugas Kuliah)
    if (u === "admin" && p === "admin123") {
      sessionStorage.setItem("isLoggedIn", "true");
      location.hash = "admin";
    } else {
      const err = document.getElementById("loginError");
      err.classList.remove("d-none");

      // Efek Getar GSAP
      gsap.fromTo(
        ".login-card",
        { x: -10 },
        {
          x: 10,
          duration: 0.1,
          repeat: 5,
          yoyo: true,
          onComplete: () => gsap.set(".login-card", { x: 0 }),
        },
      );
    }
  });
}

// Fungsi Logout (Global Scope)
window.logout = function () {
  sessionStorage.removeItem("isLoggedIn");
  location.hash = "login";
};

// ================= FOOTER =================
document.getElementById("footer-container").innerHTML = `
<footer class="bg-dark text-white pt-5 pb-3 mt-auto">
  <div class="container">
    <div class="row">
        <div class="col-md-4 mb-4">
            <h5 class="text-uppercase text-primary fw-bold mb-3">Desa Murtajih</h5>
            <p class="small text-white-50">Mewujudkan pelayanan digital untuk masyarakat yang lebih sejahtera, transparan, dan akuntabel.</p>
        </div>
        <div class="col-md-4 mb-4">
            <h5 class="text-uppercase fw-bold mb-3">Tautan Cepat</h5>
            <ul class="list-unstyled">
                <li><a href="#profil" class="text-white-50 text-decoration-none">Profil Desa</a></li>
                <li><a href="#perangkat" class="text-white-50 text-decoration-none">Struktur Organisasi</a></li>
                <li><a href="#berita" class="text-white-50 text-decoration-none">Berita Terkini</a></li>
            </ul>
        </div>
        <div class="col-md-4 mb-4 text-md-end">
            <h5 class="text-uppercase fw-bold mb-3">Media Sosial</h5>
            <div>
                <a href="#" class="btn btn-outline-light btn-sm me-2 rounded-circle"><i class="bi bi-facebook"></i></a>
                <a href="#" class="btn btn-outline-light btn-sm me-2 rounded-circle"><i class="bi bi-instagram"></i></a>
                <a href="#" class="btn btn-outline-light btn-sm rounded-circle"><i class="bi bi-youtube"></i></a>
            </div>
        </div>
    </div>
    <hr class="border-secondary">
    <div class="text-center small text-white-50">
      <p class="mb-0">© ${new Date().getFullYear()} Pemerintah Desa Murtajih. All Rights Reserved.</p>
    </div>
  </div>
</footer>
`;
