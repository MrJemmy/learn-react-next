import type { Metadata } from "next";
import { Geist, Geist_Mono, Zalando_Sans_Expanded } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";

/*
subsets: it's specifies which character subsets to include in the font. there are so many
Ex: latin - includes characters used in English and Western European languages.
Ex: cyrillic - includes characters used in Russian, Bulgarian and other Cyrillic-based languages.

variable: it's used to define a CSS variable that can be used to reference the font in your styles.

weight: it's specifies the font weights to include. Font weights determine the thickness of the characters.
*/

/*
Now to apply these fonts we have to create css variables in globals.css file
*/

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const zalandoSansExpanded = Zalando_Sans_Expanded({
  variable: "--font-zalando-sans-exp",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Next",
  description: "mastering next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${zalandoSansExpanded.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
