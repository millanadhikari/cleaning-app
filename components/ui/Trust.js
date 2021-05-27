function Trust({name, src, details}) {
    return (
        <div className="min-w-[300px] my-5 flex flex-col bg-gray-300 
        shadow-md gap-2 rounded-xl p-5 transition duration-200 ease-in transform sm:hover:scale-x-105 sm:hover:scale-y-105 sm:hover:z-50">
            <h1 className="text-lg font-semibold">{name}</h1>
            <div className="">
            <p>{details}</p>
            <h1 className="">Milan</h1>
            </div>
        </div>
    )
}

export default Trust
