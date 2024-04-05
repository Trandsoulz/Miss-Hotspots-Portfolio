"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

const Brands = () => {
  const imgs: { img: string; val: number }[] = [
    { img: "/brands/fastestcakes1.svg", val: 1 },
    { img: "/brands/Ellipse9.svg", val: 2 },
    { img: "/brands/Ellipse8.svg", val: 3 },
    { img: "/brands/Ellipse7.svg", val: 4 },
    { img: "/brands/Ellipse10.svg", val: 5 },
    { img: "/brands/Ellipse11.svg", val: 6 },
    { img: "/brands/mysmartarena.svg", val: 7 },
  ];

  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          AutoScroll({
            playOnInit: true,
            stopOnInteraction: false,
            stopOnFocusIn: false,
            speed:1.3
          }),
        ]}
        className="mx-1 pt-2 pb-6"
      >
        <CarouselContent className="mx-auto">
          {imgs.map(({ img, val }) => (
            <>
              <CarouselItem className="basis-1/3 md:basis-1/4 lg:basis-1/5">
                <Image
                  src={`${img}`}
                  alt={`${val}`}
                  key={val}
                  width={80}
                  height={80}
                  className="md:w-[100px] md:h-[100px]"
                />
              </CarouselItem>
            </>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default Brands;
