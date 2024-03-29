import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-8 flex justify-between w-full h-auto items-center max-w-7xl mx-auto" >
      <Image
        src="/misshotspots/Banner.png"
        alt="logo"
        width={70}
        height={70}
        className="hover:scale-125 duration-200"
      />

      <nav className="md:text-xl text-lg font-light space-x-6 md:space-x-10 flex">
        <h1 className="hover:scale-110 duration-200">
          <Link href={"/about"}>About Me</Link>
        </h1>

        <h1 className="hover:scale-110 duration-200">
          <Link href={"/contact"}>Contact Me</Link>
        </h1>
      </nav>
    </nav>
  );
};

export default Navbar;
