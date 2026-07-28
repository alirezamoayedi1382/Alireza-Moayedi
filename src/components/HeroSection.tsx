import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Play, RotateCcw, ZoomIn, ZoomOut, Pause, RefreshCw, Sparkles, ChevronRight, ChevronLeft, Camera, Compass } from 'lucide-react';
import { HERO_STATS, HERO_3D_WORLDS } from '../data/pixelforgeData';
import { removeImageBackground } from '../utils/removeBackground';

interface HeroSectionProps {
  onOpenShowreel: () => void;
  onExploreGames: () => void;
}

export function HeroSection({ onOpenShowreel, onExploreGames }: HeroSectionProps) {
  const [activeDot, setActiveDot] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isAutoRotate, setIsAutoRotate] = useState(true);
  const [isZoomed, setIsZoomed] = useState(false);
  const [customRotate, setCustomRotate] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [transparentImageMap, setTransparentImageMap] = useState<Record<string, string>>({});
  const dragStartRef = useRef({ x: 0, y: 0 });

  const currentWorld = HERO_3D_WORLDS[activeDot] || HERO_3D_WORLDS[0];

  // Pre-process and convert all 3D island images to 100% transparent PNGs
  useEffect(() => {
    let isMounted = true;
    HERO_3D_WORLDS.forEach((world) => {
      removeImageBackground(world.image, 222).then((transparentUrl) => {
        if (isMounted) {
          setTransparentImageMap((prev) => ({
            ...prev,
            [world.id]: transparentUrl,
          }));
        }
      });
    });
    return () => {
      isMounted = false;
    };
  }, []);

  // Auto-switch worlds every 5 seconds if autoRotate is enabled
  useEffect(() => {
    if (!isAutoRotate || isDragging) return;
    const interval = setInterval(() => {
      setActiveDot((prev) => (prev + 1) % HERO_3D_WORLDS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoRotate, isDragging]);

  // Mouse move handler for 3D parallax tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      const deltaX = e.clientX - dragStartRef.current.x;
      const deltaY = e.clientY - dragStartRef.current.y;
      setCustomRotate((prev) => ({
        x: Math.max(-45, Math.min(45, prev.x - deltaY * 0.4)),
        y: Math.max(-60, Math.min(60, prev.y + deltaX * 0.4)),
      }));
      dragStartRef.current = { x: e.clientX, y: e.clientY };
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setMousePos({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetCamera = () => {
    setCustomRotate({ x: 0, y: 0 });
    setMousePos({ x: 0, y: 0 });
    setIsZoomed(false);
  };

  // Calculate total 3D rotations
  const rotateX = currentWorld.baseRotateX + (mousePos.y * -18) + customRotate.x;
  const rotateY = currentWorld.baseRotateY + (mousePos.x * 22) + customRotate.y;

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden" id="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Right Column Text Content */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Eyebrow & Active World Indicator Badge */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 bg-[#181b21] backdrop-blur-xs border border-white/10 px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: currentWorld.accentColor }} />
                <span className="text-[11px] font-extrabold uppercase text-[#94a3b8]">
                  ما استودیوی <span className="text-[#635BFF]">پیکسل‌فورج</span> هستیم
                </span>
              </div>

              {/* Active 3D Environment Banner */}
              <div className="flex items-center gap-2 text-xs font-extrabold text-white">
                <Compass className="w-4 h-4 text-[#635BFF] shrink-0" />
                <span>نمای سه‌بعدی فعلی:</span>
                <span className="px-2 py-0.5 rounded-md text-white font-bold text-[11px]" style={{ backgroundColor: currentWorld.accentColor }}>
                  {currentWorld.title}
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              بازی.<br />
              خلق.<br />
              الهام.
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#94a3b8] max-w-md font-medium leading-relaxed">
              {currentWorld.subtitle} — ما بازی‌هایی طراحی می‌کنیم و می‌سازیم که میلیون‌ها بازیکن را در سراسر جهان به هم متصل می‌سازد.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreGames}
                id="explore-games-btn"
                className="group inline-flex items-center gap-2.5 bg-[#635BFF] text-white text-xs font-bold px-6 py-3.5 rounded-full hover:bg-[#5248ff] transition-all shadow-lg hover:shadow-[#635BFF]/25 active:scale-95"
              >
                <span>مشاهده بازی‌های ما</span>
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              </button>

              <button
                onClick={onOpenShowreel}
                id="watch-showreel-btn"
                className="group inline-flex items-center gap-3 text-xs font-bold text-gray-200 hover:text-white px-2 py-2.5 transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-[#181b21] border border-white/10 flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:border-white/30 transition-all">
                  <Play className="w-3.5 h-3.5 fill-current text-white translate-x-0.5" />
                </div>
                <span className="tracking-wide">تماشای ویدیوی استودیو</span>
              </button>
            </div>

            {/* Hero Stats Row */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4">
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-bold text-gray-400 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Left Column 3D Interactive Floating Island Viewer */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
            
            {/* Interactive 3D Perspective Stage Container */}
            <div 
              className="relative w-full max-w-xl lg:max-w-2xl aspect-square flex items-center justify-center cursor-grab active:cursor-grabbing select-none group"
              style={{ perspective: '1400px' }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
            >
              {/* Dynamic Background Radial Ambient Glow */}
              <div 
                className="absolute inset-4 rounded-full blur-3xl opacity-40 transition-all duration-700 pointer-events-none"
                style={{ backgroundColor: currentWorld.accentColor }}
              />

              {/* 3D Model Object Box with preserve-3d */}
              <div 
                className="relative w-full h-full transition-transform duration-300 ease-out flex items-center justify-center p-4"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${isZoomed ? 1.25 : 1.08})`,
                }}
              >
                {/* Layer 1: 3D Grid Floor & Shadow (Z: -120px) */}
                <div 
                  className="absolute inset-10 rounded-full border border-dashed border-white/10 flex items-center justify-center pointer-events-none"
                  style={{ transform: 'translateZ(-120px) rotateX(70deg)', transformStyle: 'preserve-3d' }}
                >
                  {/* Concentric 3D Orbit Lines */}
                  <div className="w-full h-full rounded-full border border-white/10 animate-[spin_30s_linear_infinite]" />
                  <div 
                    className="absolute w-3/4 h-3/4 rounded-full border border-dashed opacity-50"
                    style={{ borderColor: currentWorld.accentColor }}
                  />
                  {/* Real-time Cast Contact Shadow */}
                  <div 
                    className="absolute w-3/5 h-3/5 rounded-full bg-black/80 blur-xl transition-all duration-300"
                    style={{ transform: 'scale(1.2)' }}
                  />
                </div>

                {/* Layer 2: Rotating 3D HUD Halo Ring (Z: -60px) */}
                <div 
                  className="absolute w-72 h-72 rounded-full border border-white/10 pointer-events-none flex items-center justify-center"
                  style={{ transform: 'translateZ(-60px)', transformStyle: 'preserve-3d' }}
                >
                  <div 
                    className="w-full h-full rounded-full border-2 border-t-transparent border-b-transparent animate-[spin_20s_linear_infinite]"
                    style={{ borderColor: `${currentWorld.accentColor}60` }}
                  />
                </div>

                {/* Layer 3: Main 3D Rendered Island Image (Z: 30px) */}
                <div 
                  className="relative w-full h-full flex items-center justify-center transition-transform duration-500"
                  style={{ transform: 'translateZ(30px) translateY(-10px)', transformStyle: 'preserve-3d' }}
                >
                  <img
                    key={currentWorld.id}
                    src={transparentImageMap[currentWorld.id] || currentWorld.image}
                    alt={currentWorld.title}
                    referrerPolicy="no-referrer"
                    style={{
                      filter: `drop-shadow(0 25px 35px ${currentWorld.accentColor}50) drop-shadow(0 10px 15px rgba(0,0,0,0.8)) contrast(1.12) brightness(1.06)`,
                    }}
                    className="w-full h-full object-contain transition-all duration-500 ease-in-out scale-110 animate-[bounce_6s_infinite_ease-in-out]"
                  />
                </div>
              </div>

              {/* Vertical Interactive Dots Navigation (Side Control Bar) */}
              <div 
                className="absolute -left-2 sm:left-2 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 p-2 bg-[#161920]/90 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl z-20"
                onClick={(e) => e.stopPropagation()}
              >
                {HERO_3D_WORLDS.map((world, idx) => {
                  const isActive = activeDot === idx;
                  return (
                    <div key={world.id} className="relative group/dot">
                      <button
                        onClick={() => {
                          setActiveDot(idx);
                          setCustomRotate({ x: 0, y: 0 });
                        }}
                        aria-label={`تغییر زاویه به ${world.title}`}
                        className={`transition-all duration-300 rounded-full flex items-center justify-center ${
                          isActive
                            ? 'w-4 h-4 scale-110 shadow-md ring-2 ring-offset-2 ring-[#635BFF]'
                            : 'w-2.5 h-2.5 bg-gray-600 hover:bg-gray-400 hover:scale-125'
                        }`}
                        style={{ backgroundColor: isActive ? world.accentColor : undefined }}
                      />

                      {/* Hover Tooltip with Angle Preview */}
                      <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 opacity-0 pointer-events-none group-hover/dot:opacity-100 group-hover/dot:pointer-events-auto transition-all duration-200 bg-[#121417] text-white p-2.5 rounded-xl shadow-2xl w-48 text-right z-30 space-y-1 border border-gray-800">
                        <div className="flex items-center justify-between border-b border-gray-800 pb-1">
                          <span className="text-[9px] font-extrabold text-emerald-400 uppercase">زاویه {idx + 1}</span>
                          <span className="text-[9px] text-gray-400">{world.tag}</span>
                        </div>
                        <div className="text-xs font-bold text-white">{world.title}</div>
                        <div className="text-[10px] text-gray-400 font-medium">{world.cameraAngle}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* 3D Camera & World Control Toolbar Below Stage */}
            <div className="mt-2 w-full max-w-lg bg-[#161920]/90 backdrop-blur-md border border-white/10 rounded-2xl p-2.5 px-4 shadow-sm flex items-center justify-between gap-2 text-xs font-bold text-white">
              
              {/* World Prev / Next Buttons */}
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setActiveDot((prev) => (prev - 1 + HERO_3D_WORLDS.length) % HERO_3D_WORLDS.length)}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
                  title="جهان قبلی"
                  aria-label="جهان قبلی"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <span className="text-[11px] text-gray-400 px-1">
                  {activeDot + 1} / {HERO_3D_WORLDS.length}
                </span>
                <button
                  onClick={() => setActiveDot((prev) => (prev + 1) % HERO_3D_WORLDS.length)}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
                  title="جهان بعدی"
                  aria-label="جهان بعدی"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
              </div>

              {/* Center Status / Drag Prompt */}
              <div className="hidden sm:flex items-center gap-1.5 text-[10px] text-gray-400 font-semibold">
                <RefreshCw className={`w-3 h-3 text-[#635BFF] ${isAutoRotate ? 'animate-spin' : ''}`} />
                <span>برای چرخش آزاد کشیدن موشواره را امتحان کنید</span>
              </div>

              {/* Interactive Camera Action Tools */}
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className={`p-1.5 rounded-lg border transition-colors ${
                    isZoomed ? 'bg-[#635BFF] text-white border-[#635BFF]' : 'border-white/10 text-gray-300 hover:bg-white/10'
                  }`}
                  title={isZoomed ? 'بزرگ‌نمایی عادی' : 'بزرگ‌نمایی ۳ بعدی'}
                  aria-label="بزرگ‌نمایی"
                >
                  {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
                </button>

                <button
                  onClick={() => setIsAutoRotate(!isAutoRotate)}
                  className={`p-1.5 rounded-lg border transition-colors ${
                    isAutoRotate ? 'bg-[#635BFF] text-white border-[#635BFF]' : 'border-white/10 text-gray-300 hover:bg-white/10'
                  }`}
                  title={isAutoRotate ? 'توقف چرخش خودکار' : 'فعال‌سازی چرخش خودکار'}
                  aria-label="چرخش خودکار"
                >
                  {isAutoRotate ? <Pause className="w-4 h-4" /> : <RefreshCw className="w-4 h-4" />}
                </button>

                <button
                  onClick={resetCamera}
                  className="p-1.5 rounded-lg border border-white/10 text-gray-300 hover:bg-white/10 transition-colors"
                  title="تنظیم مجدد دوربین"
                  aria-label="بازنشانی زاویه دوربین"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

