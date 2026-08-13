import { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre mí", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Proyectos", href: "#projects" },
  { label: "Certificados", href: "#certificates" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg border-b-[3px] border-border">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleClick("#hero"); }}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 bg-accent border-[3px] border-border flex items-center justify-center">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg font-mono tracking-tight">
              PAULO<span className="text-accent">.</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                className="px-3 py-2 text-sm font-mono font-bold uppercase hover:bg-accent hover:text-white transition-colors border-[3px] border-transparent hover:border-border"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-50 p-2 border-[3px] border-border bg-bg"
            aria-label="Menú"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-bg flex flex-col items-center justify-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
              className="text-2xl font-mono font-bold uppercase hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setMobileOpen(false)}
            className="mt-6 brutalist-btn px-6 py-3 text-sm"
          >
            Cerrar
          </button>
        </div>
      )}
    </>
  );
}
