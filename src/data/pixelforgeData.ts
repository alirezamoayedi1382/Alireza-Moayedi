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
  { value: "+۱۲", label: "سال تجربه" },
  { value: "۲۸", label: "بازی منتشر شده" },
  { value: "+۱۵M", label: "بازیکن فعال" },
  { value: "+۵۰", label: "عضو تیم" },
];

export const FEATURED_PROJECT: GameTitle = {
  id: "elden-realms",
  title: "قلمروهای الدن (Elden Realms)",
  genre: "نقش‌آفرینی / ماجراجویی",
  image: "/src/assets/images/elden_realms_featured_1785236873961.jpg",
  description: "یک بازی نقش‌آفرینی جهان‌باز و فانتزی که در آن هر تصمیم افسانه شما را شکل می‌دهد.",
  platforms: ["PC", "PS5", "XBOX"],
  players: "+۲M",
  releaseDate: "می ۲۰۲۴",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "game-design",
    title: "طراحی بازی",
    description: "مکانیک‌های جذاب و طراحی انسان‌محور و بازیکن‌محور.",
    iconName: "PenTool",
  },
  {
    id: "art-animation",
    title: "هنر و پویانمایی",
    description: "جلوه‌های بصری خیره‌کننده که دنیای بازی را زنده می‌کند.",
    iconName: "Palette",
  },
  {
    id: "engineering",
    title: "مهندسی و توسعه",
    description: "مقیاس‌پذیر، بهینه‌شده و مبتنی بر بالاترین عملکرد.",
    iconName: "Cpu",
  },
  {
    id: "live-operations",
    title: "پشتیبانی زنده",
    description: "به‌روزرسانی‌ها، رویدادها و تعامل مداوم با بازیکنان.",
    iconName: "Headphones",
  },
  {
    id: "porting-support",
    title: "پورت و پشتیبانی",
    description: "پورت چند پلتفرمی و پشتیبانی بلندمدت فنی.",
    iconName: "Gamepad2",
  },
];

export const SELECTED_TITLES: GameTitle[] = [
  {
    id: "elden-realms",
    title: "قلمروهای الدن (Elden Realms)",
    genre: "نقش‌آفرینی / ماجراجویی",
    image: "/src/assets/images/elden_realms_featured_1785236873961.jpg",
    description: "پادشاهی‌های فراموش‌شده را کاوش کنید، با هیولاهای افسانه‌ای بجنگید و سرنوشت جهان بازی را رقم بزنید.",
    platforms: ["PC", "PS5", "XBOX Series X|S"],
    players: "۲.۴M فعال",
    releaseDate: "می ۲۰۲۴",
  },
  {
    id: "skyline-racers",
    title: "مسابقه افق (Skyline Racers)",
    genre: "مسابقه‌ای / رانندگی",
    image: "/src/assets/images/skyline_racers_1785236887430.jpg",
    description: "مسابقات خیابانی پرهیجان در کلان‌شهر نئونی و آینده‌نگرانه به همراه شخصی‌سازی کامل خودروها.",
    platforms: ["PC", "PS5", "XBOX", "Switch 2"],
    players: "۱.۸M فعال",
    releaseDate: "نوامبر ۲۰۲۳",
  },
  {
    id: "cosmic-traders",
    title: "تاجران کیهانی (Cosmic Traders)",
    genre: "استراتژی / شبیه‌سازی",
    image: "/src/assets/images/cosmic_traders_1785236903554.jpg",
    description: "مسیرهای تجاری بین‌ستاره‌ای بسازید، ناوگان‌ها را فرماندهی کنید و بازارهای فضایی را در کیهان چندنفره تصرف کنید.",
    platforms: ["PC", "Mac"],
    players: "۹۵۰K فعال",
    releaseDate: "اوت ۲۰۲۳",
  },
  {
    id: "tiny-defenders",
    title: "مدافعان کوچک (Tiny Defenders)",
    genre: "دفاع از برج (Tower Defense)",
    image: "/src/assets/images/tiny_defenders_1785236917430.jpg",
    description: "یک بازی تاکتیکی جذاب با سبک مینیاتوری که قهرمانان کوچک و جادوهای عناصر طبیعی را به تصویر می‌کشد.",
    platforms: ["PC", "iOS", "Android"],
    players: "۳.۲M فعال",
    releaseDate: "ژانویه ۲۰۲۴",
  },
  {
    id: "neon-arena",
    title: "میدان نئون (Neon Arena)",
    genre: "اکشن / آنلاین PvP",
    image: "/src/assets/images/neon_arena_1785236939724.jpg",
    description: "میدان نبرد سایبرنتیکی سریع و پرهیجان با درگیری‌های تیمی ۳ به ۳ و تورنمنت‌های فصلی.",
    platforms: ["PC", "PS5", "XBOX"],
    players: "۴.۱M فعال",
    releaseDate: "فوریه ۲۰۲۴",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "۰۱",
    title: "کشف و پژوهش",
    description: "ما تحقیق می‌کنیم، اهداف را مشخص می‌سازیم و بازیکنان را درک می‌کنیم.",
    iconName: "Target",
  },
  {
    step: "۰۲",
    title: "طراحی",
    description: "خلق حلقه‌های بازی، سیستم‌ها و تجربه‌های تعاملی.",
    iconName: "PenTool",
  },
  {
    step: "03",
    title: "تولید",
    description: "ساخت، تست و ارتقای کیفیت با استانداردهای بالا.",
    iconName: "Layers",
  },
  {
    step: "۰۴",
    title: "انتشار",
    description: "عرضه دقیق، پولیش نهایی و ورود به بازار جهانی.",
    iconName: "Rocket",
  },
  {
    step: "۰۵",
    title: "پشتیبانی",
    description: "به‌روزرسانی‌های زنده و رشد جامعه فعال بازیکنان.",
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

export interface Hero3DWorld {
  id: string;
  title: string;
  subtitle: string;
  cameraAngle: string;
  image: string;
  baseRotateX: number;
  baseRotateY: number;
  accentColor: string;
  tag: string;
  spec: string;
}

export const HERO_3D_WORLDS: Hero3DWorld[] = [
  {
    id: "fantasy-realm",
    title: "قلمرو فانتزی الدن",
    subtitle: "دنیای ماجراجویی با جزیره شناور، کریستال و پرتال جادویی",
    cameraAngle: "زاویه ایزومتریک روبرو (۴۵ درجه)",
    image: "/src/assets/images/hero_fantasy_isolated_1785244866242.jpg",
    baseRotateX: 12,
    baseRotateY: -10,
    accentColor: "#635BFF",
    tag: "Unreal Engine 5",
    spec: "4K | Ray Tracing",
  },
  {
    id: "cyberpunk-metropolis",
    title: "شهر سایبرپانک نئونی",
    subtitle: "کلان‌شهر آینده‌نگرانه با برج‌ها و ماشین‌های پرنده",
    cameraAngle: "زاویه ایزومتریک جانبی (۳۰ درجه)",
    image: "/src/assets/images/hero_cyber_isolated_1785244880867.jpg",
    baseRotateX: 18,
    baseRotateY: 15,
    accentColor: "#00F0FF",
    tag: "Cyber Engine",
    spec: "DLSS 3.5 | Volumetric Fog",
  },
  {
    id: "cosmic-outpost",
    title: "ایستگاه فضایی کیهانی",
    subtitle: "پایگاه بین‌ستاره‌ای با موتورهای پلاسما و مدار سیاره‌ای",
    cameraAngle: "زاویه فوقانی (نما از بالا ۲۰ درجه)",
    image: "/src/assets/images/hero_cosmic_isolated_1785244892873.jpg",
    baseRotateX: 25,
    baseRotateY: -20,
    accentColor: "#FF007A",
    tag: "Procedural Universe",
    spec: "Zero-G Physics",
  },
  {
    id: "volcano-fortress",
    title: "قلعه آتشفشانی دژ اژدها",
    subtitle: "دژ فانتزی تاریک با رودخانه‌های گداخته و دژ سنگی",
    cameraAngle: "زاویه مایل پایین (منظر صعودی)",
    image: "/src/assets/images/hero_volcano_isolated_1785244904545.jpg",
    baseRotateX: -8,
    baseRotateY: 20,
    accentColor: "#FF5500",
    tag: "Lava Physics",
    spec: "Dynamic Fluid Sim",
  },
  {
    id: "crystal-citadel",
    title: "جزیره کریستالی قطبی",
    subtitle: "قلمرو منجمد با کریستال‌های درخشان و شفق قطبی",
    cameraAngle: "زاویه قطری مورب (۲۵ درجه)",
    image: "/src/assets/images/hero_ice_isolated_1785244917255.jpg",
    baseRotateX: 15,
    baseRotateY: -25,
    accentColor: "#00E5FF",
    tag: "Subsurface Scattering",
    spec: "HDR Aurora Lighting",
  },
];

