import { cn } from "@/shared/utils/cn";
import { useEffect, useState } from "react";

/**
 * Animation for invalid fields, if the @param show is true, the component is mounted and a div will appear to right and if the @param show is false, the component will disappear.
 * 
 * @see InvalidField - The inspiration is: {@link https://www.beekai.com/contact-us}
 */
export const InvalidField = ({ show }: { show: boolean }) => {
  const [visible, setVisible] = useState<boolean>(show);
  const [widthClass, setWidthClass] = useState<string>("w-0");

    useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (show) {
      setVisible(true); 
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setWidthClass("w-2");
        });
      });
    } else {
      setWidthClass("w-0");
      timeout = setTimeout(() => setVisible(false), 300); 
    }

    return () => clearTimeout(timeout);
  }, [show]);


  if (!visible) return null;

  return (
    <div className="overflow-hidden absolute z-10 h-full rounded-s-md left-0 top-0 w-5">
      <div
        className={cn(
          "absolute top-0 left-0 h-full bg-red-500 transition-[width] duration-300",
          widthClass
        )}
      />
    </div>
  );
};