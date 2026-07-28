import { Layers, Rocket, ShieldCheck, Target, PenTool } from 'lucide-react';
import { PROCESS_STEPS } from '../data/pixelforgeData';

export function OurProcessSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target':
        return <Target className="w-4 h-4 text-[#635BFF]" />;
      case 'PenTool':
        return <PenTool className="w-4 h-4 text-[#635BFF]" />;
      case 'Layers':
        return <Layers className="w-4 h-4 text-[#635BFF]" />;
      case 'Rocket':
        return <Rocket className="w-4 h-4 text-[#635BFF]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4 text-[#635BFF]" />;
      default:
        return <Target className="w-4 h-4 text-[#635BFF]" />;
    }
  };

  return (
    <section className="py-12 md:py-16" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div>
          <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#635BFF] mb-2">
            فرایند کاری ما
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            نحوه ساخت بازی‌ها در پیکسل‌فورج
          </h2>
        </div>

        {/* Timeline Process Grid */}
        <div className="relative">
          
          {/* Horizontal Dashed Line Behind Icons (Desktop Only) */}
          <div className="hidden lg:block absolute top-5 left-[8%] right-[8%] h-[1px] border-t-2 border-dashed border-white/10 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {PROCESS_STEPS.map((stepItem) => (
              <div key={stepItem.step} className="space-y-4 bg-[#121418] border border-white/10 p-5 rounded-xl shadow-lg">
                
                {/* Circle Icon Container */}
                <div className="w-10 h-10 rounded-full bg-[#181b22] border border-white/10 shadow-xs flex items-center justify-center">
                  {getIcon(stepItem.iconName)}
                </div>

                {/* Step number and title */}
                <div className="space-y-1">
                  <div className="text-[11px] font-extrabold text-[#635BFF]">
                    مرحله {stepItem.step}
                  </div>
                  <div className="text-xs font-extrabold text-white">
                    {stepItem.title}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-[#94a3b8] leading-relaxed font-medium">
                  {stepItem.description}
                </p>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
