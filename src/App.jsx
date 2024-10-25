import React from 'react'
import Navbars from './Navbar/Navbars'
import Section2 from './Section2/Section2'
import GroupCards from './GroupCards/GroupCards'
import OurProcess from './OurProcess/OurProcess'
import Rocketpage from './Rocketpage/Rocketpage'
import Section3 from './Section3/Section3'
import Section4 from './Section4/Section4'
import Section5 from './Section5/Section5'
import Footer from './Footer/Footer'
function App() {
  return (
    <div className='min-h-screen'>
      <Navbars/>
      <Section2/>
      <GroupCards/>
      <OurProcess/>
      <Rocketpage/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Footer/>
    </div>
  )
}

export default App
