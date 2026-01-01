// server
import Link from "next/link";
import Image from "./header/nav/Image";
import Font from "./header/nav/Font";

export default function Header() {
  return (
    <>
      <header>
        <div className="container flex justify-between p-5 mx-auto">
          <div className="logo font-mono">Next</div>
          <nav className="font-sans">
            <ul className="flex gap-3.5">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/image"}><Image/></Link> 
              </li>
              <li>
                <Link href={"/font"}><Font/></Link>
              </li>
              <li>
                <Link href={"/products"}>products</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
