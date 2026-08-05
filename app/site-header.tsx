"use client";

import { useState } from "react";
import { assetPath, LINKS, NAVIGATION } from "./site-data";

/* eslint-disable @next/next/no-img-element -- the supplied restaurant logo is displayed without alteration */

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner shell">
        <a className="wordmark" href={NAVIGATION[0].href} aria-label="Falafel Flare home">
          <span className="brand-symbol" aria-hidden="true">
            <img src={assetPath("/brand/logo.jpg")} alt="" width="1080" height="1080" />
          </span>
          <span className="brand-copy"><strong>Falafel Flare</strong><small>Savor the heat</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {NAVIGATION.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="button button-primary" href={LINKS.order} target="_blank" rel="noopener noreferrer">
            Order online
          </a>
        </div>
        <details
          className="mobile-menu"
          open={mobileMenuOpen}
          onToggle={(event) => setMobileMenuOpen(event.currentTarget.open)}
        >
          <summary aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}>
            {mobileMenuOpen ? "Close" : "Menu"}
          </summary>
          <nav aria-label="Mobile navigation" onClick={() => setMobileMenuOpen(false)}>
            {NAVIGATION.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
            <a className="button button-primary" href={LINKS.order} target="_blank" rel="noopener noreferrer">
              Order online
            </a>
            <a className="button button-secondary" href={LINKS.phone}>Call the restaurant</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
