import { Link } from "@tanstack/react-router";
import { ChevronRight, Menu, Search, ShoppingBag, Trash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Item, ItemActions, ItemContent } from "./ui/item";

function Header() {
  const buy = Array(5).fill(null);

  return (
      <header className="fixed w-full py-4 px-15 flex items-center justify-between z-50 bg-background">
        <h1 className="text-2xl">
          Next<span className="text-primary">Buy</span>
        </h1>
        <nav className="flex items-center justify-between gap-2">
          <Link to="/">
            <Search size={20} className="w-8 h-8 p-1.5 transition-colors duration-100 hover:bg-primary hover:text-primary-foreground rounded" />
          </Link>

          {/* shop-cart */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <ShoppingBag size={20} className="w-8 h-8 p-1.5 transition-colors duration-100 hover:bg-primary hover:text-primary-foreground rounded cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="max-w-96 p-2">
              <DropdownMenuLabel className="flex items-center justify-start gap-1">
                <ShoppingBag size={20} />
                <p>Carrinho (1)</p>
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
                      <Button className="col-start-3 col-end-4 bg-transparent hover:bg-destructive">
                        <Trash />
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
              <DropdownMenuItem >
                <Button className="w-full">Comprar</Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* menu */}
          <Sheet>
            <SheetTrigger>
              <Menu size={20} className="w-8 h-8 p-1.5 transition-colors duration-100 hover:bg-primary hover:text-primary-foreground rounded cursor-pointer" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <Link to="/">
                <Item
                  variant={"outline"}
                  className="mx-3 transition hover:scale-102 duration-300 shadow"
                >
                  <ItemContent>Sobre nós</ItemContent>
                  <ItemActions>
                    <ChevronRight size={20} />
                  </ItemActions>
                </Item>
              </Link>
              <Link to="/">
                <Item
                  variant={"outline"}
                  className="mx-3 transition hover:scale-102 duration-300 shadow"
                >
                  <ItemContent>Contatos</ItemContent>
                  <ItemActions>
                    <ChevronRight size={20} />
                  </ItemActions>
                </Item>
              </Link>
              <SheetFooter>
                <Button>Entrar</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </nav>
      </header>
  );
}

export default Header;
