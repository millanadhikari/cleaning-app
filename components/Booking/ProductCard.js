import { useState, useEffect, React } from 'react'
import Image from 'next/image'

import EditProduct from '../Booking/EditProduct'
import { addProduct, removeProduct } from '../../redux/cartReducer'
import { useDispatch } from "react-redux"
import { useSelector } from 'react-redux'



function ProductCard({ data, addedToCart, onClick }) {
    const [editPackage, setEditPackage] = useState(false)
    const dispatch = useDispatch()
    const [cart, setCart] = useState(false)
    const [quantity, setQuantity] = useState(1);
    const [add, setAdd] = useState(false)
    const [id, setId] = useState({})

    const subQuantity = useSelector((state) => state.cart.quantity);
    const products = useSelector((state) => state.cart.products);





    const handleClick = () => {
        dispatch(addProduct({ ...data, quantity, price: data.price * quantity }))
        setId({ data })
        // setQuantity(quantity + 1)
        setCart(!cart)


    }

    useEffect(() => {
        //    products && products.map((item =>(
        //        item.id !== data.id && setId(data.id)
        //    )))


        //    setAdd(true)
        //    console.log(add)

    }, [subQuantity])


    const handleEdit = () => {
        setEditPackage(!editPackage)
        // subQuantity < 1 && dispatch(addProduct({ ...data, quantity, price: data.price * quantity }))
        // subQuantity > 1 && products.map((item) => {
        //     item.id == data.id
        // })




        // setCart(!cart)
    }

    const handleRemove = () => {
        dispatch(removeProduct({ ...data, quantity }))
        setCart(!cart)
    };

    return (
        <div className="w-[22rem] sm:w-[30rem] flex flex-col mx-auto p-4 bg-white shadow-md ">
            <Image src={data.img} alt="Studio Apartment" width={300} height={200} objectFit="contain" />
            <div className="flex items-center justify-between">
                <div className="py-4">
                    <h1>{data.title}</h1>
                    <p>{data.price}</p>
                </div>
                {!cart &&
                    <div onClick={handleClick} className="mr-6 flex ring-1 ring-yellow-500 text-yellow-500 gap-3 pl-2 cursor-pointer">
                        <button className="font-semibold">ADD</button>
                        <p className="bg-yellow-200 p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </p>
                    </div>}
                {products ? products.map((item) => (
                    item.id == data.id &&
                    <div className="mr-6 flex ring-1 ring-yellow-500 text-yellow-500 gap-3 pl-2 cursor-pointer">
                        <button onClick={handleRemove} className="font-semibold">Remove</button>
                        <p className="bg-yellow-200 p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </p>
                    </div>
                )) : null}
            </div>
            <ul className="text-gray-500 flex text-sm flex-col gap-2 list-disc mx-4 mb-4">
                <li><span className="font-semibold">{data.first}</span>-{data.firstSub}</li>
                <li className="text-gray-300">{data.second}</li>
                <li className="text-gray-300">{data.third}</li>
            </ul>
            <div className="flex justify-between cursor-pointer">
                <button
                    className="w-[11rem] text-sm ring-1 ring-green-500 text-green-600 bg-green-50 p-2 focus:ring-0 focus:outline-none"
                    onClick={handleEdit}>Edit this package ></button>
                <button className="text-blue-600 text-sm focus:ring-0 focus:outline-none">View Details</button>
            </div>
            <div className="w-full">
                {
                    editPackage &&
                    <EditProduct
                        id={data.id}
                        title={data.title}
                        firstSub={data.firstSub}
                        editPackage={editPackage}
                        price={data.price}
                        data={data}
                        cart={cart}
                        setCart={setCart}
                        setEditPackage={setEditPackage} />
                }
            </div>
        </div>
    )
}

export default ProductCard
