import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const ServicesData = [
  {
    icon: <GanttChartSquare size={72} StrokeWidth={0.8} />,
    title: "Web Design",
    description:
      "Crafting user-friendly and visually stunning web interfaces to leave a lasting impression on your audience.",
  },
  {
    icon: <Blocks size={72} StrokeWidth={0.8} />,
    title: "Web Development",
    description:
      "Building robust and scalable web applications using cutting-edge technologies for a seamless digital experience.",
  },
  {
    icon: <Gem size={72} StrokeWidth={0.8} />,
    title: "Figma to Web",
    description:
      "Transforming Figma designs into captivating and responsive web applications, bringing your creative vision to life online.",
  },
];

const Services = () => {
  return (
    <section className="mt-32 mb-12 lg:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 lg:mb-24 text-center mx-auto">
          My Services
        </h2>
        <div className="grid lg:grid-cols-3 justify-center gap-y-12 lg:gap-y-24 lg:gap-x-8">
          {ServicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[400px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <CardTitle>{item.title} </CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
