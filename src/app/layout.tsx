import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vicktor Teixeira - Dev",
  description:
    "I'm a computer science bachelor and software engineer who loves to build things for the web. Here you can find some of my projects and learn more about me.",
  authors: [{ name: "Vicktor Teixeira", url: "github.com/v1ckt" }],
  keywords: ["Vicktor Teixeira", "Developer", "Portfolio", "Vicktor"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="loyVs7u4l-uiip0zf_XmC5ObHkJ9_bv8qdWaj0PHfNg"
        />
        <link rel="canonical" href="https://v1ckt.github.io" />
        <link rel="icon" href="./favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function() {
                  const storedTheme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const theme = storedTheme || (prefersDark ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', theme);
                })();
              `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Header className="z-[100]" />
        {children}
      </body>
    </html>
  );
}
