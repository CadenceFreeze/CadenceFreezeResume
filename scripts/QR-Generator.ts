import QRCode from "qrcode";

const url = "https://cadencefreeze.github.io/CadenceFreezeResume/";

await QRCode.toFile("src/lib/assets/cadence-qr.png", url, {
  type: "png",
  errorCorrectionLevel: "H",
  margin: 1,
  color: {
    dark: "#09090b",
    light: "#00000000", // transparent background
  },
});

console.log(`Generated QR for ${url}`);

// npx tsx scripts/QR-Generator.ts
