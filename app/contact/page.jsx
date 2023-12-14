import Form from "@/components/Form";
import { HomeIcon, MailIcon, PhoneCall } from "lucide-react";
export const metadata = {
    title: "Contact | Md Shakil Hossain",
    description: "Created by Md Shakil Hossain",
};
  
const Contact = () => {
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 pt-12 h-[480px] mb-6 lg:mb-24">
          <div className="max-w-xl mx-auto text-center flex flex-col justify-center items-center">
            <h2 className="section-title mb-8 lg:mb-12 text-center mx-auto">
              Let's Work Together
            </h2>
            <p className="h3 mb-4">
              Ready to turn ideas into reality? Let's start a conversation!
              Whether you have a project in mind. I'm here and excited to hear
              from you.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        <div className="grid lg:grid-cols-2 mb-24 lg:mb-28">
          <div className="flex flex-col gap-y-4 lg:gap-y-12 mb-12 lg:mb-20 text-base xl:text-lg">
            <div className="flex items-center gap-x-4">
              <MailIcon size={18} className="text-primary" />
              <div>youremail@example.com</div>
            </div>
            <div className="flex items-center gap-x-4">
              <HomeIcon size={18} className="text-primary" />
              <div>CollegePara, Tangail Sadar, Dhaka</div>
            </div>
            <div className="flex items-center gap-x-4">
              <PhoneCall size={18} className="text-primary" />
              <div>+880 1620521215</div>
            </div>
          </div>
          <Form>Form</Form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
