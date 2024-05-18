import type { Metadata } from "next";
import { Open_Sans , Poppins , Nunito } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400' , '500' , '600' , '700' , '800'],
  variable: '--font-opensans',
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400' , '500' , '600' , '700' , '800'],
  variable: '--font-nunito',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400' , '500' , '600' , '700' , '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${openSans.variable} ${nunito.variable}`}>{children}</body>
    </html>
  );
}