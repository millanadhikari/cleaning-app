import Image from 'next/image'

function Benefits() {
    return (
        <div className="relative mt-8 md:flex md:mx-auto">
            <div className="w-1/2">
                <div className="absolute left-2 top-2 rounded-sm shadow-md bg-blue-400 h-[7.7rem] w-[11rem] text-sm p-5 text-white">
                    <h1 className="text-2xl">10+</h1>
                    <p>Years of</p>
                    <p>Experience Working</p>
                    <div className="flex absolute top-0">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 relative left-28 top-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 relative left-20 top-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 relative left-20 top-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                    </div>
                </div>
                <div className="mt-3 absolute left-32">
                    <Image
                        src="/cleaner.png"
                        className="shadow-lg"
                        alt="lady-cleaner"
                        width={300}
                        height={300}
                        objectFit="contain" />
                </div>
            </div>
            <div className="flex flex-col mx-4 gap-2 md:w-1/2 mt-80 md:mt-[0]">
                <div className="flex gap-2 text-[0.8rem] text-blue-500">
                    <p>----</p>
                    <h2>WHY CHOOSE US</h2>
                </div>
                <h1 className="text-lg font-bold text-blue-900">WEDO benefits </h1>
                <p className="text-sm text-gray-600">We have wide range of perks with our services. Our experience team member will take care of all your cleaning needs in professional manner.</p>
                <div className="mt-3 flex flex-col gap-5">
                    <div className="flex gap-4 items-top">
                        <p className="bg-yellow-500 rounded-sm text-yellow-200 h-10 w-10 flex items-center p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                        </p>
                        <div className="flex flex-col gap-1">
                            <h1 className="font-semibold text-blue-900">Experienced Staff</h1>
                            <p className="text-[0.8rem] text-gray-600">Professionally Vetted staff members all around Australia.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-top">
                        <p className="bg-yellow-500 rounded-sm text-yellow-200 h-10 w-10 flex items-center p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                            </svg>
                        </p>
                        <div>
                            <h1 className="font-semibold text-blue-900">Natural Products</h1>
                            <p className="text-[0.8rem] text-gray-600">We use eco-friendly & less tolerant chemical to keep our environment safe.</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-4 items-top">
                            <p className="bg-yellow-500 rounded-sm text-yellow-200 h-10 w-10 flex items-center p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </p>
                            <div>
                                <h1 className="font-semibold text-blue-900">Fast Service</h1>
                                <p className="text-[0.8rem] text-gray-600">We Generally do same-day services but available in short term notice.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 items-top">
                        <p className="bg-yellow-500 rounded-sm text-yellow-200 h-10 w-10 flex items-center p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                            </svg>
                        </p>
                        <div>
                            <h1 className="font-semibold text-blue-900">Best Equipments</h1>
                            <p className="text-[0.8rem] text-gray-600">We use best commercial grade equipments to maintain our standard.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits
