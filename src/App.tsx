import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { DarkModeProvider } from './components/DarkModeProvider';
import HomePage from './pages/HomePage';
import CaseStudyPage from './pages/CaseStudyPage';
import BlueBotleCaseStudyPage from './pages/BlueBotleCaseStudyPage';
import VRCaseStudyPage from './pages/VRCaseStudyPage';
import ChirpCaseStudyPage from './pages/ChirpCaseStudyPage';
import HabitCaseStudyPage from './pages/HabitCaseStudyPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/case-study/intervention-management" element={<CaseStudyPage />} />
            <Route path="/case-study/habit-app" element={<HabitCaseStudyPage />} />
            <Route path="/case-study/blue-bottle-coffee" element={<BlueBotleCaseStudyPage />} />
            <Route path="/case-study/vr-hand-gestures" element={<VRCaseStudyPage />} />
            <Route path="/case-study/hyper-localized-neighborhood" element={<ChirpCaseStudyPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </DarkModeProvider>
  );
}

export default App;