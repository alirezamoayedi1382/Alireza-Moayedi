import { ArrowRight } from 'lucide-react';
import { SELECTED_TITLES, GameTitle } from '../data/pixelforgeData';

interface SelectedTitlesSectionProps {
  onSelectGame: (game: GameTitle) => void;
  onViewAllGames: () => void;
}

export function SelectedTitlesSection({ onSelectGame, onViewAllGames }: SelectedTitlesSectionProps) {
  return (
    <section className="py-12 md:py-16" id="games">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex items-end justify-between border-b border-gray-200/80 pb-4">
          <div>
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 mb-2">
              OUR GAMES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121417] tracking-tight">
              Selected titles
            </h2>
          </div>

          <button
            onClick={onViewAllGames}
            id="view-all-games-btn"
            className="group inline-flex items-center gap-1.5 text-xs font-bold text-[#121417] hover:text-black tracking-wider transition-colors pb-1"
          >
            <span>VIEW ALL GAMES</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 5 Game Titles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {SELECTED_TITLES.map((game) => (
            <div
              key={game.id}
              onClick={() => onSelectGame(game)}
              className="group cursor-pointer space-y-3"
            >
              {/* Image Container */}
              <div className="relative rounded-xl overflow-hidden aspect-16/10 bg-gray-900 border border-gray-200/80 shadow-xs">
                <img
                  src={game.image}
                  alt={game.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Text Info */}
              <div>
                <h3 className="text-xs font-extrabold text-[#121417] group-hover:text-black transition-colors">
                  {game.title}
                </h3>
                <p className="text-[11px] font-medium text-gray-400 mt-0.5">
                  {game.genre}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
