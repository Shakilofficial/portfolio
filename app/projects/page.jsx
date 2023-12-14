"use client";

import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

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

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");
  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="section-title mb-8 lg:mb-12 text-center mx-auto">
            My Projects
          </h2>
          <p className="h4 mb-8">
            Check out some of my recent projects below. Each one is a labor of
            love, showcasing my skills and passion for creating innovative
            solutions. Explore, enjoy, and feel free to reach out with any
            questions!
          </p>
        </div>
        <Tabs defaultValue={category}>
          <TabsList className="flex justify-center items-center">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  key={index}
                  value={category}
                  className="capitalize"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-10">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
