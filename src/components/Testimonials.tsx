import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  { name: "Trabajo en equipo", role: "Colaboración", text: "Destaca por su habilidad para trabajar en equipo, comunicar ideas técnicas de forma clara y adaptarse rápidamente a nuevas tecnologías.", rating: 5 },
  { name: "Innovación", role: "Desarrollo con IA", text: "Su enfoque en el desarrollo asistido con IA le permite entregar soluciones de alta calidad en menos tiempo, manteniendo un código robusto.", rating: 4 },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  return (
    <section className="section-pad">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs text-zinc-400 mb-4 uppercase tracking-wider">Reconocimientos</p>
        <h2 className="text-2xl font-bold mb-8">Mi trabajo</h2>
        <div className="mb-6">
          <p className="text-sm text-zinc-600 leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
          <div className="flex gap-0.5 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`w-3.5 h-3.5 ${i < t.rating ? "text-zinc-900 fill-zinc-900" : "text-zinc-200"}`} />
            ))}
          </div>
          <p className="text-sm font-medium">{t.name}</p>
          <p className="text-xs text-zinc-400">{t.role}</p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)} className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-zinc-900 transition-colors" aria-label="Anterior">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-1.5">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`h-1.5 rounded-full transition-all ${i === current ? "w-4 bg-zinc-900" : "w-1.5 bg-zinc-200 hover:bg-zinc-400"}`} aria-label={`Testimonio ${i + 1}`} />
            ))}
          </div>
          <button onClick={() => setCurrent((c) => (c + 1) % testimonials.length)} className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-zinc-900 transition-colors" aria-label="Siguiente">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
