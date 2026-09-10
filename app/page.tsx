import About from "./components/About";
import FadeIn from "./components/animations/FadeIn";
import Certificates from "./components/Certifications";
import EducationPage from "./components/EducationPage";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import TechStack from "./components/TechStack";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 lg:py-16 lg:flex lg:gap-16 items-start">
      <FadeIn
        delay={0.1}
        className="w-full lg:w-1/3 lg:shrink-0 lg:sticky lg:top-16"
      >
        <Sidebar />
      </FadeIn>

      <main className="w-full lg:w-2/3 space-y-12 mt-10 lg:mt-0">
        <FadeIn delay={0.2}>
          <About />
        </FadeIn>

        <FadeIn delay={0.3}>
          <Projects />
        </FadeIn>
        <FadeIn delay={0.4}>
          <Certificates />
        </FadeIn>
        <FadeIn delay={0.5}>
          <TechStack />
        </FadeIn>

        <footer className="pt-6 border-t border-brand-border flex items-center justify-between text-xs font-mono text-brand-muted">
          <p>Built with passion and curiosity.</p>
          <p>© 2026 Annol</p>
        </footer>
      </main>
    </div>
  );
}
