import { useState } from "react";
import { Server, Database, Globe, Cpu, CheckCircle2 } from "lucide-react";

interface Competency {
  name: string;
  levelText: string;
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
        levelText: "Sólido",
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
        levelText: "Sólido",
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
        name: "Oracle Database & PL/SQL",
        levelText: "Sólido",
        levelPercent: 85,
        description: "Diseño de esquemas, consultas SQL avanzadas, optimización de rendimiento y procedimientos PL/SQL.",
        tags: ["Oracle SQL", "PL/SQL", "Packages", "Funciones", "Diseño Relacional"],
      },
      {
        name: "MySQL & PostgreSQL",
        levelText: "Sólido",
        levelPercent: 86,
        description: "Administración de bases de datos open source, diseño de esquemas, migraciones y persistencia con ORMs.",
        tags: ["PostgreSQL", "MySQL", "DBeaver", "Migraciones"],
      },
    ],
  },
  {
    id: "frontend",
    label: "Frontend & Aplicaciones Web",
    icon: Globe,
    summary: "Desarrollo de interfaces reactivas modernas, tipado estricto y alto rendimiento.",
    competencies: [
      {
        name: "React & TypeScript",
        levelText: "Avanzado",
        levelPercent: 90,
        description: "Desarrollo de SPAs y componentes interactivos con React Hooks, Context API y tipado estricto con TypeScript.",
        tags: ["React 19", "TypeScript", "Hooks", "Component Architecture"],
      },
      {
        name: "Astro & Next.js",
        levelText: "Avanzado",
        levelPercent: 88,
        description: "Construcción de sitios web ultrarrápidos con Astro (Island Architecture) y aplicaciones con SSR en Next.js.",
        tags: ["Astro", "Next.js", "Islands", "SSR", "Static Generation"],
      },
      {
        name: "Tailwind CSS & Maquetación Responsiva",
        levelText: "Avanzado",
        levelPercent: 92,
        description: "Diseño responsivo móvil-first, sistemas de diseño utilitarios, animaciones con Framer Motion y CSS semántico.",
        tags: ["Tailwind CSS", "Framer Motion", "Responsive Design", "Flexbox/Grid"],
      },
    ],
  },
  {
    id: "devops",
    label: "Herramientas & Entornos",
    icon: Cpu,
    summary: "Herramientas de desarrollo, contenedorización y documentación de sistemas.",
    competencies: [
      {
        name: "Docker & Contenedorización",
        levelText: "Sólido",
        levelPercent: 82,
        description: "Creación de Dockerfiles para Java/.NET, configuración de entornos multi-contenedor con Docker Compose.",
        tags: ["Docker", "Docker Compose", "Multi-stage Builds", "Containers"],
      },
      {
        name: "Git & Documentación con Swagger",
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
    <section id="skills" className="py-12 px-4 sm:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Flat Section Header */}
        <div className="mb-10 text-center sm:text-left border-b border-zinc-800 pb-5">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-1">
            STACK TECNOLÓGICO
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight">
            Matriz de Competencias Técnicas
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Niveles de dominio en ingeniería de backend, persistencia de datos y desarrollo web.
          </p>
        </div>

        {/* Tab Navigation (Flat) */}
        <div className="flex flex-wrap gap-1.5 mb-8 p-1 rounded bg-[#121215] border border-zinc-800 w-fit">
          {enterpriseCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded text-xs font-mono tracking-wider transition-colors cursor-pointer uppercase ${
                  isActive
                    ? "bg-zinc-800 text-white font-bold border border-zinc-700"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Competencies Grid (Flat) */}
        <div className="grid md:grid-cols-2 gap-4">
          {currentCategory.competencies.map((comp) => (
            <div
              key={comp.name}
              className="bg-[#121215] border border-zinc-800 rounded-lg p-5 flex flex-col justify-between hover:border-zinc-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-sm font-bold text-white">{comp.name}</h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-cyan-400 uppercase">
                    {comp.levelText}
                  </span>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {comp.description}
                </p>

                {/* Progress bar (Flat) */}
                <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden border border-zinc-800 mb-4">
                  <div
                    className="h-full bg-cyan-400 transition-all duration-300"
                    style={{ width: `${comp.levelPercent}%` }}
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-1 pt-3 border-t border-zinc-800">
                {comp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[10px] font-mono rounded bg-zinc-900 border border-zinc-800 text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
