import { ExternalLink, Heart } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "@tanstack/react-router";
import type { product } from "@/features/products/productTypes";

interface GridProductsProps {
  title?: string;
  description?: string;
  products: product[];
}

function GridProducts({ title, description, products }: GridProductsProps) {
  return (
    <section className="w-full mb-16 flex flex-col gap-7">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl leading-none font-semibold"> {title} </h1>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
      <div className="w-full grid grid-cols-4 gap-6">
        {products.map((prod) => (
          <Card className="relative pt-0 overflow-hidden" key={prod.name}>
            <Link to="/products/$name" params={{ name: prod.name }}>
              <CardAction className="absolute top-3 right-4 z-10">
                <ExternalLink color="white" />
              </CardAction>
              <img
                src={prod.imgPath}
                alt="foto tênis"
                className="rounded-t-xl size-72 w-full object-cover object-center transition-transform duration-100 hover:scale-102"
              />
            </Link>
            <CardHeader>
              <CardDescription> {prod.category} </CardDescription>
              <CardTitle>
                {" "}
                {prod.name
                  .replaceAll("-", " ")
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}{" "}
              </CardTitle>
              <CardAction>
                <Button>
                  <Heart />
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <h1 className="text-2xl text-amber-600 font-bold"> {prod.price.toLocaleString("pt-BR", {style: 'currency', currency: 'BRL'})} </h1>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default GridProducts;
