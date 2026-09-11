import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Server, Database, Layers } from "lucide-react";

const slides = [
  {
    title: "Ingeniería de Sistemas",
    subtitle: "Arquitectura Backend & Soluciones Empresariales Escalables",
    badge: "UPC · Sistemas de Información",
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
    <section id="home" className="relative min-h-[75vh] flex flex-col justify-between pt-20 pb-6 px-4 sm:px-8 z-10">
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center py-8">
        {/* Main Flat Hero Slide Content */}
        <div className="relative min-h-[280px] flex flex-col justify-center space-y-5">
          {/* Flat Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-cyan-400 uppercase tracking-widest w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>{slides[currentSlide].badge}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white uppercase leading-tight">
            {slides[currentSlide].title}
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg font-normal text-zinc-300 max-w-3xl leading-relaxed">
            {slides[currentSlide].subtitle}
          </p>

          {/* Tag Badges (Flat) */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {slides[currentSlide].tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 text-xs font-mono rounded bg-zinc-900 border border-zinc-800 text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Slide Navigation Dots & Controls */}
          <div className="flex items-center gap-4 pt-4">
            <div className="flex gap-1.5">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1 transition-all cursor-pointer ${
                    idx === currentSlide ? "w-8 bg-cyan-400" : "w-2.5 bg-zinc-700 hover:bg-zinc-500"
                  }`}
                  aria-label={`Ir al slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-1 ml-4">
              <button
                onClick={prevSlide}
                className="p-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors cursor-pointer"
                aria-label="Slide anterior"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors cursor-pointer"
                aria-label="Slide siguiente"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Highlights Banner Ticker (Flat) */}
      <div className="max-w-7xl mx-auto w-full mt-auto">
        <div className="grid lg:grid-cols-12 gap-3 p-3.5 rounded bg-[#121215] border border-zinc-800 items-center">
          {/* Ticker Column */}
          <div className="lg:col-span-6 flex items-center gap-3 pr-4 lg:border-r border-zinc-800">
            <div className="px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-200 font-mono font-bold text-[11px] tracking-wider uppercase shrink-0">
              DESTACADOS
            </div>
            <div className="flex-1 overflow-hidden h-6 flex items-center">
              <a
                href={highlights[currentHighlight].href}
                className="text-xs font-mono text-zinc-300 hover:text-cyan-400 transition-colors truncate"
              >
                <span className="text-cyan-400 font-semibold mr-1.5">[{highlights[currentHighlight].tag}]</span>
                <span>{highlights[currentHighlight].title}</span>
              </a>
            </div>
          </div>

          {/* Action Links */}
          <div className="lg:col-span-6 flex items-center justify-between gap-2 overflow-x-auto text-xs font-mono">
            <a
              href="/portfolio"
              className="px-3 py-1 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 transition-colors truncate"
            >
              Portafolio →
            </a>
            <a
              href="/services"
              className="px-3 py-1 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 transition-colors truncate"
            >
              Servicios →
            </a>
            <a
              href="/certificates"
              className="px-3 py-1 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 transition-colors truncate"
            >
              Certificaciones →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
