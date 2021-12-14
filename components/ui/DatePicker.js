import React, { useState } from 'react'
import { enGB } from 'date-fns/locale'
import { getDay } from 'date-fns'
import { DatePickerCalendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'


export default function DatePicker({date, onDateChange}) {
    const modifiers = {
        disabled: date => getDay(date) === 0, // Disables Saturdays
        // highlight: date => getDay(date) === 2 // Highlights Tuesdays
      }

      const today = new Date()
      const tomorrow = new Date(today)
      tomorrow.setDate(tomorrow.getDate() + 1)
  return (
    <div className="w-full sm:w-[20rem] sm:mx-auto">
     
      <DatePickerCalendar date={date} onDateChange={onDateChange} locale={enGB} 
      modifiers={modifiers}
      minimumDate={tomorrow}
      minimumLength={1}
      format='dd MMM yyyy'
       />
    </div>
  )
}