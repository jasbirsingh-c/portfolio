# Deploy Your Portfolio to GitHub Pages

## Step 1: Prepare Your Project for GitHub Pages

Since your portfolio is a React application, we need to build it as a static site for GitHub Pages.

### Option A: Simple Static Build (Recommended)

1. **Modify package.json** to add a build script for static deployment:
   ```bash
   npm run build:frontend
   ```

2. **Create a static version** by copying the built files:
   ```bash
   # After building, copy the contents of dist/public/
   cp -r dist/public/* ./github-pages-build/
   ```

## Step 2: Create GitHub Repository

1. **Go to GitHub.com** and sign in
2. **Click "New repository"** (green button)
3. **Repository name**: `jasbirsingh-portfolio` (or any name you prefer)
4. **Make it Public** (required for free GitHub Pages)
5. **Don't initialize** with README, .gitignore, or license
6. **Click "Create repository"**

## Step 3: Upload Your Portfolio

### Method 1: Using Git Commands (Recommended)

1. **Initialize git in your project folder:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   ```

2. **Connect to your GitHub repository:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/jasbirsingh-portfolio.git
   git branch -M main
   git push -u origin main
   ```

### Method 2: Upload Files Directly

1. **Download your project** as a ZIP file
2. **Go to your GitHub repository** page
3. **Click "uploading an existing file"**
4. **Drag and drop** all your project files
5. **Commit the changes**

## Step 4: Configure GitHub Pages

1. **Go to your repository** on GitHub
2. **Click "Settings"** tab
3. **Scroll down to "Pages"** in the left sidebar
4. **Under "Source"**, select **"Deploy from a branch"**
5. **Select branch**: **"main"**
6. **Select folder**: **"/ (root)"**
7. **Click "Save"**

## Step 5: Build Configuration for GitHub Pages

Create a **`.github/workflows/deploy.yml`** file in your repository:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm install
    
    - name: Build project
      run: npm run build:frontend
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist/public
```

## Step 6: Update Base Path (Important!)

For GitHub Pages, you need to update your Vite config. Add this to `vite.config.ts`:

```typescript
export default defineConfig({
  // ... existing config
  base: '/jasbirsingh-portfolio/', // Replace with your repository name
  // ... rest of config
});
```

## Step 7: Access Your Live Portfolio

After deployment (usually takes 5-10 minutes):

**Your portfolio will be live at:**
`https://YOUR_USERNAME.github.io/jasbirsingh-portfolio/`

## Troubleshooting Tips

1. **Build Errors**: Make sure all dependencies install correctly
2. **404 Errors**: Check that the base path matches your repository name
3. **Blank Page**: Verify the build files are in the correct directory
4. **Slow Updates**: GitHub Pages can take up to 10 minutes to update

## Quick Commands Summary

```bash
# Build the project
npm run build:frontend

# Initialize git and push to GitHub
git init
git add .
git commit -m "Portfolio deployment"
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin main
```

Your professional portfolio showcasing your 12+ years of experience in Python, PHP, JavaScript, MySQL, Linux, and AWS will be live and accessible worldwide!