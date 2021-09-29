function Modal({setIsopen}) {
    return (
        <div className="absolute top-0 h-full  
        flex flex-col justify-between bg-white z-100 overflow-y-hidden">
            <nav className="flex flex-row p-2 items-center justify-center shadow-md">
            <h1 className="text-lg text-gray-900">End of Lease Clean</h1>
            <h2 className="absolute right-0 text-2xl cursor-pointer m-5" onClick={() => setIsopen(false)}>X</h2>

            </nav>
            <form className="flex flex-col flex-grow mt-5">
                <input placeholder="services"></input>
                <input placeholder="services"></input>

                <input placeholder="services"></input>

                <input placeholder="services"></input>

                <input placeholder="services"></input>

                <input placeholder="services"></input>

                <input placeholder="services"></input>



            </form>
           
           
            <button className="flex-shrink bottom-0">Next</button>
        </div>
    )
}

export default Modal
