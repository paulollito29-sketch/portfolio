import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, FolderGit2, Building2, Code2, Gamepad2, Database, ClipboardList, Binary, Sparkles } from "lucide-react";

interface Project {
  title: string;
  desc: string;
  tags: string[];
  icon: any;
  category: "all" | "fullstack" | "backend" | "frontend" | "game";
  repo: string;
  demoUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Vault Vintage",
    desc: "Sistema de gestión de inventario y punto de venta para tienda de ropa vintage con autenticación, control de roles y reportes analíticos.",
    tags: ["Java", "Spring Boot", "SQL Server", "React", "REST API"],
    icon: Building2,
    category: "fullstack",
    repo: "https://github.com/paulollito29-sketch/vault-vintage-frontend",
    featured: true,
  },
  {
    title: "Store Backend Microservices",
    desc: "Arquitectura backend modular con microservicios, seguridad JWT, endpoints documentados mediante OpenAPI/Swagger y persistencia relacional.",
    tags: ["Java", "Spring Boot", "JWT", "MySQL", "Docker", "Swagger"],
    icon: Code2,
    category: "backend",
    repo: "https://github.com/paulollito29-sketch/store-backend-v2",
    featured: true,
  },
  {
    title: "LimaSync",
    desc: "Aplicación web moderna para sincronización de horarios, gestión de calendarios comunitarios y eventos en Lima con alta reactividad.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    icon: Code2,
    category: "frontend",
    repo: "https://github.com/paulollito29-sketch/LimaSync",
  },
  {
    title: "Nutrigo",
    desc: "Plataforma de seguimiento nutricional interactivo con cálculo dinámico de macros, calorías diarias e historial de consumo.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    icon: Database,
    category: "fullstack",
    repo: "https://github.com/paulollito29-sketch/cams",
  },
  {
    title: "KAIROS - Asistencia & Personal",
    desc: "Sistema de control de asistencia de personal para el restaurante KAIROS con soporte offline como Progressive Web App (PWA).",
    tags: ["Java", "Spring Boot", "PWA", "PostgreSQL"],
    icon: ClipboardList,
    category: "fullstack",
    repo: "https://github.com/paulollito29-sketch/kairos-asistencia",
  },
  {
    title: "Flappy Bird Clone (Physics Engine)",
    desc: "Recreación del clásico juego en lenguaje C# con Windows Forms, simulación de físicas por gravedad y detección precisa de colisiones.",
    tags: ["C#", ".NET", "Windows Forms", "Game Loop"],
    icon: Gamepad2,
    category: "game",
    repo: "https://github.com/paulollito29-sketch/Trabajo_juego",
  },
  {
    title: "Huffman File Compressor",
    desc: "Herramienta de compresión y descompresión de archivos sin pérdida implementando el árbol codificador de Huffman con interfaz visual.",
    tags: ["Python", "Estructuras de Datos", "Algoritmos", "GUI"],
    icon: Binary,
    category: "backend",
    repo: "https://github.com/paulollito29-sketch/huffman-compressor",
  },
];

const categories = [
  { id: "all", label: "Todos los Proyectos" },
  { id: "fullstack", label: "Full Stack" },
  { id: "backend", label: "Backend & APIs" },
  { id: "frontend", label: "Frontend" },
  { id: "game", label: "Juegos & Algoritmos" },
];

export default function ProjectsShowcase() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-blue-500/20 text-xs font-mono text-blue-400 mb-3"
            >
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>PORTAFOLIO DE CÓDIGO</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
            >
              Proyectos Destacados
            </motion.h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 glass-card rounded-2xl border border-white/10 w-fit">
            {categories.map((c) => {
              const isActive = filter === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setFilter(c.id)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-xl transition-colors cursor-pointer ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectFilter"
                      className="absolute inset-0 bg-blue-600/30 border border-blue-500/40 rounded-xl"
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
        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filtered.map((p) => {
              const Icon = p.icon;
              return (
                <motion.div
                  layout
                  key={p.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -5 }}
                  className="glass-card rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Subtle top corner gradient accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/20 transition-all" />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:border-cyan-400/40 transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      {p.featured && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                          <Sparkles className="w-3 h-3" /> Destacado
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                      {p.desc}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-[11px] font-mono rounded-md bg-white/5 text-zinc-300 border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                      {p.repo ? (
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 px-3.5 py-2 rounded-xl border border-white/10 transition-all"
                        >
                          <Github className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Ver Repositorio</span>
                        </a>
                      ) : (
                        <span className="text-xs text-zinc-500 font-mono">Privado</span>
                      )}

                      {p.demoUrl ? (
                        <a
                          href={p.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 px-3.5 py-2 rounded-xl border border-cyan-500/20 transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Demo En Vivo</span>
                        </a>
                      ) : (
                        <span className="text-xs text-zinc-500 font-mono inline-flex items-center gap-1 px-3 py-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" /> Producción / Local
                        </span>
                      )}
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
