import { useSelector } from 'react-redux'
import { motion } from "framer-motion"

function TotalPrice({handleQuestionaire, questionaire, setQuestionaire}) {
    const total = useSelector(state => state.cart.total)
    return (
        <div className="fixed bottom-0 z-1 w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 p-2">
            {/* <motion.div
                className="bg-white w-5 h-5"
                animate={{ rotate: 360 }}
                transition={{ duration: 2 }}>
                    
                </motion.div> */}
            <div className=" flex justify-between text-blue-500 font-semibold ">
                <h2>Total Price: ${total}</h2>
                <p className="cursor-pointer" onClick={handleQuestionaire}>Continue</p>
            </div>
        </div>
    )
    
}

export default TotalPrice
