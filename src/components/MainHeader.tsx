import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function MainHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0C]/90 backdrop-blur-md border-b border-white/5" data-purpose="main-navigation">
      <div className="px-gutter flex items-center justify-between h-16 max-w-container-max mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-8 flex-1">
          <Link to="/" className="text-2xl font-bold text-primary tracking-tighter neon-text-glow uppercase select-none">
            ALGOARENA
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 flex-1 justify-center">
            <Link
              to="/"
              className={
                currentPath === '/'
                  ? "flex items-center gap-2 px-4 py-2 bg-white/5 rounded text-white font-medium"
                  : "flex items-center gap-2 text-on-surface-variant hover:text-white transition-colors"
              }
            >
              <span className="material-symbols-outlined text-[20px]">home</span>
              Home
            </Link>
            <a className="flex items-center gap-2 text-on-surface-variant hover:text-white transition-colors" href="#">
              <span className="material-symbols-outlined text-[20px]">dashboard</span>
              Dashboard
            </a>
            <Link
              to="/profile"
              className={
                currentPath === '/profile'
                  ? "flex items-center gap-2 px-4 py-2 bg-white/5 rounded text-white font-medium"
                  : "flex items-center gap-2 text-on-surface-variant hover:text-white transition-colors"
              }
            >
              <span className="material-symbols-outlined text-[20px]">person</span>
              Profile
            </Link>
            <Link
              to="/problems"
              className={
                currentPath === '/problems'
                  ? "flex items-center gap-2 px-4 py-2 bg-white/5 rounded text-white font-medium"
                  : "flex items-center gap-2 text-on-surface-variant hover:text-white transition-colors"
              }
            >
              <span className="material-symbols-outlined text-[20px]">code</span>
              Problems
            </Link>
            <a className="flex items-center gap-2 text-on-surface-variant hover:text-white transition-colors" href="#">
              <span className="material-symbols-outlined text-[20px]">terminal</span>
              Compiler
            </a>
            <a className="flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary rounded border border-secondary/20 font-medium" href="#">
              <span className="material-symbols-outlined text-[18px]">bolt</span>
              Challenges
            </a>
            <a className="flex items-center gap-2 text-on-surface-variant hover:text-white transition-colors" href="#">
              <span className="material-symbols-outlined text-[20px]">leaderboard</span>
              Leaderboard
            </a>
            <Link
              to="/settings"
              className={
                currentPath === '/settings'
                  ? "flex items-center gap-2 px-4 py-2 bg-white/5 rounded text-white font-medium"
                  : "flex items-center gap-2 text-on-surface-variant hover:text-white transition-colors"
              }
            >
              <span className="material-symbols-outlined text-[20px]">settings</span>
              Settings
            </Link>
          </nav>
        </div>
        
        {/* Right Side Utilities */}
        <div className="flex items-center gap-4">
          <button className="p-2 text-on-surface-variant hover:text-white transition-colors cursor-pointer">
            <span className="material-symbols-outlined">search</span>
          </button>
          
          <Link to="/login" className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/50 block hover:scale-105 transition-all">
            <img 
              alt="User Avatar" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ4crmA81WKDtkUHvvEiBYyUbkOhWvuNSYFx-boGBZnqmOtA7DEGeO5FKi0PSq8GMiJE1CHSfy6KwSKo-Wmy_haDVC1a7n6KGSzi6DDZiCfls9eDWvileMVI4dCNKrSpNwno41DZ2geUnHGsxHk_Z1-DUHVO8IMlsAjtdDMdrmno_i1g4pLrx8wrTiaqHYmjP-Dzmt7anRxL3n0KGQNN9RY9eoDyveLGDD9l8DBke3ljN-nhZ47PERZaAKMb-C2QWNoglYHkPzB66Z"
            />
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-on-surface-variant hover:text-white focus:outline-none transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[28px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div 
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden bg-[#0A0A0C]/95 backdrop-blur-lg border-t border-white/5 ${
          mobileMenuOpen ? 'max-h-[450px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col px-6 gap-2">
          <Link 
            to="/" 
            onClick={() => setMobileMenuOpen(false)}
            className={
              currentPath === '/'
                ? "flex items-center gap-3 px-4 py-2 bg-white/5 rounded text-white font-medium hover:bg-white/10 transition-colors"
                : "flex items-center gap-3 px-4 py-2.5 text-on-surface-variant hover:text-white hover:bg-white/5 rounded transition-all"
            }
          >
            <span className={`material-symbols-outlined text-[20px] ${currentPath === '/' ? 'text-primary' : ''}`}>home</span>
            Home
          </Link>
          <a 
            className="flex items-center gap-3 px-4 py-2.5 text-on-surface-variant hover:text-white hover:bg-white/5 rounded transition-all" 
            href="#"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="material-symbols-outlined text-[20px]">dashboard</span>
            Dashboard
          </a>
          <Link 
            to="/profile"
            onClick={() => setMobileMenuOpen(false)}
            className={
              currentPath === '/profile'
                ? "flex items-center gap-3 px-4 py-2 bg-white/5 rounded text-white font-medium hover:bg-white/10 transition-colors"
                : "flex items-center gap-3 px-4 py-2.5 text-on-surface-variant hover:text-white hover:bg-white/5 rounded transition-all"
            }
          >
            <span className={`material-symbols-outlined text-[20px] ${currentPath === '/profile' ? 'text-primary' : ''}`}>person</span>
            Profile
          </Link>
          <Link 
            to="/problems"
            onClick={() => setMobileMenuOpen(false)}
            className={
              currentPath === '/problems'
                ? "flex items-center gap-3 px-4 py-2 bg-white/5 rounded text-white font-medium hover:bg-white/10 transition-colors"
                : "flex items-center gap-3 px-4 py-2.5 text-on-surface-variant hover:text-white hover:bg-white/5 rounded transition-all"
            }
          >
            <span className={`material-symbols-outlined text-[20px] ${currentPath === '/problems' ? 'text-primary' : ''}`}>code</span>
            Problems
          </Link>
          <a 
            className="flex items-center gap-3 px-4 py-2.5 text-on-surface-variant hover:text-white hover:bg-white/5 rounded transition-all" 
            href="#"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="material-symbols-outlined text-[20px]">terminal</span>
            Compiler
          </a>
          <a 
            className="flex items-center gap-3 px-4 py-2 text-secondary bg-secondary/10 hover:bg-secondary/20 rounded border border-secondary/20 font-medium transition-all" 
            href="#"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="material-symbols-outlined text-[18px]">bolt</span>
            Challenges
          </a>
          <a 
            className="flex items-center gap-3 px-4 py-2.5 text-on-surface-variant hover:text-white hover:bg-white/5 rounded transition-all" 
            href="#"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="material-symbols-outlined text-[20px]">leaderboard</span>
            Leaderboard
          </a>
          <Link 
            to="/settings"
            onClick={() => setMobileMenuOpen(false)}
            className={
              currentPath === '/settings'
                ? "flex items-center gap-3 px-4 py-2 bg-white/5 rounded text-white font-medium hover:bg-white/10 transition-colors"
                : "flex items-center gap-3 px-4 py-2.5 text-on-surface-variant hover:text-white hover:bg-white/5 rounded transition-all"
            }
          >
            <span className={`material-symbols-outlined text-[20px] ${currentPath === '/settings' ? 'text-primary' : ''}`}>settings</span>
            Settings
          </Link>
        </nav>
      </div>
    </header>
  );
}
