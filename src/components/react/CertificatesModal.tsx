import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Download, ExternalLink, X, FileText, Eye, CheckCircle2, ShieldCheck } from "lucide-react";

interface Certificate {
  file: string;
  title: string;
  issuer: string;
  institution: "Meta" | "Oracle" | "University of Michigan" | "Especialización";
  icon: string;
  category: string;
  skillsValidated: string[];
}

const certificates: Certificate[] = [
  {
    file: "react.pdf",
    title: "React Development & Web Applications",
    issuer: "Meta (Coursera Authorized)",
    institution: "Meta",
    icon: "⚛️",
    category: "Frontend Engineering",
    skillsValidated: ["React Hooks", "Component Lifecycle", "State Management", "JSX"],
  },
  {
    file: "oracle sql.pdf",
    title: "Database Design & Oracle SQL Programming",
    issuer: "Oracle Academy",
    institution: "Oracle",
    icon: "🗄️",
    category: "Enterprise Databases",
    skillsValidated: ["Oracle SQL", "PL/SQL", "Relational Modeling", "ACID Compliance"],
  },
  {
    file: "python for everybody.pdf",
    title: "Python for Everybody Specialization",
    issuer: "University of Michigan (Coursera)",
    institution: "University of Michigan",
    icon: "🐍",
    category: "Backend & Data Structures",
    skillsValidated: ["Python Core", "Data Structures", "Algorithms", "Object-Oriented"],
  },
  {
    file: "python data structures.pdf",
    title: "Python Data Structures & Computational Thinking",
    issuer: "University of Michigan (Coursera)",
    institution: "University of Michigan",
    icon: "📊",
    category: "Computer Science",
    skillsValidated: ["Lists", "Dictionaries", "Tuples", "Complexity Analysis"],
  },
  {
    file: "python to acces web data.pdf",
    title: "Using Python to Access Web Data & APIs",
    issuer: "University of Michigan (Coursera)",
    institution: "University of Michigan",
    icon: "🌐",
    category: "APIs & Web Services",
    skillsValidated: ["REST APIs", "JSON/XML Parsing", "HTTP Requests", "Web Scraping"],
  },
  {
    file: "visualizing data whith python.pdf",
    title: "Data Processing & Visualization with Python",
    issuer: "University of Michigan (Coursera)",
    institution: "University of Michigan",
    icon: "📈",
    category: "Data Analytics",
    skillsValidated: ["Data Pipelines", "Visual Dashboards", "Database Integration"],
  },
  {
    file: "capstone.pdf",
    title: "Capstone: Retrieving, Processing & Visualizing Data",
    issuer: "University of Michigan (Coursera)",
    institution: "University of Michigan",
    icon: "🎓",
    category: "Capstone Project",
    skillsValidated: ["End-to-End Pipeline", "Architecture", "Data Storage"],
  },
  {
    file: "python basics.pdf",
    title: "Programming Fundamentals in Python",
    issuer: "University of Michigan (Coursera)",
    institution: "University of Michigan",
    icon: "🐍",
    category: "Programming Core",
    skillsValidated: ["Functions", "Loops", "Conditional Logic", "Debugging"],
  },
  {
    file: "blockchain.pdf",
    title: "Blockchain Architecture & Distributed Ledgers",
    issuer: "Especialización Tech",
    institution: "Especialización",
    icon: "🔗",
    category: "Distributed Systems",
    skillsValidated: ["Cryptography", "Consensus Protocols", "Smart Contracts"],
  },
  {
    file: "finantial regulation.pdf",
    title: "Financial Regulation, Compliance & Fintech",
    issuer: "Certificación Especializada",
    institution: "Especialización",
    icon: "🏦",
    category: "Fintech & Compliance",
    skillsValidated: ["Fintech Governance", "Regulatory Standards", "Risk Management"],
  },
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
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center sm:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-emerald-500/30 text-xs font-mono text-emerald-400 mb-3"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>CREDENTIALES AUDITADAS &amp; CERTIFICACIONES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Certificaciones Académicas &amp; de la Industria
          </motion.h2>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.file}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              whileHover={{ y: -4 }}
              onClick={() => setSelected(cert)}
              className="glass-card p-6 rounded-2xl border border-white/10 hover:border-emerald-500/40 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                    {cert.icon}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-semibold">
                    {cert.institution}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-2 mb-1.5">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-400 mb-4">{cert.issuer}</p>

                {/* Validated Skills */}
                <div className="space-y-1 mb-5">
                  {cert.skillsValidated.slice(0, 3).map((skill) => (
                    <div key={skill} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3.5 border-t border-white/5 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 group-hover:text-emerald-300 transition-colors">
                  <Eye className="w-3.5 h-3.5 text-emerald-400" /> Ver documento oficial
                </span>

                <a
                  href={`/certificates/${encodeURIComponent(cert.file)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={cert.file}
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-lg bg-white/5 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-300 transition-colors"
                  aria-label="Descargar PDF del Certificado"
                  title="Descargar Certificado"
                >
                  <Download className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal PDF Viewer */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="relative w-full max-w-4xl h-[88vh] bg-[#0c101a] border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between px-6 py-4 bg-zinc-950 border-b border-white/10">
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <FileText className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">{selected.title}</h3>
                      <p className="text-xs text-slate-400">{selected.issuer}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={`/certificates/${encodeURIComponent(selected.file)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 px-3.5 py-2 rounded-xl transition-all shadow"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Abrir en Pestaña</span>
                    </a>

                    <button
                      onClick={() => setSelected(null)}
                      className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
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
