import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
};

export default function Home() {
  return <div className="container p-5 mx-auto">Admin page</div>;
}
