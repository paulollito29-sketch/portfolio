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
    <section id="certificates" className="section-pad">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs text-zinc-400 mb-4 uppercase tracking-wider">Certificaciones</p>
        <h2 className="text-2xl font-bold mb-8">Logros</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((cert, i) => (
            <div key={cert.file} className="group cursor-pointer" onClick={() => setSelected(i)}>
              <div className="bg-zinc-50 p-4 mb-2 flex items-start gap-3">
                <span className="text-xl">{cert.icon}</span>
                <div>
                  <h3 className="text-sm font-medium">{cert.title}</h3>
                  <p className="text-xs text-zinc-400 mt-0.5">{cert.issuer}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-400">Ver certificado</span>
                <a href={`/certificates/${encodeURIComponent(cert.file)}`} target="_blank" rel="noopener noreferrer" download={cert.file} onClick={(e) => e.stopPropagation()} className="w-7 h-7 flex items-center justify-center text-zinc-400 hover:text-zinc-900 transition-colors" aria-label="Descargar">
                  <Download className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {selected !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8" onClick={() => setSelected(null)}>
            <div className="absolute inset-0 bg-white/95" />
            <div className="relative w-full max-w-4xl max-h-[90vh] bg-white overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-100">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-zinc-400" />
                  <div>
                    <h3 className="text-sm font-medium">{certificates[selected].title}</h3>
                    <p className="text-xs text-zinc-400">{certificates[selected].issuer}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a href={`/certificates/${encodeURIComponent(certificates[selected].file)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-900 transition-colors">
                    <ExternalLink className="w-3 h-3" /> Abrir
                  </a>
                  <button onClick={() => setSelected(null)} className="w-7 h-7 flex items-center justify-center text-zinc-400 hover:text-zinc-900 transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div style={{ height: "calc(90vh - 56px)" }}>
                <iframe src={`/certificates/${encodeURIComponent(certificates[selected].file)}`} className="w-full h-full" title={certificates[selected].title} />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
