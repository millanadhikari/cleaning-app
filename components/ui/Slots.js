import React from 'react'

function Slots({time, active, setTime}) {
    return (
        <div 
            className={`${active && 'bg-blue-500'} cursor-pointer w-[6rem] ring-1 rounded-md m-2 p-2 text-center ring-gray-300 shadow-lg`}
            onClick={(e) => setTime(time)}>
            <h1 className={`${active && 'text-gray-50' } text-gray-500 font-semibold text-[0.9rem]`}>{time}</h1>
            
        </div>
    )
}

export default Slots
