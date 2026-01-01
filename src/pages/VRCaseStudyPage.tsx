import React from 'react';
import { ArrowLeft, Calendar, Users, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function VRCaseStudyPage() {
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
      <section className="bg-gradient-to-br from-purple-50 to-indigo-100 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Breaking the Gesture Barrier
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-purple-600">
                Why VR Hand Interactions Fail Users
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Through systematic behavioral observation, I uncovered why users abandon VR precision tasks within 30 seconds. The culprit isn't technology limitations—it's a fundamental mismatch between gesture complexity and human motor patterns that breaks user confidence.
              </p>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
              <div className="text-center">
                <Calendar className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">Duration</div>
                <div className="font-semibold text-gray-900">6 months</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">Research Setting</div>
                <div className="font-semibold text-gray-900">DePaul HCI Lab</div>
              </div>
              <div className="text-center">
                <Target className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">My Role</div>
                <div className="font-semibold text-gray-900">Lead UX Researcher</div>
              </div>
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">Impact</div>
                <div className="font-semibold text-green-600">Redefined gesture design principles</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* At-A-Glance Section */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                At-A-Glance
              </h2>
              <div className="w-16 h-1 bg-purple-600 mx-auto mb-8"></div>
            </div>
            
            {/* Card-styled image display matching Research Approach section */}
            <div className="flex justify-center mt-12">
              <div className="w-full max-w-4xl">
                <img 
                  src="/lastLaugh.png" 
                  alt="VR case study at-a-glance overview showing role, team, tools, and timeline information"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Overview
              </h2>
              <div className="w-16 h-1 bg-purple-600 mx-auto mb-8"></div>
            </div>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                VR adoption fails due to gesture complexity, not content limitations. Through systematic behavioral observation, I uncovered why users abandon precision tasks within 30 seconds and identified the motor patterns that predict interaction success.
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
              <div className="w-16 h-1 bg-purple-600 mx-auto mb-8"></div>
            </div>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                To bridge the gap between gesture design assumptions and user behavior, I:
              </p>
              
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start space-x-3">
                  <span className="text-purple-600 font-bold">–</span>
                  <span>Observed 6 participants across gaming, professional, and social VR contexts</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple-600 font-bold">–</span>
                  <span>Conducted behavioral interviews focusing on accuracy expectations, learning patterns, and fatigue thresholds</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple-600 font-bold">–</span>
                  <span>Applied multi-angle video analysis to capture micro-interactions invisible to single-perspective observation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple-600 font-bold">–</span>
                  <span>Synthesized findings through AEIOU framework and affinity mapping to surface behavioral patterns</span>
                </li>
              </ul>
              
              <p className="text-gray-600 leading-relaxed">
                Research prioritized precision tasks, extended use scenarios, and the critical transition from novice frustration to confident interaction.
              </p>
            </div>

            {/* Research Method Image */}
            <div className="flex justify-center mt-12">
              <div className="w-full max-w-4xl">
                <img 
                  src="/clusterAffinity.png" 
                  alt="Thematic synthesis of participant data using AEIOU and affinity mapping"
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <p className="text-sm text-gray-600 leading-relaxed text-center mt-4">
                  Thematic synthesis of participant data using AEIOU and affinity mapping. This framework surfaced patterns around gesture complexity, user frustration, and system responsiveness.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Raw Data Analysis Section */}
        <section className="py-16 border-b border-gray-100">
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <img 
                src="/observationAffinity.png" 
                alt="Raw data affinity mapping of participant quotes and observations"
                className="w-full h-auto rounded-lg shadow-md"
              />
              <p className="text-sm text-gray-600 leading-relaxed text-center mt-4">
                Raw data affinity mapping of participant quotes and observations. This open coding phase revealed consistent frustration patterns across precision gestures, forming the foundation for our behavioral insights.
              </p>
            </div>
          </div>
        </section>

        {/* Key Behavioral Findings Section */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Key Behavioral Findings
              </h2>
              <h3 className="text-xl text-gray-600 mb-8">
                The Gesture Complexity Cliff
              </h3>
              <div className="w-16 h-1 bg-purple-600 mx-auto mb-8"></div>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Behavioral analysis revealed a critical complexity threshold that predicts user success or abandonment:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-green-800 mb-3">Simple Gestures</h4>
                  <p className="text-green-700 text-lg font-semibold mb-2">~6 second completion</p>
                  <p className="text-gray-700">Broad movements like waving, pointing, or large selections succeeded consistently with minimal cognitive load.</p>
                </div>
                
                <div className="bg-red-50 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-red-800 mb-3">Precision Gestures</h4>
                  <p className="text-red-700 text-lg font-semibold mb-2">~21 second failure loops</p>
                  <p className="text-gray-700">Fine motor tasks like pinching, precise selection, or multi-step combinations triggered repeated failure cycles.</p>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto space-y-6 mt-12">
              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">Critical Incident: Frank's Browser Interaction</h4>
                <p className="text-gray-800 italic text-lg leading-relaxed mb-3">
                  "It closed my browser and went to the cross button. This is so frustrating."
                </p>
                <p className="text-red-700 font-medium">
                  → Precision failures cascade beyond task interruption—they destroy system confidence and trigger abandonment behaviors.
                </p>
              </div>
              
              <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">Pattern: Physical Fatigue Compounds Frustration</h4>
                <p className="text-gray-800 italic text-lg leading-relaxed mb-3">
                  "I kept pinching wrong — my arms were getting tired."
                </p>
                <p className="text-orange-700 font-medium">
                  → Extended precision attempts led to physical strain, creating a negative feedback loop.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Four Critical Barriers Section */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Four Critical Barriers to VR Gesture Success
              </h2>
              <div className="w-16 h-1 bg-purple-600 mx-auto mb-8"></div>
            </div>

            <div className="space-y-6">
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. The Precision Cliff</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <em>"It's not as accurate as a pencil stroke."</em> — Frank
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>Behavioral Impact:</strong> Fine motor gestures consistently failed, breaking user flow and creating repeated failure cycles.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Cognitive Overload</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <em>"I wish there was a gesture for scrolling, and another for selecting."</em> — Jay
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>Behavioral Impact:</strong> Complex gesture vocabularies created mental burden, forcing users to remember arbitrary mappings instead of relying on natural movement.
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Physical Unsustainability</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <em>"I kept pinching wrong — my arms were getting tired."</em> — Frank
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>Behavioral Impact:</strong> Extended use led to arm fatigue within 30 minutes, reducing precision and increasing frustration.
                </p>
              </div>

              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">4. System Inconsistency</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <em>"Scrolling worked, but selecting things was tricky."</em> — Frank
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>Behavioral Impact:</strong> Inconsistent gesture recognition reduced user confidence and created unpredictable interaction patterns.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Participant Interactions in Context Section */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Participant Interactions in Context
              </h2>
              <div className="w-16 h-1 bg-purple-600 mx-auto mb-8"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Frank Section */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 text-center">Frank: Adaptation Strategy</h3>
                
                <div className="rounded-lg overflow-hidden shadow-md aspect-[4/3]">
                  <img 
                    src="/nic.png" 
                    alt="Frank attempting gesture input"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="rounded-lg overflow-hidden shadow-md aspect-[4/3]">
                  <img 
                    src="/ciara.png" 
                    alt="Frank using the virtual keyboard"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <p className="text-sm text-gray-600 leading-relaxed text-center">
                  Frank initially attempts gesture-based input but switches mid-task to the virtual keyboard after repeated failures. This adaptation allowed him to complete the task more efficiently.
                </p>
              </div>

              {/* Jay Section */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 text-center">Jay: Interface Perspective</h3>
                
                <div className="rounded-lg overflow-hidden shadow-md aspect-[4/3]">
                  <img 
                    src="/dontLikeElan.png" 
                    alt="Jay's point-of-view during VR interaction showing interface complexity"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="rounded-lg overflow-hidden shadow-md aspect-[4/3]">
                  <img 
                    src="/pinchToRecenter.png" 
                    alt="Jay performing pinch gesture to recenter the VR interface"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <p className="text-sm text-gray-600 leading-relaxed text-center">
                  Jay's point-of-view highlights the mental load of managing multiple VR interface elements. She alternates between precision-based selection and corrective gestures like pinching to recenter the screen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Design Implications Section */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Design Implications
              </h2>
              <div className="w-16 h-1 bg-purple-600 mx-auto mb-8"></div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Core Insight: Gesture complexity, not accuracy, determines user trust
                </h3>
              </div>
              
              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Based on systematic behavioral analysis, I developed four evidence-based design principles:
                </p>
                
                <ul className="space-y-4 text-gray-700 text-lg">
                  <li className="flex items-start space-x-3">
                    <span className="text-purple-600 font-bold">1.</span>
                    <span><strong>Align with Natural Motor Patterns:</strong> Design gestures that leverage existing muscle memory rather than requiring new motor learning</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-purple-600 font-bold">2.</span>
                    <span><strong>Separate Complex Interactions:</strong> Avoid overloading single gestures with multiple meanings or requiring precise timing</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-purple-600 font-bold">3.</span>
                    <span><strong>Design for Physical Sustainability:</strong> Consider arm fatigue and ergonomic constraints in extended use scenarios</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-purple-600 font-bold">4.</span>
                    <span><strong>Provide Immediate Feedback:</strong> Combine visual and haptic cues to build user confidence in gesture recognition</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Research Impact Section */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Research Impact & Recommendations
              </h2>
              <div className="w-16 h-1 bg-purple-600 mx-auto mb-8"></div>
            </div>
            
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-2">Quantified Behavioral Patterns:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Simple gestures: 6-second completion, low cognitive load</li>
                    <li>• Complex gestures: 21-second failure cycles, 100% abandonment</li>
                    <li>• Fatigue threshold: Universal arm strain within 30 minutes</li>
                    <li>• Learning curve: Trial-and-error without guidance caused frustration</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-2">Actionable Design Changes:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Redesign precision gestures for fine-motor accuracy</li>
                    <li>• Implement real-time haptic + visual feedback systems</li>
                    <li>• Create gesture vocabulary based on motor patterns, not menu logic</li>
                    <li>• Support seated/standing modes with customizable sensitivity</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">Research Methodology Impact</h4>
                <p className="text-gray-700 leading-relaxed">
                  The multi-perspective observation approach revealed behavioral patterns invisible in traditional usability testing. By focusing on failure moments rather than success metrics, I uncovered fundamental design assumptions that needed challenging.
                </p>
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
              <div className="w-16 h-1 bg-purple-600 mx-auto mb-8"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Behavioral Insights */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">Behavioral Insights:</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <span className="text-purple-600 font-bold">–</span>
                    <span>Users prioritize reliability over feature complexity</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-purple-600 font-bold">–</span>
                    <span>Physical comfort determines session length more than content quality</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-purple-600 font-bold">–</span>
                    <span>Gesture failure destroys system confidence faster than UI issues</span>
                  </li>
                </ul>
              </div>

              {/* Research Methodology Impact */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">Methodology Impact:</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-600 font-bold">–</span>
                    <span>Multi-angle video analysis revealed micro-interactions invisible to single-perspective observation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-600 font-bold">–</span>
                    <span>AEIOU framework provided systematic structure for complex behavioral data</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-600 font-bold">–</span>
                    <span>Focus on failure moments generated more actionable insights than success metrics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Future Research Directions Section */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Future Research Directions
              </h2>
              <div className="w-16 h-1 bg-purple-600 mx-auto mb-8"></div>
            </div>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                This foundational research opens several critical areas for deeper investigation:
              </p>
              
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold">–</span>
                  <span><strong>Adaptive Gesture Systems:</strong> Prototype gestures that learn from individual motor patterns and adjust sensitivity accordingly</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold">–</span>
                  <span><strong>Accessibility Research:</strong> Test gesture accuracy across diverse lighting conditions, skin tones, and motor abilities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold">–</span>
                  <span><strong>Professional Use Cases:</strong> Develop gesture vocabularies optimized for sustained professional work rather than gaming scenarios</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation to other projects */}
        <section className="py-16 border-t border-gray-200">
          <div className="text-center">
            <Link 
              to="/" 
              className="inline-flex items-center space-x-2 bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              <span>View More Projects</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}