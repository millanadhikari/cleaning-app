import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './cartReducer'
import loginReducer from './loginReducer'
import bookingReducer from '../components/Booking/bookingSlicer'


const store = configureStore({
    reducer: {
        cart: cartReducer,
        login: loginReducer,
        booking: bookingReducer,
    },
})


export default store 