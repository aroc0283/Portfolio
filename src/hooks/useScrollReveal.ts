"use client";

import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    document.documentElement.classList.add("reveal-ready");

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("revealed"));
      return () => document.documentElement.classList.remove("reveal-ready");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => observer.observe(el));

    const fallback = window.setTimeout(() => {
      els.forEach((el) => {
        if (!el.classList.contains("revealed")) {
          el.classList.add("revealed");
        }
      });
    }, 800);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);
}
