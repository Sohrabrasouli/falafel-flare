import { readdir, readFile, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const outputRoot = fileURLToPath(new URL("../dist/client/", import.meta.url));

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const path = join(directory, entry.name);
      return entry.isDirectory() ? htmlFiles(path) : path.endsWith(".html") ? [path] : [];
    }),
  );
  return files.flat();
}

for (const path of await htmlFiles(outputRoot)) {
  const html = await readFile(path, "utf8");
  if (/<script[^>]+type="module"/i.test(html)) continue;

  const entry = html.match(
    /<link rel="modulepreload" href="([^"]+\/assets\/index-[^"]+\.js)"[^>]*>/i,
  )?.[1];

  if (!entry) {
    throw new Error(`Could not find the client entry module in ${path}`);
  }

  const hydrated = html.replace(
    "</head>",
    `<script type="module" src="${entry}"></script></head>`,
  );
  await writeFile(path, hydrated);
}

await writeFile(join(outputRoot, ".nojekyll"), "");

const supersededMedia = [
  "video",
  "food/burger.jpg",
  "food/falafel-platter.jpg",
  "food/mixed-platter.jpg",
  "food/pizza.jpg",
  "food/rice-platter.jpg",
  "food/takeout-platter.jpg",
  "food/cinematic/burger.jpg",
  "food/cinematic/plate-hero.jpg",
  "food/cinematic/takeout.jpg",
  "og.png",
];

await Promise.all(
  supersededMedia.map((path) => rm(join(outputRoot, path), { force: true, recursive: true })),
);
