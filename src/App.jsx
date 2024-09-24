

import { useState } from 'react'
import Nav from "./components/Nav.jsx"
import { Route, Routes } from 'react-router-dom';
import Currencies from "./pages/Currencies.jsx";
import Main from "./pages/Main.jsx";
import Price from "./pages/Price.jsx";
import './App.css'
import Navbar from "./components/Nav.jsx"

export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className = "App">
        <Navbar />
        <Routes>
<Route path = "/" element ={<Main/>}/>
<Route path = "/currencies" element = {<Currencies />} />
<Route path = "/price/:symbol" element = {<Price />}/>

        </Routes>
        
      </div>
      
     
    </>
  )
}

// export default App;
