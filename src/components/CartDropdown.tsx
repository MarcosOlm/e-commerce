import { ShoppingBag, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useNavigate } from "@tanstack/react-router";

function CartDropdown() {
  const buy = Array(3).fill(null);
const navigate = useNavigate();


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
            <p>Carrinho ({buy.length})</p>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <div
            className={
              buy.length < 4
                ? "max-h-96 overflow-hidden"
                : "max-h-96 overflow-y-scroll overflow-x-hidden"
            }
          >
            {buy.map((_, index) => (
              <DropdownMenuItem key={index}>
                <div className="grid grid-cols-[1fr_minmax(0,2fr)_40px] grid-rows-[2fr_minmax(0,1fr)_1fr] gap-x-4 max-h-20">
                  <img
                    src="/shoe-photo.jpeg"
                    alt="sapato"
                    className="rounded col-span-1 row-span-3 size-full object-cover object-center"
                  />
                  <h1 className="w-full col-start-2 col-end-3 my-auto">
                    Tênis Urban Runner
                  </h1>
                  <p className="col-start-2 col-end-3 mt-auto">R$ 299,90</p>
                  <div className="col-start-2 col-end-3 mt-auto">
                    <Button className="w-5 h-5 p-0">-</Button>
                    <span className="mx-2">1</span>
                    <Button className="w-5 h-5 p-0">+</Button>
                  </div>
                  <Button className="col-start-3 col-end-4 bg-transparent hover:bg-destructive text-muted-foreground hover:text-white">
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
              <p>R$ 299,90</p>
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
