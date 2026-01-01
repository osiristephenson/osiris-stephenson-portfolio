# Deployment Guide

## Quick Deployment Checklist

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git repository

### Local Development Setup
```bash
# Clone the repository
git clone <your-repo-url>
cd osiris-stephenson-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Build
```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

### Netlify Deployment

#### Option 1: Drag & Drop
1. Run `npm run build`
2. Drag the `dist` folder to Netlify's deploy interface
3. Your site will be live instantly

#### Option 2: Git Integration
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on every push

#### Option 3: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy to production
netlify deploy --prod --dir=dist
```

### Environment Variables
No environment variables required for this static site.

### Custom Domain Setup
1. In Netlify dashboard, go to Domain settings
2. Add your custom domain
3. Configure DNS records as instructed
4. SSL certificate will be automatically provisioned

### Performance Optimizations
- Images are optimized and served from CDN
- CSS and JS are minified in production
- Gzip compression enabled by default on Netlify
- React components are code-split for optimal loading

### Troubleshooting

#### Build Fails
- Check Node.js version (requires 18+)
- Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`
- Check for TypeScript errors: `npm run lint`

#### Images Not Loading
- Ensure all images are in the `public` folder
- Check image paths start with `/` (e.g., `/image.png`)
- Verify image file names match exactly (case-sensitive)

#### Routing Issues
- Netlify redirects are configured in `public/_redirects`
- All routes redirect to `index.html` for client-side routing
- No additional configuration needed

### Backup Strategy
- Source code: Git repository
- Assets: Stored in `public` folder, backed up with code
- No database to backup (static site)

### Recovery Process
1. Clone repository: `git clone <repo-url>`
2. Run setup script: `bash setup.sh`
3. Copy assets to `public` folder
4. Deploy: `npm run build && netlify deploy --prod --dir=dist`