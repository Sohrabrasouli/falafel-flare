export const LINKS = {
  order: "https://food.orders.co/72lrn1wd/menu",
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=22648+Mission+Blvd+Hayward+CA+94541",
  google: "https://maps.app.goo.gl/FPmZWSk4U9bE39DT8",
  catering: "https://www.ezcater.com/catering/falafel-flare-hayward-3",
  instagram: "https://www.instagram.com/falafelflarehayward/",
  phone: "tel:+15103305000",
} as const;

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(path: string) {
  return `${BASE_PATH}${path}`;
}

export const NAVIGATION = [
  { href: `${BASE_PATH}/#home`, label: "Home" },
  { href: `${BASE_PATH}/#menu`, label: "Menu" },
  { href: `${BASE_PATH}/#ways`, label: "Order & catering" },
  { href: `${BASE_PATH}/#place`, label: "Our place" },
  { href: `${BASE_PATH}/#visit`, label: "Visit" },
] as const;
