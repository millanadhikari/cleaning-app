import { useRouter } from 'next/router'
import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux"
import { openNewBooking } from "../components/Booking/bookingAction"
import { restSuccessMSg } from '../components/Booking/bookingSlicer'






const success = () => {
    const router = useRouter()
    const dispatch = useDispatch()

    const data = useSelector((state) => state.cart.stripeData);
    const products = useSelector((state) => state.cart.products);
    const totalPrice = useSelector((state) => state.cart.total)
    const initialFrmDt = {
        name: "a",
        email: "",
        address: [],
        phone: "",
        totalPrice: "",
        paidStatus: "",
        jobStatus: "",
        bookingDate: "",
        products: [],
        stripeData: []
    };
    const [frmData, setFrmData] = useState(initialFrmDt);


    const [booked, setBooked] = useState(false);

    const { isLoading, error, successMsg } = useSelector(
        (state) => state.booking
    );
    useEffect(() => {

        // const newBookingObj = {
        //     products: [],
        //     address: [],
        //     name: 'milan',
        //     email: 'milan@yhaoo.com',
        //     phone: '0421545454',
        //     bookingDate: "11/21/2021",
        //     totalPrice: '222',
        //     paidStatus: "true",
        //     jobStatus: "Job waiting to be assigned!",
        //     stripeData: '2'
        // }
        // const bookingObj = {
        //     products: products,
        //     address: data[0].stripeData.billing_details.address,
        //     name: data[0].stripeData.billing_details.name,
        //     email: data[0].stripeData.billing_details.email,
        //     phone: '0421545454',
        //     bookingDate: 11 / 21 / 2021,
        //     totalPrice: data[0].stripeData.billing_details.amount,
        //     paidStatus: true,
        //     jobStatus: "Job waiting to be assigned!",
        //     stripeData: data
        // }
        try {
            dispatch(openNewBooking({
                products: products,
                address: [],
                name: data[0].stripeData.billing_details.name,
                // email: data[0].stripeData.billing_details.email,
                phone: 421545454,
                bookingDate: '',
                totalPrice: totalPrice,
                paidStatus: true,
                jobStatus: "Job waiting to be assigned!",
                stripeData: data
            }))

        } catch (err) {
            console.log(err);
        }

        // return() => {
        //     successMsg && dispatch(restSuccessMSg())
        //     dispatch(openNewBooking({ frmData }))




                    successMsg && dispatch(restSuccessMSg())

    }, [dispatch, data])

    const handleRender = (data) => {
        return (
            <div>Ok Cha ta</div>
        )
    }


    return (
        <div>
            {restSuccessMSg ?
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

export default success
