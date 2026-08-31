import { motion } from "framer-motion";
import { GraduationCap, Award, ShieldCheck, CheckCircle2, Terminal, Cpu, Database, Briefcase } from "lucide-react";

const stats = [
  { value: "UPC", label: "Alma Máter & Formación", detail: "Ing. Sistemas de Información", color: "from-sky-500/20 to-blue-500/10 text-sky-400" },
  { value: "10+", label: "Certificaciones", detail: "Meta, Oracle Academy, UMich", color: "from-emerald-500/20 to-teal-500/10 text-emerald-400" },
  { value: "15+", label: "Sistemas & Proyectos", detail: "Full Stack, APIs y Microservicios", color: "from-blue-500/20 to-indigo-500/10 text-blue-400" },
  { value: "100%", label: "Orientado a Resultados", detail: "Clean Code & Patrones de Diseño", color: "from-purple-500/20 to-pink-500/10 text-purple-400" },
];

const capabilities = [
  {
    title: "Arquitectura de Sistemas & Backend",
    desc: "Dominio de principios SOLID, arquitecturas desacopladas (Clean/Hexagonal), inyección de dependencias y diseño de APIs RESTful con Spring Boot y .NET Core.",
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
    <section id="about" className="py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 text-center sm:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-sky-500/30 text-xs font-mono text-sky-400 mb-3"
          >
            <GraduationCap className="w-4 h-4" />
            <span>PERFIL PROFESIONAL &amp; FORMACIÓN ACADÉMICA</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Perfil del Candidato &amp; Valor para la Empresa
          </motion.h2>
        </div>

        {/* Top Summary & Stats */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Executive Overview */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col justify-between"
          >
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Como <strong className="text-white">Ingeniero de Sistemas de Información de la UPC</strong>, combino una sólida formación en sistemas computacionales con capacidad demostrada para diseñar, desarrollar y desplegar sistemas de información listos para producción.
              </p>
              <p>
                Mi enfoque técnico se centra en el <strong className="text-sky-300">desarrollo backend empresarial</strong> (Java con Spring Boot y C# con .NET), garantizando servicios seguros, escalables y con alta disponibilidad, complementado con experiencia en el desarrollo de interfaces modernas en <strong className="text-emerald-300">React 19, TypeScript y Astro</strong>.
              </p>
              <p>
                Busco incorporarme a equipos de tecnología de alto rendimiento donde pueda aportar valor inmediato, resolver problemas complejos de negocio y acelerar el cumplimiento de objetivos estratégicos.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 grid sm:grid-cols-2 gap-3 text-xs text-slate-300 font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Disponibilidad inmediata para contratación</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Modalidad Remota o Híbrida (Lima)</span>
              </div>
            </div>
          </motion.div>

          {/* Key Metrics Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -3 }}
                className={`p-5 rounded-2xl glass-card border border-white/10 bg-gradient-to-b ${stat.color} flex flex-col justify-between`}
              >
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-1">
                  {stat.value}
                </div>
                <div>
                  <div className="text-xs font-bold text-white">{stat.label}</div>
                  <div className="text-[11px] text-slate-300 mt-0.5">{stat.detail}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enterprise Pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {capabilities.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-sky-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-4 group-hover:scale-110 group-hover:bg-sky-500/20 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 text-slate-300 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
