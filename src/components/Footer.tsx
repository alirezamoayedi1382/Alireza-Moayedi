import { Linkedin, MessageSquare, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0b0d10] border-t border-white/10 pt-12 pb-10 text-xs text-[#94a3b8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8">
          
          {/* Logo & Copyright Column */}
          <div className="col-span-2 md:col-span-3 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#635BFF] text-white flex items-center justify-center font-extrabold text-xs tracking-tighter">
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M4 4h10v4H8v4h6v8H4V4zm12 0h4v16h-4V4z" />
                </svg>
              </div>
              <span className="font-extrabold text-base tracking-tight text-white">
                پیکسل‌فورج
              </span>
            </a>
            <p className="text-[11px] text-gray-400 font-medium leading-relaxed">
              خلق بازی‌های درجه‌یک جهانی و تجربه‌های تعاملی ماندگار برای مخاطبان سراسر جهان.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="col-span-1 md:col-span-2 space-y-3">
            <div className="text-[10px] font-extrabold uppercase tracking-wider text-white">
              شرکت
            </div>
            <ul className="space-y-2 text-[11px] font-semibold">
              <li><a href="#studio" className="hover:text-white transition-colors">درباره ما</a></li>
              <li><a href="#careers" className="hover:text-white transition-colors">فرصت‌های شغلی</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">اخبار</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 space-y-3">
            <div className="text-[10px] font-extrabold uppercase tracking-wider text-white">
              خدمات
            </div>
            <ul className="space-y-2 text-[11px] font-semibold">
              <li><a href="#services" className="hover:text-white transition-colors">طراحی بازی</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">هنر و پویانمایی</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">مهندسی</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 space-y-3">
            <div className="text-[10px] font-extrabold uppercase tracking-wider text-white">
              منابع
            </div>
            <ul className="space-y-2 text-[11px] font-semibold">
              <li><a href="#blog" className="hover:text-white transition-colors">وبلاگ</a></li>
              <li><a href="#press" className="hover:text-white transition-colors">کیت رسانه‌ای</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">تماس</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 space-y-3">
            <div className="text-[10px] font-extrabold uppercase tracking-wider text-white">
              قوانین
            </div>
            <ul className="space-y-2 text-[11px] font-semibold">
              <li><a href="#privacy" className="hover:text-white transition-colors">حریم خصوصی</a></li>
              <li><a href="#terms" className="hover:text-white transition-colors">شرایط استفاده</a></li>
              <li><a href="#cookies" className="hover:text-white transition-colors">کوکی‌ها</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar with Socials & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-gray-400 font-medium">
            © ۲۰۲۴ استودیو پیکسل‌فورج. تمامی حقوق محفوظ است.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[10px] font-extrabold uppercase text-white ml-2">
              ما را دنبال کنید:
            </span>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="توییتر">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="لینکدین">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="یوتیوب">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="دیسکورد">
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
