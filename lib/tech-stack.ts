export type Tech = {
  name: string;
  label: string;
  color: string;
  logo: string;
  desc: string;
};

const dv = (slug: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-${variant}.svg`;

const si = (slug: string) =>
  `https://api.iconify.design/simple-icons/${slug}.svg?color=%23ffffff`;

export const TECH_STACK: Tech[] = [
  { name: "HTML",         label: "HTML", color: "#E44D26", logo: dv("html5"),      desc: "The backbone of the web." },
  { name: "CSS",          label: "CSS",  color: "#2965F1", logo: dv("css3"),       desc: "Styling made expressive." },
  { name: "JavaScript",   label: "JS",   color: "#F0DB4F", logo: dv("javascript"), desc: "The language of the web." },
  { name: "TypeScript",   label: "TS",   color: "#3178C6", logo: dv("typescript"), desc: "JavaScript, but safer." },
  { name: "React",        label: "",     color: "#20232A", logo: dv("react"),      desc: "My favorite UI library." },
  { name: "Next.js",      label: "",     color: "#000000", logo: dv("nextjs"),     desc: "React, superpowered." },
  { name: "Node.js",      label: "",     color: "#3C873A", logo: dv("nodejs"),     desc: "JavaScript on the server." },
  { name: "Express",      label: "",     color: "#1c1c1c", logo: dv("express"),    desc: "Fast, minimalist backend." },
  { name: "Flutter",      label: "",     color: "#0468D7", logo: dv("flutter"),    desc: "One codebase, every device." },
  { name: "MySQL",        label: "SQL",  color: "#00618A", logo: dv("mysql"),      desc: "Reliable relational DB." },
  { name: "PostgreSQL",   label: "",     color: "#336791", logo: dv("postgresql"), desc: "The most advanced open-source DB." },
  { name: "Firebase",     label: "FB",   color: "#FFA000", logo: dv("firebase", "plain"), desc: "Realtime backend as a service." },
  { name: "Three.js",     label: "3JS",  color: "#000000", logo: si("threedotjs"), desc: "3D in the browser." },
  { name: "Framer Motion",label: "FM",   color: "#0055FF", logo: si("framer"),     desc: "Animations, but easy." },
  { name: "Spring Boot",  label: "SB",   color: "#6DB33F", logo: dv("spring"),     desc: "Java, enterprise-ready." },
  { name: "OpenAI",       label: "AI",   color: "#412991", logo: si("openai"),     desc: "The engine behind my RAG." },
  { name: "Vercel",       label: "▲",    color: "#000000", logo: si("vercel"),     desc: "Deploy without thinking." },
  { name: "n8n",          label: "n8n",  color: "#EA4B71", logo: si("n8n"),        desc: "Automation without limits." },
  { name: "Docker",       label: "",     color: "#2496ED", logo: dv("docker"),     desc: "Ship containers, not chaos." },
  { name: "Git",          label: "",     color: "#F05032", logo: dv("git"),        desc: "Version control done right." },
];
