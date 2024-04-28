import { Main } from "@/components/craft";
import Feature from "./features";
import Hero from "./hero";
import ValueProps from "./value-props";
import Contact from "./contact";

export default function Home() {
  return (
    <Main>
      <Hero />
      <Feature />
      <ValueProps />
      <Contact />
    </Main>
  );
}
