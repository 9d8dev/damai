import * as Craft from "@/components/craft";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import Placeholder from "@/public/home.png";

const Feature = () => {
  return (
    <Craft.Section className="border-b">
      <Craft.Container className="grid md:grid-cols-2 md:gap-12 items-stretch">
        <div className="flex flex-col gap-6">
          <h3 className="!my-0">
            Our dedication to excellence and meticulous matching process enables
            us to forge rewarding career connections.
          </h3>
          <p className="font-light leading-[1.4] opacity-70">
            At Damai Global, we specialize in identifying exceptional talent
            worldwide through a rigorous vetting process. Our mission is to
            connect these top-tier international professionals with US
            businesses seeking remote hires. What sets us apart is our
            personalized approach. We work closely with both international
            employees and US companies to create mutually beneficial
            partnerships, ensuring success through effective communication.
          </p>
          <div className="not-prose flex items-center gap-2">
            <Button className="w-fit" asChild>
              <Link href="#">Get Started</Link>
            </Button>
            <Button className="w-fit" variant="link" asChild>
              <Link href="#">Learn More</Link>
            </Button>
          </div>
        </div>
        <div className="not-prose border relative rounded-lg overflow-hidden flex h-96">
          <Image
            src={Placeholder}
            alt="placeholder"
            className="fill object-cover"
          />
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default Feature;
