import React, { useState, useEffect } from 'react';

import FacebookIcon from '@mui/icons-material/Facebook';
import CloseIcon from '@mui/icons-material/Close';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import TextField from '@mui/material/TextField'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Checkbox from '@mui/material/Checkbox';
import SignUp from '../components/Signup'
import SignIn from '../components/SignIn'







function LoginNew({handleLogin}) {
    const [signEmail, setSignEmail] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [method, setMethod] = useState('signIn');


    

   

    const handleClick = (type) => {
        if(type === 'signUp') {
            setMethod('signUp')
        } else {
            setMethod('signIn')
        }
    }


    return (
        <div className="w-full absolute top-0 left-0 h-screen bg-gray-500 z-10 overflow-y-auto">
            <div className="max-w-[25rem] mx-3 sm:mx-auto my-20 relative bg-white rounded-md px-8 py-4 flex flex-col gap-4 bg-scroll ">
                <CloseIcon onClick = {handleLogin} className="absolute right-2" />
                <div className="flex justify-between px-6 mt-10 mb-4 w-full">

                    
                    <h1 onClick={()=>handleClick('signIn')}
                        className={`${method === "signIn" ? 'border-gray-700' : 'border-gray-200'} border-b-2 pb-2 w-1/2 text-center`}>Sign in</h1>


                    <h2 onClick={()=>handleClick("signUp")}
                     className={`${method === "signUp" ? 'border-gray-700' : 'border-gray-200'} border-b-2 pb-2 w-1/2 text-center`}
                     >Register</h2>
                </div>
              {method === 'signIn' ? 
                <SignIn/> : 
                <SignUp handleClick={handleClick}/>}
            </div>
        </div>
    )
}






export default LoginNew
