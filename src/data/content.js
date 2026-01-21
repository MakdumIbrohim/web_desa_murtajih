// 1. Letakkan IMPORT di baris paling atas
import fotoKades from "/perangkat_desa/kepala-desa.jpg";

// 2. Deklarasikan siteData setelah import
export const siteData = {
  meta: {
    title: "Desa Murtajih - Smart Village",
    description:
      "Website Resmi Desa Murtajih, Kecamatan Pademawu, Kabupaten Pamekasan.",
  },
  navbar: {
    brand: "Desa Murtajih",
    links: [
      { label: "Beranda", href: "#hero" },
      { label: "Tentang Kami", href: "#about" },
      { label: "Pemerintahan", href: "#government" },
      { label: "Layanan", href: "#services" },
      { label: "Transparansi", href: "#transparency" },
      { label: "Potensi", href: "#explore" },
      { label: "Kontak", href: "#contact" },
    ],
  },
  hero: {
    title: "Selamat Datang di<br>Desa Murtajih",
    subtitle: "Menuju Desa Mandiri, Sejahtera, dan Berbudaya.",
    cta: "Jelajahi Desa",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2664&auto=format&fit=crop",
  },
  about: {
    title: "Tentang Kami",
    subtitle: "The Profile",
    history:
      "Desa Murtajih adalah salah satu desa di Kecamatan Pademawu, Kabupaten Pamekasan. Desa kami memiliki sejarah panjang dalam menjaga tradisi sekaligus beradaptasi dengan kemajuan teknologi.",
    visi: "Terwujudnya Desa Murtajih yang Mandiri, Aman, dan Sejahtera.",
    misi: [
      "Meningkatkan kualitas pelayanan publik.",
      "Mengembangkan potensi ekonomi lokal.",
      "Menjaga kelestarian lingkungan dan budaya.",
    ],
  },
  government: {
    title: "Pemerintahan Desa",
    subtitle: "Government Structure",
    officials: [
      {
        name: "H. MOHAMMAD BAHARUDDIN",
        role: "KEPALA DESA",
        img: fotoKades, // Memanggil variabel yang di-import di atas
      },
      {
        name: "Ahmad",
        role: "Sekretaris Desa",
        img: "https://ui-avatars.com/api/?name=Sekretaris&background=0D8ABC&color=fff",
      },
      {
        name: "Siti",
        role: "Kaur Keuangan",
        img: "https://ui-avatars.com/api/?name=Kaur+Keuangan&background=0D8ABC&color=fff",
      },
      {
        name: "Budi",
        role: "Kaur Umum",
        img: "https://ui-avatars.com/api/?name=Kaur+Umum&background=0D8ABC&color=fff",
      },
    ],
  },
  services: {
    title: "Layanan Warga",
    subtitle: "Public Services",
    items: [
      {
        icon: "bi-file-earmark-text",
        title: "Administrasi Kependudukan",
        desc: "Pengurusan KTP, KK, dan Surat Pindah.",
      },
      {
        icon: "bi-envelope-paper",
        title: "Surat Pengantar",
        desc: "Surat pengantar SKCK, Nikah, dan Domisili.",
      },
      {
        icon: "bi-chat-dots",
        title: "Aduan Masyarakat",
        desc: "Sampaikan aspirasi dan keluhan Anda secara langsung.",
      },
    ],
  },
  explore: {
    title: "Potensi Desa",
    subtitle: "Explore Our Village",
    items: [
      {
        title: "Pertanian",
        desc: "Lahan subur untuk pertanian padi dan palawija.",
        img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2664&auto=format&fit=crop",
      },
      {
        title: "Wisata Alam",
        desc: "Keindahan alam yang masih asri dan alami.",
        img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2670&auto=format&fit=crop",
      },
      {
        title: "Budaya Lokal",
        desc: "Tradisi dan budaya yang kaya dan beragam.",
        img: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=2670&auto=format&fit=crop",
      },
    ],
  },
  gallery: {
    title: "Galeri Desa",
    subtitle: "Gallery",
    images: [
      { id: 1, year: "2025", img: 15 },
      { id: 2, year: "2025", img: 16 },
      { id: 3, year: "2025", img: 17 },
      { id: 4, year: "2026", img: 18 },
      { id: 5, year: "2026", img: 19 },
      { id: 6, year: "2026", img: 20 },
    ],
  },
  news: {
    title: "Berita Desa",
    subtitle: "Latest News",
    items: [
      {
        judul: "Kerja Bakti Desa",
        tanggal: "15/01/2026",
        isi: "Warga desa melakukan kerja bakti membersihkan saluran air.",
      },
      {
        judul: "Penyuluhan Kesehatan",
        tanggal: "10/01/2026",
        isi: "Posyandu mengadakan penyuluhan gizi buruk untuk balita.",
      },
    ],
  },
  contact: {
    title: "Hubungi Kami",
    subtitle: "Contact Us",
    address: "Jl. Raya Murtajih, Desa Murtajih, Kec. Pademawu, Kab. Pamekasan",
    phone: "+62 812-3456-7890",
    email: "info@desamurtajih.go.id",
  },
  footer: {
    text: "© 2026 Desa Murtajih. All rights reserved.",
  },
};
