import { useState } from "react";
import { Github, ArrowRight, CheckCircle2 } from "lucide-react";

interface Project {
  title: string;
  categoryName: string;
  year: string;
  desc: string;
  impact: string;
  tags: string[];
  category: "all" | "backend" | "fullstack" | "database";
  repo: string;
}

const featuredLeadProject = {
  kicker: "Caso Líder de Ingeniería de Sistemas",
  title: "Vault Vintage & Store Backend Ecosystem",
  badge: "Caso Destacado",
  summary: "Plataforma empresarial integral que combina punto de venta, control de inventario transaccional y microservicios con seguridad JWT.",
  architecture: "Arquitectura en Capas (Controller-Service-Repository) con microservicios REST, seguridad por roles y persistencia transaccional.",
  tags: ["Java", "Spring Boot", "SQL Server", "JWT Security", "Docker", "React"],
  points: [
    "Diseño de persistencia transaccional en SQL Server con integridad referencial ACID.",
    "Seguridad perimetral mediante tokens JWT con control de expiración y roles.",
    "Documentación completa de endpoints con Swagger / OpenAPI 3.0 y contenedorización Docker.",
  ],
  repo: "https://github.com/paulollito29-sketch/store-backend-v2",
  frontendRepo: "https://github.com/paulollito29-sketch/vault-vintage-frontend",
};

const portfolioCards: Project[] = [
  {
    title: "Store Backend Microservices Ecosystem",
    categoryName: "Backend & Microservicios",
    year: "2026",
    desc: "Arquitectura modular de microservicios para comercio con seguridad JWT, validaciones estrictas y persistencia relacional.",
    impact: "Impacto: APIs estandarizadas con OpenAPI y autenticación segura para altos volúmenes de peticiones.",
    tags: ["Java", "Spring Boot", "JWT", "MySQL", "Docker", "Swagger"],
    category: "backend",
    repo: "https://github.com/paulollito29-sketch/store-backend-v2",
  },
  {
    title: "Vault Vintage - POS & Control de Inventario",
    categoryName: "Sistema Comercial Full Stack",
    year: "2026",
    desc: "Sistema empresarial de facturación, punto de venta y control de stock con reportería analítica y gestión de permisos.",
    impact: "Impacto: Trazabilidad total de ventas, control de caja y sincronización en tiempo real.",
    tags: ["Java", "Spring Boot", "SQL Server", "React", "REST API"],
    category: "fullstack",
    repo: "https://github.com/paulollito29-sketch/vault-vintage-frontend",
  },
  {
    title: "KAIROS - Sistema de Asistencia PWA",
    categoryName: "Solución Operacional",
    year: "2025",
    desc: "Sistema de control de asistencia de personal para restaurante con funcionamiento offline y sincronización como Progressive Web App.",
    impact: "Impacto: Operatividad ininterrumpida sin conexión a internet y control automático de horas laboradas.",
    tags: ["Java", "Spring Boot", "PWA", "PostgreSQL", "Service Workers"],
    category: "fullstack",
    repo: "https://github.com/paulollito29-sketch/kairos-asistencia",
  },
  {
    title: "LimaSync - Plataforma Comunitaria",
    categoryName: "Frontend Web",
    year: "2025",
    desc: "Aplicación web moderna para sincronización de calendarios comunitarios y reserva de eventos con Server-Side Rendering.",
    impact: "Impacto: Carga ultrarrápida, SEO optimizado y experiencia de usuario fluida.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SSR"],
    category: "fullstack",
    repo: "https://github.com/paulollito29-sketch/LimaSync",
  },
  {
    title: "Huffman File Compressor & Decompressor",
    categoryName: "Algoritmos & Estructuras",
    year: "2024",
    desc: "Compresor de archivos sin pérdida basado en frecuencias estadísticas y árboles binarios de Huffman con interfaz gráfica.",
    impact: "Impacto: Reducción comprobada del tamaño de archivos de texto con compresión exacta sin pérdida.",
    tags: ["Python", "Estructuras de Datos", "Algoritmos", "GUI"],
    category: "database",
    repo: "https://github.com/paulollito29-sketch/huffman-compressor",
  },
  {
    title: "Flappy Bird Clone (Motor en C# / .NET)",
    categoryName: "Desarrollo en .NET",
    year: "2024",
    desc: "Recreación del clásico videojuego utilizando el runtime de C# y .NET con simulación matemática de gravedad y colisiones.",
    impact: "Impacto: Estructuración rigurosa de código orientada a objetos en la plataforma .NET.",
    tags: ["C#", ".NET", "Windows Forms", "POO"],
    category: "database",
    repo: "https://github.com/paulollito29-sketch/Trabajo_juego",
  },
];

const categories = [
  { id: "all", label: "Todos los Casos" },
  { id: "backend", label: "Backend" },
  { id: "fullstack", label: "Full Stack" },
  { id: "database", label: "Bases de Datos & .NET" },
];

export default function ProjectsShowcase() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? portfolioCards : portfolioCards.filter((p) => p.category === filter);

  return (
    <section id="portfolios" className="max-w-7xl mx-auto px-4 sm:px-8 py-12 relative z-10">
      {/* Flat Section Header */}
      <div className="mb-10 text-center sm:text-left border-b border-zinc-800 pb-5">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-1">
          SISTEMAS DESARROLLADOS
        </span>
        <h2 className="text-2xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight">
          Portafolio &amp; Casos de Estudio
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1">
          Proyectos empresariales con código fuente auditado y arquitecturas listas para producción.
        </p>
      </div>

      {/* Lead Featured Case Study (Flat) */}
      <div className="mb-10 rounded-lg bg-[#121215] border border-zinc-800 p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-white text-black font-bold text-xs uppercase tracking-wider">
                {featuredLeadProject.badge}
              </span>
              <span className="text-xs font-mono text-zinc-400">
                {featuredLeadProject.kicker}
              </span>
            </div>

            <h3 className="text-xl sm:text-3xl font-display font-bold text-white uppercase">
              {featuredLeadProject.title}
            </h3>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-3xl">
              {featuredLeadProject.summary}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {featuredLeadProject.tags.map((t) => (
                <span key={t} className="px-2.5 py-0.5 text-xs font-mono rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
                  {t}
                </span>
              ))}
            </div>

            {/* Points */}
            <ul className="space-y-1.5 pt-2">
              {featuredLeadProject.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href={featuredLeadProject.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded bg-white hover:bg-cyan-400 text-black font-semibold text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
              >
                <Github className="w-4 h-4" /> Repositorio Backend
              </a>
              <a
                href={featuredLeadProject.frontendRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 text-white font-medium text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
              >
                <Github className="w-4 h-4" /> Repositorio Frontend
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Toolbar & Filters (Flat) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-3 border-b border-zinc-800">
        <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold">
          Filtrar por Área
        </span>

        <div className="flex flex-wrap gap-1.5">
          {categories.map((c) => {
            const isActive = filter === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                className={`px-3 py-1 text-xs font-mono rounded transition-colors cursor-pointer uppercase tracking-wider ${
                  isActive
                    ? "bg-zinc-800 text-white font-bold border border-zinc-600"
                    : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Portfolio Grid (Flat) */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((p) => (
          <article
            key={p.title}
            className="bg-[#121215] border border-zinc-800 rounded-lg p-5 flex flex-col justify-between hover:border-zinc-700 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-cyan-400 border border-zinc-800 uppercase">
                  {p.categoryName}
                </span>
                <span className="text-xs font-mono text-zinc-500">{p.year}</span>
              </div>

              <h4 className="text-sm sm:text-base font-bold text-white mb-2 line-clamp-2">
                {p.title}
              </h4>

              <p className="text-xs text-zinc-400 leading-relaxed mb-3 line-clamp-3">
                {p.desc}
              </p>

              <p className="text-[11px] font-mono text-zinc-400 mb-4 border-l border-cyan-500/60 pl-2">
                {p.impact}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1 mb-4">
                {p.tags.map((t) => (
                  <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-3 border-t border-zinc-800">
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Ver en GitHub</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
