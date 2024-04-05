"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/Banner.png";
import { useEffect, useState } from "react";

const Navbar = ({color} : {color : string}) => {
  const [sticky, setSticky] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (document.documentElement.scrollTop > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <nav
      className={`p-8 flex justify-between items-center mx-auto max-w-[90rem] text-white ${
        sticky ? "sticky-nav" : "nav"
      } ${color}`}
    >
      <Link href={"/"}>
        <Image
          src={Logo}
          alt="logo"
          width={70}
          height={70}
          className="hover:scale-125 duration-200"
        />
      </Link>

      <nav className="md:text-xl text-base font-medium space-x-6 md:space-x-10 flex ">
        <h1 className="hover:scale-110 duration-200">
          <Link href={"/about"}>About Me</Link>
        </h1>

        <h1 className="hover:scale-110 duration-200">
          <Link href={"/contact"}>Contact Us</Link>
        </h1>
      </nav>
    </nav>
  );
};

export default Navbar;
