import React from "react";

const News = () => {
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

  return (
    <section id="berita" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold">Berita Desa</h2>
            <div className="section-underline"></div>
            <p className="lead">Latest News</p>
          </div>
        </div>
        <div className="row">
          {defaultBerita.map((berita, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card-custom">
                <div className="card-body">
                  <h5 className="card-title fw-bold">{berita.judul}</h5>
                  <p className="text-muted small">{berita.tanggal}</p>
                  <p className="card-text">{berita.isi}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
