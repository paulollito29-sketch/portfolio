import { useState } from "react";
import { Server, Globe, Database, Wrench } from "lucide-react";

const categories = [
  {
    id: "backend",
    label: "BACKEND",
    icon: Server,
    skills: [
      { name: "Java (Spring Boot)", level: 90 },
      { name: "C# (.NET Framework)", level: 85 },
      { name: "REST APIs", level: 88 },
      { name: "Entity Framework", level: 80 },
    ],
  },
  {
    id: "frontend",
    label: "FRONTEND",
    icon: Globe,
    skills: [
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "JavaScript / TypeScript", level: 85 },
      { name: "Bootstrap / Tailwind", level: 82 },
    ],
  },
  {
    id: "database",
    label: "BASES DE DATOS",
    icon: Database,
    skills: [
      { name: "SQL Server", level: 85 },
      { name: "MariaDB / MySQL", level: 80 },
      { name: "SQL / Consultas", level: 88 },
    ],
  },
  {
    id: "tools",
    label: "HERRAMIENTAS",
    icon: Wrench,
    skills: [
      { name: "Git / GitHub", level: 85 },
      { name: "Desarrollo con IA", level: 92 },
      { name: "VS Code / IntelliJ", level: 88 },
      { name: "Docker (básico)", level: 70 },
    ],
  },
];

export default function Skills() {
  const [active, setActive] = useState(categories[0].id);
  const activeCategory = categories.find((c) => c.id === active)!;

  return (
    <section id="skills" className="section-padding relative border-b-[3px] border-border">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-mono font-bold tracking-[0.15em] uppercase text-accent mb-3">
            // HABILIDADES
          </span>
          <h2 className="section-title font-mono">TECNOLOGÍAS</h2>
          <div className="mx-auto mt-4 h-[4px] w-16 bg-accent" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Category tabs */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`flex items-center gap-3 px-5 py-3 border-[3px] text-sm font-mono font-bold uppercase whitespace-nowrap transition-all ${
                  active === cat.id
                    ? "border-border bg-accent text-white"
                    : "border-border bg-bg-alt text-fg hover:bg-fg hover:text-bg"
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </div>

          {/* Skills list */}
          <div className="flex-1 min-w-0">
            <div className="border-[3px] border-border bg-card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center justify-center w-10 h-10 border-[3px] border-border bg-bg-alt">
                  <activeCategory.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-mono font-bold text-fg uppercase">{activeCategory.label}</h3>
                  <p className="text-xs font-mono text-fg-muted">
                    {activeCategory.skills.length} tecnologías
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {activeCategory.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-mono font-bold text-fg">
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono text-accent">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-3 border-[3px] border-border bg-bg-alt">
                      <div
                        className="h-full bg-fg transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
