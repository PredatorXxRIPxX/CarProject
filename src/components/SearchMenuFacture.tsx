"use client"
import { Combobox,Transition } from '@headlessui/react'
import { ChangeEvent, useState  , Fragment} from 'react'
import Image from 'next/image'
import { manufacturers } from '@/app/_data'

interface Props{
    manufacturer: String,
    setmanufacture: (manufacturer: String) => void
}

export default function SearchMenuFacture({props}:{props:Props}){
    const [querry,setQuerry] = useState('')

    return (
        <div className = "mt-6 mb-6" >
            <Combobox value={props.manufacturer} onChange={props.setmanufacture}>
                <div className='relative w-full'>
                    <Combobox.Button className='w-full p-2 border-2 border-gray-300 rounded-md absolute'>
                        <Image src='/image/car-logo.svg' width={20} height={20} alt='search icon'/>
                    </Combobox.Button>
                    <Combobox.Input
                     placeholder='Volskwagen, Toyota, Ford...'
                     displayValue={(manufacture:string)=>manufacture}
                     onChange={(e) => setQuerry(e.currentTarget.value)}
                     className='w-full p-2 rounded-md text-black pl-10' value={querry}/>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuerry('')}
                    >
                        <Combobox.Options className="bg-white rounded-b-md overflow-hidden">
                            {
                            querry!=""?manufacturers.filter((manufacture) => manufacture.toLowerCase().includes(querry.toLowerCase())).map((manufacture) => <Combobox.Option className="text-black p-2 border-solid border-b-2 cursor-pointer border-gray-50 border-t-2 bg-white" key={manufacture} onClick={()=>props.setmanufacture(manufacture)} value={manufacture}>{manufacture}</Combobox.Option>)
                            :
                            (manufacturers.map((element)=><Combobox.Option className="text-black p-2 border-solid cursor-pointer border-b-2 border-gray-50 border-t-2 bg-white" key={element} onClick={()=>props.setmanufacture(element)} value={element}>{element}</Combobox.Option>))
                            }
                        </Combobox.Options>

                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}