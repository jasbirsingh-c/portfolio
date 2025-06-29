#!/bin/bash

echo "🚀 Deploying Jasbirsingh Chauhan's Portfolio to GitHub Pages"
echo "=================================================="

# Step 1: Build the static site
echo "📦 Building static site..."
npm run build

# Step 2: Create docs directory for GitHub Pages
echo "📁 Preparing GitHub Pages structure..."
rm -rf docs
mkdir docs

# Step 3: Copy built files to docs
echo "📋 Copying built files..."
cp -r dist/public/* docs/

# Step 4: Create proper index.html for GitHub Pages
cat > docs/index.html << 'EOF'
<!DOCTYPE html>
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
    
    <!-- Import the built CSS and JS -->
    <link rel="stylesheet" href="./assets/index.css">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./assets/index.js"></script>
  </body>
</html>
EOF

# Step 5: Create 404.html for client-side routing
cp docs/index.html docs/404.html

echo "✅ Build complete!"
echo ""
echo "Next steps for GitHub deployment:"
echo "1. git add docs/"
echo "2. git commit -m 'Deploy portfolio to GitHub Pages'"
echo "3. git push origin main"
echo "4. In GitHub Settings → Pages → Select 'main' branch and '/docs' folder"
echo ""
echo "Your portfolio will be live at: https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/"