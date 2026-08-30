import { motion } from "framer-motion";
import { GraduationCap, Brain, Layers, ShieldCheck, Terminal, Award } from "lucide-react";

const stats = [
  { value: "6to", label: "Ciclo en UPC", detail: "Ing. Sistemas de Información", color: "from-cyan-500/20 to-blue-500/10 text-cyan-400" },
  { value: "15+", label: "Proyectos Creados", detail: "Full Stack, APIs y Juegos", color: "from-blue-500/20 to-purple-500/10 text-blue-400" },
  { value: "10+", label: "Tecnologías Clave", detail: "Java, C#, React, Docker, SQL", color: "from-purple-500/20 to-pink-500/10 text-purple-400" },
  { value: "10", label: "Certificaciones", detail: "Meta, Oracle, Univ. Michigan", color: "from-emerald-500/20 to-teal-500/10 text-emerald-400" },
];

const pillars = [
  {
    icon: Layers,
    title: "Arquitectura Robusta & Backend",
    desc: "Diseño de APIs RESTful, microservicios y persistencia con Spring Boot, .NET y SQL Server siguiendo buenas prácticas (SOLID, Clean Architecture).",
  },
  {
    icon: Terminal,
    title: "Frontend Reactivo y Moderno",
    desc: "Interfaces de usuario de alto impacto visual y rendimiento con React, Next.js, Astro, TypeScript y Tailwind CSS.",
  },
  {
    icon: Brain,
    title: "Desarrollo Asistido con IA",
    desc: "Integración estratégica de agentes y herramientas de IA para optimizar la velocidad de entrega, testing y calidad de código.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 text-center sm:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>TRAYECTORIA &amp; PERFIL</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Sobre mí &amp; Enfoque Técnico
          </motion.h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Main Description */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-5 text-zinc-300 text-sm sm:text-base leading-relaxed glass-card p-6 sm:p-8 rounded-2xl border border-white/10"
          >
            <p>
              Soy estudiante del <strong className="text-white">6to ciclo de Ingeniería de Sistemas de Información en la Universidad Peruana de Ciencias Aplicadas (UPC)</strong>, apasionado por resolver problemas reales a través de software escalable y bien diseñado.
            </p>
            <p>
              Mi experiencia abarca tanto el desarrollo backend con <strong className="text-cyan-400">Java (Spring Boot)</strong> y <strong className="text-purple-400">C# (.NET)</strong>, como la construcción de interfaces modernas y rápidas en el ecosistema JavaScript/TypeScript.
            </p>
            <p>
              Adopto un enfoque proactivo integrando flujos de trabajo con inteligencia artificial, lo que me permite elevar la velocidad de iteración, asegurar estándares de calidad y mantener una constante curva de aprendizaje.
            </p>

            <div className="pt-3 border-t border-white/5 flex flex-wrap gap-4 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5 text-zinc-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Código Limpio
              </span>
              <span className="flex items-center gap-1.5 text-zinc-300">
                <Award className="w-4 h-4 text-cyan-400" /> Aprendizaje Continuo
              </span>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`p-5 rounded-2xl glass-card border border-white/10 bg-gradient-to-b ${stat.color} flex flex-col justify-between`}
              >
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-1">
                  {stat.value}
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">{stat.label}</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">{stat.detail}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pillars / Core Focus */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                <pillar.icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{pillar.title}</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
