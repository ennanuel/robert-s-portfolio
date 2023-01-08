import React, { useEffect, useRef } from 'react'
import { Front, Works, About } from '../components'

const Home = () => {
  const divRef = useRef()

  useEffect( () => {
    divRef.current.scrollIntoView({ behavior: "smooth"})
  }, [])

  return (
    <div ref={divRef}>
      <Front />
      <Works />
      <About />
    </div>
  )
}

export default Home
