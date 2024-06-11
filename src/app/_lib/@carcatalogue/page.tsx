import SearchBar from "@/components/SearchBar";

export default function Catalogue (){
    return (
        <>
            <div className="text-white h-full w-full p-6">

                <h1 className="font-bold text-6xl mt-5 mb-5">Car Catalogue</h1>
                <p className="text-2xl">Explore our Car you might like </p>
                <SearchBar />
            </div>
        </>
    )
}