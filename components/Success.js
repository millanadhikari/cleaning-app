import { useRouter } from 'next/router'
import { useEffect, useState } from "react";

import { useSelector } from "react-redux"
import {openNewBooking} from "../components/Booking/bookingAction"






const Success = () => {
    const router = useRouter()

    const data = useSelector((state) => state.cart.stripeData);
    const products = useSelector((state) => state.cart.products);


    const [booked, setBooked] = useState(false);

    useEffect(() => {
      
        const createBooking = async () => {
            const bookingObj = {
                products: products,
                address: data[0].stripeData.billing_details.address,
                name:data[0].stripeData.billing_details.name,
                email:data[0].stripeData.billing_details.email,
                phone:'0421545454',
                bookingDate: 11/21/2021,
                totalPrice:data[0].stripeData.billing_details.amount,
                paidStatus:true,
                jobStatus:"Job waiting to be assigned!",
                stripeData:data
            }
            try {
                const res = await openNewBooking(bookingObj)

                if(res.status === 'success') {
                    setBooked(!booked)
                }
                
            } catch {
               
             }
        };
        data[0].stripeData && createBooking()
    }, [products, data]);
    console.log(data)

    const handleRender = (data) => {
        return(
            <div>Ok Cha ta</div>
        )
    }


    return (
        <div>
            {booked ? 
            <div>
                <h1>You have succesfully booked the job.</h1>
                

                </div>
                :
                <p>Loading...</p>
                }
                {handleRender()}
                </div>
        
    )
}

export default Success
