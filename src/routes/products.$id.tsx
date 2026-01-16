import BrandProducts from "@/components/BrandProducts";
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
import { createFileRoute, useRouter } from "@tanstack/react-router";
import {
  ChevronLeft,
  Handbag,
  Heart,
  RotateCcw,
  Shield,
  Truck,
} from "lucide-react";

export const Route = createFileRoute("/products/$id")({
  beforeLoad: () => window.scrollTo({ top: 0 }),
  component: RouteComponent,
});

function RouteComponent() {
  const router = useRouter();
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
            src="/shoe-photo.jpeg"
            alt="foto de sapato"
            className="h-[90vh] w-[50%] object-cover object-center rounded-2xl"
          />
          <Card className="w-full p-0 border-none shadow-none bg-background">
            <CardHeader>
              <CardDescription className="text-2xl">Nike</CardDescription>
              <CardTitle className="text-3xl">Tênis Urban Runner</CardTitle>
              <CardDescription className="text-3xl text-primary font-bold">
                R$ 299,90
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-5">
              <CardDescription className="text-base">
                Produto de alta qualidade da marca Nike. Design moderno e
                elegante, perfeito para o seu dia a dia. Material premium que
                garante durabilidade e conforto.
              </CardDescription>
              <Separator className="bg-neutral-300" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span>Quantidade:</span>
                  <Button size={"icon-sm"} variant={"outline"}>-</Button>
                  <span>1</span>
                  <Button size={"icon-sm"} variant={"outline"}>+</Button>
                </div>
                <Button>
                  <Heart />
                </Button>
              </div>
              <Button>
                <Handbag /> Adicionar ao Carrinho
              </Button>
            </CardContent>
            <div className="flex items-center justify-around">
              <Item className="bg-secondary px-9">
                <Truck className="text-primary" />
                Frete Grátis
              </Item>
              <Item className="bg-secondary px-9">
                <Shield className="text-primary" />
                Garantia
              </Item>
              <Item className="bg-secondary px-9">
                <RotateCcw className="text-primary" />
                Troca Fácil
              </Item>
            </div>
          </Card>
        </section>
        <BrandProducts />
      </main>
      <Footer />
    </>
  );
}
