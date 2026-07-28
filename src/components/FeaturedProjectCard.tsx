import { ArrowLeft, Play } from 'lucide-react';
import { FEATURED_PROJECT, GameTitle } from '../data/pixelforgeData';

interface FeaturedProjectCardProps {
  onSelectProject: (project: GameTitle) => void;
  onOpenShowreel: () => void;
}

export function FeaturedProjectCard({ onSelectProject, onOpenShowreel }: FeaturedProjectCardProps) {
  return (
    <section className="py-8" id="featured-project">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Outer Container */}
        <div className="bg-[#f2f4f7]/80 rounded-2xl border border-gray-200/80 p-6 md:p-8 lg:p-10 shadow-xs relative overflow-hidden transition-all hover:border-gray-300">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#635BFF] inline-block"></span>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#5c6574]">
              پروژه ویژه
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Info Column */}
            <div className="lg:col-span-3 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#121417] tracking-tight">
                {FEATURED_PROJECT.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#5c6574] leading-relaxed font-medium">
                {FEATURED_PROJECT.description}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onSelectProject(FEATURED_PROJECT)}
                  id="view-featured-project-btn"
                  className="group inline-flex items-center gap-2 text-xs font-bold text-[#121417] hover:text-black transition-colors"
                >
                  <span>مشاهده پروژه</span>
                  <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                </button>
              </div>
            </div>

            {/* Middle Media Column with Play Button Overlay */}
            <div className="lg:col-span-6 relative rounded-xl overflow-hidden group shadow-sm bg-black">
              <img
                src={FEATURED_PROJECT.image}
                alt={FEATURED_PROJECT.title}
                referrerPolicy="no-referrer"
                className="w-full h-64 sm:h-72 md:h-80 object-cover transform transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
              {/* Play Button Overlay */}
              <button
                onClick={onOpenShowreel}
                id="featured-play-btn"
                aria-label="پخش تریلر"
                className="absolute inset-0 m-auto w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 backdrop-blur-xs text-[#121417] flex items-center justify-center shadow-lg transform transition-all group-hover:scale-110 hover:bg-white"
              >
                <Play className="w-5 h-5 fill-current text-[#121417] -translate-x-0.5 rotate-180" />
              </button>
            </div>

            {/* Metadata Grid */}
            <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 gap-5 text-right border-t lg:border-t-0 lg:border-r border-gray-200 pt-6 lg:pt-0 lg:pr-8">
              <div className="space-y-1">
                <div className="text-[10px] font-bold text-gray-400">
                  سبک بازی
                </div>
                <div className="text-xs font-extrabold text-[#121417]">
                  {FEATURED_PROJECT.genre}
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-[10px] font-bold text-gray-400">
                  پلتفرم‌ها
                </div>
                <div className="text-xs font-extrabold text-[#121417]">
                  {FEATURED_PROJECT.platforms?.join('، ')}
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-[10px] font-bold text-gray-400">
                  تعداد بازیکنان
                </div>
                <div className="text-xs font-extrabold text-[#121417]">
                  {FEATURED_PROJECT.players}
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-[10px] font-bold text-gray-400">
                  تاریخ انتشار
                </div>
                <div className="text-xs font-extrabold text-[#121417]">
                  {FEATURED_PROJECT.releaseDate}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
