import React, { useState, useEffect } from 'react'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSelector } from 'react-redux'
import TotalPrice from '../TotalPrice';
import { useDispatch } from "react-redux"
import { addProduct, removeProduct } from '../../redux/cartReducer';




function ViewDetails({ details, setDetails, data }) {
    const [added, setAdded] = useState(false)
    const products = useSelector((state) => state.cart.products);
    const dispatch = useDispatch()



    useEffect(() => {
        products && products.map((item) => (
            item.id === data.id && setAdded(!added)
        ))

    }, [products])

    return (
        <div className="fixed top-0 right-0 left-0 w-full z-20 h-screen sm:p-5 sm:rounded-md overflow-auto scrollbar-none ">
            <div className="p-8 overflow-auto scrollbar-none bg-white sm:w-[40rem] sm:mx-auto rounded-md">

                <div onClick={() => setDetails(!details)} className="">
                    <span className="focus:outline-none focus:ring-0 bg-gray-200 rounded-full p-2 text-gray-600 cursor-pointer hover:bg-gray-300 hover:text-gray-600 focus:ring-0 focus:outline-none"><ArrowBackIcon fontSize="small" /></span>

                </div>
                <div className="flex align-center justify-between my-6">
                    <div>
                        <h1 className="font-semibold text-xl">{data.title}</h1>
                        <p1>$ {data.price}</p1>
                    </div>
                    {added ?
                        <div
                            onClick={() => dispatch(removeProduct({ ...data, quantity: 1 }), setAdded(!added))}
                            className="flex ring-1 h-8 ring-yellow-500 text-yellow-500 gap-3 align-center cursor-pointer">
                            <button className="font-semibold text-sm px-2 focus:outline-none">Remove</button>
                            <p className="bg-yellow-200 p-1 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </p>
                        </div> :
                        <div
                            onClick={() => dispatch(addProduct({ ...data, quantity: 1, price: data.price }))}
                            className="flex ring-1 h-8 ring-yellow-500 text-yellow-500 gap-3 align-center cursor-pointer">
                            <button className="font-semibold text-sm px-2">ADD</button>
                            <p className="bg-yellow-200 p-1 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </p>
                        </div>}
                </div>
                <div className="">
                    <h1 className="font-semibold">Standard Inclusions</h1>
                    <ul className="flex flex-col gap-2 my-4 text-sm">
                        <li>All floors swept, vacuumed, mopped</li>
                        <li>Bins emptied, trash taken out and bins sanitised (if applicable)</li>
                        <li>Cobwebs removed</li>
                        <li>Windows and sills cleaned (includes all inside windows and any accessible outside windows on the ground floor)</li>
                        <li>Ceiling fans dusted and cleaned</li>
                        <li>Ceiling lights cleaned and bugs removed (max 3m height)</li>
                        <li>Residual appliances, light fixtures, light switches and power points cleaned</li>
                        <li>All ledges, frames and skirting boards dusted and cleaned</li>
                        <li>Wall spot-cleaning (Full wash clean available at an additional price)</li>
                        <li>Blinds dusted (Full blind clean available at an additional price)</li>


                    </ul>
                </div>

                <div className="my-5">
                    <h1 className="font-semibold">Bathroom</h1>
                    <ul className="flex flex-col gap-2 my-4 text-sm">
                        <li>Tiles cleaned and mould removed (within reason)</li>
                        <li>Vanity cleaned inside and out</li>
                        <li>Sinks and taps cleaned and polished</li>
                        <li>Shower head, shower door tracks, and shower screen cleaned and polished</li>
                        <li>Cabinets cleaned inside and out</li>
                        <li>Mirrors cleaned and polished</li>
                        <li>Toilet paper holder cleaned</li>
                        <li>Toilet bowl cleaned and sanitised</li>
                        <li>All metal frames polished and sanitised</li>
                        <li>Bathtub and all drains cleaned</li>


                    </ul>
                </div>

                <div className="my-5">
                    <h1 className="font-semibold">Bedroom & office</h1>
                    <ul className="flex flex-col gap-2 my-4 text-sm">
                        <li>Wardrobe and drawers cleaned inside & out</li>
                        <li>Doors, skirting and door tracks cleaned</li>
                        <li>Mirrors cleaned and polished</li>
                    </ul>
                </div>

                <div className="my-5">
                    <h1 className="font-semibold">Add-ons</h1>
                    <ul className="flex flex-col gap-2 my-4 text-sm">
                        <li>Carpets cleaned (can be added at the end of the booking)</li>
                        <li>Full blind clean</li>
                        <li>Balconies</li>
                        <li>Balcony windows & sliding doors</li>
                        <li>Additional wall spot cleaning for up to 5 marks/stains per room</li>
                        <li>Fridge cleaned inside and out</li>
                        <li>Excessive pet hair removal</li>
                        <li>Laundry and/or separate toilet</li>
                        <li>Garage</li>
                    </ul>
                </div>
                <div className="absolute left-0">
                    {added && <TotalPrice />}
                </div>
            </div>

        </div>
    )
}







export default ViewDetails
