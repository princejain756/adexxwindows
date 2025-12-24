import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import Collections from './components/Collections';
import InstagramEmbeds from './components/InstagramEmbeds';
import Innovation from './components/Innovation';
import EterniaDifference from './components/EterniaDifference';
import DaylightCycle from './components/DaylightCycle';
import Engineering from './components/Engineering';
import About from './components/About';
import Footer from './components/Footer';
import WhatsAppChat from './components/WhatsAppChat';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-900 font-sans selection:bg-blue-200 selection:text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <Collections />
        <InstagramEmbeds />
        <Innovation />
        <EterniaDifference />
        <DaylightCycle />
        <Engineering />
        <About />
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default App;
