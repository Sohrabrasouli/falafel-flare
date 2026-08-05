"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { assetPath } from "./site-data";

/* eslint-disable @next/next/no-img-element -- owner-approved restaurant photography is sequenced as a still-image film */

const heroFrames = [
  {
    src: "/food/cinematic/storefront.jpg",
    position: "center 48%",
    mobilePosition: "center 44%",
    label: "The storefront",
  },
  {
    src: "/food/cinematic/storefront-night.jpg",
    position: "center 50%",
    mobilePosition: "56% center",
    label: "Open after dark",
  },
  {
    src: "/food/cinematic/dining-room.jpg",
    position: "center 54%",
    mobilePosition: "52% center",
    label: "Inside Falafel Flare",
  },
  {
    src: "/food/cinematic/counter.jpg",
    position: "center 35%",
    mobilePosition: "54% 28%",
    label: "The menu",
  },
  {
    src: "/brand/orders-cover.png",
    position: "center 50%",
    mobilePosition: "58% center",
    label: "Falafel",
  },
  {
    src: "/food/cinematic/mixed-platter.jpg",
    position: "center 56%",
    mobilePosition: "center 54%",
    label: "Mixed platters",
  },
  {
    src: "/food/cinematic/pizza.jpg",
    position: "center 50%",
    mobilePosition: "center center",
    label: "Pizza",
  },
  {
    src: "/food/cinematic/dessert-case.jpg",
    position: "center 53%",
    mobilePosition: "center 50%",
    label: "Something sweet",
  },
] as const;

const FRAME_DURATION = 7200;

export function CinematicFilm({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [frameState, setFrameState] = useState<{ active: number; previous: number | null }>({
    active: 0,
    previous: null,
  });
  const isPlayingRef = useRef(isPlaying);
  const resumeAfterVisibility = useRef(false);
  const activeFrame = frameState.active;

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!reducedMotion.matches) return;
    const frame = window.requestAnimationFrame(() => setIsPlaying(false));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = window.setInterval(() => {
      setFrameState((current) => ({
        active: (current.active + 1) % heroFrames.length,
        previous: current.active,
      }));
    }, FRAME_DURATION);
    return () => window.clearInterval(timer);
  }, [isPlaying]);

  useEffect(() => {
    const onVisibilityChange = () => {
      if (document.hidden) {
        resumeAfterVisibility.current = isPlayingRef.current;
        setIsPlaying(false);
        return;
      }

      if (
        resumeAfterVisibility.current &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        setIsPlaying(true);
      }
      resumeAfterVisibility.current = false;
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  return (
    <div
      className={`hero-film ${isPlaying ? "is-playing" : "is-paused"}`}
      role="img"
      aria-label="A moving sequence of Falafel Flare's storefront, dining room, menu and dishes"
    >
      <div className="hero-scene-frames" aria-hidden="true">
        {heroFrames.map((frame, index) => (
          <img
            key={frame.src}
            className={`hero-scene-frame${index === activeFrame ? " is-active" : ""}${
              index === frameState.previous ? " is-exiting" : ""
            }`}
            src={assetPath(frame.src)}
            alt=""
            style={
              {
                "--frame-position": frame.position,
                "--frame-position-mobile": frame.mobilePosition,
              } as CSSProperties
            }
            width={index === 0 ? "1800" : "1600"}
            height={index === 0 ? "1118" : "1200"}
            loading={index < 3 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
          />
        ))}
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

      <p className="hero-frame-label" aria-hidden="true">
        <span>{String(activeFrame + 1).padStart(2, "0")}</span>
        {heroFrames[activeFrame].label}
      </p>

      <div className="frame-progress" aria-hidden="true">
        {heroFrames.map((frame, index) => (
          <span className={index === activeFrame ? "is-active" : ""} key={frame.src} />
        ))}
      </div>
    </div>
  );
}
