"use client"
import React, { useEffect, useRef, useState } from 'react'

interface ISearchData{
    keyword: string
}

export default function Search() {

    const [searchData, setSearchData] = useState<ISearchData | null>(null)
    // type `HTMLInputElement` : we can dinf after hover to ref attribute, init null value is require
    const inputRef = useRef<HTMLInputElement>(null)


    // React.FormEvent or : such types we can find after hover to event attribute
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        setSearchData({keyword: event.target.value})
    }

    const handleFormSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log("search done")
    }

    useEffect(()=>{
        // current?. : comes auto, because init value of ref is null 
        inputRef.current?.focus()
    }, [])

    return (
        <form onSubmit={handleFormSearch} className='flex m-2 mb-3.5'>
            <input type="text" onChange={handleInputChange} ref={inputRef} className='block border-white border-2 ' />
            <input type="submit" value="submit" className='block text-black ms-2.5 bg-blue-500 p-1.5 rounded-sm' />
            <p>{searchData && searchData.keyword}</p>
        </form>
    )
}
