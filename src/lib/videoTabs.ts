/**
 * VideoTabs Controller for "And that's not all" section
 */
export function initVideoTabs() {
  const wrapper = document.querySelector<HTMLElement>('[data-tabs-wrapper]');
  if (!wrapper) return () => {};

  const tabs = Array.from(wrapper.querySelectorAll<HTMLElement>('[data-tab]'));
  const phoneContainer = document.querySelector<HTMLElement>('.extra_features-phone');
  const mediaPanels = phoneContainer
    ? Array.from(phoneContainer.querySelectorAll<HTMLElement>('[data-tab-media]'))
    : Array.from(document.querySelectorAll<HTMLElement>('[data-tab-media]'));

  if (!tabs.length || !mediaPanels.length) return () => {};

  let currentIndex = -1;
  let isHovered = false;
  let animTimer: number | null = null;
  let progressStartTime = 0;
  let currentDuration = 6000; // default 6s fallback

  function getVideo(index: number): HTMLVideoElement | null {
    const panel = mediaPanels[index];
    return panel ? panel.querySelector<HTMLVideoElement>('video') : null;
  }

  function loadVideo(index: number): HTMLVideoElement | null {
    const video = getVideo(index);
    if (!video) return null;

    const dataSrc = video.getAttribute('data-src');
    if (dataSrc) {
      let sourceEl = video.querySelector<HTMLSourceElement>('source');
      if (sourceEl && !sourceEl.getAttribute('src')) {
        sourceEl.setAttribute('src', dataSrc);
        video.load();
      } else if (!sourceEl && !video.getAttribute('src')) {
        video.setAttribute('src', dataSrc);
        video.load();
      }
    }
    video.muted = true;
    video.playsInline = true;
    video.setAttribute('playsinline', 'true');
    video.setAttribute('webkit-playsinline', 'true');
    return video;
  }

  function updateRingProgress(tabEl: HTMLElement, progress: number) {
    const ringCircle = tabEl.querySelector<SVGCircleElement>('circle[data-tabs-ring]');
    if (ringCircle) {
      const radius = ringCircle.r.baseVal.value || 54;
      const circumference = 2 * Math.PI * radius;
      ringCircle.style.strokeDasharray = `${circumference}`;
      ringCircle.style.strokeDashoffset = `${circumference * (1 - progress)}`;
    }
  }

  function resetRings() {
    tabs.forEach((tab) => {
      const ringCircle = tab.querySelector<SVGCircleElement>('circle[data-tabs-ring]');
      if (ringCircle) {
        const radius = ringCircle.r.baseVal.value || 54;
        const circumference = 2 * Math.PI * radius;
        ringCircle.style.strokeDasharray = `${circumference}`;
        ringCircle.style.strokeDashoffset = `${circumference}`;
      }
      const pauseIcon = tab.querySelector<HTMLElement>('.tabs_pause-icon');
      if (pauseIcon) pauseIcon.style.opacity = '0';
    });
  }

  function startProgress(durationMs: number) {
    if (animTimer) cancelAnimationFrame(animTimer);
    progressStartTime = performance.now();
    currentDuration = durationMs > 0 ? durationMs : 6000;

    function step(now: number) {
      if (isHovered) {
        animTimer = requestAnimationFrame(step);
        return;
      }
      const elapsed = now - progressStartTime;
      const progress = Math.min(elapsed / currentDuration, 1);
      
      const currentTab = tabs[currentIndex];
      if (currentTab) {
        updateRingProgress(currentTab, progress);
      }

      if (progress < 1) {
        animTimer = requestAnimationFrame(step);
      }
    }
    animTimer = requestAnimationFrame(step);
  }

  function activateTab(index: number, manual = false) {
    if (index < 0 || index >= tabs.length) return;
    if (index === currentIndex && !manual) return;

    const prevIndex = currentIndex;
    currentIndex = index;

    // 1. Toggle active classes on tab items
    tabs.forEach((tab, i) => {
      if (i === index) {
        tab.classList.add('is-active');
        tab.setAttribute('aria-selected', 'true');
      } else {
        tab.classList.remove('is-active');
        tab.setAttribute('aria-selected', 'false');
      }
    });

    // 2. Show active media panel, hide others
    mediaPanels.forEach((panel, i) => {
      if (i === index) {
        panel.style.display = 'block';
        panel.style.opacity = '1';
        panel.classList.add('is-active');
      } else {
        panel.style.display = 'none';
        panel.style.opacity = '0';
        panel.classList.remove('is-active');
      }
    });

    // 3. Pause previous video
    if (prevIndex >= 0 && prevIndex !== index) {
      const prevVideo = getVideo(prevIndex);
      if (prevVideo) {
        prevVideo.pause();
      }
    }

    // 4. Reset rings
    resetRings();

    // 5. Load and play active video
    const activeVideo = loadVideo(index);
    if (activeVideo) {
      activeVideo.currentTime = 0;
      const playPromise = activeVideo.play();
      if (playPromise) {
        playPromise
          .then(() => {
            const dur = activeVideo.duration && !isNaN(activeVideo.duration) && activeVideo.duration > 0
              ? activeVideo.duration * 1000
              : 6000;
            startProgress(dur);
          })
          .catch(() => {
            startProgress(6000);
          });
      } else {
        startProgress(6000);
      }
    } else {
      startProgress(6000);
    }
  }

  // Bind click handlers to each tab
  tabs.forEach((tab, idx) => {
    tab.style.cursor = 'pointer';
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      activateTab(idx, true);
    });
  });

  // Advance to next tab when video ends
  mediaPanels.forEach((panel, idx) => {
    const video = panel.querySelector<HTMLVideoElement>('video');
    if (video) {
      video.addEventListener('ended', () => {
        if (idx === currentIndex) {
          const nextIdx = (currentIndex + 1) % tabs.length;
          activateTab(nextIdx);
        }
      });
    }
  });

  // Hover pause / play handlers
  wrapper.addEventListener('mouseenter', () => {
    isHovered = true;
    const v = getVideo(currentIndex);
    if (v) v.pause();
    const currentTab = tabs[currentIndex];
    if (currentTab) {
      const p = currentTab.querySelector<HTMLElement>('.tabs_pause-icon');
      if (p) p.style.opacity = '1';
    }
  });

  wrapper.addEventListener('mouseleave', () => {
    isHovered = false;
    const v = getVideo(currentIndex);
    if (v) v.play().catch(() => {});
    const currentTab = tabs[currentIndex];
    if (currentTab) {
      const p = currentTab.querySelector<HTMLElement>('.tabs_pause-icon');
      if (p) p.style.opacity = '0';
    }
  });

  // Intersection observer to start when in view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (currentIndex === -1) {
            activateTab(0);
          } else {
            const v = getVideo(currentIndex);
            if (v && v.paused) v.play().catch(() => {});
          }
        } else {
          const v = getVideo(currentIndex);
          if (v && !v.paused) v.pause();
        }
      });
    },
    { threshold: 0.15 }
  );

  observer.observe(wrapper);

  // Return cleanup function
  return () => {
    if (animTimer) cancelAnimationFrame(animTimer);
    observer.disconnect();
  };
}
