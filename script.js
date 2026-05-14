/* ============================================================
   Aadesh Solutions — script.js
   ============================================================
   TO ADD A PROJECT: add an object to the PROJECTS array below.
   Fields:
     id        — unique number
     title     — project name
     category  — "web" | "mobile" | "fullstack"
     desc      — short description (shown on card)
     longDesc  — full description (shown in modal)
     image     — path to screenshot, e.g. "assets/projects/my-project.png"
     tech      — array of tech tags
   ============================================================ */

const PROJECTS = [
  {
    id: 1,
    title: "Shopping Mall & Grocery POS System",
    category: "web",
    desc: "A comprehensive POS system for shopping malls and groceries with barcode scanning, multiple billing counters, and warehouse management.",
    longDesc: "A powerful Point of Sale (POS) system designed for shopping malls and grocery stores. It features multiple billing counters, wholesale management, barcode and HSN code billing, purchase and expense tracking, customer loyalty programs, due management, supplier management, warehouse-wise product management, GST reports, and comprehensive dashboard reporting.",
    images: [
      "assets/posphoto/1.PNG",
      "assets/posphoto/admindash.PNG",
      "assets/posphoto/product.PNG",
      "assets/posphoto/orders.PNG",
      "assets/posphoto/pos.PNG",
       "assets/posphoto/expence.PNG",
       "assets/posphoto/purchase.PNG",
      "assets/posphoto/roylty.PNG",
      "assets/posphoto/cash.PNG",
  
    ],
    tech: ["PHP", "Laravel", "MySQL", "Ajax" ]
  },
  {
    id: 2,
    title: "Restaurant Management & Table Booking System",
    category: "web",
    desc: "A complete restaurant management software with table booking, order processing, and integrated expense tracking.",
    longDesc: "A robust restaurant management platform designed to streamline daily operations. It features a fully integrated table booking and reservation system, seamless order management from backend to kitchen, comprehensive expense tracking, and an intuitive admin dashboard to ensure smooth operations for both staff and management.",
    images: [
      "assets/resturant/page0.PNG",
      "assets/resturant/page1.PNG",
      "assets/resturant/page2.PNG",
      "assets/resturant/page3.PNG",
      "assets/resturant/page4.PNG"
    ],
    tech: ["Table Booking", "Expense Management", "Web App", "Admin Dashboard"]
  },
  {
    id: 3,
    title: "AdGo: Business Directory & Marketplace",
    category: "fullstack",
    desc: "A Justdial-style platform featuring vendor store listings, a WhatsApp-style marketplace, and subscription plans.",
    longDesc: "AdGo is a comprehensive business directory and marketplace platform similar to Justdial. Built to connect users with local businesses, it features detailed vendor store listings, a robust WhatsApp-style marketplace for direct communication, and a tiered subscription system that allows vendors to purchase 'Sponsored' ranking for better visibility.",
    images: [
      "assets/adgo/1.jpg",
      "assets/adgo/2.jpg",
      "assets/adgo/3.jpg",
      "assets/adgo/4.jpg",
      "assets/adgo/5.jpg",
      "assets/adgo/6.jpg",
      "assets/adgo/7.jpg"
    ],
    tech: ["Flutter", "PHP", "JavaScript", "Marketplace"]
  },
  {
    id: 4,
    title: "Parent Guard Monitoring App",
    category: "mobile",
    desc: "A parental control app with real-time location tracking, app blocking, and a reward system.",
    longDesc: "Parent Guard is a hybrid mobile application designed to help parents monitor and manage their children's device usage. Built with Flutter for a seamless UI and Native Java for robust background app blocking, it features real-time location tracking via Firebase, customizable usage limits, and an interactive reward system to encourage healthy digital habits.",
    images: [
       "assets/parentguard/6.jpg",
      "assets/parentguard/1.jpg",
      "assets/parentguard/2.jpg",
      "assets/parentguard/3.jpg",
      "assets/parentguard/4.jpg",
      "assets/parentguard/5.jpg",
     
    ],
    tech: ["Flutter", "Java", "Firebase", "Background Services"]
  },
  {
    id: 5,
    title: "Real-Time Ride Booking App",
    category: "fullstack",
    desc: "A complete real-time ride booking ecosystem including a Rider app, Customer app, and Web Admin Panel.",
    longDesc: "An end-to-end ride booking platform designed to handle real-time transportation logistics. The ecosystem includes dedicated mobile applications for both Riders and Customers built with Flutter, along with a comprehensive Web Admin Panel for management. It is powered by a robust PHP and MySQL backend, utilizing Java as a backend service for seamless real-time communication.",
    images: [
      "assets/cabebooking/1.jpeg",
      "assets/cabebooking/2.jpeg",
      "assets/cabebooking/3.jpeg",
      "assets/cabebooking/4.jpeg",
      "assets/cabebooking/5.jpeg",
      "assets/cabebooking/6.jpeg"
    ],
    tech: ["Flutter", "PHP", "MySQL", "Java"]
  },
  {
    id: 6,
    title: "Gym Management System",
    category: "web",
    desc: "A comprehensive management system for fitness centers handling subscriptions, expenses, and members.",
    longDesc: "A complete Gym Management System tailored for fitness center owners. It streamlines daily operations by managing customer memberships and subscriptions, tracking business expenses, and providing detailed administrative reports. Built entirely as a web application utilizing PHP, MySQL, AJAX, and JavaScript for a smooth, dynamic user experience.",
    images: [
      "assets/gym/1.PNG",
      "assets/gym/2.PNG",
      "assets/gym/3.PNG"
    ],
    tech: ["PHP", "MySQL", "AJAX", "JavaScript"]
  },
  {
    id: 7,
    title: "Doctor Appointment System (Coming Soon)",
    category: "web",
    desc: "A comprehensive doctor appointment booking system for patients and clinic management.",
    longDesc: "Our upcoming Doctor Appointment System allows patients to easily book, reschedule, and manage their appointments online. For doctors and clinics, it provides a powerful backend to manage schedules, view patient history, and handle billing seamlessly. This product is currently in the final stages of development.",
    images: ["assets/doctor/1.jfif"],
    tech: ["Coming Soon", "Healthcare", "Booking System"]
  },
  {
    id: 8,
    title: "Biometric Attendance System (Coming Soon)",
    category: "fullstack",
    desc: "An advanced attendance tracking system utilizing facial recognition and fingerprint biometrics.",
    longDesc: "This upcoming system modernizes attendance tracking for businesses and educational institutions. By leveraging advanced facial recognition and fingerprint (biometric) technology, it ensures secure, touchless, and highly accurate attendance logging. It will integrate with a real-time dashboard for HR and management. Currently in development.",
    images: ["assets/attedence/2.jfif"],
    tech: ["Coming Soon", "Biometrics", "Facial Recognition", "AI"]
  }
];

/* ============================================================
   PARTICLE BACKGROUND
   ============================================================ */
(function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let W, H;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.r = Math.random() * 1.5 + 0.3;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = (Math.random() - 0.5) * 0.3;
      this.alpha = Math.random() * 0.5 + 0.1;
      this.color = Math.random() > 0.5 ? '#00d4ff' : '#7b2fff';
    }
    update() {
      this.x += this.vx; this.y += this.vy;
      if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.alpha;
      ctx.fill();
    }
  }

  for (let i = 0; i < 120; i++) particles.push(new Particle());

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = '#00d4ff';
          ctx.globalAlpha = (1 - dist / 100) * 0.06;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    ctx.globalAlpha = 1;
    particles.forEach(p => { p.update(); p.draw(); });
    drawConnections();
    requestAnimationFrame(animate);
  }
  animate();
})();

/* ============================================================
   CURSOR GLOW
   ============================================================ */
(function initCursor() {
  const glow = document.getElementById('cursorGlow');
  document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });
})();

/* ============================================================
   NAVBAR
   ============================================================ */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    document.getElementById('backToTop').classList.toggle('show', window.scrollY > 400);
  });

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-open');
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('mobile-open'));
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-link[data-section="${e.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => observer.observe(s));
})();

/* ============================================================
   BACK TO TOP
   ============================================================ */
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ============================================================
   SCROLL REVEAL ANIMATIONS
   ============================================================ */
(function initScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        const delay = e.target.dataset.delay || 0;
        setTimeout(() => e.target.classList.add('visible'), parseInt(delay));
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.about-card, .service-card, .project-card').forEach(el => {
    observer.observe(el);
  });
})();

/* ============================================================
   COUNTER ANIMATION
   ============================================================ */
(function initCounters() {
  const counters = document.querySelectorAll('.stat-num');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const target = parseInt(e.target.dataset.target);
        let current = 0;
        const step = target / 40;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) { current = target; clearInterval(timer); }
          e.target.textContent = Math.floor(current);
        }, 40);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
})();

/* ============================================================
   PROJECTS — RENDER & FILTER
   ============================================================ */
(function initProjects() {
  const grid = document.getElementById('projectsGrid');
  const emptyState = document.getElementById('projectsEmpty');
  const filterBtns = document.querySelectorAll('.filter-btn');
  let activeFilter = 'all';

  function renderProjects(filter) {
    grid.innerHTML = '';
    const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

    if (filtered.length === 0) {
      emptyState.classList.add('show');
      grid.style.display = 'none';
      return;
    }

    emptyState.classList.remove('show');
    grid.style.display = 'grid';

    filtered.forEach((project, idx) => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.style.transitionDelay = `${idx * 80}ms`;
      card.innerHTML = `
        <img class="project-thumb" src="${project.images ? project.images[0] : project.image}" alt="${project.title}" onerror="this.style.background='var(--bg3)';this.style.minHeight='220px'" />
        <div class="project-info">
          <div class="project-category">${project.category}</div>
          <h3>${project.title}</h3>
          <p>${project.desc}</p>
          <div class="project-tech">${project.tech.map(t => `<span>${t}</span>`).join('')}</div>
        </div>
      `;
      card.addEventListener('click', () => openModal(project));
      grid.appendChild(card);

      // Trigger animation
      setTimeout(() => {
        const io = new IntersectionObserver(entries => {
          entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
        }, { threshold: 0.1 });
        io.observe(card);
      }, 50);
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      renderProjects(activeFilter);
    });
  });

  renderProjects('all');
})();

/* ============================================================
   PROJECT MODAL
   ============================================================ */
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalContent = document.getElementById('modalContent');

function openModal(project) {
  let imagesHtml = '';
  if (project.images && project.images.length > 0) {
    imagesHtml = project.images.map(img => `<img class="modal-img" src="${img}" alt="${project.title}" onerror="this.style.display='none'" />`).join('');
  } else if (project.image) {
    imagesHtml = `<img class="modal-img" src="${project.image}" alt="${project.title}" onerror="this.style.display='none'" />`;
  }

  modalContent.innerHTML = `
    ${imagesHtml}
    <div class="modal-tag">${project.category}</div>
    <h2 class="modal-title">${project.title}</h2>
    <p class="modal-desc">${project.longDesc}</p>
    <p class="modal-tech-title">Technologies Used</p>
    <div class="modal-tech">${project.tech.map(t => `<span>${t}</span>`).join('')}</div>
  `;
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ============================================================
   FOOTER YEAR
   ============================================================ */
document.getElementById('footerYear').textContent = new Date().getFullYear();
