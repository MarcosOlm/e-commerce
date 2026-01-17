import { Card, CardDescription, CardTitle } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

interface CategoryProductsProps {
  title?: string,
  description?: string,
}

function CategoryProducts({title, description}: CategoryProductsProps) {
  const category = Array(4).fill(null);

  return (
    <section className="w-full mb-16 flex flex-col gap-7">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl leading-none font-semibold">{title}</h1>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
      <Carousel>
        <CarouselContent>
          {category.map((_, index) => (
            <CarouselItem className="basis-1/4" key={index}>
              <Card className="relative p-0 h-96 object-center">
                <img
                  src="clothes-photo.jpeg"
                  alt="foto de roupa"
                  className="rounded-2xl h-full transition-transform duration-100 hover:scale-102"
                />
                <div className="absolute bottom-3 left-3">
                    <CardTitle>Roupas</CardTitle>
                    <CardDescription>241 produtos</CardDescription>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

export default CategoryProducts;
