import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const slides = [
  {
    title: "Ingeniería de Sistemas",
    subtitle: "Arquitectura Backend & Soluciones Empresariales Escalables",
    badge: "Oficial · UPC",
    tags: ["Arquitectura en Capas", "Microservicios REST", "Clean Architecture", "IA Integrada"],
  },
  {
    title: "Backend & Microservicios",
    subtitle: "Java (Spring Boot) · C# (.NET Core) · Seguridad JWT · Docker",
    badge: "Enterprise Core",
    tags: ["Spring Security", "JPA / Hibernate", "OpenAPI / Swagger", "Docker Compose"],
  },
  {
    title: "Bases de Datos & Persistencia",
    subtitle: "SQL Server (T-SQL) · Oracle PL/SQL · Transacciones ACID · Rendimiento",
    badge: "Data Systems",
    tags: ["Modelado Relacional", "Triggers & Procedures", "Integridad Referencial", "Optimización"],
  },
];

const highlights = [
  {
    tag: "Sistemas Backend",
    title: "Arquitectura de Microservicios & Seguridad JWT en Spring Boot",
    href: "/portfolio",
  },
  {
    tag: "Acreditación Oficial",
    title: "Certificaciones emitidas por Meta, Oracle Academy y Univ. of Michigan",
    href: "/certificates",
  },
  {
    tag: "Sistemas & IA",
    title: "Desarrollo acelerado mediante flujos asistidos con Inteligencia Artificial",
    href: "/services",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentHighlight, setCurrentHighlight] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Auto-advance highlight ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHighlight((prev) => (prev + 1) % highlights.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative min-h-[85vh] flex flex-col justify-between pt-24 pb-8 px-4 sm:px-8 z-10">
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center py-10">
        {/* Main Cinematic Hero Slide Content */}
        <div className="relative min-h-[320px] sm:min-h-[360px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="space-y-6"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                <span>{slides[currentSlide].badge}</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white uppercase leading-[1.05]">
                {slides[currentSlide].title}
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-xl lg:text-2xl font-light text-slate-300 max-w-3xl leading-relaxed">
                {slides[currentSlide].subtitle}
              </p>

              {/* Tag Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {slides[currentSlide].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono rounded bg-white/5 border border-white/10 text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide Navigation Dots & Arrows */}
          <div className="flex items-center gap-4 mt-10">
            <div className="flex gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 transition-all cursor-pointer ${
                    idx === currentSlide ? "w-10 bg-cyan-400" : "w-3 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Ir al slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-1.5 ml-4">
              <button
                onClick={prevSlide}
                className="p-2 rounded border border-white/10 text-zinc-400 hover:text-white hover:border-cyan-400/50 transition-all cursor-pointer"
                aria-label="Slide anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded border border-white/10 text-zinc-400 hover:text-white hover:border-cyan-400/50 transition-all cursor-pointer"
                aria-label="Slide siguiente"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Highlights Banner Ticker (Elio Navarrete style) */}
      <div className="max-w-7xl mx-auto w-full mt-auto">
        <div className="grid lg:grid-cols-12 gap-4 p-4 rounded-xl glass-card border border-white/10 items-center">
          {/* Ticker Column */}
          <div className="lg:col-span-6 flex items-center gap-3 pr-4 lg:border-r border-white/10">
            <div className="px-2.5 py-1 rounded bg-cyan-500 text-[#05070c] font-display font-bold text-xs tracking-wider uppercase shrink-0">
              DESTACADOS
            </div>
            <div className="flex-1 overflow-hidden h-7 flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentHighlight}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="flex items-center justify-between w-full"
                >
                  <a
                    href={highlights[currentHighlight].href}
                    className="text-xs sm:text-sm font-mono text-zinc-300 hover:text-cyan-400 transition-colors truncate"
                  >
                    <span className="text-cyan-400 font-semibold mr-2">[{highlights[currentHighlight].tag}]</span>
                    <span>{highlights[currentHighlight].title}</span>
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Quick Action Pillars */}
          <div className="lg:col-span-6 flex items-center justify-between gap-2 overflow-x-auto text-xs font-mono">
            <a
              href="/portfolio"
              className="px-3.5 py-1.5 rounded bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-300 border border-white/10 transition-all text-zinc-300 truncate"
            >
              💼 Ver Portafolio
            </a>
            <a
              href="/services"
              className="px-3.5 py-1.5 rounded bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-300 border border-white/10 transition-all text-zinc-300 truncate"
            >
              ⚙️ Ver Servicios
            </a>
            <a
              href="/certificates"
              className="px-3.5 py-1.5 rounded bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-300 border border-white/10 transition-all text-zinc-300 truncate"
            >
              🎓 Certificaciones
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-8 flex justify-center">
          <div className="scroll-indicator">
            <span>SCROLL</span>
            <div className="scroll-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
