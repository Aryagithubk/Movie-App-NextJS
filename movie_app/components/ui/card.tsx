// filepath: c:\Users\princ\Desktop\Learn_react\movie_app\components\ui\card.tsx
import { cn } from "@/utils/classNames";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-gray-200 bg-white shadow-md transition-shadow duration-300 hover:shadow-lg",
        className
      )}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }: CardProps) {
  return <div className={cn("p-4", className)} {...props} />;
}