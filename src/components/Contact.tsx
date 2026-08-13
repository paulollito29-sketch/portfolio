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
    <section id="contact" className="section-pad">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs text-zinc-400 mb-4 uppercase tracking-wider">Contacto</p>
        <h2 className="text-2xl font-bold mb-8">Hablemos</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <a href="mailto:paulespinoza951@gmail.com" className="flex items-center gap-4 group">
              <div className="w-10 h-10 bg-zinc-50 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-zinc-400" />
              </div>
              <div>
                <div className="text-xs text-zinc-400">Email</div>
                <div className="text-sm font-medium group-hover:text-zinc-500 transition-colors">paulespinoza951@gmail.com</div>
              </div>
            </a>

            <a href="https://wa.me/51906920958" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <div className="w-10 h-10 bg-zinc-50 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-zinc-400" />
              </div>
              <div>
                <div className="text-xs text-zinc-400">WhatsApp</div>
                <div className="text-sm font-medium group-hover:text-zinc-500 transition-colors">+51 906 920 958</div>
              </div>
            </a>

            <div className="flex gap-3">
              <a href="https://github.com/paulollito29-sketch" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-zinc-50 flex items-center justify-center text-zinc-400 hover:text-zinc-900 transition-colors" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/paulo-espinoza9/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-zinc-50 flex items-center justify-center text-zinc-400 hover:text-zinc-900 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <div>
              <p className="text-xs text-zinc-400 mb-1">Disponibilidad</p>
              <div className="flex items-center gap-2 text-sm text-green-600">
                <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
                Disponible para proyectos freelance
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs text-zinc-400 mb-1">Nombre</label>
              <input id="name" name="name" type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="w-full px-3 py-2 text-sm border border-zinc-200 focus:outline-none focus:border-zinc-400 transition-colors" placeholder="Tu nombre" />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs text-zinc-400 mb-1">Email</label>
              <input id="email" name="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="w-full px-3 py-2 text-sm border border-zinc-200 focus:outline-none focus:border-zinc-400 transition-colors" placeholder="tu@email.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs text-zinc-400 mb-1">Mensaje</label>
              <textarea id="message" name="message" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required className="w-full px-3 py-2 text-sm border border-zinc-200 focus:outline-none focus:border-zinc-400 transition-colors resize-none" placeholder="Tu mensaje..." />
            </div>
            <button type="submit" disabled={status === "sending" || status === "sent"} className="w-full px-4 py-2.5 bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-700 transition-colors disabled:opacity-50">
              {status === "idle" && "Enviar mensaje"}
              {status === "sending" && "Enviando..."}
              {status === "sent" && "Mensaje enviado ✓"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
