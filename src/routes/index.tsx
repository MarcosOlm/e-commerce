import CategoryProducts from "@/components/CategoryProducts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { createFileRoute } from "@tanstack/react-router";
import GridProducts from "@/components/GridProducts";
import CarouselProducts from "@/components/CarouselProducts";
import { useBrand, useCategory, useFeatured } from "@/features/products/product.hook";
import { useSuspenseQuery } from "@tanstack/react-query";
import { heroData } from "@/lib/data-info";
import Skeleton from "@/components/skeletons/Skeleton";

export const Route = createFileRoute("/")({
  loader: async ({context}) => {
    await context.queryClient.ensureQueryData(useFeatured())
    await context.queryClient.ensureQueryData(useBrand())
    await context.queryClient.ensureQueryData(useCategory())
  },
  component: RouteComponent,
  pendingComponent: Skeleton,
});
  
function RouteComponent() {
  const {data: featured} = useSuspenseQuery(useFeatured());
  const {data: brand} = useSuspenseQuery(useBrand());
  const {data: category} = useSuspenseQuery(useCategory());

  return (
    <>
      <Header />
      <Hero heroData={heroData} />
      <main className="px-16">
        <GridProducts title="Destaques" description="Produtos em alta esta semana" products={featured} />
        <CarouselProducts title="Marca" description="Seus favoritos de sempre" products={brand} />
        <CategoryProducts title="Categoria" description="Explore por categoria" categories={category} />
      </main>
      <Footer />
    </>
  );
}
