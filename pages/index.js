import Head from 'next/head'
import {useState} from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Modal from '../components/Modal'
import SelectService from '../components/SelectService'
import TopHeader from '../components/TopHeader'
import Banner from '../components/Banner'
import Trust from '../components/Trust'
import Benefits from '../components/Benefits'
import Howitworks from '../components/Howitworks'
import DownloadApp from '../components/DownloadApp'

export default function Home() {
  const [isOpen, setIsopen] = useState(false)
  return (
    <div className="h-screen flex flex-col overflow-x-hidden">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />

       
      </Head>
      {/* {isOpen && 

        <Modal setIsopen={setIsopen}
         />      
      }
      <Header/>
      <SelectService setIsopen={setIsopen}/>
      <Trusts/>
       */}

      {/* <Footer/> */}

       <TopHeader/>
       <Header/>
       <Banner/>
       <Trust/>
       <Benefits/>
       <Howitworks/>
       <DownloadApp/>

  



      
    </div>
  )
}
