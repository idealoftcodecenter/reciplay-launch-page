import type { Metadata } from "next";
import "./globals.css";

import { Inter, Jersey_15 } from "next/font/google";

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
});

const jersey_15 = Jersey_15({
  subsets: ['latin', 'latin-ext'],
  weight: ["400"],
  variable: "--font-jersey-15",
});

export const metadata: Metadata = {
  title: "Cookable Recipes",
  description: "Making Recipes Cookable",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${jersey_15.variable} antialiased bg-[#FFFCF7]`}>
        {children}
      </body>
    </html>
  );
}
