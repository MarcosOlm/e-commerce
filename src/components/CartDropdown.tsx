import { ShoppingBag, Trash } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useNavigate } from "@tanstack/react-router";
import { useShopCart } from "@/stores/shopCart.store";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "./ui/empty";
import { useAuth } from "@/stores/auth.store";
import {
  debounce,
  useDeleteCartItem,
  useUpdateCartItem,
} from "@/features/shop-cart/shopCart.hook";
import { useRef } from "react";

function CartDropdown() {
  const shopCartState = useShopCart();
  const navigate = useNavigate();
  const { mutate: updateMutate } = useUpdateCartItem();
  const { mutate: deleteMutate } = useDeleteCartItem();

  const debouncedUpdateRef = useRef(
    debounce((data) => {
      updateMutate(data);
    }, 800),
  );

  if (shopCartState.productsItems.length <= 0) {
    return (
      <>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button variant={"ghost"}>
              <ShoppingBag size={20} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="max-w-96 p-2 mr-6 bg-background">
            <DropdownMenuLabel className="flex items-center justify-start gap-1">
              <ShoppingBag size={20} />
              <p>Carrinho ({shopCartState.productsItems.length})</p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="focus:bg-transparent py-0">
              <Empty className="w-full h-full">
                <EmptyHeader>
                  <EmptyMedia variant={"icon"}>
                    <ShoppingBag />
                  </EmptyMedia>
                  <EmptyTitle>Seu carrinho está vazio</EmptyTitle>
                  <EmptyDescription>
                    Adicione produtos para continuar
                  </EmptyDescription>
                </EmptyHeader>
              </Empty>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="w-full px-3 flex items-center justify-between">
                <h1>Total</h1>
                <p>R$ 0</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="focus:bg-transparent">
              <Button
                className="w-full"
                onClick={() => navigate({ to: "/purchase" })}
              >
                Comprar
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </>
    );
  }

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"}>
            <ShoppingBag size={20} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="max-w-96 p-2 mr-6 bg-background">
          <DropdownMenuLabel className="flex items-center justify-start gap-1">
            <ShoppingBag size={20} />
            <p>Carrinho ({shopCartState.productsItems.length})</p>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <div
            className={
              shopCartState.productsItems.length < 4
                ? "max-h-96 overflow-hidden"
                : "max-h-96 overflow-y-scroll overflow-x-hidden"
            }
          >
            {shopCartState.productsItems.map((item, index) => (
              <DropdownMenuItem
                key={index}
                onSelect={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-[1fr_minmax(0,2fr)_40px] grid-rows-[2fr_minmax(0,1fr)_1fr] gap-x-4 max-h-20">
                  <img
                    src={item.product.imgPath}
                    alt="sapato"
                    className="rounded col-span-1 row-span-3 size-full object-cover object-center"
                  />
                  <h1 className="w-full col-start-2 col-end-3 my-auto">
                    {item.product.name
                      .replaceAll("-", " ")
                      .split(" ")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1),
                      )
                      .join(" ")}
                  </h1>
                  <p className="col-start-2 col-end-3 mt-auto">
                    {" "}
                    {(item.product.price * item.cartQuantity).toLocaleString(
                      "pt-BR",
                      { style: "currency", currency: "BRL" },
                    )}{" "}
                  </p>
                  <div className="col-start-2 col-end-3 mt-auto">
                    <Button
                      onClick={() => {
                        shopCartState.oneLessQuant(item);

                        if (useAuth.getState().isUserLogin) {
                          debouncedUpdateRef.current({
                            name: item.product.name,
                            quantity: item.cartQuantity - 1,
                          });
                        }
                      }}
                      className="w-5 h-5 p-0"
                    >
                      -
                    </Button>
                    <span className="mx-2"> {item.cartQuantity} </span>
                    <Button
                      onClick={() => {
                        shopCartState.oneMoreQuant(item);

                        if (useAuth.getState().isUserLogin) {
                          debouncedUpdateRef.current({
                            name: item.product.name,
                            quantity: item.cartQuantity + 1,
                          });
                        }
                      }}
                      className="w-5 h-5 p-0"
                    >
                      +
                    </Button>
                  </div>
                  <Button
                    onClick={() => {
                      if (useAuth.getState().isUserLogin) {
                        deleteMutate({ name: item.product.name });
                      }
                      shopCartState.removeShopCartItem(item);
                    }}
                    className="col-start-3 col-end-4 bg-transparent hover:bg-destructive text-muted-foreground hover:text-white"
                  >
                    <Trash className="hover:text-white" />
                  </Button>
                </div>
              </DropdownMenuItem>
            ))}
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <div className="w-full px-3 flex items-center justify-between">
              <h1>Total</h1>
              <p>
                {" "}
                {shopCartState.productsItems
                  .reduce((acc, next) => {
                    return acc + next.cartQuantity * next.product.price;
                  }, 0)
                  .toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}{" "}
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-transparent">
            <Button
              className="w-full"
              onClick={() => navigate({ to: "/purchase" })}
            >
              Comprar
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default CartDropdown;
