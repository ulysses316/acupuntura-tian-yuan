import React from "react";
import Link from "next/link";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import CardServices from "../common/cards/CardServices";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import data from '@/CardServices.json'

export default function CardCarousel() {
    return (
        <section className="">
            <Splide
                aria-label="My Favorite Images"
                options={{
                    perPage: 3,
                    rewind: true,
                    type: "loop",
                    gap: "1rem",
                    arrows: false,
                    autoplay: true,
                    breakpoints: {
                        768: {
                            perPage: 2
                        },
                        640: {
                            perPage: 1
                        }
                    }
                }}>

                {data.map((item, index) => (
                    <SplideSlide key={index}>
                        <CardServices data={item}></CardServices>
                    </SplideSlide>
                ))}

            </Splide>
        </section>
    );
}
