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
          "inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 transition-colors",
          checked
            ? "bg-primary border-primary"
            : "bg-muted border-muted-foreground",
          className
        )}
        {...props}
      >
        <span
          className={cn(
            "block h-4 w-4 transform rounded-full bg-background transition-transform",
            checked ? "translate-x-4" : "translate-x-0"
          )}
        />
      </button>
    );
  }
);
