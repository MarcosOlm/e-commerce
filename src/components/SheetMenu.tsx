import { ChevronRight, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Link, useNavigate } from "@tanstack/react-router";
import { Item, ItemActions, ItemContent } from "./ui/item";
import { useAuth } from "@/stores/auth.store";

function SheetMenu() {
  const { isUserLogin, setIsUserLogin } = useAuth();
  const navigate = useNavigate();

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
            {!isUserLogin ? 
              <Button onClick={() => navigate({to: '/sing-in'})}>Entrar</Button>
              : <Button variant={"outline"} onClick={() => setIsUserLogin(false)}>Sair</Button>  
          }
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default SheetMenu
