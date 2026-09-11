import { useState, useEffect } from "react";
import { Download, ExternalLink, X, FileText, Eye, CheckCircle2 } from "lucide-react";

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
    <section id="certificates" className="max-w-7xl mx-auto px-4 sm:px-8 py-12 relative z-10">
      {/* Flat Header */}
      <div className="mb-10 text-center sm:text-left border-b border-zinc-800 pb-5">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-1">
          ACREDITACIONES DE LA INDUSTRIA
        </span>
        <h2 className="text-2xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight">
          Certificaciones Oficiales
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1">
          Credenciales verificadas de Meta, Oracle Academy y University of Michigan.
        </p>
      </div>

      {/* Certificates Grid (Flat) */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certificates.map((cert) => (
          <div
            key={cert.file}
            onClick={() => setSelected(cert)}
            className="bg-[#121215] border border-zinc-800 rounded-lg p-5 flex flex-col justify-between hover:border-zinc-700 transition-colors cursor-pointer group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xl p-2 rounded bg-zinc-900 border border-zinc-800">
                  {cert.icon}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800 font-semibold uppercase">
                  {cert.institution}
                </span>
              </div>

              <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2 mb-1">
                {cert.title}
              </h3>
              <p className="text-xs text-zinc-400 mb-3">{cert.issuer}</p>

              <div className="space-y-1 mb-4">
                {cert.skillsValidated.slice(0, 3).map((skill) => (
                  <div key={skill} className="flex items-center gap-1.5 text-[11px] text-zinc-300 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
              <span className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 group-hover:text-white transition-colors">
                <Eye className="w-3.5 h-3.5" /> Ver PDF
              </span>

              <a
                href={`/certificates/${encodeURIComponent(cert.file)}`}
                target="_blank"
                rel="noopener noreferrer"
                download={cert.file}
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
                aria-label="Descargar PDF"
                title="Descargar PDF"
              >
                <Download className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal PDF Viewer (Flat) */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-4xl h-[85vh] bg-[#121215] border border-zinc-700 rounded-lg overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-[#09090b] border-b border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-400">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">{selected.title}</h3>
                  <p className="text-xs text-zinc-400">{selected.issuer}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`/certificates/${encodeURIComponent(selected.file)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono font-medium text-black bg-white hover:bg-cyan-400 px-3 py-1.5 rounded transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Abrir</span>
                </a>

                <button
                  onClick={() => setSelected(null)}
                  className="p-1.5 rounded text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
                  aria-label="Cerrar modal"
                >
                  <X className="w-4 h-4" />
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
          </div>
        </div>
      )}
    </section>
  );
}
