import { useState } from "react";
import { FileText, Download, ExternalLink, X } from "lucide-react";

const certificates = [
  { file: "react.pdf", title: "React", issuer: "Meta (Coursera)", icon: "⚛️" },
  { file: "oracle sql.pdf", title: "Oracle SQL", issuer: "Oracle Academy", icon: "🗄️" },
  { file: "python for everybody.pdf", title: "Python para Todos", issuer: "University of Michigan (Coursera)", icon: "🐍" },
  { file: "python basics.pdf", title: "Fundamentos de Python", issuer: "Plataforma online", icon: "🐍" },
  { file: "python data structures.pdf", title: "Estructuras de Datos en Python", issuer: "University of Michigan (Coursera)", icon: "📊" },
  { file: "python to acces web data.pdf", title: "Python para Acceder a Datos Web", issuer: "University of Michigan (Coursera)", icon: "🌐" },
  { file: "visualizing data whith python.pdf", title: "Visualización de Datos con Python", issuer: "Plataforma online", icon: "📈" },
  { file: "blockchain.pdf", title: "Blockchain", issuer: "Plataforma online", icon: "🔗" },
  { file: "capstone.pdf", title: "Proyecto Capstone", issuer: "University of Michigan (Coursera)", icon: "🎓" },
  { file: "finantial regulation.pdf", title: "Regulación Financiera", issuer: "Plataforma online", icon: "🏦" },
];

export default function Certificates() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="certificates" className="section-padding relative">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-mono font-bold tracking-[0.15em] uppercase text-accent mb-3">
            // CERTIFICACIONES
          </span>
          <h2 className="section-title font-mono">LOGROS</h2>
          <div className="mx-auto mt-4 h-[4px] w-16 bg-accent" />
          <p className="font-mono text-fg-muted mt-4 max-w-lg mx-auto">
            Cursos y certificaciones que respaldan mis conocimientos.
          </p>
        </div>

        {/* Certificate grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert) => (
            <div
              key={cert.file}
              className="flat-card overflow-hidden cursor-pointer"
              onClick={() => setSelected(certificates.indexOf(cert))}
            >
              {/* Top accent bar */}
              <div className="h-1 bg-fg" />

              <div className="p-6">
                {/* Icon + title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 border border-border bg-bg-alt shrink-0 text-xl">
                    {cert.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-mono font-bold text-fg uppercase text-sm leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-mono text-fg-muted mt-1">{cert.issuer}</p>
                  </div>
                </div>

                {/* Footer actions */}
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-accent uppercase">
                    Ver certificado
                  </span>
                  <a
                    href={`/certificates/${encodeURIComponent(cert.file)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={cert.file}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center justify-center w-8 h-8 border border-border bg-bg-alt hover:bg-fg hover:text-bg transition-colors"
                    aria-label="Descargar"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PDF Modal */}
        {selected !== null && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelected(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-bg/95" />

            {/* Modal content */}
            <div
              className="relative w-full max-w-4xl max-h-[90vh] border border-border bg-card overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-accent" />
                  <div>
                    <h3 className="font-mono font-bold text-fg text-sm uppercase">
                      {certificates[selected].title}
                    </h3>
                    <p className="text-xs font-mono text-fg-muted">{certificates[selected].issuer}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={`/certificates/${encodeURIComponent(certificates[selected].file)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 border border-border text-xs font-mono font-bold uppercase text-accent hover:bg-fg hover:text-bg transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    ABRIR
                  </a>
                  <button
                    onClick={() => setSelected(null)}
                    className="flex items-center justify-center w-8 h-8 border border-border hover:bg-accent hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* PDF iframe */}
              <div className="bg-bg-alt" style={{ height: "calc(90vh - 64px)" }}>
                <iframe
                  src={`/certificates/${encodeURIComponent(certificates[selected].file)}`}
                  className="w-full h-full"
                  title={certificates[selected].title}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
