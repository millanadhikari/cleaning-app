import React, { useState, useEffect } from 'react';

import FacebookIcon from '@mui/icons-material/Facebook';
import CloseIcon from '@mui/icons-material/Close';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import TextField from '@mui/material/TextField'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Checkbox from '@mui/material/Checkbox';
import { loginPending, loginSuccess, loginFailure } from '../redux/loginReducer'
import  {userLogin} from '../api/userApi'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { css } from "@emotion/react";
import CircleLoader from "react-spinners/CircleLoader";

function SignIn() {
    const [signEmail, setSignEmail] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const router = useRouter()
    const dispatch = useDispatch()
    const { isLoading, isAuth, error } = useSelector(state => state.login)
    let [color, setColor] = useState("#63b5f6");

    const startLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            return alert("Fill up all the form!")
        }
        dispatch(loginPending())
        try {
            const isAuth = await userLogin({ email, password })
            if(isAuth.status === "error") {
               return dispatch(loginFailure(isAuth.message))
            }
            dispatch(loginSuccess())
             router.push("/payment")
        } catch (error) {
            dispatch(loginFailure(error.message));
        }


    }

    const override = css`
    border-color: white;
    height:1.8rem;
    width: 1.8rem;
  `;


    return (
        <div>
            <div className=" flex flex-col gap-5">
                    <div className="cursor-pointer bg-blue-500 rounded-md p-3 text-white flex gap-16 items-center">
                        <FacebookIcon />
                        <p className="text-center text-sm">Continue with <span className="font-semibold">Facebook</span></p>
                    </div>
                    <div className="cursor-pointer shadow-md rounded-md p-3 text-gray-400 flex gap-16 items-center text-center">
                        <img src="/googleonly.png" className="h-6 w-6 bg-no-repeat bg-top" />
                        <p className="text-center text-sm">Sign in with <span className="font-semibold">Google </span></p>
                    </div>
                    <div className="cursor-pointer ring-1 ring-gray-900 shadow-md rounded-md p-3 text-gray-900 flex gap-16 items-center">
                        <img src="/appleLogo.png" className="h-6 w-7 bg-no-repeat bg-top" />
                        <p className="text-center text-sm">Continue with <span className="font-semibold">Apple</span></p>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-5 my-2">
                    <p>
                        <hr className="w-32 text-gray-500" />
                    </p>
                    <p>Or</p>
                    <hr className="w-32 text-gray-500" />

                </div>
                <div className="flex flex-col gap-5 ">
                    <div className="flex flex-col">
                        {!signEmail &&
                            <button
                                onClick={() => { setSignEmail(!signEmail) }}
                                className="cursor-pointer bg-yellow-500 p-3 rounded-md text-yellow-50">
                                Sign in with email
                            </button>
                        }
                        {signEmail &&
                            <div>
                                <div >
                                    <TextField
                                        id="outlined-name"
                                        label="E-mail"
                                        onChange={(text) => setEmail(text.target.value)}
                                        fullWidth="true"
                                        margin="normal"
                                        size="medium"
                                    />
                                </div>
                                <div className="relative">
                                    <TextField
                                        id="outlined-name"
                                        label="Password"
                                        onChange={(text) => setPassword(text.target.value)}
                                        fullWidth="true"
                                        margin="normal"
                                        size="medium"
                                    />

                                    {!showPassword ? <VisibilityOffOutlinedIcon
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-5 top-8 text-gray-500" />
                                        :
                                        <RemoveRedEyeOutlinedIcon
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-5 top-8 text-gray-500" />
                                    }
                                </div>
                                <div className="flex items-center mb-4">
                                    <Checkbox className="" />
                                    <p className="text-[0.9rem] text-gray-700">Keep me logged in</p>
                                </div>
                                <div
                                    onClick={startLogin}
                                    className="cursor-pointer w-full bg-yellow-500 p-3 rounded-md text-yellow-50 flex justify-center items-center gap-4">
                                    Sign in 
                                    <CircleLoader color={color} loading={isLoading} css={override} size={30} />

                                </div>

                            </div>}

                    </div>
                    <h2 className="text-blue-600 text-sm">Forgot password?</h2>
                </div>
                <hr className="my-5"/>
                <div className="flex flex-col items-center ">
                    <div className="flex gap-2 justify-center align-center text-gray-600">
                        <h1>Have you booked via phone/chat?</h1>
                        <InfoOutlinedIcon color="primary" />
                    </div>
                    <h2 className="underline text-yellow-500 text-sm font-semibold">Claim your account</h2>
                </div>
        </div>
    )
}

export default SignIn
