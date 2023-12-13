import Link from "next/link";
import { Button } from "./ui/button";

const Cta = () => {
  return (
    <section className="mb-12 lg:mb-36">
      <div className="container mx-auto">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="section-title mb-8 lg:mb-12 text-center mx-auto">
            Get in Touch
          </h2>
          <p className="h3 mb-4">
            Let's connect! Feel free to reach out if you have any questions,
            opportunities, or just want to say hello.
          </p>
          <Link href="/contact">
            <Button className="text-sm">Contact Me</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
