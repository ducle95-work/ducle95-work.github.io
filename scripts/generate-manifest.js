/**
 * scripts/generate-manifest.js
 * Scans /Images/ and writes /images.json.
 * Run standalone: node scripts/generate-manifest.js
 * Or via npm:     npm run manifest
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const IMAGE_DIR = path.join(ROOT, '', 'gallery');
const OUTPUT = path.join(ROOT, '', 'gallery/images.json');

const SUPPORTED = /\.(png|jpg|jpeg|gif|svg|webp|bmp|ico)$/i;

function scan(dir, baseDir) {
    const results = [];
    if (!fs.existsSync(dir)) {
        console.warn(`⚠  Images folder not found: ${dir}`);
        return results;
    }
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            results.push(...scan(fullPath, baseDir));
        } else if (SUPPORTED.test(entry.name)) {
            // Path relative to ./ so it works as a URL in the browser
            const rel = path.relative(baseDir, fullPath).replace(/\\/g, '/');
            results.push({ name: entry.name, path: rel });
        }
    }
    return results;
}

const images = scan(IMAGE_DIR, path.join(ROOT, ''));
fs.writeFileSync(OUTPUT, JSON.stringify({ images }, null, 2), 'utf8');
console.log(`✅  Written ${images.length} image(s) to /images.json`);
images.forEach(img => console.log('  ·', img.path));
