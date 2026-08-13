import { useState, useEffect } from "react";

const words = [
  "Desarrollador Full Stack",
  "Estudiante UPC",
  "Java · Spring Boot",
  "C# · .NET",
  "React · Next.js",
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const currentWord = words[wordIndex];
        if (!isDeleting) {
          if (charIndex < currentWord.length) {
            setCharIndex((c) => c + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex((c) => c - 1);
          } else {
            setIsDeleting(false);
            setWordIndex((w) => (w + 1) % words.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center border-b border-border"
      style={{ paddingTop: "80px" }}
    >
      <div className="text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-border bg-accent text-white text-sm font-mono font-bold mb-8">
          <span className="relative flex h-2 w-2">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white animate-pulse" />
          </span>
          DISPONIBLE PARA PROYECTOS
        </div>

        {/* Main title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6 font-mono">
          HOLA, SOY{" "}
          <span className="text-accent">PAULO</span>
          <br />
          <span className="text-fg-muted">ESPINOZA</span>
        </h1>

        {/* Typing effect subtitle */}
        <div className="text-lg md:text-xl text-fg-muted font-mono max-w-2xl mx-auto mb-4 h-8">
          <span>{words[wordIndex].substring(0, charIndex)}</span>
          <span className="inline-block w-[2px] h-5 bg-accent ml-0.5 align-middle animate-pulse" />
        </div>

        <p className="text-base text-fg-muted font-mono max-w-xl mx-auto mb-10">
          Estudiante de Ingeniería de Sistemas de Información en UPC · 6to ciclo
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection("projects")}
            className="flat-btn px-8 py-3.5 text-sm"
          >
            VER PROYECTOS
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="flat-btn-outline px-8 py-3.5 text-sm"
          >
            CONTACTARME
          </button>
        </div>

        {/* Tech stack */}
        <div className="flex items-center justify-center gap-3 mt-12 text-xs font-mono text-fg-muted flex-wrap">
          {["Java", "Spring Boot", "C# .NET", "React", "Next.js"].map((tech) => (
            <span key={tech} className="px-3 py-1.5 border border-border bg-bg-alt font-bold uppercase">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
