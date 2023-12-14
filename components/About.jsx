import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  SiCss3,
  SiExpress,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
} from "lucide-react";
import Image from "next/image";
const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Md Shakil Hossain",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+8801620521215",
  },
  {
    icon: <MailIcon size={20} />,
    text: "mrshakilhossain@outlook.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 4 March, 1999",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelor of Computer Science & Engineering (CSE)",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Dhaka, Bangladesh",
  },
];
const qualificationData = [
  {
    title: "education",
    data: [
      {
        institute: "Haji Abul Hossain Institute of Technology",
        board: "National University",
        qualification: "Bachelor of Computer Science & Engineering (CSE)",
        years: "2017-2022",
        result: "CGPA- 3.28",
      },
      {
        institute: "Major General Mahmudul Hasan College",
        board: "Dhaka Board",
        qualification: "Higher School Certificate(HSC)",
        years: "2015-2016",
        result: "GPA- 4.25",
      },
      {
        institute: "Velayet Hossain Bahumukhi High School",
        board: "Dhaka Board",
        qualification: "Secondary School Certificate(SSC)",
        years: "2013-2014",
        result: "GPA- 5.00",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML",
        icon: <SiHtml5 />,
      },
      {
        name: "CSS",
        icon: <SiCss3 />,
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
      },
      {
        name: "React",
        icon: <SiReact />,
      },
      {
        name: "Firebase",
        icon: <SiFirebase />,
      },
      {
        name: "NextJS",
        icon: <SiNextdotjs />,
      },
      {
        name: "NodeJS",
        icon: <SiNodedotjs />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
      },
      {
        name: "ExpressJS",
        icon: <SiExpress />,
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
    ],
  },
];
const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="lg:h-[860px] pb-12 lg:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 text-center mx-auto">About Me</h2>
        <div className="flex">
          <div className="hidden lg:flex flex-1 ">
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat relative">
              <DevImg
                containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat absolute"
                imgSrc="/personal/hero-img.png"
              />
            </div>
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="flex justify-center items-center">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="qualification">Qualification</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 lg:mt-8">
                <TabsContent value="personal">
                  <div className="text-center lg:text-left">
                    <h3 className="h3 mb-4">
                      Navigating Life with Purpose, Passion, and Perseverance
                    </h3>
                    <p className="mb-4">
                      I'm eager to contribute my skills and ideas to drive the
                      company's growth. Excited about making meaningful
                      contributions to our success.
                    </p>
                    <div className="grid lg:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto lg:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="">
                      <h4 className="h4">Language Skills</h4>
                      <div className="border-b border-border mb-2"> </div>
                      <div className="flex gap-2 mb-2">
                        <p>Proficient in Bengali,</p>
                        <p>Fluent in English</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualification">
                  <div>
                    <h3 className="h3 mb-4 text-center lg:text-left">
                      My Educational Qualification
                    </h3>
                    <div>
                      {getData(qualificationData, "education").data.map(
                        (item, index) => {
                          const {
                            institute,
                            board,
                            qualification,
                            years,
                            result,
                          } = item;
                          return (
                            <div className="flex gap-x-8 group:" key={index}>
                              <div className="h-[84px] w-[1px] bg-border relative ml-2 ">
                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                              </div>
                              <div className="py-2 space-y-1">
                                <h4 className="h4 text-primary">
                                  <span className="flex gap-x-1 justify-self items-center text-left">
                                    <GraduationCap size={20} /> {qualification}
                                  </span>
                                </h4>
                                <p className="flex gap-x-1 text-base">
                                  <span className="text-primary">
                                    Institute :
                                  </span>
                                  {institute}
                                </p>
                                <p className="flex gap-x-1 text-base">
                                  <span className="text-primary">Board :</span>
                                  {board}
                                </p>
                                <p className="flex gap-x-1 text-base">
                                  <span className="text-primary">
                                    Session :
                                  </span>
                                  {years}
                                </p>
                                <p className="flex gap-x-1 text-base">
                                  <span className="text-primary">Result :</span>
                                  {result}
                                </p>
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="">
                    <h3 className="h3 mb-4 text-center lg:text-left">
                      Development Tools I Use Everyday
                    </h3>
                    <div>
                      <h4 className="h4 font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-2"> </div>
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 my-6">
                        {getData(skillData, "skills").data.map(
                          (item, index) => {
                            const { name, icon } = item;
                            return (
                              <div
                                className="w-36 mx-auto h-24 border-2 rounded-lg hover:shadow-sm p-2"
                                key={index}
                              >
                                <div className="h3 text-primary text-center">
                                  <h3 className="mb-2 text-5xl flex justify-center items-center">
                                    {icon}
                                  </h3>
                                  <h3 className="text-lg">{name}</h3>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                      <h4 className="h4 font-semibold my-2">Tools</h4>
                      <div className="border-b border-border mb-2"> </div>
                      <div
                        className="flex gap-2
                      "
                      >
                        {getData(skillData, "tools").data.map((item, index) => {
                          return (
                            <div
                              className="w-24 h-24 border-2 border-primary rounded-full flex justify-center items-center"
                              key={index}
                            >
                              <Image
                                className=""
                                src={item.imgPath}
                                height={36}
                                width={48}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
