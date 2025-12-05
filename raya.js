
// Mobile menu functionality
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const mobileNav = document.querySelector('.mobile-nav');

        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });

        // Close mobile menu when clicking on links
        document.querySelectorAll('.mobile-nav a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!mobileMenuToggle.contains(e.target) && !mobileNav.contains(e.target)) {
    mobileMenuToggle.classList.remove('active');
    mobileNav.classList.remove('active');
  }
});


        // Enhanced smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                
                // Skip if href is just "#"
                if (targetId === '#') return;
                
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Enhanced header functionality
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            const scrolled = window.pageYOffset;
            
            if (scrolled > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Active menu item highlighting
        function updateActiveMenuItem() {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');
            
            let currentSection = '';
            const scrollPos = window.pageYOffset + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', updateActiveMenuItem);
        window.addEventListener('load', updateActiveMenuItem);

        // Parallax effect for geometric shapes
        window.addEventListener('scroll', () => {
            const shapes = document.querySelectorAll('.shape');
            const scrolled = window.pageYOffset;
            
            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 0.3;
                shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
            });
        });

        // Neural lines pulse effect
        const neuralLines = document.querySelectorAll('.neural-line');
        setInterval(() => {
            neuralLines.forEach((line, index) => {
                setTimeout(() => {
                    line.style.opacity = '1';
                    line.style.transform = 'scaleX(1.2)';
                    setTimeout(() => {
                        line.style.opacity = '0.2';
                        line.style.transform = 'scaleX(0.5)';
                    }, 200);
                }, index * 300);
            });
        }, 2000);

        // Enhanced particle generation
        function createQuantumParticle() {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.width = Math.random() * 4 + 1 + 'px';
            particle.style.height = particle.style.width;
            particle.style.background = ['#00ffff', '#ff0080', '#8000ff'][Math.floor(Math.random() * 3)];
            particle.style.borderRadius = '50%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = '100vh';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '-1';
            particle.style.boxShadow = `0 0 10px ${particle.style.background}`;
            
            document.body.appendChild(particle);
            
            const duration = Math.random() * 3000 + 2000;
            const drift = (Math.random() - 0.5) * 200;
            
            particle.animate([
                { transform: 'translateY(0px) translateX(0px)', opacity: 0 },
                { transform: `translateY(-100vh) translateX(${drift}px)`, opacity: 1 }
            ], {
                duration: duration,
                easing: 'ease-out'
            }).onfinish = () => particle.remove();
        }

        // Generate quantum particles
        setInterval(createQuantumParticle, 1500);

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe timeline items and hexagons
        document.querySelectorAll('.timeline-content, .hexagon').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(50px)';
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(el);
        });

        // Form submission effect
        document.querySelector('.submit-btn').addEventListener('click', function(e) {
            e.preventDefault();
            this.innerHTML = 'TRANSMITTING...';
            this.style.background = 'linear-gradient(45deg, #8000ff, #00ffff)';
            
            setTimeout(() => {
                this.innerHTML = 'TRANSMISSION COMPLETE';
                this.style.background = 'linear-gradient(45deg, #00ff00, #00ffff)';
                
                setTimeout(() => {
                    this.innerHTML = 'TRANSMIT TO MATRIX';
                    this.style.background = 'linear-gradient(45deg, #00ffff, #ff0080)';
                }, 2000);
            }, 1500);
        });
        
const items = document.querySelectorAll('.coverflow-item');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

let currentIndex = 0;

const descriptions = [
  'This certificate is presented by the University of Technology and Applied Sciences — Salalah to Raya bint Ali Said Muslim Al‑Amri in recognition of her valuable contributions to the Student Advisory Council during the 2023–2024 academic year, which greatly contributed to the success of its work.',
  'This certificate is awarded by the University of Technology and Applied Sciences — Salalah to Raya Ali Said Al‑Amriyah in recognition of her active participation in the Innovation and Entrepreneurship Club activities during the 2023/2024 academic year, with best wishes for continued success.',
  'This certificate is awarded by the University of Technology and Applied Sciences — Salalah to Raya Ali Said Al Amri for winning the Best Project Award (BTech level) for the project "Darbna: An Oman Land-Based Public Transportation Hub" (Information Systems specialization) during Graduation Project Day 2024, held on 20 May 2024 in UTAS‑Salalah, Oman.',
  'This certificate is awarded by the University of Technology and Applied Sciences — Salalah to Raya Ali Said Al Amri for winning the Best BTech Poster Award for the project "Darbna: An Oman Land-Based Public Transportation Hub" during Graduation Project Day 2024, held on 20 May 2024 at UTAS‑Salalah, Oman.',
  'This certificate from Tuwaiq Academy and the Satr platform certifies that Raya Alamri completed the Power BI 102 (Intermediate) course — 2 hours — issued on 20 October 2025, with best wishes for continued success.',
  'This certificate from Tuwaiq Academy and the Satr platform certifies that RAYA ALAMRI completed the Power BI 103 (Intermediate) course — 2 hours — issued on 23 October 2025, with best wishes for continued success.',
  'This certificate from Tuwaiq Academy and the Satr platform certifies that RAYA ALAMRI completed the Power BI 101 (Beginner) course — 2 hours — issued on 19 October 2025, with best wishes for continued success.',
  'This certificate from Tuwaiq Academy and the Satr platform certifies that RAYA ALAMRI completed the Applied Project in UX/UI (Beginner) course — 1 hour — issued on 18 October 2025, with best wishes for continued success.',
  'This certificate from Tuwaiq Academy and the Satr platform certifies that RAYA ALAMRI completed the "Introduction to Databases" (Beginner) course — 2 hours — issued on 16 October 2025, with best wishes for continued success.',
  'This certificate is awarded by the University of Technology and Applied Sciences — Salalah to Raya Ali Said Al.Amni for achieving third place in the "Extracurricular Activities and Events" (Beyond Classroom 2) Arab Innovation competition organized by the Preparatory Studies Center, held 4–5 May Spring 2024 at UTAS‑Salalah, Oman.',
  'This certificate is presented by the University of Technology and Applied Sciences — Salalah to the student Raya bint Ali Al‑Amri in recognition of her active participation and for her team "Rawa" achieving third place in the Hackathon titled "Creating Generative Applications for the Arabic Language" held in celebration of World Arabic Language Day (18 December 2024), with best wishes for continued progress and success.',
  'This certificate is presented by the University of Technology and Applied Sciences — Salalah to Raya bint Ali Al‑Amri in recognition of her active participation and for her team Rawa achieving third place in the Hackathon "Creating Generative Applications for the Arabic Language," held in celebration of World Arabic Language Day (18 December 2024), with best wishes for continued progress and success.',
  'This certificate from the Information Technology Institute (ITI) platform certifies that RAYA AL‑AMRI has successfully completed the Learn HTML & CSS course — 7 Hour, 42 Minutes — on 22 November 2025, verification code WIR2rmHVRL, issued by Mahara‑Tech.',
  'This certificate from the Information Technology Institute (ITI) platform certifies that RAYA AL‑AMRI has successfully completed the JavaScript course — 7 Hours — on 23 November 2025, verification code DmjDIENviA, issued by Mahara‑Tech',
  'This certificate certifies that RAYA AL‑AMRI has successfully passed Git and GitHub; verification code 73435E55C0-734340E56F-1450E0863; issued by Ahmed Fathy, Founder & CEO, Almdrasa.',
  'This certificate from Satr e‑learning (Tuwaiq Academy) certifies that RAYA ALAMRI completed the course Introduction to CSS (Beginner) — 2 hours — issued on 16 November 2025, with best wishes for continued success; satr.tuwaiq.edu.sa.',
  'This certificate from Satr e‑learning (Tuwaiq Academy) certifies that RAYA ALAMRI completed the Bootstrap course (Intermediate) — 1 hour — issued on 16 November 2025, with best wishes for continued success; satr.tuwaiq.edu.sa.',
  'This certificate from Satr e‑learning (Tuwaiq Academy) certifies that RAYA ALAMRI completed the course Introduction to HTML (Beginner) — 2 hours — issued on 15 November 2025, with best wishes for continued success; satr.tuwaiq.edu.sa.',

  // أكمل باقي الوصف لكل شهادة
];

function updateCoverflow() {
  items.forEach((item, index) => {
    const offset = index - currentIndex;
    item.classList.toggle('active', index === currentIndex);
    item.style.transform = `
            translateX(${offset * 160}px)
            translateZ(${-Math.abs(offset) * 100}px)
            rotateY(${offset * 25}deg)
        `;
    item.style.zIndex = -Math.abs(offset);
  });

  document.getElementById('certificate-title').textContent =
    items[currentIndex].querySelector('img').alt;
  document.getElementById('certificate-desc').textContent =
    descriptions[currentIndex];
}

// Click on image to select
items.forEach((item, index) => {
  item.addEventListener('click', () => {
    currentIndex = index;
    updateCoverflow();
  });
});

// Navigation buttons
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCoverflow();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCoverflow();
});
// Tabs Filter
const categoryTabs = document.querySelectorAll('.category-tab');
const skillItems = document.querySelectorAll('.skill-item');

categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        categoryTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const category = tab.getAttribute('data-category');

        skillItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            if(category === 'all' || itemCategory === category) {
                item.style.display = 'block';
                item.style.opacity = 0;
                setTimeout(() => item.style.opacity = 1, 50);
            } else {
                item.style.opacity = 0;
                setTimeout(() => item.style.display = 'none', 300);
            }
        });
    });
});

// Skill Level Animation on Scroll
const skillLevels = document.querySelectorAll('.skill-level-fill');

const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.animation = 'fillLevel 2s forwards';
        }
    });
}, { threshold: 0.5 });

skillLevels.forEach(level => {
    skillObserver.observe(level);
});
