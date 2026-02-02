import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  createFileRoute,
  useNavigate,
  useRouter,
} from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import GridProducts from "@/components/GridProducts";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useSearchProduct } from "@/features/products/product.hook";
import { useSuspenseQuery } from "@tanstack/react-query";
import type { product } from "@/features/products/productTypes";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Skeleton from "@/components/skeletons/Skeleton";

export const Route = createFileRoute("/search")({
  loader: async ({ context, location }) => {
    context.queryClient.ensureQueryData(useSearchProduct(location.search));
  },
  component: RouteComponent,
  pendingComponent: Skeleton,
});

function RouteComponent() {
  const router = useRouter();
  const navigate = useNavigate({ from: "/search" });
  const query = Route.useSearch();
  const { data } = useSuspenseQuery(useSearchProduct(query));
  data.content = priceFilter(data.content, query.price);

  // pagination logic

  const currentPage = data.number;
  const totalPages = data.totalPages;
  const windowSize = 5;
  const middle = Math.floor(windowSize / 2);

  const startPage = () =>
    currentPage - middle < 0  
      ? 0
      : currentPage + middle >= totalPages
        ? Math.max(0, totalPages - windowSize)
        : currentPage - middle;

  const endPage = () =>
    startPage() + windowSize > totalPages
      ? totalPages
      : startPage() + windowSize;

  const paginationList = Array(endPage() - startPage()).fill(null);

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
          <p className="text-muted-foreground">
            {" "}
            {data.totalElements} produtos encontrados
          </p>
        </div>
        <section className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Select
              onValueChange={(value) => {
                navigate({
                  search: (prev) => ({
                    ...prev,
                    category: value === "all" ? undefined : value,
                  }),
                });
              }}
            >
              <SelectTrigger className="shadow-lg w-36">
                <SelectValue placeholder="Categorias" />
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
            <Select
              onValueChange={(value) => {
                navigate({
                  search: (prev) => ({
                    ...prev,
                    brand: value === "all" ? undefined : value,
                  }),
                });
              }}
            >
              <SelectTrigger className="shadow-lg w-36">
                <SelectValue placeholder="Marca" />
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
            <Slider
              min={1}
              max={100}
              step={1}
              defaultValue={[100]}
              onValueChange={(value) => {
                navigate({
                  search: (prev) => ({...prev, price: value[0]})
                })
              }}
            />
          </div>
        </section>

        {/* products */}

        <GridProducts products={data.content} />

        {/* pagination */}

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                className={data.first ? "pointer-events-none opacity-50" : ""}
                onClick={() =>
                  navigate({
                    search: (prev) => ({
                      ...prev,
                      page: currentPage - 1 < 0 ? 0 : currentPage - 1,
                    }),
                  })
                }
              />
            </PaginationItem>
            {paginationList.map((_, index) => {
              const page = startPage() + index;

              return (
                <PaginationItem key={page}>
                  <PaginationLink
                    isActive={page === currentPage}
                    onClick={() =>
                      navigate({
                        search: (prev) => ({ ...prev, page }),
                      })
                    }
                  >
                    {page + 1}
                  </PaginationLink>
                </PaginationItem>
              );
            })}
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                className={data.last ? "pointer-events-none opacity-50" : ""}
                onClick={() =>
                  navigate({
                    search: (prev) => ({
                      ...prev,
                      page:
                        currentPage + 1 >= totalPages
                          ? totalPages - 1
                          : currentPage + 1,
                    }),
                  })
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </main>
      <Footer />
    </>
  );
}

function priceFilter(list: product[], price: number | undefined) {
  if (!price) {
    return list;
  }
  return list.filter((prod) => prod.price < price);
}
