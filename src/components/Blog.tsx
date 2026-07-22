import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, FileText } from "lucide-react";

const articles = [
  {
    title: "Cómo integrar Spring Boot con React para aplicaciones web modernas",
    excerpt:
      "Guía paso a paso para construir una aplicación full stack usando Spring Boot en el backend y React en el frontend.",
    date: "15 Jun 2026",
    readTime: "8 min",
    tags: ["Spring Boot", "React", "Full Stack"],
  },
  {
    title: "Buenas prácticas en desarrollo con C# y .NET Framework",
    excerpt:
      "Consejos y patrones de diseño esenciales para escribir código limpio y mantenible en aplicaciones .NET.",
    date: "28 May 2026",
    readTime: "6 min",
    tags: ["C#", ".NET", "Clean Code"],
  },
  {
    title: "Desarrollo asistido con IA: cómo potenciar tu productividad",
    excerpt:
      "Mi experiencia usando herramientas de IA en el flujo de desarrollo diario y cómo ha transformado mi forma de programar.",
    date: "10 May 2026",
    readTime: "5 min",
    tags: ["IA", "Productividad", "Herramientas"],
  },
];

export default function Blog() {
  return (
    <section className="section-padding relative">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent-400 mb-3">
            Blog
          </span>
          <h2 className="section-title">
            Artículos y{" "}
            <span className="text-gradient">tutoriales</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-accent-500 to-teal-400" />
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            Comparto mi conocimiento y experiencia en desarrollo de software, 
            tecnologías y mejores prácticas.
          </p>
        </motion.div>

        {/* Articles grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* Image placeholder */}
              <div className="h-44 bg-gradient-to-br from-accent-500/10 via-dark-700 to-teal-500/10 flex items-center justify-center relative overflow-hidden">
                <FileText className="w-12 h-12 text-accent-400/30 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 shimmer opacity-50" />
              </div>

              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="font-semibold text-white mb-2 group-hover:text-accent-400 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed line-clamp-3 mb-4">
                  {article.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1 rounded-full border border-dark-500 bg-dark-600/50 text-gray-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1 text-xs text-accent-400 font-medium group-hover:gap-2 transition-all">
                  Leer artículo
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
