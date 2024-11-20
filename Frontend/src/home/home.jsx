import React from 'react'
import Freebook from '../components/Freebook'
import Navbar from '../components/navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer'
function home() {
  return (
    <>
    <Navbar />
    <Banner />
    <Freebook />
    <Footer />
    </>
  )
}

export default home
