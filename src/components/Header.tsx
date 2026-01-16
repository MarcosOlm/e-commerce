import { Link } from "@tanstack/react-router";
import {
  ChevronRight,
  Menu,
  Search,
  ShoppingBag,
  Trash,
  X,
} from "lucide-react";
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
import { useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "./ui/input-group";

function Header() {
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const buy = Array(5).fill(null);

  return (
    <header className="fixed w-full py-4 px-16 flex items-center justify-between z-50 bg-background shadow-2xl">
      <h1 className="text-2xl">
        Next<span className="text-primary">Buy</span>
      </h1>
      <nav className="flex items-center justify-between gap-2">
        {!isSearch ? (
          <Button variant={"ghost"} onClick={() => setIsSearch(!isSearch)}>
            <Search size={20} />
          </Button>
        ) : (
          <form>
            <InputGroup className="ml-auto animate-grow-left shadow-lg">
              <InputGroupInput placeholder="busque..." autoFocus />
              <InputGroupAddon>
                <Search size={20} />
              </InputGroupAddon>
              <InputGroupAddon align={"inline-end"}>
                <InputGroupButton
                  onClick={() => setIsSearch(!isSearch)}
                  variant={"outline"}
                  className="border-none h-full"
                >
                  <X />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </form>
        )}

        {/* shop-cart */}
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button variant={"ghost"}>
              <ShoppingBag size={20} />
            </Button>
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
              <Button className="w-full">Comprar</Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* menu */}
        <Sheet modal={false}>
          <SheetTrigger asChild>
            <Button variant={"ghost"}>
              <Menu size={20} />
            </Button>
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
