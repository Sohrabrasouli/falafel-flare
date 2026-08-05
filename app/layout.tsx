import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "./components";
import { SiteHeader } from "./site-header";

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Falafel Flare",
  url: "https://falafelflare.com",
  telephone: "+1-510-330-5000",
  servesCuisine: "Middle Eastern",
  hasMenu: "https://food.orders.co/72lrn1wd/menu",
  address: {
    "@type": "PostalAddress",
    streetAddress: "22648 Mission Blvd",
    addressLocality: "Hayward",
    addressRegion: "CA",
    postalCode: "94541",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "11:00",
      closes: "21:00",
    },
  ],
  sameAs: ["https://www.instagram.com/falafelflarehayward/"],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://falafelflare.com"),
  title: {
    default: "Falafel Flare | Hayward",
    template: "%s | Falafel Flare",
  },
  description:
    "View the menu, order online, plan a visit, or explore group and catering options for Falafel Flare in Hayward.",
  openGraph: {
    type: "website",
    title: "Falafel Flare | Hayward",
    description: "One table. Different appetites.",
    images: [
      {
        url: "/food/cinematic/storefront.jpg",
        width: 1800,
        height: 1118,
        alt: "The Falafel Flare storefront in Hayward, California.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Falafel Flare | Hayward",
    description: "One table. Different appetites.",
    images: ["/food/cinematic/storefront.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
