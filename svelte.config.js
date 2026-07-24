import adapter from "@sveltejs/adapter-static";

export default {
  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: "404.html",
    }),

    paths: {
      base: process.env.NODE_ENV === "production"
        ? "/CadenceFreezeResume"
        : "",
    },
  },

  compilerOptions: {
    runes: ({ filename }) =>
      filename.split(/[/\\]/).includes("node_modules")
        ? undefined
        : true,
  },
};