import CategoryProducts from "@/components/CategoryProducts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { createFileRoute } from "@tanstack/react-router";
import GridProducts from "@/components/GridProducts";
import CarouselProducts from "@/components/CarouselProducts";
import { useBrand } from "@/features/products/product.hook";
import { useSuspenseQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/")({
  loader: async ({context}) => {
    await context.queryClient.ensureQueryData(useBrand())
  },
  component: RouteComponent,
});

function RouteComponent() {
  const {data} = useSuspenseQuery(useBrand());

  return (
    <>
      <Header />
      <Hero />
      <main className="px-16">
        {/* <GridProducts title="Destaques" description="Produtos em alta esta semana" /> */}
        <CarouselProducts title="Marca" description="Seus favoritos de sempre" products={data} />
        <CategoryProducts title="Categoria" description="Explore por categoria" />
      </main>
      <Footer />
    </>
  );
}
