import React from 'react';
import { ArrowLeft, Calendar, Users, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlueBotleCaseStudyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Portfolio</span>
            </Link>
            <Link 
              to="/" 
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <img 
                  src="/mainlogo.png" 
                  alt="Osiris Stephenson Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-100 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Blue Bottle Coffee Redesign
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Redesigned the mobile experience by restructuring Blue Bottle's information architecture. Led user research using card sorting and tree testing to surface mental models and remove friction across key journeys.
              </p>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
              <div className="text-center">
                <Calendar className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">Duration</div>
                <div className="font-semibold text-gray-900">4 months</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">Team Size</div>
                <div className="font-semibold text-gray-900">3 members</div>
              </div>
              <div className="text-center">
                <Target className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">My Role</div>
                <div className="font-semibold text-gray-900">UX Researcher</div>
              </div>
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">Impact</div>
                <div className="font-semibold text-green-600">Improved task success rates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* At-A-Glance Section - Using the uploaded image */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              At-A-Glance
            </h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto"></div>
          </div>
          
          {/* Full-width image display */}
          <div className="bg-gray-50 rounded-xl overflow-hidden">
            <img 
              src="/bbc_glance.png" 
              alt="Blue Bottle Coffee case study at-a-glance overview"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Overview
              </h2>
              <div className="w-16 h-1 bg-amber-600 mx-auto mb-8"></div>
            </div>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Through systematic user research, I identified critical navigation barriers preventing customers from discovering products and managing subscriptions. The redesign prioritized user mental models over business-driven categorization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Approach Section */}
      <section className="py-16 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Research Approach
              </h2>
              <div className="w-16 h-1 bg-amber-600 mx-auto mb-8"></div>
            </div>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                To pinpoint navigation failure points, I conducted:
              </p>
              
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-start space-x-3">
                  <span className="text-amber-600 font-bold">–</span>
                  <span>Usability testing with 12 participants across 5 critical navigation scenarios</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-amber-600 font-bold">–</span>
                  <span>Tree testing to validate information architecture and identify structural gaps</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-amber-600 font-bold">–</span>
                  <span>Behavioral interviews with 8 participants to understand decision-making patterns</span>
                </li>
              </ul>
              
              <p className="text-gray-600 leading-relaxed">
                Research centered on high-impact scenarios: equipment discovery, subscription management, and local store information—areas where task failure directly impacted business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Section */}
      <section className="py-16 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Discover
              </h2>
              <h3 className="text-xl text-gray-600 mb-8">
                Understanding User Navigation Challenges
              </h3>
              <div className="w-16 h-1 bg-amber-600 mx-auto mb-8"></div>
            </div>

            {/* Body Copy */}
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Tree testing revealed systematic navigation failures across core user journeys. Success rates varied dramatically, exposing fundamental usability barriers:
              </p>
            </div>

            {/* Updated Discover Image - Using newx2.png with improved vertical alignment */}
            <div className="flex justify-center mb-8">
              <div className="w-full max-w-5xl">
                <img 
                  src="/newx2.png" 
                  alt="Tree testing results showing user navigation success rates across different categories"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Supporting Text */}
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Product discovery shouldn't require this much effort. Success rates spanning 81.8% (brew equipment) to 27.3% (store information) revealed critical structural problems.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                The core research question became:
              </p>
              
              <div className="bg-amber-50 rounded-lg p-6 mt-8">
                <p className="text-xl font-semibold text-gray-900">
                  "What structural barriers prevent users from completing their goals?"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Space Section - Updated with proper header structure */}
      <section className="py-16 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                PROBLEM SPACE
              </h2>
              <h3 className="text-xl text-gray-600 mb-8">
                Navigation Is Not Working... Yet.
              </h3>
              <div className="w-16 h-1 bg-amber-600 mx-auto mb-8"></div>
            </div>

            {/* Explanatory text - grey but not italicized */}
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-gray-600 leading-relaxed mb-12">
                So, I explored the data further to uncover where the real pain points lie.
              </p>
            </div>

            {/* Updated to use goodBoy.png */}
            <div className="flex justify-center">
              <div className="w-full max-w-5xl">
                <img 
                  src="/goodBoy.png" 
                  alt="Navigation analysis showing current challenges and areas for improvement"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond the Numbers Section */}
      <section className="py-16 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Beyond the Numbers
              </h2>
              <div className="w-16 h-1 bg-amber-600 mx-auto mb-8"></div>
            </div>

            {/* Intro Text */}
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                I wanted to verify if those numbers reflect reality. So, I conducted interviews to gather insights from various participants.
              </p>
            </div>

            {/* Quote Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Dominique Wright Quote */}
              <div className="bg-slate-700 rounded-xl p-6 text-white relative">
                <div className="text-4xl text-blue-400 mb-4">&ldquo;</div>
                <p className="text-gray-200 mb-6 leading-relaxed">
                  I struggled to find the subscription plan section, but the new design made it intuitive.
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">DW</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Dominique Wright</div>
                    <div className="text-gray-400 text-sm">Software Engineer</div>
                  </div>
                </div>
              </div>

              {/* Jenny Girodo Quote */}
              <div className="bg-amber-50 rounded-xl p-6 relative">
                <div className="text-4xl text-amber-600 mb-4">&ldquo;</div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The contrast ratio meets standards and is easy to read for visually impaired users.
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">JG</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Jenny Girodo</div>
                    <div className="text-gray-600 text-sm">Graphic Designer</div>
                  </div>
                </div>
              </div>

              {/* Amy Burgin Quote */}
              <div className="bg-purple-100 rounded-xl p-6 relative">
                <div className="text-4xl text-purple-600 mb-4">&ldquo;</div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The navigation flow significantly improved efficiency when locating resources.
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">AB</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Amy Burgin</div>
                    <div className="text-gray-600 text-sm">Mental Health Therapist</div>
                  </div>
                </div>
              </div>

              {/* Safiya Andrews Quote */}
              <div className="bg-green-50 rounded-xl p-6 relative">
                <div className="text-4xl text-green-600 mb-4">&ldquo;</div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  It really works wonders in hybrid culture. No echo and seamless integration in this workflow. Love this.
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">SA</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Safiya Andrews</div>
                    <div className="text-gray-600 text-sm">Sr. Tax Associate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Core Usability Challenges Section - Updated with brah.png */}
      <section className="py-16 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Two Core Usability Challenges
              </h2>
              <div className="w-16 h-1 bg-amber-600 mx-auto mb-8"></div>
            </div>

            {/* Updated Image with Built-in Captions */}
            <div className="flex justify-center mb-8">
              <div className="w-full max-w-5xl">
                <img 
                  src="/brah.png" 
                  alt="AS IS to PROBLEM analysis showing current state challenges and identified issues with plain-language explanations"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Summary text beneath image */}
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Challenges identified:</strong> Users struggle with discovering product categories and navigating poorly optimized pages.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Key focus:</strong> Reducing cognitive load and ensuring intuitive pathways to streamline the browsing and purchasing experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Impact Callout Box */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <div className="text-2xl">🔎</div>
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-900">Research Impact Example</h3>
                <p className="text-gray-700 leading-relaxed">
                  When 81.8% of users struggled to find brewing equipment, follow-up interviews revealed they expected it under "Shop" rather than scattered across multiple categories.
                </p>
                <p className="text-blue-700 font-medium">
                  ➜ This directly informed the consolidated navigation structure in the redesign.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Preview Section - Updated with Before/After visuals */}
      <section className="py-16 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The Solution: Streamlined Navigation Architecture
              </h2>
              <div className="w-16 h-1 bg-amber-600 mx-auto mb-8"></div>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Based on research findings, I redesigned the information architecture to:
              </p>
              
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-start space-x-3">
                  <span className="text-amber-600 font-bold">–</span>
                  <span>Consolidate related categories (e.g. Equipment, Bundles → unified "Brew Tools")</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-amber-600 font-bold">–</span>
                  <span>Reduce cognitive load by eliminating redundant navigation paths</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-amber-600 font-bold">–</span>
                  <span>Prioritize user mental models over business-driven labels</span>
                </li>
              </ul>
            </div>

            {/* Before/After Visual Comparison */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
              {/* Before Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 text-center">Before: Content Overload Without Clear Structure</h3>
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <img 
                    src="/beforesheet.png" 
                    alt="Before: Detailed spreadsheet-style inventory showing deep, scattered, and inconsistent information architecture"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Conducted a detailed page inventory to uncover structural inconsistencies and pinpoint navigation issues across the site.
                </p>
              </div>

              {/* After Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 text-center">After: Streamlined Final Sitemap</h3>
                <div className="bg-amber-50 rounded-lg overflow-hidden">
                  <img 
                    src="/cleanedUp.png" 
                    alt="After: Clean, intuitive hierarchy with grouped items and user-centered structure"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Redesigned the information architecture using research insights to streamline navigation, reduce redundancy, and align with user behavior.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Validation Section */}
      <section className="py-16 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Validation
              </h2>
              <div className="w-16 h-1 bg-amber-600 mx-auto mb-8"></div>
            </div>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                I tested the redesigned navigation structure with 6 participants using the same core tasks:
              </p>
              
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">–</span>
                  <span><strong>Equipment location:</strong> 100% success (up from 81.8%)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">–</span>
                  <span><strong>Subscription discovery:</strong> 83% success (up from 36.4%)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">–</span>
                  <span><strong>Overall task completion:</strong> Average improvement of 67%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Experience Guide Section */}
      <section className="py-16 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Subscription Experience Guide: Tailored, Simple, Convenient
              </h2>
              <div className="w-16 h-1 bg-amber-600 mx-auto mb-8"></div>
            </div>

            {/* Description Text */}
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                Say goodbye to confusion and tedious ordering processes. Blue Bottle Coffee's redesigned subscription flow makes managing orders, personalizing preferences, and exploring offerings seamless and enjoyable for coffee lovers everywhere.
              </p>
            </div>

            {/* Section Image - Updated to use subexpFix.png */}
            <div className="flex justify-center">
              <div className="w-full max-w-5xl">
                <img 
                  src="/subexpFix.png" 
                  alt="Blue Bottle Coffee subscription experience guide showing mobile mockups of the redesigned interface"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Learnings & Next Steps Section */}
      <section className="py-16 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Key Learnings & Next Steps
              </h2>
              <div className="w-16 h-1 bg-amber-600 mx-auto mb-8"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Key Learnings */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">Key Learnings:</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <span className="text-amber-600 font-bold">–</span>
                    <span>Users don't think in business categories — they think in tasks and goals</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-amber-600 font-bold">–</span>
                    <span>Navigation success isn't just about findability — it's about confidence</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-amber-600 font-bold">–</span>
                    <span>Small structural tweaks have big impacts on usability</span>
                  </li>
                </ul>
              </div>

              {/* Next Steps */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">Next Steps:</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-600 font-bold">–</span>
                    <span>Conduct full-prototype usability testing</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-600 font-bold">–</span>
                    <span>Validate subscription flow improvements with real customer data</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to other projects */}
      <section className="py-16 border-t border-gray-200">
        <div className="text-center">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 bg-amber-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors"
          >
            <span>View More Projects</span>
          </Link>
        </div>
      </section>
    </div>
  );
}