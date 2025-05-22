const DigitalDecorations = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30 z-0">
      {/* Digital grid background */}
      <div className="absolute inset-0 grid-dots"></div>
      
      {/* Floating digital bugs */}
      <div className="absolute top-[15%] left-[8%] transform rotate-[15deg] animate-float">
        <div className="w-6 h-6 rounded-full border border-primary/30 flex items-center justify-center">
          <div className="w-3 h-3 bg-primary rounded-full opacity-50"></div>
        </div>
      </div>
      
      <div className="absolute top-[25%] right-[12%] transform rotate-[-10deg] animate-float-delay">
        <div className="w-8 h-8 border-2 border-accent/30 flex items-center justify-center" style={{clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"}}>
          <div className="w-4 h-4 bg-accent rounded-full opacity-50"></div>
        </div>
      </div>
      
      <div className="absolute bottom-[30%] left-[15%] transform rotate-[25deg] animate-float-delay-2">
        <div className="w-10 h-10 border border-secondary/30 flex items-center justify-center animate-spin-slow" style={{clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)"}}>
          <div className="w-5 h-5 bg-secondary rounded-sm opacity-50 animate-pulse"></div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-[40%] left-[5%] animate-float">
        <div className="w-32 h-32 rounded-full border border-primary/10 opacity-20"></div>
      </div>
      
      <div className="absolute top-[70%] right-[10%] animate-float-delay">
        <div className="w-48 h-48 rounded-full border border-accent/10 opacity-10"></div>
      </div>
      
      <div className="absolute top-[20%] right-[25%] animate-float-delay-2">
        <div className="w-24 h-24 border border-secondary/10 opacity-15" style={{clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"}}></div>
      </div>
    </div>
  );
};

export default DigitalDecorations;
