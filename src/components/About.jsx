import React from "react";

const About = () => {
  return (
    <section id="profil" className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-5 fw-bold mb-3">Tentang Kami</h2>
            <div className="section-underline"></div>
            <p className="lead mb-4">The Profile</p>
            <p className="mb-4">
              Desa Murtajih adalah salah satu desa di Kecamatan Pademawu,
              Kabupaten Pamekasan. Desa kami memiliki sejarah panjang dalam
              menjaga tradisi sekaligus beradaptasi dengan kemajuan teknologi.
              Kami berkomitmen untuk memberikan pelayanan terbaik bagi warga.
            </p>
            <div className="row">
              <div className="col-md-6">
                <h5 className="text-warning">Visi</h5>
                <p>
                  Terwujudnya Desa Murtajih yang Mandiri, Aman, dan Sejahtera.
                </p>
              </div>
              <div className="col-md-6">
                <h5 className="text-warning">Misi</h5>
                <ul className="list-unstyled">
                  <li>• Meningkatkan kualitas pelayanan publik.</li>
                  <li>• Mengembangkan potensi ekonomi lokal.</li>
                  <li>• Menjaga kelestarian lingkungan dan budaya.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
