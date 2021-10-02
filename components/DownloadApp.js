

function DownloadApp() {
    return (
        <div className="bg-blue-900 text-blue-50 p-4 flex">
            <div className="flex flex-col gap-3 w-1/2">
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 text-[0.7rem] text-blue-300">
                        <p>------</p>
                        <p>SPARKLING HOME</p>
                    </div>
                    <span>
                        <h1 className="text-xl">A sparkling home</h1>
                        <h2 className="text-xl">is a few clicks away.</h2>
                    </span>
                </div>
                <div className="text-[0.7rem] flex flex-col gap-1 ">
                    <p>Leave your home in the hands of the experts.</p>
                    <p>100% Happiness Guaranteed</p>
                    <p>What are you waiting for?</p>
                </div>
            </div>
            <div className="h-40 w-80 rounded-sm bg-gray-100 text-gray-900 flex flex-col items-center">
                <div className="flex mt-4 items-center justify-center h-12 w-12 text-blue-400 font-semibold font-fancy text-[0.8rem] rounded-full bg-gray-200">
                    <h1 >We<span className="text-blue-900">Do</span></h1>
                </div>
                <div className="flex w-full justify-center items center bg-red-700">
                    <div className="w-1/2">
                        <img src="/applestore.png" alt="apple logo" className="h-10 w-20"/>
                       
                    </div>
                    <div className="">
                        <img src="/android.png" alt="android logo" className="h-1 w-40"/>
                      
                    </div>
                </div>

            </div>
        </div>
    )
}




export default DownloadApp
