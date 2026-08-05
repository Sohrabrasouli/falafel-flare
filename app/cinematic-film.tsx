"use client";

import { useEffect, useState, type ReactNode } from "react";
import { assetPath } from "./site-data";

/* eslint-disable @next/next/no-img-element -- owner-approved restaurant photography is layered to create still-image motion */

const foodFrames = [
  {
    src: "/food/cinematic/mixed-platter.jpg",
    position: "center 53%",
    label: "Mixed platter",
  },
  {
    src: "/brand/orders-cover.png",
    position: "center 50%",
    label: "Falafel",
  },
  {
    src: "/food/cinematic/rice-platter.jpg",
    position: "center 52%",
    label: "Rice platter",
  },
] as const;

export function CinematicFilm({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeFrame, setActiveFrame] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!reducedMotion.matches) return;
    const frame = window.requestAnimationFrame(() => setIsPlaying(false));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = window.setInterval(() => {
      setActiveFrame((current) => (current + 1) % foodFrames.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [isPlaying]);

  useEffect(() => {
    const onVisibilityChange = () => {
      if (document.hidden) setIsPlaying(false);
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  return (
    <div className="hero-film" role="img" aria-label="Falafel Flare food and storefront">
      <div className="hero-place-frame" aria-hidden="true">
        <img
          src={assetPath("/food/cinematic/storefront.jpg")}
          alt=""
          width="1800"
          height="1118"
          fetchPriority="high"
        />
      </div>

      <div className="hero-food-window" aria-hidden="true">
        {foodFrames.map((frame, index) => (
          <img
            key={frame.src}
            className={`hero-food-frame${index === activeFrame ? " is-active" : ""}`}
            src={assetPath(frame.src)}
            alt=""
            style={{ objectPosition: frame.position }}
            width="1350"
            height="1800"
            fetchPriority={index === 0 ? "high" : "auto"}
          />
        ))}
        <p className="hero-frame-label">{foodFrames[activeFrame].label}</p>
      </div>

      <div className="hero-film-shade" aria-hidden="true" />
      <div className="hero-film-content">{children}</div>

      <button
        className="motion-control"
        type="button"
        onClick={() => setIsPlaying((current) => !current)}
        aria-pressed={!isPlaying}
      >
        {isPlaying ? "Pause motion" : "Resume motion"}
      </button>

      <div className="frame-progress" aria-hidden="true">
        {foodFrames.map((frame, index) => (
          <span className={index === activeFrame ? "is-active" : ""} key={frame.src} />
        ))}
      </div>
    </div>
  );
}
