import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Page2 from "./Components/Page2"
import Page3 from "./Components/Page3"
const App = () => {
  return (
    <div className="overflow-clip">
        <Navbar/>
        <Hero/>
        <Page2/>
        <Page3/>
    </div>
  )
}

export default App