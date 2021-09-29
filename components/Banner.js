import Image from 'next/image'

function Banner() {
    return (
        <div className="mx-auto pt-5 px-3 md:px-6 flex md:pt-10 md:justify-between h-[18.3rem] md:w-[60rem] lg:w-[70rem] md:h-[24.1rem] md:mx-auto">
            <div className="mt-3">
                <div className="flex gap-2 text-sm">
                    <p className="text-blue-400">-----</p>
                    <h2 className="text-blue-400 text-[0.8rem]">LET YOUR HOME SHINE</h2>
                </div>
                <h1 className="text-blue-800 text-[1.4rem] w-[16rem] sm:text-3xl sm:w-[20rem] md:w-[25rem]">Hire us for amazing <span className="font-bold">cleaning services</span> for <span className="font-bold">home</span> & <span className="font-bold">offices. </span></h1>
                <p className="text-[0.7rem] mt-10 text-blue-400 my-3">Make a call: +61 435 434 433</p>
                <button className="text-[0.7rem] bg-yellow-500 rounded-sm p-2 text-yellow-50 shadow=md font-semibold focus:ring-0 focus:outline-none">CHECK AVAILABILITY</button>
            </div>
            <div className="w-[18rem] md:w-[40rem] lg:w-[50rem] ml-[-7.5rem] md:ml-[1rem] md:mt-[-2rem]">
                <Image
                    src="/main.png" 
                    alt="cleaner" 
                    width={400} 
                    height={400}
                    objectFit="contain"
                    className=""
                   />
            </div>
        </div>
    )
}

export default Banner
