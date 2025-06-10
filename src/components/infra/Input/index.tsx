"use client";
import React, { forwardRef } from "react";
import { cn } from "@/shared/utils/cn";
import { InputHTMLAttributes } from "react";
import { InvalidField } from "../InvalidField";
import { poppins } from "@/app/fonts";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  ariaInvalid?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      id,
      ariaInvalid = false,
      type = "text",
      autoComplete = "off",
      ...rest
    },
    ref
  ) => {
    return (
      <div className="relative w-full h-9">
        <InvalidField show={!!ariaInvalid} />
        <div className="w-full h-full rounded-md p-2 relative">
          <input
            ref={ref}
            id={id}
            autoComplete={autoComplete}
            type={type}
            aria-invalid={ariaInvalid}
            className={cn(
              "absolute inset-0 border border-zinc-200 outline-none rounded-md text-sm text-zinc-700 pl-3 bg-white",
              "shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_1px_1px_-0.5px_rgba(0,0,0,0.04),0px_3px_3px_-1.5px_rgba(0,0,0,0.04),_0px_6px_6px_-3px_rgba(0,0,0,0.04),0px_12px_12px_-6px_rgba(0,0,0,0.04),0px_24px_24px_-12px_rgba(0,0,0,0.04)]",
              "focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-300",
              poppins.className,
              ariaInvalid &&
                "border-red-500 focus-visible:border-red-600 focus-visible:ring-red-200",
              className
            )}
            {...rest}
          />
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";
