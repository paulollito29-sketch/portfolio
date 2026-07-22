import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Download, ExternalLink, X, Award, ChevronRight } from "lucide-react";

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

const categoryColors = [
  "from-purple-500 to-pink-500",
  "from-blue-500 to-cyan-500",
  "from-green-500 to-teal-500",
  "from-orange-500 to-red-500",
  "from-indigo-500 to-purple-500",
  "from-yellow-500 to-orange-500",
  "from-pink-500 to-rose-500",
  "from-cyan-500 to-blue-500",
  "from-teal-500 to-green-500",
  "from-red-500 to-pink-500",
];

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

export default function Certificates() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="certificates" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-500/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.1em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-block text-xs font-semibold tracking-[0.1em] uppercase text-accent-400 mb-3"
          >
            Logros académicos
          </motion.span>
          <h2 className="section-title">
            Mis <span className="text-gradient">certificaciones</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-accent-500 to-teal-400" />
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            Cursos y certificaciones que respaldan mis conocimientos en diversas tecnologías.
          </p>
        </motion.div>

        {/* Certificate grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.file}
              custom={i}
              variants={staggerItem}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
              onClick={() => setSelected(i)}
            >
              {/* Top gradient */}
              <div className={`h-2 bg-gradient-to-r ${categoryColors[i % categoryColors.length]}`} />

              <div className="p-6">
                {/* Icon + title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent-500/10 shrink-0 text-xl">
                    {cert.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-white group-hover:text-accent-400 transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">{cert.issuer}</p>
                  </div>
                </div>

                {/* Footer actions */}
                <div className="flex items-center justify-between pt-3 border-t border-dark-600">
                  <span className="flex items-center gap-1.5 text-xs text-accent-400 font-medium group-hover:gap-2 transition-all">
                    <Award className="w-3.5 h-3.5" />
                    Ver certificado
                    <ChevronRight className="w-3 h-3" />
                  </span>
                  <a
                    href={`/certificates/${encodeURIComponent(cert.file)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={cert.file}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center justify-center w-8 h-8 rounded-lg glass text-gray-400 hover:text-accent-400 hover:border-accent-500/30 transition-all"
                    aria-label="Descargar"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* PDF Modal */}
        <AnimatePresence>
          {selected !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
              onClick={() => setSelected(null)}
            >
              {/* Backdrop */}
              <div className="absolute inset-0 bg-dark-900/90 backdrop-blur-xl" />

              {/* Modal content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden glass shadow-2xl shadow-accent-500/10"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-dark-600">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-accent-400" />
                    <div>
                      <h3 className="font-semibold text-white text-sm">
                        {certificates[selected].title}
                      </h3>
                      <p className="text-xs text-gray-500">{certificates[selected].issuer}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={`/certificates/${encodeURIComponent(certificates[selected].file)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass text-xs text-accent-400 hover:text-white hover:border-accent-500/30 transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Abrir
                    </a>
                    <button
                      onClick={() => setSelected(null)}
                      className="flex items-center justify-center w-8 h-8 rounded-lg glass text-gray-400 hover:text-white transition-all"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* PDF iframe */}
                <div className="bg-dark-800/50" style={{ height: "calc(90vh - 64px)" }}>
                  <iframe
                    src={`/certificates/${encodeURIComponent(certificates[selected].file)}`}
                    className="w-full h-full"
                    title={certificates[selected].title}
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
