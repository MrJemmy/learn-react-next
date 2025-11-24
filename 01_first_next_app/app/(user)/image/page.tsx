import Image from "next/image";
import videoImage from "@/public/video.jpg";

// public folder images can be accessed directly using slash(/) prefix
export const metadata = {
  title: "Image Page",
  description: "This is the image page",
};

export default function ImageComponent() {
  return (
    <div className="container p-5 mx-auto">
      <p>Image page</p>
      <div className="flex flex-wrap">
        <div className="part1 m-2.5 h-[200px] w-[200px]">
          {/* while using image component , height and width is must to give */}
          <Image
            src="/video.jpg"
            alt="video"
            height={200}
            width={200}
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <div className="part1 m-2.5 h-[200px] w-[200px]">
          {/* it render images resolution based on need but we can mannage that using quality attribute and default is 75*/}
          {/* 
          setup in next.config.js
          module.exports = {
            images: {
              qualities: [25, 50, 75, 100],
            },
          }
          */}
          <Image
            src="/video.jpg"
            alt="video"
            height={200}
            width={200}
            className="w-full h-full rounded-md"
            quality={50}
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        <div className="part1 m-2.5 h-[200px] w-[200px] relative">
          {/* when we use fill do not need to use height and width but parent need's to use relative */}
          <Image
            src="/video.jpg"
            alt="video"
            fill={true}
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        <div className="part1 m-2.5 h-[200px] w-[200px] relative">
          {/* priority: Next.js 16, the priority property has been deprecated in favor of the `preload` property */}
          {/* use preload when we have single image that is large and want image to be load in head befor it load */}
          {/* loading and preload can not be used at the same time so remove's default lazy loading  */}
          <Image
            src="/video.jpg"
            alt="video"
            fill={true}
            preload={true} // false: Does not preload the image.  true:  Preloads the image by inserting a <link> in the <head>
            className="object-cover"
          />
        </div>

        <div className="part1 m-2.5 h-[200px] w-[200px] relative">
          {/* placeholder: is blur then we need to use blueDataURL and also image must be imported then only effect works well*/}
          {/* it has 3ed value `data:image/...` do RND */}
          <Image
            src={videoImage}
            alt="video"
            fill={true}
            quality={100}
            placeholder="blur"
            blurDataURL=""
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
