import Head from 'next/head'
import Navbar from "../components/Navbar/Navbar"
import Banner from "../components/Banner/Banner"
export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      
      <style jsx global>{`
        html, body {
          padding: 0;
          margin: 0;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
