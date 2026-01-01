// "use client"

import { IProduct } from "@/types/products";
import Image from "next/image";
import Link from "next/link";

export default async function Product({ data, category }: { data: IProduct[], category: string }) {

    let filteredData: IProduct[] = data.filter((item)=>{
        return item.category === category
    })

    if(filteredData.length === 0){
        filteredData = data
    }

    return (
        <>
            {filteredData.map((item: IProduct) => {
                return (
                    <Link href={`/products/${item.id}`} key={item.id} className="w-3/12">
                        <div className="border p-4 m-4">
                            <div className="relative w-full h-50">
                                <Image
                                    src={item.image}
                                    alt="product image"
                                    fill={true}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    quality={50}
                                    loading="eager"
                                    placeholder="blur"
                                    blurDataURL="/placeholder.png" // blurDataURL needs to prove 
                                    className="object-contain"
                                />
                            </div>

                            <h2 className="font-bold" title={item.title}>
                                {item.title.length > 30 ? item.title.slice(0, 30) + "..." : item.title}
                            </h2>
                            <p title={item.description}>
                                {item.description.length > 90 ? item.description.slice(0, 90) + "..." : item.description}
                            </p>
                            <p className="italic">${item.price}</p>
                            <p>{item.category}</p>
                        </div>
                    </Link>

                )
            })}
        </>
    )
}
