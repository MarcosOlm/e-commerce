import FeaturedProducts from '@/components/FeaturedProducts';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Header/>
      <Hero/>
      <FeaturedProducts />
    </>
  );
}
