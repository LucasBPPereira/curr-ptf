import { cn } from "@/shared/utils/cn";
import { HTMLAttributes } from "react";

type TTitleComponent = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
} & HTMLAttributes<HTMLHeadingElement>;
type TKeyofTitle = keyof JSX.IntrinsicElements;
export const Title = ({
  level,
  className,
  children,
}: TTitleComponent) => {
  const Tag = `h${level}` as TKeyofTitle

  return (
    <Tag className={cn("text-lg font-semibold text-zinc-900", className)}>
      {children}
    </Tag>
  );
};
