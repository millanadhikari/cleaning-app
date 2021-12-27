import React, { useEffect } from 'react'
import { useForm, useStep } from "react-hooks-helper"
import Details from './Details'


const defaultData = {
    billing: {
        firstName: "Milan",
        lastName: "dfdf",
        address: 'dfdf d d d ',
        city: 'dfdfd ',
        state: 'nsw',
        post_code: '2121',
        phone: '054545454',
        email: 'dfdfd@yahoo.com',
        serviceChoosed: "End of Lease Clean",
        propertyType: "Studio",

    }
}

const steps = [
    { id: 'details', Component: Details },
    //     { id: 'steam' },
    //     { id: 'address' },
    //     { id: 'contact' },
    //     { id: 'review' },
    //     { id: 'submit' },

]




const Start = ({ handleQuestionaire}) => {
    const [formData, setForm] = useForm(defaultData);

    const { step, navigation } = useStep({
        steps,
        initialStep: 0
    })
    const { Component } = step;
    const props = { formData, setForm, navigation, handleQuestionaire }
    switch (step.id) {
        case "details":
            return <><Details {...props} />  </>
    }
    //     case "steam":
    //         return'name'
    //     case "address":
    //         return 'add'
    //     case "contact":
    //         return 'con'
    //     case "review":
    //         return 'rev'
    //     case "submit":
    //         return 'sub'
    // }

    return <Component {...props} />
}





export default Start
