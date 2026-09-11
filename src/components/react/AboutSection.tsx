import { Terminal, Cpu, Database, CheckCircle2, FileText } from "lucide-react";

const capabilities = [
  {
    title: "Metodología SDD & Especificación de Software",
    desc: "Diseño riguroso mediante Software Design Documents (SDD), definición de contratos OpenAPI/Swagger, diagramas de arquitectura y modelado de sistemas antes de la fase de código.",
    icon: FileText,
    tags: ["Metodología SDD", "Software Design Docs", "OpenAPI", "Clean Architecture"],
  },
  {
    title: "Desarrollo Asistido por Inteligencia Artificial",
    desc: "Aceleración sistemática del ciclo de vida del software mediante flujos con IA (LLMs, Copilot, Cursor), scaffolding automatizado, generación de tests y refactorización continua.",
    icon: Cpu,
    tags: ["DevOps AI", "Prompt Engineering", "Testing con IA", "Alta Velocidad"],
  },
  {
    title: "Backend Core & Gestión Relacional",
    desc: "Microservicios desacoplados en Java (Spring Boot) con persistencia transaccional ACID en PostgreSQL y SQL Server, principios SOLID y seguridad perimetral JWT.",
    icon: Database,
    tags: ["Spring Boot", "PostgreSQL", "SQL Server", "Seguridad JWT"],
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-12 px-4 sm:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Friendly Section Header */}
        <div className="mb-10 text-center sm:text-left border-b border-slate-800/80 pb-5">
          <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold block mb-1">
            PERFIL &amp; TRAYECTORIA
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight">
            Sobre Mi Formación &amp; Enfoque
          </h2>
        </div>

        {/* Executive Profile Grid */}
        <div className="grid lg:grid-cols-12 gap-6 mb-12">
          <div className="lg:col-span-5 bg-[#131d33] border border-slate-800 rounded-xl p-6 space-y-4 shadow-sm">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold block">
              Formación Universitaria
            </span>
            <h3 className="text-lg font-bold text-white leading-tight">
              Ingeniería de Sistemas de Información
            </h3>
            <p className="text-xs font-mono text-slate-400">
              Universidad Peruana de Ciencias Aplicadas (UPC)
            </p>

            <div className="pt-3 border-t border-slate-800 space-y-2 text-xs text-slate-300 font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Disponibilidad inmediata para contratación</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Modalidad Remota o Híbrida (Lima)</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#131d33] border border-slate-800 rounded-xl p-6 space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed shadow-sm">
            <p>
              Como <strong className="text-white">Ingeniero de Sistemas de Información de la UPC</strong>, combino una sólida formación en sistemas computacionales con capacidad demostrada para diseñar, desarrollar y desplegar sistemas de información listos para producción.
            </p>
            <p>
              Mi metodología de trabajo integra la <strong className="text-sky-300">metodología SDD (Spec-Driven Development)</strong> y el <strong className="text-indigo-300">desarrollo asistido por Inteligencia Artificial</strong>, garantizando microservicios seguros y escalables en <strong className="text-white">Java (Spring Boot)</strong> y bases de datos relacionales, complementado con interfaces modernas en <strong className="text-emerald-300">Angular, React, Next.js y Astro</strong>.
            </p>
            <p>
              Busco incorporarme a equipos de tecnología de alto rendimiento donde pueda aportar valor inmediato, resolver problemas complejos de negocio y acelerar el cumplimiento de objetivos estratégicos.
            </p>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {capabilities.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="bg-[#131d33] border border-slate-800 rounded-xl p-5 flex flex-col justify-between hover:border-sky-500/50 hover:bg-[#1a2744] transition-all shadow-sm"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-center text-sky-400 mb-4">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">{c.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{c.desc}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-900/80 border border-slate-800 text-slate-300"
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
