/**
 * PIXELFORGE Data & Assets Configuration
 */

export interface GameTitle {
  id: string;
  title: string;
  genre: string;
  image: string;
  description: string;
  platforms?: string[];
  players?: string;
  releaseDate?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  iconName: string;
}

export const HERO_STATS = [
  { value: "12+", label: "YEARS OF EXPERIENCE" },
  { value: "28", label: "GAMES RELEASED" },
  { value: "15M+", label: "PLAYERS" },
  { value: "50+", label: "TEAM MEMBERS" },
];

export const FEATURED_PROJECT: GameTitle = {
  id: "elden-realms",
  title: "Elden Realms",
  genre: "RPG / Adventure",
  image: "/src/assets/images/elden_realms_featured_1785236873961.jpg",
  description: "An open-world fantasy RPG where every choice shapes your legend.",
  platforms: ["PC", "PS5", "XBOX"],
  players: "2M+",
  releaseDate: "May 2024",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "game-design",
    title: "Game Design",
    description: "Compelling mechanics and player-first design.",
    iconName: "PenTool",
  },
  {
    id: "art-animation",
    title: "Art & Animation",
    description: "Stunning visuals that bring worlds to life.",
    iconName: "Palette",
  },
  {
    id: "engineering",
    title: "Engineering",
    description: "Scalable, optimized, and performance-driven.",
    iconName: "Cpu",
  },
  {
    id: "live-operations",
    title: "Live Operations",
    description: "Updates, events, and player engagement.",
    iconName: "Headphones",
  },
  {
    id: "porting-support",
    title: "Porting & Support",
    description: "Cross-platform porting and long-term support.",
    iconName: "Gamepad2",
  },
];

export const SELECTED_TITLES: GameTitle[] = [
  {
    id: "elden-realms",
    title: "Elden Realms",
    genre: "RPG / Adventure",
    image: "/src/assets/images/elden_realms_featured_1785236873961.jpg",
    description: "Explore forgotten kingdoms, battle mythical leviathans, and shape the destiny of an expansive open world.",
    platforms: ["PC", "PS5", "XBOX Series X|S"],
    players: "2.4M Active",
    releaseDate: "May 2024",
  },
  {
    id: "skyline-racers",
    title: "Skyline Racers",
    genre: "Racing",
    image: "/src/assets/images/skyline_racers_1785236887430.jpg",
    description: "Neon-soaked high-octane street racing in a futuristic metropolis with full vehicle customization.",
    platforms: ["PC", "PS5", "XBOX", "Switch 2"],
    players: "1.8M Active",
    releaseDate: "Nov 2023",
  },
  {
    id: "cosmic-traders",
    title: "Cosmic Traders",
    genre: "Strategy / Simulation",
    image: "/src/assets/images/cosmic_traders_1785236903554.jpg",
    description: "Build interstellar trade routes, command fleets, and conquer space markets in a persistent multiplayer universe.",
    platforms: ["PC", "Mac"],
    players: "950K Active",
    releaseDate: "Aug 2023",
  },
  {
    id: "tiny-defenders",
    title: "Tiny Defenders",
    genre: "Tower Defense",
    image: "/src/assets/images/tiny_defenders_1785236917430.jpg",
    description: "A charming tilt-shift tactical defense game featuring heroic miniature commanders and elemental spells.",
    platforms: ["PC", "iOS", "Android"],
    players: "3.2M Active",
    releaseDate: "Jan 2024",
  },
  {
    id: "neon-arena",
    title: "Neon Arena",
    genre: "Action / PvP",
    image: "/src/assets/images/neon_arena_1785236939724.jpg",
    description: "Fast-paced cybernetic combat arena featuring intense 3v3 team skirmishes and seasonal tournaments.",
    platforms: ["PC", "PS5", "XBOX"],
    players: "4.1M Active",
    releaseDate: "Feb 2024",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "DISCOVER",
    description: "We research, define goals, and understand players.",
    iconName: "Target",
  },
  {
    step: "02",
    title: "DESIGN",
    description: "Crafting game loops, systems, and experiences.",
    iconName: "PenTool",
  },
  {
    step: "03",
    title: "PRODUCE",
    description: "Building, testing, and iterating with quality.",
    iconName: "Layers",
  },
  {
    step: "04",
    title: "LAUNCH",
    description: "Polished release and go-to-market.",
    iconName: "Rocket",
  },
  {
    step: "05",
    title: "SUPPORT",
    description: "Live updates and a thriving player community.",
    iconName: "ShieldCheck",
  },
];

export const STUDIO_IMAGES = {
  team1: "/src/assets/images/studio_team_1_1785236955844.jpg",
  team2: "/src/assets/images/studio_team_2_1785236970962.jpg",
  team3: "/src/assets/images/studio_team_3_1785236985723.jpg",
  ctaIsland: "/src/assets/images/studio_cta_island_1785237002260.jpg",
  heroIsland: "/src/assets/images/pixelforge_hero_island_1785236857523.jpg",
};
