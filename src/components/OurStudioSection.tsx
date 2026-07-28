import { ArrowRight, Quote } from 'lucide-react';
import { STUDIO_IMAGES } from '../data/pixelforgeData';

interface OurStudioSectionProps {
  onJoinTeam: () => void;
}

export function OurStudioSection({ onJoinTeam }: OurStudioSectionProps) {
  return (
    <section className="py-12 md:py-16" id="studio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-4 space-y-5">
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400">
              OUR STUDIO
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121417] tracking-tight leading-tight">
              A team of creators and dreamers
            </h2>

            <p className="text-xs sm:text-sm text-[#5c6574] leading-relaxed font-medium">
              We're gamers, artists, engineers, and storytellers passionate about creating unforgettable worlds.
            </p>

            <div className="pt-2">
              <button
                onClick={onJoinTeam}
                id="join-team-btn"
                className="group inline-flex items-center gap-2 text-xs font-bold text-[#121417] hover:text-black tracking-wider transition-colors"
              >
                <span>JOIN OUR TEAM</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Image Gallery Grid (3 Photos + 1 Dark Quote Card) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Photo 1 */}
            <div className="rounded-xl overflow-hidden aspect-4/3 bg-gray-200 border border-gray-200 shadow-2xs group">
              <img
                src={STUDIO_IMAGES.team1}
                alt="PIXELFORGE studio workspace"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Photo 2 */}
            <div className="rounded-xl overflow-hidden aspect-4/3 bg-gray-200 border border-gray-200 shadow-2xs group">
              <img
                src={STUDIO_IMAGES.team2}
                alt="PIXELFORGE team collaboration"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Photo 3 */}
            <div className="rounded-xl overflow-hidden aspect-4/3 bg-gray-200 border border-gray-200 shadow-2xs group">
              <img
                src={STUDIO_IMAGES.team3}
                alt="PIXELFORGE lounge"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Dark Quote Card */}
            <div className="bg-[#121417] text-white rounded-xl p-5 flex flex-col justify-between space-y-4 shadow-sm border border-black">
              <Quote className="w-6 h-6 text-gray-400 rotate-180" />

              <p className="text-xs font-semibold leading-relaxed text-gray-200">
                Great games come from collaboration, curiosity, and a love for players.
              </p>

              <div className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400">
                PIXELFORGE CULTURE
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
