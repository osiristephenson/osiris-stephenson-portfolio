import React from 'react';
import { ArrowLeft, Calendar, Users, Target, TrendingUp, X, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ChirpCaseStudyPage() {
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
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Chirp
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-green-600">
                Neighborhood Communication Research
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Investigated why neighborhood apps fail to build genuine community connections. Used behavioral research to understand trust barriers and designed interaction patterns that actually get neighbors talking.
              </p>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
              <div className="text-center">
                <Calendar className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">Duration</div>
                <div className="font-semibold text-gray-900">8 weeks</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">Team Size</div>
                <div className="font-semibold text-gray-900">5 members</div>
              </div>
              <div className="text-center">
                <Target className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">My Role</div>
                <div className="font-semibold text-gray-900">UX Researcher</div>
              </div>
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">Impact</div>
                <div className="font-semibold text-green-600">4.5/5 user satisfaction, 100% task completion</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Visual Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="w-full max-w-5xl">
              <img 
                src="/chirp_hero copy.png" 
                alt="Chirp case study hero visual showing the neighborhood platform design and research approach"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* At-A-Glance Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              At-A-Glance
            </h2>
            <div className="w-16 h-1 bg-green-600 mx-auto"></div>
          </div>
          
          {/* Full-width image display */}
          <div className="bg-gray-50 rounded-xl overflow-hidden">
            <img 
              src="/properGlance.png" 
              alt="Chirp case study at-a-glance overview showing correct role, timeline, team, and tools information"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Overview Section */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Overview
              </h2>
              <div className="w-16 h-1 bg-green-600 mx-auto mb-8"></div>
            </div>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                Neighborhood apps consistently fail to sustain engagement. Users download with community expectations but abandon within weeks due to trust barriers and irrelevant content. I investigated these behavioral patterns to design authentic hyper-local connections.
              </p>
            </div>
          </div>
        </section>

        {/* Research Approach Section */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Research Approach
              </h2>
              <div className="w-16 h-1 bg-green-600 mx-auto mb-8"></div>
            </div>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                To understand why digital neighborhoods fail, I:
              </p>
              
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">–</span>
                  <span>Tested core community interactions with 6 participants across trust-building scenarios</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">–</span>
                  <span>Analyzed Nextdoor's engagement failures through systematic competitive research</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">–</span>
                  <span>Developed evidence-based personas from behavioral interviews rather than demographic assumptions</span>
                </li>
              </ul>
              
              <p className="text-gray-600 leading-relaxed">
                Research centered on critical interaction moments: safe onboarding, stranger trust-building, and hyper-local content discovery.
              </p>
            </div>
          </div>
        </section>

        {/* Discover Section */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Discover
              </h2>
              <h3 className="text-xl text-gray-600 mb-8">
                Why Digital Neighborhoods Feel Empty
              </h3>
              <div className="w-16 h-1 bg-green-600 mx-auto mb-8"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Systematic research revealed three behavioral barriers that systematically destroy engagement in platforms like Nextdoor.
              </p>
            </div>

            <div className="max-w-4xl mx-auto text-center space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Local information discovery shouldn't require this much friction. Current platforms fail across trust (safety verification), relevance (content noise), and engagement (geographic mismatch).
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                The core research insight emerged:
              </p>
              
              <div className="bg-green-50 rounded-lg p-6 mt-8">
                <p className="text-xl font-semibold text-gray-900">
                  "Trust verification must precede community features—not follow them."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Space Section */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                PROBLEM SPACE
              </h2>
              <h3 className="text-xl text-gray-600 mb-8">
                Trust Comes First. Everything Else Is Secondary.
              </h3>
              <div className="w-16 h-1 bg-green-600 mx-auto mb-8"></div>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-gray-600 leading-relaxed mb-12">
                Behavioral research revealed the psychological prerequisites for neighborhood engagement online.
              </p>
            </div>
          </div>
        </section>

        {/* Beyond the Assumptions Section */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Beyond the Assumptions
              </h2>
              <div className="w-16 h-1 bg-green-600 mx-auto mb-8"></div>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                To validate community participation drivers, I developed evidence-based personas from systematic behavioral research rather than demographic assumptions.
              </p>
            </div>

            {/* Competitive Analysis Chart */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                <div className="bg-green-50 px-4 py-3 border-b border-gray-200">
                  <h4 className="text-lg font-bold text-gray-900 text-center">Why Chirp?</h4>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="w-1/2 px-4 py-3 text-center font-semibold text-gray-900 border-r border-gray-200">
                          Nextdoor
                        </th>
                        <th className="w-1/2 px-4 py-3 text-center font-semibold text-gray-900">
                          Chirp
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="w-1/2 px-4 py-4 border-r border-gray-200">
                          <div className="flex flex-col items-center space-y-2">
                            <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm text-center leading-relaxed">
                              Difficult to search for<br />relevant content
                            </span>
                          </div>
                        </td>
                        <td className="w-1/2 px-4 py-4">
                          <div className="flex flex-col items-center space-y-2">
                            <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm text-center leading-relaxed">
                              Dynamic and centralized<br />search experience
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="w-1/2 px-4 py-4 border-r border-gray-200">
                          <div className="flex flex-col items-center space-y-2">
                            <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm text-center leading-relaxed">
                              Content is not moderated
                            </span>
                          </div>
                        </td>
                        <td className="w-1/2 px-4 py-4">
                          <div className="flex flex-col items-center space-y-2">
                            <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm text-center leading-relaxed">
                              Content moderated by users<br />for safe interactions
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="w-1/2 px-4 py-4 border-r border-gray-200">
                          <div className="flex flex-col items-center space-y-2">
                            <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm text-center leading-relaxed">
                              Not hyper-localized
                            </span>
                          </div>
                        </td>
                        <td className="w-1/2 px-4 py-4">
                          <div className="flex flex-col items-center space-y-2">
                            <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm text-center leading-relaxed">
                              Hyper-localized<br />to foster a sense of community
                            </span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Meet Jill Smith Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 text-center">Meet Jill Smith</h3>
              <p className="text-lg text-gray-600 text-center">Emergency room nurse, mother of 3, new to Pilsen neighborhood</p>
              
              {/* Persona Image */}
              <div className="flex justify-center">
                <div className="w-full max-w-4xl">
                  <img 
                    src="/persona_jill copy.png" 
                    alt="Full Jill Smith persona with illustration, bio, values, goals, and frustrations"
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg font-semibold text-gray-900">
                  Core Research Insight: Safety verification functions as community quality signal, not just security feature—it's the foundation that enables all other interactions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Three Behavioral Barriers Section */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Three Behavioral Barriers Killing Engagement
              </h2>
              <div className="w-16 h-1 bg-green-600 mx-auto mb-8"></div>
            </div>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                Research identified: Users can't trust strangers, content feels irrelevant to their immediate area, and platforms prioritize scale over local relevance.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-lg">
                <strong>Key focus:</strong> Design for trust establishment before community features.
              </p>
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
                    When I asked users about their biggest neighborhood app frustration, every single person mentioned safety concerns before discussing any features.
                  </p>
                  <p className="text-blue-700 font-medium">
                    ➜ This flipped our entire design priority from features to trust-building mechanisms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Solution Section */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The Solution: Trust-First Community Design
              </h2>
              <div className="w-16 h-1 bg-green-600 mx-auto mb-8"></div>
            </div>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                Based on systematic user research, I designed interactions that:
              </p>
              
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">–</span>
                  <span>Verify real neighbors through address confirmation before any community access</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">–</span>
                  <span>Enable community-driven moderation instead of relying on distant algorithms</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">–</span>
                  <span>Focus on hyper-local "Nests" within actual walking distance</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Validation Section */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Validation
              </h2>
              <div className="w-16 h-1 bg-green-600 mx-auto mb-8"></div>
            </div>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                I tested the trust-first approach with 6 participants using real community scenarios:
              </p>
            </div>

            {/* User Flow Documentation Section */}
            <div className="space-y-6">
              {/* Flow Diagrams - Side by side on desktop, stacked on mobile */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Mobile Flow */}
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg overflow-hidden">
                    <img 
                      src="/mobile_useval.png" 
                      alt="Mobile user flows showing account creation, content reporting, and nest exploration paths"
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed text-center">
                    Mobile user flows showing account creation, content reporting, and nest exploration paths
                  </p>
                </div>

                {/* Website Flow */}
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg overflow-hidden">
                    <img 
                      src="/webeval.png" 
                      alt="Website user flows demonstrating cross-platform consistency while accommodating different interaction patterns"
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed text-center">
                    Website user flows demonstrating cross-platform consistency while accommodating different interaction patterns
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 text-center">Research Results:</h3>
              <div className="max-w-3xl mx-auto">
                <ul className="space-y-4 text-gray-700 text-lg">
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 font-bold">–</span>
                    <span><strong>Address verification:</strong> 100% completion with high user confidence</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 font-bold">–</span>
                    <span><strong>Community reporting:</strong> Users felt empowered to moderate their space</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 font-bold">–</span>
                    <span><strong>Local discovery:</strong> 4.5/5 satisfaction with finding relevant neighborhood content</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 font-bold">–</span>
                    <span><strong>Overall task completion:</strong> Perfect success rate across all primary flows</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What the Research Actually Changed Section */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What the Research Actually Changed
              </h2>
              <div className="w-16 h-1 bg-green-600 mx-auto mb-8"></div>
            </div>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                User feedback drove 11 specific design improvements across three categories:
              </p>
            </div>

            {/* Trust Mechanics */}
            <div className="space-y-6 max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900">Trust Mechanics</h3>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">–</span>
                  <span>Camera-first verification on mobile (easier than typing addresses)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">–</span>
                  <span>Multiple verification options (bills, letters) for different situations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">–</span>
                  <span>Clear explanations for why verification builds community safety</span>
                </li>
              </ul>
            </div>

            {/* Community Interaction */}
            <div className="space-y-6 max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900">Community Interaction</h3>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">–</span>
                  <span>"Join" → "Visit" terminology (aligns with user mental models)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">–</span>
                  <span>User-driven content moderation empowers community ownership</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">–</span>
                  <span>Hyper-local "Nests" instead of broad neighborhood boundaries</span>
                </li>
              </ul>
            </div>

            {/* Information Architecture */}
            <div className="space-y-6 max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900">Information Architecture</h3>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">–</span>
                  <span>"Your" → "My" personalization throughout the interface</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">–</span>
                  <span>Hidden reported content maintains information quality</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">–</span>
                  <span>Progressive disclosure in onboarding reduces cognitive load</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Research Validation Section */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Research Validation
              </h2>
              <div className="w-16 h-1 bg-green-600 mx-auto mb-8"></div>
            </div>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                The systematic research approach delivered measurable behavioral insights:
              </p>
              
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">–</span>
                  <span>100% task completion across primary user flows</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">–</span>
                  <span>4.5/5 satisfaction scores validate trust-first design direction</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">–</span>
                  <span>Users demonstrated genuine confidence in engaging with verified neighbors</span>
                </li>
              </ul>
            </div>

            {/* High-Quality Mobile and Desktop Images */}
            <div className="space-y-12 max-w-5xl mx-auto">
              {/* Mobile Section */}
              <div className="space-y-6">
                <h4 className="text-lg font-bold text-gray-900 text-center">Mobile: Login → Feed → My Nests → Nest Detail</h4>
                
                {/* Mobile Image Grid - 4 screens in a row */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <img 
                      src="/mobile_1.png" 
                      alt="Mobile login screen with clean interface and authentication options"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                    <p className="text-sm text-gray-600 text-center">Login</p>
                  </div>
                  
                  <div className="space-y-2">
                    <img 
                      src="/mobile_2.png" 
                      alt="Mobile feed view showing community posts and neighborhood activity"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                    <p className="text-sm text-gray-600 text-center">My Feed</p>
                  </div>
                  
                  <div className="space-y-2">
                    <img 
                      src="/mobile_3.png" 
                      alt="Mobile my nests view displaying user's joined communities and popular groups"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                    <p className="text-sm text-gray-600 text-center">My Nests</p>
                  </div>
                  
                  <div className="space-y-2">
                    <img 
                      src="/mobile_4.png" 
                      alt="Mobile nest detail view showing specific community content and member interactions"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                    <p className="text-sm text-gray-600 text-center">Nest Detail</p>
                  </div>
                </div>
              </div>

              {/* Desktop Section */}
              <div className="space-y-6">
                <h4 className="text-lg font-bold text-gray-900 text-center">Desktop: Login → Feed → Popular Nests → Nest Detail</h4>
                
                {/* Desktop Image Grid - 2x2 layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <img 
                      src="/options_1.png" 
                      alt="Desktop login screen with welcome message and authentication options"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                    <p className="text-sm text-gray-600 text-center">Login Screen</p>
                  </div>
                  
                  <div className="space-y-2">
                    <img 
                      src="/_2.png" 
                      alt="Desktop feed view showing community posts and neighborhood activity"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                    <p className="text-sm text-gray-600 text-center">My Feed</p>
                  </div>
                  
                  <div className="space-y-2">
                    <img 
                      src="/_3.png" 
                      alt="Desktop popular nests view displaying various community groups and interests"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                    <p className="text-sm text-gray-600 text-center">Popular Nests</p>
                  </div>
                  
                  <div className="space-y-2">
                    <img 
                      src="/_4.png" 
                      alt="Desktop nest detail view showing specific community content and member interactions"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                    <p className="text-sm text-gray-600 text-center">Nest Detail</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Research Learnings Section */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Key Research Learnings
              </h2>
              <div className="w-16 h-1 bg-green-600 mx-auto mb-8"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Behavioral Insights */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">Behavioral Insights:</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 font-bold">–</span>
                    <span>Users won't engage until they feel safe—no exceptions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 font-bold">–</span>
                    <span>Community ownership beats platform control for content quality</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 font-bold">–</span>
                    <span>Proximity drives relevance more than algorithmic recommendations</span>
                  </li>
                </ul>
              </div>

              {/* Research Impact */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">Research Impact:</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-600 font-bold">–</span>
                    <span>Trust-building mechanisms must precede feature complexity</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-600 font-bold">–</span>
                    <span>Address verification functions as community quality signal, not just safety feature</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-600 font-bold">–</span>
                    <span>Hyper-local focus creates genuine neighborhood engagement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation to other projects */}
        <section className="py-16 border-t border-gray-200">
          <div className="text-center">
            <Link 
              to="/" 
              className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              <span>View More Projects</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}