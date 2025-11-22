import type { Metadata } from "next";
import localFont from "next/font/local";
import ThemeSetter from "@/components/config/themeSetter";
import Header from "@/components/header/header";
import "./globals.css";

const inter = localFont({
  src: "./fonts//inter//InterVariable.woff2",
});

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
    <html lang='en'>
      <head>
        <meta
          name='google-site-verification'
          content='loyVs7u4l-uiip0zf_XmC5ObHkJ9_bv8qdWaj0PHfNg'
        />
        <link rel='canonical' href='https://v1ckt.github.io' />
        <link rel='icon' href='./favicon.ico' />
        <ThemeSetter />
      </head>
      <body
        className={`${inter.className}`}>
        <Header className='z-50' />
        <div className='fixed z-10 top-0 left-0 w-screen h-25 bg-gradient-to-b from-0% from-main-bg/60 to-transparent to-100%' />
        <div className='wrapper px-6 lg:px-32 2xl:px-[16vw]'>
          {children}
        </div>
        <div className='fixed z-10 bottom-0 left-0 w-screen h-20 bg-gradient-to-t from-0% from-main-bg/60 to-transparent to-100%' />
      </body>
    </html>
  );
}
