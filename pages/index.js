import Head from 'next/head'
import Header from '../components/Header'
import SelectService from '../components/SelectService'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <SelectService/>
    </div>
  )
}
