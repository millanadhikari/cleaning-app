function Trust({name, src, details}) {
    return (
        <div className="min-w-[300px] flex flex-col bg-gray-300 shadow-md flex-nowrap gap-2 rounded-xl p-5">
            <h1 className="text-lg font-semibold">{name}</h1>
            <div className="">
            <p>{details}</p>
            <h1 className="">Milan</h1>
            </div>
        </div>
    )
}

export default Trust
