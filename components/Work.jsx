"use-client";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { Button } from "./ui/button";

const projectData = [
  {
    image: "/project/cityScape.png",
    category: "mern",
    name: "City Scape",
    description:
      "Experience seamless engagement with user-centric features, robust security, and a responsive design. City Scape simplifies property management for transparent and efficient transactions.",
    live: "https://cityscape-93609.web.app",
    client: "https://github.com/Shakilofficial/city-scape-client",
    server: "https://github.com/Shakilofficial/city-scape-server",
  },
  {
    image: "/project/excess-eats.png",
    category: "mern",
    name: "Excess Eats",
    description:
      "Discover and request food, share surplus food. Easily post food listings to share your surplus food with others, manage your account, and report issues seamlessly on Excess Eats.It is a Community Food Sharing and Surplus Reduction Platform.",
    live: "https://excess-eats.web.app",
    client: "https://github.com/Shakilofficial/community-food-sharing-client",
    server: "https://github.com/Shakilofficial/community-food-sharing-server",
  },
  {
    image: "/project/brand-shop.png",
    category: "mern",
    name: "Brand Shop",
    description:
      "Specializes in seven categories, like Technology, for a focused user experience. Offers easy registration, product management, and seamless shopping with responsive design for desktop and mobile.",
    live: "https://illustrious-knife.surge.sh",
    client: "https://github.com/Shakilofficial/brand-shop-client",
    server: "https://github.com/Shakilofficial/-brand-shop-server",
  },
  {
    image: "/project/crispberry.png",
    category: "react",
    name: "CrispBerry",
    description:
      "Ensures secure authentication, unique design, and enhanced user experience. Customized design, navbar, banner, and alerts contribute to a modern and appealing interface.",
    live: "https://crispberry-events.web.app",
    client: "https://github.com/Shakilofficial/event-management",
  },
  {
    image: "/project/donation.png",
    category: "react",
    name: "Donation Campaign",
    description:
      "Easily search and donate to charitable causes. User-friendly design, dynamic navigation, and donation insights with a pie chart for a simple and impactful giving experience.",
    live: "https://abortive-start.surge.sh",
    client: "https://github.com/Shakilofficial/donation-campain",
  },
];

const Work = () => {
  return (
    <section className="mb-12 lg:mb-36">
      <div className="container mx-auto">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="section-title mb-8 lg:mb-12 text-center mx-auto">
            Recent Projects
          </h2>
          <p className="h4 mb-4">
            Explore My Work and Discover the Variety of Projects I've Worked On.
          </p>
          <Link href="/projects">
            <Button className="text-sm">All Projects</Button>
          </Link>
        </div>
        <div>
          <div className="my-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5 max-w-[400px] lg:max-w-[1020px] xl:max-w-[1260px] mx-auto">
            {projectData.slice(0, 4).map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
