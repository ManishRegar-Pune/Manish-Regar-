import { useState, useEffect } from 'react';
import { smoothScrollTo } from '@/lib/utils';

interface NavMenuProps {
  toggleTheme: () => void;
  isDarkTheme: boolean;
}

const NavMenu = ({ toggleTheme, isDarkTheme }: NavMenuProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run initially
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleNavClick = (sectionId: string) => {
    smoothScrollTo(sectionId);
    setMobileMenuOpen(false);
  };
  
  return (
    <>
      {/* Main Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-black z-50 border-b border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          {/* Logo and Menu Button */}
          <div className="flex items-center">
            {/* Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 mr-3 rounded-full hover:bg-white/5 transition-colors focus:outline-none border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.07)]"
              aria-label="Open menu"
            >
              <i className="fas fa-ellipsis-h text-white"></i>
            </button>
            
            {/* Text-only logo - no MR logo */}
            <div className="flex items-center">
              <h1 className="text-lg font-display font-bold border-b border-white/20">
                <span className="text-white">Manish Regar</span>
              </h1>
            </div>
          </div>
          
          {/* Navigation for larger screens */}
          <div className="hidden md:flex items-center space-x-8">
            {['about', 'mission', 'abilities', 'services', 'selling', 'social', 'contact'].map((section) => (
              <a 
                key={section}
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(section);
                }}
                className={`nav-link text-sm text-white/80 hover:text-white transition-colors ${activeSection === section ? 'active' : ''}`}
              >
                {section === 'selling' ? 'Shop' : section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
          
          {/* Right side elements */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-white/5 transition-colors focus:outline-none border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.07)]"
              aria-label={isDarkTheme ? "Switch to light theme" : "Switch to dark theme"}
            >
              <i className={`fas ${isDarkTheme ? 'fa-sun' : 'fa-moon'} text-white`}></i>
            </button>
            
            {/* Email Button */}
            <a 
              href="mailto:Ask.manish.regar@gmail.com" 
              className="p-2 rounded-full hover:bg-white/5 transition-colors focus:outline-none border border-white/20 flex shadow-[0_0_15px_rgba(255,255,255,0.07)]"
              aria-label="Send email"
            >
              <i className="fas fa-envelope text-white"></i>
            </a>

            {/* Call Button */}
            <a 
              href="tel:+919371010561" 
              className="p-2 rounded-full hover:bg-white/5 transition-colors focus:outline-none border border-white/20 flex shadow-[0_0_15px_rgba(255,255,255,0.07)]"
              aria-label="Call"
            >
              <i className="fas fa-phone text-white"></i>
            </a>
            
            {/* WhatsApp */}
            <a 
              href="https://wa.me/919371010561" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full hover:bg-white/5 transition-colors focus:outline-none border border-white/20 flex shadow-[0_0_15px_rgba(255,255,255,0.07)]"
              aria-label="WhatsApp"
            >
              <i className="fab fa-whatsapp text-white"></i>
            </a>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu - half page with animation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40">
          {/* Backdrop - will close the menu when clicked */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm" 
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          
          {/* Menu panel - slides in from left */}
          <div 
            className="absolute top-0 left-0 h-full w-4/5 max-w-xs bg-black border-r border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            style={{
              animation: "slideInLeft 0.3s forwards"
            }}
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center">
                  <h2 className="text-xl font-display font-bold">
                    <span className="text-white">Menu</span>
                  </h2>
                </div>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-white/5 transition-colors border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.07)]"
                  aria-label="Close menu"
                >
                  <i className="fas fa-times text-white"></i>
                </button>
              </div>
              
              <div className="flex flex-col space-y-4 flex-1">
                {[
                  { id: 'about', icon: 'fas fa-user', label: 'About Me' },
                  { id: 'mission', icon: 'fas fa-flag', label: 'My Mission' },
                  { id: 'abilities', icon: 'fas fa-laptop-code', label: 'Skills' },
                  { id: 'services', icon: 'fas fa-tools', label: 'Services' },
                  { id: 'selling', icon: 'fas fa-shopping-cart', label: 'Shop' },
                  { id: 'social', icon: 'fas fa-share-alt', label: 'Social Media' },
                  { id: 'contact', icon: 'fas fa-envelope', label: 'Contact' }
                ].map((item) => (
                  <a 
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                    className="flex items-center py-3 px-4 border border-white/20 rounded-md shadow-[0_0_15px_rgba(255,255,255,0.07)] hover:border-white/40 hover:bg-white/5 transition-colors"
                  >
                    <i className={`${item.icon} text-white mr-3`}></i>
                    <span className="text-white font-medium">{item.label}</span>
                  </a>
                ))}
              </div>
              
              <div className="pt-6 space-y-3">
                <a 
                  href="https://wa.me/919371010561" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center py-3 px-4 bg-white/10 hover:bg-white/20 border border-white/30 rounded-md text-white font-medium shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                >
                  <i className="fab fa-whatsapp mr-2"></i>
                  <span>Contact on WhatsApp</span>
                </a>
                
                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-center py-3 px-4 border border-white/20 rounded-md text-white font-medium hover:bg-white/5 shadow-[0_0_15px_rgba(255,255,255,0.07)]"
                >
                  <i className={`fas ${isDarkTheme ? 'fa-sun' : 'fa-moon'} mr-2`}></i>
                  <span>{isDarkTheme ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Customer Support button in bottom right corner */}
      <button
        id="chat-trigger"
        className="fixed bottom-6 right-6 z-30 w-16 h-16 rounded-full bg-black flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.15)] border border-white/30 animate-pulse-slow"
        aria-label="Open Customer Support Chat"
      >
        <i className="fas fa-headset text-white text-xl"></i>
      </button>
    </>
  );
};

export default NavMenu;
