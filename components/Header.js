import React from 'react'
import Image from 'next/image'
import SelectBox from './ui/SelectBox'
import InputBox from './ui/InputBox'
import SelectService from './SelectService'

function Header() {
    return (
        <div className="flex justify-between items-center md:w-[60rem] max-w-screen md:mx-auto mt-3">
            <h1 className="mx-2">Logo</h1>
            <div className="flex mr-10 space-x-9 items-center">
                <div className="hidden md:inline-block" >
                    <ul className="flex space-x-7 font-semibold text-sm text-blue-800 cursor-pointer">
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Membership</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="flex text-sm gap-2">
                    <h2>Login</h2>
                    <p>|</p>
                    <h2>Register</h2>
                </div>
                <div>
                    <button class="text-sm bg-yellow-500 p-2 px-3 shadow-md text-yellow-100 font-semibold focus:ring-0 focus:outline-none">Book Now</button>
                </div>
            </div>


        </div>
    )
}

export default Header
