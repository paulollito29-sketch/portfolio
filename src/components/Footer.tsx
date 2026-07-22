import { motion } from "framer-motion";
import { Code2, Heart } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-t border-dark-600/50 py-8 px-6"
    >
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Code2 className="w-4 h-4 text-accent-400" />
          <span>
            Built with <Heart className="w-3 h-3 inline text-red-400 fill-red-400" /> by{" "}
            <span className="text-gray-300 font-medium">Paulo Espinoza</span>
          </span>
        </div>
        <div className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Todos los derechos reservados.
        </div>
      </div>
    </motion.footer>
  );
}
