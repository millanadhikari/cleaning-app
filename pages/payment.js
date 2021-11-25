import StripeCheckout from "react-stripe-checkout"
import {useState, useEffect} from 'react'
import { useSelector } from "react-redux";
import axios from "axios"
import { useDispatch } from "react-redux"
import { addStripe} from '../redux/cartReducer'


import { useRouter } from 'next/router'
const KEY = "pk_test_51JmDMZIcMdVxu54qV5J8TAaDjYY8yixVO0TczRDK6QClzTAq6uHCac1ptfpR4ZIN7VHtqiOZs1IkngKTdnAXnwf4003T1qKltO"

function payment() {
    const products = useSelector((state) => state.products);
    const [stripeToken, setStripeToken] = useState(null)
    const router = useRouter()
    const dispatch = useDispatch()


    const onToken = (token) => {
        setStripeToken(token)
    }
    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post("http://localhost:3001/v1/payment",
                
                
                {
                    tokenId:stripeToken.id,
                    amount:2000,
                });

                router.push({
                    pathname:'/success',
                    stripeData: res.data,
                    products: products, 
                })
                dispatch(addStripe({stripeData:res.data}))

                
               
            } catch(err) {
                console.log(err)
            }
        }
        stripeToken && makeRequest()

    }, [stripeToken, router])
    return (
        <div>
            <StripeCheckout
                name="Wedo Cleaning Services"
                image=""
                billingAddress
                description = "Your payment total is"
                amount={2000}
                token={onToken}
                stripeKey={KEY}>
                <button>payment</button>
            </StripeCheckout>
        </div>
    )
}

export default payment
