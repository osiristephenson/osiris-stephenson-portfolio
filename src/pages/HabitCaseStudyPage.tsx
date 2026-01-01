import React from 'react';
import { ArrowLeft, Calendar, Users, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HabitCaseStudyPage() {
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
      <section className="bg-gray-100 py-16 lg:py-20">
        {/* Hero Image */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="flex justify-center">
            <div className="w-full max-w-5xl">
              <img 
                src="/hero.png" 
                alt="HABIT app hero visual showcasing the mobile application design and key features"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                HABIT App
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-blue-600">
                Building habits that actually stick
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A habit-building app that uses the HABIT framework to help users identify, track, and maintain personalized routines through guided goal-setting, progress tracking, and positive reinforcement.
              </p>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
              <div className="text-center">
                <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">Duration</div>
                <div className="font-semibold text-gray-900">7 months</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">Team</div>
                <div className="font-semibold text-gray-900">Solo designer</div>
              </div>
              <div className="text-center">
                <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">My Role</div>
                <div className="font-semibold text-gray-900">UX/UI Designer</div>
              </div>
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">Impact</div>
                <div className="font-semibold text-green-600">34% satisfaction increase</div>
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
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column */}
                <div className="space-y-8">
                  {/* My Role */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">My Role</h3>
                    <p className="text-gray-700 leading-relaxed">
                      UX Designer<br />
                      UX Researcher
                    </p>
                  </div>

                  {/* Timeline */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Timeline</h3>
                    <p className="text-gray-700 leading-relaxed">
                      7 months (2022)<br />
                      iOS Mobile App
                    </p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  {/* The Challenge */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">The Challenge</h3>
                    <p className="text-gray-700 leading-relaxed">
                      People struggle to form and maintain healthy habits due to lack of direction, time constraints, and motivation barriers.
                    </p>
                  </div>

                  {/* Impact */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Impact</h3>
                    <p className="text-gray-700 leading-relaxed">
                      34% increase in user satisfaction<br />
                      200+ users gained interest during development
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The Problem
              </h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                The startup HABIT created a unique behavior framework, but users lacked a digital tool to apply it effectively to personal health and fitness goals.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Existing solutions often fail because they don't address where to start or how to stay consistent. Users needed guidance, structure, and motivation to build lasting healthy routines.
              </p>
            </div>
          </div>
        </section>

        {/* Research & Discovery Section */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Research & Discovery
              </h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                To understand user behavior and pain points around habit formation, I conducted:
              </p>
              
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold">–</span>
                  <span>25 user interviews with key insights from 5 participants</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold">–</span>
                  <span>Card sorting and affinity mapping to understand mental models</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold">–</span>
                  <span>Competitive analysis of existing habit-tracking solutions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold">–</span>
                  <span>Secondary research on behavioral psychology and habit formation</span>
                </li>
              </ul>
            </div>

            {/* Key Insights */}
            <div className="bg-blue-50 rounded-xl p-8 mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Key Research Insights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="text-gray-700"><strong>Direction is key:</strong> Users need clear guidance on where to start</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="text-gray-700"><strong>Visual tracking boosts momentum:</strong> Seeing progress motivates continuation</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="text-gray-700"><strong>Small wins matter:</strong> Celebrating micro-achievements builds confidence</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="text-gray-700"><strong>Social accountability:</strong> Relevance and community improve adherence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Screener Survey Section */}
        <section className="py-12">
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Screener Survey</h3>
              <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                I created and distributed a Google Forms screener to better understand people's habits, motivations, and barriers around health routines. It helped guide the research phase.
              </p>
            </div>
          </div>
        </section>

        {/* Research Process Visual */}
        <section className="py-12">
          <div className="flex justify-center">
            <div className="w-full max-w-5xl">
              <img 
                src="/shot1.png" 
                alt="Google Forms screener survey with multiple-choice and short-answer questions about habits and motivations"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Live Interview Notes Section */}
        <section className="py-12">
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Live Interview Notes</h3>
              <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                These are the direct notes taken from each participant during Zoom interviews, color-coded by individual.
              </p>
            </div>
          </div>
        </section>

        {/* Research Process Visual */}
        <section className="py-12">
          <div className="flex justify-center">
            <div className="w-full max-w-5xl">
              <img 
                src="/shot2.png" 
                alt="Live interview notes from Zoom sessions, color-coded by participant to show individual responses and insights"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Affinity Mapping Section */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Affinity Mapping
              </h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                After synthesizing key insights from the live interviews, I created an affinity map to organize responses into meaningful categories. This process revealed common themes around fitness challenges, time management, and user motivations — providing a clear foundation for developing personas and problem statements.
              </p>
            </div>

            {/* Affinity Map Image */}
            <div className="flex justify-center">
              <div className="w-full max-w-5xl">
                <img 
                  src="/affinityMap.png" 
                  alt="Affinity mapping exercise showing organized user interview insights categorized into themes around fitness challenges, time management, and motivations"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Empathy Mapping Section */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Empathy Mapping
              </h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>
            
            {/* Empathy Maps Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <img 
                  src="/shot4.png" 
                  alt="Empathy Map for Athletic Alex showing thoughts, feelings, actions, and pain points of more experienced users"
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <p className="text-sm text-gray-600 text-center font-medium">
                  Empathy Map – Athletic Alex (more experienced)
                </p>
              </div>
              
              <div className="space-y-4">
                <img 
                  src="/shot5.png" 
                  alt="Empathy Map for Novice Noel showing thoughts, feelings, actions, and pain points of beginner users"
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <p className="text-sm text-gray-600 text-center font-medium">
                  Empathy Map – Novice Noel (beginner)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* User Personas Section */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                User Personas
              </h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>
            
            {/* User Personas Images Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="flex justify-center">
                <img 
                  src="/shot6.png" 
                  alt="Novice Noel persona showing demographics, goals, challenges, and motivations for habit building"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              
              <div className="flex justify-center">
                <img 
                  src="/shot7.png" 
                  alt="Athletic Alex persona showing demographics, goals, challenges, and motivations for fitness routines"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* HMW Statements Section */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                HMW Statements
              </h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                Next in my design process, I wrote problem statements. These statements are derived from my interview notes as well as affinity mapping. These statements became the catalyst for a smooth transition into the ideation phase.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-lg">
                Shown below is a core design sprint exercise, Crazy 8:
              </p>
              
              <div className="bg-blue-50 rounded-xl p-8 mt-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <span className="text-blue-600 font-bold text-lg flex-shrink-0">1.</span>
                    <p className="text-gray-800 leading-relaxed text-lg">
                      How might we promote positive and healthy coping strategies for improving negative self talk?
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <span className="text-blue-600 font-bold text-lg flex-shrink-0">2.</span>
                    <p className="text-gray-800 leading-relaxed text-lg">
                      How might we better educate people in finding resources for healthier food choices?
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <span className="text-blue-600 font-bold text-lg flex-shrink-0">3.</span>
                    <p className="text-gray-800 leading-relaxed text-lg">
                      How might we help people with busy schedules develop consistency for engagement in physical activity without experiencing burnout?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Sprint: Crazy 8s Section */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Design Sprint: Crazy 8s
              </h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                To kick off ideation, I used the "Crazy 8" technique to rapidly sketch out multiple ideas addressing key problem areas from earlier research. This method helped me explore various habit-building flows based on user needs and pain points. Each sketch corresponds to one of the How Might We questions and set the foundation for more refined concepts later on.
              </p>
            </div>

            {/* Crazy 8s Images */}
            <div className="space-y-8">
              <div className="flex justify-center">
                <div className="w-full max-w-5xl">
                  <img 
                    src="/replaceFirst.png" 
                    alt="Crazy 8s sketches - first set of rapid ideation sketches exploring habit-building concepts"
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-full max-w-5xl">
                  <img 
                    src="/replaceSecond.png" 
                    alt="Crazy 8s sketches - second set of rapid ideation sketches exploring user flow concepts"
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-full max-w-5xl">
                  <img 
                    src="/replaceThird.png" 
                    alt="Crazy 8s sketches - third set of rapid ideation sketches exploring interface concepts"
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Stories Section */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                User Stories
              </h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                Next in my design process, I worked on user stories. These user stories are prioritized as High (must have), Medium (nice to have), and Low (not needed). They help ensure features are aligned with user goals and pain points before building out wireframes or user flows.
              </p>
            </div>

            {/* High Priority Stories */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🔥</span>
                <h3 className="text-xl font-bold text-gray-900">High – Must Have</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    <span className="font-bold">As a user,</span> I want to practice more positive self affirmations with my fitness progression, so that I can enhance my performance and increase my self-esteem.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    <span className="font-bold">As a user,</span> I want to increase the habit of recording my daily fitness progression, so that my self motivation is maintained.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    <span className="font-bold">As a user,</span> I want to increase my knowledge of where to begin with forming good habits for better overall health and fitness.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    <span className="font-bold">As a user,</span> I want to increase my confidence with journaling positive affirmations, so I can focus on the positive.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    <span className="font-bold">As a user,</span> I want to write down my fitness goals, so that I can make a plan for when to exercise.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    <span className="font-bold">As a user,</span> I want to adjust the frequency of my workouts to avoid burnout.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    <span className="font-bold">As a user,</span> I want to track my exercises, so I don't skip workouts and can measure progress.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    <span className="font-bold">As a user,</span> I want to adopt healthier eating habits, so I feel less guilt from snacking.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    <span className="font-bold">As a user,</span> I want to learn healthy recipes to reduce intake of sugar, salt, and fat.
                  </p>
                </div>
              </div>
            </div>

            {/* Medium Priority Stories */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🌤️</span>
                <h3 className="text-xl font-bold text-gray-900">Medium – Nice To Have</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    <span className="font-bold">As a user,</span> I want to wake up earlier to exercise, so I can focus better during the day.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    <span className="font-bold">As a user,</span> I want to work out with friends or in a class, so I'm more likely to stick with it.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    <span className="font-bold">As a user,</span> I want variety in daily exercise routines, to build consistent habits.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    <span className="font-bold">As a user,</span> I want to meal prep each week, so binge snacking is reduced.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    <span className="font-bold">As a user,</span> I want to talk with others about changing habits to inspire and stay inspired.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    <span className="font-bold">As a user,</span> I want to save affirmations in-app, so I can revisit them later.
                  </p>
                </div>
              </div>
            </div>

            {/* Low Priority Stories */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">💤</span>
                <h3 className="text-xl font-bold text-gray-900">Low – OK Not To Have</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    <span className="font-bold">As a user,</span> I want to access digital lessons or videos on positive self-talk.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    <span className="font-bold">As a user,</span> I want to see a weekly calendar of food logging.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    <span className="font-bold">As a user,</span> I want to track how often I grocery shop each month.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    <span className="font-bold">As a user,</span> I want to understand the calories and nutrients in my food.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sitemap Section */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Sitemap
              </h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                The next part of this application design process is the sitemap. This sitemap shows the key pages of the app and content under each page. There is account, settings, and related pages.
              </p>
            </div>

            {/* Sitemap Image */}
            <div className="flex justify-center">
              <div className="w-full max-w-5xl">
                <img 
                  src="/sitemapNew.png" 
                  alt="Application sitemap showing key pages, account settings, and page hierarchy with color-coded sections"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Note under image */}
            <div className="text-center">
              <p className="text-sm text-gray-600 leading-relaxed">
                In the top right, there is a key showcased in different colors for onboarding, main pages, and subpages.
              </p>
            </div>
          </div>
        </section>

        {/* Diagrammed User Flows Section */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Diagrammed User Flows
              </h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                In this diagram, I have identified three user flows. These user flows are actual tasks the user can complete within my product.
              </p>
            </div>

            {/* User Flows Image */}
            <div className="flex justify-center">
              <div className="w-full max-w-5xl">
                <img 
                  src="/dFlow.png" 
                  alt="User flow diagrams showing three key task flows that users can complete within the HABIT app"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Caption under image */}
            <div className="text-center">
              <p className="text-sm text-gray-600 leading-relaxed">
                User flow is labeled (action/screen/decision).
              </p>
            </div>
          </div>
        </section>

        {/* Prototype Flow Section */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Prototype Flow
              </h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>

            {/* Prototype Flow Image */}
            <div className="flex justify-center">
              <div className="w-full max-w-5xl">
                <img 
                  src="/ppType.png" 
                  alt="Clickable prototype flow created in Figma showing key user flows and screen connections"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Caption under image */}
            <div className="text-center mt-6">
              <p className="text-sm text-gray-600 leading-relaxed max-w-3xl mx-auto">
                This image shows the clickable prototype created in Figma. It demonstrates key flows such as account creation, tracking fitness activities, and selecting workouts. Each screen is connected to simulate a real user experience.
              </p>
            </div>
          </div>
        </section>

        {/* Design Process Section */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Design Process
              </h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-lg">1</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Paper Sketches</h3>
                <p className="text-gray-600 text-sm">Early ideation and concept exploration</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-lg">2</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Low-Fi Prototypes</h3>
                <p className="text-gray-600 text-sm">Testing core functionality and user flows</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-lg">3</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">User Testing</h3>
                <p className="text-gray-600 text-sm">Validation with 4 participants</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-lg">4</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">High-Fidelity Design</h3>
                <p className="text-gray-600 text-sm">Final visuals and design system</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Key Features
              </h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Habit Discovery Engine</h3>
                <p className="text-gray-700 leading-relaxed">
                  Personalized recommendations based on user goals, lifestyle, and the HABIT framework to help users identify the right habits to build.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Progress Tracking</h3>
                <p className="text-gray-700 leading-relaxed">
                  Visual progress indicators and streak tracking that celebrate small wins and maintain motivation through consistent feedback.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Motivational System</h3>
                <p className="text-gray-700 leading-relaxed">
                  Positive reinforcement through achievements, reminders, and encouraging messages tailored to individual progress patterns.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Routine Builder</h3>
                <p className="text-gray-700 leading-relaxed">
                  Guided creation of personalized daily and weekly routines that integrate seamlessly with existing schedules and commitments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Design Decisions Section */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Design Decisions
              </h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold text-gray-900 mb-2">Color Palette</h3>
                <p className="text-gray-600">Calming blues combined with energizing greens to promote both relaxation and motivation</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-gray-700">Aa</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Typography</h3>
                <p className="text-gray-600">Clean, accessible fonts that ensure readability across all screen sizes and contexts</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">👆</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Interactions</h3>
                <p className="text-gray-600">Intuitive tap and swipe gestures with supportive feedback to encourage engagement</p>
              </div>
            </div>
          </div>
        </section>

        {/* Results & Impact Section */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Results & Impact
              </h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center bg-green-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">34%</div>
                <p className="text-gray-700 font-medium">Increase in user satisfaction</p>
              </div>
              
              <div className="text-center bg-blue-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                <p className="text-gray-700 font-medium">Users gained interest during development</p>
              </div>
              
              <div className="text-center bg-purple-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <p className="text-gray-700 font-medium">Full prototype delivered</p>
              </div>
              
              <div className="text-center bg-orange-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">✓</div>
                <p className="text-gray-700 font-medium">Complete design system created</p>
              </div>
            </div>
          </div>
        </section>

        {/* Learnings & Next Steps Section */}
        <section className="py-16 border-b border-gray-100">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Learnings & Next Steps
              </h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Key Learnings */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">Key Learnings:</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-600 font-bold">–</span>
                    <span>Start research earlier in the process to validate assumptions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-600 font-bold">–</span>
                    <span>Expand testing diversity to include more user demographics</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-600 font-bold">–</span>
                    <span>Include accessibility checks from the start of the design process</span>
                  </li>
                </ul>
              </div>

              {/* Next Steps */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">Future Enhancements:</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 font-bold">–</span>
                    <span>Add wearable device integration for automatic tracking</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 font-bold">–</span>
                    <span>Implement AI-powered personalized recommendations</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 font-bold">–</span>
                    <span>Expand social features for community accountability</span>
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