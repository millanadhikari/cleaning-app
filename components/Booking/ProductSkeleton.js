import { useState, useEffect, React } from 'react'
import Image from 'next/image'




function ProductSkeleton({ data }) {
  

    useEffect(() => {
        // setProducts(data)
        // console.log(products)

    }, [])

    return (
        <div className="w-[22rem] sm:w-[30rem] flex flex-col mx-auto p-8 bg-white shadow-md ">
            <div className="bg-gray-300 w-[18rem] h-40 flex mx-auto animate-pulse"> </div>

            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-2 py-4">
                    <h1 className="w-[8rem] bg-gray-300 h-4 rounded-md animate-pulse"></h1>
                    <p className="w-[3rem] h-4 bg-gray-300 rounded-md animate-pulse"></p>
                </div>

               <div className="mr-6 flex gap-3 pl-2 cursor-pointer">
                <button className="w-[4rem] text-sm h-7 rounded-md bg-gray-200 animate-pulse"></button>
               
            </div>  

           
          </div>
            <ul className="text-gray-500 flex text-sm flex-col gap-3 list-disc mx-4 mb-4">
                <li className="w-[5rem] bg-gray-300 h-2 rounded-md"></li>
                <li className="w-[5rem] bg-gray-200 h-2 rounded-md"> </li>
                <li className="w-[5rem] bg-gray-100 h-2 rounded-md"></li>
            </ul>
            <div className="flex justify-between cursor-pointer">
                <button
                    className="w-[11rem] text-sm h-7 rounded-md bg-gray-200 p-2"
                   ></button>
                <button className="w-[6rem] text-sm h-7 rounded-md bg-gray-200"></button>
            </div>
            


        </div>
    )
}

export default ProductSkeleton
