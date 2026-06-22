import { MainHeader } from './MainHeader';
import { Footer } from './Footer';

export function Problems() {
  return (
    <div className="min-h-screen text-on-surface bg-background select-none font-sans relative flex flex-col">
      {/* Subtle Scanline Effect */}
      <div className="scanline pointer-events-none"></div>

      <MainHeader />

      <main className="flex-grow pt-24 pb-12 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        {/* Header */}
        <header className="mb-10">
          <h1 className="font-display-lg text-display-lg text-primary tracking-tighter terminal-cursor mb-2">Problem Set</h1>
          <p className="text-on-surface-variant font-body-md max-w-2xl">Execute your logic. Solve algorithmic challenges curated for the elite. Submit your solution to climb the neural grid.</p>
        </header>

        {/* Filter Section */}
        <section className="glass-panel rounded-xl p-6 mb-12 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="relative flex-grow group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-3 pl-12 pr-4 text-body-md focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all placeholder:text-outline-variant"
                placeholder="Search problems by title..."
                type="text"
              />
            </div>
            {/* Filters Row */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="relative min-w-[140px]">
                <select className="appearance-none w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-3 px-4 text-body-md focus:border-primary outline-none cursor-pointer">
                  <option>Difficulty: All</option>
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-outline">expand_more</span>
              </div>
              <div className="relative min-w-[100px]">
                <select className="appearance-none w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-3 px-4 text-body-md focus:border-primary outline-none cursor-pointer">
                  <option>Show: 20</option>
                  <option>50</option>
                  <option>100</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-outline">expand_more</span>
              </div>
              <div className="flex border border-outline-variant rounded-lg overflow-hidden">
                <button className="p-3 bg-white/10 text-primary border-r border-outline-variant transition-colors">
                  <span className="material-symbols-outlined">grid_view</span>
                </button>
                <button className="p-3 hover:bg-white/5 transition-colors">
                  <span className="material-symbols-outlined">view_list</span>
                </button>
              </div>
            </div>
          </div>
          {/* Tag Filter Button */}
          <div className="flex items-center justify-between">
            <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-high hover:bg-surface-container-highest rounded-lg border border-outline-variant text-label-caps transition-all">
              <span className="material-symbols-outlined text-[18px]">filter_list</span>
              SHOW TAG FILTER
            </button>
            <span className="text-label-caps text-outline uppercase tracking-widest">0 problems found</span>
          </div>
        </section>

        {/* Problem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {/* Card 1 */}
          <div className="glass-panel p-6 rounded-xl flex flex-col gap-4 group cursor-pointer">
            <div className="flex justify-between items-start">
              <span className="px-3 py-1 rounded bg-tertiary/10 text-tertiary text-[10px] font-bold tracking-widest uppercase border border-tertiary/20">Easy</span>
              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">arrow_forward_ios</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-white group-hover:text-primary transition-colors">Two Sum</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-2 py-1 bg-surface-container text-outline text-label-caps rounded">Array</span>
              <span className="px-2 py-1 bg-surface-container text-outline text-label-caps rounded">Hash Table</span>
              <span className="px-2 py-1 bg-surface-container text-outline text-label-caps rounded">+1</span>
            </div>
          </div>
          {/* Card 2 */}
          <div className="glass-panel p-6 rounded-xl flex flex-col gap-4 group cursor-pointer">
            <div className="flex justify-between items-start">
              <span className="px-3 py-1 rounded bg-tertiary/10 text-tertiary text-[10px] font-bold tracking-widest uppercase border border-tertiary/20">Easy</span>
              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">arrow_forward_ios</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-white group-hover:text-primary transition-colors">Contains Duplicate</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-2 py-1 bg-surface-container text-outline text-label-caps rounded">Array</span>
              <span className="px-2 py-1 bg-surface-container text-outline text-label-caps rounded">Hash Table</span>
            </div>
          </div>
          {/* Card 3 */}
          <div className="glass-panel p-6 rounded-xl flex flex-col gap-4 group cursor-pointer">
            <div className="flex justify-between items-start">
              <span className="px-3 py-1 rounded bg-tertiary/10 text-tertiary text-[10px] font-bold tracking-widest uppercase border border-tertiary/20">Easy</span>
              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">arrow_forward_ios</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-white group-hover:text-primary transition-colors">Palindrome Check</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-2 py-1 bg-surface-container text-outline text-label-caps rounded">String</span>
              <span className="px-2 py-1 bg-surface-container text-outline text-label-caps rounded">Two Pointers</span>
            </div>
          </div>
          {/* Card 4 */}
          <div className="glass-panel p-6 rounded-xl flex flex-col gap-4 group cursor-pointer">
            <div className="flex justify-between items-start">
              <span className="px-3 py-1 rounded bg-tertiary/10 text-tertiary text-[10px] font-bold tracking-widest uppercase border border-tertiary/20">Easy</span>
              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">arrow_forward_ios</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-white group-hover:text-primary transition-colors">Split Strings by Separator</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-2 py-1 bg-surface-container text-outline text-label-caps rounded">Array</span>
              <span className="px-2 py-1 bg-surface-container text-outline text-label-caps rounded">String</span>
            </div>
          </div>
          {/* Card 5 */}
          <div className="glass-panel p-6 rounded-xl flex flex-col gap-4 group cursor-pointer">
            <div className="flex justify-between items-start">
              <span className="px-3 py-1 rounded bg-tertiary/10 text-tertiary text-[10px] font-bold tracking-widest uppercase border border-tertiary/20">Easy</span>
              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">arrow_forward_ios</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-white group-hover:text-primary transition-colors">Add Two Numbers</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-2 py-1 bg-surface-container text-outline text-label-caps rounded">Math</span>
              <span className="px-2 py-1 bg-surface-container text-outline text-label-caps rounded">Basic</span>
            </div>
          </div>
          {/* Card 6 */}
          <div className="glass-panel p-6 rounded-xl flex flex-col gap-4 group cursor-pointer">
            <div className="flex justify-between items-start">
              <span className="px-3 py-1 rounded bg-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase border border-primary/20">Medium</span>
              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">arrow_forward_ios</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-white group-hover:text-primary transition-colors">Add Two Numbers (Linked List)</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-2 py-1 bg-surface-container text-outline text-label-caps rounded">Linked List</span>
              <span className="px-2 py-1 bg-surface-container text-outline text-label-caps rounded">Math</span>
            </div>
          </div>
          {/* Card 7 */}
          <div className="glass-panel p-6 rounded-xl flex flex-col gap-4 group cursor-pointer">
            <div className="flex justify-between items-start">
              <span className="px-3 py-1 rounded bg-secondary/10 text-secondary text-[10px] font-bold tracking-widest uppercase border border-secondary/20">Hard</span>
              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">arrow_forward_ios</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-white group-hover:text-primary transition-colors">Median of Sorted Arrays</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-2 py-1 bg-surface-container text-outline text-label-caps rounded">Binary Search</span>
              <span className="px-2 py-1 bg-surface-container text-outline text-label-caps rounded">D&C</span>
            </div>
          </div>
          {/* Card 8 */}
          <div className="glass-panel p-6 rounded-xl flex flex-col gap-4 group cursor-pointer">
            <div className="flex justify-between items-start">
              <span className="px-3 py-1 rounded bg-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase border border-primary/20">Medium</span>
              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">arrow_forward_ios</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-white group-hover:text-primary transition-colors">Longest Palindrome</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-2 py-1 bg-surface-container text-outline text-label-caps rounded">Dynamic Programming</span>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center items-center gap-4">
          <button className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded-lg hover:border-primary transition-all text-outline hover:text-primary">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <div className="flex gap-2">
            <button className="w-10 h-10 flex items-center justify-center bg-primary text-on-primary rounded-lg font-bold">1</button>
            <button className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded-lg hover:bg-white/5 transition-all text-outline">2</button>
            <button className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded-lg hover:bg-white/5 transition-all text-outline">3</button>
            <span className="px-2 text-outline">...</span>
            <button className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded-lg hover:bg-white/5 transition-all text-outline">12</button>
          </div>
          <button className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded-lg hover:border-primary transition-all text-outline hover:text-primary">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
