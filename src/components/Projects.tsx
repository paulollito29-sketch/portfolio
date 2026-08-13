import { useState } from "react";
import { ExternalLink, Github, Code2, Building2, Gamepad2, Database } from "lucide-react";

const projects = [
  {
    title: "Vault Vintage",
    desc: "Sistema de gestión de inventario para tienda de ropa vintage con autenticación de usuarios y reportes.",
    tags: ["Java", "Spring Boot", "SQL Server", "Thymeleaf"],
    icon: Building2,
    category: "fullstack",
  },
  {
    title: "Store Backend",
    desc: "API RESTful para tienda en línea con microservicios, autenticación JWT y documentación con Swagger.",
    tags: ["Java", "Spring Boot", "JWT", "JPA", "MySQL"],
    icon: Code2,
    category: "backend",
  },
  {
    title: "Flappy Bird Clone",
    desc: "Clon clásico del juego Flappy Bird desarrollado en C# con Windows Forms y física básica.",
    tags: ["C#", "Windows Forms", "Game Dev"],
    icon: Gamepad2,
    category: "game",
  },
  {
    title: "LimaSync",
    desc: "Aplicación web para sincronización de horarios y gestión de eventos en Lima Metropolitana.",
    tags: ["Next.js", "React", "TypeScript", "Bootstrap"],
    icon: Code2,
    category: "frontend",
  },
  {
    title: "Nutrigo",
    desc: "App para seguimiento nutricional con cálculos de calorías, macros y planes de alimentación personalizados.",
    tags: ["React", "TypeScript", "Vite", "Tailwind"],
    icon: Database,
    category: "fullstack",
  },
];

const categories = [
  { id: "all", label: "TODOS" },
  { id: "fullstack", label: "FULL STACK" },
  { id: "backend", label: "BACKEND" },
  { id: "frontend", label: "FRONTEND" },
  { id: "game", label: "JUEGOS" },
];

const tagColors: Record<string, string> = {
  Java: "border-orange-500 bg-orange-50",
  "Spring Boot": "border-green-600 bg-green-50",
  "SQL Server": "border-red-500 bg-red-50",
  "C#": "border-purple-500 bg-purple-50",
  ".NET Framework": "border-blue-500 bg-blue-50",
  "Entity Framework": "border-blue-500 bg-blue-50",
  Thymeleaf: "border-teal-500 bg-teal-50",
  JWT: "border-yellow-500 bg-yellow-50",
  JPA: "border-indigo-500 bg-indigo-50",
  MySQL: "border-cyan-500 bg-cyan-50",
  "Windows Forms": "border-sky-500 bg-sky-50",
  "Game Dev": "border-pink-500 bg-pink-50",
  "Next.js": "border-gray-600 bg-gray-50",
  React: "border-blue-400 bg-blue-50",
  TypeScript: "border-indigo-600 bg-indigo-50",
  Bootstrap: "border-violet-500 bg-violet-50",
  Vite: "border-yellow-600 bg-yellow-50",
  Tailwind: "border-teal-600 bg-teal-50",
};

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding relative border-b border-border">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-mono font-bold tracking-[0.15em] uppercase text-accent mb-3">
            // PORTAFOLIO
          </span>
          <h2 className="section-title font-mono">PROYECTOS</h2>
          <div className="mx-auto mt-4 h-[4px] w-16 bg-accent" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 border border-border text-sm font-mono font-bold uppercase transition-all ${
                filter === cat.id
                  ? "bg-accent text-white"
                  : "bg-bg-alt text-fg hover:bg-fg hover:text-bg"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div key={project.title} className="flat-card overflow-hidden h-full flex flex-col">
              {/* Top accent bar */}
              <div className="h-2 bg-accent" />
              <div className="p-6 flex-1 flex flex-col">
                {/* Icon + title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 border border-border bg-bg-alt">
                    <project.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-mono font-bold text-fg uppercase text-sm">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm font-mono text-fg-muted leading-relaxed mb-5 flex-1">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-[11px] font-mono font-bold px-2 py-0.5 border ${
                        tagColors[tag] || "border-border bg-bg-alt"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-3 border-t border-border">
                  <button className="flex items-center gap-1.5 text-xs font-mono font-bold text-fg hover:text-accent transition-colors">
                    <Github className="w-3.5 h-3.5" />
                    CÓDIGO
                  </button>
                  <button className="flex items-center gap-1.5 text-xs font-mono font-bold text-fg hover:text-accent transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" />
                    DEMO
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
