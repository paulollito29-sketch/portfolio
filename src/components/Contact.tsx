import { useState } from "react";
import { Send, Mail, Phone, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-mono font-bold tracking-[0.15em] uppercase text-accent mb-3">
            // CONTACTO
          </span>
          <h2 className="section-title font-mono">HABLEMOS</h2>
          <div className="mx-auto mt-4 h-[4px] w-16 bg-accent" />
          <p className="font-mono text-fg-muted mt-4 max-w-lg mx-auto">
            ¿Tienes un proyecto en mente? Estoy abierto a nuevas oportunidades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact info */}
          <div className="space-y-4">
            <a
              href="mailto:paulespinoza951@gmail.com"
              className="brutalist-card p-6 flex items-center gap-4 group"
            >
              <div className="flex items-center justify-center w-12 h-12 border-[3px] border-border bg-bg-alt shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-fg-muted">EMAIL</div>
                <div className="font-mono font-bold text-fg text-sm">
                  paulespinoza951@gmail.com
                </div>
              </div>
            </a>

            <a
              href="https://wa.me/51906920958"
              target="_blank"
              rel="noopener noreferrer"
              className="brutalist-card p-6 flex items-center gap-4 group"
            >
              <div className="flex items-center justify-center w-12 h-12 border-[3px] border-border bg-bg-alt shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-fg-muted">WHATSAPP</div>
                <div className="font-mono font-bold text-fg text-sm">
                  +51 906 920 958
                </div>
              </div>
            </a>

            <div className="flex gap-3">
              <a
                href="https://github.com/paulollito29-sketch"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 border-[3px] border-border bg-bg-alt font-bold hover:bg-fg hover:text-bg transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/paulo-espinoza9/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 border-[3px] border-border bg-bg-alt font-bold hover:bg-fg hover:text-bg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <div className="border-[3px] border-border bg-card p-6">
              <h4 className="text-xs font-mono font-bold text-fg mb-3 uppercase">
                DISPONIBILIDAD
              </h4>
              <div className="flex items-center gap-2 text-sm font-mono text-green-600">
                <span className="w-2 h-2 rounded-full bg-green-600" />
                Disponible para proyectos freelance
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="border-[3px] border-border bg-card p-6 md:p-8 space-y-5">
            <div>
              <label htmlFor="name" className="block text-xs font-mono font-bold text-fg mb-1.5 uppercase">
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
                className="w-full px-4 py-3 border-[3px] border-border bg-bg font-mono text-sm text-fg placeholder:text-fg-muted focus:outline-none focus:border-accent transition-colors"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-mono font-bold text-fg mb-1.5 uppercase">
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
                className="w-full px-4 py-3 border-[3px] border-border bg-bg font-mono text-sm text-fg placeholder:text-fg-muted focus:outline-none focus:border-accent transition-colors"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono font-bold text-fg mb-1.5 uppercase">
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
                className="w-full px-4 py-3 border-[3px] border-border bg-bg font-mono text-sm text-fg placeholder:text-fg-muted focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Cuéntame sobre tu proyecto..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 font-mono font-bold text-sm uppercase border-[3px] border-border transition-all disabled:opacity-70 ${
                status === "sent"
                  ? "bg-green-600 text-white"
                  : "bg-fg text-bg hover:bg-accent"
              }`}
            >
              {status === "idle" && <>
                <Send className="w-4 h-4" />
                ENVIAR MENSAJE
              </>}
              {status === "sending" && <>
                ENVIANDO...
              </>}
              {status === "sent" && <>
                MENSAJE ENVIADO ✓
              </>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
