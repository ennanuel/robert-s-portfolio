import styled from "styled-components"
import { AiFillCaretDown } from "react-icons/ai"
import { useEffect, useState } from "react"
import { works } from "../assets/data"

const Component = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    background: #444;
`

const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  transition: opacity 0.5s ease;
  opacity: 1;
  overflow: hidden;
`

const FrontImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`

const Intro = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
`

const Title = styled.h1`
    color: white;
    font-size: 60px;
    font-weight: 600;
`

const Desc = styled.p`
    color: gray;
    font-size: 40px;
    font-weight: 300;
    text-align: center;
`

const Red = styled.span`
    color: darkorange;
    opacity: 0.7;
`

const ScrollDown = styled.a`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: white;
    opacity: 0.5;
    cursor: pointer;
    transition: opacity, transform 0.5s ease;

    &:hover {
        opacity: 1;
        transform: translateX(-50%) translateY(-5px);
    }
`

const Front = () => {
  const images = works.slice(0, 5).map(work => work.image)
  const [index, setIndex] = useState(0)
  const [hide, setHide] = useState(false)

  useEffect( () => {
    const handleHeroImages = async () => {
      setHide(true)

      await setTimeout( () => { 
        setIndex( prev => prev === images.length - 1 ? 0 : prev + 1 )
        setHide(false)
      }, 500 )
    }

    let interval = setInterval(handleHeroImages, 6000)

    return () => clearInterval(interval)
  }, [index])

  return (
    <Component className="hero">
      <HeroContainer className={`${hide && "hide"}`}>
        <FrontImage src={images[index]} />
      </HeroContainer>
      <Intro>
        <Intro>
            <Title>I'm Robert,</Title>
            <Desc>
                <Red big={true}>"</Red>Welcome To The Mind Cloud!<Red big={true}>"</Red>
            </Desc>
        </Intro>
      </Intro>
      <ScrollDown href="#works">
        Scroll Down
        <AiFillCaretDown />
      </ScrollDown>
    </Component>
  )
}

export default Front
