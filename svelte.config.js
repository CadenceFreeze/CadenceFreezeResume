import adapter from "@sveltejs/adapter-static";

export default {
  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: "404.html",
    }),
  },

  compilerOptions: {
    runes: ({ filename }) =>
      filename.split(/[/\\]/).includes("node_modules")
        ? undefined
        : true,
  },
};