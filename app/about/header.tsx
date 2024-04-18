import * as Craft from "@/components/craft";
import Balancer from "react-wrap-balancer";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <Craft.Section className="border-b">
      <Craft.Container>
        <h1>About Us</h1>
        <h2 className="text-muted-foreground">
          <Balancer>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptate quidem natus.
          </Balancer>
        </h2>
        <div className="flex gap-2 items-center mt-8">
          <Button>Get Started</Button>
          <Button variant={"outline"}>Learn More</Button>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default Header;
