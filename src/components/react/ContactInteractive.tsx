import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, Github, Linkedin, CheckCircle2, MessageSquare } from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactInteractive() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");
    // Simulate real asynchronous dispatch or mailer hook
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");

    // Trigger celebratory confetti effect
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#06b6d4", "#3b82f6", "#8b5cf6", "#10b981"],
      });
    } catch {
      // Confetti fallback safely ignored
    }

    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center sm:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>CANALES DE COMUNICACIÓN</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Iniciemos una Conversación
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">¿Tienes un proyecto en mente?</h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Estoy disponible para oportunidades como practicante/desarrollador, proyectos freelance o colaboraciones de ingeniería de software.
                </p>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-medium text-emerald-300">
                  Estado: Disponible para proyectos y prácticas
                </span>
              </div>

              {/* Direct Links */}
              <div className="space-y-4">
                <a
                  href="mailto:paulespinoza951@gmail.com"
                  className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-cyan-500/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-400">Email directo</div>
                    <div className="text-sm font-semibold text-zinc-200 group-hover:text-cyan-300 transition-colors">
                      paulespinoza951@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="https://wa.me/51906920958"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-400">WhatsApp / Teléfono</div>
                    <div className="text-sm font-semibold text-zinc-200 group-hover:text-emerald-300 transition-colors">
                      +51 906 920 958
                    </div>
                  </div>
                </a>
              </div>

              {/* Social Network Buttons */}
              <div className="flex gap-3 pt-2">
                <a
                  href="https://github.com/paulollito29-sketch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl glass-card border border-white/10 hover:border-cyan-500/40 text-xs font-semibold text-zinc-300 hover:text-white flex items-center justify-center gap-2 transition-all"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/paulo-espinoza9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl glass-card border border-white/10 hover:border-blue-500/40 text-xs font-semibold text-zinc-300 hover:text-white flex items-center justify-center gap-2 transition-all"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
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
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-zinc-400 mb-1.5">
                  Nombre Completo *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Ej. Alexander Hamilton"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950/70 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder:text-zinc-600 transition-all outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono text-zinc-400 mb-1.5">
                  Correo Electrónico *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="ejemplo@empresa.com"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950/70 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder:text-zinc-600 transition-all outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-zinc-400 mb-1.5">
                  Mensaje o Propuesta *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Describe brevemente el requerimiento, proyecto o propuesta..."
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950/70 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder:text-zinc-600 transition-all outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className={`w-full py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  status === "sent"
                    ? "bg-emerald-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                    : "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)]"
                } disabled:opacity-75`}
              >
                {status === "idle" && (
                  <>
                    <Send className="w-4 h-4" /> Enviar Mensaje
                  </>
                )}
                {status === "sending" && (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
