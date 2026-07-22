import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Brain, Sparkles, Terminal } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Formación",
    desc: "6to ciclo de Ingeniería de Sistemas de Información en la Universidad Peruana de Ciencias Aplicadas (UPC).",
  },
  {
    icon: Terminal,
    title: "Full Stack",
    desc: "Experiencia tanto en frontend como backend, construyendo aplicaciones completas y escalables.",
  },
  {
    icon: Brain,
    title: "Resolución de problemas",
    desc: "Enfoque analítico para resolver desafíos complejos con código limpio y eficiente.",
  },
  {
    icon: Sparkles,
    title: "AI-Assisted Dev",
    desc: "Integración de herramientas de IA para acelerar el desarrollo sin sacrificar calidad.",
  },
];

const stats = [
  { value: 6, suffix: "to", label: "Ciclo" },
  { value: 10, suffix: "+", label: "Tecnologías" },
  { value: 15, suffix: "+", label: "Proyectos" },
];

// Animated counter
function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const steps = 30;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-2xl font-bold text-gradient">
      {count}
      {suffix}
    </div>
  );
}

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.1em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-block text-xs font-semibold tracking-[0.1em] uppercase text-accent-400 mb-3"
          >
            Acerca de mí
          </motion.span>
          <h2 className="section-title">
            Conoce un poco sobre{" "}
            <span className="text-gradient">mi trayectoria</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-accent-500 to-teal-400" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar / illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Glow behind */}
              <div className="absolute inset-0 rounded-full bg-accent-500/20 blur-3xl animate-pulse" />
              {/* Avatar container */}
              <div className="relative w-full h-full rounded-full overflow-hidden glow-border">
                <div className="w-full h-full bg-gradient-to-br from-accent-500/20 via-dark-700 to-teal-500/20 flex items-center justify-center">
                  <span className="text-6xl font-black text-gradient">PE</span>
                </div>
              </div>
              {/* Orbiting dots */}

              <motion.div
                className="absolute -inset-4 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ border: "1px dashed rgba(99, 102, 241, 0.15)" }}
              >
                {[0, 60, 120, 180, 240, 300].map((deg) => (
                  <div
                    key={deg}
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{ transform: `rotate(${deg}deg) translateY(-2px)` }}
                  >
                    <motion.div
                      className="w-2 h-2 rounded-full bg-accent-400 shadow-lg shadow-accent-400/50"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: deg / 60 }}
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {[
              "Soy un apasionado desarrollador de software en formación, actualmente cursando el 6to ciclo de la carrera de Ingeniería de Sistemas de Información en la Universidad Peruana de Ciencias Aplicadas (UPC).",
              "Me especializo en el desarrollo de aplicaciones web usando tecnologías modernas tanto del lado del servidor como del cliente. Disfruto crear soluciones robustas y elegantes.",
              "Además del desarrollo tradicional, integro el desarrollo asistido con IA en mi flujo de trabajo para ser más productivo y resolver problemas de manera más eficiente.",
            ].map((text, i) => (
              <motion.p
                key={i}
                custom={i}
                variants={staggerItem}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className={i === 0 ? "text-gray-300 text-lg leading-relaxed" : "text-gray-400 leading-relaxed"}
              >
                {text}
              </motion.p>
            ))}

            {/* Stats with counting animation */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  custom={i + 3}
                  variants={staggerItem}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-4 rounded-xl glass-card cursor-default"
                >
                  <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlights grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={staggerItem}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <motion.div
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent-500/10 text-accent-400 mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <item.icon className="w-6 h-6" />
              </motion.div>
              <h3 className="font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
