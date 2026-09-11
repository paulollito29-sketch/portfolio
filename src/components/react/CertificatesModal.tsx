import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ExternalLink, X, FileText, Eye, CheckCircle2, ShieldCheck, Award } from "lucide-react";

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
    category: "Frontend Architecture",
    skillsValidated: ["React Hooks", "Component Lifecycle", "State Management", "JSX"],
  },
  {
    file: "oracle sql.pdf",
    title: "Database Design & Oracle SQL Programming",
    issuer: "Oracle Academy",
    institution: "Oracle",
    icon: "🗄️",
    category: "Enterprise Databases",
    skillsValidated: ["Oracle SQL", "PL/SQL", "Relational Modeling", "ACID Transactions"],
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
    skillsValidated: ["REST APIs", "JSON/XML Parsing", "HTTP Protocols", "Web Scraping"],
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
    skillsValidated: ["End-to-End Pipeline", "Systems Architecture", "Data Storage"],
  },
  {
    file: "python basics.pdf",
    title: "Programming Fundamentals in Python",
    issuer: "University of Michigan (Coursera)",
    institution: "University of Michigan",
    icon: "🐍",
    category: "Programming Core",
    skillsValidated: ["Functions", "Control Flow", "Debugging", "Modular Code"],
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
    <section id="certificates" className="max-w-7xl mx-auto px-4 sm:px-8 py-20 relative z-10">
      {/* Luxury Divider */}
      <div className="luxury-divider">
        <div className="luxury-divider-diamond" />
      </div>

      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-widest text-white uppercase">
          Acreditaciones Oficiales
        </h2>
        <div className="title-underline" />
        <p className="text-xs sm:text-sm font-mono text-zinc-400 uppercase tracking-widest">
          Credenciales Auditadas de la Industria (Meta · Oracle Academy · University of Michigan)
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.file}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            onClick={() => setSelected(cert)}
            className="bg-[#0a0e17] border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-cyan-500/50 transition-all cursor-pointer group shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                  {cert.icon}
                </span>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-semibold uppercase tracking-wider">
                  {cert.institution}
                </span>
              </div>

              <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2 mb-1.5">
                {cert.title}
              </h3>
              <p className="text-xs text-zinc-400 mb-4">{cert.issuer}</p>

              <div className="space-y-1 mb-5">
                {cert.skillsValidated.slice(0, 3).map((skill) => (
                  <div key={skill} className="flex items-center gap-1.5 text-[11px] text-zinc-300 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3.5 border-t border-white/5 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-zinc-300 group-hover:text-cyan-300 transition-colors">
                <Eye className="w-3.5 h-3.5 text-cyan-400" /> Ver documento oficial
              </span>

              <a
                href={`/certificates/${encodeURIComponent(cert.file)}`}
                target="_blank"
                rel="noopener noreferrer"
                download={cert.file}
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-zinc-300 hover:text-cyan-300 transition-colors"
                aria-label="Descargar PDF"
                title="Descargar PDF"
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
              className="relative w-full max-w-4xl h-[88vh] bg-[#0c101a] border border-white/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-[#05070c] border-b border-white/10">
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <FileText className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{selected.title}</h3>
                    <p className="text-xs text-zinc-400">{selected.issuer}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={`/certificates/${encodeURIComponent(selected.file)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#05070c] bg-cyan-500 hover:bg-cyan-400 px-3.5 py-2 rounded-lg transition-all shadow-[0_0_12px_rgba(0,229,255,0.4)]"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Abrir en Pestaña</span>
                  </a>

                  <button
                    onClick={() => setSelected(null)}
                    className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                    aria-label="Cerrar modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="flex-1 w-full bg-zinc-950">
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
    </section>
  );
}
