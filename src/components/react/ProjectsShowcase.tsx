import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, FolderGit2, Building2, Code2, Gamepad2, Database, ClipboardList, Binary, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

interface Project {
  title: string;
  categoryName: string;
  role: string;
  year: string;
  desc: string;
  architecture: string;
  impact: string;
  tags: string[];
  icon: any;
  category: "all" | "backend" | "fullstack" | "database";
  repo: string;
}

const featuredLeadProject = {
  kicker: "Caso Líder de Ingeniería de Sistemas",
  title: "Vault Vintage & Store Backend Ecosystem",
  badge: "Caso Destacado",
  summary: "Plataforma empresarial integral que combina punto de venta, control de inventario transaccional y ecosistema de microservicios con seguridad JWT.",
  architecture: "Arquitectura en Capas (Controller-Service-Repository) desacoplada con microservicios REST, seguridad por roles y persistencia transaccional.",
  tags: ["Java", "Spring Boot", "SQL Server", "JWT Security", "Docker", "React 19"],
  points: [
    "Diseño e implementación de persistencia transaccional en SQL Server con integridad referencial ACID.",
    "Seguridad perimetral mediante tokens JWT con control de expiración y roles.",
    "Documentación completa de endpoints con Swagger / OpenAPI 3.0 e integración de Docker.",
  ],
  repo: "https://github.com/paulollito29-sketch/store-backend-v2",
  frontendRepo: "https://github.com/paulollito29-sketch/vault-vintage-frontend",
};

const portfolioCards: Project[] = [
  {
    title: "Store Backend Microservices Ecosystem",
    categoryName: "Backend & Microservicios",
    role: "Backend Engineer",
    year: "2026",
    desc: "Arquitectura modular de microservicios para comercio con seguridad JWT, validaciones estrictas y persistencia relacional.",
    architecture: "Microservicios en Spring Boot con contenedorización en Docker.",
    impact: "Impacto: APIs estandarizadas con OpenAPI y autenticación segura para altos volúmenes de peticiones.",
    tags: ["Java", "Spring Boot", "JWT", "MySQL", "Docker", "Swagger"],
    icon: Code2,
    category: "backend",
    repo: "https://github.com/paulollito29-sketch/store-backend-v2",
  },
  {
    title: "Vault Vintage - POS & Control de Inventario",
    categoryName: "Sistema Comercial Full Stack",
    role: "Lead Full Stack Developer",
    year: "2026",
    desc: "Sistema empresarial de facturación, punto de venta y control de stock con reportería analítica y gestión de permisos.",
    architecture: "Backend Spring Boot + Frontend React con persistencia en SQL Server.",
    impact: "Impacto: Trazabilidad total de ventas, control de caja y sincronización en tiempo real.",
    tags: ["Java", "Spring Boot", "SQL Server", "React", "REST API"],
    icon: Building2,
    category: "fullstack",
    repo: "https://github.com/paulollito29-sketch/vault-vintage-frontend",
  },
  {
    title: "KAIROS - Sistema de Asistencia PWA",
    categoryName: "Solución Operacional",
    role: "Full Stack Developer",
    year: "2025",
    desc: "Sistema de control de asistencia de personal para restaurante con funcionamiento offline y sincronización como Progressive Web App.",
    architecture: "Spring Boot + Service Workers PWA + PostgreSQL.",
    impact: "Impacto: Operatividad ininterrumpida sin conexión a internet y control automático de horas laboradas.",
    tags: ["Java", "Spring Boot", "PWA", "PostgreSQL", "Service Workers"],
    icon: ClipboardList,
    category: "fullstack",
    repo: "https://github.com/paulollito29-sketch/kairos-asistencia",
  },
  {
    title: "LimaSync - Plataforma Comunitaria",
    categoryName: "Frontend de Alto Rendimiento",
    role: "Frontend Engineer",
    year: "2025",
    desc: "Aplicación web moderna para sincronización de calendarios comunitarios y reserva de eventos con Server-Side Rendering.",
    architecture: "Next.js SSR + TypeScript + Tailwind CSS.",
    impact: "Impacto: Carga ultrarrápida, SEO optimizado y experiencia de usuario fluida.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SSR"],
    icon: Code2,
    category: "fullstack",
    repo: "https://github.com/paulollito29-sketch/LimaSync",
  },
  {
    title: "Huffman File Compressor & Decompressor",
    categoryName: "Algoritmos & Estructuras de Datos",
    role: "Systems Developer",
    year: "2024",
    desc: "Compresor de archivos sin pérdida basado en frecuencias estadísticas y árboles binarios de Huffman con interfaz gráfica.",
    architecture: "Implementación matemática de árboles de codificación de prefijo variable en Python.",
    impact: "Impacto: Reducción comprobada del tamaño de archivos de texto con compresión exacta sin pérdida.",
    tags: ["Python", "Estructuras de Datos", "Algoritmos", "GUI"],
    icon: Binary,
    category: "database",
    repo: "https://github.com/paulollito29-sketch/huffman-compressor",
  },
  {
    title: "Flappy Bird Clone (Motor en C# / .NET)",
    categoryName: "Desarrollo de Sistemas en .NET",
    role: "Systems Developer",
    year: "2024",
    desc: "Recreación del clásico videojuego utilizando el runtime de C# y .NET con simulación matemática de gravedad y colisiones.",
    architecture: "Game loop síncrono con control de framerate y detección de bounding-box en Windows Forms.",
    impact: "Impacto: Estructuración rigurosa de código orientada a objetos en la plataforma .NET.",
    tags: ["C#", ".NET", "Windows Forms", "POO"],
    icon: Gamepad2,
    category: "database",
    repo: "https://github.com/paulollito29-sketch/Trabajo_juego",
  },
];

const categories = [
  { id: "all", label: "Todos los Casos" },
  { id: "backend", label: "Backend & Microservicios" },
  { id: "fullstack", label: "Full Stack" },
  { id: "database", label: "Bases de Datos & .NET" },
];

export default function ProjectsShowcase() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? portfolioCards : portfolioCards.filter((p) => p.category === filter);

  return (
    <section id="portfolios" className="max-w-7xl mx-auto px-4 sm:px-8 py-20 relative z-10">
      {/* Luxury Divider */}
      <div className="luxury-divider">
        <div className="luxury-divider-diamond" />
      </div>

      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-widest text-white uppercase">
          Casos de Estudio &amp; Portafolio
        </h2>
        <div className="title-underline" />
        <p className="text-xs sm:text-sm font-mono text-zinc-400 uppercase tracking-widest">
          Sistemas Empresariales Desarrollados y Listos para Producción
        </p>
      </div>

      {/* Lead Featured Case Study (Elio Navarrete style) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 rounded-2xl bg-[#0a0e18] border border-cyan-500/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 relative z-10">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded bg-cyan-500 text-[#05070c] font-display font-bold text-xs uppercase tracking-wider">
                {featuredLeadProject.badge}
              </span>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                {featuredLeadProject.kicker}
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-display font-bold text-white uppercase tracking-wide">
              {featuredLeadProject.title}
            </h3>

            <p className="text-xs sm:text-base text-zinc-300 leading-relaxed max-w-3xl">
              {featuredLeadProject.summary}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {featuredLeadProject.tags.map((t) => (
                <span key={t} className="px-3 py-1 text-xs font-mono rounded bg-white/5 border border-white/10 text-cyan-300">
                  {t}
                </span>
              ))}
            </div>

            {/* Impact Points */}
            <ul className="space-y-2 pt-3">
              {featuredLeadProject.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href={featuredLeadProject.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-[#05070c] font-display font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(0,229,255,0.4)]"
              >
                <Github className="w-4 h-4" /> Repositorio Backend
              </a>
              <a
                href={featuredLeadProject.frontendRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg border border-white/20 hover:border-cyan-400 hover:text-cyan-400 text-white font-display font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <Github className="w-4 h-4" /> Repositorio Frontend
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Toolbar & Filters (Elio Navarrete style) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
            Áreas de Especialidad
          </span>
          <p className="text-xs text-zinc-400 mt-0.5">
            Sistemas seleccionados en arquitectura backend, servicios y persistencia.
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {categories.map((c) => {
            const isActive = filter === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                className={`px-3.5 py-1.5 text-xs font-mono rounded transition-all cursor-pointer uppercase tracking-wider ${
                  isActive
                    ? "bg-cyan-500 text-[#05070c] font-bold shadow-[0_0_10px_rgba(0,229,255,0.4)]"
                    : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Portfolio Grid Cards */}
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filtered.map((p) => {
            const Icon = p.icon;
            return (
              <motion.article
                layout
                key={p.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="bg-[#0a0e17] border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-all group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase tracking-wider">
                      {p.categoryName}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">{p.year}</span>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2 line-clamp-2">
                    {p.title}
                  </h4>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-4 line-clamp-3">
                    {p.desc}
                  </p>

                  <p className="text-[11px] font-serif-lux italic text-cyan-300 mb-4 border-l-2 border-cyan-500/40 pl-2">
                    {p.impact}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1 mb-5">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-300 border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Abrir Repositorio</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
