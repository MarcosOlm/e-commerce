import React, { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "@tanstack/react-router";

interface HeroData {
    id: number,
    name: string;
    description: string;
    tag: string;
    buttonText: string;
    imgPath: string;
  }

interface HeroProps {
  heroData: HeroData[];
}

function Hero({ heroData }: HeroProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <>
      <Carousel
        setApi={setApi}
        plugins={[Autoplay({ delay: 5000 })]}
        opts={{ loop: true }}
        className="w-full relative mb-16"
      >
        <CarouselContent>
          {heroData.map((item, index) => (
            <CarouselItem key={item.id}>
              <img
                src={item.imgPath}
                alt="foto de sapato"
                className="w-full size-140 object-cover object-center"
              />
              <div className="absolute w-screen h-screen z-1 top-0 bg-linear-to-r from-black/40 to-transparent">
                <div
                  className={`
                absolute z-30 top-[30%] left-[5%]
                ${current === index ? "animate-slide-up" : "opacity-0 translate-y-10"}
                `}
                >
                  <p className="text-white bg-primary w-fit px-5 mb-3 rounded-4xl">
                    {item.tag}
                  </p>
                  <h1 className="text-white text-5xl font-bold"> {item.name} </h1>
                  <p className="text-white mb-3"> {item.description} </p>
                  <Link
                    to="/"
                    className="text-white bg-primary px-7 py-3 rounded-2xl"
                  >
                    {item.buttonText}
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <Button
          className="h-10 bg-amber-50/60 backdrop-blur-3xl hover:bg-amber-50/75 absolute z-2 top-[50%] left-2 rounded-[50%]"
          onClick={() => api?.scrollTo(current - 1)}
        >
          <ArrowLeft color="black" />
        </Button>
        <Button
          className="h-10 bg-amber-50/60 backdrop-blur-3xl hover:bg-amber-50/75 absolute z-2 top-[50%] right-2 rounded-[50%]"
          onClick={() => api?.scrollTo(current + 1)}
        >
          <ArrowRight color="black" />
        </Button>
      </Carousel>
    </>
  );
}

export default Hero;
