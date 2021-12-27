import React, { useState, useEffect } from 'react'
import DropbackOverlay from './ux/DropbackOverlay'
import Checkbox from '@mui/material/Checkbox';



function Details({handleQuestionaire}) {
    const [loading, setLoading] = useState(false)
    const [no, setNo] = useState(false)


    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, [])


    return (
        <div className="w-full fixed left-0 h-screen z-30">
           {loading ? <DropbackOverlay loading={loading}/>
            : 
            <div className="">
            <div className="absolute top-0 z-40 w-full h-screen text-red-900 bg-green-300
            sm:w-40 sm:h-40">
            <div className="mb-40">
                <h1 className="p-2 text-blue-700 cursor-pointer" 
                onClick={handleQuestionaire}
                >Back</h1>
                <div className="p-8">
                    <h1 className="text-xl">Is the end of lease clean for a furnished property ? </h1>
                    <div className="p-5">
                       
                        <div className="flex ">
                            <Checkbox
                                checked={no}
                                // onChange={(event) => { setNo(event.target.checked) }}
                           
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            <div className="flex flex-col justify-center align-center">
                                <h1>Yes, the property is furnished.</h1>


                            </div>
                        </div>

                    </div>
                </div>
                <button
                    className="fixed bottom-0 bg-blue-500 w-full p-2  text-gray-50"
                    // onClick={handleLogin}
                >Next</button>
                {/* <div className="w-full">
                    {steam &&
                        <SteamCarpet handleQuestionaire={handleLogin} />}
                </div> */}
            </div>
        </div>
        <div className="w-full h-screen bg-black opacity-25">
        </div>
        </div>}


        </div>
    )
}

export default Details
