import About from "@/components/About";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
export const metadata = {
  title: "Home | Md Shakil Hossain",
  description: "Created by Md Shakil Hossain",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Work />
      <Cta />
    </main>
  );
}
