import type { ReactNode } from "react";
import { assetPath, BASE_PATH, LINKS } from "./site-data";

/* eslint-disable @next/next/no-img-element -- the supplied restaurant logo is displayed without alteration */

type ButtonVariant =
  | "primary"
  | "secondary"
  | "light"
  | "ghost-light"
  | "text"
  | "text-light";

export function ExternalButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
}) {
  const isTelephone = href.startsWith("tel:");
  return (
    <a
      className={`button button-${variant}`}
      href={href}
      {...(!isTelephone && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <a className="wordmark wordmark-light" href={`${BASE_PATH}/#home`}>
            <img src={assetPath("/brand/logo.jpg")} alt="Falafel Flare" width="1080" height="1080" />
          </a>
          <p className="footer-intro">
            One table. Different appetites. Dine in, pick up, or order delivery in Hayward.
          </p>
        </div>
        <div>
          <h2>Visit</h2>
          <address>
            22648 Mission Blvd<br />
            Hayward, CA 94541
          </address>
          <p>Open daily, 11 AM-9 PM</p>
        </div>
        <div>
          <h2>Connect</h2>
          <a href={LINKS.phone}>(510) 330-5000</a>
          <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={LINKS.google} target="_blank" rel="noopener noreferrer">Google listing</a>
        </div>
        <div>
          <h2>Choose</h2>
          <a href={LINKS.order} target="_blank" rel="noopener noreferrer">Menu &amp; order</a>
          <a href={LINKS.catering} target="_blank" rel="noopener noreferrer">Catering</a>
          <a href={`${BASE_PATH}/#visit`}>Plan a visit</a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>Falafel Flare · 22648 Mission Blvd, Hayward, CA 94541</p>
        <p>Open daily · 11 AM–9 PM</p>
      </div>
    </footer>
  );
}
