import React from 'react'
import BounceLoader from "react-spinners/BounceLoader";
import { css } from "@emotion/react";




const override = css`
  display: block;
  margin:20px;
  
  text-align:center;
  color: black;
`;





function DropbackOverlay({ loading }) {
    return (
        <div className="absolute w-full h-screen z-10 flex justify-center">
            <div className="absolute z-20 top-0 flex flex-col items-center align-center justify-center my-auto
                    w-full h-screen m-auto">
                <h3 className='text-gray-100'>Please wait...</h3>
                <BounceLoader
                    css={override}
                    size={50}
                    color={'#123abc'}
                    loading={loading} />
                <p className='text-gray-50'>We are preparing your booking.</p>
            </div>


            <div className="w-full h-screen bg-gray-800 opacity-75">
            </div>
        </div>
    )
}

export default DropbackOverlay
