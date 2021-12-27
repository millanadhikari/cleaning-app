import { useState, useEffect, React } from 'react'
import { produce } from 'immer'
import Checkbox from '@mui/material/Checkbox';
import TotalPrice from '../TotalPrice'
import { motion, AnimatePresence } from "framer-motion"
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux"
import { addProduct, removeProduct, addAddons } from '../../redux/cartReducer'
import { CollectionsBookmarkOutlined } from '@mui/icons-material';
import { generate } from 'short-id'




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
    const [supply, setSupply] = useState([]);
    const [addons, setAddons] = useState([]);
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
    const addOns = useSelector((state) => state.cart.addOns)
    const mainTotal = useSelector(state => state.cart.total)


    const handleChange = (event) => {
        setChecked(event.target.checked);

    };


    const handleRemove = (event) => {
        setRemove(event.target.checked);
    };

    const handleAdd = () => {


        // products.length > 0 ? products.map((product) => (product.id !== data.id &&
        //     dispatch(addProduct({ ...data, quantity, price: price * quantity }))))
        //     : dispatch(addProduct({ ...data, quantity, price: price * quantity }))

        // products.length < 0 ? dispatch(addProduct({ ...data, quantity, price: price * quantity })) : products.map((item) => (
        //     item.id !== data.id && dispatch(addProduct({ ...data, quantity, price: price * quantity }))
        // ))

        products.length == 0 | products?.map((item) => item.id !== data.id)
            && dispatch(addProduct({ ...data, quantity, price: price * quantity }))

        dispatch(addAddons([...addons]))

        setEditPackage(!editPackage)



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
        const lama = [{
            select: true,
            id: data.id,
            title: data.title,
            price: data.price,
            quantity: data.quantity,
        }]
        setSupply(
            lama
        )
        console.log(supply)


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

        setAddons(
            addOns.map((item => item))
        )

        setSteamState(
            steam.map(d => {
                return {
                    select: false,
                    id: d.id,
                    title: d.title,
                    price: d.price,
                    quantity: d.quantity,
                }
            })
        )
        console.log(supply)

        const handlePrice = () => {
            let oldPrice = price;

            setTotal(
                { price: oldPrice }
            )
        }
        handlePrice()
        console.log(total)
    }, [])




    return (
        <div className="fixed top-0 left-0 w-full h-screen z-10 bg-gray-700 bg-opacity-200 flex items-center align-center justify-center">
            <AnimatePresence>
                <motion.div
                    key="modal"
                    initial={{ y: 1000, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ x: 300, opacity: 0 }}
                    className="w-full flex items-center align-center  "

                >
                    <div className="relative mt-40 sm:mt-0 h-screen w-full sm:w-[45rem] 
                    sm:h-[45rem] sm:mx-auto bg-white rounded-3xl sm:rounded-md flex flex-col scroll-none sm:p-5">
                        <div className='flex align-center items-center justify-center mx-5'>
                            <h1 className="m-5 mt-8 text-center text-xl font-semibold">{title}</h1>
                            <div
                                className="absolute right-4 top-8"
                                onClick={() => setEditPackage(!editPackage)}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        <div className="border-t-2 border-b-2 p-4">
                            <h2 className="font-semibold">Move-in/Move-Out Cleaning</h2>
                            <div className="mt-4">
                                <div className="flex items-center gap-2 text-sm">
                                    <Checkbox color="primary" defaultChecked disabled
                                    // checked={supply.select}
                                    // onChange={(event) => {
                                    //     let checked = event.target.checked

                                    //     setSupply(currentSupply =>
                                    //         produce(currentSupply, v => {
                                    //             v[index].select = checked
                                    //         }))
                                    // }}

                                    />
                                    <p>{firstSub}</p>
                                </div>
                           
                            </div>

                        </div>
                        <div className="p-4">
                            <h1 className="font-semibold">Add-ons</h1>
                            <div className="flex flex-col">
                                {addons.map((item, index) => (
                                    <div key={item.id} className="flex items-center gap-2 text-sm justify-between px-10 sm:pr-40">
                                        <div className='flex gap-5 font-italics text-gray-500 text-sm'>
                                            {item.title}
                                            <p>${item.price}</p>

                                        </div>
                                        <Checkbox
                                            color="primary" checked={item.select}

                                            onChange={(event) => {
                                                let checked = event.target.checked
                                                setAddons(currentAddons =>
                                                    produce(currentAddons, v => {
                                                        v[index].select = checked
                                                    })


                                                )
                                            }} />

                                    </div>

                                ))}



                                {/* {threeMore ?
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
                                        className="font-semibold text-blue-500 ml-5 m-4">+3 MORE</h1>} */}


                            </div>
                        </div>
                        <div onClick={handleAdd}
                            className="absolute bottom-20 sm:bottom-0 sm:right-0 z-30 w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 p-2">

                            <div className=" flex justify-center text-blue-500 font-semibold ">
                                {mainTotal > 0 && <h1>Total Price:{mainTotal}</h1>}
                                <p className="cursor-pointer text-right" >Add to Cart</p>
                            </div>
                        </div>
                    </div>


                </motion.div >
            </AnimatePresence >
        </div >
    )
}

export default EditProduct
