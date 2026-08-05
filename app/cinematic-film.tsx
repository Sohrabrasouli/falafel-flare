"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { assetPath } from "./site-data";

const heroClips = [
  {
    src: "/video/review-clip-01.mp4",
    poster: "/food/cinematic/mixed-platter.jpg",
    label: "Mixed platter",
  },
  {
    src: "/video/review-clip-02.mp4",
    poster: "/food/cinematic/burger.jpg",
    label: "Burger",
  },
  {
    src: "/video/review-clip-03.mp4",
    poster: "/food/cinematic/takeout.jpg",
    label: "Gyro wrap",
  },
] as const;

export function CinematicFilm({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeClip, setActiveClip] = useState(0);
  const clipRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const isPlayingRef = useRef(isPlaying);
  const resumeAfterVisibility = useRef(false);

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
    clipRefs.current.forEach((clip, index) => {
      if (!clip) return;

      if (index !== activeClip || !isPlaying) {
        clip.pause();
        return;
      }

      clip.currentTime = 0;
      void clip.play().catch(() => undefined);
    });
  }, [activeClip, isPlaying]);

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

  const advanceClip = (index: number) => {
    if (!isPlaying || index !== activeClip) return;
    setActiveClip((current) => (current + 1) % heroClips.length);
  };

  return (
    <div
      className={`hero-film hero-video-film ${isPlaying ? "is-playing" : "is-paused"}`}
      role="img"
      aria-label="A moving sequence of Falafel Flare dishes"
    >
      <div className="hero-video-scenes" aria-hidden="true">
        {heroClips.map((clip, index) => (
          <div
            className={`hero-video-scene${index === activeClip ? " is-active" : ""}`}
            key={clip.src}
            style={{ "--clip-poster": `url(${assetPath(clip.poster)})` } as CSSProperties}
          >
            <video
              ref={(element) => {
                clipRefs.current[index] = element;
              }}
              src={assetPath(clip.src)}
              poster={assetPath(clip.poster)}
              autoPlay={index === 0}
              muted
              playsInline
              preload="auto"
              onEnded={() => advanceClip(index)}
            />
          </div>
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
        {isPlaying ? "Pause video" : "Play video"}
      </button>

      <p className="hero-frame-label" aria-hidden="true">
        <span>{String(activeClip + 1).padStart(2, "0")}</span>
        {heroClips[activeClip].label}
      </p>

      <div className="frame-progress" aria-hidden="true">
        {heroClips.map((clip, index) => (
          <span className={index === activeClip ? "is-active" : ""} key={clip.src} />
        ))}
      </div>
    </div>
  );
}
