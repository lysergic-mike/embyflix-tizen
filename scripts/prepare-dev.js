const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// For dev mode, just ensure we have the dev script tag
// If already in dev mode, don't change it
if (!html.includes('/src/main.ts')) {
  // Replace build output with dev source
  html = html.replace(
    /<script[^>]*src="\.\/assets\/main\.js"[^>]*><\/script>\s*<link[^>]*href="\.\/assets\/main\.css"[^>]*>/g,
    '<script type="module" src="/src/main.ts"></script>'
  );
  fs.writeFileSync(indexPath, html);
  console.log('✓ Configured index.html for development mode');
} else {
  console.log('✓ index.html already in development mode');
}
