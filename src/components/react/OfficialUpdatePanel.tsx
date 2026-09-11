import { useState } from "react";
import { ChevronDown, GraduationCap, MapPin, Briefcase, ShieldCheck, Clock } from "lucide-react";

export default function OfficialUpdatePanel() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section id="profile" className="max-w-7xl mx-auto px-4 sm:px-8 py-4 relative z-10">
      <div className="border border-zinc-800 bg-[#121215] rounded-lg overflow-hidden transition-all">
        {/* Update Header / Toggle Button (Flat) */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 hover:bg-zinc-800/50 transition-colors cursor-pointer text-left"
          aria-expanded={isOpen}
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <span className="font-display font-bold text-sm tracking-wider text-white uppercase">
                INFORMACIÓN OFICIAL DEL CANDIDATO
              </span>
              <span className="hidden sm:inline text-zinc-600">/</span>
              <span className="text-xs font-mono text-zinc-400">
                Universidad Peruana de Ciencias Aplicadas (UPC)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="hidden sm:inline">{isOpen ? "Colapsar" : "Expandir"}</span>
            <ChevronDown
              className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>

        {/* Collapsible Content (Flat) */}
        {isOpen && (
          <div className="border-t border-zinc-800 bg-[#0c0c0e] p-5 sm:p-6 grid md:grid-cols-3 gap-5 text-xs sm:text-sm">
            {/* Academic & Degree */}
            <div className="space-y-1.5 p-3 rounded bg-[#121215] border border-zinc-800">
              <div className="flex items-center gap-2 font-mono text-cyan-400 font-semibold uppercase tracking-wider text-xs">
                <GraduationCap className="w-4 h-4" /> Formación Universitaria
              </div>
              <h4 className="text-sm font-bold text-white">Ingeniería de Sistemas de Información</h4>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Universidad Peruana de Ciencias Aplicadas (UPC). Formación en arquitectura de sistemas, ingeniería de datos y gestión tecnológica.
              </p>
            </div>

            {/* Core Specialization */}
            <div className="space-y-1.5 p-3 rounded bg-[#121215] border border-zinc-800">
              <div className="flex items-center gap-2 font-mono text-cyan-400 font-semibold uppercase tracking-wider text-xs">
                <ShieldCheck className="w-4 h-4" /> Especialidad &amp; Backend
              </div>
              <h4 className="text-sm font-bold text-white">Java / Spring Boot &amp; .NET Core</h4>
              <p className="text-zinc-400 text-xs leading-relaxed">
                APIs RESTful, microservicios, seguridad JWT, modelado relacional en SQL Server / Oracle y desarrollo web en React &amp; Astro.
              </p>
            </div>

            {/* Availability & Location */}
            <div className="space-y-1.5 p-3 rounded bg-[#121215] border border-zinc-800">
              <div className="flex items-center gap-2 font-mono text-emerald-400 font-semibold uppercase tracking-wider text-xs">
                <Briefcase className="w-4 h-4" /> Estado Laboral
              </div>
              <h4 className="text-sm font-bold text-white">Disponibilidad Inmediata</h4>
              <div className="flex flex-col gap-1 text-xs text-zinc-300 font-mono pt-1">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" /> Lima, Perú (Remoto / Híbrido)
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" /> Incorporación Inmediata
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
