import { ComponentProps } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/shared/utils/cn";
import { Button } from "../infra/Button";

interface ISubmitButton extends ComponentProps<typeof Button> {
  /**
   * The value inside button before loading
   * ```tsx
   * <SubmitButton content="Send" />
   * ```
   *
   * Example in browser:
   * ```html
   * <button>Send</button
   * ```
   */
  content: string;
  loadingContent: string;
  isLoading: boolean;
}

export const SubmitButton = ({
  content = "Enviar",
  isLoading,
  loadingContent = "Enviando...",
  className,
  ...rest
}: ISubmitButton) => {
  return (
    <Button
      type="submit"
      className={cn(
        "bg-blue-500 hover:bg-blue-600 text-blue-50 hover:text-blue-50",
        className,
        isLoading &&
          "cursor-wait disabled:bg-blue-500/70 disabled:hover:bg-blue-400/50"
      )}
      {...rest}
    >
      {isLoading ? (
        <>
          <Loader2 className="animate-spin" /> {loadingContent}
        </>
      ) : (
        content
      )}
    </Button>
  );
};