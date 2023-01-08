import React, { useEffect, useRef } from 'react'
import { Header, Footer, Front, Works } from '../components'

const Home = () => {
  const divRef = useRef()

  useEffect( () => {
    divRef.current.scrollIntoView({ behavior: "smooth"})
  }, [])

  return (
    <div ref={divRef}>
      <Front />
      <Works />
    </div>
  )
}

export default Home
