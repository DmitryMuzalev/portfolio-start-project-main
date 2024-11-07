import { About } from "./About";
import { Contacts } from "./Contacts";
import { Hero } from "./Hero";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

function Main() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contacts />
    </main>
  );
}

export { Main };
