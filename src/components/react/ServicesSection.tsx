import { Server, Database, Layers, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

interface Service {
  tag: string;
  name: string;
  desc: string;
  icon: any;
  points: string[];
}

const services: Service[] = [
  {
    tag: "Metodología SDD",
    name: "Especificación & Diseño de Sistemas (SDD)",
    desc: "Elaboración de Software Design Documents (SDD), especificación formal de requerimientos, contratos OpenAPI y arquitectura Clean/SOLID previa a la implementación.",
    icon: Layers,
    points: [
      "Diseño de Software Design Documents (SDD) y especificaciones técnicas",
      "Definición formal de contratos API RESTful con OpenAPI / Swagger",
      "Arquitectura desacoplada en capas (Clean / Hexagonal) y principios SOLID",
      "Modelado de dominio de negocio y casos de uso empresariales",
    ],
  },
  {
    tag: "Backend",
    name: "Desarrollo de Servicios & APIs",
    desc: "Construcción de APIs RESTful de alto rendimiento en Java (Spring Boot) y C# (.NET Core) con seguridad JWT.",
    icon: Server,
    points: [
      "Microservicios desacoplados con Spring Boot & .NET Core",
      "Autenticación segura basada en tokens JWT y roles",
      "Documentación interactiva con Swagger / OpenAPI 3.0",
      "Contenedorización con Docker y Docker Compose",
    ],
  },
  {
    tag: "Bases de Datos",
    name: "Modelado Relacional & SQL",
    desc: "Diseño de esquemas relacionales, transacciones ACID, optimización de consultas complejas y procedimientos almacenados.",
    icon: Database,
    points: [
      "Modelado relacional en PostgreSQL, SQL Server y MariaDB",
      "Optimización de índices y planes de ejecución",
      "Mapeo eficiente con ORMs (JPA/Hibernate y EF Core)",
      "Integridad referencial y políticas transaccionales",
    ],
  },
  {
    tag: "Desarrollo con IA",
    name: "Desarrollo Asistido por IA & Full Stack",
    desc: "Construcción acelerada de sistemas web y microservicios mediante flujos asistidos por IA (LLMs, Copilot, Cursor y testing guiado).",
    icon: Sparkles,
    points: [
      "Ciclo de desarrollo acelerado con herramientas de IA generativa",
      "Interfaces reactivas con Angular, React, Next.js y Astro",
      "Generación y ejecución automatizada de tests unitarios",
      "Código con tipado estricto en TypeScript y arquitectura modular",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-4 sm:px-8 py-12 relative z-10">
      {/* Friendly Section Header */}
      <div className="mb-10 text-center sm:text-left border-b border-slate-800/80 pb-5">
        <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold block mb-1">
          CAPACIDADES TÉCNICAS
        </span>
        <h2 className="text-2xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight">
          Servicios de Ingeniería de Sistemas
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-1">
          Soluciones integrales de software con especificaciones formales, código limpio y aceleración con IA.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.name}
              className="bg-[#131d33] border border-slate-800 rounded-xl p-5 flex flex-col justify-between hover:border-sky-500/50 hover:bg-[#1a2744] transition-all shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-center text-sky-400">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/80 border border-slate-800 text-sky-300 uppercase">
                    {s.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {s.name}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {s.desc}
                </p>

                <ul className="space-y-1.5 mb-5 border-t border-slate-800/80 pt-3">
                  {s.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-[11px] text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-1 text-xs font-mono text-sky-400 hover:text-sky-300 transition-colors uppercase font-medium"
                >
                  <span>Consultar Servicio</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
