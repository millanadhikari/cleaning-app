import { useState, React } from 'react'
import Image from 'next/image'

import EditProduct from '../Booking/EditProduct'


function ProductCard({ img, title, price, first, firstSub, second, third, options }) {
    const [editPackage, setEditPackage] = useState(false)
    return (
        <div className="w-[22rem] sm:w-[30rem] flex flex-col mx-auto p-4 bg-white shadow-md ">
            <Image src={img} alt="Studio Apartment" width={300} height={200} objectFit="contain" />

            <div className="flex items-center justify-between">
                <div className="py-4">
                    <h1>{title}</h1>
                    <p>{price}</p>
                </div>
                <div className="mr-6 flex ring-1 ring-yellow-500 text-yellow-500 gap-3 pl-2 cursor-pointer">
                    <button className="font-semibold">ADD</button>
                    <p className="bg-yellow-200 p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </p>
                </div>
            </div>
            <ul className="text-gray-500 flex text-sm flex-col gap-2 list-disc mx-4 mb-4">
                <li><span className="font-semibold">{first}</span>-{firstSub}</li>
                <li className="text-gray-300">{second}</li>
                <li className="text-gray-300">{third}</li>
            </ul>
            <div className="flex justify-between cursor-pointer">
                <button
                    className="w-[11rem] text-sm ring-1 ring-green-500 text-green-600 bg-green-50 p-2 focus:ring-0 focus:outline-none"
                    onClick={() => setEditPackage(!editPackage)}>Edit this package ></button>
                <button className="text-blue-600 text-sm focus:ring-0 focus:outline-none">View Details</button>
            </div>
            <div className="w-full">
            {
                editPackage && 
                    <EditProduct 
                        title={title} 
                        firstSub={firstSub}
                        editPackage={editPackage} 
                        setEditPackage={setEditPackage} />
            }
            </div>


        </div>
    )
}

export default ProductCard
