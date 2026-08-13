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

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6" style={{ paddingTop: "72px" }}>
      <div className="text-center max-w-2xl">
        <p className="text-sm text-zinc-400 mb-6">Paulo Espinoza</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          Hola, soy Paulo.
        </h1>
        <p className="text-zinc-500 mb-2 h-6 text-sm">
          <span>{words[wordIndex].substring(0, charIndex)}</span>
          <span className="inline-block w-px h-4 bg-zinc-400 ml-0.5 align-middle animate-pulse" />
        </p>
        <p className="text-xs text-zinc-400 mb-8">
          Estudiante de Ingeniería de Sistemas de Información en UPC · 6to ciclo
        </p>
        <div className="flex items-center justify-center gap-3">
          <button onClick={() => go("projects")} className="px-5 py-2 bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-700 transition-colors">
            Ver proyectos
          </button>
          <button onClick={() => go("contact")} className="px-5 py-2 border border-zinc-300 text-sm hover:bg-zinc-50 transition-colors">
            Contactarme
          </button>
        </div>
        <div className="flex items-center justify-center gap-3 mt-10 text-xs text-zinc-400 flex-wrap">
          {["Java", "Spring Boot", "C#", "React", "Next.js"].map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
