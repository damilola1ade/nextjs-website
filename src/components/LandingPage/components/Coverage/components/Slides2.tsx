/* eslint-disable @next/next/no-img-element */
"use client";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

export const Slides2 = () => {
  const splideOptions: unknown = {
    type: "loop",
    gap: "80px",
    drag: "free",
    arrows: false,
    direction: "ttb",
    height: "100%",
    perPage: 3,
    pagination: false,
    autoScroll: {
      pauseOnHover: false,
      pauseOnFocus: false,
      rewind: false,
      speed: 0.5,
    },
  };
  return (
    <Splide options={splideOptions} extensions={{ AutoScroll }}>
      <SplideSlide>
        <img src='/coinbase.png' width={140} alt="img 1" loading="lazy" />
      </SplideSlide>
      <SplideSlide>
        <img src="/kucoin.png" width={120} alt="img 1" loading="lazy" />
      </SplideSlide>
      <SplideSlide>
        <img src="/xdot.png" width={120} alt="img 1" loading="lazy" />
      </SplideSlide>
      <SplideSlide>
        <img src="/arrow.png" width={120} alt="img 1" loading="lazy" />
      </SplideSlide>
      <SplideSlide>
        <img src="/up.png" width={120} alt="img 1" loading="lazy" />
      </SplideSlide>
    </Splide>
  );
};
