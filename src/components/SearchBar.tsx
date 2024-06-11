"use client"
import SearchMenuFacture from "./SearchMenuFacture"
import { FormEventHandler, useState } from "react"

export default function SearchBar(){
    const [manufacturer, setManufacturer] = useState('')
    const handleSearch :FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        console.log('searching for car')
    }
    return (
        <form onSubmit={handleSearch}>
            <SearchMenuFacture props={{ manufacturer,setManufacturer}}/>
            <button className=" rounded-2xl bg-violet-700 text-white p-4" type="submit">Search</button>
        </form>
    )
}