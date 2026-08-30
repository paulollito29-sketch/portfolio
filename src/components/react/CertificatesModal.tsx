import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Download, ExternalLink, X, FileText, Eye } from "lucide-react";

interface Certificate {
  file: string;
  title: string;
  issuer: string;
  icon: string;
  category: string;
}

const certificates: Certificate[] = [
  { file: "react.pdf", title: "React Development", issuer: "Meta (Coursera)", icon: "⚛️", category: "Frontend" },
  { file: "oracle sql.pdf", title: "Oracle SQL & Database Design", issuer: "Oracle Academy", icon: "🗄️", category: "Database" },
  { file: "python for everybody.pdf", title: "Python para Todos (Specialization)", issuer: "University of Michigan (Coursera)", icon: "🐍", category: "Backend & Data" },
  { file: "python basics.pdf", title: "Fundamentos de Python", issuer: "University of Michigan (Coursera)", icon: "🐍", category: "Backend" },
  { file: "python data structures.pdf", title: "Estructuras de Datos en Python", issuer: "University of Michigan (Coursera)", icon: "📊", category: "Algoritmos" },
  { file: "python to acces web data.pdf", title: "Python para Acceso a Datos Web (APIs)", issuer: "University of Michigan (Coursera)", icon: "🌐", category: "APIs & Web" },
  { file: "visualizing data whith python.pdf", title: "Visualización de Datos con Python", issuer: "University of Michigan (Coursera)", icon: "📈", category: "Data Science" },
  { file: "blockchain.pdf", title: "Fundamentos de Blockchain", issuer: "Especialización Tech", icon: "🔗", category: "Web3" },
  { file: "capstone.pdf", title: "Proyecto Capstone: Recuperación y Procesamiento de Datos", issuer: "University of Michigan (Coursera)", icon: "🎓", category: "Capstone" },
  { file: "finantial regulation.pdf", title: "Regulación Financiera & Fintech", issuer: "Certificación Especializada", icon: "🏦", category: "Fintech" },
];

export default function CertificatesModal() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="certificates" className="py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center sm:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3"
          >
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIALS &amp; LOGROS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Certificaciones Oficiales
          </motion.h2>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.file}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              onClick={() => setSelected(cert)}
              className="glass-card p-5 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl p-2 rounded-xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform">
                    {cert.icon}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {cert.category}
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors line-clamp-2 mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs text-zinc-400 line-clamp-1">{cert.issuer}</p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs text-zinc-400 group-hover:text-white transition-colors">
                  <Eye className="w-3.5 h-3.5 text-emerald-400" /> Ver certificado
                </span>

                <a
                  href={`/certificates/${encodeURIComponent(cert.file)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={cert.file}
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-emerald-500/20 text-zinc-400 hover:text-emerald-300 transition-colors"
                  aria-label="Descargar PDF"
                  title="Descargar PDF"
                >
                  <Download className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Fullscreen/Modal PDF Viewer */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="relative w-full max-w-4xl h-[85vh] bg-[#0d111a] border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between px-5 py-3.5 bg-zinc-950 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">{selected.title}</h3>
                      <p className="text-xs text-zinc-400">{selected.issuer}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={`/certificates/${encodeURIComponent(selected.file)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Abrir en Pestaña</span>
                    </a>

                    <button
                      onClick={() => setSelected(null)}
                      className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                      aria-label="Cerrar modal"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* PDF Viewer */}
                <div className="flex-1 w-full bg-zinc-900">
                  <iframe
                    src={`/certificates/${encodeURIComponent(selected.file)}#toolbar=0`}
                    className="w-full h-full border-0"
                    title={selected.title}
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
