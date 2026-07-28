import { useState } from 'react';
import { ArrowLeft, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenLetBuild: () => void;
  activeSection: string;
}

export function Navbar({ onOpenLetBuild }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'بازی‌ها', href: '#games' },
    { label: 'استودیو', href: '#studio' },
    { label: 'خدمات', href: '#services' },
    { label: 'پروژه‌ها', href: '#work' },
    { label: 'فرصت‌های شغلی', href: '#careers' },
    { label: 'وبلاگ', href: '#blog' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0b0d10]/90 backdrop-blur-md border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group" id="brand-logo">
          <div className="w-8 h-8 rounded-lg bg-[#635BFF] text-white flex items-center justify-center font-extrabold text-sm tracking-tighter shadow-sm group-hover:scale-105 transition-transform">
            <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
              <path d="M4 4h10v4H8v4h6v8H4V4zm12 0h4v16h-4V4z" />
            </svg>
          </div>
          <span className="font-extrabold text-lg tracking-tight text-white">
            پیکسل‌فورج
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-bold tracking-wide text-[#94a3b8] hover:text-white transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button Desktop */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenLetBuild}
            id="lets-build-btn"
            className="group relative inline-flex items-center justify-center gap-2 bg-[#635BFF] text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-[#5248ff] transition-all hover:shadow-lg hover:shadow-[#635BFF]/20 active:scale-95"
          >
            <span>شروع ساخت بازی</span>
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-white/10"
          aria-label="تغییر وضعیت منو"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#121418] border-b border-white/10 px-6 pt-4 pb-6 space-y-4 animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-gray-300 hover:text-white py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLetBuild();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#635BFF] text-white text-xs font-bold py-3 rounded-full"
            >
              <span>شروع ساخت بازی</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
