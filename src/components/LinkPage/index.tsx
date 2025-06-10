"use client";
import { cn } from "@/shared/utils/cn";
import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

export const LinkPage = ({
  children,
  className,
  href,
}: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <Link
      href={href || "#"}
      className={cn(
        "text-zinc-800 font-semibold focus:outline-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1",
        className
      )}
      aria-disabled={href === undefined}
      onKeyDown={(e) => {
        if (e.code === "Space") {
          e.preventDefault();
          e.currentTarget.click();
        }
      }}
      onClick={(e) => {
        if (href === undefined) {
          e.preventDefault();
        }
      }}
    >
      {children}
    </Link>
  );
};
