# System Recovery Guide

## Complete System Recreation

If you need to recreate this portfolio system from scratch due to corruption, failure, or cloning to a new environment, follow this comprehensive guide.

## 🚨 Emergency Recovery Steps

### 1. Quick Setup (5 minutes)
```bash
# Run the automated setup script
bash setup.sh

# Copy your assets
cp -r /backup/public/* ./public/
cp -r /backup/src/* ./src/

# Install and start
npm install
npm run dev
```

### 2. Manual Recovery (15 minutes)

#### Step 1: Environment Setup
```bash
# Verify Node.js version
node --version  # Should be 18+
npm --version   # Should be 9+

# Create project directory
mkdir osiris-stephenson-portfolio
cd osiris-stephenson-portfolio
```

#### Step 2: Package Dependencies
```bash
# Initialize npm
npm init -y

# Install production dependencies
npm install react@^18.3.1 react-dom@^18.3.1 react-router-dom@^6.26.1 lucide-react@^0.344.0

# Install development dependencies
npm install -D @vitejs/plugin-react@^4.3.1 vite@^5.4.2 typescript@^5.5.3 @types/react@^18.3.5 @types/react-dom@^18.3.0 tailwindcss@^3.4.1 autoprefixer@^10.4.18 postcss@^8.4.35 eslint@^9.9.1 @eslint/js@^9.9.1 typescript-eslint@^8.3.0 eslint-plugin-react-hooks@^5.1.0-rc.0 eslint-plugin-react-refresh@^0.4.11 globals@^15.9.0 netlify-cli@^22.2.2
```

#### Step 3: Configuration Files
Create all configuration files as specified in the setup script above.

#### Step 4: Source Code Recovery
```bash
# Create directory structure
mkdir -p src/{components,pages,assets}
mkdir -p public

# Copy source files from backup or repository
# If from git:
git clone <repository-url> temp
cp -r temp/src/* ./src/
cp -r temp/public/* ./public/
rm -rf temp
```

## 🔄 Asset Recovery Checklist

### Critical Files to Backup/Restore
- [ ] `src/` - All source code
- [ ] `public/` - All images and static assets
- [ ] `package.json` - Dependencies
- [ ] Configuration files (vite.config.ts, tailwind.config.js, etc.)

### Image Assets Inventory
```
public/
├── mainlogo.png           # Header logo
├── faviconlogo.png        # Light favicon
├── inverselogo.png        # Dark favicon
├── boyfren copy.png       # Profile image
├── footer.png             # Contact section image
├── IMR.png                # Intervention Management project
├── bbc.png                # Blue Bottle Coffee project
├── fredrick.png           # VR project
├── hyper.png              # Chirp project
├── resume.pdf             # Resume document
└── [case-study-images]/   # All case study visuals
```

## 🚀 Deployment Recovery

### Netlify Redeployment
```bash
# Build the project
npm run build

# Deploy via CLI
netlify login
netlify deploy --prod --dir=dist

# Or drag & drop dist/ folder to Netlify dashboard
```

### Domain Recovery
1. Update DNS records to point to new Netlify site
2. Configure custom domain in Netlify dashboard
3. SSL certificate will auto-provision

## 🔍 Verification Steps

### 1. Development Server
```bash
npm run dev
# Should start on http://localhost:5173
```

### 2. Production Build
```bash
npm run build
npm run preview
# Should build without errors
```

### 3. Page Functionality
- [ ] Homepage loads with hero, work, contact sections
- [ ] Navigation works (mobile and desktop)
- [ ] All case study pages load
- [ ] Images display correctly
- [ ] Resume page shows PDF
- [ ] About page carousel functions

### 4. Performance Check
- [ ] Lighthouse score > 90
- [ ] All images load quickly
- [ ] No console errors
- [ ] Mobile responsive

## 🛠 Troubleshooting Common Issues

### Build Failures
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check for TypeScript errors
npx tsc --noEmit

# Verify all imports
npm run lint
```

### Missing Images
```bash
# Verify image paths
ls -la public/
# All images should be present

# Check image references in code
grep -r "src=\"/" src/
# Paths should match actual files
```

### Routing Issues
```bash
# Verify _redirects file exists
cat public/_redirects
# Should contain: /*    /index.html   200
```

## 📋 Recovery Validation Checklist

- [ ] All dependencies installed correctly
- [ ] Development server starts without errors
- [ ] Production build completes successfully
- [ ] All pages accessible via routing
- [ ] Images load on all pages
- [ ] Mobile navigation works
- [ ] Contact links function
- [ ] Case study navigation works
- [ ] Resume PDF displays
- [ ] About page carousel functions
- [ ] Site deploys to Netlify successfully
- [ ] Custom domain (if applicable) resolves
- [ ] SSL certificate active

## 📞 Emergency Contacts

If you encounter issues during recovery:
- Check GitHub repository for latest code
- Review Netlify deployment logs
- Verify Node.js and npm versions
- Ensure all environment requirements met

## 🔐 Security Notes

- No sensitive environment variables required
- All assets are public (portfolio site)
- No database credentials to manage
- SSL handled automatically by Netlify

This recovery guide ensures you can restore the complete Osiris Stephenson Portfolio system in any environment with minimal downtime.