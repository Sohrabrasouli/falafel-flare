import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../dist/client/", import.meta.url);

test("the GitHub Pages export is hydrated and scoped to the repository path", async () => {
  const html = await readFile(new URL("index.html", root), "utf8");

  assert.match(html, /<script type="module" src="\/falafel-flare\/assets\/index-[^"]+\.js"><\/script>/i);
  assert.match(html, /href="\/falafel-flare\/#menu"/i);
  assert.match(html, /src="\/falafel-flare\/food\/cinematic\/mixed-platter\.jpg"/i);
  assert.doesNotMatch(html, /(?:href|src)="\/assets\//i);

  await access(new URL(".nojekyll", root));
  await access(new URL("404.html", root));
  await access(new URL("food/cinematic/mixed-platter.jpg", root));
  await access(new URL("food/cinematic/counter.jpg", root));
  await access(new URL("food/cinematic/dessert-case.jpg", root));
  await assert.rejects(access(new URL("video/falafel-flare-arrival.mp4", root)));
});
