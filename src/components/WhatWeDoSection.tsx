import { Cpu, Gamepad2, Headphones, Palette, PenTool } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/pixelforgeData';

interface WhatWeDoSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export function WhatWeDoSection({ onSelectService }: WhatWeDoSectionProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case 'PenTool':
        return <PenTool className="w-5 h-5 text-[#635BFF]" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-[#635BFF]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#635BFF]" />;
      case 'Headphones':
        return <Headphones className="w-5 h-5 text-[#635BFF]" />;
      case 'Gamepad2':
        return <Gamepad2 className="w-5 h-5 text-[#635BFF]" />;
      default:
        return <PenTool className="w-5 h-5 text-[#635BFF]" />;
    }
  };

  return (
    <section className="py-12 md:py-16" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div>
          <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#635BFF] mb-2">
            خدمات ما
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            توسعه جامع و سرتاسری بازی‌ها
          </h2>
        </div>

        {/* 5 Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="group bg-[#121418] hover:bg-[#181b22] rounded-xl border border-white/10 p-5 transition-all duration-300 hover:border-white/20 hover:shadow-xl cursor-pointer flex flex-col justify-between space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#181b22] border border-white/10 flex items-center justify-center group-hover:border-[#635BFF] group-hover:scale-105 transition-all shadow-xs">
                  {getIcon(service.iconName)}
                </div>
                <h3 className="text-xs font-extrabold text-white leading-tight group-hover:text-[#635BFF] transition-colors">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-xs text-[#94a3b8] leading-relaxed font-medium">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
