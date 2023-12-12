import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/personal/SLogo.png"
        width={60}
        height={60}
        priority
        alt="Logo"
      />
    </Link>
  );
};

export default Logo;
