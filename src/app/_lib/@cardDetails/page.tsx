"use client"
import { CarProps } from "@/app/_data";
import Image from "next/image";
import { Fragment } from "react";
import { Dialog,Transition } from "@headlessui/react";

interface CardDetailsProps {
    isOpen: boolean;
    onClose: () => void;
    car: CarProps;
}

export default function CardDetails({isOpen, onClose, car}: CardDetailsProps){
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative inset-0 z-10 overflow-y-auto" onClose={onClose}>
                    <Transition.Child as={Fragment} enter="ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-100" leaveFrom="opcaity-100" leaveTo="opacity-0">
                        <div className="inset-0 fixed bg-black bg-opacity-25"></div>
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-200"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-100"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"

                            >
                                <Dialog.Panel  className="relative bg-white p-4 rounded-xl shadow-md text-black drop-shadow-md shadow-black w-3/4">
                                    <Dialog.Title as="h3" className="text-2xl font-bold">{car.model}</Dialog.Title>
                                    <p className="text-gray-500 text-lg">{car.make}</p>
                                    <p className="text-gray-500 text-lg">4$</p>
                                    <div className="w-full flex items-center justify-center">

                                        <Image src={'/image/hero.png'} width={300} height={300} alt="product"/>
                                    </div>

                                    <Dialog.Description className="text-lg flex items-center justify-between p-2 font-bold mt-4"><div>Class: </div><div>{car.class}</div></Dialog.Description>
                                    <Dialog.Description className="text-lg flex items-center justify-between p-2 font-bold"><div>City mpg: </div><div>{car.city_mpg}</div></Dialog.Description>
                                    <Dialog.Description className="text-lg flex items-center justify-between p-2 font-bold"><div>Transmmission: </div><div>{car.transmission}</div></Dialog.Description>
                                    <Dialog.Description className="text-lg flex items-center justify-between p-2 font-bold"><div>Cylinders: </div><div>{car.cylinders}</div></Dialog.Description>
                                    <Dialog.Description className="text-lg flex items-center justify-between p-2 font-bold"><div>Displacement: </div><div>{car.displacement}</div></Dialog.Description>
                                    <Dialog.Description className="text-lg flex items-center justify-between p-2 font-bold"><div>Combination mpg: </div><div>{car.combination_mpg}</div></Dialog.Description>
                                    <Dialog.Description className="text-lg flex items-center justify-between p-2 font-bold"><div>HighWay mpg: </div><div>{car.highway_mpg}</div></Dialog.Description>
                                    <Dialog.Description className="text-lg flex items-center justify-between p-2 font-bold"><div>Year: </div><div>{car.year}</div></Dialog.Description>

                                    <div className="w-full p-5 flex items-center justify-evenly">
                                        <div className="flex-col items-center" >
                                            <Image src="/image/steering-wheel.svg" width={20} height={20} alt="star"/>
                                            <p>{car.drive}</p>
                                        </div>
                                        <div className="flex-col items-center" >
                                            <Image src="/image/tire.svg" width={20} height={20} alt="star"/>
                                            <p>{car.transmission}</p>
                                        </div>
                                        <div className="flex-col items-center" >
                                            <Image src="/image/gas.svg" width={20} height={20} alt="star"/>
                                            <p>{car.fuel_type}</p>
                                        </div>
                                    </div>
                                    <button onClick={onClose} className="bg-violet-700 mt-4 w-full text-white font-bold flex items-center justify-center rounded-xl p-4 cursor-pointer">
                                        Close
                                    </button>
                                </Dialog.Panel>
                            </Transition.Child>

                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}