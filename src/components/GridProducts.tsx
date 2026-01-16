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

function GridProducts({title=true}) {
  const prod = Array(6).fill(null);

  return (
    <section className="w-full mb-16 flex flex-col gap-7">
      {title && <div>
        <h1 className="text-3xl leading-none font-semibold">Destaques</h1>
        <p className="text-muted-foreground text-sm">
          Produtos em alta esta semana
        </p>
      </div>}
      <div className="w-full grid grid-cols-4 gap-6">
        {prod.map((_, index) => (
          <Card className="relative pt-0 overflow-hidden" key={index}>
            <Link to="/products/$id" params={{id: String(index)}}>
              <CardAction className="absolute top-3 right-4 z-10">
                <ExternalLink color="white" />
              </CardAction>
              <img
                src="shoe-photo.jpeg"
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
              <h1 className="text-2xl text-amber-600 font-bold">R$ 299,90</h1>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default GridProducts;
