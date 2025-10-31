const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Replace built assets with dev source
html = html.replace(
  /<script[^>]*crossorigin[^>]*src="\.\/assets\/main\.js"[^>]*><\/script>/g,
  '<script type="module" src="/src/main.ts"></script>'
);

// Remove CSS link (not needed in dev mode)
html = html.replace(
  /\s*<link[^>]*crossorigin[^>]*href="\.\/assets\/main\.css"[^>]*>\s*/g,
  '\n'
);

fs.writeFileSync(indexPath, html);
console.log('✓ Configured index.html for development mode');
