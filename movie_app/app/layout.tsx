import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "@/components/Providers";
import { cn } from "@/utils/classNames";
import Footer from "./footer";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Movie Search App",
  description: "Search movies with OMDB API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.variable, "font-sans antialiased")}>
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
