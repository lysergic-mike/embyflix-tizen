const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Only update if not already in build mode
if (!html.includes('./assets/main.js')) {
  // Replace dev source with built assets (both JS and CSS)
  html = html.replace(
    /<script[^>]*src="\/src\/main\.ts"[^>]*><\/script>/g,
    '<script type="module" crossorigin src="./assets/main.js"></script>\n  <link rel="stylesheet" crossorigin href="./assets/main.css">'
  );

  fs.writeFileSync(indexPath, html);
  console.log('✓ Configured index.html for production build');
} else {
  console.log('✓ index.html already configured for production build');
}
