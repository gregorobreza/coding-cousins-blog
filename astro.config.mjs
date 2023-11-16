import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://gregorobreza.github.io",
  //   base: "/coding-cousins-blog/",
  integrations: [
    preact(),
    mdx(),
    tailwind({
      // Example: Disable injecting a basic `base.css` import on every page.
      // Useful if you need to define and/or import your own custom `base.css`.
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
});
