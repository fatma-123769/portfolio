export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  tech: string[];
  github?: string;
  demo?: string;
  video?: string;
  gradient: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    slug: "sunspace",
    title: "Sunspace",
    tagline: "Coworking booking + e-learning + AI chatbot",
    description:
      "All-in-one platform to reserve coworking spaces, browse e-learning courses, and get instant help from a Gemini-powered chatbot. Interactive 3D space preview built with Three.js.",
    longDescription:
      "Sunspace is a full-stack platform that combines three things people usually juggle across separate apps: coworking space reservation, e-learning course management, and instant AI assistance. Users can walk through the coworking space in interactive 3D (built with Three.js), pick the exact desk or room they want, and book on the spot. The learning management module lets admins publish courses, track student progress and issue certificates. A Gemini-powered chatbot answers any question in natural language.",
    tech: ["Next.js", "Three.js", "Gemini API", "Node.js", "PostgreSQL", "Tailwind"],
    video: "/videos/sunspace.mp4",
    gradient: "from-orange-500/25 via-amber-500/10 to-transparent",
    featured: true,
  },
  {
    slug: "rag-assistant",
    title: "RAG Document Assistant",
    tagline: "AI-powered document Q&A with citations",
    description:
      "A SaaS platform where users upload documents and chat with them. Semantic search via embeddings, streaming answers with source citations, conversation history.",
    longDescription:
      "Users upload PDF, DOCX or TXT documents and immediately start chatting with them. Behind the scenes, documents are chunked, embedded and indexed. Every question returns a streamed answer with exact source citations (page + snippet), so the user can verify what the model is claiming. Conversations are persisted, so you can come back and continue where you left off.",
    tech: ["Next.js", "TypeScript", "OpenAI", "Vercel"],
    video: "/videos/rag-assistant.mp4",
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    featured: true,
  },
  {
    slug: "n8n-crm",
    title: "CRM + n8n Automation",
    tagline: "Zero-touch lead pipeline",
    description:
      "Webhook-driven CRM that captures leads from the RAG chat, enriches them via external APIs, and pushes them to the sales pipeline — all through n8n workflows.",
    longDescription:
      "Every conversation in the RAG assistant that shows sales intent gets pushed via webhook into an n8n workflow. n8n enriches the lead (company info, contact details from external APIs), scores it, and creates a row in the CRM with the full context. No manual data entry — the sales team just sees leads appear, sorted by priority, with the full conversation transcript attached.",
    tech: ["n8n", "Node.js", "PostgreSQL", "Webhooks", "REST APIs"],
    video: "/videos/n8n-crm.mp4",
    gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
    featured: true,
  },
  {
    slug: "teacher-hub",
    title: "Teacher Hub",
    tagline: "Assignment & classroom management",
    description:
      "Web app for teachers to manage assignments, track student submissions and grade homework. Spring Boot REST API on the backend, React SPA on the frontend, JWT auth.",
    longDescription:
      "Teacher Hub was built to replace the messy mix of email + WhatsApp + paper that most teachers use to hand out and collect homework. Teachers post assignments with deadlines, students submit their work through the app, and teachers grade and give feedback in one place. Role-based access (teacher vs student), JWT auth, notifications for new assignments and grades.",
    tech: ["Spring Boot", "Java", "React", "MySQL", "JWT", "REST APIs"],
    video: "/videos/teacher-hub.mp4",
    gradient: "from-emerald-500/20 via-green-500/10 to-transparent",
  },
  {
    slug: "salon-booking",
    title: "EasyBook — Salon Booking",
    tagline: "Booksy-style app for beauty & wellness",
    description:
      "Mobile app to browse and book appointments at massage parlors, hair salons, nail bars and other wellness venues. Real-time availability, push notifications, secure auth.",
    longDescription:
      "EasyBook is a Booksy-style mobile app for booking beauty and wellness appointments — massage, hair, nails, spa, and more. Users browse venues by category, see real-time availability, book in two taps, and receive push reminders. Businesses have their own dashboard to manage staff, services and calendar.",
    tech: ["Flutter", "Dart", "Firebase", "Cloud Functions", "FCM"],
    video: "/videos/salon-booking.mp4",
    gradient: "from-cyan-500/20 via-sky-500/10 to-transparent",
  },
  {
    slug: "portfolio",
    title: "This Portfolio",
    tagline: "3D interactive portfolio",
    description:
      "The site you're on. Built with Next.js 15, real 3D keyboard rendered with Three.js, scroll-linked animations via Framer Motion.",
    tech: ["Next.js", "Three.js", "Framer Motion", "TailwindCSS"],
    demo: "/",
    gradient: "from-fuchsia-500/20 via-purple-500/10 to-transparent",
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
