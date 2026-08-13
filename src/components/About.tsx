export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs text-zinc-400 mb-4 uppercase tracking-wider">Sobre mí</p>
        <h2 className="text-2xl font-bold mb-8">Mi trayectoria</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-sm text-zinc-600 leading-relaxed mb-4">
              Desarrollador de software en formación, cursando el 6to ciclo de Ingeniería de Sistemas de Información en la UPC.
            </p>
            <p className="text-sm text-zinc-600 leading-relaxed mb-4">
              Me especializo en aplicaciones web con tecnologías modernas tanto en frontend como en backend.
            </p>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Integro el desarrollo asistido con IA en mi flujo de trabajo para ser más productivo.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 h-fit">
            {[
              { value: "6to", label: "Ciclo" },
              { value: "10+", label: "Tecnologías" },
              { value: "15+", label: "Proyectos" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-xl font-bold">{s.value}</div>
                <div className="text-xs text-zinc-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
