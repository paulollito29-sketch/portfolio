import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, FolderGit2, Building2, Code2, Gamepad2, Database, ClipboardList, Binary, Sparkles, CheckCircle2 } from "lucide-react";

interface Project {
  title: string;
  categoryName: string;
  role: string;
  desc: string;
  architecture: string;
  impactHighlights: string[];
  tags: string[];
  icon: any;
  category: "all" | "fullstack" | "backend" | "frontend" | "game";
  repo: string;
  featured?: boolean;
}

const enterpriseProjects: Project[] = [
  {
    title: "Vault Vintage - Enterprise Inventory & POS",
    categoryName: "Sistema Comercial Full Stack",
    role: "Lead Full Stack Developer",
    desc: "Sistema integral de punto de venta y control de inventario con autenticación multi-rol, trazabilidad de transacciones y reportería analítica.",
    architecture: "Arquitectura en Capas (Controller-Service-Repository) + REST API con persistencia relacional.",
    impactHighlights: [
      "Persistencia transaccional en SQL Server con integridad referencial",
      "Control de autenticación y autorización por roles",
      "Frontend interactivo con React y consumo desacoplado de endpoints",
    ],
    tags: ["Java", "Spring Boot", "SQL Server", "React", "REST API", "JPA/Hibernate"],
    icon: Building2,
    category: "fullstack",
    repo: "https://github.com/paulollito29-sketch/vault-vintage-frontend",
    featured: true,
  },
  {
    title: "Store Backend Microservices Ecosystem",
    categoryName: "Arquitectura de Servicios Backend",
    role: "Backend Engineer",
    desc: "Plataforma de servicios de comercio electrónico basada en arquitectura de microservicios con seguridad JWT y especificación OpenAPI.",
    architecture: "Microservicios desacoplados, seguridad perimetral con tokens JWT y documentación Swagger 3.0.",
    impactHighlights: [
      "Autenticación segura basada en tokens JWT con control de expiración",
      "Documentación interactiva de endpoints con Swagger / OpenAPI",
      "Contenedores Docker listos para despliegue y persistencia MySQL",
    ],
    tags: ["Java", "Spring Boot", "JWT Security", "MySQL", "Docker", "Swagger/OpenAPI"],
    icon: Code2,
    category: "backend",
    repo: "https://github.com/paulollito29-sketch/store-backend-v2",
    featured: true,
  },
  {
    title: "KAIROS - Sistema de Asistencia PWA",
    categoryName: "Solución Operacional Empresarial",
    role: "Full Stack Developer",
    desc: "Aplicación para el registro, monitoreo y auditoría de asistencia de personal del restaurante KAIROS con soporte offline como PWA.",
    architecture: "Backend Spring Boot + PWA Service Workers para operación continua sin conexión.",
    impactHighlights: [
      "Optimización de tiempos de marcación de personal en tiempo real",
      "Capacidad offline mediante Service Workers y sincronización posterior",
      "Generación de reportes de horas laboradas y horas extra",
    ],
    tags: ["Java", "Spring Boot", "PWA", "PostgreSQL", "Service Workers"],
    icon: ClipboardList,
    category: "fullstack",
    repo: "https://github.com/paulollito29-sketch/kairos-asistencia",
    featured: true,
  },
  {
    title: "LimaSync - Plataforma de Gestión Comunitaria",
    categoryName: "Frontend de Alto Rendimiento",
    role: "Frontend Engineer",
    desc: "Aplicación web moderna para sincronización de calendarios, reserva de espacios y gestión de eventos comunitarios en Lima.",
    architecture: "Server-Side Rendering (SSR) y Static Site Generation con Next.js y React 19.",
    impactHighlights: [
      "Renderizado optimizado con Next.js y tipado estricto en TypeScript",
      "Diseño responsivo fluido con Tailwind CSS y Framer Motion",
      "Estructura modular basada en componentes atómicos",
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SSR"],
    icon: Code2,
    category: "frontend",
    repo: "https://github.com/paulollito29-sketch/LimaSync",
  },
  {
    title: "Nutrigo - Health & Nutrition Tracker",
    categoryName: "Aplicación Web Reactiva",
    role: "Full Stack Engineer",
    desc: "Software de cálculo metabólico y seguimiento nutricional personalizado con cálculos dinámicos de macronutrientes.",
    architecture: "Client-side state management con React Hooks y cálculo reactivo en tiempo real.",
    impactHighlights: [
      "Fórmulas metabólicas automáticas según metas del usuario",
      "Microinteracciones y feedback visual instantáneo",
      "Persistencia local y arquitectura extensible para integración con API externa",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    icon: Database,
    category: "fullstack",
    repo: "https://github.com/paulollito29-sketch/cams",
  },
  {
    title: "Huffman File Compressor & Decompressor",
    categoryName: "Algoritmos & Estructuras de Datos",
    role: "Software Developer",
    desc: "Herramienta de compresión de archivos sin pérdida basada en árboles binarios y frecuencias de Huffman con interfaz gráfica.",
    architecture: "Implementación matemática de árboles de codificación de prefijo variable.",
    impactHighlights: [
      "Reducción efectiva del tamaño de archivos de texto sin pérdida de datos",
      "Estructuras de datos en árboles binarios y colas de prioridad",
      "Interfaz gráfica intuitiva para compresión y descompresión con un clic",
    ],
    tags: ["Python", "Estructuras de Datos", "Algoritmos", "GUI"],
    icon: Binary,
    category: "backend",
    repo: "https://github.com/paulollito29-sketch/huffman-compressor",
  },
  {
    title: "Flappy Bird Clone (Motor de Físicas en C#)",
    categoryName: "Desarrollo de Software en .NET",
    role: "Software Developer",
    desc: "Recreación del clásico videojuego utilizando el runtime de C# y .NET con simulación matemática de gravedad y colisiones.",
    architecture: "Game loop síncrono con control de framerate y detección de bounding-box en Windows Forms.",
    impactHighlights: [
      "Lógica de gravedad y cinemática en C#",
      "Manejo eficiente de estados de juego y eventos del teclado",
      "Estructuración de código orientada a objetos en .NET",
    ],
    tags: ["C#", ".NET", "Windows Forms", "Object-Oriented Programming"],
    icon: Gamepad2,
    category: "game",
    repo: "https://github.com/paulollito29-sketch/Trabajo_juego",
  },
];

const categories = [
  { id: "all", label: "Todos los Casos" },
  { id: "fullstack", label: "Full Stack Empresarial" },
  { id: "backend", label: "Backend & Microservicios" },
  { id: "frontend", label: "Frontend Moderno" },
  { id: "game", label: "Algoritmos & .NET" },
];

export default function ProjectsShowcase() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? enterpriseProjects : enterpriseProjects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-blue-500/30 text-xs font-mono text-sky-400 mb-3"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>CASOS DE ESTUDIO &amp; PROYECTOS EMPRESARIALES</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
            >
              Soluciones Técnicas &amp; Código en Producción
            </motion.h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1.5 glass-card rounded-2xl border border-white/10 w-fit">
            {categories.map((c) => {
              const isActive = filter === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setFilter(c.id)}
                  className={`relative px-3.5 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                    isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeEnterpriseFilter"
                      className="absolute inset-0 bg-blue-600/30 border border-sky-400/40 rounded-xl"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{c.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-7">
          <AnimatePresence>
            {filtered.map((p) => {
              const Icon = p.icon;
              return (
                <motion.div
                  layout
                  key={p.title}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4 }}
                  className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-sky-500/40 transition-all flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Accent Glow */}
                  <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-sky-500/20 transition-all" />

                  <div>
                    {/* Header with Category & Role */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-105 group-hover:border-sky-400/40 transition-all shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-[11px] font-mono text-sky-400">{p.categoryName}</div>
                          <div className="text-xs font-semibold text-slate-300">{p.role}</div>
                        </div>
                      </div>

                      {p.featured && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0">
                          <Sparkles className="w-3 h-3" /> Destacado
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-sky-300 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                      {p.desc}
                    </p>

                    {/* Architecture Pill */}
                    <div className="p-3 rounded-xl bg-zinc-950/60 border border-white/5 mb-4">
                      <div className="text-[11px] font-mono text-slate-400 mb-1 font-semibold">Arquitectura &amp; Diseño:</div>
                      <div className="text-xs text-slate-300 leading-relaxed">{p.architecture}</div>
                    </div>

                    {/* Impact Highlights */}
                    <div className="space-y-1.5 mb-6">
                      {p.impactHighlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-white/5 text-slate-200 border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      {p.repo ? (
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-bold text-white bg-blue-600/80 hover:bg-blue-600 px-4 py-2.5 rounded-xl border border-blue-500/40 transition-all shadow-md"
                        >
                          <Github className="w-4 h-4" />
                          <span>Explorar Código Fuente</span>
                        </a>
                      ) : (
                        <span className="text-xs text-slate-500 font-mono">Repositorio Privado</span>
                      )}

                      <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" /> Verificado
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
