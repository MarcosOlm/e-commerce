import { ChevronRight, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Link } from "@tanstack/react-router";
import { Item, ItemActions, ItemContent } from "./ui/item";

function SheetMenu() {
  return (
    <>
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
    </>
  );
}

export default SheetMenu
