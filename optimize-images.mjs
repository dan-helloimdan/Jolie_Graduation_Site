import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { statSync, renameSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const imagesDir = join(__dirname, 'src/imports/Desktop1');

// Images to optimize
const images = [
  {
    name: '5fbb7b24b967188d394ca631544da5031febb965.png', // Hero image
    maxWidth: 1600,
    quality: 85
  },
  {
    name: '3ddaff427fdcdc31fe0d2d2bb0d9bca4efd0e66f.png', // Footer image
    maxWidth: 1200,
    quality: 85
  }
];

async function optimizeImage(imageName, maxWidth, quality) {
  const inputPath = join(imagesDir, imageName);
  const tmpPath = inputPath + '.tmp';

  const originalSize = statSync(inputPath).size;
  console.log(`Optimizing ${imageName} (${(originalSize / 1024 / 1024).toFixed(2)} MB)...`);

  try {
    // Convert to JPEG with optimization
    await sharp(inputPath)
      .resize(maxWidth, null, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .jpeg({ quality, mozjpeg: true })
      .toFile(tmpPath);

    const newSize = statSync(tmpPath).size;
    const savings = ((1 - newSize / originalSize) * 100).toFixed(1);

    // Rename to .jpg
    const outputPath = inputPath.replace('.png', '.jpg');
    renameSync(tmpPath, outputPath);

    console.log(`✓ Optimized to ${(newSize / 1024 / 1024).toFixed(2)} MB (${savings}% reduction)`);
    return outputPath;
  } catch (error) {
    console.error(`Error optimizing ${imageName}:`, error);
    return null;
  }
}

async function main() {
  console.log('Starting image optimization...\n');

  for (const img of images) {
    await optimizeImage(img.name, img.maxWidth, img.quality);
  }

  console.log('\n✓ All images optimized!');
  console.log('\nNOTE: Update your imports to use .jpg instead of .png');
}

main();
