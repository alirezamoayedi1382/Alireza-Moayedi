import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react';
import { STUDIO_IMAGES } from '../data/pixelforgeData';

interface ContactCTASectionProps {
  onOpenContact: () => void;
}

export function ContactCTASection({ onOpenContact }: ContactCTASectionProps) {
  return (
    <section className="py-12 md:py-16" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#121418] rounded-2xl border border-white/10 p-8 sm:p-10 lg:p-12 relative overflow-hidden shadow-xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Header */}
            <div className="lg:col-span-4 space-y-3">
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#635BFF]">
                با هم خلق کنیم
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                پروژه‌ای در ذهن دارید؟
              </h2>
            </div>

            {/* Middle Description & CTA Button */}
            <div className="lg:col-span-4 space-y-5">
              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed font-medium">
                خوشحال می‌شویم درباره ایده‌های ایده‌آل شما بشنویم و راه‌های خلق آن را با هم کاوش کنیم.
              </p>

              <div>
                <button
                  onClick={onOpenContact}
                  id="get-in-touch-btn"
                  className="group inline-flex items-center gap-2 bg-[#635BFF] text-white text-xs font-bold px-6 py-3 rounded-full hover:bg-[#5248ff] transition-all shadow-lg hover:shadow-[#635BFF]/25 active:scale-95"
                >
                  <span>تماس با ما</span>
                  <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right Contact Details & Isometric Island Asset */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-row items-center justify-between gap-6 border-t lg:border-t-0 lg:border-r border-white/10 pt-6 lg:pt-0 lg:pr-8">
              
              {/* Contact Info */}
              <div className="space-y-2.5 text-xs font-semibold text-gray-200 w-full">
                <a href="mailto:hello@pixelforge.com" className="flex items-center gap-2 hover:text-white transition-colors" dir="ltr">
                  <Mail className="w-3.5 h-3.5 text-[#635BFF]" />
                  <span>hello@pixelforge.com</span>
                </a>

                <a href="tel:+14151234567" className="flex items-center gap-2 hover:text-white transition-colors" dir="ltr">
                  <Phone className="w-3.5 h-3.5 text-[#635BFF]" />
                  <span>+1 (415) 123-4567</span>
                </a>

                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-3.5 h-3.5 text-[#635BFF]" />
                  <span>سانفرانسیسکو، کالیفرنیا</span>
                </div>
              </div>

              {/* Floating Island Graphic */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 relative">
                <img
                  src={STUDIO_IMAGES.ctaIsland}
                  alt="المان سه بعدی پیکسل‌فورج"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain drop-shadow-xl select-none"
                />
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
