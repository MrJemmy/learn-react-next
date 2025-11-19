import Image from "next/image";

// public folder images can be accessed directly using slash(/) prefix

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
          <Image
            src="/video.jpg"
            alt="video"
            height={200}
            width={200}
            className="w-full h-full object-cover rounded-md"
            quality={50}
          />
        </div>

        <div className="part1 m-2.5 h-[200px] w-[200px] relative">
          {/* when we use fill do not need to use height and width but parent need's to use relative */}
          {/* objectFit attribute only works with fill */}
          <Image
            src="/video.jpg"
            alt="video"
            fill={true}
            objectFit="cover"
            priority={false}
          />
        </div>

        <div className="part1 m-2.5 h-[200px] w-[200px] relative">
          {/* priority */}
          <Image
            src="/video.jpg"
            alt="video"
            fill={true}
            objectFit="cover"
            priority={false}
          />
        </div>
      </div>
    </div>
  );
}
