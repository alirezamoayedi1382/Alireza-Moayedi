import { Layers, Rocket, ShieldCheck, Target, PenTool } from 'lucide-react';
import { PROCESS_STEPS } from '../data/pixelforgeData';

export function OurProcessSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target':
        return <Target className="w-4 h-4 text-[#121417]" />;
      case 'PenTool':
        return <PenTool className="w-4 h-4 text-[#121417]" />;
      case 'Layers':
        return <Layers className="w-4 h-4 text-[#121417]" />;
      case 'Rocket':
        return <Rocket className="w-4 h-4 text-[#121417]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4 text-[#121417]" />;
      default:
        return <Target className="w-4 h-4 text-[#121417]" />;
    }
  };

  return (
    <section className="py-12 md:py-16" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div>
          <div className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 mb-2">
            OUR PROCESS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121417] tracking-tight">
            How we build games
          </h2>
        </div>

        {/* Timeline Process Grid */}
        <div className="relative">
          
          {/* Horizontal Dashed Line Behind Icons (Desktop Only) */}
          <div className="hidden lg:block absolute top-5 left-[8%] right-[8%] h-[1px] border-t-2 border-dashed border-gray-300 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {PROCESS_STEPS.map((stepItem) => (
              <div key={stepItem.step} className="space-y-4">
                
                {/* Circle Icon Container */}
                <div className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-2xs flex items-center justify-center">
                  {getIcon(stepItem.iconName)}
                </div>

                {/* Step number and title */}
                <div className="space-y-1">
                  <div className="text-[11px] font-extrabold text-[#121417] tracking-wider uppercase">
                    {stepItem.step}
                  </div>
                  <div className="text-xs font-extrabold text-[#121417] tracking-wider uppercase">
                    {stepItem.title}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-[#5c6574] leading-relaxed font-medium">
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
