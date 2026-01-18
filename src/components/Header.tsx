import { useNavigate, useSearch } from "@tanstack/react-router";
import React, { useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "./ui/input-group";
import CartDropdown from "./CartDropdown";
import SheetMenu from "./SheetMenu";
import { Button } from "./ui/button";
import { Search, X } from "lucide-react";
import { Link } from "@tanstack/react-router";

function Header() {
  const { query, isSearch } = useSearch({ from: "__root__" });
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(isSearch ?? false);
  const navigate = useNavigate();

  function submitTest(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const input = form.get("search");
    navigate({ to: "/search", search: { query: String(input), isSearch: true } });
  }

  return (
    <header className="fixed w-full py-4 px-16 flex items-center justify-between z-50 bg-background shadow-2xl">
      <Link to="/">
        <h1 className="text-2xl font-standard-bold">
          Next<span className="text-primary font-standard-bold">Buy</span>
        </h1>
      </Link>
      <nav className="flex items-center justify-between gap-2">
        {!isSearchOpen ? (
          <Button variant={"ghost"} onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <Search size={20} />
          </Button>
        ) : (
          <form onSubmit={submitTest}>
            <InputGroup className="ml-auto animate-grow-left shadow-lg">
              <InputGroupInput
                name="search"
                placeholder="busque..."
                autoFocus
                defaultValue={query}
              />
              <InputGroupAddon>
                <Search size={20} />
              </InputGroupAddon>
              <InputGroupAddon align={"inline-end"}>
                <InputGroupButton
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  variant={"outline"}
                  className="border-none h-full"
                  type="button"
                >
                  <X />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </form>
        )}

        {/* shop-cart */}
        <CartDropdown />

        {/* menu */}
        <SheetMenu />
      </nav>
    </header>
  );
}

export default Header;
