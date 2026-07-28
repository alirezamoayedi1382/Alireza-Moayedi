import { useState } from 'react';
import { ArrowLeft, Play } from 'lucide-react';
import { HERO_STATS, STUDIO_IMAGES } from '../data/pixelforgeData';

interface HeroSectionProps {
  onOpenShowreel: () => void;
  onExploreGames: () => void;
}

export function HeroSection({ onOpenShowreel, onExploreGames }: HeroSectionProps) {
  const [activeDot, setActiveDot] = useState(0);

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden" id="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Right Column Text Content (In RTL this comes first visually) */}
          <div className="lg:col-span-6 space-y-8">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#5c6574]">
                ما استودیوی <span className="text-[#635BFF]">پیکسل‌فورج</span> هستیم
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#635BFF] inline-block animate-pulse"></span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#121417] leading-[1.1]">
              بازی.<br />
              خلق.<br />
              الهام.
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#5c6574] max-w-md font-medium leading-relaxed">
              ما بازی‌هایی طراحی می‌کنیم و می‌سازیم که میلیون‌ها بازیکن را در سراسر جهان به هم متصل می‌سازد.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreGames}
                id="explore-games-btn"
                className="group inline-flex items-center gap-2.5 bg-[#121417] text-white text-xs font-bold px-6 py-3.5 rounded-full hover:bg-black transition-all shadow-sm hover:shadow-md active:scale-95"
              >
                <span>مشاهده بازی‌های ما</span>
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              </button>

              <button
                onClick={onOpenShowreel}
                id="watch-showreel-btn"
                className="group inline-flex items-center gap-3 text-xs font-bold text-[#121417] hover:text-black px-2 py-2.5 transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:border-black transition-all">
                  <Play className="w-3.5 h-3.5 fill-current text-[#121417] -translate-x-0.5 rotate-180" />
                </div>
                <span className="tracking-wide">تماشای ویدیوی استودیو</span>
              </button>
            </div>

            {/* Hero Stats Row */}
            <div className="pt-8 border-t border-gray-200/80 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4">
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#121417] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-bold text-[#6b7280] leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Left Column 3D Floating Island Graphic */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <div className="relative w-full max-w-lg lg:max-w-xl group">
              {/* Subtle background glow circle */}
              <div className="absolute -inset-4 bg-radial from-gray-200/40 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />

              {/* Main 3D Floating Island Image */}
              <div className="relative transform transition-all duration-700 hover:scale-[1.02]">
                <img
                  src={STUDIO_IMAGES.heroIsland}
                  alt="دنیای سه بعدی پیکسل‌فورج"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain drop-shadow-xl select-none"
                />
              </div>

              {/* Left/Right Vertical Dot Navigation Indicator */}
              <div className="absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 py-2 z-10">
                {[0, 1, 2, 3, 4].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveDot(idx)}
                    aria-label={`اسلاید ${idx + 1}`}
                    className={`transition-all duration-300 rounded-full ${
                      activeDot === idx
                        ? 'w-2.5 h-2.5 bg-[#121417] scale-110'
                        : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
