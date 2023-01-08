import styled from "styled-components"
import { AiFillCaretDown } from "react-icons/ai"
import frontImage from "../assets/images/image2.jpg"

const Component = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
`

const FrontImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
`

const Intro = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
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
  return (
    <Component>
      <FrontImage src={frontImage} />
      <Intro>
        <Intro>
            <Title>I'm Robert,</Title>
            <Desc>
                A Digital Artist
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
