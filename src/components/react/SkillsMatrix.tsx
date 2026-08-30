import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Server, Globe, Database, Sparkles, Cpu } from "lucide-react";

interface SkillItem {
  name: string;
  level: number;
  tags?: string[];
}

interface SkillCategory {
  id: string;
  label: string;
  icon: any;
  description: string;
  skills: SkillItem[];
}

const categories: SkillCategory[] = [
  {
    id: "backend",
    label: "Backend & APIs",
    icon: Server,
    description: "Desarrollo de servicios robustos, arquitecturas en capas y APIs RESTful seguras.",
    skills: [
      { name: "Java / Spring Boot", level: 90, tags: ["Spring Security", "JPA/Hibernate", "REST API"] },
      { name: "C# / .NET", level: 85, tags: [".NET Core", "Entity Framework", "LINQ"] },
      { name: "Python", level: 82, tags: ["Scripting", "Data Processing", "Algoritmos"] },
      { name: "Arquitectura en Capas / MVC", level: 88, tags: ["SOLID", "Clean Code", "Patrones"] },
    ],
  },
  {
    id: "frontend",
    label: "Frontend & UI",
    icon: Globe,
    description: "Creación de experiencias web dinámicas, reactivas y visualmente atractivas.",
    skills: [
      { name: "React / React 19", level: 88, tags: ["Hooks", "Context", "Componentes"] },
      { name: "TypeScript / JavaScript", level: 85, tags: ["Tipado estricto", "ESNext"] },
      { name: "Next.js & Astro", level: 82, tags: ["SSR", "Static Site Gen", "Islands"] },
      { name: "Tailwind CSS & Framer Motion", level: 90, tags: ["Responsive", "Animaciones UI", "Design Systems"] },
      { name: "Angular", level: 78, tags: ["TypeScript", "Directivas", "Servicios"] },
    ],
  },
  {
    id: "database",
    label: "Bases de Datos",
    icon: Database,
    description: "Modelado relacional, consultas optimizadas, integridad de datos e índices.",
    skills: [
      { name: "SQL Server (T-SQL)", level: 88, tags: ["Procedimientos", "Triggers", "Consultas complejas"] },
      { name: "Oracle SQL & PL/SQL", level: 85, tags: ["Oracle Academy Cert", "Vistas", "Funciones"] },
      { name: "MySQL / PostgreSQL", level: 82, tags: ["Transacciones", "Normalización"] },
    ],
  },
  {
    id: "tools",
    label: "Herramientas & IA",
    icon: Sparkles,
    description: "Flujos de trabajo modernos con contenedores, control de versiones y agentes de IA.",
    skills: [
      { name: "Desarrollo Asistido con IA", level: 94, tags: ["Prompt Engineering", "Cursor/Copilot", "Hermes", "OpenCode"] },
      { name: "Docker & Contenedores", level: 86, tags: ["Dockerfiles", "Docker Compose", "Multi-stage"] },
      { name: "Git & GitHub", level: 90, tags: ["Branching", "Pull Requests", "CI/CD Básico"] },
      { name: "Swagger / OpenAPI / Postman", level: 88, tags: ["Documentación API", "Testing de endpoints"] },
    ],
  },
];

export default function SkillsMatrix() {
  const [activeTab, setActiveTab] = useState(categories[0].id);
  const currentCategory = categories.find((c) => c.id === activeTab) || categories[0];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 text-center sm:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-purple-500/20 text-xs font-mono text-purple-400 mb-3"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>STACK TECNOLÓGICO</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Habilidades &amp; Competencias
          </motion.h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2.5 mb-8 p-1.5 glass-card rounded-2xl border border-white/10 w-fit">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-500/40 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon className={`w-4 h-4 ${isActive ? "text-cyan-400" : "text-zinc-400"}`} />
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Panels */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCategory.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10"
          >
            <p className="text-xs sm:text-sm text-zinc-400 mb-6 font-mono">
              {currentCategory.description}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {currentCategory.skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="p-4 rounded-xl bg-zinc-950/40 border border-white/5 hover:border-cyan-500/20 transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-zinc-200 group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-xs font-mono text-cyan-400 font-bold">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Bar with glowing fill */}
                  <div className="h-2 w-full bg-zinc-800/80 rounded-full overflow-hidden mb-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full relative"
                    >
                      <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/60 blur-[1px]" />
                    </motion.div>
                  </div>

                  {/* Tags */}
                  {skill.tags && (
                    <div className="flex flex-wrap gap-1.5">
                      {skill.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 text-zinc-400 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
