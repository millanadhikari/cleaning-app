import React from 'react'
import Image from 'next/image'
import SelectBox from './ui/SelectBox'
import InputBox from './ui/InputBox'
import SelectService from './SelectService'

function Header() {
    return (

        <div className="relative h-80 bg-cover bg-center" style={{backgroundColor:"black",
        backgroundImage: "linear-gradient(359deg, rgba(25,0,0,1) 5%, rgba(1,0,0,0) 80%, rgba(236,236,236,1) 100%), url(https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)"
        }}>
                {/* <Image
                    style={{backgroundColor:"blue"}}
                    wrapperclassName="bg-gradient"
                    src="https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    alt=""
                    height={667}
                    width={1000}
                    objectFit='contain' /> */}

            <div className="relative z-10 top-60 flex flex-col items-center ">
                <h1 className="text-lg font-semibold text-gray-200">WeDo Cleaning</h1>
                <h1 className="text-2xl font-bold text-gray-200">Home Services, on Demand.</h1>
                <form className="flex text-center p-1">
                    <select className="p-3 rounded-md">
                        <option>Sydney</option>
                        <option>Melbourne</option>
                    </select>
                    {/* <input className="" placeholder="Choose a Service"/> */}
                                     
                    {/* <SelectBox/> */}
                    
                    <InputBox/>

                    {/* <input className="rounded-md p-1 pl-2 ml-3" placeholder="Search for a service"></input> */}
                </form>

            </div>

            <div className="relative h-full bg-gradient-to-t from-black via-black to-transparent text-red-900"></div>










        </div>
    )
}

export default Header
