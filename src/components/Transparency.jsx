import React from "react";

const Transparency = () => {
  const details = [
    {
      label: "Pendapatan Asli Desa",
      value: "Rp 150.000.000",
      percentage: 85,
    },
    { label: "Dana Desa", value: "Rp 850.000.000", percentage: 60 },
    { label: "Bantuan Keuangan", value: "Rp 200.000.000", percentage: 40 },
    { label: "Belanja Desa", value: "Rp 1.100.000.000", percentage: 75 },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold">Transparansi Anggaran</h2>
            <div className="section-underline"></div>
            <p className="lead">APBDes Tahun 2024</p>
          </div>
        </div>
        <div className="row">
          {details.map((detail, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="card-custom p-4">
                <h6 className="fw-bold">{detail.label}</h6>
                <p className="h4 text-warning mb-2">{detail.value}</p>
                <div className="progress">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: `${detail.percentage}%` }}
                    aria-valuenow={detail.percentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <small className="text-muted">{detail.percentage}%</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transparency;
