import { Link } from "@tanstack/react-router";
import { Separator } from "./ui/separator";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircleMore,
  Phone,
} from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-foreground">
      <section className="w-full py-10">
        <h1 className="text-4xl text-white text-center mb-3">
          Next<span className="text-primary">Buy</span>
        </h1>
        <p className="text-white text-center w-[42%] mx-auto mb-5">
          Desde 2010, trazemos o melhor da moda e estilo para você. Nossa missão
          é oferecer produtos de qualidade premium com preços acessíveis,
          garantindo que cada cliente se sinta especial e confiante.
        </p>
        <Link
          to="/"
          className="block w-fit mx-auto text-white px-3 py-2 border rounded transition-colors duration-100 hover:bg-white hover:text-foreground"
        >
          Nossa História
        </Link>
      </section>
      <Separator />
      <section className="flex items-start justify-around py-10    ">
        <div>
          <h1 className="text-white font-bold mb-1.5">Comprar</h1>
          <Link to="/">
            <p className="text-neutral-400 hover:text-neutral-400/80">
              Novidades
            </p>
          </Link>
          <Link to="/">
            <p className="text-neutral-400 hover:text-neutral-400/80">
              Promoções
            </p>
          </Link>
          <Link to="/">
            <p className="text-neutral-400 hover:text-neutral-400/80">
              Mais Vendidos
            </p>
          </Link>
          <Link to="/">
            <p className="text-neutral-400 hover:text-neutral-400/80">
              Categorias
            </p>
          </Link>
        </div>
        <div>
          <h1 className="text-white font-bold mb-1.5">Ajuda</h1>
          <Link to="/">
            <p className="text-neutral-400 hover:text-neutral-400/80">SAC</p>
          </Link>
          <Link to="/">
            <p className="text-neutral-400 hover:text-neutral-400/80">
              Entregas
            </p>
          </Link>
          <Link to="/">
            <p className="text-neutral-400 hover:text-neutral-400/80">
              Trocas e Devoluções
            </p>
          </Link>
          <Link to="/">
            <p className="text-neutral-400 hover:text-neutral-400/80">
              Contato
            </p>
          </Link>
        </div>
        <div>
          <h1 className="text-white font-bold mb-1.5">Empresa</h1>
          <Link to="/">
            <p className="text-neutral-400 hover:text-neutral-400/80">
              Sobre nós
            </p>
          </Link>
          <Link to="/">
            <p className="text-neutral-400 hover:text-neutral-400/80">
              Sustentabilidade
            </p>
          </Link>
        </div>
        <div>
          <h1 className="text-white font-bold mb-1.5">Contato</h1>
          <p className="text-neutral-400 hover:text-neutral-400/80 flex items-center gap-1">
            <MapPin size={18} /> São Paulo, SP
          </p>
          <p className="text-neutral-400 hover:text-neutral-400/80 flex items-center gap-1">
            <Phone size={18} /> Promoções
          </p>
          <p className="text-neutral-400 hover:text-neutral-400/80 flex items-center gap-1">
            <Mail size={18} /> Mais Vendidosink
          </p>
          <span className="flex gap-3 mt-1.5">
            <Link to="/">
              <Instagram
                size={20}
                className="w-8 h-8 p-1.5 text-neutral-400 bg-neutral-800 transition-colors duration-100 hover:bg-neutral-800/70 rounded-[50%]"
              />
            </Link>
            <Link to="/">
              <MessageCircleMore
                size={20}
                className="w-8 h-8 p-1.5 text-neutral-400 bg-neutral-800 transition-colors duration-100 hover:bg-neutral-800/70 rounded-[50%]"
              />
            </Link>
            <Link to="/">
              <Linkedin
                size={20}
                className="w-8 h-8 p-1.5 text-neutral-400 bg-neutral-800 transition-colors duration-100 hover:bg-neutral-800/70 rounded-[50%]"
              />
            </Link>
          </span>
        </div>
      </section>
      <Separator />
    </footer>
  );
}

export default Footer;
