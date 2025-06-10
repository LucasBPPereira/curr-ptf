import { cn } from "@/shared/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const buttonVariants = cva("px-4 py-2 disabled:pointer-events-none", {
  variants: {
    variant: {
      default:
        "bg-blue-50 border border-blue-400 text-white font-semibold transition-all duration-300 shadow-sm focus-visible:ring-2 focus-visible:ring-blue-400/50 w-full rounded-md outline-none focus-visible:ring-2 focus-visible:border-blue-600  ",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const Button = ({
  className,
  variant,
  ...rest
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) => {
  return (
    <button
      {...rest}
      className={cn(buttonVariants({ variant, className }))}
    ></button>
  );
};
