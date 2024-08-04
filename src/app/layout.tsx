import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vicktor Teixeira - Dev",
  description: "Vicktor Teixeira Developer Portfolio",
  authors: [{ name: "Vicktor Teixeira", url: "github.com/v1ckt" }],
  keywords: ["Vicktor Teixeira", "Developer", "Portfolio", "Vicktor"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header className="z-[100] sticky top-0 left-0" />
        {children}
      </body>
    </html>
  );
}
