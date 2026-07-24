import QRCode from "qrcode";

const url = "https://cadencefreeze.github.io/";

await QRCode.toFile(
  "$lib/assets/profile.png",
  url,
  {
    type: "png",
    errorCorrectionLevel: "H",
    margin: 1,
    color: {
      dark: "#09090b",
      light: "#00000000" // transparent background
    }
  }
);

console.log(`Generated QR for ${url}`);

// npx tsx scripts/QR-Generator.ts