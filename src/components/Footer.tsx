import { Linkedin, MessageSquare, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#f8f9fa] border-t border-gray-200/80 pt-12 pb-10 text-xs text-[#5c6574]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8">
          
          {/* Logo & Copyright Column */}
          <div className="col-span-2 md:col-span-3 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-black text-white flex items-center justify-center font-extrabold text-xs tracking-tighter">
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M4 4h10v4H8v4h6v8H4V4zm12 0h4v16h-4V4z" />
                </svg>
              </div>
              <span className="font-extrabold text-base tracking-tight text-[#121417]">
                PIXELFORGE
              </span>
            </a>
            <p className="text-[11px] text-gray-500 font-medium">
              Creating world-class games and interactive experiences for global audiences.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="col-span-1 md:col-span-2 space-y-3">
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-black">
              COMPANY
            </div>
            <ul className="space-y-2 text-[11px] font-semibold">
              <li><a href="#studio" className="hover:text-black transition-colors">About</a></li>
              <li><a href="#careers" className="hover:text-black transition-colors">Careers</a></li>
              <li><a href="#blog" className="hover:text-black transition-colors">News</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 space-y-3">
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-black">
              SERVICES
            </div>
            <ul className="space-y-2 text-[11px] font-semibold">
              <li><a href="#services" className="hover:text-black transition-colors">Game Design</a></li>
              <li><a href="#services" className="hover:text-black transition-colors">Art & Animation</a></li>
              <li><a href="#services" className="hover:text-black transition-colors">Engineering</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 space-y-3">
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-black">
              RESOURCES
            </div>
            <ul className="space-y-2 text-[11px] font-semibold">
              <li><a href="#blog" className="hover:text-black transition-colors">Blog</a></li>
              <li><a href="#press" className="hover:text-black transition-colors">Press Kit</a></li>
              <li><a href="#contact" className="hover:text-black transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 space-y-3">
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-black">
              LEGAL
            </div>
            <ul className="space-y-2 text-[11px] font-semibold">
              <li><a href="#privacy" className="hover:text-black transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-black transition-colors">Terms of Service</a></li>
              <li><a href="#cookies" className="hover:text-black transition-colors">Cookies</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar with Socials & Copyright */}
        <div className="pt-8 border-t border-gray-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-gray-500 font-medium">
            © 2024 PixelForge Studios. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-black mr-2">
              FOLLOW US
            </span>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-black transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-black transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-black transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-black transition-colors">
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
