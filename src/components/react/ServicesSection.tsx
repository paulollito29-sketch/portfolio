import { motion } from "framer-motion";
import { Server, Database, Layers, Sparkles, ShieldCheck, Terminal, ArrowRight, CheckCircle2, Cpu } from "lucide-react";

interface Service {
  tag: string;
  name: string;
  desc: string;
  icon: any;
  overlayHook: string;
  overlayPoints: string[];
}

const services: Service[] = [
  {
    tag: "Consultoría & Arquitectura",
    name: "Auditoría & Diseño de Sistemas",
    desc: "Evaluación integral de arquitectura de software, desacoplamiento en capas, estándares SOLID y roadmap de modernización.",
    icon: Layers,
    overlayHook: "\"Sistemas escalables sin deuda técnica acumulada.\"",
    overlayPoints: [
      "Diseño basado en Clean Architecture y principios SOLID",
      "Diagnóstico de cuellos de botella y modularidad",
      "Definición de estándares de código y buenas prácticas",
      "Estrategia de escalabilidad para crecimiento empresarial",
    ],
  },
  {
    tag: "Backend & Microservicios",
    name: "Desarrollo de Servicios Empresariales",
    desc: "Construcción de APIs RESTful de alto rendimiento en Java (Spring Boot) y C# (.NET Core) con seguridad perimetral JWT.",
    icon: Server,
    overlayHook: "\"Servicios robustos, documentados y listos para producción.\"",
    overlayPoints: [
      "Microservicios desacoplados con Spring Boot & .NET 8",
      "Autenticación segura basada en tokens JWT y roles",
      "Documentación interactiva mediante Swagger / OpenAPI 3.0",
      "Contenedorización con Docker y orquestación con Docker Compose",
    ],
  },
  {
    tag: "Bases de Datos & Rendimiento",
    name: "Modelado Relacional & Persistencia",
    desc: "Diseño de esquemas relacionales, transacciones ACID, optimización de consultas complejas y procedimientos almacenados.",
    icon: Database,
    overlayHook: "\"Integridad absoluta y consultas de alta velocidad.\"",
    overlayPoints: [
      "Modelado relacional en Microsoft SQL Server (T-SQL) y Oracle PL/SQL",
      "Optimización de índices y planes de ejecución",
      "Mapeo eficiente con ORMs (JPA/Hibernate y Entity Framework Core)",
      "Políticas de respaldo, auditoría e integridad referencial",
    ],
  },
  {
    tag: "Full Stack & Aceleración IA",
    name: "Sistemas Web Modernos con IA",
    desc: "Interfaces de alta reactividad en React 19, TypeScript y Astro con aceleración de desarrollo asistido por Inteligencia Artificial.",
    icon: Sparkles,
    overlayHook: "\"Experiencias visuales fluidas y entrega acelerada.\"",
    overlayPoints: [
      "Aplicaciones web con Astro y React 19 para máxima velocidad",
      "Tipado estricto con TypeScript para reducir errores en runtime",
      "Flujos de trabajo acelerados con agentes y modelos de IA",
      "Diseño responsivo corporativo con Tailwind CSS y microanimaciones",
    ],
  },
];

export default function ServicesSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="max-w-7xl mx-auto px-4 sm:px-8 py-20 relative z-10">
      {/* Luxury Divider */}
      <div className="luxury-divider">
        <div className="luxury-divider-diamond" />
      </div>

      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-widest text-white uppercase">
          Servicios Especializados
        </h2>
        <div className="title-underline" />
        <p className="text-xs sm:text-sm font-mono text-zinc-400 uppercase tracking-widest">
          Ingeniería de Sistemas de Información · Soluciones de Alto Impacto
        </p>
      </div>

      {/* Services Grid with Interactive Overlays */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, index) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="service-card group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Icon & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-cyan-400 uppercase tracking-wider">
                    {s.tag}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {s.name}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-cyan-400">
                <span>Ver detalles</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Hover Overlay Panel (Elio Navarrete style) */}
              <div className="service-card-overlay">
                <p className="text-xs font-serif-lux italic text-cyan-300 mb-4 text-center leading-snug">
                  {s.overlayHook}
                </p>
                <ul className="space-y-2 mb-4">
                  {s.overlayPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[11px] text-zinc-300 leading-tight">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={scrollToContact}
                  className="mt-auto w-full py-2 rounded bg-cyan-500 hover:bg-cyan-400 text-[#05070c] font-display font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Consultar Servicio
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* CTA Button at bottom */}
      <div className="mt-14 text-center">
        <button
          onClick={scrollToContact}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-[#05070c] font-display font-bold text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(0,229,255,0.4)] hover:shadow-[0_0_35px_rgba(0,229,255,0.6)] transition-all cursor-pointer"
        >
          <span>Contactar para Servicios de Sistemas</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
