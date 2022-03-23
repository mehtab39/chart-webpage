import Head from 'next/head'
import Header from '../Components/Header/Header'
import Navbar from '../Components/Navbar/Navbar'
import Recentlyjoined from '../Components/Recentlyjoined/Recentyjoined'
import Summarydata from '../Components/Summary/Summarydata'
import {Graph} from '../Components/Charts/Graph'
import { Piechart } from '../Components/Charts/Piechart'
import Productcategories from '../Components/Productcategories/Productcategories'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
             <Header/>
             <div style={{display: 'flex'}}>
               <Navbar/>
               <div>
                   <Summarydata/>
                   <div style={{display: 'flex'}}>
                    <Graph/>
                    <Recentlyjoined/>
                   </div>
               </div>
               <div>
                  <Piechart/>
                  <Productcategories/>
               </div>
             </div>
     </main>
    </div>
  )
}
