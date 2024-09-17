import React from 'react'
import Banner from '../components/Banner'
import NewArrivals from '../components/NewArrivals'
import Topselling from '../components/Topselling'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
function Home() {
  return (
    <>
    <Nav></Nav>
   <Banner></Banner>
   <NewArrivals></NewArrivals>
    <Topselling></Topselling> 
  <Footer></Footer>
   
    </>
  )
}

export default Home