import React, { useEffect } from "react";
import gsap from "gsap";

const Preloader = () => {
  useEffect(() => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
      gsap.to("#preloader", {
        opacity: 0,
        duration: 0.1,
        onComplete: () => preloader.remove(),
      });
    }
  }, []);

  return (
    <div id="preloader" aria-label="Loading Page">
      <div className="loader-content text-center">
        <h1 className="display-1 fw-bold reveal-text">MURTAJIH</h1>
        <div className="loader-bar"></div>
      </div>
    </div>
  );
};

export default Preloader;
