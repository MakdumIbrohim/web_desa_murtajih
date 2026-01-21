import React from "react";

const Government = () => {
  const officials = [
    {
        name: "H. MOHAMMAD BAHARUDDIN",
        role: "KEPALA DESA",
        img: "/perangkat_desa/kepala-desa.jpg",
    },
    {
      name: "SUDAHNAN SAFRAJI, ST",
      role: "SEKERTARIS DESA",
      img: "https://ui-avatars.com/api/?name=Sekretaris&background=0D8ABC&color=fff",
    },
    {
      name: "TSUROYYA ALIYAH",
      role: "KAUR TATA USAHA/UMUM",
      img: "https://ui-avatars.com/api/?name=Kaur+Keuangan&background=0D8ABC&color=fff",
    },
    {
      name: "FITRIATUS SHOLIHAH, S.Pd",
      role: "KAUR KEUANGAN",
      img: "https://ui-avatars.com/api/?name=Kaur+Keuangan&background=0D8ABC&color=fff",
    },
    {
      name: "FAHRUR ROSIANTO",
      role: "KAUR PERENCANAAN",
      img: "https://ui-avatars.com/api/?name=Kaur+Keuangan&background=0D8ABC&color=fff",
    },
    {
      name: "SYARIFATUL LAILI, S.Pd",
      role: "KASI PEMERINTAHAN",
      img: "https://ui-avatars.com/api/?name=Kaur+Keuangan&background=0D8ABC&color=fff",
    },
    {
      name: "CHAIRIL FAJAR, SE",
      role: "KASI KESEJAHTERAAN RAKYAT",
      img: "https://ui-avatars.com/api/?name=Kaur+Keuangan&background=0D8ABC&color=fff",
    },
    {
        name: "NURUL KAMARIYAH, S.Pd",
        role: "STAF KASI KESEJATERAAN RAKYAT",
        img: "/perangkat_desa/staf-kasi-kesejahteraan.jpg",
    },
    {
      name: "M. MUDHAR, S.Pd",
      role: "KASI PELAYANAN",
      img: "https://ui-avatars.com/api/?name=Kaur+Keuangan&background=0D8ABC&color=fff",
    },
    {
      name: "IKHWAN MAULANA, S.Pd",
      role: "STAF KASI PELAYANAN",
      img: "https://ui-avatars.com/api/?name=Kaur+Keuangan&background=0D8ABC&color=fff",
    },
    {
        name: "KHOSNOL HATIMAH",
        role: "KADUS MURTAJIH",
        img: "/perangkat_desa/kadus-murtajih.jpg",
    },
    {
        name: "RONI CAHYONO, S.Pd",
        role: "KADUS SOLOH DAJAH",
        img: "/perangkat_desa/kadus-soloh-dajah.jpg",
    },
    {
        name: "NURUL ALIMUDDIN, S.Pd",
        role: "KADUS SOLOH TIMUR",
        img: "https://ui-avatars.com/api/?name=Kaur+Keuangan&background=0D8ABC&color=fff",
    },
    {
        name: "MOHAMMAD NOER FAISAL",
        role: "KADUS NANGGIRIK",
        img: "https://ui-avatars.com/api/?name=Kaur+Keuangan&background=0D8ABC&color=fff",
    },
    {
        name: "ABD. HALIM",
        role: "KADUS SOLOH LAOK",
        img: "https://ui-avatars.com/api/?name=Kaur+Keuangan&background=0D8ABC&color=fff",
    },
    {
        name: "ELLY FITRIASIH",
        role: "KADUS OBERAN",
        img: "/perangkat_desa/kadus-oberan.jpg",
    },
    {
        name: " SRI SUHARTATIK",
        role: "KADUS TELAGA SARI",
        img: "/perangkat_desa/kadus-telaga-sari.jpg",
    },
    {
        name: "MUHLIS ADI PUTRA",
        role: "KADUS PAO GADING",
        img: "/perangkat_desa/kadus-pao-gading.jpg",
    },
  ];

  return (
    <section id="perangkat" className="py-5 bg-light">
      <div className="container">
        {/* Header Section */}
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold">Pemerintahan Desa</h2>
            <div className="section-underline mx-auto"></div>
            <p className="lead">Government Structure</p>
          </div>
        </div>

        {/* Officials Grid */}
        <div className="row justify-content-center">
          {officials.map((official, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="card-perangkat text-center shadow-sm h-100 border-0">
                <div className="img-container">
                  <img
                    src={official.img}
                    alt={official.name}
                    className="foto-perangkat"
                  />
                </div>
                <div className="info p-3">
                  <h6 className="fw-bold mb-1 text-uppercase" style={{ fontSize: '0.85rem' }}>
                    {official.name}
                  </h6>
                  <p className="text-primary small mb-0 fw-semibold">
                    {official.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Government;
