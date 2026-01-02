import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Target, TrendingUp, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

// Preload hero images
const heroImages = [
  '/gsw/IMG_1796.PNG',
  '/gsw/IMG_1801.PNG',
  '/gsw/IMG_1802.PNG',
];

const allImages = [
  '/gsw/IMG_1796.PNG',
  '/gsw/IMG_1798.PNG',
  '/gsw/IMG_1800.PNG',
  '/gsw/IMG_1801.PNG',
  '/gsw/IMG_1802.PNG',
  '/gsw/IMG_1803.PNG',
  '/gsw/IMG_1804.PNG',
  '/gsw/IMG_1805.PNG',
  '/gsw/IMG_1806.PNG',
  '/gsw/emblem.png',
];

export default function GSWCaseStudyPage() {
  // Preload images on mount
  useEffect(() => {
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
    // Preload remaining images after a short delay
    const timer = setTimeout(() => {
      allImages.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const galleryImages = [
    { src: '/gsw/IMG_1796.PNG', alt: 'Highlights' },
    { src: '/gsw/IMG_1798.PNG', alt: 'Dub Nation' },
    { src: '/gsw/IMG_1800.PNG', alt: 'Press Room' },
    { src: '/gsw/IMG_1801.PNG', alt: 'Dub AI' },
    { src: '/gsw/IMG_1802.PNG', alt: 'Schedule All' },
    { src: '/gsw/IMG_1803.PNG', alt: 'Schedule Upcoming' },
    { src: '/gsw/IMG_1804.PNG', alt: 'Schedule Past' },
    { src: '/gsw/IMG_1805.PNG', alt: 'More' },
    { src: '/gsw/IMG_1806.PNG', alt: 'Premium' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Background Pattern */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 20%, rgba(29, 66, 138, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, rgba(255, 199, 44, 0.08) 0%, transparent 50%)
          `
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#0a0a0f]/95 to-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-gray-400 hover:text-[#FFC72C] transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Portfolio</span>
            </Link>
            <span className="font-['Bebas_Neue'] text-xl tracking-wider text-[#FFC72C]">GSW+</span>
          </div>
        </div>
      </nav>

      {/* Video Header */}
      <section className="relative pt-16">
        <div className="w-full h-[50vh] lg:h-[60vh] overflow-hidden relative">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/gsw/gsw.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f]" />
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Hero Text */}
            <div className="text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFC72C]/10 border border-[#FFC72C]/30 rounded-full text-sm text-[#FFC72C]">
                <span className="w-2 h-2 bg-[#FFC72C] rounded-full animate-pulse" />
                iOS App Design & Development
              </div>
              
              <h1 
                className="text-6xl lg:text-8xl font-bold tracking-tight"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  background: 'linear-gradient(135deg, #1D428A 0%, #2a5298 30%, #7a6f4c 70%, #FFC72C 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                GSW+
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                The ultimate Golden State Warriors fan companion — featuring AI-powered insights, real-time stats, video highlights, full season schedules, and live injury reports.
              </p>

              {/* Project Details */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                <div className="text-center lg:text-left">
                  <Calendar className="w-6 h-6 text-[#FFC72C] mx-auto lg:mx-0 mb-2" />
                  <div className="text-xs uppercase tracking-wider text-gray-500">Timeline</div>
                  <div className="font-semibold text-white">2025</div>
                </div>
                <div className="text-center lg:text-left">
                  <Smartphone className="w-6 h-6 text-[#FFC72C] mx-auto lg:mx-0 mb-2" />
                  <div className="text-xs uppercase tracking-wider text-gray-500">Platform</div>
                  <div className="font-semibold text-white">iOS (Swift)</div>
                </div>
                <div className="text-center lg:text-left">
                  <Target className="w-6 h-6 text-[#FFC72C] mx-auto lg:mx-0 mb-2" />
                  <div className="text-xs uppercase tracking-wider text-gray-500">My Role</div>
                  <div className="font-semibold text-white">Product Designer</div>
                </div>
                <div className="text-center lg:text-left">
                  <TrendingUp className="w-6 h-6 text-green-500 mx-auto lg:mx-0 mb-2" />
                  <div className="text-xs uppercase tracking-wider text-gray-500">Impact</div>
                  <div className="font-semibold text-green-500">9+ Screens</div>
                </div>
              </div>
            </div>

            {/* Hero Mockups */}
            <div className="flex justify-center items-center gap-4 py-8">
              <div className="hidden lg:block transform -translate-x-4 -rotate-12 scale-90">
                <PhoneMockup image="/gsw/IMG_1796.PNG" alt="Highlights" />
              </div>
              <div className="z-10">
                <PhoneMockup image="/gsw/IMG_1801.PNG" alt="Dub AI Assistant" large />
              </div>
              <div className="hidden lg:block transform translate-x-4 rotate-12 scale-90">
                <PhoneMockup image="/gsw/IMG_1802.PNG" alt="Schedule" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 lg:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-[#FFC72C] mb-4">Project Overview</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              Elevating the Fan Experience
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              GSW+ bridges the gap between casual viewers and die-hard fans by providing a centralized hub for everything Golden State Warriors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <OverviewCard 
              icon="🎯"
              title="The Challenge"
              description="Warriors fans were scattered across multiple platforms to get game updates, watch highlights, and track player news. There was no unified experience tailored specifically to the Dub Nation community."
            />
            <OverviewCard 
              icon="💡"
              title="The Solution"
              description="A native iOS app with an AI-powered assistant (Dub), real-time stats, curated video highlights, full season schedules, and live injury reports — all in one beautifully designed interface."
            />
            <OverviewCard 
              icon="✨"
              title="The Impact"
              description="Created a comprehensive fan companion with a premium tier featuring unlimited AI access, extended briefings, game predictions, and ad-free experience for power users."
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-[#FFC72C] mb-4">Key Features</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              Built for Dub Nation
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Every feature was designed with the Warriors fan in mind — from the signature blue-to-gold gradient to real-time game integration.
            </p>
          </div>

          {/* Feature 1: Video Highlights */}
          <FeatureSection
            title="Video Highlights Hub"
            description="Catch every Warriors moment with smart content categories — from full game highlights to Dub Nation content and Steve Kerr's postgame press conferences."
            features={[
              "Highlights — Full game recaps & plays of the week",
              "Dub Nation — Player profiles & team content",
              "Press Room — Postgame interviews & press conferences",
              "YouTube integration with thumbnail previews",
              "2025-26 NBA Season content"
            ]}
            images={['/gsw/IMG_1796.PNG', '/gsw/IMG_1798.PNG']}
          />

          {/* Feature 2: Press Room */}
          <FeatureSection
            title="Press Room Coverage"
            description="Stay connected with the team through comprehensive press conference coverage featuring coaches, players, and post-game analysis from the Warriors media team."
            features={[
              "Steph Curry injury status updates",
              "Steve Kerr postgame breakdowns",
              "Player interview highlights",
              "Rookie press conferences",
              "Real-time video updates"
            ]}
            images={['/gsw/IMG_1800.PNG']}
            reverse
          />

          {/* Feature 3: Dub AI */}
          <FeatureSection
            title="Dub — AI Assistant"
            description="Meet Dub, your personal Warriors AI assistant. Ask anything about the team — from current stats to dynasty history — and get instant, intelligent answers."
            features={[
              "Natural language queries about the Warriors",
              "Quick action buttons: Stats, Schedule, Analysis, History",
              '"How are the Warriors doing this season?"',
              '"Predict our next game" with AI analysis',
              '"How is Steph Curry playing lately?"'
            ]}
            images={['/gsw/IMG_1801.PNG']}
          />

          {/* Feature 4: Schedule */}
          <FeatureSection
            title="Full Season Schedule"
            description="Track all 82 games of the 2025-26 season with smart filters for All Games, Upcoming, and Past — complete with final scores, opponent details, and game times."
            features={[
              "Complete 82-game schedule",
              "Filter by All/Upcoming/Past games",
              "Live score updates with win/loss indicators",
              "Game time and date information",
              "Month-by-month organization"
            ]}
            images={['/gsw/IMG_1802.PNG', '/gsw/IMG_1804.PNG']}
            reverse
          />

          {/* Feature 5: More & Injuries */}
          <FeatureSection
            title="Player Updates & More"
            description="Real-time injury reports with status indicators, news updates, and app settings — so you always know who's suiting up and what's happening with the team."
            features={[
              "Live injury status: Out, Day-To-Day, Probable",
              "Detailed injury descriptions & updates",
              "News & Updates quick access",
              "Premium upgrade options",
              "Official Warriors website links"
            ]}
            images={['/gsw/IMG_1805.PNG', '/gsw/IMG_1806.PNG']}
          />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 lg:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-[#FFC72C] mb-4">App Gallery</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              Complete App Walkthrough
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore every screen of the GSW+ experience — from highlights to the premium subscription flow.
            </p>
          </div>
        </div>
        
        {/* Horizontal Scroll Gallery */}
        <div className="flex gap-8 overflow-x-auto pb-8 px-8 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {galleryImages.map((img, index) => (
            <div key={index} className="flex-shrink-0 snap-center">
              <PhoneMockup image={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </section>

      {/* Design System Section */}
      <section className="py-20 lg:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-[#FFC72C] mb-4">Design System</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              Visual Language
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A cohesive design system rooted in the Warriors' brand identity, balancing team colors with a premium dark-mode aesthetic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Colors */}
            <div className="bg-[#111118] rounded-2xl p-6 border border-white/5">
              <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-6">Color Palette</h4>
              <div className="space-y-4">
                <ColorSwatch color="#1D428A" name="Warriors Blue" />
                <ColorSwatch color="#FFC72C" name="Warriors Gold" />
                <ColorSwatch color="#0a0a0f" name="Background Dark" border />
                <ColorSwatch color="#111118" name="Card Surface" border />
              </div>
            </div>

            {/* Typography */}
            <div className="bg-[#111118] rounded-2xl p-6 border border-white/5">
              <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-6">Typography</h4>
              <div className="space-y-4">
                <span className="block text-3xl" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Bebas Neue</span>
                <span className="block text-base text-gray-400">DM Sans — Body Text</span>
                <span className="block text-base text-gray-400 font-semibold">DM Sans — Semibold</span>
              </div>
            </div>

            {/* Icons */}
            <div className="bg-[#111118] rounded-2xl p-6 border border-white/5">
              <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-6">Iconography</h4>
              <div className="grid grid-cols-3 gap-3">
                {['🏠', '▶️', '🏀', '📅', '⚙️', '⭐'].map((icon, i) => (
                  <div key={i} className="w-11 h-11 bg-white/5 rounded-lg flex items-center justify-center text-xl">
                    {icon}
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-[#111118] rounded-2xl p-6 border border-white/5">
              <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-6">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {['Swift', 'SwiftUI', 'Xcode', 'Claude AI', 'YouTube API', 'NBA API'].map((tech, i) => (
                  <span key={i} className="px-3 py-2 bg-white/5 rounded-lg text-sm text-gray-400">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 lg:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-[#FFC72C] mb-4">Project Outcomes</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              By the Numbers
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Key metrics and achievements from the GSW+ app development.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <ResultCard number="9+" label="Unique Screens" />
            <ResultCard number="AI" label="Powered Assistant" />
            <ResultCard number="Live" label="Real-time Data" />
            <ResultCard number="100%" label="Native SwiftUI" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="rounded-3xl p-12 lg:p-16 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 199, 44, 0.08) 0%, rgba(29, 66, 138, 0.08) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.05)'
            }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              Let's Build Something Great
            </h2>
            <p className="text-gray-400 max-w-md mx-auto mb-8">
              Interested in collaborating on your next mobile app project? Let's connect and create exceptional user experiences together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FFC72C] text-black font-semibold rounded-full hover:shadow-lg hover:shadow-[#FFC72C]/30 transition-all hover:-translate-y-0.5"
              >
                View More Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
            <span className="text-gray-500" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '1px' }}>
              GSW+ Case Study
            </span>
            <span className="text-gray-500 text-sm">
              Designed & Developed for Dub Nation
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Phone Mockup Component with Loading State
function PhoneMockup({ image, alt, large = false }: { image: string; alt: string; large?: boolean }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  const size = large 
    ? 'w-[280px] h-[605px]' 
    : 'w-[240px] h-[518px]';
  
  return (
    <div className={`relative ${size} flex-shrink-0`}>
      {/* Frame */}
      <div 
        className="absolute inset-0 rounded-[50px]"
        style={{
          background: 'linear-gradient(145deg, #E8B896 0%, #D49B72 12%, #C4875A 28%, #8B5A3C 55%, #C4875A 72%, #D49B72 88%, #E8B896 100%)',
          boxShadow: `
            0 50px 100px -20px rgba(0, 0, 0, 0.5),
            0 30px 60px -15px rgba(0, 0, 0, 0.4),
            0 0 40px -5px rgba(196, 135, 90, 0.15),
            inset 0 1px 1px 0 rgba(255, 255, 255, 0.25),
            inset 0 -1px 1px 0 rgba(0, 0, 0, 0.15)
          `
        }}
      />
      
      {/* Screen Area */}
      <div className="absolute inset-[10px] bg-[#1D428A] rounded-[42px] overflow-hidden">
        {/* Loading Skeleton */}
        {!loaded && !error && (
          <div className="absolute inset-0 bg-gradient-to-b from-[#1D428A] to-[#0f2651] animate-pulse flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-[#FFC72C]/20 flex items-center justify-center">
              <span className="text-2xl">🏀</span>
            </div>
          </div>
        )}
        
        <img 
          src={image} 
          alt={alt}
          className={`w-full h-full object-cover object-top transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
        
        {/* Dynamic Island */}
        <div 
          className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[30px] bg-black rounded-[16px] z-10"
          style={{
            boxShadow: 'inset 0 0 0 1.5px rgba(30, 30, 35, 0.8), inset 0 1px 3px rgba(0, 0, 0, 0.5)'
          }}
        />
        
        {/* Screen Reflection */}
        <div 
          className="absolute inset-0 rounded-[42px] pointer-events-none"
          style={{
            background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.03) 20%, transparent 40%)'
          }}
        />
      </div>
      
      {/* Shadow */}
      <div 
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[85%] h-10 -z-10"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.35), rgba(0,0,0,0.15) 40%, transparent 70%)',
          filter: 'blur(15px)'
        }}
      />
    </div>
  );
}

// Overview Card Component
function OverviewCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-[#111118] rounded-2xl p-8 border border-white/5 hover:bg-[#1a1a24] hover:-translate-y-1 hover:border-[#FFC72C]/20 transition-all">
      <div 
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
        style={{ background: 'linear-gradient(135deg, #FFC72C 0%, #B8860B 100%)' }}
      >
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}

// Feature Section Component
function FeatureSection({ 
  title, 
  description, 
  features, 
  images,
  reverse = false 
}: { 
  title: string; 
  description: string; 
  features: string[]; 
  images: string[];
  reverse?: boolean;
}) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16 lg:py-24 border-b border-white/5 last:border-b-0 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      <div className={`space-y-6 text-center lg:text-left ${reverse ? 'lg:order-2' : ''}`}>
        <h3 className="text-3xl lg:text-4xl font-bold" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
          {title}
        </h3>
        <p className="text-gray-400 text-lg leading-relaxed">
          {description}
        </p>
        <ul className="space-y-3 inline-block text-left">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-gray-400">
              <span className="w-6 h-6 bg-[#FFC72C]/15 text-[#FFC72C] rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                ✓
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      <div className={`flex gap-6 justify-center ${reverse ? 'lg:order-1' : ''}`}>
        {images.map((img, index) => (
          <div key={index} className={index === 1 ? 'hidden sm:block' : ''}>
            <PhoneMockup image={img} alt={title} />
          </div>
        ))}
      </div>
    </div>
  );
}

// Color Swatch Component
function ColorSwatch({ color, name, border = false }: { color: string; name: string; border?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div 
        className={`w-10 h-10 rounded-lg ${border ? 'border border-white/10' : ''}`}
        style={{ backgroundColor: color }}
      />
      <span className="text-gray-400 text-sm">{name}</span>
    </div>
  );
}

// Result Card Component
function ResultCard({ number, label }: { number: string; label: string }) {
  return (
    <div 
      className="rounded-2xl p-8 lg:p-12 text-center hover:-translate-y-1 hover:border-[#FFC72C]/30 transition-all"
      style={{
        background: 'linear-gradient(135deg, rgba(29, 66, 138, 0.15) 0%, rgba(29, 66, 138, 0.05) 100%)',
        border: '1px solid rgba(29, 66, 138, 0.2)'
      }}
    >
      <div 
        className="text-4xl lg:text-5xl font-bold mb-2"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          background: 'linear-gradient(135deg, #1D428A 0%, #2a5298 30%, #7a6f4c 70%, #FFC72C 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {number}
      </div>
      <div className="text-gray-400">{label}</div>
    </div>
  );
}
