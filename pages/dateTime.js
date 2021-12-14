import React, { useState, useEffect } from 'react'

import DatePicker from '../components/ui/DatePicker'
import { enGB } from 'date-fns/locale'
import { format } from 'date-fns'
import Slots from '../components/ui/Slots'

import { css } from "@emotion/react";
import CircleLoader from "react-spinners/CircleLoader";
import { addBookingDate, addTime } from '../redux/cartReducer'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux"



function dateTime() {
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const [loading, setLoading] = useState(false);

    const bookingDate = useSelector((state) => state.cart.bookingDate);
    const dispatch = useDispatch()
 

    const slots = [
        {
            id: "1",
            time: "7:00 AM"
        },
        {
            id: "2",
            time: "8:00 AM"
        },
        {
            id: "3",
            time: "9:00 AM"
        },
        {
            id: "4",
            time: "10:00 AM"
        },
        {
            id: "5",
            time: "11:00 AM"
        },
        {
            id: "6",
            time: "01:00 PM"
        },
        {
            id: "7",
            time: "2:00PM"
        },
        {
            id: "8",
            time: "3:00PM"
        },
    ]

    const override = css`
    border-color: white;
    height:1.8rem;
    width: 1.8rem;
    margin:auto;
    
  `;

    let [color, setColor] = useState("#63b5f6");

    const handleSubmit = () => {
        dispatch(addBookingDate(format(date, 'dd MMM yyyy', { locale: enGB })))
        dispatch(addTime((time)))

    }
    useEffect(() => {
       const name = () => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
       }
        date && name()

    }, [date]);
    console.log(time)

    return (
        <div className="text-center m-5 flex flex-col gap-2">
            <h1 className="font-semibold text-blue-500">Please Select a date and time</h1>
            <p className="text-gray-500 text-[0.8rem]">Available times are for the available slots for each day. We'll inform you prior if anything changes in the schedule.
            </p>
            <div className="flex flex-col mb-2 sm:w-1/2 sm:mx-auto">
                <div className="text-left text-sm py-4 flex gap-2 items-center ">
                    <p className="text-gray-500">{calendarIcon()}</p>
                    <p>Selected date :  <span className="font-semibold">{date ? format(date, 'dd MMM yyyy', { locale: enGB }) : 'None'}</span>. </p>
                </div>
                <div className="text-left text-sm flex gap-2">
                    <p className="text-gray-500">{timeIcon()}</p>
                    <p>Selected time : <span>{time ? time : "None"}</span> </p>
                </div>
            </div>

            <DatePicker date={date} onDateChange={setDate} startDate={date} />
            <div className="text-left my-4 sm:mx-auto">
                {!date ?
                    <h1 className="text-sm text-left">Please select a date to view time slots.</h1> :
                    <div>
                        <h2 className="text-sm text-left">Available times for <span className="text-blue-500">{format(date, 'dd MMM yyyy', { locale: enGB })}</span></h2>
                      {loading ? 
                      <CircleLoader color={color} css={override} size={30} />
                      :
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 my-2">
                            {slots.map((item) => (
                                <Slots key={item.id} time={item.time} setTime={setTime} active={time == item.time} />
                            ))}
                        </div>}
                    </div>

                }


            </div>
            <button className="bg-blue-500 p-2 text-gray-50 fixed bottom-0 w-full left-0 sm:w-24"
                    disabled={!date, !time }
                    onClick={handleSubmit}>Continue</button>
        </div>
    )
}

export default dateTime


function calendarIcon() {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        </div>
    )
}



function timeIcon() {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
    )
}



