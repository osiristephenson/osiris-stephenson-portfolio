import React from 'react';
import { ArrowLeft, Calendar, Users, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CaseStudyPage() {
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
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Intervention Management Research
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Designing and researching intervention management systems for FigFlagV2, focusing on learning analytics, data visualization, and inclusive design principles to improve educational outcomes.
              </p>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
              <div className="text-center">
                <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">Duration</div>
                <div className="font-semibold text-gray-900">9 months</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">Team Size</div>
                <div className="font-semibold text-gray-900">5 members</div>
              </div>
              <div className="text-center">
                <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">My Role</div>
                <div className="font-semibold text-gray-900">Lead UX Researcher</div>
              </div>
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">Impact</div>
                <div className="font-semibold text-green-600">35% improvement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* At-A-Glance Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              At-A-Glance: FigFlagV2
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column */}
              <div className="space-y-8">
                {/* My Role */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">My Role</h3>
                  <p className="text-gray-700 leading-relaxed">
                    UX Researcher – Embedded field research, behavioral observation, Insight Ops
                  </p>
                </div>

                {/* Timeline */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Timeline</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Fresno, CA<br />
                    Nine months
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Stakeholders */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Stakeholders</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Alexis Ochoa, Special Ed Psychologist<br />
                    Ying Thao, SDC Lead Teacher
                  </p>
                </div>

                {/* Tools */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Tools</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Figma, TallyFlex, Miro, Atlas.ti, ABC Logs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: Problem Discovery */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Problem Discovery
              </h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>
            
            {/* Narrative Content */}
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                Behavioral data drives IEP decisions, but educators were drowning in fragmented paper systems that made intervention tracking nearly impossible.
              </p>
              
              <p className="text-gray-600 leading-relaxed italic">
                Manual tracking across phonics, fluency, and comprehension created data silos. Hand-marked color coding made pattern recognition impossible and intervention decisions reactive rather than proactive.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-lg">
                Through embedded research in two Special Day Classrooms, I mapped real workflows and uncovered a critical gap: educators couldn't identify at-risk students, track intervention effectiveness, or make data-driven decisions within their existing systems.
              </p>
            </div>

            {/* Screenshots - Single Image */}
            <div className="space-y-8 mt-12">
              <div className="flex justify-center">
                <div className="w-full max-w-2xl">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                    <img 
                      src="/picture_runs.png" 
                      alt="Paper-based tracking sheets showing manual data collection methods used before the digital intervention system"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Quote Caption - positioned right after the tracking sheet images */}
              <div className="text-center mt-6">
                <p className="text-gray-700 italic text-lg leading-relaxed">
                  "I'm more concerned about students who need intervention- so any type of flag or code that would tell me I need to look at a particular kid's score" — Alexis (School Psych)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: 🔍 Data Breakdown: Two Classrooms, Two Stories */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                🔍 Data Breakdown: Two Classrooms, Two Stories
              </h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>

            {/* Body Text */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                Data visualization revealed stark performance disparities that existing systems couldn't surface or address systematically.
              </p>
            </div>

            {/* Chart Bullets for Harralson and Hernandez classes */}
            <div className="space-y-6 mt-8">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">📊</span>
                <div>
                  <p className="text-lg font-semibold text-gray-900">Ms. Harralson's Class – Only 19% below 80%</p>
                  <p className="text-gray-600">📁 BPST score dist – Harralson</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-2xl">📊</span>
                <div>
                  <p className="text-lg font-semibold text-gray-900">Ms. Hernandez's Class – 63% below 80%</p>
                  <p className="text-gray-600">📁 BPST score dist – Hernandez</p>
                </div>
              </div>
            </div>

            {/* Italicized insight at the bottom */}
            <div className="mt-12 bg-blue-50 rounded-lg p-8">
              <p className="text-gray-800 italic text-lg leading-relaxed text-center">
                Research revealed a fundamental disconnect: rich assessment data existed, but no systematic pathway translated insights into targeted interventions. Each classroom's unique needs demanded personalized support strategies.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: 🚧 Problem Space: What wasn't working */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                🚧 Problem Space: What wasn't working
              </h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>

            {/* Clean list of four pain points */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">No Visual Indicators</h3>
                <p className="text-gray-700 leading-relaxed">
                  Teachers couldn't quickly identify which students needed immediate intervention support without manually reviewing all data points.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">No Actionable Next Steps</h3>
                <p className="text-gray-700 leading-relaxed">
                  Data collection existed in isolation without clear pathways to specific intervention strategies or resources.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">No Way to Track Over Time</h3>
                <p className="text-gray-700 leading-relaxed">
                  Progress monitoring was fragmented across multiple paper systems, making it impossible to see intervention effectiveness.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">High Cognitive Load</h3>
                <p className="text-gray-700 leading-relaxed">
                  Teachers spent excessive mental energy interpreting data rather than focusing on instruction and student support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: 🛠 From Feedback to Features */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                🛠 From Feedback to Features
              </h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>

            {/* Paragraph intro */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                Stakeholder feedback and behavioral observations directly informed feature requirements. Each capability addressed documented workflow friction points.
              </p>
            </div>

            {/* Bulleted list with bold titles and descriptions */}
            <div className="space-y-6 mt-8">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <p className="text-lg">
                    <span className="font-bold text-gray-900">Visual Flag System</span> → Immediate visual indicators for students requiring intervention support
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <p className="text-lg">
                    <span className="font-bold text-gray-900">Intervention Recommendations</span> → Automated suggestions based on assessment data patterns
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <p className="text-lg">
                    <span className="font-bold text-gray-900">Progress Tracking Dashboard</span> → Centralized view of intervention effectiveness over time
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <p className="text-lg">
                    <span className="font-bold text-gray-900">Simplified Data Entry</span> → Streamlined input methods to reduce cognitive overhead
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transition Section */}
        <section className="py-12">
          <div className="text-center">
            <p className="text-gray-500 italic text-lg font-light">
              💬 Scroll down to see how these operational decisions came directly from in-the-moment School psych feedback
            </p>
          </div>
        </section>

        {/* Section 5: 01. Insight to Feature: Intervention Needs Flag */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                01. Insight to Feature: Intervention Needs Flag
              </h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>

            {/* Clean Screenshot - No duplicate title, no caption */}
            <div className="flex justify-center">
              <div className="w-full max-w-4xl">
                <img 
                  src="/firstSection.png" 
                  alt="Section 01 - Insight to Feature showing intervention needs flag development process"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: 02. Feature Feedback: Clickable Logic */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                02. Feature Feedback: Clickable Logic
              </h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>

            {/* First Screenshot - Feedback Request */}
            <div className="flex justify-center">
              <div className="w-full max-w-4xl">
                <img 
                  src="/clickableLogic.png" 
                  alt="Feature feedback showing clickable logic implementation and user interaction flow"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Updated Guide Text - positioned after first screenshot */}
            <div className="py-6">
              <div className="text-center">
                <p className="text-gray-500 italic text-lg font-light">
                  💬 Insights that shaped the design:
                </p>
              </div>
            </div>

            {/* Standalone UI Row - Final result */}
            <div className="flex justify-center">
              <div className="w-full max-w-4xl">
                <img 
                  src="/clickLogic.png" 
                  alt="Clickable logic update result showing clean UI implementation"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: 03. Insight to Instruction: Strategy, Not Just Scores */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                03. Insight to Instruction: Strategy, Not Just Scores
              </h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
            </div>

            {/* Section Image */}
            <div className="flex justify-center">
              <div className="w-full max-w-4xl">
                <img 
                  src="/thirdSection.png" 
                  alt="Section 03 - Insight to instruction showing strategy-focused approach beyond just scores"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: 04. Closing The Loop: Progress Monitoring */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                04. Closing The Loop: Progress Monitoring
              </h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>

            {/* Section Image */}
            <div className="flex justify-center">
              <div className="w-full max-w-4xl">
                <img 
                  src="/04. Closing.png" 
                  alt="Progress monitoring workflow showing how intervention plans are tracked and monitored over time"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: 05. From Raw Scores to Readable Insights */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                05. From Raw Scores to Readable Insights
              </h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>

            {/* Section Image */}
            <div className="flex justify-center">
              <div className="w-full max-w-4xl">
                <img 
                  src="/beR.png" 
                  alt="Data visualization showing transformation from raw scores to readable insights with actionable recommendations"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* System-Level Note */}
        <section className="py-12">
          <div className="text-center">
            <p className="text-gray-600 italic text-lg leading-relaxed max-w-4xl mx-auto">
              What started with feedback from just two teachers later scaled into a broader system used by 20+ educators across Fig Garden Elementary, streamlining quarterly BPST assessments and enabling IEP-aligned interventions and scatterplot tracking.
            </p>
          </div>
        </section>

        {/* Section 10: 06. 🧠🎧 Reflection & System Impact */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                06. Reflection & System Impact
              </h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>

            {/* Section Image */}
            <div className="flex justify-center">
              <div className="w-full max-w-4xl">
                <img 
                  src="/s6.png" 
                  alt="Reflection and system impact showing operationalizing research into a repeatable system"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Closing Note */}
            <div className="text-center mt-12">
              <p className="text-gray-600 italic text-lg leading-relaxed max-w-3xl mx-auto">
                What started as targeted research in two classrooms scaled to serve 20+ educators across Fig Garden Elementary. The system now drives quarterly BPST assessments, IEP-aligned intervention planning, and data-rich visualizations that transform how teams make student support decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Navigation to other projects */}
        <section className="py-16 border-t border-gray-200">
          <div className="text-center">
            <Link 
              to="/" 
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              <span>View More Projects</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}