/* eslint-disable @next/next/no-img-element */
"use client";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

export const Slides1 = () => {
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
        <img src="/binance.png" width={120} alt="img 1" loading="lazy" />
      </SplideSlide>
      <SplideSlide>
        <img src="/bybit.png" width={120} alt="img 1" loading="lazy" />
      </SplideSlide>
      <SplideSlide>
        <img src="/kraken.png" width={120} alt="img 1" loading="lazy" />
      </SplideSlide>
      <SplideSlide>
        <img src="/greenSmile.png" width={120} alt="img 1" loading="lazy" />
      </SplideSlide>
      <SplideSlide>
        <img src="/metamask.png" width={120} alt="img 1" loading="lazy" />
      </SplideSlide>
    </Splide>
  );
};
