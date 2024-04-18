import { Main, Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import Hero from "@/components/hero";
import Feature from "@/components/feature";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <Main>
      <Hero />
      <Feature />
      <Testimonials />
    </Main>
  );
}
