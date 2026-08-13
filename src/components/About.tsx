import { GraduationCap, Brain, Terminal } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "FORMACIÓN",
    desc: "6to ciclo de Ingeniería de Sistemas de Información en la Universidad Peruana de Ciencias Aplicadas (UPC).",
  },
  {
    icon: Terminal,
    title: "FULL STACK",
    desc: "Experiencia tanto en frontend como backend, construyendo aplicaciones completas y escalables.",
  },
  {
    icon: Brain,
    title: "RESOLUCIÓN",
    desc: "Enfoque analítico para resolver desafíos complejos con código limpio y eficiente.",
  },
];

const stats = [
  { value: "6to", label: "Ciclo" },
  { value: "10+", label: "Tecnologías" },
  { value: "15+", label: "Proyectos" },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative border-b border-border">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-mono font-bold tracking-[0.15em] uppercase text-accent mb-3">
            // ACERCA DE MÍ
          </span>
          <h2 className="section-title font-mono">
            MI TRAYECTORIA
          </h2>
          <div className="mx-auto mt-4 h-[4px] w-16 bg-accent" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar */}
          <div className="relative flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 border border-border bg-bg-alt flex items-center justify-center">
              <span className="text-6xl font-black font-mono text-accent">PE</span>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            {[
              "Soy un apasionado desarrollador de software en formación, actualmente cursando el 6to ciclo de la carrera de Ingeniería de Sistemas de Información en la UPC.",
              "Me especializo en el desarrollo de aplicaciones web usando tecnologías modernas tanto del lado del servidor como del cliente.",
              "Integro el desarrollo asistido con IA en mi flujo de trabajo para ser más productivo y resolver problemas de manera más eficiente.",
            ].map((text, i) => (
              <p
                key={i}
                className={`font-mono leading-relaxed ${i === 0 ? "text-fg text-lg" : "text-fg-muted"}`}
              >
                {text}
              </p>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 border border-border bg-card hover:bg-bg-alt transition-colors cursor-default"
                >
                  <div className="text-2xl font-black font-mono">{stat.value}</div>
                  <div className="text-xs font-mono text-fg-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights grid */}
        <div className="grid sm:grid-cols-3 gap-5 mt-16">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="flat-card p-6"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 border border-border bg-bg-alt mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-mono font-bold text-fg mb-2 uppercase text-sm">{item.title}</h3>
              <p className="text-sm font-mono text-fg-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
