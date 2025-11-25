import Header from "@/components/Header";

export const metadata = {
  title: "User Page",
  description: "This is the user page",
  authors: [
    { name: "Jaimin Patel" },
    { name: "mrjemmy", url: "https://mrjemmy.com" },
  ],
  keywords: ["next.js", "react", "user"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
    <Header />
    {children}
  </>;
}
