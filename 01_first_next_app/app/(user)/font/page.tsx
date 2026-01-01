import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Font Page",
  description: "This is the font page",
};

export default function FontPage() {
  return (
    <div className="container p-5 mx-auto">
      <p>FontPage</p>
      <h1 className="font-geist-mono font-thin">geist-mono</h1>
      <h1 className="font-geist-mono font-extralight">geist-mono</h1>
      <h1 className="font-geist-mono font-light">geist-mono</h1>
      <h1 className="font-geist-mono font-normal">geist-mono</h1>
      <h1 className="font-geist-mono font-medium">geist-mono</h1>
      <h1 className="font-geist-mono font-semibold">geist-mono</h1>
      <h1 className="font-geist-mono font-bold">geist-mono</h1>
      <h1 className="font-geist-mono font-extrabold">geist-mono</h1>
      <h1 className="font-geist-mono font-black">geist-mono</h1>

      <h1 className="font-geist-sans font-thin">geist-sans</h1>
      <h1 className="font-geist-sans font-extralight">geist-sans</h1>
      <h1 className="font-geist-sans font-light">geist-sans</h1>
      <h1 className="font-geist-sans font-normal">geist-sans</h1>
      <h1 className="font-geist-sans font-medium">geist-sans</h1>
      <h1 className="font-geist-sans font-semibold">geist-sans</h1>
      <h1 className="font-geist-sans font-bold">geist-sans</h1>
      <h1 className="font-geist-sans font-extrabold">geist-sans</h1>
      <h1 className="font-geist-sans font-black">geist-sans</h1>

      {/* <h1 className="font-zalando-sans-exp font-thin">font-zalando-sans-exp</h1> */}
      <h1 className="font-zalando-sans-expanded font-extralight">
        font-zalando-sans-exp
      </h1>
      <h1 className="font-zalando-sans-expanded font-light">
        font-zalando-sans-exp
      </h1>
      <h1 className="font-zalando-sans-expanded font-normal">
        font-zalando-sans-exp
      </h1>
      <h1 className="font-zalando-sans-expanded font-medium">
        font-zalando-sans-exp
      </h1>
      <h1 className="font-zalando-sans-expanded font-semibold">
        font-zalando-sans-exp
      </h1>
      <h1 className="font-zalando-sans-expanded font-bold">font-zalando-sans-expanded</h1>
      <h1 className="font-zalando-sans-expanded font-extrabold">
        font-zalando-sans-exp
      </h1>
      <h1 className="font-zalando-sans-expanded font-black">
        font-zalando-sans-exp
      </h1>
    </div>
  );
}
