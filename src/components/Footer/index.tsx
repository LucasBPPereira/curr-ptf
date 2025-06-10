import { EmailIcon } from "@/assets/icons/EmailIcon";
import { GithubIcon } from "@/assets/icons/social-media/GithubIcon";
import { InstagramIcon } from "@/assets/icons/social-media/InstagramIcon";
import { LinkedinIcon } from "@/assets/icons/social-media/LinkedinIcon";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className={"relative bottom-0 w-full left-1/2 -translate-x-1/2 "}>
      <div className="mx-auto w-full flex gap-5 justify-around max-w-[600px] text-black">
        <section className="max-w-60">
          <Link href={"/"} className="group">
            <div className="flex gap-2 mb-2">
              <Image
                src="/images/pic.png"
                width={50}
                height={50}
                alt=""
                className="rounded-full"
              />
              <div className="flex flex-col gap-[2px]">
                <p className="font-medium text-zinc-800 group-hover:text-zinc-700">
                  Lucas Base
                </p>
                <p className="text-sm text-zinc-600">Desenvolvedor</p>
              </div>
            </div>
          </Link>
          <div className="flex items-center justify-around gap-2 max-w-30 w-full mt-4">
            <Link href={"https://www.instagram.com/luks_base/"} target="_blank">
              <InstagramIcon className="w-5 h-5 text-zinc-600 transition-colors duration-200 hover:text-orange-600" />
            </Link>

            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/lucas-base04/"}
            >
              <LinkedinIcon className="w-5 h-5 text-zinc-600 transition-colors duration-200 hover:text-blue-600" />
            </Link>
            <Link target="_blank" href={"https://github.com/LucasBPPereira"}>
              <GithubIcon className="w-5 h-5 text-zinc-600 transition-colors duration-200 hover:text-purple-700" />
            </Link>
            <Link href={"mailto:lucas.base29@gmail.com"}>
              <EmailIcon className="w-5 h-5 text-zinc-600 transition-colors duration-200 hover:text-zinc-800" />
            </Link>
          </div>
        </section>
        <section>
          <h3 className="text-lg font-semibold">Navegue</h3>
          <div className="flex flex-col gap-1 mt-2">
            <Link className="text-sm text-zinc-600" href={"/"}>
              Home
            </Link>
            <Link className="text-sm text-zinc-600" href={"/sobre"}>
              Sobre
            </Link>
            <Link className="text-sm text-zinc-600" href={"/projetos"}>
              Projetos
            </Link>
            <Link className="text-sm text-zinc-600" href={"/contato"}>
              Contato
            </Link>
          </div>
        </section>
        <section>
          <h3 className="text-lg font-semibold">Além</h3>
          <div>
            <Link href={"#"} className="text-sm text-zinc-600">
              Blog
            </Link>
          </div>
        </section>
      </div>
    </footer>
  );
};
