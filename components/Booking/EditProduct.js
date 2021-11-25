import { useState, useEffect, React } from 'react'

import Checkbox from '@mui/material/Checkbox';
import TotalPrice from '../TotalPrice'
import { motion, AnimatePresence } from "framer-motion"
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux"
import { addProduct, removeProduct } from '../../redux/cartReducer'





function EditProduct({
    data,
    id,
    title,
    firstSub,
    cart,
    setCart,
    editPackage,
    setEditPackage,
    price }) {
    const [threeMore, setThreeMore] = useState(false)
    const [quantity, setQuantity] = useState(1);

    const [checked, setChecked] = useState(true);
    const [remove, setRemove] = useState(false);
    const [supply, setSupply] = useState(true);
    const [noAddons, setNoAddons] = useState(true);
    const [laundry, setLaundry] = useState(false);
    const [balcony, setBalcony] = useState(false);
    const [toilet, setToilet] = useState(false);
    const [largeBalcony, setLargeBalcony] = useState(false);
    const [steamState, setSteamState] = useState([]);
    const [total, setTotal] = useState(0);

    // const [sliding, setSliding] = (false);
    // const [blind, setBlind] = useState(false);
    // const [fridge, setFridge] = useState(false);





    const dispatch = useDispatch()
    const products = useSelector((state) => state.cart.products);

    const handleChange = (event) => {
        setChecked(event.target.checked);
        console.log(steamState)
    };


    const handleRemove = (event) => {
        setRemove(event.target.checked);
    };

    const handleAdd = () => {


        products.length ? products.map((product) => (product.id !== data.id &&
            dispatch(addProduct({ ...data, quantity, price: price * quantity }))))
            : dispatch(addProduct({ ...data, quantity, price: price * quantity }))


        steamState.map((d => {
            d.select && dispatch(addProduct({ ...d, quantity:d.quantity, price: d.price * d.quantity }))

        }))

        setEditPackage(!editPackage)
        setCart(!cart)


    };

    // const handleLaundry = (event) => {
    //     setLaundry(event.target.checked)

    //     dispatch(addProduct({
    //         id: "2139323",
    //         title: "Laundry",
    //         quantity: "1",
    //         price: "50",
    //         second: "CLEANING CHECKLIST",
    //         third: "ADD-ONS",
    //         quantity, price: price * quantity
    //     }))

    // }

  

    

    useEffect(() => {

        let steam = [
            {
                id: "2139323",
                title: "Laundry",
                quantity: "1",
                price: "50",
                second: "CLEANING CHECKLIST",
                third: "ADD-ONS",
            },
            {
                id: "2229323",
                title: "Blinds",
                quantity: "1",
                price: "50",
                second: "CLEANING CHECKLIST",
                third: "ADD-ONS",
            },
            {
                id: "2222323",
                title: "Small balcony",
                quantity: "1",
                price: "25",
                second: "CLEANING CHECKLIST",
                third: "ADD-ONS",
            },
            {
                id: "2222223",
                title: "Large Balcony",
                quantity: "1",
                price: "50",
                second: "CLEANING CHECKLIST",
                third: "ADD-ONS",
            },
            {
                id: "2222222",
                title: "Separate toilet",
                quantity: "1",
                price: "50",
                second: "CLEANING CHECKLIST",
                third: "ADD-ONS",
            },

        ]

     

          setSteamState(
            steam.map(d => {
                return {
                    select: false,
                    id: d.id,
                    title: d.title,
                    price: d.price,
                    quantity:d.quantity,
                }
            })
        )
        console.log(steamState)

        const handlePrice = () => {
            let oldPrice = price;
    
            setTotal(
                    {price: oldPrice}
            )
        }
            handlePrice()
        console.log(total)
    }, [])

 


    return (
        <div className="fixed top-0 left-0 z-10 bg-gray-700 bg-opacity-200 w-full h-screen">
            <AnimatePresence>
                <motion.div
                    key="modal"
                    initial={{ y: 1000, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ x: 300, opacity: 0 }}


                >
                    <div className="mt-20 bg-white h-screen w-full rounded-3xl flex flex-col">
                        <h1 className="m-5 mt-8 text-center text-xl font-semibold">{title}</h1>
                        <div className="border-t-2 border-b-2 p-4">
                            <h2 className="font-semibold">Move-in/Move-Out Cleaning</h2>
                            <div className="mt-4">
                                <div className="flex items-center gap-2 text-sm">
                                    <Checkbox color="primary"
                                        checked={checked}
                                        onChange={handleChange}
                                    />
                                    <p>{firstSub}</p>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <Checkbox color="primary"
                                        checked={remove}
                                        onChange={handleRemove} />
                                    <p>I don't wnat any move-in/move-out cleaning</p>
                                </div>
                            </div>

                        </div>
                        <div className="p-4">
                            <h1 className="font-semibold">Add-ons</h1>
                            <div className="flex flex-col">
                                {steamState.map((item) => (
                                    <div key={item.id} className="flex items-center gap-2 text-sm">
                                        <Checkbox
                                            color="primary" checked={item.checked}
                                            onChange={(event) => {
                                                let checked = event.target.checked
                                                setSteamState(
                                                    steamState.map(data => {
                                                        if (item.id === data.id) {
                                                            data.select = checked;
                                                        }
                                                        return data;
                                                    })
                                                )
                                            }} />
                                        {item.title}
                                    </div>

                                ))}



                                {threeMore ?
                                    <div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <Checkbox color="primary" />
                                            <p>Blind cleaning (per set )</p>
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
                    <div className="fixed bottom-0 z-1 w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 p-2">

                        <div className=" flex justify-center text-blue-500 font-semibold ">
                            <p className="cursor-pointer text-right" onClick={handleAdd}>Add to Cart</p>
                        </div>
                    </div>
                </motion.div >
            </AnimatePresence >
        </div >
    )
}

export default EditProduct
