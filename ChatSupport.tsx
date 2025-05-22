import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  sender: 'ai' | 'user';
  text: string;
}

const ChatSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      sender: 'ai', 
      text: "Hello! I'm Manish's customer support assistant. How can I help you today?" 
    }
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  
  // Handle body scroll when chat is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  
  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { sender: 'user', text: inputText }]);
    
    // Simple AI response logic (can be expanded or connected to a real API)
    setTimeout(() => {
      let response = "Thank you for your message! Manish will respond to your inquiry soon.";
      
      // Very basic response matching
      if (inputText.toLowerCase().includes('service')) {
        response = "Manish offers several services including ethical hacking, website development, OTP services, and social media growth. Would you like to know more about any specific service?";
      } else if (inputText.toLowerCase().includes('price') || inputText.toLowerCase().includes('cost')) {
        response = "Prices vary depending on the service. For website development and ethical hacking, please request a custom quote. OTP services start at ₹10, and social media boost services are very affordable.";
      } else if (inputText.toLowerCase().includes('contact')) {
        response = "You can contact Manish directly via WhatsApp at +91 9371010561, or email at Ask.manish.regar@gmail.com.";
      }
      
      setMessages(prev => [...prev, { sender: 'ai', text: response }]);
    }, 800);
    
    // Clear input
    setInputText('');
  };
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  // Event handler for chat trigger button in NavMenu
  useEffect(() => {
    const chatTrigger = document.getElementById('chat-trigger');
    if (chatTrigger) {
      chatTrigger.addEventListener('click', toggleChat);
    }
    
    return () => {
      if (chatTrigger) {
        chatTrigger.removeEventListener('click', toggleChat);
      }
    };
  }, []);
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="w-full h-full md:w-4/5 md:h-[90%] md:rounded-xl border border-white/20 shadow-[0_0_25px_rgba(255,255,255,0.1)] overflow-hidden flex flex-col max-w-4xl"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Chat Header */}
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-black">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center mr-4 shadow-[0_0_15px_rgba(255,255,255,0.15)]">
                  <i className="fas fa-headset text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-white text-xl font-medium">Customer Support</h3>
                  <p className="text-sm text-white/60">We're here to help you</p>
                </div>
              </div>
              <button 
                onClick={toggleChat}
                className="p-2 rounded-full hover:bg-white/10 transition-colors border border-white/20"
              >
                <i className="fas fa-times text-white"></i>
              </button>
            </div>
            
            {/* Chat Messages */}
            <div className="p-6 space-y-6 flex-1 overflow-y-auto bg-black">
              {messages.map((msg, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : ''}`}
                >
                  {msg.sender === 'ai' && (
                    <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center mr-3 flex-shrink-0 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                      <i className="fas fa-headset text-white"></i>
                    </div>
                  )}
                  <div className={`${
                    msg.sender === 'ai' 
                      ? 'bg-black border border-white/20 rounded-r-2xl rounded-bl-2xl' 
                      : 'bg-white/10 border border-white/20 rounded-l-2xl rounded-br-2xl'
                    } p-4 text-white max-w-[80%] shadow-[0_0_15px_rgba(255,255,255,0.05)]`}
                  >
                    {msg.text}
                  </div>
                  {msg.sender === 'user' && (
                    <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center ml-3 flex-shrink-0 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                      <i className="fas fa-user text-white"></i>
                    </div>
                  )}
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Chat Input */}
            <div className="p-6 border-t border-white/10 bg-black">
              <div className="flex items-center bg-white/5 rounded-full border border-white/20 p-1 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <input 
                  type="text" 
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSendMessage();
                  }}
                  placeholder="Type your message..." 
                  className="bg-transparent px-4 py-3 text-white w-full focus:outline-none" 
                />
                <button 
                  onClick={handleSendMessage}
                  className="bg-white text-black p-3 rounded-full mr-1 hover:bg-white/90 transition-colors"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatSupport;
