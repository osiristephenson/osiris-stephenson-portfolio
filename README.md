# Osiris Stephenson - Product Designer Portfolio

A modern, responsive portfolio website showcasing Product Design work!

##  Quick Start

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd osiris-stephenson-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
osiris-stephenson-portfolio/
├── public/                 # Static assets
│   ├── images/            # Portfolio images
│   ├── resume.pdf         # Resume file
│   └── _redirects         # Netlify routing config
├── src/
│   ├── components/        # Reusable React components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Hero.tsx       # Homepage hero section
│   │   ├── FeaturedWork.tsx # Project showcase
│   │   └── Contact.tsx    # Contact section
│   ├── pages/             # Page components
│   │   ├── HomePage.tsx   # Main landing page
│   │   ├── AboutPage.tsx  # About page
│   │   ├── ResumePage.tsx # Resume display
│   │   └── *CaseStudyPage.tsx # Individual case studies
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite configuration
├── tailwind.config.js     # Tailwind CSS config
└── tsconfig.json          # TypeScript configuration
```

## 🎨 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Case Studies**: Detailed project showcases with images and insights
- **Interactive Elements**: Smooth animations and hover effects
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Loading**: Optimized images and code splitting

## 🛠 Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Deployment**: Netlify

## 📄 Pages

1. **Home** (`/`) - Hero section, featured work, contact
2. **About** (`/about`) - Personal story and inspirations
3. **Resume** (`/resume`) - Professional experience and skills
4. **Case Studies**:
   - Intervention Management Research (`/case-study/intervention-management`)
   - Blue Bottle Coffee Redesign (`/case-study/blue-bottle-coffee`)
   - VR Hand Gestures (`/case-study/vr-hand-gestures`)
   - Hyper-Localized Neighborhood (`/case-study/hyper-localized-neighborhood`)

## 🎯 Key Components

### Header
- Responsive navigation
- Mobile menu with smooth animations
- Active state indicators

### Hero Section
- Professional introduction
- Status indicator (available for work)
- Profile image with location badge

### Featured Work
- Project cards with hover effects
- Impact metrics and tags
- Direct links to case studies

### Case Studies
- Detailed project breakdowns
- Research methodology explanations
- Visual documentation and results

## 🚀 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push

### Manual Deployment
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Adding New Case Studies
1. Create new page component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update featured work in `src/components/FeaturedWork.tsx`
4. Add project images to `public/` folder

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎨 Design System

### Colors
- Primary: Blue (#2563eb)
- Secondary: Gray (#6b7280)
- Accent: Green (#059669)
- Background: White (#ffffff)

### Typography
- Headings: Bold, hierarchical sizing
- Body: Regular weight, 1.5 line height
- Code: Monospace font family

## 📞 Contact

- Email: info.stephensonconsulting@gmail.com
- LinkedIn: [linkedin.com/in/stephensoe](https://linkedin.com/in/stephensoe)
- Location: Monterey, CA

## 📄 License

This project is private and proprietary. All rights reserved.
