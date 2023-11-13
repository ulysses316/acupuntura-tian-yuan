import React from "react";
import Link from "next/link";

import Button from "../common/buttons/Button";

import carouselItems from "@/json/mainCarousel.json";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";

export default function MainCarousel() {
   return (
      <Splide
         aria-label="My Favorite Images"
         options={{
            rewind: true,
            type: "fade",
            height: "100%",
            arrows: false,
            autoplay: true,
            breakpoints: {
               961: {
                  height: "100%",
               },
            },
         }}>
         {carouselItems.map((item, index) => (
            <SplideSlide key={index}>
               <div className="relative">
                  <img className="h-full w-full object-cover" src={item.src} alt={item.name} />
                  <div className="absolute top-0 z-20 flex h-full max-h-[899px] w-full flex-col items-center justify-center gap-2 text-white">
                     {/* <h2 className="text-2xl text-primary-pink sm:text-4xl lg:text-6xl xl:text-7xl">
                        Masaje en pareja
                     </h2>
                     <h3 className="text-1xl text-primary-pink sm:text-3xl lg:text-5xl xl:text-6xl">
                        $1,250
                     </h3>
                     <p></p>
                     <Link href="#">
                        <Button className="sm:text-1xl bg-primary-blue text-xs md:mt-8 xl:text-2xl">
                           Ver promocion
                        </Button>
                     </Link> */}
                  </div>
                  {/* vignette */}
                  <div className="absolute top-0 z-10 h-full w-full bg-black opacity-10"></div>
               </div>
            </SplideSlide>
         ))}
      </Splide>
   );
}
