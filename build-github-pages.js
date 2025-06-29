#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Building portfolio for GitHub Pages...');

// Create docs directory for GitHub Pages
if (!fs.existsSync('docs')) {
  fs.mkdirSync('docs');
}

// Build the frontend with proper base path
console.log('Building React app...');
execSync('vite build client --outDir ../docs --config vite.config.github.ts', { stdio: 'inherit' });

// Create index.html in root for GitHub Pages fallback
const indexContent = fs.readFileSync('docs/index.html', 'utf8');
fs.writeFileSync('docs/index.html', indexContent);

// Create 404.html for client-side routing
fs.writeFileSync('docs/404.html', indexContent);

console.log('✅ Build complete! Ready for GitHub Pages deployment.');
console.log('');
console.log('Next steps:');
console.log('1. Commit and push the docs/ folder to your repository');
console.log('2. In GitHub repository settings → Pages');
console.log('3. Set source to "Deploy from a branch"');
console.log('4. Select "main" branch and "/docs" folder');
console.log('5. Save and wait for deployment');