import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote, MessageSquareQuote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  tags: string[];
}

const testimonials: Testimonial[] = [
  {
    name: "Trabajo en Equipo & Liderazgo Técnico",
    role: "Evaluación Académica y Colaboración",
    text: "Destaca por su capacidad para coordinar entregables técnicos, estructurar código modular y comunicar soluciones arquitectónicas de manera clara bajo plazos exigentes.",
    rating: 5,
    tags: ["Colaboración", "Spring Boot", "Git Flow"],
  },
  {
    name: "Innovación & Productividad con IA",
    role: "Desarrollo Acelerado",
    text: "Demuestra gran criterio al integrar modelos y agentes de IA en su flujo de trabajo diario, logrando prototipar y construir sistemas completos en tiempos récord sin sacrificar calidad de código.",
    rating: 5,
    tags: ["IA Integrada", "Full Stack", "Clean Architecture"],
  },
  {
    name: "Compromiso & Adaptabilidad",
    role: "Ingeniería de Sistemas",
    text: "Curva de aprendizaje sobresaliente para asimilar nuevos frameworks, resolver incidentes y adoptar herramientas de frontend y backend con solidez técnica.",
    rating: 5,
    tags: ["Resolución de Problemas", "React", ".NET"],
  },
];

export default function TestimonialsTrack() {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-yellow-500/20 text-xs font-mono text-yellow-400 mb-3"
          >
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>RECONOCIMIENTOS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Feedback &amp; Aptitudes Clave
          </motion.h2>
        </div>

        {/* Card Carousel */}
        <div className="relative glass-card rounded-3xl p-8 sm:p-12 border border-white/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          <Quote className="absolute -top-6 -left-6 w-32 h-32 text-white/5 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.35 }}
              className="relative z-10"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < t.rating ? "text-yellow-400 fill-yellow-400" : "text-zinc-700"
                    }`}
                  />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-base sm:text-xl text-zinc-200 font-medium leading-relaxed mb-8">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author & Tags */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
                <div>
                  <h4 className="text-base font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-zinc-400">{t.role}</p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {t.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-white/5 text-cyan-400 border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 pt-4">
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    idx === current ? "w-8 bg-cyan-400" : "w-2 bg-zinc-700 hover:bg-zinc-500"
                  }`}
                  aria-label={`Ir al testimonio ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={prev}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 transition-all cursor-pointer"
                aria-label="Testimonio anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 transition-all cursor-pointer"
                aria-label="Siguiente testimonio"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
