

function DownloadApp() {
    return (
        <div className="bg-blue-900 text-blue-50 p-4 flex flex-col gap-10 md:flex-row">
            <div className="flex flex-col gap-3 md:ml-auto">
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 text-[0.7rem] text-blue-300">
                        <p>------</p>
                        <p>SPARKLING HOME</p>
                    </div>
                    <span>
                        <h1 className="text-xl">A sparkling home is a few clicks away.</h1>
                        {/* <h2 className="text-xl"></h2> */}
                    </span>
                </div>
                <div className="text-[0.7rem] flex flex-col gap-1 ">
                    <p>Leave your home in the hands of the experts.</p>
                    <p>100% Happiness Guaranteed</p>
                    <p>What are you waiting for?</p>
                </div>
            </div>
            <div className="w-full max-w-md md:mr-auto rounded-sm bg-gray-200 text-gray-900 flex flex-col items-center p-3 shadow-md ">
                <div className="flex my-2 items-center justify-center h-12 w-12 text-blue-400 font-semibold font-fancy text-[0.8rem] rounded-full bg-gray-300">
                   <img src="Untitled.png" className="h-7 w-8"/>
                </div>
                <div className="w-[18rem] flex justify-center p-2 gap-2">
                    <div className="w-1/2 flex items-center justify-center gap-2 text-blue-900 ring-2 rounded-md ring-gray-300 py-1">
                        <img src="/Apple_logo_grey.svg" alt="apple logo" className="h-5 w-6" />
                        <div className="flex flex-col text-sm">
                            <p className="text-[0.6rem]">Download on the</p>
                            <h1 className="font-semibold text-[0.7rem] mt-[-0.3rem]">App Store</h1>
                        </div>

                    </div>
                    <div className="w-1/2 flex items-center justify-center gap-2 text-blue-900 ring-2 rounded-md ring-gray-300 py-1 px-2">
                        <img src="/googlePlay.png" alt="apple logo" className="h-5 w-6" />
                        <div className="flex flex-col text-sm">
                            <p className="text-[0.6rem]">Get it on</p>
                            <h1 className="font-semibold mt-[-0.3rem] text-[0.7rem]">Google Play</h1>
                        </div>

                    </div>

                </div>
                <div className="flex justify-between w-full px-2 py-2 text-[0.7rem] text-blue-900 font-semibold">
                    <h1>Book online in 60 seconds</h1>
                    <p>Call our fiendly team</p>
                </div>
                <div className="w-full flex gap-2">
                    <button className="h-10 w-1/2 bg-yellow-500 px-5 text-[0.8rem] rounded-sm shadow-md text-yellow-100 ">Book Now</button>
                    <div className="cursor-pointer flex w-1/2 h-10 rounded-sm shadow-md bg-yellow-500 text-[0.6rem] text-yellow-100 px-2 gap-2">
                        <p className="flex items-center justify-center align-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-100 flex" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </p>
                        <div className="flex flex-col justify-center h-10 text-[0.5rem] text-yellow-100">
                            <p className="text-[0.6rem]">0435-654-544</p>
                            <p>7 days 8am-7pm AEST</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}




export default DownloadApp
