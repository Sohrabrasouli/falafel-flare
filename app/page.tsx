import type { Metadata } from "next";
import { CinematicFilm } from "./cinematic-film";
import { ExternalButton } from "./components";
import { assetPath, LINKS } from "./site-data";

/* eslint-disable @next/next/no-img-element -- these are owner-approved restaurant photographs served locally */

export const metadata: Metadata = {
  title: "Middle Eastern Restaurant in Hayward",
  description:
    "See the menu, order pickup or delivery, plan catering, or visit Falafel Flare on Mission Boulevard in Hayward.",
};

const categories = [
  "Falafel",
  "Wraps",
  "Platters",
  "Kebabs",
  "Burgers",
  "Pizza",
  "Salads",
  "Sides",
  "Desserts",
];

function CategoryRail() {
  return (
    <div className="category-ribbon" aria-label={`Menu categories: ${categories.join(", ")}`}>
      <div className="ribbon-track">
        {[0, 1].map((group) => (
          <div className="ribbon-group" aria-hidden={group === 1} key={group}>
            {categories.map((category) => (
              <span key={`${group}-${category}`}>
                {category}<i aria-hidden="true">·</i>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="home-experience">
      <section id="home" className="arrival-hero" aria-labelledby="home-title">
        <CinematicFilm>
          <div className="arrival-message">
            <p className="eyebrow light">Falafel Flare · Hayward</p>
            <h1 id="home-title">One table. Different appetites.</h1>
            <p className="arrival-lede">
              Falafel, gyros, kebabs, burgers, pizza and more—together on one menu.
            </p>
            <div className="button-row">
              <ExternalButton href={LINKS.order} variant="primary">
                Order pickup or delivery
              </ExternalButton>
              <ExternalButton href={LINKS.directions} variant="ghost-light">
                Get directions
              </ExternalButton>
            </div>
            <div className="trust-line" aria-label="Restaurant hours and address">
              <span>Open daily</span>
              <strong>11 AM–9 PM</strong>
              <span>22648 Mission Blvd</span>
            </div>
          </div>
        </CinematicFilm>
      </section>

      <CategoryRail />

      <section id="menu" className="menu-story section-scene" aria-labelledby="menu-story-title">
        <div className="menu-story-image reveal-frame">
          <img
            src={assetPath("/food/cinematic/dining-room.jpg")}
            alt="The dining room at Falafel Flare in Hayward"
            width="1600"
            height="1200"
          />
          <p>Mission Boulevard · Hayward</p>
        </div>
        <div className="menu-story-copy reveal-copy">
          <p className="eyebrow">The menu</p>
          <h2 id="menu-story-title">Big flavors. More than one direction.</h2>
          <p>
            Start with falafel or a platter. Add a wrap, kebab, burger or pizza
            when the table wants something different.
          </p>
          <ExternalButton href={LINKS.order} variant="text">
            See the live menu and current prices
          </ExternalButton>
        </div>
      </section>

      <section className="food-panorama section-scene" aria-labelledby="food-panorama-title">
        <div className="food-panorama-heading">
          <p className="eyebrow light">One menu, plenty to choose from</p>
          <h2 id="food-panorama-title">Find what sounds good today.</h2>
        </div>
        <div className="food-panorama-grid" aria-label="A selection of Falafel Flare dishes">
          <figure className="dish-frame dish-frame-main">
            <img
              src={assetPath("/food/cinematic/mixed-platter.jpg")}
              alt="Mixed platter with rice, hummus, pita, falafel and grilled meats"
              width="1350"
              height="1800"
            />
            <figcaption>Platters</figcaption>
          </figure>
          <figure className="dish-frame dish-frame-rice">
            <img
              src={assetPath("/food/cinematic/rice-platter.jpg")}
              alt="Rice platter with hummus, pita and grilled meat"
              width="1350"
              height="1800"
              loading="lazy"
            />
            <figcaption>Rice plates</figcaption>
          </figure>
          <figure className="dish-frame dish-frame-pizza">
            <img
              src={assetPath("/food/cinematic/pizza.jpg")}
              alt="Pizza topped with vegetables"
              width="1414"
              height="1400"
              loading="lazy"
            />
            <figcaption>Pizza</figcaption>
          </figure>
        </div>
      </section>

      <section id="ways" className="ways-section section-scene" aria-labelledby="ways-title">
        <div className="ways-intro reveal-copy">
          <p className="eyebrow">Choose your way</p>
          <h2 id="ways-title">Eating here should be the easy part.</h2>
          <p>One clear next step, whether the food is for now, later, or more people.</p>
        </div>
        <div className="ways-list">
          <a href={LINKS.order} target="_blank" rel="noopener noreferrer">
            <span>01</span>
            <strong>Pickup or delivery</strong>
            <em>Open the current menu and checkout</em>
          </a>
          <a href={LINKS.catering} target="_blank" rel="noopener noreferrer">
            <span>02</span>
            <strong>Food for a group</strong>
            <em>See catering options on ezCater</em>
          </a>
          <a href={LINKS.directions} target="_blank" rel="noopener noreferrer">
            <span>03</span>
            <strong>Come by</strong>
            <em>Get directions to Mission Boulevard</em>
          </a>
        </div>
      </section>

      <section id="place" className="place-scene section-scene" aria-labelledby="place-title">
        <img
          className="place-scene-image"
          src={assetPath("/food/cinematic/dining-room.jpg")}
          alt="Tables and seating inside Falafel Flare"
          width="1600"
          height="1200"
          loading="lazy"
        />
        <div className="place-scene-glass reveal-copy">
          <p className="eyebrow light">Our place</p>
          <h2 id="place-title">A seat on Mission Boulevard.</h2>
          <p>
            Come in, find a table and choose across the menu. We are open every
            day from 11 AM to 9 PM.
          </p>
          <ExternalButton href={LINKS.directions} variant="light">
            Plan your visit
          </ExternalButton>
        </div>
      </section>

      <section id="visit" className="visit-cinema section-scene" aria-labelledby="visit-title">
        <div className="visit-cinema-images" aria-hidden="true">
          <img
            src={assetPath("/food/cinematic/storefront-night.jpg")}
            alt=""
            width="1600"
            height="1200"
            loading="lazy"
          />
          <img
            src={assetPath("/food/cinematic/storefront.jpg")}
            alt=""
            width="1800"
            height="1118"
            loading="lazy"
          />
        </div>
        <div className="visit-cinema-shade" aria-hidden="true" />
        <div className="visit-cinema-inner shell">
          <div>
            <p className="eyebrow light">Falafel Flare · Hayward</p>
            <h2 id="visit-title">See you on Mission Boulevard.</h2>
            <p>22648 Mission Blvd, Hayward, CA 94541 · Open daily, 11 AM–9 PM</p>
          </div>
          <div className="button-row">
            <ExternalButton href={LINKS.directions} variant="light">
              Get directions
            </ExternalButton>
            <ExternalButton href={LINKS.phone} variant="ghost-light">
              Call (510) 330-5000
            </ExternalButton>
          </div>
        </div>
      </section>

      <nav className="mobile-action-dock" aria-label="Quick actions">
        <a href={LINKS.order} target="_blank" rel="noopener noreferrer">Order</a>
        <a href={LINKS.directions} target="_blank" rel="noopener noreferrer">Directions</a>
      </nav>
    </div>
  );
}
