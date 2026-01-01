import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Page",
};

export default function Home() {
  return <div className="container p-5 mx-auto ">User page</div>;
}
