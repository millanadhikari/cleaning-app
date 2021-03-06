import React from 'react'
import Image from 'next/image'
import SelectBox from './ui/SelectBox'
import InputBox from './ui/InputBox'
import SelectService from './SelectService'


function Header({setIsopen, isOpen}) {
    return (
        <div className="flex justify-between items-center md:w-[60rem] max-w-screen md:mx-auto mt-3">
            <div className="flex flex-col space-y-[-6px]">
            {/* <h1 className="mx-2 text-blue-400 font-semibold font-fancy text-3xl">We<span className="text-blue-900">Do</span></h1> */}
            <img src="unnamed.png" className="h-[80px] w-[80px]object-contain "/>
            
            </div>
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
                <div className="flex text-sm gap-1 text-red-500">
                    <h2>Login</h2>
                    <p>|</p>
                    <h2>Register</h2>
                </div>
                <div className="">
                    <button 
                        className="text-sm w-[6rem] bg-yellow-500 p-2 px-3 shadow-md text-yellow-50 focus:ring-0 focus:outline-none"
                        onClick={() => setIsopen(!isOpen)}
                        >Book Now
                    </button>
                       
                </div>
            </div>


        </div>
    )
}

export default Header
