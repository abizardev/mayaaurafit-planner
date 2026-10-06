import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { bevelPageHtml } from "./data/bevelPageHtml";
import { initVideoTabs } from "./lib/videoTabs";
import { StaggerTestimonials } from "./components/ui/stagger-testimonials";

export function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [testimonialsMount, setTestimonialsMount] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // 1. Force show any elements hidden by Webflow gate
    document.documentElement.classList.add("bevel-force-show");

    // 2. Hydrate lazy videos with data-src (except tab media which is managed by videoTabs)
    const videos = document.querySelectorAll<HTMLVideoElement>("video");
    videos.forEach((v) => {
      if (v.closest("[data-tab-media]")) return; // skip tab media

      const dataSrc = v.getAttribute("data-src");
      if (dataSrc) {
        let srcEl = v.querySelector<HTMLSourceElement>("source");
        if (srcEl && !srcEl.getAttribute("src")) {
          srcEl.setAttribute("src", dataSrc);
        } else if (!srcEl && !v.getAttribute("src")) {
          v.setAttribute("src", dataSrc);
        }
      }
      // Ensure autoplay videos play properly
      v.muted = true;
      v.setAttribute("playsinline", "true");
      v.play().catch(() => {});
    });

    // 3. Initialize "And that's not all" Interactive Video Tabs
    const cleanupVideoTabs = initVideoTabs();

    // 4. Mount Stagger Testimonials React portal
    const target = document.getElementById("stagger-testimonials");
    if (target) {
      setTestimonialsMount(target);
    }

    // 5. Mobile menu drawer handler
    const toggle = document.querySelector<HTMLElement>(".nav_menu-2");
    const nav = document.querySelector<HTMLElement>(".navigation");
    if (toggle && nav && toggle.dataset.bevelNav !== "ready") {
      toggle.dataset.bevelNav = "ready";
      toggle.setAttribute("role", "button");
      toggle.setAttribute("tabindex", "0");
      toggle.setAttribute("aria-label", "Buka menu navigasi");
      toggle.setAttribute("aria-expanded", "false");

      const isMobile = () => window.matchMedia("(max-width: 767px)").matches;
      const setOpen = (open: boolean) => {
        nav.classList.toggle("bevel-nav-open", open);
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      };

      const toggleNav = () => {
        if (!isMobile()) return;
        setOpen(!nav.classList.contains("bevel-nav-open"));
      };

      toggle.addEventListener("click", toggleNav);
      nav.addEventListener("click", (e) => {
        if ((e.target as HTMLElement).closest(".navigation_link, .nav_main .btn")) {
          setOpen(false);
        }
      });
    }

    // 6. Update copyright year
    document.querySelectorAll("[data-year], .copyright-year").forEach((el) => {
      el.textContent = String(new Date().getFullYear());
    });

    // 7. Refresh GSAP ScrollTrigger if loaded
    const timer = setTimeout(() => {
      // @ts-expect-error ScrollTrigger global
      if (window.ScrollTrigger) {
        // @ts-expect-error ScrollTrigger global
        window.ScrollTrigger.refresh();
      }
    }, 500);

    return () => {
      clearTimeout(timer);
      cleanupVideoTabs();
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        id="bevel-app"
        className="w-full"
        dangerouslySetInnerHTML={{ __html: bevelPageHtml }}
      />
      {testimonialsMount && createPortal(<StaggerTestimonials />, testimonialsMount)}
    </>
  );
}

export default App;
