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
    <section className="section-padding relative border-b-[3px] border-border">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-mono font-bold tracking-[0.15em] uppercase text-accent mb-3">
            // BLOG
          </span>
          <h2 className="section-title font-mono">ARTÍCULOS</h2>
          <div className="mx-auto mt-4 h-[4px] w-16 bg-accent" />
          <p className="font-mono text-fg-muted mt-4 max-w-lg mx-auto">
            Conocimiento y experiencia en desarrollo de software.
          </p>
        </div>

        {/* Articles grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <article
              key={article.title}
              className="brutalist-card overflow-hidden cursor-pointer"
            >
              {/* Image placeholder */}
              <div className="h-44 bg-bg-alt border-b-[3px] border-border flex items-center justify-center">
                <FileText className="w-12 h-12 text-fg-muted/30" />
              </div>

              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-3 text-xs font-mono text-fg-muted mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="font-mono font-bold text-fg mb-2 uppercase text-sm leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm font-mono text-fg-muted leading-relaxed mb-4">
                  {article.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono font-bold px-2 py-0.5 border-2 border-border bg-bg-alt"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1 text-xs font-mono font-bold text-accent uppercase">
                  LEER ARTÍCULO
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
