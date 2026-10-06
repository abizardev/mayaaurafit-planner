/**
 * Stagger Testimonials Component
 * Adaptasi vanilla JavaScript dari React component StaggerTestimonials
 * (Tailwind / shadcn / Lucide icons compatible untuk bevel2 static site)
 */
(function () {
  'use strict';

  // SQRT(5000) ~ 70.710678px untuk garis diagonal chamfer 50px x 50px
  var SQRT_5000 = Math.sqrt(5000);

  // Data testimonial (20 item dari spesifikasi prompt)
  var testimonialsData = [
    {
      id: 0,
      testimonial: "My favorite solution in the market. We work 5x faster with COMPANY.",
      by: "Alex, CEO at TechCorp",
      imgSrc: "https://cdn.21st.dev/assets/mirror/f0/f02fed36023656a5b5df6f247c83c96c53bfa9db5b98085cdee93ffc938a5f37.jpg"
    },
    {
      id: 1,
      testimonial: "I'm confident my data is safe with COMPANY. I can't say that about other providers.",
      by: "Dan, CTO at SecureNet",
      imgSrc: "https://cdn.21st.dev/assets/mirror/5b/5b5b2f3487692d40f629010ea6448d150907f780d8c262c4ca194b7386115c2d.jpg"
    },
    {
      id: 2,
      testimonial: "I know it's cliche, but we were lost before we found COMPANY. Can't thank you guys enough!",
      by: "Stephanie, COO at InnovateCo",
      imgSrc: "https://cdn.21st.dev/assets/mirror/10/10e2bfa5446e5c116e269b649b5f5e0106d96643f0a903048f3a056e40c35cd8.jpg"
    },
    {
      id: 3,
      testimonial: "COMPANY's products make planning for the future seamless. Can't recommend them enough!",
      by: "Marie, CFO at FuturePlanning",
      imgSrc: "https://cdn.21st.dev/assets/mirror/fa/fae47bb0faba45d1e0696b6557ca36c551a738c7d6e3950e82bb69dd2f963a72.jpg"
    },
    {
      id: 4,
      testimonial: "If I could give 11 stars, I'd give 12.",
      by: "Andre, Head of Design at CreativeSolutions",
      imgSrc: "https://cdn.21st.dev/assets/mirror/4f/4fb45af36b546e069b72527fdf4d904855a2b11b301fa738c8bc4d235595c4df.jpg"
    },
    {
      id: 5,
      testimonial: "SO SO SO HAPPY WE FOUND YOU GUYS!!!! I'd bet you've saved me 100 hours so far.",
      by: "Jeremy, Product Manager at TimeWise",
      imgSrc: "https://cdn.21st.dev/assets/mirror/a4/a4dd47498f54944edb9cd8095fb751847193faac01d922bae494e68d0cf90f4f.jpg"
    },
    {
      id: 6,
      testimonial: "Took some convincing, but now that we're on COMPANY, we're never going back.",
      by: "Pam, Marketing Director at BrandBuilders",
      imgSrc: "https://cdn.21st.dev/assets/mirror/b2/b2cd3e4ad761fd9954c265df5f86090c4f17c388c07f78332e75edfd7420f66a.jpg"
    },
    {
      id: 7,
      testimonial: "I would be lost without COMPANY's in-depth analytics. The ROI is EASILY 100X for us.",
      by: "Daniel, Data Scientist at AnalyticsPro",
      imgSrc: "https://cdn.21st.dev/assets/mirror/9a/9a3f3f88dac2ceb807e98d4cbe99acc9813da6d0ce2859b1cf026747727e1667.jpg"
    },
    {
      id: 8,
      testimonial: "It's just the best. Period.",
      by: "Fernando, UX Designer at UserFirst",
      imgSrc: "https://cdn.21st.dev/assets/mirror/b7/b78f8c42f62ae61f6ebe5c4e79f3af27f49dc05c4f366d2be599d1e14318be86.jpg"
    },
    {
      id: 9,
      testimonial: "I switched 5 years ago and never looked back.",
      by: "Andy, DevOps Engineer at CloudMasters",
      imgSrc: "https://cdn.21st.dev/assets/mirror/45/45482403ecbfd4f326c4388ca63773a1fbe79376213456ae0f422eea1a94d589.jpg"
    },
    {
      id: 10,
      testimonial: "I've been searching for a solution like COMPANY for YEARS. So glad I finally found one!",
      by: "Pete, Sales Director at RevenueRockets",
      imgSrc: "https://cdn.21st.dev/assets/mirror/42/420c64d5e90b2ff05fc182e3d8c3df40076440cb684d927efed247855775ea9b.jpg"
    },
    {
      id: 11,
      testimonial: "It's so simple and intuitive, we got the team up to speed in 10 minutes.",
      by: "Marina, HR Manager at TalentForge",
      imgSrc: "https://cdn.21st.dev/assets/mirror/be/be1b67757a13dfec4386e8627236a7194c6bcfb07502dbd82f727f6ccac46bcd.jpg"
    },
    {
      id: 12,
      testimonial: "COMPANY's customer support is unparalleled. They're always there when we need them.",
      by: "Olivia, Customer Success Manager at ClientCare",
      imgSrc: "https://cdn.21st.dev/assets/mirror/b4/b48ca5758f41e9f512fa264f7fde87a13a6149e94230111e949268b4780279cc.jpg"
    },
    {
      id: 13,
      testimonial: "The efficiency gains we've seen since implementing COMPANY are off the charts!",
      by: "Raj, Operations Manager at StreamlineSolutions",
      imgSrc: "https://cdn.21st.dev/assets/mirror/84/84811a44ccc64660055b77ed641ae6617edb60314efcdbc945cb91fc27aed815.jpg"
    },
    {
      id: 14,
      testimonial: "COMPANY has revolutionized how we handle our workflow. It's a game-changer!",
      by: "Lila, Workflow Specialist at ProcessPro",
      imgSrc: "https://cdn.21st.dev/assets/mirror/f9/f99a76bee7ebb41a84ba63d00499ed81588a17e0f1bba07aa22d2c4e4d187a82.jpg"
    },
    {
      id: 15,
      testimonial: "The scalability of COMPANY's solution is impressive. It grows with our business seamlessly.",
      by: "Trevor, Scaling Officer at GrowthGurus",
      imgSrc: "https://cdn.21st.dev/assets/mirror/67/6734807085015478f70dc12be3669b8127939ec42f17aa6d995fe317d19971cc.jpg"
    },
    {
      id: 16,
      testimonial: "I appreciate how COMPANY continually innovates. They're always one step ahead.",
      by: "Naomi, Innovation Lead at FutureTech",
      imgSrc: "https://cdn.21st.dev/assets/mirror/fc/fc2eed941aa10f3a40167ab44dd42877152ec653470854dda5ffb04c048e05e6.jpg"
    },
    {
      id: 17,
      testimonial: "The ROI we've seen with COMPANY is incredible. It's paid for itself many times over.",
      by: "Victor, Finance Analyst at ProfitPeak",
      imgSrc: "https://cdn.21st.dev/assets/mirror/5e/5ee78465c1b6b6f94dcbf8dccba352fd9f4a3238557b93875887c55c72901927.jpg"
    },
    {
      id: 18,
      testimonial: "COMPANY's platform is so robust, yet easy to use. It's the perfect balance.",
      by: "Yuki, Tech Lead at BalancedTech",
      imgSrc: "https://cdn.21st.dev/assets/mirror/7e/7ee949310d79d96acce5be2c19f2e5b5b6f75e1c26e45a4cc3c38da71f83899c.jpg"
    },
    {
      id: 19,
      testimonial: "We've tried many solutions, but COMPANY stands out in terms of reliability and performance.",
      by: "Zoe, Performance Manager at ReliableSystems",
      imgSrc: "https://cdn.21st.dev/assets/mirror/90/90489abb7c7d9823bf203548ba1ed0ea5060abedcac65390a393c171f241eac7.jpg"
    }
  ];

  function initStaggerTestimonials() {
    var root = document.getElementById('stagger-testimonials');
    if (!root) return;

    var list = testimonialsData.slice();
    var cardElements = [];
    var cardSize = window.matchMedia('(min-width: 640px)').matches ? 365 : 290;

    // Bersihkan isi container sebelumnya jika ada
    root.innerHTML = '';
    root.className = 'stagger-testimonials-container';

    // Track pembungkus kartu
    var track = document.createElement('div');
    track.className = 'stagger-cards-track';
    root.appendChild(track);

    // Buat elemen DOM untuk tiap testimonial
    list.forEach(function (item, index) {
      var card = document.createElement('div');
      card.className = 'stagger-card';
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', 'Testimonial by ' + item.by);

      // Garis diagonal chamfer sudut kanan atas (SQRT_5000 = ~70.71px)
      var diagonal = document.createElement('span');
      diagonal.className = 'stagger-card-diagonal';
      card.appendChild(diagonal);

      // Foto profil dengan fallback lokal aman offline
      var img = document.createElement('img');
      img.className = 'stagger-card-img';
      img.src = item.imgSrc;
      img.alt = item.by.split(',')[0];
      img.loading = 'lazy';
      img.onerror = function () {
        // Fallback ke foto member lokal yang sudah ada di proyek
        var localIndex = ((index % 4) + 1).toString().padStart(2, '0');
        this.onerror = null;
        this.src = 'assets/images/members/member-photos-' + localIndex + '.avif';
      };
      card.appendChild(img);

      // Teks kutipan testimoni
      var quote = document.createElement('h3');
      quote.className = 'stagger-card-quote';
      quote.textContent = '"' + item.testimonial + '"';
      card.appendChild(quote);

      // Penulis / Jabatan
      var author = document.createElement('p');
      author.className = 'stagger-card-author';
      author.textContent = '- ' + item.by;
      card.appendChild(author);

      // Klik kartu untuk menjadikannya ke posisi tengah
      card.addEventListener('click', function () {
        var pos = parseInt(card.dataset.position, 10);
        if (!isNaN(pos) && pos !== 0) {
          handleMove(pos);
        }
      });

      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          var pos = parseInt(card.dataset.position, 10);
          if (!isNaN(pos) && pos !== 0) {
            handleMove(pos);
          }
        }
      });

      track.appendChild(card);
      cardElements.push(card);
    });

    // Navigasi Chevron (Prev / Next) di bagian bawah tengah
    var nav = document.createElement('div');
    nav.className = 'stagger-nav';

    var prevBtn = document.createElement('button');
    prevBtn.className = 'stagger-nav-btn is-prev';
    prevBtn.setAttribute('aria-label', 'Previous testimonial');
    prevBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>';
    prevBtn.addEventListener('click', function () {
      handleMove(-1);
    });

    var nextBtn = document.createElement('button');
    nextBtn.className = 'stagger-nav-btn is-next';
    nextBtn.setAttribute('aria-label', 'Next testimonial');
    nextBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>';
    nextBtn.addEventListener('click', function () {
      handleMove(1);
    });

    nav.appendChild(prevBtn);
    nav.appendChild(nextBtn);
    root.appendChild(nav);

    // Fungsi update posisi kartu secara matematis persis seperti komponen React
    function updatePositions() {
      var len = cardElements.length;
      var isOdd = len % 2 !== 0;
      var centerOffset = isOdd ? (len + 1) / 2 : len / 2;

      cardElements.forEach(function (card, index) {
        var position = Math.round(index - centerOffset);
        var isCenter = position === 0;
        var isOddPos = position % 2 !== 0;

        // Cek lompatan wrap-around untuk mematikan animasi terbang melintasi layar
        var oldPos = card.dataset.position !== undefined ? parseInt(card.dataset.position, 10) : position;
        if (Math.abs(oldPos - position) > 4) {
          card.style.transition = 'none';
        } else {
          card.style.transition = '';
        }

        var tx = (cardSize / 1.5) * position;
        var ty = isCenter ? -65 : (isOddPos ? 15 : -15);
        var rot = isCenter ? 0 : (isOddPos ? 2.5 : -2.5);

        card.style.width = cardSize + 'px';
        card.style.height = cardSize + 'px';
        card.style.transform = 'translate(-50%, -50%) translateX(' + tx + 'px) translateY(' + ty + 'px) rotate(' + rot + 'deg)';
        card.style.zIndex = isCenter ? '10' : Math.max(1, 8 - Math.abs(position)).toString();
        card.dataset.position = position;

        if (isCenter) {
          card.classList.add('is-center');
          card.setAttribute('aria-current', 'true');
        } else {
          card.classList.remove('is-center');
          card.removeAttribute('aria-current');
        }

        // Fade out kartu yang berada jauh di luar layar agar tidak bocor horizontal
        var isFar = Math.abs(position) > 3;
        card.style.opacity = isFar ? '0' : '1';
        card.style.pointerEvents = isFar ? 'none' : 'auto';
      });
    }

    // Rotasi array item kartu saat bergeser
    function handleMove(steps) {
      if (steps === 0) return;
      if (steps > 0) {
        for (var i = 0; i < steps; i++) {
          var item = list.shift();
          var card = cardElements.shift();
          if (item && card) {
            list.push(item);
            cardElements.push(card);
          }
        }
      } else {
        for (var j = 0; j < -steps; j++) {
          var itemPop = list.pop();
          var cardPop = cardElements.pop();
          if (itemPop && cardPop) {
            list.unshift(itemPop);
            cardElements.unshift(cardPop);
          }
        }
      }
      updatePositions();
    }

    // Deteksi resize responsive
    function onResize() {
      var newSize = window.matchMedia('(min-width: 640px)').matches ? 365 : 290;
      if (newSize !== cardSize) {
        cardSize = newSize;
        updatePositions();
      }
    }
    window.addEventListener('resize', onResize);

    // Dukungan Touch Swipe (Mobile)
    var touchStartX = 0;
    var touchStartY = 0;
    root.addEventListener('touchstart', function (e) {
      if (e.touches && e.touches[0]) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    }, { passive: true });

    root.addEventListener('touchend', function (e) {
      if (e.changedTouches && e.changedTouches[0]) {
        var diffX = e.changedTouches[0].clientX - touchStartX;
        var diffY = e.changedTouches[0].clientY - touchStartY;
        // Hanya picu swipe bila gerakan dominan horizontal
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
          if (diffX < 0) {
            handleMove(1); // Swipe kiri -> testimonial berikutnya
          } else {
            handleMove(-1); // Swipe kanan -> testimonial sebelumnya
          }
        }
      }
    }, { passive: true });

    // Dukungan Tombol Panah Keyboard
    root.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') {
        handleMove(-1);
      } else if (e.key === 'ArrowRight') {
        handleMove(1);
      }
    });

    // Inisialisasi posisi awal
    updatePositions();
  }

  // Jalankan saat DOM siap
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStaggerTestimonials);
  } else {
    initStaggerTestimonials();
  }
})();
