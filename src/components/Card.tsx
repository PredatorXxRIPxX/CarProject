"use client"

import Image from "next/image"
import { CarProps } from "@/app/_data"
import { useState } from "react"
import CardDetails from "@/app/_lib/@cardDetails/page"


interface CarProp{
    props:CarProps
}

export default function Card({props}:CarProp){
    const {city_mpg,model,make,year,transmission,fuel_type,drive} = props
    const [isHovered,setIsHovered] = useState(false);
    const [Details,setDetails] = useState(false)
    const mouseIn = () => {
        setIsHovered(true)
    }  
    const mouseOut = () => {
        setIsHovered(false)
    }

    const openDetails = () => {
        setDetails(true)
    }
    return (
        <div onMouseOver={mouseIn} onMouseOut={mouseOut} className="p-4 bg-white font-bold rounded-xl shadow-md text-black drop-shadow-md shadow-black cursor-pointer">
            <h1 className="font-bold text-black text-2xl">{model}</h1>
            <p className="text-gray-500 text-lg">{make}</p>
            <p className="text-gray-500 text-lg">4$</p>
            <Image src={'/image/hero.png'} width={300} height={300} alt="product"/>
            {!isHovered ?
            <div className="w-full p-5 flex items-center justify-evenly">
                <div className="flex-col items-center" >
                    <Image src="/image/steering-wheel.svg" width={20} height={20} alt="star"/>
                    <p>{drive}</p>
                </div>
                <div className="flex-col items-center" >
                    <Image src="/image/tire.svg" width={20} height={20} alt="star"/>
                    <p>{transmission}</p>
                </div>
                <div className="flex-col items-center" >
                    <Image src="/image/gas.svg" width={20} height={20} alt="star"/>
                    <p>{fuel_type}</p>
                </div>
            </div>
            :
            <button onClick={openDetails} className="bg-violet-700 mt-4 w-full text-white font-bold flex items-center justify-center rounded-xl p-4 cursor-pointer">
                See More Details
            </button>
            }
            <CardDetails isOpen={Details} onClose={()=>setDetails(false)} car={props} />
        </div>
    )
}