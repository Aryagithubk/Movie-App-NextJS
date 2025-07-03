// filepath: c:\Users\princ\Desktop\Learn_react\movie_app\components\ui\switch.tsx
"use client";

import { useState, forwardRef } from "react";
import { cn } from "@/utils/classNames";
import type { ComponentPropsWithoutRef } from "react";

export interface SwitchProps extends ComponentPropsWithoutRef<"button"> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (
    { checked: controlledChecked, onCheckedChange, className, ...props },
    ref
  ) => {
    const [uncontrolledChecked, setChecked] = useState(false);
    const checked = controlledChecked ?? uncontrolledChecked;

    const toggle = () => {
      const newState = !checked;
      if (onCheckedChange) onCheckedChange(newState);
      if (controlledChecked === undefined) setChecked(newState);
    };

    return (
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        ref={ref}
        onClick={toggle}
        className={cn(
          "inline-flex h-6 w-12 shrink-0 cursor-pointer items-center rounded-full border-2 transition-colors",
          checked
            ? "bg-blue-600 border-blue-600"
            : "bg-gray-300 border-gray-300",
          className
        )}
        {...props}
      >
        <span
          className={cn(
            "block h-5 w-5 transform rounded-full bg-white transition-transform",
            checked ? "translate-x-6" : "translate-x-1"
          )}
        />
      </button>
    );
  }
);