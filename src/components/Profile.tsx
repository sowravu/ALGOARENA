import { MainHeader } from './MainHeader';
import { Footer } from './Footer';

import { useNavigate } from 'react-router-dom';
export function Profile() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen text-on-surface bg-background select-none font-sans relative">
      {/* Subtle Scanline Effect */}
      <div className="scanline pointer-events-none"></div>

      <MainHeader />

      <main className="pt-24 pb-20 cyber-grid min-h-screen">
        <div className="max-w-container-max mx-auto px-margin-desktop space-y-gutter">
          {/* User Header Section */}
          <section className="glass-panel p-8 rounded-xl flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex flex-col md:flex-row gap-8 flex-grow">
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary shadow-[0_0_20px_rgba(165,231,255,0.3)]">
                  <img
                    className="w-full h-full object-cover"
                    alt="A sharp, cinematic profile picture of a young man with a slight beard, wearing a casual dark shirt. The lighting is dramatic and tech-focused, using high-contrast shadows and cool cyan highlight tones suitable for a high-end coding platform avatar."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuACfklikkal6XvP42o1qZd91hMv_xprkUjtwSz9z0H5M5ncvd5qc-3kFOWuWS9e8iAXN10J79dpA8kXmJY6If2v6v1UH5BrTXl-glc2-3JHilnRgQegHuONZ-lvXiFBLK3-5AlrMPLacGAYVOPtnzjetLNRrkOpS1H3v7kwddU0sgtv-HdsFEADzcyA2q_hPnZUkRixiaBGxK7a_wh5i2Q2UgNHYKa12ukwIZ6DNRvY9vZ8frHWwxPB5fCLtzb3RTFpZ0bzhzX4amSl"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-surface-container rounded-lg p-1 border border-outline-variant">
                  <img
                    alt="India"
                    className="w-6 h-4 object-cover rounded-sm"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz2elrlO1INBTEWpMeqk26qBFZFlAsWFMEesvgMZ3NpC70FZX1v7iQ8gcJWsHYbt2Qdk0RyPQQaWHmzxgqXh8PYKI7e_XpdpxYr18HzUtQcLLLi8j0WrOjRojrMfY_CMhTjjwwlMcD06vb-idxBZHqdDzFWrvsDbM-NhwzmVMZ9Am9SjgW5dVCKv5unr2PwrMzabHRSxmKRd-H1LKsVZRxAXdBJD2O5ZtgFe5Nc4OBYA0Lvf1RoMUitrYMbK1WpUTAqaZ3VNbqH_F6"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">sowravu suresh</h1>
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <span className="font-code-md text-code-md">@sowravu</span>
                    <button className="material-symbols-outlined text-[16px] hover:text-primary transition-colors">content_copy</button>
                  </div>
                </div>
                <p className="text-on-surface-variant font-body-md italic max-w-md">"hello all i am a mern stack developer"</p>
                <div className="flex flex-wrap gap-4 text-on-surface-variant font-label-caps text-label-caps uppercase">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                    <span>Joined Jun 15, 2026</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">location_on</span>
                    <span>IN</span>
                  </div>
                </div>
                <button onClick={() => navigate('/settings')} className="mt-4 px-6 py-2 border border-primary text-primary hover:bg-primary/10 transition-all rounded font-label-caps text-label-caps uppercase tracking-widest active:scale-95">
                  Edit Profile
                </button>
              </div>
            </div>
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
              <div className="glass-panel p-4 rounded-lg flex flex-col items-center justify-center min-w-[140px] border border-white/5 hover:border-primary/30 transition-colors group">
                <span className="material-symbols-outlined text-primary mb-1 group-hover:scale-110 transition-transform">leaderboard</span>
                <span className="font-display-lg text-headline-lg text-on-surface">0</span>
                <span className="font-label-caps text-[10px] text-on-surface-variant uppercase text-center">Problems Done</span>
              </div>
              <div className="glass-panel p-4 rounded-lg flex flex-col items-center justify-center min-w-[140px] border border-white/5 hover:border-secondary transition-colors group">
                <span className="material-symbols-outlined text-secondary mb-1 group-hover:scale-110 transition-transform">schedule</span>
                <span className="font-display-lg text-headline-lg text-on-surface">0</span>
                <span className="font-label-caps text-[10px] text-on-surface-variant uppercase text-center">Day Streak</span>
              </div>
              <div className="glass-panel p-4 rounded-lg flex flex-col items-center justify-center min-w-[140px] border border-white/5 hover:border-tertiary transition-colors group">
                <span className="material-symbols-outlined text-tertiary mb-1 group-hover:scale-110 transition-transform">emoji_events</span>
                <span className="font-display-lg text-headline-lg text-on-surface">#-</span>
                <span className="font-label-caps text-[10px] text-on-surface-variant uppercase text-center">Global Rank</span>
              </div>
              <div className="glass-panel p-4 rounded-lg flex flex-col items-center justify-center min-w-[140px] border border-white/5 hover:border-primary transition-colors group">
                <span className="material-symbols-outlined text-primary mb-1 group-hover:scale-110 transition-transform">public</span>
                <span className="font-display-lg text-headline-lg text-on-surface">#-</span>
                <span className="font-label-caps text-[10px] text-on-surface-variant uppercase text-center">Country Rank</span>
              </div>
            </div>
          </section>
          {/* Main Layout: Content + Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            {/* Left Column */}
            <div className="lg:col-span-8 space-y-gutter">
              {/* Problems Done Progress */}
              <section className="glass-panel p-6 rounded-xl space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">analytics</span>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">Problems Done</h2>
                  </div>
                  <span className="text-on-surface-variant font-label-caps text-label-caps">Progress across difficulty levels</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Easy */}
                  <div className="p-4 rounded-lg bg-surface-container-low border border-white/5">
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-label-caps text-label-caps text-tertiary">Easy</span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-display-lg text-headline-sm">0</span>
                        <span className="text-on-surface-variant">/ 6</span>
                      </div>
                    </div>
                    <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                      <div className="h-full bg-tertiary w-0 shadow-[0_0_10px_rgba(0,253,159,0.5)]"></div>
                    </div>
                  </div>
                  {/* Medium */}
                  <div className="p-4 rounded-lg bg-surface-container-low border border-white/5">
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-label-caps text-label-caps text-primary">Medium</span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-display-lg text-headline-sm">0</span>
                        <span className="text-on-surface-variant">/ 2</span>
                      </div>
                    </div>
                    <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-0 shadow-[0_0_10px_rgba(165,231,255,0.5)]"></div>
                    </div>
                  </div>
                  {/* Hard */}
                  <div className="p-4 rounded-lg bg-surface-container-low border border-white/5">
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-label-caps text-label-caps text-secondary">Hard</span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-display-lg text-headline-sm">0</span>
                        <span className="text-on-surface-variant">/ 0</span>
                      </div>
                    </div>
                    <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                      <div className="h-full bg-secondary w-0 shadow-[0_0_10px_rgba(236,178,255,0.5)]"></div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Recent Submissions */}
              <section className="glass-panel p-6 rounded-xl space-y-6">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">history</span>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">Recent Submissions</h2>
                </div>
                <div className="border-2 border-dashed border-outline-variant rounded-xl py-20 flex flex-col items-center justify-center text-on-surface-variant group">
                  <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[32px] opacity-30">history_toggle_off</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface/80">No Submissions Yet</h3>
                  <p className="font-body-md text-on-surface-variant/60 mt-2">Battle some problems to see your history!</p>
                  <button className="mt-6 px-8 py-3 bg-gradient-to-r from-primary to-secondary text-on-primary font-bold rounded shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all">
                    ENTER ARENA
                  </button>
                </div>
              </section>
            </div>
            {/* Right Column (Sidebar) */}
            <aside className="lg:col-span-4 space-y-gutter">
              {/* Monthly Activity Heatmap */}
              <section className="glass-panel p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary">insights</span>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">Monthly Activity</h2>
                  </div>
                </div>
                <div className="bg-surface-container-low/50 p-4 rounded-lg border border-white/5">
                  <div className="flex justify-between items-center mb-6">
                    <button className="p-1 hover:text-primary"><span className="material-symbols-outlined">chevron_left</span></button>
                    <span className="font-headline-sm text-on-surface">June 2026</span>
                    <button className="p-1 hover:text-primary"><span className="material-symbols-outlined">chevron_right</span></button>
                  </div>
                  {/* Simplified Heatmap Grid */}
                  <div className="grid grid-cols-7 gap-2 mb-4">
                    <div className="text-center text-[10px] text-on-surface-variant font-label-caps">S</div>
                    <div className="text-center text-[10px] text-on-surface-variant font-label-caps">M</div>
                    <div className="text-center text-[10px] text-on-surface-variant font-label-caps">T</div>
                    <div className="text-center text-[10px] text-on-surface-variant font-label-caps">W</div>
                    <div className="text-center text-[10px] text-on-surface-variant font-label-caps">T</div>
                    <div className="text-center text-[10px] text-on-surface-variant font-label-caps">F</div>
                    <div className="text-center text-[10px] text-on-surface-variant font-label-caps">S</div>
                    {/* Empty days */}
                    <div className="aspect-square bg-transparent"></div>
                    <div className="aspect-square bg-error-container/30 rounded-sm"></div>
                    <div className="aspect-square bg-error-container/40 rounded-sm"></div>
                    <div className="aspect-square bg-error-container/20 rounded-sm"></div>
                    <div className="aspect-square bg-error-container/30 rounded-sm"></div>
                    <div className="aspect-square bg-error-container/50 rounded-sm"></div>
                    <div className="aspect-square bg-error-container/20 rounded-sm"></div>
                    {/* Week 2 (Simulating activity) */}
                    <div className="aspect-square bg-error-container/30 rounded-sm"></div>
                    <div className="aspect-square bg-error-container/20 rounded-sm"></div>
                    <div className="aspect-square bg-tertiary/60 rounded-sm"></div>
                    <div className="aspect-square bg-error-container/10 rounded-sm"></div>
                    <div className="aspect-square bg-error-container/30 rounded-sm"></div>
                    <div className="aspect-square bg-error-container/20 rounded-sm"></div>
                    <div className="aspect-square bg-error-container/10 rounded-sm"></div>
                    {/* Rest filled with low activity */}
                    <div className="aspect-square bg-error-container/10 rounded-sm"></div>
                    <div className="aspect-square bg-error-container/10 rounded-sm"></div>
                    <div className="aspect-square bg-error-container/10 rounded-sm"></div>
                    <div className="aspect-square bg-error-container/10 rounded-sm"></div>
                    <div className="aspect-square bg-error-container/10 rounded-sm"></div>
                    <div className="aspect-square bg-error-container/10 rounded-sm"></div>
                    <div className="aspect-square bg-error-container/10 rounded-sm"></div>
                    <div className="aspect-square bg-surface-container-highest rounded-sm"></div>
                    <div className="aspect-square bg-surface-container-highest rounded-sm"></div>
                    <div className="aspect-square bg-surface-container-highest rounded-sm"></div>
                    <div className="aspect-square bg-surface-container-highest rounded-sm"></div>
                    <div className="aspect-square bg-surface-container-highest rounded-sm"></div>
                    <div className="aspect-square bg-surface-container-highest rounded-sm"></div>
                    <div className="aspect-square bg-surface-container-highest rounded-sm"></div>
                  </div>
                  <div className="flex items-center gap-4 text-[10px] font-label-caps uppercase text-on-surface-variant">
                    <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-error-container/30"></div> Inactive</div>
                    <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-tertiary/60"></div> Active</div>
                    <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_5px_rgba(0,253,159,0.8)]"></div> High Activity</div>
                  </div>
                </div>
              </section>
              {/* Top Performers */}
              <section className="glass-panel p-6 rounded-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary">workspace_premium</span>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">Top Performers</h2>
                  </div>
                </div>
                <div className="space-y-4">
                  {/* User 1 */}
                  <div className="flex items-center justify-between group cursor-pointer p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-6 text-on-surface-variant font-code-md">01</div>
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-tertiary/30">
                        <img
                          className="w-full h-full object-cover"
                          alt="A futuristic avatar of a female hacker with neon purple goggles, short silver hair, and a high-tech jacket, styled in a polished digital illustration with crisp edges and glowing accent lines."
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4xFSqlAX0FhWYt3HakTn8uWnJEiyKFZYCxzmUJISUyPdxpv1H7_CAXr5FLqVaI9_hOKxSy3v2QRoBSGAGL0N9_6yEDafZ1wi4sVWo6CoM2_9s891DfcCBnmD1_v24UzOmcPQU5djl4IPd5sn4Ms8l6ILu53x1vYZKKzV9IV84rAjr1d6Xw262NMIASeCKzUCVxR4qliCQl0U-k2xFFGxUl7gUQPERrdHQiHeQroDz040LIPSUksph-E3IWKykEtb4DS3r1dtdQVnO"
                        />
                      </div>
                      <div>
                        <div className="text-on-surface font-body-md leading-none mb-1">cameron453_x</div>
                        <div className="text-[10px] text-on-surface-variant uppercase tracking-widest font-label-caps">AQ</div>
                      </div>
                    </div>
                    <div className="font-display-lg text-headline-sm text-primary group-hover:neon-text-glow transition-all">10</div>
                  </div>
                  {/* User 2 */}
                  <div className="flex items-center justify-between group cursor-pointer p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-6 text-on-surface-variant font-code-md">02</div>
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant">
                        <img
                          className="w-full h-full object-cover"
                          alt="A stylized digital art avatar of a character with a pumpkin head wearing a black hoodie, glowing orange eyes, and a cool underground aesthetic against a dark backdrop with circuit board motifs."
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuArqU6kk9HkqhPjBg5CGUHQpDafPOz_abBXg6e22okurRRjTiwmuT6kID9S0XQuHSYnIREdmrfvRTI3OfEwJWwKbYqKIZUhWYIf3MlKB1YDyChPrXMiL8X0zv7ev_siSBWygwaM6t6i9WQih9oPMRdETKE8A_tMLKJaTuhehc5BYVTe7Teul8JvfvQvpmUa3KxHjU3CqhFttoONL2Hry9YRKAlBSBEF8HWPICuA9x_Qzj0RaZ21Ad8y_11RxwwNOqLZuRxACThZYXzp"
                        />
                      </div>
                      <div>
                        <div className="text-on-surface font-body-md leading-none mb-1">mello</div>
                        <div className="text-[10px] text-on-surface-variant uppercase tracking-widest font-label-caps">AO</div>
                      </div>
                    </div>
                    <div className="font-display-lg text-headline-sm text-on-surface">6</div>
                  </div>
                  {/* User 3 */}
                  <div className="flex items-center justify-between group cursor-pointer p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-6 text-on-surface-variant font-code-md">03</div>
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant">
                        <img
                          className="w-full h-full object-cover"
                          alt="An abstract anime-style profile picture of a character with vibrant red hair and a robotic eye, wearing tactical gear. The art style is sharp and modern with high saturation and tech-wear influences."
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLBIimqB6IL7C-SoEBhd2Gq3vBSa3gyyoxa9zAWX8ZwImilJcTcu1RwT98rBv_fTzCseqYWt_xIZYLoKRVT1Bo0RVFgPfUgSccN6gYI07G3-V2kW6ly7aF9iM-mecDkvzMN92iZlCeZEHeBnxQzg0fiXdnQ9img1592tkqD_gcdUZCm16OCeFaejJr6HLuhv1qsMvPNd_3uXviBmkF2F3aQYnZ8tt4Jw8znZGAaS5eFtxTkXJ3vH4Zd9hdwATPX4dYQbxt7dMUF7sX"
                        />
                      </div>
                      <div>
                        <div className="text-on-surface font-body-md leading-none mb-1">foodlae4</div>
                        <div className="text-[10px] text-on-surface-variant uppercase tracking-widest font-label-caps">BJ</div>
                      </div>
                    </div>
                    <div className="font-display-lg text-headline-sm text-on-surface">6</div>
                  </div>
                </div>
                <a className="mt-6 flex items-center justify-center gap-2 text-primary font-label-caps text-label-caps uppercase group transition-all" href="#">
                  View full leaderboard
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </section>
              {/* Links & Info */}
              <section className="glass-panel p-6 rounded-xl space-y-4">
                <div className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors cursor-pointer group">
                  <span className="material-symbols-outlined text-[20px]">link</span>
                  <span className="font-code-md text-code-md border-b border-transparent group-hover:border-primary">https://github.com/sowravu</span>
                </div>
                <div className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[20px]">location_on</span>
                  <span className="font-body-md">Karnataka, IN</span>
                </div>
              </section>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
