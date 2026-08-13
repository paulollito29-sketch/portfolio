import { Calendar, Clock, ArrowRight, FileText } from "lucide-react";

const articles = [
  { title: "Cómo integrar Spring Boot con React", excerpt: "Guía paso a paso para construir una aplicación full stack.", date: "15 Jun 2026", readTime: "8 min", tags: ["Spring Boot", "React"] },
  { title: "Buenas prácticas en C# y .NET", excerpt: "Consejos y patrones de diseño esenciales para código limpio.", date: "28 May 2026", readTime: "6 min", tags: ["C#", ".NET"] },
  { title: "Desarrollo asistido con IA", excerpt: "Mi experiencia usando herramientas de IA en el desarrollo diario.", date: "10 May 2026", readTime: "5 min", tags: ["IA", "Productividad"] },
];

export default function Blog() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs text-zinc-400 mb-4 uppercase tracking-wider">Blog</p>
        <h2 className="text-2xl font-bold mb-8">Artículos</h2>
        <div className="space-y-6">
          {articles.map((a) => (
            <div key={a.title} className="border-b border-zinc-100 pb-6">
              <div className="flex items-center gap-3 text-xs text-zinc-400 mb-2">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {a.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {a.readTime}</span>
              </div>
              <h3 className="font-semibold text-sm mb-1">{a.title}</h3>
              <p className="text-sm text-zinc-500 mb-3">{a.excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {a.tags.map((t) => <span key={t} className="text-xs text-zinc-400 bg-zinc-50 px-2 py-0.5">{t}</span>)}
              </div>
              <div className="flex items-center gap-1 text-xs text-zinc-400">
                Leer artículo <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
