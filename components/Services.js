function Services() {
    return (
        <div className="text-center py-6 flex flex-col gap-4">
            <h1 className="text-[0.7rem] text-blue-400 font-semibold">-- SERVICES --</h1>
            <h2 className="font-semibold text-blue-900">Our Cleaning Services</h2>
            <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center md:gap-14 lg:gap-18">
                <div className="w-[20rem] bg-gradient-to-r from-gray-300 via-gray-50 to-gray-100 flex flex-col gap-2 px-5 py-5">
                    <div className="flex flex-col items-center gap-1 ">
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        </p>
                        <h1 className="text-md font-semibold text-blue-900">Home Clean</h1>
                    </div>
                    <p className="text-[0.8rem] text-gray-500">Why clean, when you can do literally anything else? Let a WeDo accredited cleaner take care of the dirty work once, weekly,
                        fortnightly, or monthly -anywhere in Australia!.
                    </p>
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-[0.8rem] underline text-yellow-500 font-semibold">Learn more</p>
                        <button className="bg-yellow-500 w-[8rem] text-gray-100 text-[0.7rem] p-2  rounded-sm shadow-md focus:ring-0 focus:outline-none">Book Now</button>
                    </div>

                </div>
                <div className="w-[20rem] bg-gradient-to-r from-gray-300 via-gray-50 to-gray-100 flex flex-col gap-2 px-5 py-5">
                    <div className="flex flex-col items-center gap-1 ">
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                            </svg>
                        </p>
                        <h1 className="text-md font-semibold text-blue-900">End of Lease Clean</h1>
                    </div>
                    <p className="text-[0.8rem] text-gray-500">Moving Homes or have a Vacate inspection? Take advantage of the WeDo Cleaning 100% bond-back guarantee on all End of lease cleans.</p>
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-[0.8rem] underline text-yellow-500 font-semibold">Learn more</p>
                        <button className="bg-yellow-500 w-[8rem] text-gray-100 text-[0.7rem] p-2  rounded-sm shadow-md focus:ring-0 focus:outline-none">Book Now</button>
                    </div>

                </div>
            </div>
            <div className="flex flex-col gap-1 sm:flex-row sm:justify-between px-3 sm:mx-auto sm:space-x-10">
                <p className="text-blue-900 font-semibold text-sm">Call our booking team</p>
                <div className="flex items-center justify-center">
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-900 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </p>
                    <p className="text-[0.8rem] text-blue-900">(61) 435-343-333</p>

                </div>
                <p className="text-[0.8rem] text-blue-900">7 Days 8am-7pm AEST</p>
            </div>

        </div>
    )
}

export default Services
