import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  tags: string[];
}

const testimonials: Testimonial[] = [
  {
    name: "Calidad Técnica & Arquitectura",
    role: "Evaluación de Desempeño",
    text: "Demuestra gran rigor en el diseño estructurado de bases de datos relacionales, normalización y aplicación de principios de Clean Architecture en microservicios backend.",
    tags: ["Clean Code", "Microservicios", "SQL Server", "Spring Boot"],
  },
  {
    name: "Innovación & Productividad con IA",
    role: "Desarrollo Acelerado",
    text: "Criterio sobresaliente al integrar modelos y agentes de IA en su flujo de trabajo diario, logrando prototipar y construir sistemas completos en tiempos récord sin sacrificar calidad.",
    tags: ["IA Integrada", "Full Stack", "Clean Architecture"],
  },
  {
    name: "Compromiso & Adaptabilidad",
    role: "Ingeniería de Sistemas",
    text: "Curva de aprendizaje acelerada para asimilar nuevos frameworks, resolver incidentes y adoptar herramientas de frontend y backend con solidez técnica.",
    tags: ["Resolución de Problemas", "React", ".NET"],
  },
];

export default function TestimonialsTrack() {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-12 px-4 sm:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Flat Header */}
        <div className="mb-10 text-center sm:text-left border-b border-zinc-800 pb-5">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-1">
            APTITUDES PROFESIONALES
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight">
            Feedback &amp; Apreciación Técnica
          </h2>
        </div>

        {/* Card (Flat) */}
        <div className="bg-[#121215] border border-zinc-800 rounded-lg p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">{t.name}</h3>
              <p className="text-xs font-mono text-cyan-400">{t.role}</p>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={prev}
                className="p-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-zinc-500 px-2">
                {current + 1} / {testimonials.length}
              </span>
              <button
                onClick={next}
                className="p-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic border-l-2 border-zinc-700 pl-4">
            &ldquo;{t.text}&rdquo;
          </p>

          <div className="flex flex-wrap gap-1 pt-3 border-t border-zinc-800">
            {t.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[10px] font-mono rounded bg-zinc-900 border border-zinc-800 text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
