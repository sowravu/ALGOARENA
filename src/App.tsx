import React, { useRef } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ArenaAnimation } from './components/ArenaAnimation';
import { LoginForm } from './components/LoginForm';
import { SignUpForm } from './components/SignUpForm';

function App() {
  const brandingRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const element = brandingRef.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    element.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(71, 214, 255, 0.05) 0%, transparent 45%), #0A0A0C`;
  };

  const handleMouseLeave = () => {
    const element = brandingRef.current;
    if (!element) return;
    element.style.background = '#0A0A0C';
  };

  return (
    <div className="h-screen w-screen selection:bg-primary/30 relative text-on-surface bg-background select-none font-body-md overflow-hidden">
      {/* Subtle Scanline Effect */}
      <div className="scanline pointer-events-none"></div>

      <main className="flex h-full w-full">
        {/* Left 60%: Branding Section */}
        <section
          ref={brandingRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-3/5 h-full flex flex-col justify-center items-center overflow-hidden bg-[#0A0A0C] transition-all duration-300"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
          
          {/* Content Container */}
          <div className="relative z-20 flex flex-col items-center px-margin-desktop text-center">
            <h1 className="font-display-lg text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-primary neon-text-glow leading-none mb-6">
              ALGOARENA
            </h1>
            
            {/* Arena Animation Frame */}
            <div className="w-full h-48 md:h-56 relative mb-6">
              <div className="absolute inset-0 w-full h-full" style={{ display: 'block' }}>
                <ArenaAnimation />
              </div>
            </div>

            <div className="max-w-xl">
              <p className="font-headline-sm text-on-surface-variant mb-2 font-semibold">
                Enter the arena. Code in real-time. Rise through the Elo ranks.
              </p>
              <div className="flex items-center justify-center space-x-4 opacity-50">
                <div className="flex items-center font-code-md text-code-md text-primary">
                  <span className="material-symbols-outlined text-[18px] mr-2">terminal</span>
                  <span className="terminal-blink">ESTABLISHING CONNECTION</span>
                </div>
                <div className="w-1.5 h-1.5 bg-tertiary rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Bottom Left Decorative Stats */}
          <div className="absolute bottom-14 left-8 font-code-md text-[10px] text-outline-variant space-y-1 tracking-widest uppercase">
            <p>LATENCY: 12ms</p>
            <p>UPTIME: 99.9992%</p>
            <p>NODES_ACTIVE: 4096</p>
          </div>
        </section>

        {/* Right 40%: Login Section */}
        <section className="w-2/5 h-full relative z-30 flex items-center justify-center bg-[#0d0d0f] border-l border-outline-variant/20 p-6 lg:p-margin-desktop">
          {/* Glassmorphism Card */}
          <div className="glass-panel w-full max-w-[360px] min-h-[550px] p-8 rounded-xl relative flex flex-col justify-between">
            {/* Glowing corner accent */}
            <div className="absolute -top-px -left-px w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-xl"></div>
            <div className="absolute -bottom-px -right-px w-8 h-8 border-b-2 border-r-2 border-secondary/40 rounded-br-xl"></div>
            
            <Routes>
              <Route path="/login" element={<LoginForm />} />
              <Route path="/signup" element={<SignUpForm />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
          </div>
          
          {/* Decorative System Logs */}
          <div className="absolute bottom-14 right-6 font-code-md text-[9px] text-outline-variant/40 space-y-1">
            <p>MD5: 23-45-A1-FE-90</p>
            <p>ENV: PRODUCTION_SHARD_4</p>
          </div>
        </section>
      </main>

      {/* Footer from Shared Components JSON */}
      <footer className="fixed bottom-0 left-0 w-full bg-surface-container-lowest border-t border-outline-variant/30 px-margin-desktop py-3 flex justify-between items-center z-50">
        <div className="font-label-caps text-label-caps text-primary tracking-[0.2em] font-semibold">
          © 2024 ALGOARENA. PROTOCOL TERMINAL v4.0.2
        </div>
        <div className="flex space-x-8 font-code-md text-code-md text-outline">
          <a className="hover:text-tertiary transition-colors" href="#">System Status</a>
          <a className="hover:text-tertiary transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-tertiary transition-colors" href="#">Terms of Service</a>
          <a className="hover:text-tertiary transition-colors" href="#">API</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
