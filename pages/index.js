import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SelectService from '../components/SelectService'
import Trusts from '../components/Trusts'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <SelectService/>
      <Trusts/>
      <Footer/>
    </div>
  )
}
