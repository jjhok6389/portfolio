import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Awards } from "./components/Awards";
import { Projects } from "./components/Projects";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Awards />
      <Projects />
    </div>
  );
}
