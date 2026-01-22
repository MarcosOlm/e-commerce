import CarouselProducts from "@/components/CarouselProducts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Item } from "@/components/ui/item";
import { Separator } from "@/components/ui/separator";
import { useByName, useSearchProduct } from "@/features/products/product.hook";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, useParams, useRouter } from "@tanstack/react-router";
import {
  ChevronLeft,
  Handbag,
  Heart,
  RotateCcw,
  Shield,
  Truck,
} from "lucide-react";

export const Route = createFileRoute("/products/$name")({
  beforeLoad: async ({ context, params }) => {
    window.scrollTo({ top: 0 });
    const data = context.queryClient.ensureQueryData(useByName(params.name));
    context.queryClient.ensureQueryData(
      useSearchProduct({ category: (await data).category }),
    );
    context.queryClient.ensureQueryData(
      useSearchProduct({ brand: (await data).brand }),
    );
  },
  component: RouteComponent,
});

function RouteComponent() {
  const router = useRouter();
  const { name } = useParams({ from: "/products/$name" });
  const { data } = useSuspenseQuery(useByName(name));
  const { data: category } = useSuspenseQuery(
    useSearchProduct({ category: data.category }),
  );
  const { data: brand } = useSuspenseQuery(
    useSearchProduct({ brand: data.brand }),
  );
  console.log(category);
  console.log(brand);

  return (
    <>
      <Header />
      <main className="flex flex-col gap-4 pt-24 px-16 mb-16">
        <a
          className=" w-fit flex items-center gap-1 text-lg text-muted-foreground cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            router.history.back();
          }}
        >
          <ChevronLeft size={16} />
          voltar
        </a>
        <section className="flex mb-16">
          <img
            src={data.imgPath}
            alt="foto de sapato"
            className="h-[90vh] w-[50%] object-cover object-center rounded-2xl"
          />
          <Card className="w-full p-0 border-none shadow-none bg-background">
            <CardHeader>
              <CardDescription className="text-2xl">
                {" "}
                {data.brand}{" "}
              </CardDescription>
              <CardTitle className="text-3xl">
                {" "}
                {data.name
                  .replaceAll("-", " ")
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}{" "}
              </CardTitle>
              <CardDescription className="text-3xl text-primary font-bold">
                {data.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-5">
              <CardDescription className="text-base">
                {data.description}
              </CardDescription>
              <Separator className="bg-neutral-300" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span>Quantidade:</span>
                  <Button size={"icon-sm"} variant={"outline"}>
                    -
                  </Button>
                  <span>1</span>
                  <Button size={"icon-sm"} variant={"outline"}>
                    +
                  </Button>
                </div>
                <Button>
                  <Heart />
                </Button>
              </div>
              <Button>
                <Handbag /> Adicionar ao Carrinho
              </Button>
            </CardContent>
            <div className="grid grid-cols-3 px-8 gap-x-2">
              <Item className="flex items-center justify-center bg-secondary">
                <Truck className="text-primary" />
                Frete Grátis
              </Item>
              <Item className="flex items-center justify-center bg-secondary">
                <Shield className="text-primary" />
                Garantia
              </Item>
              <Item className="flex items-center justify-center bg-secondary">
                <RotateCcw className="text-primary" />
                Troca Fácil
              </Item>
            </div>
          </Card>
        </section>
        <CarouselProducts
          title="Veja Mais da Mesma Categoria"
          products={category.content}
        />
        <CarouselProducts
          title="Veja Mais da Mesma Marca"
          products={brand.content}
        />
      </main>
      <Footer />
    </>
  );
}
