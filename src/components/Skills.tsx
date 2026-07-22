import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Server, Globe, Database, Wrench, ChevronRight } from "lucide-react";

const categories = [
  {
    id: "backend",
    label: "Backend",
    icon: Server,
    skills: [
      { name: "Java (Spring Boot)", level: 90 },
      { name: "C# (.NET Framework)", level: 85 },
      { name: "REST APIs", level: 88 },
      { name: "Entity Framework", level: 80 },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: Globe,
    skills: [
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "JavaScript / TypeScript", level: 85 },
      { name: "Bootstrap / Tailwind", level: 82 },
    ],
  },
  {
    id: "database",
    label: "Bases de Datos",
    icon: Database,
    skills: [
      { name: "SQL Server", level: 85 },
      { name: "MariaDB / MySQL", level: 80 },
      { name: "SQL / Consultas", level: 88 },
    ],
  },
  {
    id: "tools",
    label: "Herramientas",
    icon: Wrench,
    skills: [
      { name: "Git / GitHub", level: 85 },
      { name: "Desarrollo con IA", level: 92 },
      { name: "VS Code / IntelliJ", level: 88 },
      { name: "Docker (básico)", level: 70 },
    ],
  },
];

export default function Skills() {
  const [active, setActive] = useState(categories[0].id);

  const activeCategory = categories.find((c) => c.id === active)!;

  return (
    <section id="skills" className="section-padding relative gradient-bg">
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
            Mis habilidades
          </span>
          <h2 className="section-title">
            Tecnologías que{" "}
            <span className="text-gradient">domino</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-accent-500 to-teal-400" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Category tabs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 shrink-0"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`relative flex items-center gap-3 px-5 py-3.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  active === cat.id
                    ? "text-white bg-accent-500/10 border border-accent-500/20 shadow-lg shadow-accent-500/5"
                    : "text-gray-400 hover:text-gray-200 hover:bg-dark-700/50 border border-transparent"
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
                {active === cat.id && (
                  <ChevronRight className="w-3.5 h-3.5 text-accent-400 hidden lg:block ml-auto" />
                )}
              </button>
            ))}
          </motion.div>

          {/* Skills list */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl p-6 md:p-8"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent-500/10">
                    <activeCategory.icon className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{activeCategory.label}</h3>
                    <p className="text-xs text-gray-500">
                      {activeCategory.skills.length} tecnologías
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {activeCategory.skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-200">
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono text-accent-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="skill-bar h-2.5 rounded-full bg-dark-600">
                        <motion.div
                          className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-accent-500 to-teal-400"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: i * 0.15, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
