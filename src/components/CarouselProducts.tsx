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
import type { product } from "@/features/products/productTypes";

interface CarouselProductsProps {
  title?: string;
  description?: string;
  products: product[];
}

function CarouselProducts({
  title,
  description,
  products,
}: CarouselProductsProps) {
  return (
    <section className="w-full mb-16 flex flex-col gap-7">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl leading-none font-semibold">{title}</h1>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
      <Carousel>
        <CarouselContent>
          {products.map((prod) => (
            <CarouselItem className="basis-1/4" key={prod.name}>
              <Card className="relative pt-0 overflow-hidden">
                <Link to="/products/$name" params={{ name: String(prod.name) }}>
                  <CardAction className="absolute top-3 right-4 z-10">
                    <ExternalLink color="white" size={20} />
                  </CardAction>
                  <img
                    src={prod.imgPath}
                    alt="foto tênis"
                    className="rounded-t-xl transition-transform duration-100 hover:scale-102 size-64 w-full object-cover object-center"
                  />
                </Link>
                <CardHeader>
                  <CardDescription> {prod.brand} </CardDescription>
                  <CardTitle>
                    {" "}
                    {prod.name
                      .replaceAll("-", " ")
                      .split(" ")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1),
                      )
                      .join(" ")}{" "}
                  </CardTitle>
                  <CardAction>
                    <Button>
                      <Heart />
                    </Button>
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <h1 className="text-2xl text-amber-600 font-bold">
                    {prod.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
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
