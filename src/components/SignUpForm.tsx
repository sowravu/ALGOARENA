import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import verificationImg from '../assets/verification.jpg';

export function SignUpForm() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [signUpEmail, setSignUpEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // Step 4 states
  const [timeLeft, setTimeLeft] = useState(0);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign Up Operator ID / Email submitted:', signUpEmail);
    setStep(2);
  };

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Profile details submitted:', { signUpEmail, firstName, lastName });
    setStep(3);
  };

  const handleCompleteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    console.log('Registration Complete:', { signUpEmail, firstName, lastName, password });
    setStep(4);
  };

  const handleResendMail = () => {
    if (timeLeft > 0 || isSending || isSent) return;
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setTimeout(() => {
        setIsSent(false);
        setTimeLeft(60);
      }, 1500);
    }, 1000);
  };

  if (step === 1) {
    return (
      <div className="flex flex-col justify-between h-full flex-grow">
        <div>
          {/* Header */}
          <div className="mb-6">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2 font-semibold">Create your account</h2>
            <p className="font-body-md text-on-surface-variant">Register your account to enter the arena.</p>
          </div>

          {/* Progress Indicators */}
          <div className="flex gap-2 mb-6">
            <div className="h-1 flex-grow bg-primary shadow-[0_0_10px_rgba(165,231,255,0.5)]"></div>
            <div className="h-1 flex-grow bg-outline-variant/20"></div>
            <div className="h-1 flex-grow bg-outline-variant/20"></div>
          </div>
          
          {/* Form */}
          <form className="space-y-4" onSubmit={handleEmailSubmit}>
            {/* Email Field */}
            <div className="space-y-2">
              <label className="font-label-caps text-label-caps text-outline-variant uppercase tracking-wider" htmlFor="signup-email">Operator ID / Email</label>
              <div className="relative group input-glow border border-outline-variant/30 rounded-lg bg-surface-container-lowest transition-all">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-primary/60">
                  <span className="material-symbols-outlined text-[20px]">code</span>
                </div>
                <input 
                  className="block w-full pl-12 pr-4 py-3 bg-transparent border-none text-on-surface placeholder:text-outline focus:outline-none focus:ring-0 font-body-md" 
                  id="signup-email" 
                  placeholder="Enter your developer email" 
                  type="email"
                  value={signUpEmail}
                  onChange={(e) => setSignUpEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            
            {/* CTA Button */}
            <button 
              type="submit"
              className="w-full py-3 px-6 rounded-lg btn-gradient text-white font-label-caps font-bold text-[13px] tracking-[0.2em] uppercase mt-4 active:scale-95 transition-all duration-150 cursor-pointer"
            >
              CONTINUE
            </button>
            
            {/* Divider */}
            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-outline-variant/20"></div>
              <span className="flex-shrink mx-4 font-label-caps text-[10px] text-outline-variant uppercase tracking-widest">OR CODE VIA</span>
              <div className="flex-grow border-t border-outline-variant/20"></div>
            </div>
            
            {/* Social Logins */}
            <div className="flex w-full">
              <button 
                type="button" 
                className="w-full flex items-center justify-center space-x-2 py-2.5 border border-outline-variant/30 rounded-lg hover:bg-surface-variant/20 transition-all group cursor-pointer active:scale-[0.98]"
              >
                <img 
                  alt="Google" 
                  className="w-5 h-5 opacity-80 group-hover:opacity-100" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD69aJanv5c0BvRqKTuZkgGw2mZbF23x2DShIRtq9H7qn5vwcchX-1s4nnNf3sHhUgJFoCBaMaJS41ChhqBGQX1k3mzRYCEJTAiFvBHabL_CwaM1j14T-IJivH6EdW4MnokmKbzAIXsDm3oou_xU7L_GZo68Q-263x9k0DbDQ1gTec6mehoRih6PPZDDv85lwS1Ls_PpZzyOZqQo-LAI21togSvxEjHeCy77D_Ks6dA1PFHy6DZ9m5Qzc0QQRb7ZjiEjXWPLJTiLC-e"
                />
                <span className="font-label-caps text-[12px] text-on-surface-variant group-hover:text-on-surface font-semibold">CONTINUE WITH GOOGLE</span>
              </button>
            </div>
          </form>
        </div>
        
        {/* Footer inside Card */}
        <div className="text-center mt-4">
          <p className="font-body-md text-on-surface-variant">
            Already a user? 
            <button 
              type="button"
              onClick={() => navigate('/login')}
              className="text-primary font-semibold ml-2 hover:underline decoration-primary decoration-2 underline-offset-4 transition-all bg-transparent border-none cursor-pointer"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="flex flex-col justify-between h-full flex-grow">
        <div>
          {/* Header */}
          <div className="mb-6">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2 font-semibold">Create your account</h2>
            <p className="font-body-md text-on-surface-variant">Personalize your profile</p>
          </div>

          {/* Progress Indicators */}
          <div className="flex gap-2 mb-6">
            <div className="h-1 flex-grow bg-primary"></div>
            <div className="h-1 flex-grow bg-primary shadow-[0_0_10px_rgba(165,231,255,0.5)]"></div>
            <div className="h-1 flex-grow bg-outline-variant/20"></div>
          </div>
          
          {/* Form */}
          <form className="space-y-4" onSubmit={handleProfileSubmit}>
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
                onClick={() => setStep(1)}
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

  if (step === 3) {
    return (
      <div className="flex flex-col justify-between h-full flex-grow">
        <div>
          {/* Header */}
          <div className="mb-6">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2 font-semibold">Secure your account</h2>
            <p className="font-body-md text-on-surface-variant font-medium">Set a strong password for your operator profile.</p>
          </div>

          {/* Progress Indicators */}
          <div className="flex gap-2 mb-6">
            <div className="h-1 flex-grow bg-primary"></div>
            <div className="h-1 flex-grow bg-primary"></div>
            <div className="h-1 flex-grow bg-primary shadow-[0_0_10px_rgba(165,231,255,0.5)]"></div>
          </div>
          
          {/* Form */}
          <form className="space-y-4" onSubmit={handleCompleteSubmit}>
            {/* Password Field */}
            <div className="space-y-2">
              <label className="font-label-caps text-label-caps text-outline-variant uppercase tracking-wider block" htmlFor="password">Password</label>
              <div className="relative group input-glow border border-outline-variant/30 rounded-lg bg-surface-container-lowest transition-all">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-primary/60">
                  <span className="material-symbols-outlined text-[20px]">lock</span>
                </div>
                <input 
                  className="block w-full pl-12 pr-4 py-3 bg-transparent border-none text-on-surface placeholder:text-outline focus:outline-none focus:ring-0 font-body-md" 
                  id="password" 
                  placeholder="••••••••" 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            
            {/* Confirm Password Field */}
            <div className="space-y-2">
              <label className="font-label-caps text-label-caps text-outline-variant uppercase tracking-wider block" htmlFor="confirm-password">Confirm Password</label>
              <div className="relative group input-glow border border-outline-variant/30 rounded-lg bg-surface-container-lowest transition-all">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-primary/60">
                  <span className="material-symbols-outlined text-[20px]">verified_user</span>
                </div>
                <input 
                  className="block w-full pl-12 pr-4 py-3 bg-transparent border-none text-on-surface placeholder:text-outline focus:outline-none focus:ring-0 font-body-md" 
                  id="confirm-password" 
                  placeholder="••••••••" 
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            
            {/* CTA Button */}
            <button 
              type="submit"
              className="w-full py-3 px-6 rounded-lg btn-gradient text-white font-label-caps font-bold text-[13px] tracking-[0.2em] uppercase mt-6 flex items-center justify-center gap-3 active:scale-95 transition-all duration-150 cursor-pointer"
            >
              Complete Registration <span className="material-symbols-outlined text-[20px]">bolt</span>
            </button>
            
            {/* Back Link */}
            <div className="text-center mt-6">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="font-label-caps text-[11px] text-primary hover:text-primary-container transition-colors uppercase flex items-center justify-center gap-2 group mx-auto bg-transparent border-none cursor-pointer"
              >
                <span className="material-symbols-outlined text-[14px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
                Back to Profile
              </button>
            </div>
          </form>

          {/* Decorative System Logs */}
          <div className="mt-8 flex justify-between items-center opacity-40 font-code-md text-[10px] uppercase tracking-wider select-none">
            <div className="flex gap-4">
              <span>HASH: SHA-512</span>
              <span>SALT: AUTO_GEN</span>
            </div>
            <span>NODE_03</span>
          </div>
        </div>
      </div>
    );
  }

  // Step 4: Email Verification
  return (
    <div className="flex flex-col justify-between h-full flex-grow text-center">
      <div className="flex flex-col justify-between h-full flex-grow">
        {/* Verification Content */}
        <div className="mb-6">
          <div className="relative inline-block mb-6 group">
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-75 group-hover:scale-90 transition-transform duration-700"></div>
            <img 
              alt="Verification Pulse" 
              className="relative w-40 h-40 mx-auto object-contain drop-shadow-[0_0_30px_rgba(71,214,255,0.3)]" 
              src={verificationImg}
            />
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2 tracking-tight">Verify your email</h2>
          <p className="font-body-md text-on-surface-variant mb-1">Check your email for a verification link.</p>
          <p className="font-code-md text-primary font-medium">{signUpEmail || 'your email'}</p>
        </div>

        <div className="space-y-6">
          {timeLeft > 0 ? (
            <p className="font-body-md text-on-surface-variant/60">
              Wait {timeLeft} seconds to resend email
            </p>
          ) : (
            <button 
              type="button"
              onClick={handleResendMail}
              className={`w-full py-3 px-6 rounded-lg font-label-caps font-bold text-[13px] tracking-[0.2em] uppercase transition-all duration-150 cursor-pointer flex items-center justify-center gap-2 ${
                isSent 
                ? 'bg-tertiary text-on-tertiary shadow-[0_0_20px_rgba(0,253,159,0.3)]' 
                : 'btn-gradient text-white active:scale-95'
              }`}
              disabled={isSending}
            >
              {isSending && (
                <span className="material-symbols-outlined animate-spin text-[18px]">refresh</span>
              )}
              {isSent && (
                <>
                  <span className="material-symbols-outlined text-[18px]">check_circle</span>
                  SENT
                </>
              )}
              {!isSending && !isSent && 'RESEND VERIFICATION MAIL'}
            </button>
          )}

          <div className="flex items-center justify-center">
            <button
              type="button"
              onClick={() => setStep(3)}
              className="font-label-caps text-[11px] text-outline hover:text-primary transition-colors uppercase flex items-center gap-2 group bg-transparent border-none cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
              Back to Security
            </button>
          </div>
        </div>

        <div className="mt-8 opacity-30 select-none">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-outline-variant to-transparent mb-4"></div>
          <p className="font-code-md text-[9px] text-outline-variant tracking-widest uppercase text-center">Encryption Status: AES-256 Validated</p>
        </div>
      </div>
    </div>
  );
}
