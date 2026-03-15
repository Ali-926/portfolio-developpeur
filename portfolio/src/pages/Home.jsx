import { lazy, Suspense } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import ScrollProgress from "../components/ScrollProgress";
import ScrollTopButton from "../components/ScrollTopButton";

const Skills = lazy(() => import("../components/Skills"));
const Projects = lazy(() => import("../components/Projects"));
const Contact = lazy(() => import("../components/Contact"));

function Home() {
  return (
    <>
      <header>
        <ScrollProgress />
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
        <ScrollTopButton />
      </main>
    </>
  );
}

export default Home;
