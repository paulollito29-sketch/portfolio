import { useState } from "react";
import { Send, Mail, Phone, Github, Linkedin, CheckCircle2, MapPin, Calendar, Clock } from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactInteractive() {
  const [form, setForm] = useState({ name: "", email: "", company: "", reason: "Oportunidad Laboral / Sistemas", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("sent");

    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#06b6d4", "#ffffff", "#2563eb"],
      });
    } catch {
      // Ignore
    }

    setForm({ name: "", email: "", company: "", reason: "Oportunidad Laboral / Sistemas", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-8 py-12 relative z-10">
      {/* Flat Header */}
      <div className="mb-10 text-center sm:text-left border-b border-zinc-800 pb-5">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-1">
          COMUNICACIÓN OFICIAL
        </span>
        <h2 className="text-2xl sm:text-4xl font-display font-bold text-white uppercase tracking-tight">
          Contacto &amp; Contrataciones
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1">
          Canal directo de reclutamiento con Paulo Espinoza · Ingeniero de Sistemas de Información.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 items-start">
        {/* Recruiter Details Card (Flat) */}
        <div className="lg:col-span-5 bg-[#121215] border border-zinc-800 rounded-lg p-6 space-y-5">
          <div>
            <h3 className="font-display font-bold text-lg text-white uppercase mb-1">
              Disponibilidad de Contratación
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Disponible para incorporación en roles de <strong className="text-white">Ingeniería de Sistemas, Backend y Desarrollo Full Stack</strong>.
            </p>
          </div>

          {/* Recruitment Facts (Flat) */}
          <div className="space-y-2 p-3 rounded bg-[#09090b] border border-zinc-800 text-xs text-zinc-300 font-mono">
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span><strong>Disponibilidad:</strong> Inmediata</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span><strong>Modalidad:</strong> Remota o Híbrida (Lima, Perú)</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span><strong>Grado:</strong> Ing. de Sistemas de Información · UPC</span>
            </div>
          </div>

          {/* Direct Channels (Flat) */}
          <div className="space-y-2">
            <a
              href="mailto:paulespinoza951@gmail.com"
              className="flex items-center gap-3 p-3 rounded bg-[#09090b] border border-zinc-800 hover:border-zinc-700 transition-colors group"
            >
              <div className="w-8 h-8 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-400">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-zinc-500 uppercase">Email Corporativo</div>
                <div className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">
                  paulespinoza951@gmail.com
                </div>
              </div>
            </a>

            <a
              href="https://wa.me/51906920958"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded bg-[#09090b] border border-zinc-800 hover:border-zinc-700 transition-colors group"
            >
              <div className="w-8 h-8 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-zinc-500 uppercase">WhatsApp Directo</div>
                <div className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">
                  +51 906 920 958
                </div>
              </div>
            </a>
          </div>

          {/* Social Network Buttons (Flat) */}
          <div className="flex gap-2 pt-1">
            <a
              href="https://www.linkedin.com/in/paulo-espinoza9/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-3 rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-mono font-medium text-white flex items-center justify-center gap-1.5 transition-colors uppercase"
            >
              <Linkedin className="w-3.5 h-3.5 text-cyan-400" /> LinkedIn
            </a>

            <a
              href="https://github.com/paulollito29-sketch"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-3 rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-mono font-medium text-zinc-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors uppercase"
            >
              <Github className="w-3.5 h-3.5" /> GitHub
            </a>
          </div>
        </div>

        {/* Form Side (Flat) */}
        <div className="lg:col-span-7 bg-[#121215] border border-zinc-800 rounded-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="name" className="block text-xs font-mono uppercase text-zinc-400 mb-1">
                  Nombre del Contacto *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Ej. Carlos Mendoza"
                  className="w-full px-3 py-2 rounded bg-[#09090b] border border-zinc-800 focus:border-zinc-500 text-xs text-white placeholder:text-zinc-600 transition-colors outline-none"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-xs font-mono uppercase text-zinc-400 mb-1">
                  Empresa u Organización
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  placeholder="Ej. Tech Enterprise"
                  className="w-full px-3 py-2 rounded bg-[#09090b] border border-zinc-800 focus:border-zinc-500 text-xs text-white placeholder:text-zinc-600 transition-colors outline-none"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="email" className="block text-xs font-mono uppercase text-zinc-400 mb-1">
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
                  className="w-full px-3 py-2 rounded bg-[#09090b] border border-zinc-800 focus:border-zinc-500 text-xs text-white placeholder:text-zinc-600 transition-colors outline-none"
                />
              </div>

              <div>
                <label htmlFor="reason" className="block text-xs font-mono uppercase text-zinc-400 mb-1">
                  Motivo de Contacto
                </label>
                <select
                  id="reason"
                  name="reason"
                  value={form.reason}
                  onChange={(e) => setForm({ ...form, reason: e.target.value })}
                  className="w-full px-3 py-2 rounded bg-[#09090b] border border-zinc-800 focus:border-zinc-500 text-xs text-white transition-colors outline-none"
                >
                  <option value="Oportunidad Laboral / Sistemas">Oportunidad Laboral / Contratación</option>
                  <option value="Entrevista Técnica">Coordinar Entrevista Técnica</option>
                  <option value="Consultoría de Sistemas">Consultoría / Proyecto</option>
                  <option value="Consulta General">Consulta General</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono uppercase text-zinc-400 mb-1">
                Mensaje o Requerimiento *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Describe el rol, proyecto o propuesta..."
                className="w-full px-3 py-2 rounded bg-[#09090b] border border-zinc-800 focus:border-zinc-500 text-xs text-white placeholder:text-zinc-600 transition-colors outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className={`w-full py-3 px-5 rounded font-mono font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer ${
                status === "sent"
                  ? "bg-emerald-600 text-white"
                  : "bg-white hover:bg-cyan-400 text-black"
              } disabled:opacity-75`}
            >
              {status === "idle" && (
                <>
                  <Send className="w-3.5 h-3.5" /> Enviar Mensaje Directo
                </>
              )}
              {status === "sending" && (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  Enviando...
                </>
              )}
              {status === "sent" && (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5" /> Mensaje Enviado con Éxito
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
