import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="mb-16">
      <motion.div 
        className="relative rounded-xl border border-primary/10 p-8 mb-10 soft-glow overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 opacity-10 grid-dots"></div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4 border border-primary/20">
              <span className="text-sm font-medium text-primary flex items-center">
                <i className="fas fa-shield-alt mr-2"></i> Ethical Hacker & Developer
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="text-foreground">Hi, I'm </span>
              <span className="heading-gradient">Manish Regar</span>
            </h1>
            
            <p className="text-foreground/80 text-lg mb-6 leading-relaxed">
              A 14-year-old ethical hacker from Pune specializing in identifying vulnerabilities, web development, and making technology accessible for everyone.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a 
                href="#contact" 
                className="bg-primary hover:bg-primary/90 text-black font-medium py-2 px-6 rounded-md transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              <motion.a 
                href="#services" 
                className="border border-primary/30 text-primary hover:bg-primary/10 font-medium py-2 px-6 rounded-md transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Services
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-xl border border-white/30 shadow-[0_0_25px_rgba(255,255,255,0.1)]">
              {/* Simple dark background with white text */}
              <div className="absolute inset-0 bg-black flex flex-col items-center justify-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-4 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    ETHICAL HACKER
                  </h2>
                  
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-1 bg-white/30 rounded"></div>
                  </div>
                  
                  <div className="text-white/80 text-center px-4">
                    <p className="text-sm md:text-base">
                      Cybersecurity Expert
                    </p>
                    <p className="text-sm md:text-base mt-1">
                      Web Developer
                    </p>
                    <p className="text-sm md:text-base mt-1">
                      OTP Services Provider
                    </p>
                  </div>
                </motion.div>
              </div>
              
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <span className="text-xs font-mono bg-white/10 px-3 py-1 rounded-full text-white border border-white/20">
                  security specialist
                </span>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-8 pt-6 border-t border-primary/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-1">14</h3>
            <p className="text-sm text-foreground/60">Years Old</p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-1">100+</h3>
            <p className="text-sm text-foreground/60">Vulnerabilities Found</p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-1">24/7</h3>
            <p className="text-sm text-foreground/60">Support Available</p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-1">50+</h3>
            <p className="text-sm text-foreground/60">Happy Clients</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
