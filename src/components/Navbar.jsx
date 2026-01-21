import React, { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    // Tutup menu mobile saat link diklik
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        const menu = document.getElementById("menu");
        if (menu && menu.classList.contains("show")) {
          bootstrap.Collapse.getOrCreateInstance(menu).hide();
        }
      });
    });
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-custom fixed-top"
      aria-label="Main Navigation"
    >
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#beranda">
          <span className="judul-desa fw-bold">
            <span className="text-gold">DESA</span>
            <span className="text-white">MURTAJIH</span>
          </span>
        </a>

        <button
          className="navbar-toggler text-white border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <i className="bi bi-list fs-2"></i>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="#beranda">
                Beranda
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#profil">
                Profil
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#perangkat">
                Perangkat
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#berita">
                Berita
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#galeri">
                Galeri
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#kontak">
                Kontak
              </a>
            </li>
            <li className="nav-item ms-lg-3">
              <a
                className="btn btn-warning btn-sm fw-bold rounded-pill px-3"
                href="#login"
              >
                <i className="bi bi-person-lock"></i> Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
