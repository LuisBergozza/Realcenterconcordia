"use client";

import { useEffect } from "react";

export default function SiteScripts() {
  useEffect(() => {
    /* ---------- Reveal on scroll ---------- */
    const revealEls = document.querySelectorAll(".reveal");
    let revealObserver;
    if ("IntersectionObserver" in window && revealEls.length) {
      revealObserver = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
              entry.target.style.transitionDelay = (i % 4) * 80 + "ms";
              entry.target.classList.add("is-visible");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      revealEls.forEach((el) => revealObserver.observe(el));
    } else {
      revealEls.forEach((el) => el.classList.add("is-visible"));
    }

    /* ---------- Contador animado ---------- */
    const counters = document.querySelectorAll("[data-count]");
    const animateCount = (el) => {
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || "";
      const prefix = el.dataset.prefix || "";
      const duration = 1600;
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        el.textContent =
          prefix + Math.floor(eased * target).toLocaleString("pt-BR") + suffix;
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = prefix + target.toLocaleString("pt-BR") + suffix;
      };
      requestAnimationFrame(tick);
    };

    let countObserver;
    if ("IntersectionObserver" in window && counters.length) {
      countObserver = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCount(entry.target);
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.6 }
      );
      counters.forEach((el) => countObserver.observe(el));
    }

    return () => {
      revealObserver?.disconnect();
      countObserver?.disconnect();
    };
  }, []);

  return null;
}
