import React, { useEffect } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  duration: string;
  impact: string;
  impactColor: string;
  slug?: string;
}

function ProjectCard({ title, description, image, tags, duration, impact, impactColor, slug }: ProjectProps) {
  const CardContent = (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg dark:hover:shadow-2xl transition-shadow h-full flex flex-col">
      {/* Project Image */}
      <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-700 overflow-hidden flex-shrink-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Project Content */}
      <div className="p-4 space-y-3 flex-1 flex flex-col">
        {/* Duration */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <Calendar size={14} />
          <span>{duration}</span>
        </div>

        {/* Title & Description */}
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm line-clamp-3">{description}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {tags.slice(0, 4).map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
          {tags.length > 4 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs rounded-full">
              +{tags.length - 4}
            </span>
          )}
        </div>

        {/* Impact & CTA */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700 mt-auto">
          <div className="text-sm">
            <span className="text-gray-600 dark:text-gray-400">Impact: </span>
            <span className={`font-semibold ${impactColor}`}>{impact}</span>
          </div>
          {slug && (
            <div className="text-blue-600 dark:text-blue-400 font-medium text-sm hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center space-x-1">
              <span>Read Case Study</span>
              <ArrowRight size={14} />
            </div>
          )}
        </div>
      </div>
    </div>
  );

  if (slug) {
    return (
      <Link to={`/case-study/${slug}`} className="block h-full">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
}

// Component to handle scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function FeaturedWork() {
  const projects = [
    {
      title: "Intervention Management Research",
      description: "Researched and designed intervention tools to improve learning analytics, UX clarity, and educational outcomes.",
      image: "/IMR.png",
      tags: ["Research/Ops", "User Research", "Learning Analytics", "Data Visualization", "Inclusive Design", "UX Strategy"],
      duration: "7 months",
      impact: "Improved clarity and learning outcomes through more effective intervention tools",
      impactColor: "text-green-600",
      slug: "intervention-management"
    },
    {
      title: "HABIT: Results That Stick",
      description: "Improved habit formation and boosted satisfaction by 34% through user-driven design and testing.",
      image: "/deskTop.png",
      tags: ["UX/UI Design", "Mobile App", "User Research", "Design System", "Behavioral Design", "iOS"],
      duration: "7 months",
      impact: "34% increase in user satisfaction, 200+ users gained interest",
      impactColor: "text-green-600",
      slug: "habit-app"
    },
    {
      title: "Blue Bottle Coffee Redesign",
      description: "Revamped Blue Bottle's app for clarity and better learning flow using IA and human-centered design.",
      image: "/bbc.png",
      tags: ["Information Architecture", "Content Strategy", "Human-Centered Design", "Prototyping", "Heuristic Analysis"],
      duration: "4 months",
      impact: "Improved task success rates",
      impactColor: "text-green-600",
      slug: "blue-bottle-coffee"
    },
    {
      title: "Improving Intuitiveness in VR Hand Gestures",
      description: "Researched gesture usability in VR to uncover failure patterns and guide behavior-based design.",
      image: "/fredrick.png",
      tags: ["Virtual Reality", "Gesture Recognition", "HCI Design", "Persona Spectrum", "Immersive Technology", "Interaction Design"],
      duration: "6 months",
      impact: "Enhanced VR gesture intuitiveness by 45%",
      impactColor: "text-green-600",
      slug: "vr-hand-gestures"
    },
    {
      title: "Hyper-Localized Neighborhood Platform",
      description: "Researched and prototyped Chirp, a hyper-local app supporting community health through localized digital tools.",
      image: "/hyper.png",
      tags: ["Case Study", "Digital Health", "User-Centered Research", "Prototyping", "Product Design", "Research"],
      duration: "5 months",
      impact: "Increased neighborhood engagement by 60%",
      impactColor: "text-green-600",
      slug: "hyper-localized-neighborhood"
    }
  ];

  return (
    <>
      <ScrollToTop />
      <section className="bg-gray-50 dark:bg-gray-800 py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Featured Research Work
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A selection of impactful research projects that drove meaningful product 
              improvements and business outcomes
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            {projects.map((project, index) => (
              <div key={index} className="max-w-lg mx-auto lg:max-w-none">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}