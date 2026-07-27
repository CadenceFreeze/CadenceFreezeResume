import { execSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const outputDir = join(root, "static", "assets", "resume");

if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

try {
  const resumeFile = join(root, "static", "assets", "resume", "cadence-resume.tex");

  execSync(
    `latexmk -pdf -interaction=nonstopmode -output-directory="${outputDir}" "${resumeFile}"`,
    { stdio: "inherit" },
  );

  console.log("✅ Resume built successfully!");
} catch (error) {
  console.error(error);
}

// npx tsx scripts/build-resume.ts
