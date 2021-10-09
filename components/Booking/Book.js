import React from 'react'
import ProductCard from '../Booking/ProductCard'

const endoflease = [
    { 
        id:"1",
        img:"/studio.jpg",
        title:"Studio Apartment",
        price:"$250",
        first:"MOVE-IN/MOVE OUT CLEANING",
        firstSub:"Studio Apartment",
        second: "CLEANING CHECKLIST",
        third: "ADD-ONS",
        options: {
            optionOne: "lkjsdlkfj",
            optionTwo:"lkjlkjk"
        }
    },
    { 
        id:"2",
        img:"/studio.jpg",
        title:"1 Bedroom",
        price:"$280",
        first:"MOVE-IN/MOVE OUT CLEANING",
        firstSub:"1 Bedroom 1 Bathroom",
        second: "CLEANING CHECKLIST",
        third: "ADD-ONS"
    },
    { 
        id:"3",
        img:"/studio.jpg",
        title:"2 Bedrooms",
        price:"$320",
        first:"MOVE-IN/MOVE OUT CLEANING",
        firstSub:"2 Bedroom 1 Bathroom",
        second: "CLEANING CHECKLIST",
        third: "ADD-ONS"
    },
    { 
        id:"4",
        img:"/studio.jpg",
        title:"3 Bedrooms",
        price:"$399",
        first:"MOVE-IN/MOVE OUT CLEANING",
        firstSub:"3 Bedroom 2 Bathroom",
        second: "CLEANING CHECKLIST",
        third: "ADD-ONS"
    },
    { 
        id:"5",
        img:"/studio.jpg",
        title:"4 Bedrooms",
        price:"$470",
        first:"MOVE-IN/MOVE OUT CLEANING",
        firstSub:"4 Bedroom 2 Bathroom",
        second: "CLEANING CHECKLIST",
        third: "ADD-ONS"
    },
    { 
        id:"6",
        img:"/studio.jpg",
        title:"5 Bedrooms",
        price:"$520",
        first:"MOVE-IN/MOVE OUT CLEANING",
        firstSub:"5 Bedroom 3 Bathroom",
        second: "CLEANING CHECKLIST",
        third: "ADD-ONS"
    }
]

const Book = ({ isOpen, setIsopen }) => {
    return (
        <div className="h-screen w-full z-30 flex">
            <div className="w-full shadow-md rounded-md bg-gray-100">
                <div className="flex justify-between p-5 bg-white">
                    <h1 className="text-blue-900">Book Online</h1>
                    <p className="cursor-pointer" onClick={() => setIsopen(!isOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </p>
                </div>
                <div className="flex gap-4 bg-white cursor pointer shadow-lg p-4 w-full border-red-700">
                    <button className="bg-yellow-500 p-2 px-3 text-sm rounded-sm text-yellow-50 focus:ring-0 focus:outline-none">End of Lease Cleaning</button>
                    <button className="text-yellow-500 text-sm ring-1 ring-yellow-500 p-2 px-3 rounded-sm focus:ring-0 focus:outline-none">Add Ons</button>
                </div>
                <h1 className="text-lg font-semibold text-blue-900 p-4">End of Lease Cleaning</h1>
                {endoflease.map((data) => (
                    <ProductCard 
                        key={data.id} 
                        img={data.img}
                        title={data.title}
                        price={data.price}
                        first={data.first}
                        firstSub={data.firstSub}
                        second={data.second}
                        third={data.third}
                        options={data.options}/>
                ))}
                
            </div>
        </div>
    )
}

export default Book
