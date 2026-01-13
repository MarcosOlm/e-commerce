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
  return (
    <>
      <header className="w-screen py-4 px-15 flex items-center justify-between">
        <h1 className="text-2xl">
          Next<span className="text-amber-700">Buy</span>
        </h1>
        <nav className="flex items-center justify-between gap-5">
          <Link to="/">
            <Search size={22} />
          </Link>

          {/* shop-cart */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <ShoppingBag size={22} className="cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-96 p-2">
              <DropdownMenuLabel className="flex items-center justify-start gap-1">
                <ShoppingBag size={20} />
                <p>Carrinho (1)</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className="grid grid-cols-[2fr_minmax(0,3fr)_1fr] grid-rows-3 gap-x-4">
                  <img
                    src="/shoe-photo.jpeg"
                    alt="sapato"
                    className="rounded col-span-1 row-span-3 h-24"
                  />
                  <h1 className="w-full col-start-2 col-end-3">
                    Tênis Urban Runner
                  </h1>
                  <p className="col-start-2 col-end-3">R$ 299,90</p>
                  <div className="col-start-2 col-end-3">
                    <Button className="w-5 h-5 p-0">-</Button>
                    <span className="mx-2">1</span>
                    <Button className="w-5 h-5 p-0">+</Button>
                  </div>
                  <Button className="col-start-3 col-end-4 ml-auto bg-transparent hover:bg-destructive">
                    <Trash />
                  </Button>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="">
                <Button className="w-full">Comprar</Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* menu */}
          <Sheet>
            <SheetTrigger>
              <Menu size={22} className="cursor-pointer" />
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
    </>
  );
}

export default Header;
