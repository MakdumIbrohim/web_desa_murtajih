
export const Navbar = (data) => {
    const links = data.links.map(link =>
        `<li class="nav-item">
            <a class="nav-link" href="${link.href}">${link.label}</a>
        </li>`
    ).join('');

    return `
    <nav class="navbar navbar-expand-lg fixed-top py-3">
        <div class="container">
            <div class="glass-header w-100 rounded-4 px-4 py-2 d-flex justify-content-between align-items-center">
                <a class="navbar-brand fw-bold text-white fs-4" href="#">
                    <i class="bi bi-buildings-fill me-2 text-info"></i>${data.brand}
                </a>
                <button class="navbar-toggler border-0 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
                    <i class="bi bi-list fs-2"></i>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navMenu">
                    <ul class="navbar-nav align-items-center">
                        ${links}
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    `;
};

export const Hero = (data) => {
    return `
    <section id="hero" class="hero-section text-center position-relative">
        <div class="hero-bg-overlay"></div>
        <div class="container position-relative z-2">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <span class="badge glass-panel px-3 py-2 mb-4 text-info rounded-pill">
                        <i class="bi bi-geo-alt-fill me-1"></i> Pademawu, Pamekasan
                    </span>
                    <h1 class="display-1 fw-bold mb-4 text-white lh-1 hero-title">
                        ${data.title}
                    </h1>
                    <p class="lead text-muted mb-5 w-75 mx-auto hero-subtitle">
                        ${data.subtitle}
                    </p>
                    <div class="hero-cta d-flex justify-content-center gap-3">
                        <a href="#explore" class="btn btn-primary-glow btn-lg rounded-pill px-5">${data.cta}</a>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" class="btn glass-panel btn-lg rounded-pill px-4 text-white">
                            <i class="bi bi-play-circle me-2"></i> Tonton Video
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="row mt-5 pt-5 justify-content-center">
                <div class="col-lg-10">
                     <div class="glass-panel p-2 rounded-4 hero-image-container floating">
                        <img src="${data.image}" class="img-fluid rounded-4 w-100" alt="Desa Murtajih" style="height: 500px; object-fit: cover;">
                     </div>
                </div>
            </div>
        </div>
    </section>
    `;
};

export const About = (data) => {
    const listItems = data.misi.map(item => `<li class="mb-3 d-flex"><i class="bi bi-check-circle-fill text-primary me-3"></i>${item}</li>`).join('');

    return `
    <section id="about">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 mb-5 mb-lg-0">
                    <h6 class="text-primary text-uppercase letter-spacing-2 mb-3">${data.subtitle}</h6>
                    <h2 class="display-4 fw-bold mb-4">${data.title}</h2>
                    <p class="text-muted mb-4 lead">${data.history}</p>
                    <div class="glass-panel p-4 rounded-4 border-start border-4 border-info">
                        <h5 class="fw-bold mb-3 text-white">Visi</h5>
                        <p class="fst-italic mb-4">"${data.visi}"</p>
                        <h5 class="fw-bold mb-3 text-white">Misi</h5>
                        <ul class="list-unstyled text-muted mb-0">
                            ${listItems}
                        </ul>
                    </div>
                </div>
                <div class="col-lg-6 ps-lg-5">
                    <div class="row g-4">
                        <div class="col-6">
                            <div class="glass-panel p-4 rounded-4 text-center h-100 d-flex flex-column justify-content-center">
                                <h2 class="display-3 fw-bold text-primary mb-0 counter">3.5k</h2>
                                <p class="text-white-50">Penduduk</p>
                            </div>
                        </div>
                        <div class="col-6 mt-5">
                            <div class="glass-panel p-4 rounded-4 text-center h-100 d-flex flex-column justify-content-center bg-primary bg-opacity-10">
                                <h2 class="display-3 fw-bold text-white mb-0 counter">4</h2>
                                <p class="text-white-50">Dusun</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
};

export const Government = (data) => {
    const cards = data.officials.map(person => `
        <div class="col-md-6 col-lg-3">
            <div class="glass-panel p-4 rounded-4 text-center h-100 hover-lift transition-all">
                <div class="mb-4 position-relative d-inline-block">
                    <img src="${person.img}" class="rounded-circle border border-4 border-white border-opacity-10" width="120" height="120" alt="${person.name}">
                    <span class="position-absolute bottom-0 end-0 bg-primary rounded-circle p-2 border border-dark">
                        <i class="bi bi-person-check-fill text-white"></i>
                    </span>
                </div>
                <h5 class="fw-bold text-white">${person.name}</h5>
                <p class="text-primary small mb-0">${person.role}</p>
            </div>
        </div>
    `).join('');

    return `
    <section id="government" class="bg-dark bg-opacity-50">
        <div class="container">
            <div class="text-center mb-5">
                <h6 class="text-primary text-uppercase">${data.subtitle}</h6>
                <h2 class="display-4 fw-bold">${data.title}</h2>
            </div>
            <div class="row g-4">
                ${cards}
            </div>
        </div>
    </section>
    `;
};

export const Services = (data) => {
    const items = data.items.map(item => `
        <div class="col-lg-4">
            <div class="glass-panel p-5 rounded-4 h-100 hover-scale">
                <div class="icon-box bg-primary bg-opacity-10 text-primary rounded-3 d-inline-flex p-3 mb-4">
                    <i class="bi ${item.icon} fs-2"></i>
                </div>
                <h4 class="fw-bold text-white mb-3">${item.title}</h4>
                <p class="text-muted mb-4">${item.desc}</p>
                <a href="#" class="btn btn-outline-light rounded-pill btn-sm">Layanan Online <i class="bi bi-arrow-right ms-2"></i></a>
            </div>
        </div>
    `).join('');

    return `
    <section id="services">
        <div class="container">
             <div class="text-center mb-5">
                <h6 class="text-primary text-uppercase">${data.subtitle}</h6>
                <h2 class="display-4 fw-bold">${data.title}</h2>
            </div>
            <div class="row g-4">
                ${items}
            </div>
        </div>
    </section>
    `;
};

export const Transparency = (data) => {
    const bars = data.details.map(det => `
        <div class="mb-4">
            <div class="d-flex justify-content-between text-white mb-2">
                <span>${det.label}</span>
                <span class="fw-bold">${det.value}</span>
            </div>
            <div class="progress glass-panel" style="height: 10px;">
                <div class="progress-bar bg-gradient-primary" role="progressbar" style="width: ${det.percentage}%"></div>
            </div>
        </div>
    `).join('');

    return `
    <section id="transparency">
         <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5">
                    <h6 class="text-primary text-uppercase">${data.subtitle}</h6>
                    <h2 class="display-4 fw-bold mb-4">${data.title}</h2>
                    <p class="text-muted mb-4">Kami berkomitmen untuk pengelolaan anggaran yang transparan dan akuntabel demi kemajuan desa.</p>
                    <button class="btn btn-primary-glow rounded-pill px-4">Lihat Laporan Lengkap</button>
                </div>
                <div class="col-lg-6 offset-lg-1">
                    <div class="glass-panel p-5 rounded-4 mt-5 mt-lg-0">
                        ${bars}
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
};

export const Explore = (data) => {
    const gallery = data.items.map(item => `
        <div class="col-md-4">
            <div class="glass-panel p-2 rounded-4 h-100 group-hover">
                <div class="overflow-hidden rounded-4 position-relative">
                    <img src="${item.img}" class="img-fluid w-100 transition-transform" style="height: 300px; object-fit: cover;">
                    <div class="position-absolute bottom-0 start-0 w-100 p-4 bg-gradient-to-t from-black">
                        <span class="badge bg-primary mb-2">${item.type}</span>
                        <h5 class="text-white fw-bold mb-0">${item.title}</h5>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    return `
    <section id="explore">
        <div class="container">
            <div class="text-center mb-5">
                <h6 class="text-primary text-uppercase">${data.subtitle}</h6>
                <h2 class="display-4 fw-bold">${data.title}</h2>
            </div>
            <div class="row g-4">
                ${gallery}
            </div>
        </div>
    </section>
    `;
};

export const Contact = (data) => {
    return `
    <section id="contact" class="pb-0">
        <div class="container mb-5">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                     <div class="glass-panel p-5 rounded-4 text-center">
                        <h2 class="display-4 fw-bold mb-4">${data.title}</h2>
                        <p class="text-muted mb-5">Hubungi kami untuk informasi lebih lanjut atau sampaikan saran Anda.</p>
                        
                        <div class="row g-4 mb-5">
                            <div class="col-md-4">
                                <i class="bi bi-geo-alt fs-2 text-primary mb-3 d-block"></i>
                                <h6 class="text-white">Alamat</h6>
                                <p class="small text-muted">${data.address}</p>
                            </div>
                            <div class="col-md-4">
                                <i class="bi bi-envelope fs-2 text-primary mb-3 d-block"></i>
                                <h6 class="text-white">Email</h6>
                                <p class="small text-muted">${data.email}</p>
                            </div>
                            <div class="col-md-4">
                                <i class="bi bi-telephone fs-2 text-primary mb-3 d-block"></i>
                                <h6 class="text-white">Telepon</h6>
                                <p class="small text-muted">${data.phone}</p>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    </section>
    `;
};

export const Footer = (data) => {
    return `
    <div class="bg-dark py-4 text-center border-top border-secondary border-opacity-10">
        <div class="container">
            <p class="text-muted mb-0 small">${data.copyright}</p>
        </div>
    </div>
    `;
};
