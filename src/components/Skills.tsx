import { useState } from "react";
import { Server, Globe, Database, Wrench } from "lucide-react";

const categories = [
  { id: "backend", label: "Backend", icon: Server, skills: [{ name: "Java (Spring Boot)", level: 90 }, { name: "C# (.NET Framework)", level: 85 }, { name: "REST APIs", level: 88 }, { name: "Entity Framework", level: 80 }] },
  { id: "frontend", label: "Frontend", icon: Globe, skills: [{ name: "React", level: 85 }, { name: "Next.js", level: 80 }, { name: "JavaScript / TypeScript", level: 85 }, { name: "Bootstrap / Tailwind", level: 82 }] },
  { id: "database", label: "Bases de datos", icon: Database, skills: [{ name: "SQL Server", level: 85 }, { name: "MariaDB / MySQL", level: 80 }, { name: "SQL / Consultas", level: 88 }] },
  { id: "tools", label: "Herramientas", icon: Wrench, skills: [{ name: "Git / GitHub", level: 85 }, { name: "Desarrollo con IA", level: 92 }, { name: "VS Code / IntelliJ", level: 88 }, { name: "Docker (básico)", level: 70 }] },
];

export default function Skills() {
  const [active, setActive] = useState(categories[0].id);
  const cat = categories.find((c) => c.id === active)!;

  return (
    <section id="skills" className="section-pad">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs text-zinc-400 mb-4 uppercase tracking-wider">Habilidades</p>
        <h2 className="text-2xl font-bold mb-8">Tecnologías</h2>
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((c) => (
            <button key={c.id} onClick={() => setActive(c.id)} className={`px-4 py-1.5 text-sm transition-colors ${active === c.id ? "bg-zinc-900 text-white" : "text-zinc-500 hover:text-zinc-900"}`}>
              {c.label}
            </button>
          ))}
        </div>
        <div className="space-y-5">
          {cat.skills.map((s) => (
            <div key={s.name}>
              <div className="flex justify-between text-sm mb-1.5">
                <span>{s.name}</span>
                <span className="text-zinc-400">{s.level}%</span>
              </div>
              <div className="h-1.5 bg-zinc-100">
                <div className="h-full bg-zinc-900 transition-all duration-700" style={{ width: `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
