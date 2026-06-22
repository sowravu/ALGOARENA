import { useNavigate } from 'react-router-dom';
import { MainHeader } from './MainHeader';
import { Footer } from './Footer';

export function Home() {
  const navigate = useNavigate();

  const handleDecline = () => {
    console.log('Battle invitation declined.');
  };

  const handleAccept = () => {
    console.log('Battle invitation accepted. Connecting to sandbox...');
    navigate('/login');
  };

  const handleQuickMatch = () => {
    console.log('Initiating Quick Match matchmaking queue...');
    navigate('/login');
  };

  const handleBrowseProblems = () => {
    console.log('Redirecting to problems index...');
    navigate('/login');
  };

  return (
    <div className="min-h-screen text-on-surface bg-background select-none font-sans relative">
      {/* Subtle Scanline Effect */}
      <div className="scanline pointer-events-none"></div>

      <MainHeader />

      <main>
        {/* Hero Section */}
        <section className="relative pt-16 pb-20 overflow-hidden hero-glow border-b border-white/5 animate-fade-in" data-purpose="hero">
          <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            
            {/* New Feature Pill */}
            <div className="inline-flex items-center gap-2 px-3 .5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-label-caps mb-8">
              <span className="material-symbols-outlined text-[14px]">bolt</span>
              COMPETITIVE CODING
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display-lg font-bold mb-6 leading-tight">
              Become a <span className="text-primary neon-text-glow">Better Developer</span><br/>
              Through Challenges
            </h1>
            
            <p className="text-base md:text-lg text-on-surface-variant mb-8 max-w-2xl mx-auto leading-relaxed font-body-lg">
              Start your coding journey with fun challenges designed for all skill levels, including beginners!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none">
              <button 
                onClick={handleQuickMatch}
                className="w-full sm:w-auto px-8 py-3 btn-gradient font-label-caps font-bold text-xs tracking-[0.2em] flex items-center justify-center gap-2 rounded-lg cursor-pointer transform active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">bolt</span>
                QUICK MATCH
              </button>
              <button 
                onClick={handleBrowseProblems}
                className="w-full sm:w-auto px-8 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-label-caps font-bold text-xs tracking-[0.2em] flex items-center justify-center gap-2 transition-all rounded-lg cursor-pointer active:scale-95"
              >
                <span className="material-symbols-outlined text-[18px]">search</span>
                BROWSE PROBLEMS
              </button>
            </div>
          </div>
        </section>

        {/* 1v1 Battles Section */}
        <section className="py-16 bg-[#0d0d0f]" data-purpose="battle-invite">
          <div className="max-w-7xl mx-auto px-gutter">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/30 text-secondary text-xs font-label-caps mb-4">
                <span className="material-symbols-outlined text-[12px]">star</span>
                NEW FEATURE
              </div>
              <h2 className="text-3xl font-headline-lg font-bold mb-3">
                Exciting <span className="border-b-4 border-secondary/40 secondary-neon-glow">1v1 Code Battles</span>
              </h2>
              <p className="text-on-surface-variant font-body-md text-sm md:text-base">
                Practice coding with friendly matches perfect for beginners and experienced coders alike.
              </p>
            </div>

            {/* Invitation Card Container */}
            <div className="max-w-3xl mx-auto">
              <div className="battle-card rounded-xl p-6 relative shadow-2xl">
                {/* Glowing corner accents */}
                <div className="absolute -top-px -left-px w-8 h-8 border-t-2 border-l-2 border-primary/30 rounded-tl-xl"></div>
                <div className="absolute -bottom-px -right-px w-8 h-8 border-b-2 border-r-2 border-secondary/30 rounded-br-xl"></div>
                
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
                    {/* Battle Icon */}
                    <div className="w-12 h-12 rounded bg-primary/20 flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined text-[26px]">code</span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1.5">
                        <h3 className="text-lg font-headline-sm font-bold text-on-surface">Coding Battle Invitation</h3>
                        <div className="flex gap-2 justify-center sm:justify-start">
                          <span className="px-2 py-0.5 bg-white/10 rounded text-[9px] text-on-surface-variant font-label-caps uppercase">medium</span>
                          <span className="text-[9px] text-outline font-label-caps sm:ml-auto">5 mins ago</span>
                        </div>
                      </div>
                      
                      <h4 className="text-primary/80 font-label-caps text-[11px] tracking-wider mb-2">ALGORITHM MASTERS DUEL</h4>
                      
                      <div className="flex items-center justify-center sm:justify-start gap-4 text-xs text-on-surface-variant font-body-md">
                        <span className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[16px]">schedule</span>
                          30 minutes
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[16px]">verified_user</span>
                          medium
                        </span>
                      </div>
                      
                      <div className="mt-4 flex items-center justify-center sm:justify-start gap-2.5">
                        <img 
                          alt="Alex Johnson Avatar" 
                          className="w-7 h-7 rounded-full border border-primary/20" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3wMCVvhc17Jt4vUlYwCY0GP9eonBZESkCV_ZgxdWkGTtoCvoMMJO6THlWOaAaQK_fGBqwEsDYKRvH8hVQZXjnlkO2Uzv6oK0hT1dzhXxrB7GUSF5ljkS-a0W7X5_WgSra0uGSDXxfYip_0qb_vEyCr1HHFBHqkNerrBBcN4z1ybF-kmmExfkRzkfrN_epQANBDcdGr5EsZN10XaI2j83VHY2NUC0u_x91Fm3qIsb5BdtgEq2JiNWMHgb0uUpca3Q7DtGq-Q88uL4T"
                        />
                        <span className="text-xs text-on-surface-variant">
                          From <span className="font-bold text-on-surface">Alex Johnson</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3 w-full md:w-auto shrink-0 justify-center">
                    <button 
                      onClick={handleDecline}
                      className="px-5 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-on-surface-variant font-label-caps text-[11px] transition-colors cursor-pointer"
                    >
                      DECLINE
                    </button>
                    <button 
                      onClick={handleAccept}
                      className="px-6 py-2 rounded-lg btn-gradient text-white font-label-caps font-bold text-[11px] tracking-widest flex items-center gap-1.5 transition-all cursor-pointer active:scale-[0.98]"
                    >
                      <span className="material-symbols-outlined text-[14px]">check</span>
                      ACCEPT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16" data-purpose="features">
          <div className="max-w-7xl mx-auto px-gutter">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-label-caps mb-4">
                <span className="material-symbols-outlined text-[12px]">new_releases</span>
                FEATURES
              </div>
              <h2 className="text-3xl font-headline-lg font-bold mb-4">
                Everything you need to <span className="text-primary neon-text-glow">excel</span>
              </h2>
              <p className="text-base text-on-surface-variant max-w-2xl mx-auto font-body-lg leading-relaxed">
                Start coding with beginner-friendly tools to learn, practice, and grow your skills.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="glass-panel p-6 rounded-xl hover:border-primary/30 transition-all group hover:scale-[1.01] duration-300">
                <div className="w-12 h-12 rounded bg-white/5 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[24px]">code</span>
                </div>
                <h3 className="text-xl font-headline-sm font-bold mb-2 text-on-surface">Real-world Problems</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed font-body-md">
                  Learn coding with simple, practical challenges perfect for beginners.
                </p>
              </div>
              
              {/* Card 2 (Featured) */}
              <div className="glass-panel p-6 rounded-xl border-primary/50 shadow-[0_0_50px_-12px_rgba(71,214,255,0.2)] transition-all transform hover:-translate-y-1.5 group duration-300">
                <div className="w-12 h-12 rounded bg-primary/20 flex items-center justify-center mb-6 text-primary">
                  <span className="material-symbols-outlined text-[24px]">groups</span>
                </div>
                <h3 className="text-xl font-headline-sm font-bold mb-2 text-on-surface">Live Competition</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed font-body-md">
                  Practice with other beginners in fun, friendly coding matches.
                </p>
              </div>
              
              {/* Card 3 */}
              <div className="glass-panel p-6 rounded-xl hover:border-primary/30 transition-all group hover:scale-[1.01] duration-300">
                <div className="w-12 h-12 rounded bg-white/5 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[24px]">award_star</span>
                </div>
                <h3 className="text-xl font-headline-sm font-bold mb-2 text-on-surface">Leaderboard</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed font-body-md">
                  See your progress and celebrate your coding wins as you learn.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-16 bg-[#0d0d0f]" data-purpose="community">
          <div className="max-w-7xl mx-auto px-gutter">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-xs font-label-caps mb-4">
                <span className="material-symbols-outlined text-[12px]">hub</span>
                COMMUNITY
              </div>
              <h2 className="text-3xl font-headline-lg font-bold mb-4">
                Join our growing developer community
              </h2>
              <p className="text-base text-on-surface-variant max-w-2xl mx-auto font-body-lg leading-relaxed">
                Meet friendly coders, ask questions, and start your coding adventure together.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Stat Card 1 */}
              <div className="glass-panel p-6 rounded-xl border-white/5 hover:border-primary/20 transition-all duration-300">
                <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center mb-6 text-primary">
                  <span className="material-symbols-outlined text-[20px]">group_add</span>
                </div>
                <div className="text-3xl font-headline-lg font-bold text-on-surface mb-1">10,000+</div>
                <p className="text-outline font-label-caps text-[10px] tracking-wider uppercase">
                  FRIENDLY CODERS WELCOMING BEGINNERS
                </p>
              </div>
              
              {/* Stat Card 2 */}
              <div className="glass-panel p-6 rounded-xl border-white/5 hover:border-secondary/20 transition-all duration-300">
                <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center mb-6 text-secondary">
                  <span className="material-symbols-outlined text-[20px]">psychology</span>
                </div>
                <div className="text-3xl font-headline-lg font-bold text-on-surface mb-1">100+</div>
                <p className="text-outline font-label-caps text-[10px] tracking-wider uppercase">
                  EASY-TO-LEARN CHALLENGES
                </p>
              </div>
              
              {/* Stat Card 3 */}
              <div className="glass-panel p-6 rounded-xl border-white/5 hover:border-primary/20 transition-all duration-300">
                <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center mb-6 text-primary">
                  <span className="material-symbols-outlined text-[20px]">terminal</span>
                </div>
                <div className="text-3xl font-headline-lg font-bold text-primary neon-text-glow mb-1">
                  Open Source
                </div>
                <p className="text-outline font-label-caps text-[10px] tracking-wider uppercase">
                  EXPLORE CODING WITH OUR PLATFORM
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
