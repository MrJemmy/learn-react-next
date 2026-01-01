// 'use client'
import Image from "next/image";
import { IProduct } from "@/types/products";


export default async function page({ params }: { params: Promise<{ id: string }> }) {
    // const { id } = use(params) // if it's client component
    // Alternatively Client Components can use the `useParams` hook to access the params anywhere in the Client Component tree.
    const { id } = await params // for server component
    // catch-all-segments  [...path] => with this we can have many params. Ex: username/blogid
    const response  = await fetch(`https://fakestoreapi.com/products/${id}`)
    const item: IProduct = await response.json()

    
    return (
        <div className="container mx-auto">
            <div className="border p-4 m-4">
                <div className="relative w-full h-100">
                    <Image
                        src={item?.image} // placeholder neede in client component
                        alt="product image"
                        fill={true}
                        quality={50}
                        placeholder="blur"
                        blurDataURL="/placeholder.png" // blurDataURL needs to prove 
                        className="object-contain"
                    />
                </div>

                <h2 className="font-bold">
                    {item.title}
                </h2>
                <p>
                    {item.description}
                </p>
                <p className="italic">${item.price}</p>
                <p>{item.category}</p>
            </div>
        </div>
    )
}
