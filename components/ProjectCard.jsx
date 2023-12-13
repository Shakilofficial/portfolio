"use-client";
import { Card, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { GitBranch, Github, Globe } from "lucide-react";
import { SiGithubactions, SiGithubpages } from "react-icons/si";
const ProjectCard = ({ project }) => {
  const { name, description, category, image, live, client, server } = project;

  return (
    <Card className="">
      <CardHeader>
        <div className="w-full h-[300px] flex justify-center items-center">
          <img src={image} alt={name} className="w-full h-[300px] mb-4" />
        </div>
      </CardHeader>
      <div className="p-4">
        <Badge className="uppercase text-sm font-medium mb-2">{category}</Badge>
        <h4 className="h4 mb-1">{name} </h4>
        <p className="text-muted-foreground text-lg">{description} </p>
      </div>
        <CardFooter className="flex gap-4 justify-center items-center text-xl">
          <Link href={live}>
            <Globe className="text-primary" />
          </Link>
          <Link href={client}>
            <Github className="text-primary" />
          </Link>
          {server && (
            <Link href={client}>
              <GitBranch className="text-primary" />
            </Link>
          )}
        </CardFooter>
    </Card>
  );
};

export default ProjectCard;
