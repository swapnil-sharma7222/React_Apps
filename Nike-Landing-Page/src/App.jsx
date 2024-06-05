import { useState } from 'react'
import Navbar from './Components/NavBar/Navbar'
import Mainbody from "./Components/Mainbody/Mainbody";

function App() {
  return (
    <div className="body">
      <div className="header">
        <Navbar/>
        <Mainbody/>
      </div>
    </div>
  )
}

export default App
