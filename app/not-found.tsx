import Link from "next/link";
import { ExternalButton } from "./components";
import { LINKS } from "./site-data";

export default function NotFound() {
  return (
    <section className="not-found shell">
      <p className="eyebrow">404</p>
      <h1>This table is not set yet.</h1>
      <p>That page is not on the menu. Choose a new direction below.</p>
      <div className="button-row">
        <Link className="button button-primary" href="/">Return Home</Link>
        <ExternalButton href={LINKS.order} variant="secondary">View Menu &amp; Order</ExternalButton>
      </div>
    </section>
  );
}
