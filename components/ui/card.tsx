"use client";
import { cn } from "@/utils/classNames";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        // Glassmorphism + hover animation + shadow
        "rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 text-card-foreground shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group",
        className
      )}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }: CardProps) {
  return <div className={cn("p-4", className)} {...props} />;
}
