import React, {
  forwardRef,
  TextareaHTMLAttributes,
} from "react";
import { cn } from "@/shared/utils/cn";
import { InvalidField } from "../InvalidField";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  ariaInvalid?: boolean;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, id, ariaInvalid = false, autoComplete = "off", ...rest }, ref) => {

    return (
      <div className="relative w-full h-20">
        <InvalidField show={ariaInvalid} />
        <div className="relative w-full h-full p-2 rounded-md">
          <textarea
            ref={ref}
            className={cn(
              "absolute inset-0 p-2 border border-zinc-200 outline-none rounded-md text-sm text-zinc-700 font-sans shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_1px_1px_-0.5px_rgba(0,0,0,0.04),0px_3px_3px_-1.5px_rgba(0,0,0,0.04),_0px_6px_6px_-3px_rgba(0,0,0,0.04),0px_12px_12px_-6px_rgba(0,0,0,0.04),0px_24px_24px_-12px_rgba(0,0,0,0.04)] bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-300",
              className
            )}
            id={id}
            aria-invalid={ariaInvalid}
            autoComplete={autoComplete}
            {...rest}
          />
        </div>
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
