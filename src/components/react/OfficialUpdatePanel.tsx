import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, GraduationCap, MapPin, Briefcase, Award, CheckCircle2, ShieldCheck, Clock } from "lucide-react";

export default function OfficialUpdatePanel() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section id="profile" className="max-w-7xl mx-auto px-4 sm:px-8 py-8 relative z-10">
      <div className="border-t border-b border-white/10 bg-[#080c14]/90 backdrop-blur-md rounded-2xl overflow-hidden transition-all shadow-xl">
        {/* Update Header / Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 sm:p-5 hover:bg-white/5 transition-colors cursor-pointer text-left"
          aria-expanded={isOpen}
        >
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00e5ff]" />
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <span className="font-display font-bold text-sm tracking-widest text-white uppercase">
                INFORMACIÓN OFICIAL DEL CANDIDATO
              </span>
              <span className="hidden sm:inline text-zinc-600">|</span>
              <span className="text-xs font-mono text-cyan-400">
                Universidad Peruana de Ciencias Aplicadas (UPC)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="hidden sm:inline">{isOpen ? "Colapsar" : "Expandir"}</span>
            <ChevronDown
              className={`w-4 h-4 text-cyan-400 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>

        {/* Collapsible Content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden border-t border-white/5 bg-[#05070c]/60"
            >
              <div className="p-5 sm:p-7 grid md:grid-cols-3 gap-6 text-xs sm:text-sm">
                {/* Academic & Degree */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-mono text-cyan-400 font-semibold uppercase tracking-wider text-xs">
                    <GraduationCap className="w-4 h-4" /> Formación Universitaria
                  </div>
                  <h4 className="text-sm font-bold text-white">Ingeniería de Sistemas de Información</h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    Universidad Peruana de Ciencias Aplicadas (UPC). Sólida formación en arquitectura de sistemas, ingeniería de datos y gestión tecnológica.
                  </p>
                </div>

                {/* Core Specialization */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-mono text-cyan-400 font-semibold uppercase tracking-wider text-xs">
                    <ShieldCheck className="w-4 h-4" /> Especialidad &amp; Backend
                  </div>
                  <h4 className="text-sm font-bold text-white">Java / Spring Boot &amp; .NET Core</h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    APIs RESTful, microservicios, seguridad JWT, modelado relacional en SQL Server / Oracle y desarrollo web en React 19 &amp; Astro.
                  </p>
                </div>

                {/* Availability & Location */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-mono text-emerald-400 font-semibold uppercase tracking-wider text-xs">
                    <Briefcase className="w-4 h-4" /> Estado Laboral
                  </div>
                  <h4 className="text-sm font-bold text-white">Disponibilidad Inmediata</h4>
                  <div className="flex flex-col gap-1 text-xs text-zinc-300 font-mono">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" /> Lima, Perú · Remoto o Híbrido
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" /> Incorporación Inmediata
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
