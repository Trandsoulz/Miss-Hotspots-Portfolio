"use client";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Navbar from "./components/Navbar";
import Image from "next/image";
import Wave from "@/public/assets/wave";
import Wave2 from "@/public/assets/wave2";
import Wave4 from "@/public/assets/wave4";
import Curve from "@/public/assets/PinkCurvedLine";
import Link from "next/link";

import { FaInstagram, FaTiktok } from "react-icons/fa";
import MLogo from "@/public/assets/m-logo";

const Home = () => {
  const imgs = [
    { img: "/bg-imgs/bg-img1.jpg", val: 1 },
    { img: "/bg-imgs/bg-img2.jpg", val: 2 },
    { img: "/bg-imgs/bg-img3.jpg", val: 3 },
    { img: "/bg-imgs/bg-img4.jpg", val: 4 },
    { img: "/bg-imgs/bg-img5.jpg", val: 5 },
    { img: "/bg-imgs/bg-img6.jpg", val: 6 },
    { img: "/bg-imgs/bg-img7.jpg", val: 7 },
    { img: "/bg-imgs/bg-img8.png", val: 8 },
    { img: "/bg-imgs/bg-img9.png", val: 9 },
    { img: "/bg-imgs/bg-img10.png", val: 10 },
    { img: "/bg-imgs/bg-img11.png", val: 11 },
    { img: "/bg-imgs/bg-img12.png", val: 12 },
    { img: "/bg-imgs/bg-img13.png", val: 13 },
  ];

  const Items = imgs.map(({ img, val }) => (
    <>
      <main
        key={val}
        data-value={val}
        className="bg-cover bg-center h-screen w-full -z-10 fixed"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url(${img})`,
        }}
      ></main>
      <Navbar />

      <section className="max-w-7xl mx-auto md:h-[60vh] h-[60vh] flex items-center justify-center flex-col space-y-10">
        <h1 className=" text-3xl md:text-6xl font-medium">Miss Hotspots</h1>

        <h1 className="text-xl md:text-2xl font-normal">
          Digital | Lifestyle | Food | Business | Creative
        </h1>
      </section>
    </>
  ));

  return (
    <>
      {/* <main
        className="bg-cover bg-center h-screen w-full -z-10 fixed"
        style={{
          backgroundImage: `url(/bg-imgs/bg-img1.jpg)`,
        }}
      ></main> */}

      <AliceCarousel
        autoPlay
        autoHeight
        autoPlayStrategy="none"
        autoPlayInterval={2000}
        animationDuration={2000}
        animationType="fadeout"
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
        items={Items}
      />

      <Curve className="absolute -bottom-7 md:-bottom-24 z-10" />

      <section className=" bg-primary text-black h-auto px-8 pt-40 items-center ">
        <h1 className="md:text-4xl tracking-normal text-2xl font-semibold pb-9  max-w-7xl mx-auto">
          Who is Miss Hotspots?
        </h1>
        {/* <p className="md:text-xl text-lg pl-5 font-semibold  max-w-7xl mx-auto">
          Get to know me
        </p> */}

        <main className="flex mt-14  max-w-7xl mx-auto">
          <div className="w-[35%]">
            <Image
              src={"/misshotspots/misshotspots.png"}
              className="rounded-md"
              alt="Miss Hotspot"
              width={450}
              height={350}
            />
          </div>

          <div className="w-[55%] mx-auto h-[350px]  flex items-center">
            <div>
              <p className="pt-10 text-2xl ">
                Hello, I'm Esther Samuel also known as “Miss_hotspots” I'm a
                Content strategist, Social media manager and a Lifestyle Creator
                ,I'm glad to have you here , Let's Create memories together.
              </p>

              <div className="pt-10 space-x-8 flex">
                <Link
                  href={"/about"}
                  className="bg-[#e3a6c5] text-white rounded-md px-6 py-4"
                >
                  Read More
                </Link>
                <Link
                  href={"https://www.instagram.com/miss_hotspots"}
                  target="_blank"
                  className="px-4 py-2 bg-[#ed088a] rounded-md "
                >
                  {" "}
                  <FaInstagram className="relative top-2 text-2xl hover:scale-110 duration-200" />
                </Link>
                <Link
                  href={"https://www.tiktok.com/@thehotspots_plug"}
                  target="_blank"
                  className="px-4 py-2 bg-[#f2285e] rounded-md "
                >
                  <FaTiktok className="relative top-2 text-2xl hover:scale-110 duration-200" />
                </Link>
              </div>
              <MLogo className="absolute right-28" />
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Home;
