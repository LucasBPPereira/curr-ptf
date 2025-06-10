import { cn } from "@/shared/utils/cn";
import { FieldsetHTMLAttributes } from "react";

export const Fieldset = ({
  className,
  children,
  ...rest
}: FieldsetHTMLAttributes<HTMLFieldSetElement>) => {
  return (
    <fieldset className={cn("my-2", className)} {...rest}>
      {children}
    </fieldset>
  );
};
