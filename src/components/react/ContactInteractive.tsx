import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, Github, Linkedin, CheckCircle2, Briefcase, MapPin, Calendar, Clock } from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactInteractive() {
  const [form, setForm] = useState({ name: "", email: "", company: "", reason: "Oportunidad Laboral / Sistemas", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");

    try {
      confetti({
        particleCount: 85,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#00e5ff", "#3b82f6", "#8b5cf6", "#10b981"],
      });
    } catch {
      // Ignore
    }

    setForm({ name: "", email: "", company: "", reason: "Oportunidad Laboral / Sistemas", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-8 py-20 relative z-10">
      {/* Luxury Divider */}
      <div className="luxury-divider">
        <div className="luxury-divider-diamond" />
      </div>

      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-widest text-white uppercase">
          Contacto Oficial &amp; Contrataciones
        </h2>
        <div className="title-underline" />
        <p className="text-xs sm:text-sm font-mono text-zinc-400 uppercase tracking-widest">
          Coordinación Directa con Paulo Espinoza · Ingeniero de Sistemas de Información
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Recruiter Details Card */}
        <div className="lg:col-span-5 bg-[#090d16] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
          <div>
            <h3 className="font-display font-bold text-xl text-white tracking-wider uppercase mb-2">
              Información de Contratación
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Disponible para incorporarme a equipos de tecnología en roles de <strong className="text-white">Ingeniería de Sistemas de Información, Backend y Desarrollo Full Stack</strong>.
            </p>
          </div>

          {/* Recruitment Facts */}
          <div className="space-y-3 p-4 rounded-xl bg-[#05070c] border border-white/5 text-xs text-zinc-300 font-mono">
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
              <span><strong>Disponibilidad:</strong> Inmediata</span>
            </div>
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span><strong>Ubicación:</strong> Lima, Perú (Remoto / Híbrido)</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
              <span><strong>Grado / Carrera:</strong> Ing. de Sistemas de Información · UPC</span>
            </div>
          </div>

          {/* Direct Channels */}
          <div className="space-y-3.5">
            <a
              href="mailto:paulespinoza951@gmail.com"
              className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-cyan-500/40 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Email Corporativo</div>
                <div className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                  paulespinoza951@gmail.com
                </div>
              </div>
            </a>

            <a
              href="https://wa.me/51906920958"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/40 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">WhatsApp Directo</div>
                <div className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                  +51 906 920 958
                </div>
              </div>
            </a>
          </div>

          {/* Social Network Buttons */}
          <div className="flex gap-3 pt-2">
            <a
              href="https://www.linkedin.com/in/paulo-espinoza9/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-xs font-mono font-bold text-cyan-300 flex items-center justify-center gap-2 transition-all uppercase tracking-wider shadow"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>

            <a
              href="https://github.com/paulollito29-sketch"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono font-bold text-zinc-300 hover:text-white flex items-center justify-center gap-2 transition-all uppercase tracking-wider"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </div>

        {/* Form Side */}
        <div className="lg:col-span-7 bg-[#090d16] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                  Nombre del Contacto / Reclutador *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Ej. Carlos Mendoza"
                  className="w-full px-4 py-3 rounded-xl bg-[#05070c] border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder:text-zinc-600 transition-all outline-none"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                  Empresa u Organización
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  placeholder="Ej. Tech Enterprise"
                  className="w-full px-4 py-3 rounded-xl bg-[#05070c] border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder:text-zinc-600 transition-all outline-none"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                  Correo Electrónico *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="contacto@empresa.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#05070c] border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder:text-zinc-600 transition-all outline-none"
                />
              </div>

              <div>
                <label htmlFor="reason" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                  Motivo de Contacto
                </label>
                <select
                  id="reason"
                  name="reason"
                  value={form.reason}
                  onChange={(e) => setForm({ ...form, reason: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#05070c] border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white transition-all outline-none"
                >
                  <option value="Oportunidad Laboral / Sistemas">Oportunidad Laboral / Contratación</option>
                  <option value="Entrevista Técnica">Coordinar Entrevista Técnica</option>
                  <option value="Consultoría de Sistemas">Consultoría / Proyecto</option>
                  <option value="Consulta General">Consulta General</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                Mensaje o Requerimiento *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Describe el perfil, proyecto o propuesta..."
                className="w-full px-4 py-3 rounded-xl bg-[#05070c] border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder:text-zinc-600 transition-all outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className={`w-full py-4 px-6 rounded-xl font-display font-bold text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                status === "sent"
                  ? "bg-emerald-500 text-[#05070c] shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                  : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-[#05070c] shadow-[0_0_25px_rgba(0,229,255,0.4)] hover:shadow-[0_0_35px_rgba(0,229,255,0.6)]"
              } disabled:opacity-75`}
            >
              {status === "idle" && (
                <>
                  <Send className="w-4 h-4" /> Enviar Mensaje Oficial
                </>
              )}
              {status === "sending" && (
                <>
                  <span className="w-4 h-4 border-2 border-[#05070c]/30 border-t-[#05070c] rounded-full animate-spin" />
                  Enviando mensaje...
                </>
              )}
              {status === "sent" && (
                <>
                  <CheckCircle2 className="w-4 h-4" /> ¡Mensaje Enviado con Éxito!
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
