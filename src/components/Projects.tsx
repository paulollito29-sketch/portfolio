import { useState, useRef, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Code2, Building2, Gamepad2, Database } from "lucide-react";

const projects = [
  {
    title: "Vault Vintage",
    desc: "Sistema de gestión de inventario para tienda de ropa vintage con autenticación de usuarios y reportes.",
    tags: ["Java", "Spring Boot", "SQL Server", "Thymeleaf"],
    icon: Building2,
    category: "fullstack",
    color: "from-accent-500 to-purple-500",
  },
  {
    title: "ConstruPro",
    desc: "Plataforma de gestión de proyectos de construcción con seguimiento de presupuestos y materiales.",
    tags: ["C#", ".NET Framework", "SQL Server", "Entity Framework"],
    icon: Building2,
    category: "fullstack",
    color: "from-teal-400 to-blue-500",
  },
  {
    title: "Store Backend",
    desc: "API RESTful para tienda en línea con microservicios, autenticación JWT y documentación con Swagger.",
    tags: ["Java", "Spring Boot", "JWT", "JPA", "MySQL"],
    icon: Code2,
    category: "backend",
    color: "from-orange-400 to-red-500",
  },
  {
    title: "Flappy Bird Clone",
    desc: "Clon clásico del juego Flappy Bird desarrollado en C# con Windows Forms y física básica.",
    tags: ["C#", "Windows Forms", "Game Dev"],
    icon: Gamepad2,
    category: "game",
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "LimaSync",
    desc: "Aplicación web para sincronización de horarios y gestión de eventos en Lima Metropolitana.",
    tags: ["Next.js", "React", "TypeScript", "Bootstrap"],
    icon: Code2,
    category: "frontend",
    color: "from-pink-400 to-purple-500",
  },
  {
    title: "Nutrigo",
    desc: "App para seguimiento nutricional con cálculos de calorías, macros y planes de alimentación personalizados.",
    tags: ["React", "TypeScript", "Vite", "Tailwind"],
    icon: Database,
    category: "fullstack",
    color: "from-green-400 to-teal-500",
  },
];

const categories = [
  { id: "all", label: "Todos" },
  { id: "fullstack", label: "Full Stack" },
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
  { id: "game", label: "Juegos" },
];

const tagColors: Record<string, string> = {
  Java: "bg-orange-500/10 text-orange-300 border-orange-500/20",
  "Spring Boot": "bg-green-500/10 text-green-300 border-green-500/20",
  "SQL Server": "bg-red-500/10 text-red-300 border-red-500/20",
  "C#": "bg-purple-500/10 text-purple-300 border-purple-500/20",
  ".NET Framework": "bg-blue-500/10 text-blue-300 border-blue-500/20",
  "Entity Framework": "bg-blue-500/10 text-blue-300 border-blue-500/20",
  Thymeleaf: "bg-teal-500/10 text-teal-300 border-teal-500/20",
  JWT: "bg-yellow-500/10 text-yellow-300 border-yellow-500/20",
  JPA: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
  MySQL: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  "Windows Forms": "bg-sky-500/10 text-sky-300 border-sky-500/20",
  "Game Dev": "bg-pink-500/10 text-pink-300 border-pink-500/20",
  "Next.js": "bg-gray-500/10 text-gray-300 border-gray-500/20",
  React: "bg-blue-500/10 text-blue-300 border-blue-500/20",
  TypeScript: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
  Bootstrap: "bg-violet-500/10 text-violet-300 border-violet-500/20",
  Vite: "bg-yellow-500/10 text-yellow-300 border-yellow-500/20",
  Tailwind: "bg-teal-500/10 text-teal-300 border-teal-500/20",
};

// 3D Tilt card component
function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    const card = ref.current;
    if (!card) return;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ transition: "transform 0.15s ease-out", transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding relative">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent-400 mb-3">
            Portafolio
          </span>
          <h2 className="section-title">
            Mis <span className="text-gradient">proyectos</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-accent-500 to-teal-400" />
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === cat.id
                  ? "text-white bg-accent-500/15 border border-accent-500/25"
                  : "text-gray-400 hover:text-gray-200 border border-transparent hover:border-dark-600"
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <TiltCard className="glass-card rounded-2xl overflow-hidden group h-full">
                  {/* Header gradient */}
                  <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                  <div className="p-6" style={{ transformStyle: "preserve-3d" }}>
                    {/* Icon */}
                    <div className="flex items-center gap-3 mb-4" style={{ transform: "translateZ(30px)" }}>
                      <motion.div
                        className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent-500/10"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <project.icon className="w-5 h-5 text-accent-400" />
                      </motion.div>
                      <h3 className="font-semibold text-white group-hover:text-accent-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-sm text-gray-400 leading-relaxed mb-5" style={{ transform: "translateZ(20px)" }}>
                      {project.desc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5" style={{ transform: "translateZ(15px)" }}>
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-[11px] px-2.5 py-1 rounded-full border font-medium ${
                            tagColors[tag] || "bg-dark-600 text-gray-300 border-dark-500"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-2 border-t border-dark-600" style={{ transform: "translateZ(10px)" }}>
                      <motion.button
                        whileHover={{ x: 3 }}
                        className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-accent-400 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Código
                      </motion.button>
                      <motion.button
                        whileHover={{ x: 3 }}
                        className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-accent-400 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Demo
                      </motion.button>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
