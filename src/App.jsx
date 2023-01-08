import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import { Header, Footer } from "./components"
import { ArtWork, Home } from './pages'
import './App.css'

const App = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)

  return (
    <>
      <Header showMenu={showMenu} setShowMenu={setShowMenu} innerWidth={innerWidth} setInnerWidth={setInnerWidth} />
      <div className={`App ${(showMenu && innerWidth < 720) && 'moveleft'}`}> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artwork/:id" element={<ArtWork />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
