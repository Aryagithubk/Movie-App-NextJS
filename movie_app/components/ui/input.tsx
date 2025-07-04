// filepath: c:\Users\princ\Desktop\Learn_react\movie_app\components\ui\input.tsx
import { cn } from "@/utils/classNames";
import { InputHTMLAttributes, forwardRef } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);