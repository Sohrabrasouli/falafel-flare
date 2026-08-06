import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const ROUTES = ["/"];
const ORDER_URL = "https://food.orders.co/72lrn1wd/menu";
const CATERING_URL = "https://www.ezcater.com/catering/falafel-flare-hayward-3";
const PHONE_URL = "tel:+15103305000";
const DIRECTIONS_URL = "https://www.google.com/maps/dir/?api=1&destination=22648+Mission+Blvd+Hayward+CA+94541";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${Math.random()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

async function htmlFor(pathname) {
  const response = await render(pathname);
  assert.equal(response.status, 200, `${pathname} should render successfully`);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  return response.text();
}

test("all public routes render with one clear page heading and release-ready content", async () => {
  for (const route of ROUTES) {
    const html = await htmlFor(route);
    assert.match(html, /<html[^>]*lang="en"/i, `${route} needs English document language`);
    assert.equal((html.match(/<h1[\s>]/gi) ?? []).length, 1, `${route} needs one h1`);
    assert.match(html, /<main[^>]*id="main-content"/i, `${route} needs a main landmark`);
    assert.doesNotMatch(html, /Private review concept/i);
    assert.doesNotMatch(html, /Review imagery is temporary/i);
  }
});

test("the one-page experience keeps verified ordering, catering and phone destinations", async () => {
  const home = await htmlFor("/");
  const normalizedHome = home.replaceAll("&amp;", "&");

  assert.match(home, new RegExp(ORDER_URL.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  assert.match(home, new RegExp(CATERING_URL.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  assert.match(home, new RegExp(PHONE_URL.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  assert.match(home, /22648 Mission Blvd/i);
  assert.match(home, /Hayward, CA 94541/i);
  assert.match(normalizedHome, new RegExp(DIRECTIONS_URL.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
});

test("home restores the approved full-bleed restaurant sequence and immediate order path", async () => {
  const home = await htmlFor("/");
  const filmSource = await readFile(new URL("../app/cinematic-film.tsx", import.meta.url), "utf8");

  assert.match(home, /class="hero-scene-frames"/i);
  assert.equal((home.match(/class="hero-scene-frame(?:\s|\")/g) ?? []).length, 8);
  assert.match(home, /\/food\/cinematic\/storefront\.jpg/i);
  assert.match(home, /\/food\/cinematic\/storefront-night\.jpg/i);
  assert.match(home, /\/food\/cinematic\/dining-room\.jpg/i);
  assert.match(home, /\/food\/cinematic\/counter\.jpg/i);
  assert.match(home, /\/food\/cinematic\/mixed-platter\.jpg/i);
  assert.match(home, /\/food\/cinematic\/pizza\.jpg/i);
  assert.match(home, /\/food\/cinematic\/dessert-case\.jpg/i);
  assert.doesNotMatch(home, /\/video\/review-clip-/i);
  assert.match(home, />Pause motion</i);
  assert.match(home, /One table\. Different appetites\./i);
  assert.match(home, /Falafel, gyros, kebabs, burgers, pizza and more/i);
  assert.doesNotMatch(home, /Come hungry\./i);
  assert.doesNotMatch(home, /Bring the whole table\./i);
  assert.match(home, new RegExp(ORDER_URL.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  assert.match(filmSource, /const FRAME_DURATION = 3800;/);
  for (const sceneMessage of [
    "Come as you are",
    "There's room for you",
    "Settle in together",
    "Everyone gets a choice",
    "Start with falafel",
    "Pass the platter",
    "Pizza belongs here too",
    "Save room for something sweet",
  ]) {
    assert.match(filmSource, new RegExp(sceneMessage, "i"));
  }
});

test("hero copy sits directly on the film without a shadow plate", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const messageRule = css.match(/\.home-experience \.arrival-message \{([\s\S]*?)\n\}/)?.[1] ?? "";
  const shadeRule = css.match(/\.home-experience \.hero-film-shade \{([\s\S]*?)\n\}/)?.[1] ?? "";
  const frameRules = [...css.matchAll(/\.hero-scene-frame \{([\s\S]*?)\n\}/g)].map((match) => match[1]);
  const frameRule = frameRules.find((rule) => /object-fit:/i.test(rule)) ?? "";

  assert.match(messageRule, /background:\s*transparent/i);
  assert.match(messageRule, /box-shadow:\s*none/i);
  assert.match(messageRule, /backdrop-filter:\s*none/i);
  assert.match(messageRule, /border:\s*0/i);
  assert.match(shadeRule, /background:\s*transparent/i);
  assert.match(frameRule, /object-fit:\s*cover/i);
  assert.doesNotMatch(frameRule, /blur\(/i);
});

test("the primary experience is one page with clear anchored navigation", async () => {
  const home = await htmlFor("/");

  for (const anchor of ["home", "menu", "ways", "place", "visit"]) {
    assert.match(home, new RegExp(`id="${anchor}"`, "i"));
  }

  assert.match(home, /href="\/#menu"/i);
  assert.match(home, /href="\/#ways"/i);
  assert.match(home, /href="\/#visit"/i);
  assert.match(home, /Menu categories: Falafel, Wraps, Platters/i);
});

test("the concept does not publish unsupported restaurant claims", async () => {
  const allHtml = (await Promise.all(ROUTES.map(htmlFor))).join("\n");
  assert.doesNotMatch(allHtml, /\bhalal\b/i);
  assert.doesNotMatch(allHtml, /\bauthentic\b/i);
  assert.doesNotMatch(allHtml, /\bfresh(?:ly)?\b/i);
  assert.doesNotMatch(allHtml, /family[- ]owned/i);
  assert.doesNotMatch(allHtml, /made from scratch/i);
  assert.doesNotMatch(allHtml, /best in hayward/i);
});

test("guest pages do not speak like an internal audit report", async () => {
  const allHtml = (await Promise.all(ROUTES.map(htmlFor))).join("\n");
  assert.doesNotMatch(allHtml, /what this page can say/i);
  assert.doesNotMatch(allHtml, /owner must confirm/i);
  assert.doesNotMatch(allHtml, /this private concept gives/i);
  assert.doesNotMatch(allHtml, /the restaurant, not this concept/i);
  assert.doesNotMatch(allHtml, /polished invention/i);
  assert.doesNotMatch(allHtml, /one stop should make the next step obvious/i);
  assert.doesNotMatch(allHtml, /no second menu to reconcile/i);
  assert.doesNotMatch(allHtml, /this page helps guests understand/i);
  assert.doesNotMatch(allHtml, /see the public option/i);
});

test("social and search metadata identify the public restaurant site", async () => {
  const home = await htmlFor("/");
  assert.match(home, /<title>Middle Eastern Restaurant in Hayward \| Falafel Flare<\/title>/i);
  assert.match(home, /property="og:image" content="https:\/\/falafelflare\.com\/food\/cinematic\/storefront\.jpg"/i);
  assert.match(home, /name="twitter:card" content="summary_large_image"/i);
  assert.match(home, /type="application\/ld\+json"/i);
  assert.match(home, /"@type":"Restaurant"/i);
  assert.match(home, /"telephone":"\+1-510-330-5000"/i);
  assert.match(home, /name="robots" content="index, follow"/i);
});
