import Product from "@/components/product/Product"
import Search from "@/components/productSearch/Search";
import { IProduct } from "@/types/products";

export default async function Products({ searchParams }: { searchParams: Promise<{ category: string }> }) {

    const { category } = await searchParams // to get query params data
    // useing `use` api how can we achive this? it's in documentations
    // to use this searchParams in client component `import { useSearchParams } from "next/navigation";`
    // then `const searchParams = useSeachParams()`
    // to access the data const queryParam = searchParams.get("queryParam") or searchParams.getAll("queryParam")

    const res = await fetch('https://fakestoreapi.com/products');
    const data: IProduct[] = await res.json();
    return (
        <>
            <Search />
            <div className="flex flex-wrap mt-1.5">
                <Product data={data} category={category} /* {...data} : directly we can pass this */ />
            </div>
        </>

    )
}
