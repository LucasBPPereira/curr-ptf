import { GCPIcon } from "@/assets/icons/programming/GCPIcon";
import { NextJSIcon } from "@/assets/icons/programming/NextJSIcon";
import { NodeIcon } from "@/assets/icons/programming/NodeIcon";
import { PostgreSQLIcon } from "@/assets/icons/programming/PostgreSQLIcon";
import { PrismaORMIcon } from "@/assets/icons/programming/PrismaORMIcon";
import { ShadcnIcon } from "@/assets/icons/programming/ShadcnIcon";
import { TailwindIcon } from "@/assets/icons/programming/TailwindIcon";
import { TSIcon } from "@/assets/icons/programming/TSIcon";
import { DirectionAwareHover } from "@/components/motion/DirectionAwareHover";
import { cn } from "@/shared/utils/cn";
import { poppins } from "../fonts";
import { DockerIcon } from "@/assets/icons/programming/DockerIcon";
import { GithubIcon } from "@/assets/icons/social-media/GithubIcon";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function PageProjetos() {
  const imageUrl =
    "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <section className="max-w-4xl mx-auto px-2">
      <h1>Projetos</h1>
      <div className="max-w-96">
        <DirectionAwareHover imageUrl={imageUrl}>
          <p className="font-bold text-xl">IT System</p>
          <div className="flex items-center gap-2">
            <PrismaORMIcon />
            <TSIcon width={18} height={18} />
            <NodeIcon width={45} height={45} />
            <NextJSIcon className="w-5 h-5 [&>path]:fill-white" />
            <PostgreSQLIcon className="h-6 w-6" />
            <TailwindIcon className="h-6 w-6" />
            <ShadcnIcon className="size-5" />
            <GCPIcon />
            <DockerIcon className="h-7 w-7" />
          </div>
        </DirectionAwareHover>
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-2">
            <p className={cn("text-sm text-gray-600", poppins.className)}>
              Jul 09, 2025
            </p>
            <p
              className={cn(
                "text-xs text-sky-800 px-2 py-1 border border-sky-300 bg-sky-100 rounded-md",
                poppins.className
              )}
            >
              Fullstack
            </p>
            <p
              className={cn(
                "text-xs text-orange-800 px-2 py-1 border border-orange-300 bg-orange-100 rounded-md",
                poppins.className
              )}
            >
              Cloud
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <Link href={""} target="_blank">
              <ExternalLink className="stroke-gray-600 w-8 h-8 p-2 rounded-md bg-gray-50 hover:stroke-blue-500 hover:bg-blue-100 transition-colors" />
            </Link>
            <Link
              href={"https://github.com/LucasBPPereira/educa-ti"}
              target="_blank"
            >
              <GithubIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
