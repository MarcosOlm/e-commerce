import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { createFileRoute, useNavigate, useRouter } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import GridProducts from "@/components/GridProducts";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";


export const Route = createFileRoute("/search")({
  component: RouteComponent,
});

function RouteComponent() {
  const router = useRouter();
  const navigate = useNavigate({from: "/search"});

  return (
    <>
      <Header />
      <main className="flex flex-col gap-4 pt-24 px-16 mb-16 min-h-screen">
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
        <div>
          <h1 className="text-2xl font-semibold">Todos os Produtos</h1>
          <p className="text-muted-foreground">10 produtos encontrados</p>
        </div>
        <section className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Select onValueChange={(value) => {
              navigate({
                search: (prev) => ({...prev, category: value === 'all' ? undefined : value})
              })
            }}>
                <SelectTrigger className="shadow-lg w-36">
                    <SelectValue placeholder="Categorias"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="all">Todas</SelectItem>
                        <SelectItem value="roupas">Roupas</SelectItem>
                        <SelectItem value="calçados">Calçados</SelectItem>
                        <SelectItem value="acessorios">Acessórios</SelectItem>
                        <SelectItem value="beleza">Beleza</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Select onValueChange={(value) => {
              navigate({
                search: (prev) => ({...prev, brand: value === 'all' ? undefined : value})
              })
            }}>
                <SelectTrigger className="shadow-lg w-36">
                    <SelectValue placeholder="Marca"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="all">Todas</SelectItem>
                        <SelectItem value="nike">Nike</SelectItem>
                        <SelectItem value="adidas">Adidas</SelectItem>
                        <SelectItem value="zara">Zara</SelectItem>
                        <SelectItem value="gucci">Gucci</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2 w-96">
            <Label className="w-[60%]">Preço: R$0 - R$ 100</Label>
            <Slider min={1} max={100} step={1} defaultValue={[100]}/>
          </div>
        </section>
        <GridProducts />
      </main>
      <Footer />
    </>
  );
}
