import {useState, React} from 'react'

import Checkbox from '@mui/material/Checkbox';

function EditProduct({ title, firstSub, editPackage, setEditPackage }) {
    const [threeMore, setThreeMore] = useState(false)

    return (
        <div className="fixed top-0 left-0 z-10 bg-gray-700 bg-opacity-200 w-full h-screen">
            <div className="mt-20 bg-white h-screen w-full rounded-3xl flex flex-col">
                <h1 className="m-5 mt-8 text-center text-xl font-semibold">{title}</h1>
                <div className="border-t-2 border-b-2 p-4">
                    <h2 className="font-semibold">Move-in/Move-Out Cleaning</h2>
                    <div className="mt-4">
                        <div className="flex items-center gap-2 text-sm">
                            <Checkbox color="primary" />
                            <p>{firstSub}</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <Checkbox color="primary" />
                            <p>I don't wnat any move-in/move-out cleaning</p>
                        </div>
                    </div>

                </div>
                <div className="p-4">
                    <h1 className="font-semibold">Add-ons</h1>
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2 text-sm">
                            <Checkbox color="primary" />
                            <p>I don't want any add-onw</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <Checkbox color="primary" />
                            <p>Laundry room</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <Checkbox color="primary" />
                            <p>Small balcony (up to 15 sqm)</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <Checkbox color="primary" />
                            <p>Separate toilet</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <Checkbox color="primary" />
                            <p>Laundry rooms</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <Checkbox color="primary" />
                            <p>Large balcony (15.3-sqm)</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <Checkbox color="primary" />
                            <p>Balcony windows and sliding doors (per room)</p>
                        </div>

                        {threeMore ?
                            <div>
                                <div className="flex items-center gap-2 text-sm">
                                    <Checkbox color="primary" />
                                    <p>Blind cleaning (per set)</p>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <Checkbox color="primary" />
                                    <p>Fridge- inside and out</p>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <Checkbox color="primary" />
                                    <p>Garage</p>
                                </div>
                            </div> :
                            <h1 
                                onClick={() => setThreeMore(!threeMore)}
                                className="font-semibold text-blue-500 ml-5 m-4">+3 MORE</h1>}


                    </div>
                </div>

            </div>
            <div
                className="absolute top-12 right-5"
                onClick={() => setEditPackage(!editPackage)}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
        </div>
    )
}

export default EditProduct
