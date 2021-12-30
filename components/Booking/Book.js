import ProductCard from '../Booking/ProductCard'
import TotalPrice from '../../components/TotalPrice'
import Questionaire from '../../components/Booking/multiform/Questionaire'
import { useState, useEffect, React } from 'react'
import { useSelector } from 'react-redux'
import { motion, AnimatePresence } from "framer-motion"
import ProductSkeleton from './ProductSkeleton'
import { Link } from 'react-scroll'
import {endoflease, houses } from '../../data/dummy.data'
import Details from './multibookingform/Details'
import Start from './multibookingform/Start'





const Book = ({ isOpen, setIsopen }) => {
    const [questionaire, setQuestionaire] = useState(false)
    const totalPrice = useSelector((state) => state.cart.total);
    const [loading, setLoading] = useState(false);


   


    const handleQuestionaire = () => {
        setQuestionaire(!questionaire)
    }

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);



    return (
        <div className="h-screen w-full z-30 flex">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="h-screen w-full bg-white"
                        key="secondModal"
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ x: 300, opacity: 0 }}
                    >
                        {totalPrice > 0 &&
                            <TotalPrice
                                handleQuestionaire={handleQuestionaire}
                                questionaire={questionaire}
                                setQuestionaire={setQuestionaire}
                            />
                        }

                        <div className="fixed w-full flex justify-between p-5 bg-gray-100 z-10">
                            <h1 className="text-blue-900 font-semibold">Book Online</h1>
                            <p className="cursor-pointer" onClick={() => setIsopen(!isOpen)}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </p>
                        </div>
                        <div className="fixed top-14 flex gap-4 bg-gray-100 cursor pointer shadow-2xl p-4 w-full border-red-700 z-10">
                            <Link smooth={true} className={`p-2 text-yellow-500 px-3 ring-1 ring-yellow-500 text-sm cursor-pointer rounded-sm text-yellow-50 focus:ring-0 focus:outline-none"`} to="apartments" spy={true} activeClass={`text-gray-100 bg-yellow-500`}>Apartments</Link>
                            <Link to="houses" spy={true} smooth={true} activeClass={`text-gray-100 bg-yellow-500`} className="text-yellow-500 text-sm ring-1 ring-yellow-500 p-2 px-3 rounded-sm focus:ring-0 focus:outline-none">Houses</Link>
                        </div>
                        <div id="apartments" className="pt-[8rem]">
                            <div className="">
                                <h1 className="text-lg font-semibold text-blue-900 p-4 cursor-pointer md:w-[58rem] mx-auto">End of Lease Cleaning</h1>

                                {loading ? <div className="grid sm:grid-rows-4 sm:gap-2 sm:grid-flow-col md:grid-rows-3 md:gap-4 md:w-[58rem] mx-auto"> {
                                    endoflease.map((data) => (

                                        <ProductSkeleton
                                            data={data} />))
                                } </div> :

                                    <div className="grid sm:grid-rows-4 sm:gap-2 sm:grid-flow-col md:grid-rows-3 md:gap-4 md:w-[58rem] mx-auto">
                                        {endoflease.map((data) => (
                                            <ProductCard
                                                data={data} />
                                        ))}</div>

                                }
                            </div>
                        </div>

                        <div id="houses" className="mt-[2rem]">
                            <div >
                                <h1 className="text-lg font-semibold text-blue-900 p-4  mx-auto md:w-[58rem] mx-auto cursor-pointer">Houses</h1>

                                {loading ? houses.map((data) => (
                                    <ProductSkeleton
                                        data={data} />)) :

                                    <div className="grid sm:grid-rows-4 sm:gap-2 sm:grid-flow-col md:grid-rows-3 md:gap-4 md:w-[58rem] mx-auto">
                                        {
                                            houses.map((data) => (
                                                <ProductCard
                                                    data={data} />
                                            ))}</div>
                                }
                            </div>
                        </div>




                    </motion.div>
                )}
            </AnimatePresence>

            {questionaire &&
                <Start handleQuestionaire={handleQuestionaire} />}
        </div>
    )
}

export default Book
    