import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink, Award, FileText, ArrowRight, Server, GraduationCap, Building, ShieldCheck } from "lucide-react";

export default function DualPanels() {
  return (
    <section id="facets" className="max-w-7xl mx-auto px-4 sm:px-8 py-16 relative z-10">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Panel 1: Professional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#090d16] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-2xl group hover:border-cyan-500/40 transition-all"
        >
          {/* Top Row: Title & Action CTAs */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <span className="font-display font-bold text-2xl sm:text-3xl tracking-widest text-white uppercase">
                Profesional
              </span>

              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/paulollito29-sketch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-[#05070c] font-display font-bold text-xs tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(0,229,255,0.4)] flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/paulo-espinoza9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border border-white/20 hover:border-cyan-400 hover:text-cyan-400 text-white font-display font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-1.5"
                >
                  <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                </a>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-8">
              Diseño e implementación de sistemas backend de misión crítica, microservicios en Java (Spring Boot) &amp; .NET y bases de datos relacionales robustas.
            </p>

            {/* Featured Lead Card with Floating Badge */}
            <a href="/portfolio" className="block relative rounded-xl overflow-hidden border border-white/10 bg-[#05070c]/80 p-5 mb-8 hover:border-cyan-400/50 transition-all group/card">
              <div className="floating-badge">
                LATEST<br />SOLUTIONS
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-cyan-400 mb-2">
                <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30">2026.09</span>
                <span className="text-zinc-500">·</span>
                <span>Sistemas Empresariales</span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover/card:text-cyan-300 transition-colors">
                Vault Vintage &amp; Store Backend Ecosystem
              </h3>
              <p className="text-xs text-zinc-400 line-clamp-2 mb-4 leading-relaxed">
                Arquitectura de servicios desacoplados, autenticación con JWT, persistencia transaccional en SQL Server / MySQL y documentación Swagger.
              </p>

              <div className="flex flex-wrap gap-1.5">
                {["Java", "Spring Boot", "SQL Server", "JWT", "Docker"].map((t) => (
                  <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-300 border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          </div>

          {/* Bottom Nav Links */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-zinc-400">
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
        </motion.div>

        {/* Panel 2: Academic */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative bg-[#090d16] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-2xl group hover:border-cyan-500/40 transition-all"
        >
          {/* Top Row: Title & Action CTAs */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <span className="font-display font-bold text-2xl sm:text-3xl tracking-widest text-white uppercase">
                Académico
              </span>

              <div className="flex items-center gap-2">
                <a
                  href="/profile"
                  className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-[#05070c] font-display font-bold text-xs tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(0,229,255,0.4)] flex items-center gap-1.5"
                >
                  <GraduationCap className="w-3.5 h-3.5" /> UPC
                </a>
                <a
                  href="/certificates"
                  className="px-4 py-2 rounded-lg border border-white/20 hover:border-cyan-400 hover:text-cyan-400 text-white font-display font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-1.5"
                >
                  <Award className="w-3.5 h-3.5" /> Certificaciones
                </a>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-8">
              Formación universitaria en la UPC y acreditaciones internacionales otorgadas por Meta, Oracle Academy y University of Michigan.
            </p>

            {/* Featured Lead Card with Floating Badge */}
            <a href="/certificates" className="block relative rounded-xl overflow-hidden border border-white/10 bg-[#05070c]/80 p-5 mb-8 hover:border-cyan-400/50 transition-all group/card">
              <div className="floating-badge">
                ACCREDITED<br />LOGROS
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-cyan-400 mb-2">
                <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30">2026.09</span>
                <span className="text-zinc-500">·</span>
                <span>Acreditaciones Oficiales</span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover/card:text-cyan-300 transition-colors">
                Meta, Oracle Academy &amp; Michigan
              </h3>
              <p className="text-xs text-zinc-400 line-clamp-2 mb-4 leading-relaxed">
                10 certificaciones oficiales que validan competencias en desarrollo web con React, bases de datos Oracle SQL, estructuras de datos y APIs.
              </p>

              <div className="flex flex-wrap gap-1.5">
                {["Meta React", "Oracle SQL", "Python Spec", "APIs & Web Data", "Capstone"].map((t) => (
                  <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-300 border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          </div>

          {/* Bottom Nav Links */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-zinc-400">
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
        </motion.div>
      </div>
    </section>
  );
}
