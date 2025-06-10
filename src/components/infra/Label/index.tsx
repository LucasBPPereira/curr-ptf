import { cn } from "@/shared/utils/cn";
import { LabelHTMLAttributes } from "react";

interface TLabelInfra extends LabelHTMLAttributes<HTMLLabelElement> {
    optional?: boolean;
    required?: boolean;
    label: string;
}

export const Label = ({ optional, required, className, label, htmlFor, ...rest}: TLabelInfra) => {

 return (
   <label 
    htmlFor={htmlFor}
    className={cn("flex items-center justify-between text-zinc-800 font-sans", className, required && "font-medium")}
    {...rest}
   >
     {required ? <span>{label} *</span> : label}
     {optional && (<span className="text-zinc-500 text-sm font-sans ">Opcional *</span>)}
   </label>
 );
}