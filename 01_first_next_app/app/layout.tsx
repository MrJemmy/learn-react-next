import type { Metadata } from "next";
import { Geist, Geist_Mono, Zalando_Sans_Expanded } from "next/font/google";
import "./globals.css";



/*
subsets: it's specifies which character subsets to include in the font. there are so many
Ex: latin - includes characters used in English and Western European languages.
Ex: cyrillic - includes characters used in Russian, Bulgarian and other Cyrillic-based languages.

variable: it's used to define a CSS variable that can be used to reference the font in your styles.

weight: it's specifies the font weights to include. Font weights determine the thickness of the characters.

style: "normal", what is this?
display: "swap", what is this?

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
  title: {
    default: "NEXT",
    template: "%s | NEXT",
  },
  description: "mastering next.js",
  authors: [
    { name: "Jaimin Patel" },
    { name: "mrjemmy", url: "https://mrjemmy.com" },
  ],
  keywords: ["next.js", "react", "user"],
  icons: {
    // icon: "/foolFavicon.svg",
  },
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
        {children}
      </body>
    </html>
  );
}
