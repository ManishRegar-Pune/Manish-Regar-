import { useEffect } from 'react';
import { setupScrollSpy } from '@/lib/utils';
import { useTheme } from '@/lib/ThemeContext';

// Import all components
import NavMenu from '@/components/NavMenu';
import ChatSupport from '@/components/ChatSupport';
import HeroSection from '@/components/HeroSection';
import About from '@/components/About';
import Mission from '@/components/Mission';
import Abilities from '@/components/Abilities';
import Services from '@/components/Services';
import Shop from '@/components/Shop';
import SocialMedia from '@/components/SocialMedia';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Home = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  useEffect(() => {
    // Setup scroll spy for active navigation
    const cleanup = setupScrollSpy();
    
    // Add title to document
    document.title = "Manish Regar - Ethical Hacker & Tech Enthusiast";
    
    return cleanup;
  }, []);

  return (
    <>
      {/* Navigation */}
      <NavMenu toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      
      {/* Chat Support */}
      <ChatSupport />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-16">
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Section */}
        <About />
        
        {/* Mission Section */}
        <Mission />
        
        {/* Abilities Section */}
        <Abilities />
        
        {/* Services Section */}
        <Services />
        
        {/* Shop Section */}
        <Shop />
        
        {/* Social Media Section */}
        <SocialMedia />
        
        {/* Contact Section */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
