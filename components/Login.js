import React, { useState, useEffect } from 'react';
import { loginPending, loginSuccess, loginFailure } from '../redux/loginReducer'
import  {userLogin} from '../api/userApi'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'





function Login({handleLogin}) {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const router = useRouter()
    const dispatch = useDispatch()

    

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


    return (
        <div className="w-full absolute top-0 left-0 h-screen ">
            <div className="w-full bg-white my-auto pt-2">
            <h1 onClick={handleLogin} className="cursor-pointer text-blue-700">Back</h1>
            <div className="flex flex-col text-center border sm:max-w-md sm:mx-auto sm:mt-20">
            <header className="py-4 border font-bold text-gray-800">Login or sign up</header>
        <div className="p-8 flex flex-col gap-4">
        <div className="text-left text-2xl font-semibold">Welcome to WeDo Cleaning</div>
        <form className="flex flex-col ring-1 ring-gray-500 rounded-md  ">
            <input 
                className="p-4 ring-1 ring-gray-500 rounded-b-none rounded-md focus:ring-black-900"
                type=""
                placeholder="Email:"
                onChange={(text) => setEmail(text.target.value)}></input>
            <input 
                className="p-4 ring-1 ring-gray-500 rounded-t-none rounded-md" 
                placeholder="Password"
                onChange={(text) => setPassword(text.target.value)}></input>
        </form>
        <div className="text-left">Remember Me</div>

        <button 
            className="btn bg-gradient-to-r from-red-500 via-pink-500 to-red-600 ring-0 rounded-md
            py-3 text-white text-lg"
            onClick={startLogin} >Continue</button>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Login
