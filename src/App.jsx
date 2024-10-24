import React from 'react'
import Navbars from './Navbar/Navbars'
import Section2 from './Section2/Section2'
import GroupCards from './GroupCards/GroupCards'
import OurProcess from './OurProcess/OurProcess'
import Rocketpage from './Rocketpage/Rocketpage'
import Section3 from './Section3/Section3'
import Section4 from './Section4/Section4'

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
    </div>
  )
}

export default App
