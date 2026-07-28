import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturedProjectCard } from './components/FeaturedProjectCard';
import { WhatWeDoSection } from './components/WhatWeDoSection';
import { SelectedTitlesSection } from './components/SelectedTitlesSection';
import { OurProcessSection } from './components/OurProcessSection';
import { OurStudioSection } from './components/OurStudioSection';
import { TrustedBySection } from './components/TrustedBySection';
import { ContactCTASection } from './components/ContactCTASection';
import { Footer } from './components/Footer';
import { Modals } from './components/Modals';
import { GameTitle, ServiceItem } from './data/pixelforgeData';

export default function App() {
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState<GameTitle | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [letBuildOpen, setLetBuildOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#121417] flex flex-col font-['Vazirmatn','Plus_Jakarta_Sans',sans-serif] selection:bg-black selection:text-white">
      
      {/* 1. Header / Navigation Bar */}
      <Navbar
        onOpenLetBuild={() => setLetBuildOpen(true)}
        activeSection="home"
      />

      {/* Main Container */}
      <main className="flex-1 space-y-4">
        
        {/* 2. Hero Section */}
        <HeroSection
          onOpenShowreel={() => setShowreelOpen(true)}
          onExploreGames={() => scrollToSection('games')}
        />

        {/* 3. Featured Project Card */}
        <FeaturedProjectCard
          onSelectProject={(project) => setSelectedGame(project)}
          onOpenShowreel={() => setShowreelOpen(true)}
        />

        {/* 4. What We Do Section */}
        <WhatWeDoSection
          onSelectService={(service) => setSelectedService(service)}
        />

        {/* 5. Selected Titles Section */}
        <SelectedTitlesSection
          onSelectGame={(game) => setSelectedGame(game)}
          onViewAllGames={() => scrollToSection('games')}
        />

        {/* 6. Our Process Section */}
        <OurProcessSection />

        {/* 7. Our Studio Section */}
        <OurStudioSection
          onJoinTeam={() => setContactOpen(true)}
        />

        {/* 8. Trusted By Section */}
        <TrustedBySection />

        {/* 9. Contact CTA Section */}
        <ContactCTASection
          onOpenContact={() => setContactOpen(true)}
        />

      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Modals & Dialog Overlays */}
      <Modals
        showreelOpen={showreelOpen}
        onCloseShowreel={() => setShowreelOpen(false)}
        selectedGame={selectedGame}
        onCloseGame={() => setSelectedGame(null)}
        selectedService={selectedService}
        onCloseService={() => setSelectedService(null)}
        letBuildOpen={letBuildOpen}
        onCloseLetBuild={() => setLetBuildOpen(false)}
        contactOpen={contactOpen}
        onCloseContact={() => setContactOpen(false)}
      />

    </div>
  );
}
