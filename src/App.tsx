import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";

function ScrollToTop({ visible }: { visible: boolean }) {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0 })}
      className="fixed bottom-6 right-6 z-50 w-10 h-10 bg-zinc-900 text-white text-sm flex items-center justify-center hover:bg-zinc-700 transition-colors"
      aria-label="Volver arriba"
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none", transition: "opacity 0.2s" }}
    >
      ↑
    </button>
  );
}

export default function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop visible={showScroll} />
    </div>
  );
}
