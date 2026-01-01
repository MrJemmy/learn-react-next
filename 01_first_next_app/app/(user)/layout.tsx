import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;  /* passing component as child, type is React.ReactNode */
}>) {
  return <>
    <Header />
    {children}
  </>;
}
