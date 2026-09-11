import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Server, Globe, Database, Sparkles, Cpu, CheckCircle2, ShieldCheck } from "lucide-react";

interface Competency {
  name: string;
  levelText: "Avanzado" | "Competente / Sólido" | "Intermedio Alto";
  levelPercent: number;
  description: string;
  tags: string[];
}

interface Category {
  id: string;
  label: string;
  icon: any;
  summary: string;
  competencies: Competency[];
}

const enterpriseCategories: Category[] = [
  {
    id: "backend",
    label: "Backend & Microservicios",
    icon: Server,
    summary: "Ingeniería de servidores, diseño de APIs RESTful escalables, seguridad de datos y arquitectura desacoplada.",
    competencies: [
      {
        name: "Java & Ecosistema Spring Boot",
        levelText: "Avanzado",
        levelPercent: 90,
        description: "Construcción de APIs RESTful, inyección de dependencias, Spring Security con JWT, JPA/Hibernate y validaciones.",
        tags: ["Spring Boot", "Spring Security", "JPA/Hibernate", "REST APIs", "Maven/Gradle"],
      },
      {
        name: "C# & Plataforma .NET Core",
        levelText: "Competente / Sólido",
        levelPercent: 86,
        description: "Desarrollo backend en .NET, LINQ, Entity Framework Core y arquitecturas orientadas a objetos.",
        tags: [".NET Core", "Entity Framework", "LINQ", "C# Moderno", "Windows Forms"],
      },
      {
        name: "Arquitectura de Sistemas & Buenas Prácticas",
        levelText: "Avanzado",
        levelPercent: 88,
        description: "Aplicación rigurosa de principios SOLID, Clean Architecture, separación de capas y patrones de diseño (Factory, Singleton, Repository).",
        tags: ["SOLID", "Clean Architecture", "Design Patterns", "Layered Architecture"],
      },
      {
        name: "Python & Procesamiento de Datos",
        levelText: "Competente / Sólido",
        levelPercent: 84,
        description: "Desarrollo de scripts, estructuras de datos avanzadas y algoritmos de optimización.",
        tags: ["Python 3", "Algoritmos", "Estructuras de Datos", "Data Processing"],
      },
    ],
  },
  {
    id: "database",
    label: "Bases de Datos & Persistencia",
    icon: Database,
    summary: "Modelado relacional, consultas optimizadas, integridad transaccional ACID y procedimientos almacenados.",
    competencies: [
      {
        name: "Microsoft SQL Server & T-SQL",
        levelText: "Avanzado",
        levelPercent: 88,
        description: "Modelado relacional, normalización (3FN), creación de índices, triggers, transacciones complejas y procedimientos almacenados.",
        tags: ["SQL Server", "T-SQL", "Stored Procedures", "Triggers", "Índices"],
      },
      {
        name: "Oracle SQL & PL/SQL (Certificación Oracle)",
        levelText: "Competente / Sólido",
        levelPercent: 86,
        description: "Acreditado por Oracle Academy en diseño de bases de datos relacionales, vistas complejas y funciones.",
        tags: ["Oracle Academy", "PL/SQL", "Relational Design", "Vistas"],
      },
      {
        name: "MySQL & PostgreSQL",
        levelText: "Competente / Sólido",
        levelPercent: 82,
        description: "Persistencia para microservicios, migraciones de esquemas y conexión con ORMs modernos.",
        tags: ["PostgreSQL", "MySQL", "JPA Mappings", "ACID Compliance"],
      },
    ],
  },
  {
    id: "frontend",
    label: "Frontend & Interfaces Web",
    icon: Globe,
    summary: "Experiencias de usuario de alto impacto visual, reactividad fluida, rendimiento web óptimo y tipado estricto.",
    competencies: [
      {
        name: "React 19 & TypeScript",
        levelText: "Avanzado",
        levelPercent: 88,
        description: "Componentes funcionales, Custom Hooks, gestión de estado, consumo de APIs y tipado estricto sin 'any'.",
        tags: ["React 19", "TypeScript", "Custom Hooks", "Context API", "Vite"],
      },
      {
        name: "Astro & Next.js (SSR / SSG)",
        levelText: "Competente / Sólido",
        levelPercent: 85,
        description: "Arquitectura de islas (Islands), generación de sitios estáticos ultrarrápidos y Server-Side Rendering.",
        tags: ["Astro 5", "Next.js", "Islands Architecture", "SEO Optimization"],
      },
      {
        name: "Tailwind CSS & Framer Motion",
        levelText: "Avanzado",
        levelPercent: 90,
        description: "Diseño responsivo, glassmorphism empresarial, animaciones basadas en física y diseño accesible.",
        tags: ["Tailwind CSS", "Framer Motion", "Responsive Design", "Microinteracciones"],
      },
    ],
  },
  {
    id: "devops-ai",
    label: "DevOps & Desarrollo Acelerado con IA",
    icon: Sparkles,
    summary: "Herramientas de contenedorización, flujos de trabajo en equipo y técnicas avanzadas de desarrollo asistido con IA.",
    competencies: [
      {
        name: "Ingeniería Asistida con IA",
        levelText: "Avanzado",
        levelPercent: 94,
        description: "Aceleración de desarrollo mediante modelos avanzados, generación sistemática de tests y refactorización guiada.",
        tags: ["AI-Augmented Dev", "Prompt Engineering", "Test Generation", "Code Review IA"],
      },
      {
        name: "Docker & Contenedores",
        levelText: "Competente / Sólido",
        levelPercent: 86,
        description: "Dockerfiles multi-stage para Java/.NET/Node, composición de entornos con Docker Compose y redes virtuales.",
        tags: ["Docker", "Docker Compose", "Multi-stage Builds", "Containerization"],
      },
      {
        name: "Git & Flujo de Trabajo en Equipo",
        levelText: "Avanzado",
        levelPercent: 90,
        description: "Control de versiones, Git Flow, resolución de conflictos, Pull Requests y documentación técnica mediante OpenAPI / Swagger.",
        tags: ["Git", "GitHub", "Git Flow", "Swagger/OpenAPI", "Postman"],
      },
    ],
  },
];

export default function SkillsMatrix() {
  const [activeTab, setActiveTab] = useState(enterpriseCategories[0].id);
  const currentCategory = enterpriseCategories.find((c) => c.id === activeTab) || enterpriseCategories[0];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Luxury Divider */}
        <div className="luxury-divider">
          <div className="luxury-divider-diamond" />
        </div>

        {/* Section Header */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-widest text-white uppercase">
            Matriz de Competencias
          </h2>
          <div className="title-underline" />
          <p className="text-xs sm:text-sm font-mono text-zinc-400 uppercase tracking-widest">
            Capacidades Técnicas &amp; Dominio Tecnológico en Sistemas
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 p-1.5 glass-card rounded-2xl border border-white/10 w-fit">
          {enterpriseCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2.5 cursor-pointer ${
                  isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeEnterpriseSkillTab"
                    className="absolute inset-0 bg-blue-600/25 border border-sky-400/40 rounded-xl shadow-[0_0_20px_rgba(14,165,233,0.2)]"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon className={`w-4 h-4 ${isActive ? "text-sky-400" : "text-slate-400"}`} />
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Competencies Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCategory.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10"
          >
            <p className="text-xs sm:text-sm text-slate-300 mb-8 font-mono bg-zinc-950/40 p-3.5 rounded-xl border border-white/5">
              💡 {currentCategory.summary}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {currentCategory.competencies.map((comp, index) => (
                <div
                  key={comp.name}
                  className="p-5 rounded-xl bg-zinc-950/50 border border-white/5 hover:border-sky-500/30 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                        {comp.name}
                      </h4>
                      <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400">
                        {comp.levelText}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {comp.description}
                    </p>

                    {/* Progress indicator */}
                    <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden mb-4">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${comp.levelPercent}%` }}
                        transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-400 rounded-full"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {comp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 text-slate-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
