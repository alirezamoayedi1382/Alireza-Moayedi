import { ArrowLeft, Quote } from 'lucide-react';
import { STUDIO_IMAGES } from '../data/pixelforgeData';

interface OurStudioSectionProps {
  onJoinTeam: () => void;
}

export function OurStudioSection({ onJoinTeam }: OurStudioSectionProps) {
  return (
    <section className="py-12 md:py-16" id="studio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Text Block */}
          <div className="lg:col-span-4 space-y-5">
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#635BFF]">
              استودیوی ما
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              تیمی از خالقان و رویاپردازان
            </h2>

            <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed font-medium">
              ما گیمرها، هنرمندان، مهندسان و راویانی هستیم که با اشتیاق، جهان‌های فراموش‌نشدنی خلق می‌کنیم.
            </p>

            <div className="pt-2">
              <button
                onClick={onJoinTeam}
                id="join-team-btn"
                className="group inline-flex items-center gap-2 text-xs font-bold text-gray-200 hover:text-white transition-colors"
              >
                <span>پیوستن به تیم ما</span>
                <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Image Gallery Grid (3 Photos + 1 Dark Quote Card) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Photo 1 */}
            <div className="rounded-xl overflow-hidden aspect-4/3 bg-black border border-white/10 shadow-md group">
              <img
                src={STUDIO_IMAGES.team1}
                alt="فضای کاری استودیوی پیکسل‌فورج"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 brightness-105 contrast-105"
              />
            </div>

            {/* Photo 2 */}
            <div className="rounded-xl overflow-hidden aspect-4/3 bg-black border border-white/10 shadow-md group">
              <img
                src={STUDIO_IMAGES.team2}
                alt="همکاری اعضای تیم پیکسل‌فورج"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 brightness-105 contrast-105"
              />
            </div>

            {/* Photo 3 */}
            <div className="rounded-xl overflow-hidden aspect-4/3 bg-black border border-white/10 shadow-md group">
              <img
                src={STUDIO_IMAGES.team3}
                alt="استراحتگاه استودیوی پیکسل‌فورج"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 brightness-105 contrast-105"
              />
            </div>

            {/* Dark Quote Card */}
            <div className="bg-[#121418] text-white rounded-xl p-5 flex flex-col justify-between space-y-4 shadow-xl border border-white/10">
              <Quote className="w-6 h-6 text-[#635BFF] rotate-180" />

              <p className="text-xs font-semibold leading-relaxed text-gray-200">
                بازی‌های فوق‌العاده حاصل همکاری، کنجکاوی و عشق به بازیکنان است.
              </p>

              <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#635BFF]">
                فرهنگ پیکسل‌فورج
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
