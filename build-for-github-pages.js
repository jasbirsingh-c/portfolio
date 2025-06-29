#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Building portfolio for GitHub Pages deployment...');

// Build the frontend
console.log('Building frontend...');
execSync('npm run build:frontend', { stdio: 'inherit' });

// Create a simple index.html that serves the built app
const indexContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
    <title>Jasbirsingh Chauhan - Full Stack Developer Portfolio</title>
    <meta name="description" content="Professional portfolio of Jasbirsingh Chauhan - Senior Full Stack Developer with 12+ years experience in Python, PHP, JavaScript, MySQL, Linux, and AWS cloud solutions." />
    <meta name="keywords" content="Full Stack Developer, Python, PHP, JavaScript, MySQL, Linux, AWS, Web Applications, Portfolio, Senior Developer" />
    <meta name="author" content="Jasbirsingh Chauhan" />
    
    <!-- Open Graph Tags -->
    <meta property="og:title" content="Jasbirsingh Chauhan - Full Stack Developer Portfolio" />
    <meta property="og:description" content="Professional portfolio showcasing 12+ years of expertise in Python, PHP, JavaScript, MySQL, Linux, and AWS" />
    <meta property="og:type" content="website" />
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./assets/index.js"></script>
  </body>
</html>`;

// Write the GitHub Pages index.html
fs.writeFileSync(path.join(__dirname, 'dist/public/index.html'), indexContent);

console.log('Portfolio built successfully for GitHub Pages!');
console.log('');
console.log('Next steps:');
console.log('1. Create a new repository on GitHub');
console.log('2. Copy the contents of dist/public/ to your repository');
console.log('3. Enable GitHub Pages in repository settings');
console.log('4. Select "Deploy from a branch" and choose main branch');
console.log('5. Your portfolio will be available at: https://yourusername.github.io/repository-name');