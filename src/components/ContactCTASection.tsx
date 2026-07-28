import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { STUDIO_IMAGES } from '../data/pixelforgeData';

interface ContactCTASectionProps {
  onOpenContact: () => void;
}

export function ContactCTASection({ onOpenContact }: ContactCTASectionProps) {
  return (
    <section className="py-12 md:py-16" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#f2f4f7]/90 rounded-2xl border border-gray-200/80 p-8 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xs">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Header */}
            <div className="lg:col-span-4 space-y-3">
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#635BFF]">
                LET'S CREATE TOGETHER
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121417] tracking-tight leading-tight">
                Have a project in mind?
              </h2>
            </div>

            {/* Middle Description & CTA Button */}
            <div className="lg:col-span-4 space-y-5">
              <p className="text-xs sm:text-sm text-[#5c6574] leading-relaxed font-medium">
                We'd love to hear about your ideas and explore how we can bring them to life.
              </p>

              <div>
                <button
                  onClick={onOpenContact}
                  id="get-in-touch-btn"
                  className="group inline-flex items-center gap-2 bg-[#121417] text-white text-xs font-bold px-6 py-3 rounded-full hover:bg-black transition-all shadow-xs active:scale-95"
                >
                  <span>GET IN TOUCH</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right Contact Details & Isometric Island Asset */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-row items-center justify-between gap-6 border-t lg:border-t-0 lg:border-l border-gray-200 pt-6 lg:pt-0 lg:pl-8">
              
              {/* Contact Info */}
              <div className="space-y-2.5 text-xs font-semibold text-[#121417] w-full">
                <a href="mailto:hello@pixelforge.com" className="flex items-center gap-2 hover:text-black transition-colors">
                  <Mail className="w-3.5 h-3.5 text-gray-400" />
                  <span>hello@pixelforge.com</span>
                </a>

                <a href="tel:+14151234567" className="flex items-center gap-2 hover:text-black transition-colors">
                  <Phone className="w-3.5 h-3.5 text-gray-400" />
                  <span>+1 (415) 123-4567</span>
                </a>

                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-3.5 h-3.5 text-gray-400" />
                  <span>San Francisco, CA, USA</span>
                </div>
              </div>

              {/* Floating Island Graphic */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 relative">
                <img
                  src={STUDIO_IMAGES.ctaIsland}
                  alt="3D Floating Island Block"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain drop-shadow-md select-none"
                />
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
