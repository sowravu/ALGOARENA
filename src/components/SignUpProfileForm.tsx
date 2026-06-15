import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function SignUpProfileForm() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Profile details submitted:', { firstName, lastName });
  };

  return (
    <div className="flex flex-col justify-between h-full flex-grow">
      <div>
        {/* Header */}
        <div className="mb-6">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2 font-semibold">Create your account</h2>
          <p className="font-body-md text-on-surface-variant">Personalize your profile</p>
        </div>
        
        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            {/* First Name Field */}
            <div className="space-y-2">
              <label className="font-label-caps text-label-caps text-outline-variant uppercase block tracking-wider" htmlFor="first-name">First Name</label>
              <div className="relative group input-glow border border-outline-variant/30 rounded-lg bg-surface-container-lowest transition-all">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-primary/60">
                  <span className="material-symbols-outlined text-[20px]">person</span>
                </div>
                <input 
                  className="block w-full pl-11 pr-3 py-3 bg-transparent border-none text-on-surface placeholder:text-outline focus:outline-none focus:ring-0 font-body-md" 
                  id="first-name" 
                  placeholder="HEX" 
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
            </div>
            
            {/* Last Name Field */}
            <div className="space-y-2">
              <label className="font-label-caps text-label-caps text-outline-variant uppercase block tracking-wider" htmlFor="last-name">Last Name</label>
              <div className="relative group input-glow border border-outline-variant/30 rounded-lg bg-surface-container-lowest transition-all">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-primary/60">
                  <span className="material-symbols-outlined text-[20px]">id_card</span>
                </div>
                <input 
                  className="block w-full pl-11 pr-3 py-3 bg-transparent border-none text-on-surface placeholder:text-outline focus:outline-none focus:ring-0 font-body-md" 
                  id="last-name" 
                  placeholder="RUNNER" 
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <button 
            type="submit"
            className="w-full py-3 px-6 rounded-lg btn-gradient text-white font-label-caps font-bold text-[13px] tracking-[0.2em] uppercase mt-4 active:scale-95 transition-all duration-150 cursor-pointer"
          >
            NEXT
          </button>
          
          {/* Back Link */}
          <div className="text-center mt-6">
            <button
              type="button"
              onClick={() => navigate('/signup')}
              className="font-label-caps text-label-caps text-primary hover:text-primary-container transition-colors duration-200 flex items-center justify-center gap-2 group mx-auto bg-transparent border-none cursor-pointer"
            >
              <span className="material-symbols-outlined text-[14px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
              BACK TO EMAIL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
