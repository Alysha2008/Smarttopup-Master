import fs from "fs";
import unzipper from "unzipper";

const backendZip = "Smart-topupng.zip"; // ✅ your actual file name
const backendDest = "backend"; // folder to extract into

async function extract(zipFile, destFolder) {
  try {
    if (!fs.existsSync(zipFile)) {
      console.log(`⚠️ File not found: ${zipFile}`);
      return;
    }

    console.log(`📦 Extracting ${zipFile}...`);
    await fs
      .createReadStream(zipFile)
      .pipe(unzipper.Extract({ path: destFolder }))
      .promise();

    console.log(`✅ Extraction completed: ${destFolder}`);
  } catch (err) {
    console.error(`❌ Error extracting ${zipFile}:`, err.message);
  }
}

(async () => {
  await extract(backendZip, backendDest);
})();