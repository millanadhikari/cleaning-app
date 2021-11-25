import React, { useState, useEffect } from 'react'
import Checkbox from '@mui/material/Checkbox';
import Login from '../../Login';
import LoginNew from '../../LoginNew';
import SteamCarpet from './SteamCarpet';
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux"
import { addFurnished, removeProduct } from '../../../redux/cartReducer'



let question = [
    {
        id: "32515151",
        title: "Furnished Property",
        quantity: "1",
        price: "80",
        second: "CLEANING CHECKLIST",
        third: "ADD-ONS",
        select:false,
    },


]

function Questionaire({ handleQuestionaire }) {
   const [no, setNo] = useState(false)
   const [steam, setSteam] = useState(false)

    const products = useSelector((state) => state.cart.products);
    const dispatch = useDispatch()
 

    const handleChangee = (event) => {
        setNo(event.target.checked);
        setChecked(false)

    };

    const handleLogin = (event) => {
        event.preventDefault()
        setSteam(!steam)
    }

  
    useEffect(() => {

        dispatch(addFurnished({no}))

    
    }, [no])



    return (
        <div className="w-full fixed left-0 bg-gray-200 h-screen">
            <div className="mb-40">
                <h1 className="p-2 text-blue-700 cursor-pointer" onClick={handleQuestionaire}>Back</h1>
                <div className="p-8">
                    <h1 className="text-xl">Is the end of lease clean for a furnished property ? </h1>
                    <div className="p-5">
                       
                        <div className="flex ">
                            <Checkbox
                                checked={no}
                                onChange={(event) => { setNo(event.target.checked) }}
                           
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            <div className="flex flex-col justify-center align-center">
                                <h1>Yes, the property is furnished.</h1>


                            </div>
                        </div>

                    </div>
                </div>
                <button
                    className="fixed bottom-0 bg-blue-500 w-full p-2  text-gray-50"
                    onClick={handleLogin}
                >Next</button>
                <div className="w-full">
                    {steam &&
                        <SteamCarpet handleQuestionaire={handleLogin} />}
                </div>
            </div>
        </div>
    )
}

export default Questionaire
