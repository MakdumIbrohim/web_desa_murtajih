import React from "react";

const Government = () => {
  const officials = [
    {
      name: "H. Fulan",
      role: "Kepala Desa",
      img: "https://ui-avatars.com/api/?name=Kepala+Desa&background=0D8ABC&color=fff",
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
  ];

  return (
    <section id="perangkat" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold">Pemerintahan Desa</h2>
            <div className="section-underline"></div>
            <p className="lead">Government Structure</p>
          </div>
        </div>
        <div className="row justify-content-center">
          {officials.map((official, index) => (
            <div key={index} className="col-md-3 mb-4">
              <div className="card-perangkat">
                <img
                  src={official.img}
                  alt={official.name}
                  className="foto-perangkat"
                />
                <div className="info">
                  <h6 className="fw-bold">{official.name}</h6>
                  <p className="text-muted small">{official.role}</p>
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
