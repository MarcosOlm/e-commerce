import CategoryProducts from "@/components/CategoryProducts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { createFileRoute } from "@tanstack/react-router";
import GridProducts from "@/components/GridProducts";
import CarouselProducts from "@/components/CarouselProducts";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Header />
      <Hero />
      <main className="px-16">
        <GridProducts title="Destaques" description="Produtos em alta esta semana" />
        <CarouselProducts title="Marca" description="Seus favoritos de sempre" />
        <CategoryProducts title="Categoria" description="Explore por categoria" />
      </main>
      <Footer />
    </>
  );
}
