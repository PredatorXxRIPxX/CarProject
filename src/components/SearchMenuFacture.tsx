"use client"

import { Combobox, Transition } from '@headlessui/react'
import { useState, Fragment } from 'react'
import Image from 'next/image'
import { manufacturers } from '@/app/_data'

interface Props {
    manufacturer: string,
    setManufacturer: (manufacturer: string) => void
}

export default function SearchMenuFacture({ manufacturer, setManufacturer }: Props) {
    const [query, setQuery] = useState('')

    const filteredManufacturers = query === '' ? manufacturers : manufacturers.filter((manufacturer) =>
        manufacturer.toLowerCase().includes(query.toLowerCase())
    )

    return (
        <div className="mt-6 mb-6">
            <Combobox value={manufacturer} onChange={setManufacturer}>
                <div className="relative w-full">
                    <div className="flex items-center border-2 bg-white border-gray-300 rounded-md">
                        <Combobox.Button className="p-2">
                            <Image src="/image/car-logo.svg" width={20} height={20} alt="search icon" />
                        </Combobox.Button>
                        <Combobox.Input
                            placeholder="Volkswagen, Toyota, Ford..."
                            displayValue={(manufacturer: string) => manufacturer}
                            onChange={(e) => setQuery(e.currentTarget.value)}
                            className="w-full p-2 rounded-md text-black"
                        />
                    </div>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-30 overflow-y-auto h-40">
                            {filteredManufacturers.length === 0 && query !== '' ? (
                                <div className="cursor-default select-none relative py-2 px-4 text-gray-700">
                                    No results found
                                </div>
                            ) : (
                                filteredManufacturers.map((manufacturer) => (
                                    <Combobox.Option
                                        key={manufacturer}
                                        className={({ active }) =>
                                            `cursor-pointer select-none relative py-2 pl-10 pr-4 ${active ? 'bg-blue-600 text-white' : 'text-gray-900'}`
                                        }
                                        value={manufacturer}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                                    {manufacturer}
                                                </span>
                                                {selected ? (
                                                    <span
                                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-blue-600'}`}
                                                    >
                                                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L9 14.414l-3.707-3.707a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}
