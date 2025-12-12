// Portfolio Data - Update this file with your information

export const siteConfig = {
  name: "Salman",
  title: "Full-Stack & AI Engineer Building Intelligent Systems",
  description:
    "Focused on building secure, maintainable full-stack solutions and ensuring system stability through deep troubleshooting expertise.",
  url: "https://salman.dev",
  email: "salmandev15@gmail.co",
  location: "",
  availability: "Open to opportunities",
};

export const socialLinks = {
  github: "https://github.com/Salvero", // Update with your GitHub
  linkedin: "https://www.linkedin.com/in/salmanakram-7i", // Update with your LinkedIn
  email: "mailto:salmandev15@gmail.com",
};

export const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export const aboutData = {
  headline: "Building digital experiences that matter",
  paragraphs: [
    "I'm a Full-Stack Developer with 7+ years of experience in technical support and software development. My journey from troubleshooting complex issues to building modern applications gives me a unique perspective on creating user-centric solutions.",
    "I specialize in building scalable web applications using React, Next.js, Python, and Django. I'm passionate about real-time collaboration tools, AI integration, and creating seamless user experiences.",
    "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing.",
  ],
  stats: [
    { value: "7+", label: "Years Experience" },
    { value: "4", label: "Major Projects" },
    { value: "500+", label: "Problems Solved" },
    { value: "100%", label: "Commitment" },
  ],
};

export const experiences = [
  {
    company: "Pagefreezer",
    role: "Technical Support Engineer",
    period: "November 2023 - Present",
    location: "Vancouver, BC",
    description:
      "Providing technical support for enterprise web archiving and compliance solutions. Debugging complex issues across cloud infrastructure and helping customers implement best practices.",
    highlights: [
      "Resolved 500+ technical support tickets with 95% satisfaction rate",
      "Created documentation reducing common support inquiries by 30%",
      "Collaborated with engineering team to identify and fix product bugs",
    ],
  },
  {
    company: "Docebo",
    role: "Technical Support Analyst",
    period: "February 2023 - November 2023",
    location: "Toronto, ON",
    description:
      "Supported enterprise LMS platform customers with technical issues, integrations, and API implementations.",
    highlights: [
      "Specialized in API integrations and SSO configurations",
      "Trained new team members on complex troubleshooting procedures",
      "Developed internal tools to streamline support workflows",
    ],
  },
  {
    company: "Pixel Union",
    role: "Technical Support Engineer",
    period: "May 2020 - July 2022",
    location: "Victoria, BC",
    description:
      "Provided expert support for premium Shopify themes. Deep expertise in e-commerce, Liquid templating, and frontend customization.",
    highlights: [
      "Supported 10,000+ Shopify merchants with theme customization",
      "Became go-to expert for complex Liquid template modifications",
      "Contributed to theme documentation and knowledge base",
    ],
  },
  {
    company: "Out of the Sandbox",
    role: "Intermediate Web Developer",
    period: "May 2016 - May 2020",
    location: "Ottawa, ON",
    description:
      "Developed and maintained premium Shopify themes. Built custom features and optimized theme performance for e-commerce merchants.",
    highlights: [
      "Built custom Shopify theme features using Liquid and JavaScript",
      "Optimized theme performance improving load times by 40%",
      "Collaborated with design team on new theme releases",
    ],
  },
];

export const projects = [
  {
    title: "SyncSpace",
    description:
      "Keyboard-first infinite canvas for real-time collaborative brainstorming with integrated AI assistance and room-based multiplayer sessions.",
    longDescription:
      "A friction-free real-time collaborative canvas built on event-driven architecture with low-latency state synchronization. Features an infinite workspace, keyboard-first navigation (N for notes, M for AI), and room-based multiplayer sessions. Integrates an AI Teammate for intelligent content assistance, optimized for high-concurrency collaborative workflows.",
    image: "/projects/syncspace.png",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Liveblocks",
      "Google AI",
      "Real-time Sync",
    ],
    liveUrl: "https://syncspace-app-ashen.vercel.app/",
    githubUrl: "https://github.com/Salvero/syncspace",
    featured: true,
    highlights: [
      "Infinite canvas with real-time multi-user sync",
      "AI Teammate for intelligent brainstorming assistance",
      "Keyboard-first UX (N: notes, M: AI)",
      "Room-based collaboration with instant state sync",
    ],
    metrics: [
      { value: "< 50ms", label: "Sync Latency" },
      { value: "99.9%", label: "Uptime" },
    ],
  },
  {
    title: "AppointHub",
    description:
      "All-in-one SaaS appointment scheduling platform for service businesses with intelligent booking, staff management, and real-time analytics.",
    longDescription:
      "A production-ready appointment scheduling platform built with Django, featuring intelligent double-booking prevention, staff availability management, and multi-location support. Includes a real-time analytics dashboard with revenue tracking, automated email/SMS reminders, and 24/7 customer self-service booking.",
    image: "/projects/appointhub.png",
    tags: ["Django", "Python", "PostgreSQL", "Celery", "Redis", "Chart.js"],
    liveUrl: "https://appointhub.onrender.com/",
    githubUrl: "https://github.com/Salvero/appointhub",
    featured: true,
    highlights: [
      "Intelligent scheduling with double-booking prevention",
      "Real-time analytics dashboard with revenue tracking",
      "Automated email & SMS appointment reminders",
      "Multi-location & staff availability management",
    ],
    metrics: [
      { value: "2,500+", label: "Bookings" },
      { value: "98%", label: "Satisfaction" },
    ],
  },
  {
    title: "Growhaus Plants",
    description:
      "Premium e-commerce platform for plant enthusiasts with advanced filtering, persistent cart, and WCAG 2.1 AA accessibility compliance.",
    longDescription:
      "A modern organic-themed e-commerce application built with React 18 and TypeScript. Features advanced product filtering by category and light requirements, detailed product pages with care guides and reviews, and a persistent shopping cart. Implements WCAG 2.1 AA accessibility standards and production-grade security headers.",
    image: "/projects/growhaus.png",
    tags: ["React 18", "TypeScript", "Vite", "Context API", "CSS Variables", "Netlify"],
    liveUrl: "https://growhaus-plants.netlify.app/",
    githubUrl: "https://github.com/Salvero/growhaus-plants",
    featured: true,
    highlights: [
      "Advanced filtering by category & light requirements",
      "Persistent cart with local storage",
      "WCAG 2.1 AA accessibility compliant",
      "Production security headers (HSTS, CSP)",
    ],
    metrics: [
      { value: "95", label: "Lighthouse" },
      { value: "AA", label: "WCAG" },
    ],
  },
  {
    title: "EcoPulse Dashboard",
    description:
      "Real-time environmental intelligence dashboard correlating weather conditions with solar generation and air quality metrics across global stations.",
    longDescription:
      "A real-time intelligence dashboard built with Next.js 16 and TypeScript that correlates local weather with environmental impact metrics. Features dual-axis Recharts visualizations overlaying solar output with AQI data, timezone-aware data normalization, and resilient API fetching with graceful fallback. Monitors stations across Toronto, New York, London, and Tokyo.",
    image: "/projects/ecopulse.png",
    tags: ["Next.js 16", "TypeScript", "TanStack Query", "Recharts", "Tailwind CSS", "Shadcn/UI"],
    liveUrl: "https://ecopulse-dashboard.netlify.app/",
    githubUrl: "https://github.com/Salvero/ecopulse-dashboard",
    featured: true,
    highlights: [
      "Dual-axis correlation charts (Solar + AQI)",
      "Multi-station global monitoring (4 cities)",
      "Timezone-intelligent data normalization",
      "Resilient API layer with graceful fallback",
    ],
    metrics: [
      { value: "94%", label: "Accuracy" },
      { value: "< 150ms", label: "Latency" },
    ],
  },
];

export const skills = {
  frontend: [
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Framer Motion", level: 80 },
  ],
  backend: [
    { name: "Python", level: 85 },
    { name: "Django", level: 85 },
    { name: "Node.js", level: 75 },
    { name: "PostgreSQL", level: 80 },
    { name: "Redis", level: 70 },
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "Docker", level: 75 },
    { name: "Vercel", level: 85 },
    { name: "Supabase", level: 80 },
    { name: "AWS", level: 65 },
  ],
  other: [
    { name: "REST APIs", level: 90 },
    { name: "GraphQL", level: 70 },
    { name: "CI/CD", level: 75 },
    { name: "Testing", level: 75 },
    { name: "Agile", level: 85 },
  ],
};

export const techStack = [
  // Frontend
  { name: "React", icon: "react", category: "frontend" },
  { name: "Next.js", icon: "nextjs", category: "frontend" },
  { name: "TypeScript", icon: "typescript", category: "frontend" },
  { name: "Tailwind", icon: "tailwind", category: "frontend" },
  { name: "Framer Motion", icon: "framer", category: "frontend" },
  // Backend
  { name: "Python", icon: "python", category: "backend" },
  { name: "Django", icon: "django", category: "backend" },
  { name: "Node.js", icon: "nodejs", category: "backend" },
  { name: "PostgreSQL", icon: "postgresql", category: "backend" },
  { name: "Redis", icon: "redis", category: "backend" },
  // Tools
  { name: "Git", icon: "git", category: "tools" },
  { name: "Docker", icon: "docker", category: "tools" },
  { name: "Vercel", icon: "vercel", category: "tools" },
  { name: "Supabase", icon: "supabase", category: "tools" },
  { name: "AWS", icon: "aws", category: "tools" },
];

export const blogPosts = [
  {
    title: "Building Real-Time Collaboration with Liveblocks",
    excerpt:
      "A deep dive into implementing real-time features in SyncSpace using Liveblocks and Yjs for conflict-free editing.",
    date: "2024-12-01",
    readTime: "8 min read",
    slug: "building-realtime-collaboration-liveblocks",
    tags: ["React", "Liveblocks", "Real-time"],
  },
  {
    title: "From Support to Software: My Developer Journey",
    excerpt:
      "How 7 years of technical support shaped my approach to building user-centric applications.",
    date: "2024-11-15",
    readTime: "5 min read",
    slug: "from-support-to-software",
    tags: ["Career", "Personal"],
  },
  {
    title: "Django 5.2: What's New and Why It Matters",
    excerpt:
      "Exploring the latest features in Django 5.2 and how I used them in AppointHub.",
    date: "2024-11-01",
    readTime: "6 min read",
    slug: "django-52-whats-new",
    tags: ["Django", "Python", "Backend"],
  },
];
