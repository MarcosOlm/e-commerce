import type { category } from "@/features/products/productTypes";
import { Card, CardDescription, CardTitle } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Link } from "@tanstack/react-router";

interface CategoryProductsProps {
  title?: string,
  description?: string,
  categories: category[],
}

function CategoryProducts({title, description, categories}: CategoryProductsProps) {

  return (
    <section className="w-full mb-16 flex flex-col gap-7">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl leading-none font-semibold">{title}</h1>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
      <Carousel>
        <CarouselContent>
          {categories.map((item, index) => (
            <Link to="/search" search={{
              category: item.category
            }} key={index}
            className="basis-1/1 md:basis-1/2 xl:basis-1/4"
            > 
              <CarouselItem className="basis-1/1 md:basis-1/2 xl:basis-1/4">
              <Card className="relative p-0 h-96 object-center">
                <img
                  src={item.imgPath}
                  alt="foto de roupa"
                  className="rounded-2xl h-full transition-transform duration-100 hover:scale-102"
                />
                <div className="absolute bottom-3 left-3">
                    <CardTitle> {item.category} </CardTitle>
                    <CardDescription>{item.total_products} produtos</CardDescription>
                </div>
              </Card>
            </CarouselItem>
            </Link>
          ))}
        </CarouselContent>
        <CarouselPrevious variant={"default"} className="xl:hidden" />
        <CarouselNext variant={"default"} className="xl:hidden"/>
      </Carousel>
    </section>
  );
}

export default CategoryProducts;
