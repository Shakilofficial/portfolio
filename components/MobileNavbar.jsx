import Logo from "./Logo";
import Navbar from "./Navbar";
import Socials from "./Socials";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { AlignJustify } from "lucide-react";

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Navbar
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-2xl font-semibold"
            />
            <Socials
              containerStyles="flex items-center gap-x-6"
              iconStyles="text-2xl font-semibold"
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
