import type { Metadata } from "next";
import localFont from "next/font/local";
import ThemeSetter from "@/components/config/themeSetter";
import "./globals.css";
import Header from "@/components/header/header";

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
    <html className='overflow-hidden' lang='en'>
      <head>
        <meta
          name='google-site-verification'
          content='loyVs7u4l-uiip0zf_XmC5ObHkJ9_bv8qdWaj0PHfNg'
        />
        <link rel='canonical' href='https://v1ckt.github.io' />
        <link rel='icon' href='./favicon.ico' />
      </head>
      <body
        className={`${inter.className} h-screen overflow-x-hidden overflow-y-scroll`}>
        <ThemeSetter />
        <Header className='fixed z-10 mt-4' />
        <div className='wrapper px-6 lg:px-32 2xl:px-[16vw] h-screen'>
          {children}
        </div>
      </body>
    </html>
  );
}
