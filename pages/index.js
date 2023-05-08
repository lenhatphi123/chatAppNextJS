import Head from 'next/head';
import Sidebar from './component/Sidebar'
export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Sidebar/>
    </div>
  )
}
