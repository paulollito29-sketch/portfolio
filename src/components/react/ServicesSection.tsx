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
    tag: "Arquitectura",
    name: "Auditoría & Diseño de Sistemas",
    desc: "Evaluación integral de arquitectura de software, desacoplamiento en capas, estándares SOLID y optimización.",
    icon: Layers,
    points: [
      "Diseño basado en Clean Architecture y principios SOLID",
      "Diagnóstico de cuellos de botella y modularidad",
      "Definición de estándares de código y buenas prácticas",
      "Estrategia de escalabilidad para crecimiento empresarial",
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
      "Modelado relacional en SQL Server (T-SQL) y Oracle PL/SQL",
      "Optimización de índices y planes de ejecución",
      "Mapeo eficiente con ORMs (JPA/Hibernate y EF Core)",
      "Integridad referencial y políticas transaccionales",
    ],
  },
  {
    tag: "Full Stack",
    name: "Sistemas Web Modernos con IA",
    desc: "Interfaces reactivas en React, TypeScript y Astro con aceleración de desarrollo asistido por Inteligencia Artificial.",
    icon: Sparkles,
    points: [
      "Aplicaciones web con Astro y React para máxima velocidad",
      "Tipado estricto con TypeScript para reducir errores",
      "Flujos de trabajo acelerados con agentes y modelos de IA",
      "Diseño responsivo y código mantenible",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-4 sm:px-8 py-12 relative z-10">
      {/* Flat Section Header */}
      <div className="mb-10 text-center sm:text-left border-b border-zinc-800 pb-5">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-1">
          CAPACIDADES TÉCNICAS
        </span>
        <h2 className="text-2xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight">
          Servicios de Ingeniería de Sistemas
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1">
          Soluciones técnicas para empresas que requieren servicios backend robustos y arquitectura limpia.
        </p>
      </div>

      {/* Services Grid (Flat Design) */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.name}
              className="bg-[#121215] border border-zinc-800 rounded-lg p-5 flex flex-col justify-between hover:border-zinc-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-400">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 uppercase">
                    {s.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {s.name}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {s.desc}
                </p>

                <ul className="space-y-1.5 mb-5 border-t border-zinc-800/80 pt-3">
                  {s.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-[11px] text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-zinc-800">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors uppercase font-medium"
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
