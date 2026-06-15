import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Operator ID / Email submitted:', email);
  };

  return (
    <div className="flex flex-col justify-between h-full flex-grow">
      <div>
        {/* Header */}
        <div className="mb-6">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2 font-semibold">Welcome Back, Player One</h2>
          <p className="font-body-md text-on-surface-variant">Sign in to resume your streak.</p>
        </div>
        
        {/* Form */}
        <form className="space-y-4" onSubmit={handleLoginSubmit}>
          {/* Email Field */}
          <div className="space-y-2">
            <label className="font-label-caps text-label-caps text-outline-variant uppercase tracking-wider" htmlFor="email">Operator ID / Email</label>
            <div className="relative group input-glow border border-outline-variant/30 rounded-lg bg-surface-container-lowest transition-all">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-primary/60">
                <span className="material-symbols-outlined text-[20px]">code</span>
              </div>
              <input 
                className="block w-full pl-12 pr-4 py-3 bg-transparent border-none text-on-surface placeholder:text-outline focus:outline-none focus:ring-0 font-body-md" 
                id="email" 
                placeholder="Enter your developer email" 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          
          {/* Password Field */}
          <div className="space-y-2">
            <div className="flex justify-between items-end">
              <label className="font-label-caps text-label-caps text-outline-variant uppercase tracking-wider" htmlFor="password">Access Key</label>
              <a className="font-label-caps text-[11px] text-primary hover:text-primary-container transition-colors uppercase" href="#">Forgot Password?</a>
            </div>
            <div className="relative group input-glow border border-outline-variant/30 rounded-lg bg-surface-container-lowest transition-all">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-primary/60">
                <span className="material-symbols-outlined text-[20px]">lock</span>
              </div>
              <input 
                className="block w-full pl-12 pr-12 py-3 bg-transparent border-none text-on-surface placeholder:text-outline focus:outline-none focus:ring-0 font-body-md" 
                id="password" 
                placeholder="••••••••••••" 
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button 
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-outline hover:text-on-surface transition-colors cursor-pointer" 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                <span className="material-symbols-outlined text-[20px]">
                  {showPassword ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>
          </div>
          
          {/* CTA Button */}
          <button 
            type="submit"
            className="w-full py-3 px-6 rounded-lg btn-gradient text-white font-label-caps font-bold text-[13px] tracking-[0.2em] uppercase mt-4 active:scale-95 transition-all duration-150 cursor-pointer"
          >
            ENTER THE ARENA
          </button>
          
          {/* Divider */}
          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-outline-variant/20"></div>
            <span className="flex-shrink mx-4 font-label-caps text-[10px] text-outline-variant uppercase tracking-widest">OR CODE VIA</span>
            <div className="flex-grow border-t border-outline-variant/20"></div>
          </div>
          
          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-4">
            <button 
              type="button" 
              className="flex items-center justify-center space-x-2 py-2.5 border border-outline-variant/30 rounded-lg hover:bg-surface-variant/20 transition-all group cursor-pointer active:scale-[0.98]"
            >
              <img 
                alt="Google" 
                className="w-5 h-5 opacity-80 group-hover:opacity-100" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD69aJanv5c0BvRqKTuZkgGw2mZbF23x2DShIRtq9H7qn5vwcchX-1s4nnNf3sHhUgJFoCBaMaJS41ChhqBGQX1k3mzRYCEJTAiFvBHabL_CwaM1j14T-IJivH6EdW4MnokmKbzAIXsDm3oou_xU7L_GZo68Q-263x9k0DbDQ1gTec6mehoRih6PPZDDv85lwS1Ls_PpZzyOZqQo-LAI21togSvxEjHeCy77D_Ks6dA1PFHy6DZ9m5Qzc0QQRb7ZjiEjXWPLJTiLC-e"
              />
              <span className="font-label-caps text-[12px] text-on-surface-variant group-hover:text-on-surface font-semibold">GOOGLE</span>
            </button>
            <button 
              type="button" 
              className="flex items-center justify-center space-x-2 py-2.5 border border-outline-variant/30 rounded-lg hover:bg-surface-variant/20 transition-all group cursor-pointer active:scale-[0.98]"
            >
              <svg className="w-5 h-5 fill-on-surface-variant group-hover:fill-on-surface" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
              <span className="font-label-caps text-[12px] text-on-surface-variant group-hover:text-on-surface font-semibold">GITHUB</span>
            </button>
          </div>
        </form>
      </div>
      
      {/* Footer inside Card */}
      <div className="text-center mt-4">
        <p className="font-body-md text-on-surface-variant">
          New to the arena? 
          <button 
            type="button"
            onClick={() => navigate('/signup')}
            className="text-primary font-semibold ml-2 hover:underline decoration-primary decoration-2 underline-offset-4 transition-all bg-transparent border-none cursor-pointer"
          >
            Create an Account
          </button>
        </p>
      </div>
    </div>
  );
}
