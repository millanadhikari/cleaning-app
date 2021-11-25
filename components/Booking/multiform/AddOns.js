import React, { useState, useEffect } from 'react'
import Checkbox from '@mui/material/Checkbox';
import Login from '../../Login';
import LoginNew from '../../LoginNew';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import TextField from '@mui/material/TextField';

function AddOns({ handleAddons }) {

    const initialState = [
        {
            id: "",
            quantity: "",
            title: "",
            price: "",

        },
    ]
    const [checked, setChecked] = useState(false);
    const [no, setNo] = useState(false);
    const [login, setLogin] = useState(false);



    const handleLogin = () => {
        setLogin(!login)


    };




    return (
        <div className="w-full absolute top-0 bg-gray-200 h-screen">
            <div className="mb-40 ">
                <h1 className="p-2 text-blue-700 cursor-pointer" onClick={handleAddons}>Back</h1>
                <div className="p-4 flex flex-col gap-8 w-full sm:w-[40rem] md:w-[45rem] md:mx-auto z-1">
                    <h1 className="text-xl font-semibold">Is there anything else you'd like us to know?</h1>

                    <TextField
                        id="filled-multiline-flexible"
                        label="Real estate agency name, property condition, etc."
                        multiline
                        fullWidth
                        minRows={6}
                        
                        // value="Real estate agency"
                        // onChange={handleChange}
                    />
                </div>
                <button
                    className="fixed bottom-0 bg-blue-500 w-full p-2  text-gray-50"
                    onClick={handleLogin}
                  >Next</button>
                <div className="w-full">
                    {login &&
                        <LoginNew handleLogin={handleLogin} />}
                </div>
            </div>
        </div>
    )
}

export default AddOns
