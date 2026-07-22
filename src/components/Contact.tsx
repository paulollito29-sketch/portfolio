import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, Github, Linkedin, AlertCircle, CheckCircle2, Loader2 } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    // Simulate send
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent-400 mb-3">
            Contacto
          </span>
          <h2 className="section-title">
            Hablemos sobre tu{" "}
            <span className="text-gradient">próximo proyecto</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-accent-500 to-teal-400" />
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            ¿Tienes un proyecto en mente o quieres colaborar? Estoy abierto a nuevas 
            oportunidades y siempre dispuesto a conversar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <a
              href="mailto:paulespinoza951@gmail.com"
              className="glass-card rounded-2xl p-6 flex items-center gap-4 group transition-all"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent-500/10 shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5 text-accent-400" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Email</div>
                <div className="text-white font-medium group-hover:text-accent-400 transition-colors">
                  paulespinoza951@gmail.com
                </div>
              </div>
            </a>

            <a
              href="https://wa.me/51906920958"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-6 flex items-center gap-4 group transition-all"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent-500/10 shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 text-accent-400" />
              </div>
              <div>
                <div className="text-sm text-gray-500">WhatsApp / Teléfono</div>
                <div className="text-white font-medium group-hover:text-accent-400 transition-colors">
                  +51 906 920 958
                </div>
              </div>
            </a>

            <div className="flex gap-3">
              <a
                href="https://github.com/paulollito29-sketch"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-xl glass text-gray-400 hover:text-accent-400 hover:border-accent-500/30 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/paulo-espinoza9/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-xl glass text-gray-400 hover:text-accent-400 hover:border-accent-500/30 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h4 className="text-sm font-semibold text-white mb-3">
                Disponibilidad
              </h4>
              <div className="flex items-center gap-2 text-sm text-teal-400">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                Disponible para proyectos freelance
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-6 md:p-8 space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                autoComplete="name"
                className="w-full px-4 py-3 rounded-xl bg-dark-700 border border-dark-600 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 transition-all"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                autoComplete="email"
                className="w-full px-4 py-3 rounded-xl bg-dark-700 border border-dark-600 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 transition-all"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                autoComplete="off"
                className="w-full px-4 py-3 rounded-xl bg-dark-700 border border-dark-600 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 transition-all resize-none"
                placeholder="Cuéntame sobre tu proyecto..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                status === "sent"
                  ? "bg-teal-500 text-white"
                  : "bg-accent-500 text-white hover:bg-accent-600 hover:shadow-lg hover:shadow-accent-500/25"
              } disabled:opacity-70 active:scale-95`}
            >
              {status === "idle" && (
                <>
                  <Send className="w-4 h-4" />
                  Enviar mensaje
                </>
              )}
              {status === "sending" && (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Enviando...
                </>
              )}
              {status === "sent" && (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  Mensaje enviado
                </>
              )}
              {status === "error" && (
                <>
                  <AlertCircle className="w-4 h-4" />
                  Error al enviar
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
