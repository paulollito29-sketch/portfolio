import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Trabajo en Equipo",
    role: "Colaboración",
    text: "Destaca por su habilidad para trabajar en equipo, comunicar ideas técnicas de forma clara y adaptarse rápidamente a nuevas tecnologías y frameworks.",
    rating: 5,
  },
  {
    name: "Innovación",
    role: "Desarrollo con IA",
    text: "Su enfoque en el desarrollo asistido con IA le permite entregar soluciones de alta calidad en menos tiempo, manteniendo un código robusto y bien estructurado.",
    rating: 4,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-play every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  return (
    <section className="section-padding relative gradient-bg overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-500/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-4xl relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent-400 mb-3">
            Reconocimientos
          </span>
          <h2 className="section-title">
            Lo que dicen de{" "}
            <span className="text-gradient">mi trabajo</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-accent-500 to-teal-400" />
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel */}
          <div className="min-h-[280px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="glass-card rounded-2xl p-8 md:p-10 text-center mx-4 md:mx-12 w-full"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                >
                  <Quote className="w-10 h-10 text-accent-400/30 mx-auto mb-6" />
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-300 text-lg leading-relaxed mb-6 italic"
                >
                  &ldquo;{testimonials[current].text}&rdquo;
                </motion.p>

                {/* Animated Stars */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex justify-center gap-1 mb-4"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                    >
                      <Star
                        className={`w-4 h-4 ${
                          i < testimonials[current].rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-600"
                        }`}
                      />
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="font-semibold text-white">
                    {testimonials[current].name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonials[current].role}
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center w-10 h-10 rounded-full glass text-gray-400 hover:text-white hover:border-accent-500/30 transition-all"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? "bg-accent-400" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  animate={{
                    width: i === current ? 24 : 8,
                    height: 8,
                  }}
                  aria-label={`Testimonio ${i + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center w-10 h-10 rounded-full glass text-gray-400 hover:text-white hover:border-accent-500/30 transition-all"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Auto-play indicator */}
          <div className="flex justify-center mt-4">
            <motion.div
              className="h-0.5 bg-accent-500/30 rounded-full"
              initial={{ width: "100%" }}
              animate={!isPaused ? { width: "0%" } : { width: "100%" }}
              transition={{
                duration: 5,
                ease: "linear",
                repeat: isPaused ? 0 : Infinity,
              }}
              style={{ maxWidth: 200 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
