import { motion } from "framer-motion";
import { BookOpen, Calendar, Clock, ArrowRight } from "lucide-react";

interface Article {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  slug?: string;
}

const articles: Article[] = [
  {
    title: "Arquitectura Hexagonal y Microservicios con Spring Boot",
    excerpt: "Guía práctica para desacoplar reglas de negocio, aislar adaptadores y construir servicios escalables.",
    date: "15 Jun 2026",
    readTime: "8 min de lectura",
    tags: ["Spring Boot", "Arquitectura", "Java"],
  },
  {
    title: "Patrones de Diseño y Buenas Prácticas en C# y .NET",
    excerpt: "Estrategias para escribir código limpio, mantenible y testeable usando inyección de dependencias y Entity Framework.",
    date: "28 May 2026",
    readTime: "6 min de lectura",
    tags: ["C#", ".NET", "Clean Code"],
  },
  {
    title: "Flujo de Desarrollo Acelerado con Inteligencia Artificial",
    excerpt: "Cómo integrar agentes de IA y asistentes de código para multiplicar la productividad sin comprometer la solidez técnica.",
    date: "10 May 2026",
    readTime: "5 min de lectura",
    tags: ["IA", "Productividad", "DevOps"],
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center sm:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-indigo-500/20 text-xs font-mono text-indigo-400 mb-3"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>PUBLICACIONES &amp; APUNTES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Artículos &amp; Pensamiento Técnico
          </motion.h2>
        </div>

        {/* Articles List */}
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 rounded-2xl border border-white/10 hover:border-indigo-500/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3 text-[11px] font-mono text-zinc-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-indigo-400" /> {a.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-cyan-400" /> {a.readTime}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors mb-2.5 line-clamp-2">
                  {a.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {a.excerpt}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {a.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 text-zinc-300 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors">
                  <span>Próximamente lectura completa</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
