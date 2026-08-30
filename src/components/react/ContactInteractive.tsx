import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, Github, Linkedin, CheckCircle2, MessageSquare, Briefcase, MapPin, Calendar, Clock } from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactInteractive() {
  const [form, setForm] = useState({ name: "", email: "", company: "", reason: "Oportunidad Laboral / Prácticas", message: "" });
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
        colors: ["#38bdf8", "#3b82f6", "#6366f1", "#10b981"],
      });
    } catch {
      // Confetti fallback safely ignored
    }

    setForm({ name: "", email: "", company: "", reason: "Oportunidad Laboral / Prácticas", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center sm:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-sky-500/30 text-xs font-mono text-sky-400 mb-3"
          >
            <Briefcase className="w-4 h-4" />
            <span>CANAL DE CONTRATACIONES &amp; CONTACTO PROFESIONAL</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Coordinar Entrevista o Contactar
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Recruiter Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Información para Reclutadores</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Estoy activamente evaluando oportunidades para incorporarme como <strong className="text-white">Practicante Preprofesional de Ingeniería de Software</strong> o desarrollador Junior.
                </p>
              </div>

              {/* Recruitment Facts */}
              <div className="space-y-3 p-4 rounded-xl bg-zinc-950/60 border border-white/5 text-xs text-slate-300 font-mono">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Disponibilidad:</strong> Inmediata</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                  <span><strong>Ubicación:</strong> Lima, Perú (Remoto / Híbrido)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span><strong>Formación:</strong> UPC · 6to Ciclo</span>
                </div>
              </div>

              {/* Direct Links */}
              <div className="space-y-3.5">
                <a
                  href="mailto:paulespinoza951@gmail.com"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-sky-500/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Correo Corporativo</div>
                    <div className="text-xs sm:text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
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
                    <div className="text-[11px] font-mono text-slate-400">WhatsApp Directo</div>
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
                  className="flex-1 py-3 px-4 rounded-xl bg-[#0a66c2]/20 hover:bg-[#0a66c2]/30 border border-[#0a66c2]/40 text-xs font-bold text-white flex items-center justify-center gap-2 transition-all shadow"
                >
                  <Linkedin className="w-4 h-4 text-[#38bdf8]" /> Conectar en LinkedIn
                </a>

                <a
                  href="https://github.com/paulollito29-sketch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl glass-card border border-white/10 hover:border-white/30 text-xs font-bold text-slate-200 hover:text-white flex items-center justify-center gap-2 transition-all"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-400 mb-1.5">
                    Nombre del Reclutador / Empresa *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Ej. María Vargas"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950/70 border border-white/10 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-sm text-white placeholder:text-zinc-600 transition-all outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs font-mono text-slate-400 mb-1.5">
                    Empresa u Organización
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Ej. Tech Solutions SAC"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950/70 border border-white/10 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-sm text-white placeholder:text-zinc-600 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-400 mb-1.5">
                    Correo Electrónico de Contacto *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="rrhh@empresa.com"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950/70 border border-white/10 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-sm text-white placeholder:text-zinc-600 transition-all outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="reason" className="block text-xs font-mono text-slate-400 mb-1.5">
                    Motivo de Contacto
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    value={form.reason}
                    onChange={(e) => setForm({ ...form, reason: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950/70 border border-white/10 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-sm text-white transition-all outline-none"
                  >
                    <option value="Oportunidad Laboral / Prácticas">Oportunidad Laboral / Prácticas</option>
                    <option value="Entrevista Técnica">Coordinar Entrevista Técnica</option>
                    <option value="Proyecto Freelance / Consultoría">Proyecto / Consultoría</option>
                    <option value="Consulta General">Consulta General</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-400 mb-1.5">
                  Detalles del Puesto, Proyecto o Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Describe los requerimientos del rol, modalidad o detalles de la propuesta..."
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950/70 border border-white/10 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-sm text-white placeholder:text-zinc-600 transition-all outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className={`w-full py-4 px-6 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  status === "sent"
                    ? "bg-emerald-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                    : "bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 hover:from-blue-500 hover:to-sky-500 text-white shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(14,165,233,0.6)]"
                } disabled:opacity-75`}
              >
                {status === "idle" && (
                  <>
                    <Send className="w-4 h-4" /> Enviar Mensaje / Propuesta
                  </>
                )}
                {status === "sending" && (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Enviando comunicación...
                  </>
                )}
                {status === "sent" && (
                  <>
                    <CheckCircle2 className="w-4 h-4" /> ¡Mensaje Enviado con Éxito!
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
