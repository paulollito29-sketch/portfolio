import { useState } from "react";
import { ExternalLink, Github, Code2, Building2, Gamepad2, Database } from "lucide-react";

const projects = [
  { title: "Vault Vintage", desc: "Sistema de gestión de inventario para tienda de ropa vintage con autenticación y reportes.", tags: ["Java", "Spring Boot", "SQL Server"], icon: Building2, category: "fullstack" },
  { title: "Store Backend", desc: "API RESTful con microservicios, autenticación JWT y documentación con Swagger.", tags: ["Java", "Spring Boot", "JWT", "MySQL"], icon: Code2, category: "backend" },
  { title: "Flappy Bird Clone", desc: "Clon del juego Flappy Bird en C# con Windows Forms y física básica.", tags: ["C#", "Windows Forms"], icon: Gamepad2, category: "game" },
  { title: "LimaSync", desc: "Aplicación web para sincronización de horarios y gestión de eventos en Lima.", tags: ["Next.js", "React", "TypeScript"], icon: Code2, category: "frontend" },
  { title: "Nutrigo", desc: "App de seguimiento nutricional con cálculos de calorías y macros personalizados.", tags: ["React", "TypeScript", "Tailwind"], icon: Database, category: "fullstack" },
];

const categories = [
  { id: "all", label: "Todos" },
  { id: "fullstack", label: "Full Stack" },
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
  { id: "game", label: "Juegos" },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-pad">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs text-zinc-400 mb-4 uppercase tracking-wider">Portafolio</p>
        <h2 className="text-2xl font-bold mb-6">Proyectos</h2>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((c) => (
            <button key={c.id} onClick={() => setFilter(c.id)} className={`px-3 py-1 text-sm transition-colors ${filter === c.id ? "bg-zinc-900 text-white" : "text-zinc-500 hover:text-zinc-900"}`}>
              {c.label}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {filtered.map((p) => (
            <div key={p.title} className="border-b border-zinc-100 pb-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-zinc-50 flex items-center justify-center shrink-0">
                  <p.icon className="w-4 h-4 text-zinc-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm mb-1">{p.title}</h3>
                  <p className="text-sm text-zinc-500 mb-3">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs text-zinc-400 bg-zinc-50 px-2 py-0.5">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <button className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-900 transition-colors">
                      <Github className="w-3 h-3" /> Código
                    </button>
                    <button className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-900 transition-colors">
                      <ExternalLink className="w-3 h-3" /> Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
