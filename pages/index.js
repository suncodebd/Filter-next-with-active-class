import Head from 'next/head';
import Project from './Projects';


export default function Home() {
  return (
    <div >
      <Head>
        <title>SunCodeBd programer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   

   <div>
     <h1 className='hedding'>filter Gallary</h1>
     <Project/>
   </div>
      
    </div>
  )
}
