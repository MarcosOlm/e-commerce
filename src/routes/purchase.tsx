import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { useShopCart } from "@/stores/shopCart.store";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { ChevronLeft, CreditCard, Landmark, QrCode, Trash } from "lucide-react";

export const Route = createFileRoute("/purchase")({
  component: RouteComponent,
});

function RouteComponent() {
  const buy = useShopCart();
  const router = useRouter();

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
          <h1 className="text-2xl font-semibold">Finalizar compra</h1>
        </div>
        <div className="w-full h-full grid grid-cols-[2fr_1fr] grid-rows-[1fr_auto] gap-4">
          <section className="col-start-2 col-end-3 row-end-2 sticky top-20 bottom-0 h-fit flex flex-col gap-3 border rounded-sm shadow-lg p-6">
            <h1>Resumo do Pedido</h1>
            <div className="flex items-center justify-between">
              <h2 className="text-muted-foreground">subtotal</h2>
              <p> {buy.productsItems.reduce((acc, next) => {
                return acc+ next.cartQuantity * next.product.price
              }, 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} </p>
            </div>
            <div className="flex items-center justify-between">
              <h2 className="text-muted-foreground">Frete</h2>
              <p className="text-emerald-500">Grátis</p>
            </div>
            <Separator />
            <div className="w-full flex items-center justify-between">
              <h1 className="font-bold">Total</h1>
              <p className="text-primary font-bold"> {buy.productsItems.reduce((acc, next) => {
                return acc+ next.cartQuantity * next.product.price
              }, 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} </p>
            </div>
            <Button>Confirmar Pedido</Button>
          </section>
          <section className="h-fit flex flex-col gap-3 border rounded-sm shadow-lg p-6">
            <h1>Produtos ({buy.productsItems.length})</h1>
            <ItemGroup className="flex flex-col gap-4">
              {buy.productsItems.map((cartItem) => (
                <Item key={cartItem.product.name}>
                  <ItemMedia className="w-32">
                    <img
                      src={cartItem.product.imgPath}
                      alt="foto de sapato"
                      className="rounded"
                    />
                  </ItemMedia>
                  <ItemContent>
                    <div className="flex flex-col">
                      <ItemTitle> {cartItem.product.brand} </ItemTitle>
                      <ItemDescription> {cartItem.product.name} </ItemDescription>
                      <ItemDescription className="text-primary">
                        {cartItem.product.price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}
                      </ItemDescription>
                      <div className="flex">
                        <Button 
                        onClick={() => buy.oneLessQuant(cartItem)}
                        className="w-5 h-5 p-0"
                        >-</Button>
                        <span className="mx-2"> {cartItem.cartQuantity} </span>
                        <Button 
                        onClick={() => buy.oneMoreQuant(cartItem)}
                        className="w-5 h-5 p-0"
                        >+</Button>
                      </div>
                    </div>
                  </ItemContent>
                  <ItemActions className="flex flex-col">
                    <h2> {(cartItem.cartQuantity * cartItem.product.price)
                  .toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })} </h2>
                    <Button className="col-start-3 col-end-4 bg-transparent hover:bg-destructive text-muted-foreground hover:text-white">
                      <Trash className="hover:text-white" />
                    </Button>
                  </ItemActions>
                </Item>
              ))}
            </ItemGroup>
          </section>
          <section className="h-fit col-start-1 flex flex-col gap-3 border rounded-sm shadow-lg p-8">
            <h1>Forma de Pagamento</h1>
            <RadioGroup defaultValue="PIX">
              <FieldLabel htmlFor="PIX" className="hover:border-foreground">
                <Field orientation={"horizontal"}>
                  <div className="h-full flex items-center gap-3">
                    <RadioGroupItem value="PIX" id="PIX" />
                    <QrCode className="text-primary" />
                  </div>
                  <FieldContent>
                    <FieldTitle>PIX</FieldTitle>
                    <FieldDescription>
                      Pagamento instantâneo - 5% de desconto
                    </FieldDescription>
                  </FieldContent>
                </Field>
              </FieldLabel>
              <FieldLabel htmlFor="BOLETO" className="hover:border-foreground">
                <Field orientation={"horizontal"}>
                  <div className="h-full flex items-center gap-3">
                    <RadioGroupItem value="BOLETO" id="BOLETO" />
                    <CreditCard className="text-primary" />
                  </div>
                  <FieldContent>
                    <FieldTitle>Boleto Bancário</FieldTitle>
                    <FieldDescription>
                      Vencimento em 3 dias úteis
                    </FieldDescription>
                  </FieldContent>
                </Field>
              </FieldLabel>
              <FieldLabel
                htmlFor="CREDIT_CARD"
                className="hover:border-foreground"
              >
                <Field orientation={"horizontal"}>
                  <div className="h-full flex items-center gap-3">
                    <RadioGroupItem value="CREDIT_CARD" id="CREDIT_CARD" />
                    <Landmark className="text-primary" />
                  </div>
                  <FieldContent>
                    <FieldTitle>Cartão de Crédito</FieldTitle>
                    <FieldDescription>
                      Parcele em até 12x sem juros
                    </FieldDescription>
                  </FieldContent>
                </Field>
              </FieldLabel>
            </RadioGroup>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
