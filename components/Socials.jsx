"use client";
import Link from "next/link";
import { RiFacebookFill, RiGithubFill, RiLinkedinFill, RiTwitterXFill } from "react-icons/ri";

const icons = [
  {
    path: "https://github.com/Shakilofficial",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.linkedin.com/in/md-shakilhossain",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://www.facebook.com/iamshakilhossain",
    name: <RiFacebookFill />,
  },
  {
    path: "https://twitter.com/creative_shakil",
    name: <RiTwitterXFill />,
  },
];
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconStyles}`}>{icon.name} </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
