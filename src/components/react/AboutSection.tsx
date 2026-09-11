import { Terminal, Cpu, Database, CheckCircle2 } from "lucide-react";

const capabilities = [
  {
    title: "Arquitectura de Sistemas & Backend",
    desc: "Principios SOLID, arquitecturas desacopladas (Clean/Hexagonal), inyección de dependencias y diseño de APIs RESTful con Spring Boot y .NET Core.",
    icon: Terminal,
    tags: ["SOLID", "Clean Architecture", "RESTful Standards", "Design Patterns"],
  },
  {
    title: "Gestión & Modelado de Datos",
    desc: "Diseño relacional riguroso, integridad referencial, optimización de consultas SQL, procedimientos almacenados y transacciones ACID en SQL Server y Oracle.",
    icon: Database,
    tags: ["SQL Server", "Oracle PL/SQL", "JPA / Hibernate", "Entity Framework"],
  },
  {
    title: "Desarrollo Asistido por Inteligencia Artificial",
    desc: "Aceleración sistemática del ciclo de vida de los sistemas de información utilizando herramientas de IA para generación de tests, refactorización y documentación técnica sin perder rigurosidad.",
    icon: Cpu,
    tags: ["DevOps AI", "Prompt Engineering", "Testing Automatizado", "Alta Velocidad"],
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-12 px-4 sm:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Flat Section Header */}
        <div className="mb-10 text-center sm:text-left border-b border-zinc-800 pb-5">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-1">
            PERFIL &amp; TRAYECTORIA
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight">
            Sobre Mi Formación &amp; Enfoque
          </h2>
        </div>

        {/* Executive Profile Grid */}
        <div className="grid lg:grid-cols-12 gap-6 mb-12">
          <div className="lg:col-span-5 bg-[#121215] border border-zinc-800 rounded-lg p-6 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold block">
              Formación Universitaria
            </span>
            <h3 className="text-lg font-bold text-white leading-tight">
              Ingeniería de Sistemas de Información
            </h3>
            <p className="text-xs font-mono text-zinc-400">
              Universidad Peruana de Ciencias Aplicadas (UPC)
            </p>

            <div className="pt-3 border-t border-zinc-800 space-y-2 text-xs text-zinc-300 font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Disponibilidad inmediata para contratación</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Modalidad Remota o Híbrida (Lima)</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#121215] border border-zinc-800 rounded-lg p-6 space-y-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
            <p>
              Como <strong className="text-white">Ingeniero de Sistemas de Información de la UPC</strong>, combino una sólida formación en sistemas computacionales con capacidad demostrada para diseñar, desarrollar y desplegar sistemas de información listos para producción.
            </p>
            <p>
              Mi enfoque técnico se centra en el <strong className="text-cyan-300">desarrollo backend empresarial</strong> (Java con Spring Boot y C# con .NET), garantizando servicios seguros, escalables y con alta disponibilidad, complementado con experiencia en el desarrollo de interfaces modernas en <strong className="text-emerald-300">React, TypeScript y Astro</strong>.
            </p>
            <p>
              Busco incorporarme a equipos de tecnología de alto rendimiento donde pueda aportar valor inmediato, resolver problemas complejos de negocio y acelerar el cumplimiento de objetivos estratégicos.
            </p>
          </div>
        </div>

        {/* Pillars Grid (Flat) */}
        <div className="grid md:grid-cols-3 gap-5">
          {capabilities.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="bg-[#121215] border border-zinc-800 rounded-lg p-5 flex flex-col justify-between hover:border-zinc-700 transition-colors"
              >
                <div>
                  <div className="w-9 h-9 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-400 mb-4">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">{c.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">{c.desc}</p>
                </div>

                <div className="flex flex-wrap gap-1 pt-3 border-t border-zinc-800">
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-zinc-900 border border-zinc-800 text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
