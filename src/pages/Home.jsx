import React from 'react'
import Banner from '../components/Banner'
import NewArrivals from '../components/NewArrivals'
import Topselling from '../components/Topselling'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Filter from '../components/Filter'
import Search from '../pages/search'
import Fake from '../components/Fake'
import Textbox from '../components/Textbox'
function Home() {
  return (
    <>
    <Nav></Nav>
   <Banner></Banner>
   <NewArrivals></NewArrivals>
    <Topselling></Topselling> 
  <Footer></Footer>
   {/* <Filter></Filter> */}
   {/* <Search/> */}
   {/* <Textbox/> */}
    </>
  )
}

export default Home