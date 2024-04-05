"use client";

// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";
import Navbar from "./components/Navbar";
import Image from "next/image";
// import Wave from "@/public/assets/wave";
// import Wave2 from "@/public/assets/wave2";
// import Wave4 from "@/public/assets/wave4";
// import Curve from "@/public/assets/PinkCurvedLine";
import Link from "next/link";
import MLogo from "@/public/assets/m-logo";
import Footer from "./components/Footer";
import { useEffect, useRef } from "react";

const Home = () => {
  const img = "/misshotspots/misshotspotsimg.jpg"
  // const imgs: { img: string; val: number }[] = [
  //   { img: "/bg-imgs/bg-img1.jpg", val: 1 },
  //   { img: "/bg-imgs/bg-img2.jpg", val: 2 },
  //   { img: "/bg-imgs/bg-img3.jpg", val: 3 },
  //   { img: "/bg-imgs/bg-img4.jpg", val: 4 },
  //   { img: "/bg-imgs/bg-img5.jpg", val: 5 },
  //   { img: "/bg-imgs/bg-img6.jpg", val: 6 },
  //   { img: "/bg-imgs/bg-img7.jpg", val: 7 },
  //   { img: "/bg-imgs/bg-img8.png", val: 8 },
  //   { img: "/bg-imgs/bg-img9.png", val: 9 },
  //   { img: "/bg-imgs/bg-img10.png", val: 10 },
  //   { img: "/bg-imgs/bg-img11.png", val: 11 },
  //   { img: "/bg-imgs/bg-img12.png", val: 12 },
  //   { img: "/bg-imgs/bg-img13.png", val: 13 },
  // ];

  // const Items = imgs.map(({ img, val }) => (
  //   <>
  //     <main
  //       key={val}
  //       data-value={val}
  //       className="bg-cover bg-center h-screen w-full -z-10 fixed"
  //       style={{
  //         backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url(${img})`,
  //       }}
  //     ></main>
  //     <Navbar />

  //     <section className="max-w-7xl mx-auto md:h-[60vh] h-[60vh] flex items-center justify-center flex-col space-y-10">
  //       <h1 className=" text-3xl md:text-6xl font-medium">Miss Hotspots</h1>

  //       <h1 className="text-xl md:text-2xl font-normal">
  //         Lifestyle | Business | Creative
  //       </h1>
  //     </section>
  //   </>
  // ));

  return (
    <>
      {/* <main
        className="bg-cover bg-center h-screen w-full -z-10 fixed"
        style={{
          backgroundImage: `url(/bg-imgs/bg-img1.jpg)`,
        }}
      ></main> */}

      {/* <AliceCarousel
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
      /> */}

      {/* <Curve className="absolute -bottom-7 md:-bottom-24 z-10" /> */}

      <main
        className="bg-cover md:bg-contain bg-no-repeat bg-center h-screen w-full -z-10 fixed bg-black"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url(${img})`,
        }}
      ></main>
      <Navbar color={"bg-none"} />

      <section className="max-w-7xl mx-auto h-[90vh] flex items-center justify-center flex-col space-y-10 text-white">
        <h1 className=" text-3xl md:text-6xl font-medium">Miss Hotspots</h1>

        <h1 className="text-xl type-miss md:text-2xl font-normal">
          {/* Typed miss ==== Go to tailwind plugins */}
          {/* Lifestyle | Business | Creative */}
        </h1>
      </section>
    </>
  );
};

export default Home;
