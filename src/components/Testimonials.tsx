import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "TRABAJO EN EQUIPO",
    role: "Colaboración",
    text: "Destaca por su habilidad para trabajar en equipo, comunicar ideas técnicas de forma clara y adaptarse rápidamente a nuevas tecnologías y frameworks.",
    rating: 5,
  },
  {
    name: "INNOVACIÓN",
    role: "Desarrollo con IA",
    text: "Su enfoque en el desarrollo asistido con IA le permite entregar soluciones de alta calidad en menos tiempo, manteniendo un código robusto y bien estructurado.",
    rating: 4,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="section-padding relative border-b-[3px] border-border">
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-mono font-bold tracking-[0.15em] uppercase text-accent mb-3">
            // RECONOCIMIENTOS
          </span>
          <h2 className="section-title font-mono">MI TRABAJO</h2>
          <div className="mx-auto mt-4 h-[4px] w-16 bg-accent" />
        </div>

        <div className="border-[3px] border-border bg-card p-8 md:p-10">
          <div className="text-4xl font-black text-accent mb-6 font-mono">&ldquo;</div>
          <p className="font-mono text-fg text-lg leading-relaxed mb-6">
            {t.text}
          </p>

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < t.rating
                    ? "text-accent fill-accent"
                    : "text-border"
                }`}
              />
            ))}
          </div>

          <div className="font-mono font-bold text-fg uppercase">{t.name}</div>
          <div className="text-sm font-mono text-fg-muted">{t.role}</div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={prev}
            className="w-10 h-10 border-[3px] border-border bg-bg-alt font-bold flex items-center justify-center hover:bg-fg hover:text-bg transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 border-2 border-border transition-all ${
                  i === current ? "w-6 bg-accent" : "w-2 bg-bg-alt hover:bg-fg"
                }`}
                aria-label={`Testimonio ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 border-[3px] border-border bg-bg-alt font-bold flex items-center justify-center hover:bg-fg hover:text-bg transition-colors"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
