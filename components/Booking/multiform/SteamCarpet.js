import React, { useState, useEffect } from 'react'
import Checkbox from '@mui/material/Checkbox';
import Login from '../../Login';
import LoginNew from '../../LoginNew';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddOns from './AddOns';
import { addProduct, addSteam } from '../../../redux/cartReducer'
import { useDispatch, useSelector } from "react-redux"


function SteamCarpet({ handleQuestionaire }) {

    const dispatch = useDispatch()
    const products = useSelector((state) => state.cart.products);
    const [checked, setChecked] = useState(false);
    const [no, setNo] = useState(false);
    const [addons, setAddons] = useState(false);
    const [cancel, setCancel] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [bedroom, setBedroom] = useState("");
    const [livingroom, setLivingroom] = useState(0);
    const [hallway, setHallway] = useState(0);
    const [staircase, setStaircase] = useState(0);


    const [product, setProduct] = useState({

    });
    const [item, setItem] = useState(

        {   
            vaccumOnly:false,
            steamCarpet:false,
            noCarpets:false,
            bathroom:0
            
        }
       
    )

    const steam = [
        {
            id: "92323",
            quantity: "1",
            title: "Bedroom",
            price: 50,

        },
        {
            id: "82323",
            quantity: "1",
            title: "Living room",
            price: 50,

        },
        {
            id: "72323",
            quantity: "1",
            title: "Hallway",
            price: 50,

        },
        {
            id: "62323",
            quantity: "1",
            title: "Staircase",
            price: 50,

        },

    ]


    const handleChange = (event) => {
        // setChecked(event.target.checked)
        setItem({...item, [event.target.name]:event.target.checked, steamCarpet: false, noCarpets: false})

     
    };

    const handleChangee = (event) => {
        // setNo(event.target.checked);
        setItem({...item, [event.target.name]:event.target.checked, vaccumOnly:false, noCarpets: false})

    };

    const handleCancel = (event) => {
        setItem({...item, [event.target.name]:event.target.checked, vaccumOnly:false, steamCarpet: false})

    };

    const handleAddons = () => {
        setAddons(!addons)
        dispatch(addSteam({...item}))
 
    };

    const handleQuantity = (type) => {
        if (type === "dec") {
            item.bathoom > 1 && setItem({...item, bathroom:bathroom - 1});
        } else {
           setItem({...item, bathroom:bathroom + 1});
        }
    };

    const handleEvent = ({ data }) => {
        dispatch(addProduct({ ...data, quantity, price: data.price * quantity }))
        setProduct({ ...product, ...data })
        console.log(product)

    }

    useEffect(() => {
        dispatch(addSteam({...item}))





        console.log(item)
      
    }, [item])
    return (
        <div className="w-full absolute top-0 bg-gray-200 h-screen">
            <div className="mb-40">
                <h1 className="p-2 text-blue-700 cursor-pointer" onClick={handleQuestionaire}>Back</h1>
                <div className="p-8">
                    <h1 className="text-xl font-semibold">How would you like your carpets to be cleaned?</h1>
                    <div className="flex flex-col gap-4 p-5">
                        <div className="flex justify-between items-">
                            <div className="flex flex-col">
                                <h1>Vacuumed only</h1>
                                <p className="text-sm text-gray-500">Part of the service</p>
                            </div>
                            <Checkbox
                                checked={item.vaccumOnly}
                                name="vaccumOnly"
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                        </div>

                        <div className="border-t border-b py-4 border-gray-400">
                            <div className="flex justify-between items-center ">
                                <div className="flex flex-col">
                                    <div className="flex gap-2">
                                        <h1>Steam Cleaned</h1>
                                        <InfoOutlinedIcon className="text-blue-600" fontSize="small" />
                                    </div>
                                    <p className="text-sm text-gray-500">Save up top 35% off the regular price for Steam Carpet Cleaning.</p>

                                </div>
                                <Checkbox
                                    checked={item.steamCarpet}
                                    name="steamCarpet"
                                    onChange={handleChangee}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                            </div>
                            {
                                item.steamCarpet &&
                                <div className="flex flex-col gap-4 my-6 text-gray-600">
                                    {steam.map((data) => (
                                        <div key={data.id} className="flex justify-between mx-8">
                                            <div>
                                                <h1>{data.title}</h1>
                                            </div>
                                            <div className="flex gap-4">
                                                <AddCircleOutlineOutlinedIcon onClick={() => (handleQuantity("inc"))} />
                                                <span>{item.bathroom}</span>
                                                <RemoveCircleOutlineIcon onClick={() => (handleQuantity("dec"))} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            }

                        </div>
                        <div className="flex justify-between items-center">
                            <h1>I don't have carpets.</h1>

                            <Checkbox
                                checked={item.noCarpets}
                                name="noCarpets"
                                onChange={handleCancel}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />

                        </div>
                    </div>
                </div>
                <button
                    className="fixed bottom-0 bg-blue-500 w-full p-2  text-gray-50"
                    onClick={handleAddons}
                    >Next</button>
                <div className="w-full">
                    {addons &&
                        <AddOns handleAddons={handleAddons} />}
                </div>
            </div>
        </div>
    )
}

export default SteamCarpet
