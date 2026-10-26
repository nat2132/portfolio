export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building SHEGA",
    description: "A business-management platform (web, mobile & desktop) for Ethiopian businesses",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export type ProjectCategory = "landing" | "fullstack";
export type ProjectStatus = "live" | "prototype" | "in-progress";

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  des: string;
  img?: string;
  tech: string[];
  repo: string;
  live?: string;
  api?: string;
  status: ProjectStatus;
  private?: boolean;
  note?: string;
}

export const projects: Project[] = [
  // ─────────────── Landing Pages ───────────────
  {
    id: 1,
    title: "iPhone 15 Pro Landing Page",
    category: "landing",
    des: "A faithful recreation of the Apple iPhone 15 Pro site — a fully interactive Three.js 3D model, scroll-bound GSAP animations and a cinematic video carousel.",
    img: "/p4.svg",
    tech: ["React", "Vite", "Three.js", "GSAP", "Tailwind CSS"],
    repo: "https://github.com/nat2132/iPhone-landing-page",
    live: "https://iphonelandingpage-natolis-projects.vercel.app",
    status: "live",
  },
  {
    id: 2,
    title: "Commercial Bank of Ethiopia (CBE)",
    category: "landing",
    des: "Digital banking landing portal for Ethiopia's premier bank — digital banking services, CBE Birr integration, branch finder, and trade finance showcases.",
    img: "/cbe.jpg",
    tech: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    repo: "https://github.com/nat2132/portfolio",
    live: "https://portfolio-natoli.vercel.app",
    status: "live",
  },
  {
    id: 3,
    title: "Ethiopian Airlines SkyTrax Portal",
    category: "landing",
    des: "Cinematic landing experience for Africa's largest carrier — flight booking interface, ShebaMiles loyalty portal, destination showcases, and cabin experience highlights.",
    img: "/ethiopian-airlines.jpg",
    tech: ["HTML5", "CSS3", "JavaScript", "AOS"],
    repo: "https://github.com/nat2132/portfolio",
    live: "https://portfolio-natoli.vercel.app",
    status: "live",
  },
  {
    id: 4,
    title: "Ethio Telecom Digital Portal",
    category: "landing",
    des: "Corporate digital portal for Ethiopia's leading telecommunications provider — Telebirr SuperApp highlights, 5G network coverage, and enterprise solutions.",
    img: "/ethiotelecom.jpg",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    repo: "https://github.com/nat2132/portfolio",
    live: "https://portfolio-natoli.vercel.app",
    status: "live",
  },
  {
    id: 5,
    title: "SunChips Ethiopia",
    category: "landing",
    des: "Vibrant brand landing page celebrating local snack products — recipe showcases, flavor explorer, ingredient origin stories, and store locator.",
    img: "/sunchips.jpg",
    tech: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    repo: "https://github.com/nat2132/portfolio",
    live: "https://portfolio-natoli.vercel.app",
    status: "live",
  },
  {
    id: 6,
    title: "Addis Kicks",
    category: "landing",
    des: "A bold sneaker-store landing page — popular products, special offers and customer reviews in a smooth, conversion-focused layout.",
    img: "/sneak.png",
    tech: ["React", "Vite", "Tailwind CSS", "AOS"],
    repo: "https://github.com/nat2132/Addis-Kicks",
    live: "https://addis-kicks-natoli.vercel.app",
    status: "live",
  },
  {
    id: 7,
    title: "Ethiopian Cuisine",
    category: "landing",
    des: "A visually rich landing page celebrating Ethiopian food — hero storytelling, popular dishes and trending sections powered by scroll animations.",
    img: "/cusine.png",
    tech: ["HTML", "CSS", "JavaScript", "Vite", "AOS"],
    repo: "https://github.com/nat2132/Ethiopian-Cusine",
    live: "https://ethiopian-cusine-natoli.vercel.app",
    status: "live",
  },

  // ─────────────── Full-Stack Development ───────────────
  {
    id: 8,
    title: "Fitness Webapp",
    category: "fullstack",
    des: "Full-stack health & activity tracking web app with TypeScript/Express + MongoDB backend — JWT authentication with bcrypt, profile management, and full activity logging CRUD operations, connected to a React 19 dashboard.",
    img: "/fitness.png",
    tech: ["React", "Vite", "Express", "TypeScript", "MongoDB", "JWT"],
    repo: "https://github.com/nat2132/fitness-webapp",
    live: "https://fitness-natoli.vercel.app",
    api: "https://fitness-api-t4hf.onrender.com",
    status: "live",
  },
  {
    id: 9,
    title: "Event Finder",
    category: "fullstack",
    des: "Full event discovery & ticketing platform: Django REST APIs hosted on Render, PostgreSQL on Supabase, Clerk authentication, organizer & admin dashboards, saved events, and notifications with a React 19 frontend.",
    img: "/event.png",
    tech: ["React", "Vite", "Django", "DRF", "Clerk", "PostgreSQL", "Tailwind CSS"],
    repo: "https://github.com/nat2132/event_finder",
    live: "https://event-finder-natoli.vercel.app",
    api: "https://event-finder-api-h9xl.onrender.com",
    status: "live",
  },
  {
    id: 10,
    title: "MyLinkSpace",
    category: "fullstack",
    des: "A Linktree-style link-in-bio platform: Laravel 10 + Sanctum API on Render with PostgreSQL on Supabase — profile customization, link CRUD, click analytics, themes, and QR codes wired to a React dashboard.",
    img: "/mylinks.png",
    tech: ["React", "Vite", "Laravel", "Sanctum", "PostgreSQL", "Chart.js"],
    repo: "https://github.com/nat2132/MyLinkSpace",
    live: "https://mylinkspace-natoli.vercel.app",
    api: "https://mylinkspace-api.onrender.com",
    status: "live",
  },
  {
    id: 11,
    title: "Jewelry Shop E-Commerce Platform",
    category: "fullstack",
    des: "Full-stack Django e-commerce platform for luxury silver and gold jewelry — product catalogs, user authentication, shopping cart, and order management.",
    img: "/jewelry.png",
    tech: ["Python", "Django", "SQLite", "Bootstrap 5", "JavaScript"],
    repo: "https://github.com/nat2132/Jewelry_Shop",
    live: "https://jewelry-shop-natoli.vercel.app",
    status: "live",
  },
  {
    id: 12,
    title: "Yegna Bazzar",
    category: "fullstack",
    des: "An Ethiopian multi-vendor e-commerce marketplace platform built with Next.js 14, TypeScript, and Tailwind CSS, providing product catalogs and multi-seller shopping workflows.",
    img: "/yegna.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    repo: "https://github.com/nat2132/yegna-bazzar",
    live: "https://yegna-bazzar.vercel.app",
    status: "live",
  },
  {
    id: 13,
    title: "Social Network Platform",
    category: "fullstack",
    des: "An interactive web social platform featuring user profile customization, dynamic activity feeds, post interactions, messaging interface, and event calendars.",
    img: "/social.png",
    tech: ["HTML", "CSS", "Bootstrap 4", "JavaScript", "jQuery"],
    repo: "https://github.com/nat2132/Socail_network_platform",
    live: "https://social-network-platform-prototype.vercel.app",
    status: "live",
  },
  {
    id: 14,
    title: "Shega — Business Management Platform",
    category: "fullstack",
    des: "SaaS inventory, sales & business management platform for Ethiopian enterprises: Next.js web application + Django REST API with JWT authentication deployed on Render.",
    img: "/shega.png",
    tech: ["Next.js", "TypeScript", "Django", "DRF", "Tailwind CSS", "React Query"],
    repo: "https://github.com/nat2132/shega-web",
    live: "https://shega-web-six.vercel.app",
    status: "live",
  },
  {
    id: 15,
    title: "Sour Trek",
    category: "fullstack",
    des: "A cinematic travel & expedition web platform for Ethiopia — interactive booking flows, agency showcases, gallery marquees, and rich media storyscapes built with Next.js.",
    img: "/sour-trek.png",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    repo: "https://github.com/nat2132/sour-trek",
    live: "https://sours-trek-natoli.vercel.app",
    status: "live",
  },
  {
    id: 16,
    title: "Fresh Roots",
    category: "fullstack",
    des: "Digital farmers market & agricultural supply platform: Next.js storefront & admin panel over a Django/DRF backend on Render with PostgreSQL on Supabase — shopping cart, checkout, order tracking, and JWT authentication.",
    img: "/fresh.png",
    tech: ["Next.js", "Django", "DRF", "PostgreSQL", "JWT", "Tailwind CSS"],
    repo: "https://github.com/nat2132/fresh-roots",
    live: "https://fresh-roots-natoli.vercel.app",
    api: "https://fresh-roots-api.onrender.com",
    status: "live",
  },
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "landing", label: "Landing Pages" },
  { id: "fullstack", label: "Full-Stack Development" },
] as const;

export const skillGroups = [
  {
    group: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Vite",
      "GSAP",
      "Three.js",
      "Framer Motion",
      "shadcn / Radix UI",
    ],
  },
  {
    group: "Backend",
    items: [
      "Node.js",
      "Express",
      "Django",
      "Django REST Framework",
      "Laravel",
      "REST APIs",
      "JWT / Clerk / Sanctum",
      "Django Channels",
    ],
  },
  {
    group: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Supabase", "SQLite", "Prisma"],
  },
  {
    group: "Tools & Deploy",
    items: ["Git & GitHub", "Vercel", "Render", "Supabase", "npm / pip / composer"],
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Event Management & Discovery Webapp",
    desc: "Created a full-featured event management and discovery web application with modern technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Health & Fitness Tracking Webapp",
    desc: "Created a comprehensive fitness tracking web application to help users monitor and improve their health goals.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/telegram.svg",
    link: "https://t.me/nat1432",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/nat134",
  },
  {
    id: 3,
    img: "/git.svg",
    link: "https://github.com/nat2132",
  },
];
