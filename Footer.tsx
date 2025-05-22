import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-primary/10">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center md:justify-start">
              <div className="w-10 h-10 rounded-md border border-primary/30 flex items-center justify-center mr-3 soft-glow">
                <span className="font-mono text-primary font-bold">MR</span>
              </div>
              <div>
                <h2 className="text-xl font-display font-bold">
                  <span className="text-primary">Manish</span>
                  <span className="text-foreground opacity-80">Regar</span>
                </h2>
                <p className="text-xs text-foreground/60">Ethical Hacker & Developer</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              { url: "https://youtube.com/@ManishCountryBall", icon: "fab fa-youtube" },
              { url: "https://instagram.com/manish_regar369", icon: "fab fa-instagram" },
              { url: "https://twitter.com/Mr_manish_regar", icon: "fab fa-twitter" },
              { url: "https://wa.me/919371010561", icon: "fab fa-whatsapp" }
            ].map((link, index) => (
              <motion.a 
                key={index}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center hover:border-primary/50 transition-colors"
                whileHover={{ scale: 1.1, borderColor: "rgba(16, 185, 129, 0.5)" }}
              >
                <i className={`${link.icon} text-primary`}></i>
              </motion.a>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-primary/10 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-foreground/60 text-sm">&copy; {new Date().getFullYear()} Manish Regar. All rights reserved.</p>
          <p className="text-foreground/40 text-xs mt-2">Ethical hacking | Website development | OTP services | Social media growth</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
