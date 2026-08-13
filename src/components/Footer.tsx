import { Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t-[3px] border-border py-8 px-6">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm font-mono text-fg-muted">
          <div className="w-6 h-6 border-2 border-border flex items-center justify-center">
            <Code2 className="w-3 h-3 text-accent" />
          </div>
          <span>
            HECHO CON{" "}
            <span className="text-accent font-bold">♥</span>{" "}
            POR <span className="text-fg font-bold">PAULO ESPINOZA</span>
          </span>
        </div>
        <div className="text-sm font-mono text-fg-muted">
          © {new Date().getFullYear()} TODOS LOS DERECHOS RESERVADOS
        </div>
      </div>
    </footer>
  );
}
