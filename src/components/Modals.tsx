import React, { useState } from 'react';
import { Check, Gamepad2, Play, Volume2, VolumeX, X } from 'lucide-react';
import { GameTitle, ServiceItem } from '../data/pixelforgeData';

interface ModalsProps {
  showreelOpen: boolean;
  onCloseShowreel: () => void;
  
  selectedGame: GameTitle | null;
  onCloseGame: () => void;

  selectedService: ServiceItem | null;
  onCloseService: () => void;

  letBuildOpen: boolean;
  onCloseLetBuild: () => void;

  contactOpen: boolean;
  onCloseContact: () => void;
}

export function Modals({
  showreelOpen,
  onCloseShowreel,
  selectedGame,
  onCloseGame,
  selectedService,
  onCloseService,
  letBuildOpen,
  onCloseLetBuild,
  contactOpen,
  onCloseContact,
}: ModalsProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onCloseLetBuild();
      onCloseContact();
    }, 2000);
  };

  return (
    <>
      {/* 1. Showreel Video Modal */}
      {showreelOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-4xl bg-[#121417] text-white rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-gray-300">
                  ویدیوی استودیوی پیکسل‌فورج ۲۰۲۴
                </span>
              </div>
              <button
                onClick={onCloseShowreel}
                className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="بستن"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Display */}
            <div className="relative aspect-16/9 bg-black flex items-center justify-center group overflow-hidden">
              <img
                src="/src/assets/images/elden_realms_featured_1785236873961.jpg"
                alt="پیش‌نمایش ویدیو"
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover transition-all duration-700 ${
                  isPlaying ? 'scale-105 opacity-90' : 'scale-100 opacity-60'
                }`}
              />

              {/* Video Overlay Control Button */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute w-16 h-16 rounded-full bg-white/90 text-black flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
                aria-label={isPlaying ? 'توقف' : 'پخش'}
              >
                {isPlaying ? (
                  <div className="flex gap-1">
                    <div className="w-1.5 h-5 bg-black rounded-xs" />
                    <div className="w-1.5 h-5 bg-black rounded-xs" />
                  </div>
                ) : (
                  <Play className="w-6 h-6 fill-current text-black -translate-x-0.5 rotate-180" />
                )}
              </button>

              {/* Player Controls Bar */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 flex items-center justify-between text-xs font-semibold">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="hover:text-white text-gray-300"
                  >
                    {isPlaying ? 'توقف' : 'پخش'}
                  </button>
                  <span className="text-gray-500">|</span>
                  <span className="text-gray-300" dir="ltr">01:24 / 03:45</span>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="hover:text-white text-gray-300 flex items-center gap-1.5"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    <span>{isMuted ? 'بی‌صدا' : 'کیفیت 4K ULTRA HD'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. Game Detail Modal */}
      {selectedGame && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-2xl bg-white text-[#121417] rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            {/* Header Image */}
            <div className="relative h-64 sm:h-72 bg-black">
              <img
                src={selectedGame.image}
                alt={selectedGame.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <button
                onClick={onCloseGame}
                className="absolute top-4 left-4 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
                aria-label="بستن"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 right-6 bg-black/80 backdrop-blur-xs text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full">
                {selectedGame.genre}
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-extrabold text-[#121417]">
                  {selectedGame.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5c6574] leading-relaxed font-medium mt-2">
                  {selectedGame.description}
                </p>
              </div>

              {/* Game Metadata Table */}
              <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 text-xs">
                <div>
                  <div className="text-[10px] font-bold text-gray-400">
                    پلتفرم‌ها
                  </div>
                  <div className="font-extrabold text-gray-800 mt-1">
                    {selectedGame.platforms?.join('، ') || 'PC, PS5, XBOX'}
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-bold text-gray-400">
                    بازیکنان
                  </div>
                  <div className="font-extrabold text-gray-800 mt-1">
                    {selectedGame.players || '+۲M'}
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-bold text-gray-400">
                    تاریخ انتشار
                  </div>
                  <div className="font-extrabold text-gray-800 mt-1">
                    {selectedGame.releaseDate || '۲۰۲۴'}
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  onClick={onCloseGame}
                  className="bg-[#121417] text-white text-xs font-bold px-6 py-2.5 rounded-full hover:bg-black transition-all"
                >
                  بستن
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-lg bg-white text-[#121417] rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-200 space-y-6">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-black text-white flex items-center justify-center">
                  <Gamepad2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gray-400">
                    خلاصه‌ای از خدمت
                  </div>
                  <h3 className="text-lg font-extrabold text-[#121417]">
                    {selectedService.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={onCloseService}
                className="p-1.5 rounded-full text-gray-400 hover:text-black hover:bg-gray-100 transition-colors"
                aria-label="بستن"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-[#5c6574] leading-relaxed font-medium">
              {selectedService.description}
            </p>

            <div className="space-y-2 bg-gray-50 p-4 rounded-xl border border-gray-100 text-xs font-semibold">
              <div className="text-[10px] font-extrabold text-gray-400">دستاوردهای ما برای پروژه شما</div>
              <div className="flex items-center gap-2 text-gray-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>معماری سفارشی بازی و یکپارچه‌سازی خط تولید</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>توسعه سطح AAA با موتورهای بازی‌سازی Unreal Engine 5 و Unity</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>بهینه‌سازی چندپلتفرمی و تنظیم بالاترین عملکرد و کارایی</span>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={onCloseService}
                className="bg-[#121417] text-white text-xs font-bold px-6 py-2.5 rounded-full hover:bg-black transition-all"
              >
                متوجه شدم
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. Let's Build / Contact Form Modal */}
      {(letBuildOpen || contactOpen) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-lg bg-white text-[#121417] rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-200 space-y-6">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div>
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#635BFF]">
                  با هم خلق کنیم
                </div>
                <h3 className="text-xl font-extrabold text-[#121417] mt-0.5">
                  پروژه بازی خود را شروع کنید
                </h3>
              </div>
              <button
                onClick={() => {
                  onCloseLetBuild();
                  onCloseContact();
                }}
                className="p-1.5 rounded-full text-gray-400 hover:text-black hover:bg-gray-100 transition-colors"
                aria-label="بستن"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-extrabold text-gray-900">درخواست شما دریافت شد!</h4>
                <p className="text-xs text-gray-500 max-w-xs mx-auto leading-relaxed">
                  با تشکر از ارتباط شما با استودیوی پیکسل‌فورج. تهیه‌کننده ما ظرف ۲۴ ساعت آینده با شما تماس خواهد گرفت.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitForm} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">نام شما</label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: علی محمدی"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">آدرس ایمیل</label>
                  <input
                    type="email"
                    required
                    placeholder="example@studio.com"
                    dir="ltr"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-black transition-colors text-right"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">جزئیات و شرح پروژه</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="درباره مفهوم بازی، پلتفرم مقصد و زمان‌بندی مد نظر خود توضیح دهید..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-black transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      onCloseLetBuild();
                      onCloseContact();
                    }}
                    className="px-5 py-2.5 font-bold text-gray-500 hover:text-black"
                  >
                    انصراف
                  </button>
                  <button
                    type="submit"
                    className="bg-[#121417] text-white font-bold px-6 py-2.5 rounded-full hover:bg-black transition-all shadow-xs"
                  >
                    ارسال پیام
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
