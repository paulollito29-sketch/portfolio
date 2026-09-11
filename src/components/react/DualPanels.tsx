import { Github, Linkedin, ArrowRight, GraduationCap, Award } from "lucide-react";

export default function DualPanels() {
  return (
    <section id="facets" className="max-w-7xl mx-auto px-4 sm:px-8 py-12 relative z-10">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Panel 1: Professional (Flat) */}
        <div className="bg-[#121215] border border-zinc-800 rounded-lg p-6 sm:p-7 flex flex-col justify-between hover:border-zinc-700 transition-colors">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
              <span className="font-display font-bold text-xl sm:text-2xl tracking-wider text-white uppercase">
                Profesional
              </span>

              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/paulollito29-sketch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded bg-white text-black font-semibold text-xs uppercase tracking-wider transition-colors hover:bg-cyan-400 flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/paulo-espinoza9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 text-white font-medium text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5"
                >
                  <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                </a>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
              Diseño e implementación de sistemas backend, microservicios en Java (Spring Boot) &amp; .NET y persistencia de datos relacional.
            </p>

            {/* Featured Lead Card (Flat) */}
            <a href="/portfolio" className="block rounded bg-[#09090b] border border-zinc-800 p-4 mb-6 hover:border-zinc-700 transition-colors group">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-cyan-400 uppercase">
                  Sistemas Empresariales
                </span>
                <span className="text-xs font-mono text-zinc-500">2026.09</span>
              </div>

              <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 group-hover:text-cyan-400 transition-colors">
                Vault Vintage &amp; Store Backend Ecosystem
              </h3>
              <p className="text-xs text-zinc-400 line-clamp-2 mb-3 leading-relaxed">
                Arquitectura de servicios desacoplados, autenticación con JWT, persistencia transaccional en SQL Server / MySQL y documentación Swagger.
              </p>

              <div className="flex flex-wrap gap-1">
                {["Java", "Spring Boot", "SQL Server", "JWT", "Docker"].map((t) => (
                  <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          </div>

          {/* Bottom Nav Links */}
          <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-zinc-400">
            <a href="/portfolio" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
              Portafolio <ArrowRight className="w-3 h-3" />
            </a>
            <a href="/services" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
              Servicios <ArrowRight className="w-3 h-3" />
            </a>
            <a href="/contact" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
              Contacto <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Panel 2: Academic (Flat) */}
        <div className="bg-[#121215] border border-zinc-800 rounded-lg p-6 sm:p-7 flex flex-col justify-between hover:border-zinc-700 transition-colors">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
              <span className="font-display font-bold text-xl sm:text-2xl tracking-wider text-white uppercase">
                Académico
              </span>

              <div className="flex items-center gap-2">
                <a
                  href="/profile"
                  className="px-3 py-1.5 rounded bg-white text-black font-semibold text-xs uppercase tracking-wider transition-colors hover:bg-cyan-400 flex items-center gap-1.5"
                >
                  <GraduationCap className="w-3.5 h-3.5" /> UPC
                </a>
                <a
                  href="/certificates"
                  className="px-3 py-1.5 rounded bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 text-white font-medium text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5"
                >
                  <Award className="w-3.5 h-3.5" /> Certificaciones
                </a>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
              Formación en la UPC y acreditaciones internacionales otorgadas por Meta, Oracle Academy y University of Michigan.
            </p>

            {/* Featured Lead Card (Flat) */}
            <a href="/certificates" className="block rounded bg-[#09090b] border border-zinc-800 p-4 mb-6 hover:border-zinc-700 transition-colors group">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-cyan-400 uppercase">
                  Acreditaciones Oficiales
                </span>
                <span className="text-xs font-mono text-zinc-500">2026.09</span>
              </div>

              <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 group-hover:text-cyan-400 transition-colors">
                Meta, Oracle Academy &amp; Michigan
              </h3>
              <p className="text-xs text-zinc-400 line-clamp-2 mb-3 leading-relaxed">
                10 certificaciones oficiales que validan competencias en desarrollo web con React, bases de datos Oracle SQL, estructuras de datos y APIs.
              </p>

              <div className="flex flex-wrap gap-1">
                {["Meta React", "Oracle SQL", "Python Spec", "APIs & Web Data", "Capstone"].map((t) => (
                  <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          </div>

          {/* Bottom Nav Links */}
          <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-zinc-400">
            <a href="/certificates" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
              Certificados <ArrowRight className="w-3 h-3" />
            </a>
            <a href="/profile" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
              Perfil &amp; UPC <ArrowRight className="w-3 h-3" />
            </a>
            <a href="/contact" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
              Contacto <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
