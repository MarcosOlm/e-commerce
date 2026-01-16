import { Link } from "@tanstack/react-router";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { ExternalLink, Heart } from "lucide-react";
import { Button } from "./ui/button";

function CarouselProducts() {
  const prod = Array(10).fill(null);

  return (
    <section className="w-full mb-16 flex flex-col gap-7">
      <div>
        <h1 className="text-3xl leading-none font-semibold">Marcas</h1>
        <p className="text-muted-foreground text-sm">
          Seus favoritos de sempre
        </p>
      </div>
      <Carousel>
        <CarouselContent>
          {prod.map((_, index) => (
            <CarouselItem className="basis-1/5" key={index}>
              <Card className="relative pt-0 overflow-hidden">
                <Link to="/products/$id" params={{id: String(index)}} >
                  <CardAction className="absolute top-3 right-4 z-10">
                    <ExternalLink color="white" size={20} />
                  </CardAction>
                  <img
                    src="/shoe-photo.jpeg"
                    alt="foto tênis"
                    className="rounded-t-xl transition-transform duration-100 hover:scale-102"
                  />
                </Link>
                <CardHeader>
                  <CardDescription>NIKE</CardDescription>
                  <CardTitle>Tênis Urban Runner</CardTitle>
                  <CardAction>
                    <Button>
                      <Heart />
                    </Button>
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <h1 className="text-2xl text-amber-600 font-bold">
                    R$ 299,90
                  </h1>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant={"default"} />
        <CarouselNext variant={"default"} />
      </Carousel>
    </section>
  );
}

export default CarouselProducts;
