"use client";

import { ArrowRightIcon, Mail, MessageSquareDashed, User } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const Form = () => {
  return (
    <form className="flex flex-col gap-y-4">
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="Your Name" />
        <User className="absolute right-6 " />
      </div>
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="Your Email" />
        <Mail className="absolute right-6 " />
      </div>
      <div className="relative flex items-center">
        <Textarea
          type="text"
          id="text"
          placeholder="Type your message here ......"
              />
              <MessageSquareDashed className="absolute right-6 " />
      </div>
      <Button className="flex items-center justify-center gap-x-1 max-w-[180px]">
        Let's Start
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
