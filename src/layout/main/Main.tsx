import { Hero } from "../hero/Hero";
import { About } from "../about/About";
import { Projects } from "../projects/Projects";
import { Skills } from "../skills/Skills";
import { Contacts } from "../contacts/Contacts";

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
