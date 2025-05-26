import { LogoTextLC } from "@/assets/icons/LogoTextLC";
import Link from "next/link";
import { LinkPage } from "../LinkPage";

export const Header = () => {
  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 z-50 bg-white h-20 px-4 mt-2 max-w-[600px] w-full ">
      <div className="flex items-center gap-1 justify-around h-full">
        <div className="h-10 w-96 my-auto">
          <Link
            href={"/"}
            className="group"
            aria-label="Logo do Portfólio - Luks Creator"
          >
            <LogoTextLC className="[&>path]:fill-blue-500 group-hover:[&>path]:fill-blue-600 transition-colors w-20 h-14" />
          </Link>
        </div>
        <nav
          aria-label="Navegação principal"
          className=" flex w-full items-center gap-1 justify-around h-full my-auto"
        >
          <LinkPage tabIndex={0} href="/sobre">Sobre</LinkPage>
          <LinkPage tabIndex={0} href="/projetos">Projetos</LinkPage>
          <LinkPage tabIndex={0} href="/contato">Contato</LinkPage>
          <LinkPage tabIndex={0}>Blog</LinkPage>
        </nav>
      </div>
    </header>
  );
};
