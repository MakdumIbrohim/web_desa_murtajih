import React from "react";

import { siteData } from "../data/content";

const Gallery = () => {
  const galleryData = siteData.gallery.images;

  return (
    <section id="galeri" className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold">Galeri Desa</h2>
            <div className="section-underline"></div>
            <p className="lead">Gallery</p>
          </div>
        </div>
        <div className="row">
          {galleryData.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="card-custom hover-zoom">
                <img
                  src={`https://picsum.photos/400/300?random=${item.img}`}
                  alt={`Gallery ${item.id}`}
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <p className="text-muted">Tahun {item.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
