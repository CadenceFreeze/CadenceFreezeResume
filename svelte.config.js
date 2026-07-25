import adapter from "@sveltejs/adapter-static";

const config = {
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

    prerender: {
      entries: ["*"],
    },
  },

  compilerOptions: {
    runes: ({ filename }) =>
      filename.split(/[/\\]/).includes("node_modules")
        ? undefined
        : true,
  },
};

export default config;