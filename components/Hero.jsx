import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
// import { RiBriefcase4Fill, RiTeamFill, RiTodoFill } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";
const CV = "/public/personal/Resume of Md. Shakil Hossain.pdf";
import DevImg from "./DevImg";

import Link from "next/link";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 lg:py-24 h-[84vh] lg:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col text-center justify-center mx-auto lg:mx-0 lg:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1 mb-4">
              Hello, I'm <br />
              Shakil Hossain
            </h1>
            <p className="subtitle max-w-[490px] mx-auto lg:mx-0">
              Junior MERN Developer aspiring to become a Full Stack Senior MERN
              Developer with expertise in Next.js. I'm eager to contribute my
              skills in any field.
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto lg:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact Me <Send size={18} />
                </Button>
              </Link>
              <a href={CV} download>
                <Button variant="secondary" className="gap-x-2">
                  Download CV <Download size={18} />
                </Button>
              </a>
            </div>
            <Socials
              containerStyles="flex gap-x-6 mx-auto lg:mx-0"
              iconStyles="text-foreground text-[24px] hover:text-primary transition-all"
            />
          </div>
          <div className="hidden lg:flex relative">
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2">
              <DevImg
                containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
                imgSrc="/personal/hero-img.png"
              />
            </div>
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 lg:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-4xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
