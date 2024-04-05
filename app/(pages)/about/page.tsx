"use client";

import Brands from "@/app/components/Brands";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import MLogo from "@/public/assets/m-logo";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar color="bg-secondaryColor" />

      <section className=" bg-primaryColor text-black h-auto px-8 pt-40 items-center ">
        <h1 className="md:text-4xl tracking-normal text-2xl font-semibold md:pb-9  max-w-7xl mx-auto">
          Who is Miss Hotspots?
        </h1>
        {/* <p className="md:text-xl text-lg pl-5 font-semibold max-w-7xl mx-auto">
          Get to know me
        </p> */}

        <main className="flex mt-14 md:flex-row flex-col max-w-7xl mx-auto">
          <div
            className="md:w-[35%] w-full pr-10 md:pr-0"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <MLogo className="absolute right-10 md:hidden block scale-50" />
            <Image
              src={"/misshotspots/misshotspots.png"}
              className="rounded-md"
              alt="Miss Hotspot"
              width={450}
              height={350}
            />
          </div>

          <div
            className="md:w-[55%] w-full mx-auto md:h-[350px] flex items-center"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
          >
            <div>
              <p className="pt-10 md:text-2xl text-lg ">
                Hello, I&apos;m Esther Samuel also known as “Miss_hotspots”
                I&apos;m a Content strategist, Social media manager and a
                Lifestyle Creator ,I&apos;m glad to have you here , Let&apos;s
                Create memories together.
              </p>

              {/* <div className="pt-10 space-x-8 flex">
                <Link
                  href={"/about"}
                  className="bg-[#e3a6c5] text-white text-lg rounded-md px-6 py-4"
                >
                  Read More
                </Link>
              </div> */}
              <MLogo className="absolute right-28 md:block hidden" />
            </div>
          </div>
        </main>

        <main className="flex mt-14 md:flex-row flex-col-reverse max-w-7xl md:mx-auto px-0 pb-4 md:pb-0 md:px-10">
          <div
            className="md:w-[60%] w-full justify-center h-auto flex flex-col"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <p className="py-5 md:py-0 md:text-2xl text-lg pt-10">
              The Miss Hotspots brand is so far showing results as a standard
              carrier of high quality. Therefore, in an effort to exhibit the
              brand's high-level videogame and extend its reach, we are
              recommending an advertising and content creation campaign. Hit the
              button down below and send us an email to get more information
            </p>

            <div className="py-5">
              <Link
                href={"/contact"}
                className=" bg-secondaryColor text-white text-lg px-6 py-4"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div
            className="md:w-[40%] w-full flex justify-center"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
          >
            <Image
              src={"/misshotspots/miss-work.png"}
              className="rounded-md"
              alt="Miss Hotspot"
              width={450}
              height={350}
            />
          </div>
        </main>

        <h1
          className="md:text-3xl tracking-tighter text-xl font-semibold md:py-9  max-w-7xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          Some of the unique brand I've worked with
        </h1>

        <main data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
          <Brands />
        </main>
      </section>

      <footer
        className="bg-primaryColor md:p-4"
        // data-aos="fade-up"
        // data-aos-duration="500"
        // data-aos-delay="300"
      >
        <Footer
          Link1={"Home"}
          Link2={"Contact"}
          Link3={"/"}
          Link4={"/contact"}
        />
      </footer>
    </>
  );
};

export default About;
