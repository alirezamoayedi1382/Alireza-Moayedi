export function TrustedBySection() {
  return (
    <section className="py-12 md:py-16 border-t border-gray-200/80" id="trusted-by">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div>
          <div className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 mb-2">
            مورد اعتماد برترین‌ها
          </div>
          <h2 className="text-3xl font-extrabold text-[#121417] tracking-tight">
            شرکا و پلتفرم‌های همکار
          </h2>
          <p className="text-xs text-[#5c6574] font-medium mt-1">
            افتخار می‌کنیم که با برترین پلتفرم‌ها و جوامع بازی در سراسر جهان همکاری داریم.
          </p>
        </div>

        {/* Partner Logos Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-80 pt-2">
          
          {/* EPIC GAMES */}
          <div className="flex items-center gap-2 font-extrabold text-sm text-[#121417] hover:opacity-100 transition-opacity">
            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
              <path d="M12 2L2 6v12l10 4 10-4V6L12 2zm0 3.2L18.4 8 12 10.8 5.6 8 12 5.2zM4 9.2l7 3.1v6.5l-7-2.8V9.2zm16 0v6.8l-7 2.8v-6.5l7-3.1z"/>
            </svg>
            <span>EPIC GAMES</span>
          </div>

          {/* STEAM */}
          <div className="flex items-center gap-2 font-extrabold text-sm text-[#121417] hover:opacity-100 transition-opacity">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 0 0-9.9 8.6l3.8 1.6a3.5 3.5 0 0 1 3.5-1.2l2.3-3.3v-.1a2.5 2.5 0 1 1 2.5 2.5h-.1l-3.3 2.3a3.5 3.5 0 0 1-1.3 3.5l-1.6 3.8A10 10 0 1 0 12 2z"/>
            </svg>
            <span>STEAM</span>
          </div>

          {/* PLAYSTATION */}
          <div className="flex items-center gap-2 font-extrabold text-sm text-[#121417] hover:opacity-100 transition-opacity">
            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
              <path d="M8.2 16.5c-1.3 0-2.4-.3-3.2-.8-.7-.4-1.1-1-1.1-1.6 0-1.2 1.4-2.1 3.8-2.6l2.9-.6v1.3l-2.4.5c-1.2.2-1.9.6-1.9 1.1 0 .5.7.8 1.9.8 1.4 0 2.4-.4 2.4-1V8.5L5.3 11c-.8.3-1.6.4-2.3.2C2.3 11 2 10.4 2 9.6c0-1.1.9-2 2.5-2.6L10.6 5v11.5zM12 22l-.2-7.8 1.8-.4v-2.3l-1.8.4V2h3.4c2.6 0 4.2 1 4.2 2.8 0 1.2-.7 2.1-1.8 2.5l2.2 4.7H17.8l-1.9-4.2h-1.3V22H12z"/>
            </svg>
            <span>PlayStation</span>
          </div>

          {/* XBOX */}
          <div className="flex items-center gap-2 font-extrabold text-sm text-[#121417] hover:opacity-100 transition-opacity">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-4.3 3.8c1.2-1 2.8-1.5 4.3-1.5s3.1.5 4.3 1.5l-2.8 3.5c-.8.9-2.2.9-3 0L7.7 5.8zm-2.8 3.5l3.2 4c.8.9.8 2.3 0 3.2l-3.2 4C3.8 18.8 3 16.2 3 13.5s.8-5.3 1.9-7.2zm7.1 10.9c-1.5 0-3.1-.5-4.3-1.5l2.8-3.5c.8-.9 2.2-.9 3 0l2.8 3.5c-1.2 1-2.8 1.5-4.3 1.5zm7.1-3.7l-3.2-4c-.8-.9-.8-2.3 0-3.2l3.2-4c1.1 1.9 1.9 4.5 1.9 7.2s-.8 5.3-1.9 7.2z"/>
            </svg>
            <span>XBOX</span>
          </div>

          {/* NVIDIA */}
          <div className="flex items-center gap-2 font-extrabold text-sm text-[#121417] hover:opacity-100 transition-opacity">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 14.5c-2.5 0-4.5-2-4.5-4.5S10.5 7.5 13 7.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5z"/>
            </svg>
            <span>NVIDIA</span>
          </div>

          {/* UNREAL ENGINE */}
          <div className="flex items-center gap-2 font-extrabold text-xs text-[#121417] hover:opacity-100 transition-opacity">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3.5 13.5l-3.5-2-3.5 2V8.5l3.5-2 3.5 2z"/>
            </svg>
            <span>UNREAL ENGINE</span>
          </div>

        </div>

      </div>
    </section>
  );
}
