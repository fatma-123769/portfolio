"use client";

import Link from "next/link";
import { ArrowLeft, Download, Mail, MapPin, Phone, Linkedin } from "lucide-react";

const CONTACT = {
  phone: "+216 26 373 512",
  email: "hadhrifatma75@gmail.com",
  address: "Route Mahdia Km 2.5, Sfax",
  linkedin: "https://www.linkedin.com/feed/",
  linkedinLabel: "linkedin.com/in/FatmaEzzahraHadhri",
};

const PROJECTS = [
  {
    title: "Sunspace — Coworking & E-learning Platform",
    period: "February 2026 — April 2026",
    bullets: [
      "All-in-one platform for coworking space reservation, e-learning course management and AI assistance.",
      "Interactive 3D coworking space preview built with Three.js — users can pick the exact desk to book.",
      "Course publishing, student progress tracking and certificate delivery in the learning module.",
      "Gemini-powered chatbot answering user questions in natural language.",
    ],
    tech: "Next.js, TypeScript, Three.js, Framer Motion, Gemini API, Node.js, PostgreSQL, Tailwind",
  },
  {
    title: "Reservation Mobile App",
    period: "October 2025 — January 2026",
    bullets: [
      "Cross-platform mobile app inspired by Booksy for booking and scheduling services.",
      "Three user roles: Employee, Technician, Administrator, with secure authentication and permission management.",
      "Full app in Flutter and Dart, including UI, data management and integration with external APIs.",
      "Mobile-adapted MVC architecture with responsive front-end integration.",
    ],
    tech: "Flutter, Dart, Firebase, REST API, MVC architecture",
  },
  {
    title: "Teacher Wishes Management System",
    period: "September 2025 — December 2025",
    bullets: [
      "Three user roles: Teacher, Manager, Administrator, with secure authentication and role-based access.",
      "Full wish request workflow with dynamic states: pending, validated, refused, in-progress.",
      "Complete CRUD for users, wishes and related services.",
      "React front-end + Spring Boot back-end communicating through secure REST APIs.",
    ],
    tech: "Spring Boot, Java, React, MySQL, REST APIs, MVC architecture",
  },
];

const EXPERIENCE = [
  {
    title: "Final Year Project Internship (PFE) — Sunevit",
    period: "February 2026 — April 2026",
    bullets: [
      "Development of a mobile application with integrated AI chatbot for the Sunspace coworking & e-learning platform.",
      "Full-stack ownership: mobile UI, backend integration, real-time features, and Gemini-powered conversational assistant.",
      "Interactive 3D space preview built with Three.js for booking coworking desks visually.",
      "Delivered a production-ready application as final year graduation project (PFE).",
    ],
  },
  {
    title: "2-month Internship — Cercina",
    period: "June 30, 2025 — August 31, 2025",
    bullets: [
      "Development and maintenance of web applications using HTML, CSS and JavaScript.",
      "Active participation in team technical projects, with notable contribution to problem-solving and feature optimization.",
      "Consistent commitment and technical skills recognized by team members.",
      "Delivered a complete blog project during the internship: UI design, responsive integration, dynamic interactions and continuous code improvement.",
    ],
  },
];

const EDUCATION = [
  {
    title: "Bachelor's Degree in Business Computing",
    period: "October 2023 — Present",
    place: "Faculty of Economics and Management of Sfax (FSEGS)",
  },
  {
    title: "High School Diploma — Economics & Management",
    period: "June 2023",
    place: "Mohammed Ali High School, Sfax",
  },
];

const TECH_SKILLS = [
  { label: "Programming Languages", value: "JavaScript, TypeScript, Java, Dart, SQL" },
  { label: "Frontend", value: "HTML, CSS, React, Next.js, Tailwind, Framer Motion, Three.js" },
  { label: "Backend", value: "Node.js, Express, Spring Boot, Laravel" },
  { label: "Mobile", value: "Flutter, Dart" },
  { label: "AI & Automation", value: "OpenAI API, Gemini API, n8n workflows, AI chatbots" },
  { label: "Databases", value: "MySQL, PostgreSQL, Firebase, SQLite" },
  { label: "DevOps & Tools", value: "Docker, Vercel, Git / GitHub, VS Code, XAMPP, phpMyAdmin" },
  { label: "Modeling", value: "UML, MVC architecture, REST API design" },
  { label: "Operating Systems", value: "Windows, Linux (Ubuntu)" },
];

const SOFT_SKILLS = [
  { label: "Communication", value: "Strong verbal & written communication, team collaboration." },
  { label: "Problem Solving", value: "Critical analysis, logical thinking, methodical approach." },
  { label: "Organization", value: "Efficient time management, meeting deadlines, project planning." },
  { label: "Adaptability", value: "Fast learner, flexible with new technologies." },
  { label: "Team Spirit", value: "Collaboration, active listening, knowledge sharing." },
  { label: "Autonomy", value: "Independent work, initiative-taking." },
];

const LANGUAGES = [
  { name: "Arabic", level: "Native" },
  { name: "French", level: "Very good level" },
  { name: "English", level: "Good technical level" },
];

const CERTIFICATIONS = [
  "Scrum Certification (Agile Methodology) — 2024",
  "Java Certification – Level 1 (supervised by Hela Hakim) — 2024",
  "Digital Marketing Certification — 2024",
];

export function Resume() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Screen-only top bar with back + print buttons */}
      <div className="print:hidden sticky top-0 z-10 border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-600 transition hover:text-neutral-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            <Download className="h-4 w-4" />
            Download / Print PDF
          </button>
        </div>
      </div>

      {/* CV body */}
      <article className="mx-auto max-w-4xl bg-white px-8 py-12 print:px-10 print:py-8 md:px-14">
        {/* Header */}
        <header className="border-b border-neutral-200 pb-6">
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Fatma Ezzahra Hadhri
          </h1>
          <p className="mt-2 text-lg text-neutral-600">
            Business Computing Student & Full-Stack Developer
          </p>

          <div className="mt-5 grid grid-cols-1 gap-2 text-sm md:grid-cols-2">
            <span className="inline-flex items-center gap-2 text-neutral-700">
              <Phone className="h-4 w-4 text-neutral-400" />
              {CONTACT.phone}
            </span>
            <span className="inline-flex items-center gap-2 text-neutral-700">
              <Mail className="h-4 w-4 text-neutral-400" />
              <a href={`mailto:${CONTACT.email}`} className="underline decoration-neutral-300 underline-offset-2 hover:decoration-neutral-900">
                {CONTACT.email}
              </a>
            </span>
            <span className="inline-flex items-center gap-2 text-neutral-700">
              <MapPin className="h-4 w-4 text-neutral-400" />
              {CONTACT.address}
            </span>
            <span className="inline-flex items-center gap-2 text-neutral-700">
              <Linkedin className="h-4 w-4 text-neutral-400" />
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-neutral-300 underline-offset-2 hover:decoration-neutral-900"
              >
                {CONTACT.linkedinLabel}
              </a>
            </span>
          </div>
        </header>

        {/* About */}
        <Section title="About Me">
          <p className="text-neutral-700 leading-relaxed">
            Third-year Bachelor&apos;s student in Business Computing at FSEG,
            passionate about web development, mobile technologies (Flutter,
            Dart) and deeply <strong>fascinated by Artificial Intelligence</strong>{" "}
            — from LLM-powered chatbots to intelligent automation. With a solid
            foundation in economics and management combined with technical
            full-stack skills, I&apos;m currently completing my Final Year
            Project (PFE) internship in IT, building AI-integrated products
            and contributing to innovative solutions.
          </p>
        </Section>

        {/* Professional Experience */}
        <Section title="Professional Experience">
          {EXPERIENCE.map((entry) => (
            <Entry
              key={entry.title}
              title={entry.title}
              period={entry.period}
              bullets={entry.bullets}
            />
          ))}
        </Section>

        {/* Academic Formation */}
        <Section title="Academic Formation">
          {EDUCATION.map((entry) => (
            <div key={entry.title} className="mb-4 last:mb-0">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold text-neutral-900">{entry.title}</h3>
                <span className="text-sm text-neutral-500">{entry.period}</span>
              </div>
              <p className="text-sm text-neutral-600">{entry.place}</p>
            </div>
          ))}
        </Section>

        {/* Academic Projects */}
        <Section title="Academic Projects">
          {PROJECTS.map((project) => (
            <Entry
              key={project.title}
              title={project.title}
              period={project.period}
              bullets={project.bullets}
              tech={project.tech}
            />
          ))}
        </Section>

        {/* Technical Skills */}
        <Section title="Technical Skills">
          <ul className="space-y-2">
            {TECH_SKILLS.map((s) => (
              <li key={s.label} className="text-sm">
                <span className="font-semibold text-neutral-900">{s.label}: </span>
                <span className="text-neutral-700">{s.value}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Soft Skills */}
        <Section title="Soft Skills">
          <div className="grid gap-3 md:grid-cols-2">
            {SOFT_SKILLS.map((s) => (
              <div key={s.label} className="text-sm">
                <span className="font-semibold text-neutral-900">{s.label}: </span>
                <span className="text-neutral-700">{s.value}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Languages */}
        <Section title="Languages">
          <div className="flex flex-wrap gap-6 text-sm">
            {LANGUAGES.map((l) => (
              <div key={l.name}>
                <span className="font-semibold text-neutral-900">{l.name}: </span>
                <span className="text-neutral-700">{l.level}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Certifications */}
        <Section title="Certifications">
          <ul className="list-inside list-disc space-y-1 text-sm text-neutral-700">
            {CERTIFICATIONS.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Section>
      </article>

      {/* Print styles */}
      <style jsx global>{`
        @media print {
          html,
          body {
            background: white !important;
          }
          @page {
            size: A4;
            margin: 12mm;
          }
        }
      `}</style>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="mb-4 border-b border-neutral-200 pb-1 font-display text-lg font-bold uppercase tracking-widest text-neutral-900">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Entry({
  title,
  period,
  bullets,
  tech,
}: {
  title: string;
  period: string;
  bullets: string[];
  tech?: string;
}) {
  return (
    <div className="mb-5 last:mb-0">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-semibold text-neutral-900">{title}</h3>
        <span className="text-sm text-neutral-500">{period}</span>
      </div>
      <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-neutral-700">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      {tech && (
        <p className="mt-2 text-xs text-neutral-500">
          <span className="font-semibold">Technologies:</span> {tech}
        </p>
      )}
    </div>
  );
}
