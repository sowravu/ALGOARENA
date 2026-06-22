import { MainHeader } from './MainHeader';
import { Footer } from './Footer';

export function Settings() {
  return (
    <div className="min-h-screen text-on-surface bg-background select-none font-sans relative flex flex-col">
      {/* Subtle Scanline Effect */}
      <div className="scanline pointer-events-none"></div>

      <MainHeader />

      <main className="flex-grow w-full max-w-container-max mx-auto px-margin-desktop py-12">
        <div className="flex flex-col md:flex-row gap-gutter">
          {/* SideNavBar */}
          <aside className="w-full md:w-64 shrink-0">
            <div className="mb-8">
              <h1 className="font-display-lg text-headline-sm text-on-surface">Settings</h1>
              <p className="font-body-md text-body-md text-on-surface-variant">Manage your account</p>
            </div>
            <div className="flex flex-col w-full md:w-64 space-y-2 p-unit bg-surface-container-low/50 backdrop-blur-md rounded-xl border border-white/5">
              <a className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary border-r-2 border-primary transition-all duration-200" href="#">
                <span className="material-symbols-outlined">person</span>
                <span className="font-body-md text-body-md">Profile Settings</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-all duration-200" href="#">
                <span className="material-symbols-outlined">verified_user</span>
                <span className="font-body-md text-body-md">Security & 2FA</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-all duration-200" href="#">
                <span className="material-symbols-outlined">lock</span>
                <span className="font-body-md text-body-md">Password</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-all duration-200" href="#">
                <span className="material-symbols-outlined">palette</span>
                <span className="font-body-md text-body-md">Theme & Color</span>
              </a>
            </div>
            {/* Account Info Snippet */}
            <div className="mt-8 p-4 bg-surface-container-lowest rounded-xl border border-white/5">
              <p className="font-label-caps text-label-caps text-primary mb-1">AlgoArena Account</p>
              <p className="font-code-md text-code-md text-on-surface-variant truncate">suresh@algoarena.io</p>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-grow space-y-6">
            {/* Personal Information Section */}
            <section className="glass-card rounded-xl p-8">
              <div className="mb-8">
                <h2 className="font-headline-sm text-headline-sm text-on-surface mb-1">Personal Information</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">Update your personal identity across the arena.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Avatar Column */}
                <div className="md:col-span-3 flex flex-col items-center">
                  <div className="relative group">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary/20 p-1 group-hover:border-primary transition-all duration-300">
                      <img
                        className="w-full h-full object-cover rounded-full"
                        alt="A professional profile photo of a developer with short dark hair and a focused expression, looking directly into the camera. The background is a clean, dark-themed digital workspace with soft bokeh effects of glowing circuit patterns in neon blue."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4AcvZUCqs1qmE3ZgkNzIMGZ9lqdJYa-vShcYeL-FhcznuCqE8IripuGZVgQscxuL2yPtdPIytXrjqWuSfzaPAF-RLqddPuERLjlagoEYCDAOEMl3pl1zbfS4uaTGBSsOCqNijGwI4r1tIAnqc_qZ32wyZGEWwW9umYeQh0-w9NIHMAOquOPFcXz3EeCEDmVjsh5mEjzYrQWNW9T1et_vjYLjFrXOoUbPzTX2ibrhbbfc3fj7oNfa6wUOgS2itpZy7dPak2FlKOfgM"
                      />
                    </div>
                    <button className="absolute bottom-0 right-0 p-2 bg-primary text-on-primary rounded-full shadow-lg hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-sm">edit</span>
                    </button>
                  </div>
                  <button className="mt-6 px-4 py-2 border border-primary/30 text-primary font-body-md text-sm rounded-lg hover:bg-primary/10 transition-all flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">image</span>
                    Change Avatar
                  </button>
                </div>
                {/* Form Column */}
                <div className="md:col-span-9 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">First Name</label>
                      <input
                        className="w-full bg-surface-container-highest/50 border border-white/10 rounded-lg px-4 py-2.5 text-on-surface font-body-md focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                        type="text"
                        defaultValue="sowravu"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Last Name</label>
                      <input
                        className="w-full bg-surface-container-highest/50 border border-white/10 rounded-lg px-4 py-2.5 text-on-surface font-body-md focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                        type="text"
                        defaultValue="suresh"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Username</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary font-code-md">@</span>
                      <input
                        className="w-full bg-surface-container-highest/50 border border-white/10 rounded-lg pl-8 pr-4 py-2.5 text-on-surface font-code-md focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                        type="text"
                        defaultValue="sowravu"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Bio</label>
                    <textarea
                      className="w-full bg-surface-container-highest/50 border border-white/10 rounded-lg px-4 py-2.5 text-on-surface font-body-md focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                      rows={4}
                      defaultValue="hello all i am a mern stack developer"
                    ></textarea>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Country</label>
                      <select
                        className="w-full bg-surface-container-highest/50 border border-white/10 rounded-lg px-4 py-2.5 text-on-surface font-body-md focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all appearance-none"
                        defaultValue="IN"
                      >
                        <option value="IN">India</option>
                        <option value="US">United States</option>
                        <option value="GB">United Kingdom</option>
                        <option value="DE">Germany</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Preferred Language</label>
                      <select
                        className="w-full bg-surface-container-highest/50 border border-white/10 rounded-lg px-4 py-2.5 text-on-surface font-body-md focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all appearance-none"
                        defaultValue="js"
                      >
                        <option value="js">JavaScript</option>
                        <option value="py">Python</option>
                        <option value="cpp">C++</option>
                        <option value="rs">Rust</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex flex-col">
                      <span className="font-body-md text-on-surface font-medium">Mute Notifications</span>
                      <span className="text-xs text-on-surface-variant">Silence all system alerts and sounds</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input className="sr-only peer" type="checkbox" />
                      <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                </div>
              </div>
            </section>

            {/* Social Links Section */}
            <section className="glass-card rounded-xl p-8">
              <div className="mb-8">
                <h2 className="font-headline-sm text-headline-sm text-on-surface mb-1">Social Links</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">Connect your online presence.</p>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">code</span>
                    GitHub
                  </label>
                  <input
                    className="w-full bg-surface-container-highest/50 border border-white/10 rounded-lg px-4 py-2.5 text-on-surface font-code-md focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                    type="url"
                    defaultValue="https://github.com/sowravu"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">alternate_email</span>
                    Twitter
                  </label>
                  <input
                    className="w-full bg-surface-container-highest/50 border border-white/10 rounded-lg px-4 py-2.5 text-on-surface font-code-md focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                    type="url"
                    defaultValue="https://x.com/sowravu_suresh"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">work</span>
                    LinkedIn
                  </label>
                  <input
                    className="w-full bg-surface-container-highest/50 border border-white/10 rounded-lg px-4 py-2.5 text-on-surface font-code-md focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                    type="url"
                    defaultValue="https://www.linkedin.com/in/sowravu/"
                  />
                </div>
              </div>
              <div className="mt-12 flex justify-end">
                <button className="bg-primary text-on-primary-container px-8 py-3 rounded-lg font-headline-sm text-sm font-bold shadow-[0_0_20px_rgba(0,210,255,0.3)] hover:scale-105 active:scale-95 transition-all duration-150">
                  Save Changes
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
