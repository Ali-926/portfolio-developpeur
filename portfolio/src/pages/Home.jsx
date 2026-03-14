import { lazy, Suspense } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";

const Skills = lazy(() => import("../components/Skills"));
const Projects = lazy(() => import("../components/Projects"));
const Contact = lazy(() => import("../components/Contact"));

function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main aria-label="Contenu principal">
        <Hero />
        <About />

        <Suspense fallback={<div>Chargement...</div>}>
          <Skills />
          <Projects />
          <Contact />
        </Suspense>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Home;
