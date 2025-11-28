import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceHighlights from './components/ServiceHighlights';
import WelcomeSection from './components/WelcomeSection';
import ServiceGrid from './components/ServiceGrid';
import FooterContact from './components/FooterContact';
import ChatBot from './components/ChatBot';
import AdminDashboard from './components/AdminDashboard';

const App: React.FC = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  return (
    <div className="font-sans text-gray-900 bg-white relative">
      <Header />
      <main>
        <Hero />
        <ServiceHighlights />
        <WelcomeSection />
        <ServiceGrid />
      </main>
      <FooterContact onAdminClick={() => setIsAdminOpen(true)} />
      
      {/* Floating Chat Bot */}
      <ChatBot />

      {/* Admin Dashboard Overlay */}
      {isAdminOpen && (
        <AdminDashboard onClose={() => setIsAdminOpen(false)} />
      )}
    </div>
  );
};

export default App;
